import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { getProjects } from '../lib/projects';
import { SITE, LINE_LABEL, STATUS_LABEL } from '../data/site';
import { faqs } from '../data/faqs';

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

  const bloqueServicio = (s: (typeof services)[number]) => {
    const partes = [
      `### ${s.name}`,
      `URL: ${base}/servicios/${s.slug}/`,
      ``,
      s.plain,
      ``,
      `Promesa: ${s.promise}`,
      `Para quien es: ${s.idealFor}`,
      ``,
      `Situacion antes:`,
      ...s.contrast.before.map((t) => `- ${t}`),
      ``,
      `Situacion despues:`,
      ...s.contrast.after.map((t) => `- ${t}`),
      ``,
      `Que cambia:`,
      ...s.outcomes.map((o) => `- ${o.t}: ${o.d}`),
      ``,
      `Como se trabaja:`,
      ...s.process.map((p, i) => `${i + 1}. ${p.step}: ${p.detail}`),
      ``,
      `Que se entrega:`,
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
      `Linea: ${LINE_LABEL[d.line]} · Sector: ${d.sector} · Ciudad: ${d.city} · Año: ${d.year} · Estado: ${STATUS_LABEL[d.status]}`,
      ``,
      d.summary,
    ];
    if (d.context) partes.push('', `Contexto: ${d.context}`);
    if (d.delivered?.length) partes.push('', 'Entregado:', ...d.delivered.map((t) => `- ${t}`));
    if (d.impact?.length) partes.push('', 'Resultado:', ...d.impact.map((i) => `- ${i.v} ${i.l}`));
    if (d.pagespeed) {
      partes.push('', `PageSpeed movil despues de la optimizacion: ${d.pagespeed.mobile}/100.`);
    }
    return partes.join('\n');
  };

  const cuerpo = `# ${SITE.name} — contenido completo

> ${SITE.tagline} en ${SITE.city}.
> Actualizado: ${hoy}
> Fuente canonica: ${base}/

${SITE.name} conecta el ERP, el CRM, el correo y WhatsApp que una empresa ya usa a una capa de inteligencia artificial que consulta informacion, ejecuta operaciones y pide aprobacion humana antes de cualquier accion sensible. Tambien construye software a medida, sitios y catalogos, chatbots, campañas de Google Ads operadas por agentes y capacitacion.

Datos de la empresa:
- Nombre: ${SITE.name}
- Ubicacion: ${SITE.city}
- Cobertura: todo Mexico de forma remota, y proyectos en otros paises
- Correo: ${SITE.email}
- WhatsApp: +52 ${SITE.whatsapp.slice(2)}
- Direccion tecnica: ${SITE.founder}, ${SITE.founderRole}
- Primera asesoria: treinta minutos, sin costo y sin compromiso
- Tiempos de entrega: no se publican tiempos estandar; la fecha se acuerda en la asesoria con el alcance sobre la mesa
- Propiedad: el codigo, los repositorios, los servidores, los dominios y los accesos quedan a nombre del cliente

## Servicios

${services.map(bloqueServicio).join('\n\n')}

## Proyectos publicados (${projects.length})

${projects.map(bloqueProyecto).join('\n\n')}

## Preguntas frecuentes de la empresa

${faqs.map((f) => `P: ${f.q}\nR: ${f.a}`).join('\n\n')}
`;

  return new Response(cuerpo, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
