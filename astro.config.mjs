// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zulia.lat',
  build: {
    // El CSS de cada página son 45 KB en tres peticiones que arrancan a la vez
    // que la fuente y le quitan ancho de banda justo cuando el título espera
    // para repintarse. Inline: menos viajes y la fuente llega antes.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // Sin lastmod, Google no tiene señal de qué vale la pena volver a
      // rastrear y trata todo el sitio igual. Se usa la fecha del build porque
      // aquí cada despliegue lleva cambios; si se empieza a desplegar sin
      // tocar contenido, esta fecha deja de significar algo.
      lastmod: new Date(),
    }),
  ],
  redirects: {
    '/servicios/desarrollo-software-a-medida/': '/servicios/software-a-medida/',
    '/servicios/agentes-inteligencia-artificial/': '/servicios/capa-agentica/',
    '/servicios/automatizacion-procesos/': '/servicios/capa-agentica/',
    '/servicios/landing-pages-seo/': '/servicios/sitios-y-catalogos/',
    '/servicios/consultoria-arquitectura-tecnologica/': '/servicios/ingenieria-con-ia/',
  },
  vite: {
    server: {
      // Local previews shared through a tunnel while the redesign is in progress.
      allowedHosts: ['localhost', '127.0.0.1', '.ngrok-free.dev', '.ngrok-free.app', '.ngrok.app'],
    },
  },
});
