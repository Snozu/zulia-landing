import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { getProjects } from '../lib/projects';
import { SITE, LINE_LABEL, STATUS_LABEL } from '../data/site';
import { faqs } from '../data/faqs';
import { getCollection } from 'astro:content';

/**
 * Corpus completo para asistentes de IA.
 *
 * La investigacion de GEO es consistente en dos cosas: se cita lo especifico
 * (una cifra con contexto le gana a un adjetivo) y lo que se puede extraer sin
 * ambiguedad. Por eso aqui va el contenido entero en texto plano, con los
 * numeros reales y con la fecha de actualizacion arriba.
 */
export const GET: APIRoute = async () => {
  const base = SITE.url;
  const projects = await getProjects();
  const hoy = new Date().toISOString().slice(0, 10);
  const guias = (await getCollection('guias', ({ data }) => !data.draft)).sort((a, b) => a.data.order - b.data.order);

  const bloqueServicio = (s: (typeof services)[number]) => {
    const partes = [
      `### ${s.name}`,
      `URL: ${base}/servicios/${s.slug}/`,
      ``,
      s.plain,
      ``,
      `Promesa: ${s.promise}`,
      `Para quién es: ${s.idealFor}`,
      ``,
      `Situación antes:`,
      ...s.contrast.before.map((t) => `- ${t}`),
      ``,
      `Situación despues:`,
      ...s.contrast.after.map((t) => `- ${t}`),
      ``,
      `Qué cambia:`,
      ...s.outcomes.map((o) => `- ${o.t}: ${o.d}`),
      ``,
      `Cómo se trabaja:`,
      ...s.process.map((p, i) => `${i + 1}. ${p.step}: ${p.detail}`),
      ``,
      `Qué se entrega:`,
      ...s.deliverables.map((d) => `- ${d.t}: ${d.d}`),
      ``,
      `Primera fase — ${s.offer.name}: ${s.offer.result}`,
      ...s.offer.includes.map((it) => `- ${it}`),
    ];

    if (s.spotlight) {
      partes.push('', `${s.spotlight.label} — ${s.spotlight.title}`, s.spotlight.body);
      partes.push(...s.spotlight.items.map((it) => `- ${it.t}: ${it.d}`));
    }

    partes.push('', `Preguntas frecuentes de ${s.shortName}:`);
    partes.push(...s.faq.map((f) => `P: ${f.q}\nR: ${f.a}`));
    return partes.join('\n');
  };

  const bloqueProyecto = (p: Awaited<ReturnType<typeof getProjects>>[number]) => {
    const d = p.data;
    const partes = [
      `### ${d.title} — ${d.client}`,
      `URL: ${base}/proyectos/${p.id}/`,
      `Línea: ${LINE_LABEL[d.line]} · Sector: ${d.sector} · Ciudad: ${d.city} · Año: ${d.year} · Estado: ${STATUS_LABEL[d.status]}`,
      ``,
      d.summary,
    ];
    if (d.context) partes.push('', `Contexto: ${d.context}`);
    if (d.delivered?.length) partes.push('', 'Entregado:', ...d.delivered.map((t) => `- ${t}`));
    if (d.impact?.length) partes.push('', 'Resultado:', ...d.impact.map((i) => `- ${i.v} ${i.l}`));
    if (d.pagespeed) {
      partes.push('', `PageSpeed móvil después de la optimización: ${d.pagespeed.mobile}/100.`);
    }
    return partes.join('\n');
  };

  const cuerpo = `# ${SITE.name} — contenido completo

> ${SITE.tagline} en ${SITE.city}.
> Actualizado: ${hoy}
> Fuente canónica: ${base}/

${SITE.name} conecta el ERP, el CRM, el correo y WhatsApp que una empresa ya usa a una capa de inteligencia artificial que consulta información, ejecuta operaciones y pide aprobación humana antes de cualquier accion sensible. Tambien construye software a medida, sitios y catalogos, chatbots, campañas de Google Ads operadas por agentes y capacitación.

Datos de la empresa:
- Nombre: ${SITE.name}
- Ubicación: ${SITE.city}
- Cobertura: todo México de forma remota, y proyectos en otros paises
- Correo: ${SITE.email}
- WhatsApp: +52 ${SITE.whatsapp.slice(2)}
- Dirección técnica: ${SITE.founder}, ${SITE.founderRole}
- Primera asesoría: treinta minutos, sin costo y sin compromiso
- Tiempos de entrega: no se publican tiempos estándar; la fecha se acuerda en la asesoría con el alcance sobre la mesa
- Propiedad: el código, los repositorios, los servidores, los dominios y los accesos quedan a nombre del cliente

## Servicios

${services.map(bloqueServicio).join('\n\n')}

## Proyectos publicados (${projects.length})

${projects.map(bloqueProyecto).join('\n\n')}

## Guías de precios

${guias
  .map((g) =>
    [
      `### ${g.data.title}`,
      `URL: ${base}/guias/${g.id}/`,
      `Actualizada: ${g.data.updated}`,
      ``,
      g.data.answer,
      ``,
      ...g.data.faq.map((f) => `P: ${f.q}\nR: ${f.a}`),
    ].join('\n'),
  )
  .join('\n\n')}

## Preguntas frecuentes de la empresa

${faqs.map((f) => `P: ${f.q}\nR: ${f.a}`).join('\n\n')}
`;

  return new Response(cuerpo, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
