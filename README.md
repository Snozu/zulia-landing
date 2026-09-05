# ZulIA, sitio comercial

Sitio de [zulia.lat](https://zulia.lat/): consultoría de software, automatización e inteligencia artificial en Monterrey. Construido con Astro 5, sin framework de UI en las páginas principales.

## Estructura

- `/` home: capa agéntica, proyectos destacados, cinco líneas de servicio, Semilla y cursos, método, cotizar.
- `/servicios/` y una página por línea (`src/data/services.ts`).
- `/proyectos/` con filtro por línea y una página por caso. Los casos son archivos Markdown en `src/content/projects/` validados por `src/content.config.ts`.
- `/semilla/` producto propio. `/cursos/` puente a cursos.zulia.lat. `/cotizar/` formulario de cuatro pasos. `/nosotros/`.
- Configuración central (navegación, CTA, contacto, logos) en `src/data/site.ts`.
- Reglas de diseño en `docs/design-system.md`. Brief del rediseño en `docs/design-brief.md`.

## Agregar un proyecto

Crea `src/content/projects/<slug>.md` con el frontmatter que exige el esquema (título, cliente, sector, ciudad, año, línea, estado, rol, resumen, problema, qué se construyó, stack, resultado). La captura va en `public/projects/<slug>.webp` y se referencia en `cover`. Home, servicios y portafolio se actualizan solos.

## Desarrollo

```sh
npm install
npm run dev
```

El servidor local abre en `http://localhost:4321`.

## Build

```sh
rm -rf dist .astro && npm run build
npm run preview
```

El resultado estático se genera en `dist/` y se sirve con el contenedor Docker del proyecto. Las variables `PUBLIC_*` se hornean en el build (ver `.env.example`).

## Después de publicar

1. Verificar `https://zulia.lat/sitemap-index.xml`.
2. Enviar el sitemap desde Google Search Console.
3. Revisar que las redirecciones de los slugs antiguos de servicios respondan 301.
