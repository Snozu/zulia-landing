// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zulia.lat',
  integrations: [sitemap()],
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
