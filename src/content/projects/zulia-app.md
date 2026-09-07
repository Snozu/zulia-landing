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
context: "El costo de las herramientas por marca crece rápido cuando operas varias: cada CRM cobra por asiento y por empresa. Construir la base propia también nos servía para estandarizar cómo desplegamos aplicaciones multiempresa, que era el conocimiento que de verdad nos hacía falta."
built:
  - "Backend con autenticación por empresa y API REST"
  - "Frontend con panel por tenant"
  - "Flujos de automatización con n8n conectados por webhooks"
  - "Despliegue con Docker y Traefik en VPS"
howItWorks:
  - step: "Cada marca es una cuenta aislada"
    detail: "Los datos de una empresa no se ven desde otra, aunque compartan el mismo sistema y el mismo servidor."
  - step: "Los leads entran a un solo lugar"
    detail: "De formularios y campañas hacia el panel, sin depender de que alguien copie y pegue."
  - step: "El contenido se programa desde ahí"
    detail: "Publicaciones planeadas por marca en el mismo lugar donde se ven los leads."
  - step: "Lo repetitivo se automatiza"
    detail: "Flujos conectados por webhooks se encargan de lo que no necesita a una persona: avisos, altas, sincronizaciones."
delivered:
  - "Base multiempresa con autenticación y aislamiento de datos por cuenta"
  - "Panel por marca para leads y programación de contenido"
  - "Automatizaciones conectadas por webhooks"
  - "Patrón de despliegue con Docker y Traefik reutilizado después en proyectos de cliente"
stack:
  - "Node"
  - "Express"
  - "Prisma"
  - "Supabase"
  - "Next.js 15"
  - "shadcn/ui"
  - "n8n"
outcome: "Base interna en uso para operar marcas propias."
fits:
  - "Operas varias marcas o unidades de negocio y pagas una herramienta por cada una"
  - "Los leads llegan por varios canales y nadie los concentra"
  - "Necesitas que cada cuenta vea solo lo suyo dentro del mismo sistema"
  - "Quieres una base propia en lugar de encadenarte a la suscripción de un tercero"
pitch: "Si operas varias marcas, el patrón multiempresa es el que decide si un sistema propio te sale más barato que las suscripciones. Este lo construimos primero para nosotros y hoy es la base con la que desplegamos aplicaciones de varios clientes."
---

El proyecto sirvió para estandarizar cómo desplegamos aplicaciones multiempresa con Docker y Traefik, patrón que luego reutilizamos en clientes.

Lo mostramos aquí precisamente por eso: es infraestructura interna, no un producto que vendamos, pero es la razón por la que un cliente nuevo no paga el aprendizaje de cómo se aísla una cuenta de otra o cómo se sirven varios dominios desde un mismo servidor.
