// Semilla · servicio de captura de leads
// Recibe el registro del formulario, guarda el lead y manda el correo de bienvenida.
// Sin dependencias: Node 18+ (usa fetch nativo). Corre en tu VPS detrás de Traefik.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = Number(process.env.PORT || 8080);
const DATA_DIR = process.env.DATA_DIR || '/data';
const LEADS_FILE = path.join(DATA_DIR, 'leads.jsonl');

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const LEAD_FROM = process.env.LEAD_FROM || 'Semilla ZulIA <semilla@zulia.lat>';
const LEAD_NOTIFY = process.env.LEAD_NOTIFY || ''; // opcional: te avisa a ti de cada lead
const LEAD_COUNT_TOKEN = process.env.LEAD_COUNT_TOKEN || '';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY = 8 * 1024; // 8 KB
const RATE_MAX = 5; // máx. envíos por IP
const RATE_WINDOW = 60_000; // por minuto

// ---------- correo de bienvenida ----------
const SUBJECT = 'Tu primera Semilla 🌱';
const TEXT = `Hola,

Gracias por interesarte en Semilla.

No te vamos a mandar un PDF genérico ni una cadena de correos diarios. Primero queremos darte algo que puedas usar: un mapa breve para diseñar una campaña de prospección B2B con criterio.

La idea es sencilla:
1. definir a quién sí vale la pena buscar;
2. investigar antes de escribir;
3. dar seguimiento sin perseguir;
4. pasar la conversación al humano cuando existe una señal real.

Eso es lo que Semilla está aprendiendo a operar todos los días para que tu equipo se concentre en conversar, proponer y cerrar.

Pronto te compartiremos el mapa y te avisaremos cuando abramos la primera cosecha.

— ZulIA`;

const HTML = `<!doctype html><html lang="es"><body style="margin:0;background:#f3f5f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0f1113;line-height:1.6">
  <div style="max-width:520px;margin:0 auto;padding:32px 24px">
    <div style="font-size:22px;font-weight:800;letter-spacing:-.03em;color:#0f1113">Zul<span style="color:#2f6bff">IA</span> · Semilla</div>
    <div style="height:1px;background:#e2e5e8;margin:20px 0"></div>
    <p style="margin:0 0 14px">Hola,</p>
    <p style="margin:0 0 14px">Gracias por interesarte en <strong>Semilla</strong>.</p>
    <p style="margin:0 0 14px">No te vamos a mandar un PDF genérico ni una cadena de correos diarios. Primero queremos darte algo que puedas usar: un mapa breve para diseñar una campaña de prospección B2B con criterio.</p>
    <p style="margin:0 0 8px">La idea es sencilla:</p>
    <ol style="margin:0 0 14px;padding-left:20px;color:#3a4048">
      <li>definir a quién sí vale la pena buscar;</li>
      <li>investigar antes de escribir;</li>
      <li>dar seguimiento sin perseguir;</li>
      <li>pasar la conversación al humano cuando existe una señal real.</li>
    </ol>
    <p style="margin:0 0 14px">Eso es lo que Semilla está aprendiendo a operar todos los días para que tu equipo se concentre en conversar, proponer y cerrar.</p>
    <p style="margin:0 0 20px">Pronto te compartiremos el mapa y te avisaremos cuando abramos la primera cosecha.</p>
    <p style="margin:0;color:#636a74">— ZulIA</p>
    <div style="height:1px;background:#e2e5e8;margin:24px 0 12px"></div>
    <p style="margin:0;font-size:12px;color:#8a919b">Recibes este correo porque pediste acceso a la demo de Semilla en zulia.lat. Si no fuiste tú, ignóralo.</p>
  </div>
</body></html>`;

// ---------- utilidades ----------
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > RATE_MAX;
}

function alreadyRegistered(email) {
  try {
    const data = fs.readFileSync(LEADS_FILE, 'utf8');
    return data.split('\n').some((line) => line.includes(`"email":"${email}"`));
  } catch {
    return false;
  }
}

function saveLead(rec) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.appendFileSync(LEADS_FILE, JSON.stringify(rec) + '\n');
}

function countLeads() {
  try {
    const data = fs.readFileSync(LEADS_FILE, 'utf8').trim();
    return data ? data.split('\n').length : 0;
  } catch {
    return 0;
  }
}

async function sendEmail(to, subject, html, text) {
  if (!RESEND_API_KEY) {
    console.warn('[semilla-lead] RESEND_API_KEY no configurada — no se envía correo a', to);
    return;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: LEAD_FROM, to, subject, html, text }),
  });
  if (!res.ok) throw new Error(`resend ${res.status}: ${await res.text()}`);
}

function cors(req, res) {
  const origin = req.headers.origin;
  if (!ALLOWED_ORIGIN || origin === ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', origin || ALLOWED_ORIGIN || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');
}

function json(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
}

// ---------- servidor ----------
const server = http.createServer((req, res) => {
  cors(req, res);
  const url = new URL(req.url, 'http://localhost');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // Conteo de leads (protegido con token)
  if (req.method === 'GET' && url.pathname === '/api/lead/count') {
    if (!LEAD_COUNT_TOKEN || url.searchParams.get('token') !== LEAD_COUNT_TOKEN) {
      return json(res, 401, { error: 'no autorizado' });
    }
    return json(res, 200, { count: countLeads() });
  }

  // Healthcheck
  if (req.method === 'GET' && url.pathname === '/api/lead/health') {
    return json(res, 200, { ok: true });
  }

  if (req.method === 'POST' && url.pathname === '/api/lead') {
    // IP real detrás de Traefik: usamos x-real-ip (lo pone el proxy) o la ÚLTIMA entrada de
    // x-forwarded-for (la que agrega Traefik), no la primera — que el cliente puede falsear.
    const xff = (req.headers['x-forwarded-for'] || '').toString().split(',').map((s) => s.trim()).filter(Boolean);
    const ip = (req.headers['x-real-ip'] || '').toString().trim() || xff[xff.length - 1] || req.socket.remoteAddress || 'unknown';

    if (rateLimited(ip)) return json(res, 429, { error: 'demasiados intentos, espera un momento' });

    let body = '';
    let tooBig = false;
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > MAX_BODY) { tooBig = true; req.destroy(); }
    });
    req.on('end', async () => {
      if (tooBig) return json(res, 413, { error: 'payload muy grande' });

      let data;
      try { data = JSON.parse(body || '{}'); } catch { return json(res, 400, { error: 'json inválido' }); }

      // Honeypot: si viene lleno, es bot → responde ok pero no hace nada.
      if (data.website) return json(res, 200, { ok: true });

      const email = String(data.email || '').trim().toLowerCase();
      if (!EMAIL_RE.test(email) || email.length > 254) {
        return json(res, 400, { error: 'correo inválido' });
      }

      // Idempotente: si ya está registrado, no reenvía ni duplica.
      if (alreadyRegistered(email)) return json(res, 200, { ok: true, duplicate: true });

      const rec = {
        email,
        source: String(data.source || 'semilla-landing').slice(0, 64),
        createdAt: new Date().toISOString(),
        ip,
      };

      try {
        saveLead(rec);
        await sendEmail(email, SUBJECT, HTML, TEXT);
        if (LEAD_NOTIFY) {
          await sendEmail(LEAD_NOTIFY, `Nuevo lead Semilla: ${email}`,
            `<p>Nuevo lead: <strong>${email}</strong></p><p>source: ${rec.source}<br>fecha: ${rec.createdAt}</p>`,
            `Nuevo lead: ${email}\nsource: ${rec.source}\nfecha: ${rec.createdAt}`).catch(() => {});
        }
        return json(res, 200, { ok: true });
      } catch (err) {
        console.error('[semilla-lead] error:', err.message);
        // El lead ya se guardó; el correo falló. Respondemos ok para no perder el lead.
        return json(res, 200, { ok: true, emailQueued: false });
      }
    });
    return;
  }

  json(res, 404, { error: 'no encontrado' });
});

server.listen(PORT, () => {
  console.log(`[semilla-lead] escuchando en :${PORT} · data=${DATA_DIR}`);
});
