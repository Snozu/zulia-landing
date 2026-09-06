---
title: "Fábrica de servidores MCP"
client: "Fintech de pagos (nombre reservado)"
sector: "Fintech"
city: "Lima"
year: 2026
line: "agentica"
status: "desarrollo"
role: "cliente"
order: 3
summary: "Convierte cualquier API documentada en OpenAPI en un servidor MCP seguro, versionado y publicado, sin escribir código."
problem: "La empresa tiene decenas de APIs internas y quiere que sus agentes de IA las usen con las credenciales y permisos de cada sistema, sin escribir un conector a mano por cada una."
built:
  - "Importar una especificación OpenAPI y generar herramientas MCP automáticamente"
  - "Curación: renombrar, ocultar y documentar herramientas antes de publicar"
  - "Autenticación OAuth 2.0 y versionado de cada servidor publicado"
  - "Conectable desde Cursor, Claude Desktop o cualquier host compatible en minutos"
  - "Decisiones de arquitectura documentadas (acceso, autenticación, versionado, granularidad, memoria)"
stack:
  - "Node 22"
  - "TypeScript"
  - "Fastify"
  - "Docker"
  - "Google Cloud Build"
  - "OpenSpec"
outcome: "Una API pasa de documento a servidor MCP publicado en menos de quince minutos, con las credenciales del sistema de origen."
---

El flujo es importar, generar herramientas, curar y publicar. Lo que hace distinto al proyecto es el trabajo previo de arquitectura: seis registros de decisión cubren validación de acceso, autenticación, versionado, granularidad de herramientas, servidores sin estado y formas de disponibilidad del host.

Es la pieza que permite que la capa agéntica de una empresa grande crezca sin que cada integración sea un proyecto.
