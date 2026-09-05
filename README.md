# ZulIA — sitio comercial

Landing y páginas de servicio de [zulia.lat](https://zulia.lat/), construidas con Astro y Tailwind CSS.

## Qué incluye

- Página principal orientada a conversión.
- Páginas indexables para cinco líneas de servicio.
- Metadatos SEO, canonical, Open Graph y datos estructurados.
- `robots.txt` y sitemap generado durante el build.
- Formulario que prepara un mensaje de WhatsApp sin enviar datos automáticamente.
- Tema claro/oscuro, navegación responsive y soporte para movimiento reducido.

## Desarrollo

```sh
npm install
npm run dev
```

El servidor local abre en `http://localhost:4321`.

## Verificación y build

```sh
npm run build
npm run preview
```

El resultado estático se genera en `dist/` y puede servirse con el contenedor Docker incluido en el proyecto.

## Después de publicar

1. Verificar `https://zulia.lat/sitemap-index.xml`.
2. Enviar el sitemap desde Google Search Console.
3. Solicitar indexación de la portada y de cada página de servicio.
4. Conectar analítica y registrar clics al CTA de WhatsApp.
