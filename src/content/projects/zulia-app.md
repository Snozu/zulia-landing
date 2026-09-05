---
title: "Zulia App"
client: "ZulIA"
sector: "Marketing y ventas"
city: "Monterrey"
year: 2025
line: "software"
status: "interno"
role: "propio"
order: 14
summary: "Plataforma SaaS multiempresa para gestión de leads y programación de contenido, con automatización vía n8n."
problem: "Necesitábamos una base propia para operar leads y contenido de varias marcas sin pagar un CRM por cada una."
built:
  - "Backend con autenticación por empresa y API REST"
  - "Frontend con panel por tenant"
  - "Flujos de automatización con n8n conectados por webhooks"
  - "Despliegue con Docker y Traefik en VPS"
stack:
  - "Node"
  - "Express"
  - "Prisma"
  - "Supabase"
  - "Next.js 15"
  - "shadcn/ui"
  - "n8n"
outcome: "Base interna en uso para operar marcas propias."
---

El proyecto sirvió para estandarizar cómo desplegamos aplicaciones multiempresa con Docker y Traefik, patrón que luego reutilizamos en clientes.
