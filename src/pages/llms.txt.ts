import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { getProjects } from '../lib/projects';
import { getCollection } from 'astro:content';
import { SITE, LINE_LABEL } from '../data/site';

/**
 * Indice para asistentes de IA (llms.txt).
 *
 * Se genera en el build, no se escribe a mano: la version estatica que habia en
 * public/ se quedo sin la linea de chatbots, con el correo viejo y con un
 * llms-full.txt identico al indice. Un archivo que solo leen las maquinas es
 * justo el que nadie recuerda actualizar.
 */
export const GET: APIRoute = async () => {
  const base = SITE.url;
  const projects = await getProjects();
  const guias = (await getCollection('guias', ({ data }) => !data.draft)).sort((a, b) => a.data.order - b.data.order);
  const porLinea = (line: string) => projects.filter((p) => p.data.line === line);

  const lineas = services
    .map((s) => `- [${s.name}](${base}/servicios/${s.slug}/): ${s.plain.replace(/^En corto:\s*/, '')}`)
    .join('\n');

  const casos = services
    .filter((s) => porLinea(s.line).length > 0)
    .map((s) => `- ${LINE_LABEL[s.line]}: ${porLinea(s.line).map((p) => `${p.data.title} (${p.data.client})`).join(', ')}.`)
    .join('\n');

  const cuerpo = `# ${SITE.name}

> ${SITE.tagline} en ${SITE.city}. Conectamos el ERP, el CRM, el correo y WhatsApp que una empresa ya usa a una capa de IA que consulta, ejecuta y pide aprobación humana cuando toca. La primera asesoría es de treinta minutos y sin costo.

Contenido completo y citable: ${base}/llms-full.txt

## Servicios

${lineas}

## Proyectos

- [Todos los proyectos](${base}/proyectos/): ${projects.length} casos publicados con cliente, sector, ciudad, año, estado y resultado.
${casos}

## Guías de precios

${guias.map((g) => `- [${g.data.title}](${base}/guias/${g.id}/): ${g.data.answer}`).join('\n')}

## Producto propio

- [Semilla](${base}/semilla/): prospección B2B operada por agentes. Pre-lanzamiento.

## Empresa

- [Nosotros](${base}/nosotros/): dirección técnica, principios y preguntas frecuentes.
- [Cotizar](${base}/cotizar/): formulario de cuatro pasos.
- Contacto: ${SITE.email} · WhatsApp +52 ${SITE.whatsapp.slice(2)}
- Ubicación: ${SITE.city}. Se trabaja de forma remota en todo México y en otros paises.
`;

  return new Response(cuerpo, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
