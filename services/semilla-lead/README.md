# semilla-lead

Micro-servicio (Node, sin dependencias) que recibe el registro del formulario de Semilla,
**guarda el lead** y **manda el correo de bienvenida**. Corre en tu VPS junto al landing,
detrás de Traefik, bajo la ruta `https://zulia.lat/api/lead` (mismo dominio → sin CORS).

## Arquitectura

```
Navegador (zulia.lat/semilla)
   │  POST https://zulia.lat/api/lead   { email, source, website(honeypot), createdAt }
   ▼
Traefik  (PathPrefix /api/lead, priority 100)
   ▼
contenedor semilla-lead (Node :8080)
   ├─ valida email + honeypot + rate limit (5/min por IP)
   ├─ guarda en /data/leads.jsonl  (volumen semilla-lead-data)
   └─ manda el correo con la API de Resend (HTTPS)
```

## Puesta en marcha (una sola vez)

### 1. Verifica el dominio en Resend (para que el correo NO caiga en spam)
1. Crea cuenta en https://resend.com → **API Keys** → copia la key (`re_...`).
2. **Domains → Add Domain** → `zulia.lat` (o subdominio `mail.zulia.lat`).
3. Resend te da 3-4 registros DNS (**SPF / DKIM / DMARC**). Pégalos en tu DNS (donde administres `zulia.lat`). Espera a que quede "Verified".
4. Usa un remitente de ese dominio: `Semilla ZulIA <semilla@zulia.lat>`.

### 2. Configura las variables en el VPS
```bash
cd services/semilla-lead
cp .env.example .env
nano .env    # llena RESEND_API_KEY, LEAD_FROM, LEAD_NOTIFY, LEAD_COUNT_TOKEN
```

### 3. Levanta todo
Desde la raíz del repo, en el VPS:
```bash
docker compose up -d --build
```
Esto construye el landing (con `PUBLIC_SEMILLA_LEAD_ENDPOINT=https://zulia.lat/api/lead`
ya horneado) **y** el servicio de leads. Traefik enruta `/api/lead` al servicio.

## Probar
```bash
# healthcheck
curl https://zulia.lat/api/lead/health          # {"ok":true}

# registro de prueba (te debe llegar el correo)
curl -X POST https://zulia.lat/api/lead \
  -H 'Content-Type: application/json' \
  -d '{"email":"tu-correo@gmail.com","source":"test"}'

# cuántos leads van (protegido con el token del .env)
curl "https://zulia.lat/api/lead/count?token=EL_TOKEN"   # {"count":N}
```

## Ver / exportar los leads
Viven en el volumen `semilla-lead-data` → `/data/leads.jsonl` (una línea JSON por lead).
```bash
docker compose exec semilla-lead cat /data/leads.jsonl
docker compose exec semilla-lead sh -c 'wc -l < /data/leads.jsonl'   # conteo rápido
```

## Notas
- **Sin dependencias npm** → imagen mínima, build instantáneo.
- **Idempotente:** si un correo ya está registrado, no lo duplica ni reenvía.
- **Anti-spam:** honeypot (campo `website` oculto) + rate limit por IP.
- Si `RESEND_API_KEY` no está, el lead se guarda igual pero no se manda correo (útil para probar).
- **Nunca subas `.env` al repo** (ya está en `.gitignore`).
