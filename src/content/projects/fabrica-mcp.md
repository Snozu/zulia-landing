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
context: "Sin esta pieza, cada vez que un equipo quería que su asistente de IA consultara un sistema interno tenía que abrir un proyecto de integración: semanas de trabajo, un conector distinto por sistema y ninguna regla común sobre permisos. Con decenas de APIs, ese camino no escala."
built:
  - "Importar una especificación OpenAPI y generar herramientas MCP automáticamente"
  - "Curación: renombrar, ocultar y documentar herramientas antes de publicar"
  - "Autenticación OAuth 2.0 y versionado de cada servidor publicado"
  - "Conectable desde Cursor, Claude Desktop o cualquier host compatible en minutos"
  - "Decisiones de arquitectura documentadas (acceso, autenticación, versionado, granularidad, memoria)"
howItWorks:
  - step: "Se carga la documentación de la API"
    detail: "Casi toda API moderna ya tiene un archivo que describe qué operaciones expone. Ese archivo es la entrada; no hay que escribir nada."
  - step: "Se generan las herramientas solas"
    detail: "Cada operación de la API se convierte automáticamente en una herramienta que un agente de IA puede usar."
  - step: "Alguien decide qué se publica"
    detail: "Antes de salir, una persona revisa la lista: oculta lo que no debe exponerse, renombra lo que se entiende mal y documenta lo que el agente necesita saber para usarlo bien."
  - step: "Se publica con llave"
    detail: "El servidor sale con autenticación estándar y con versión. Cada agente entra con las credenciales y permisos del sistema de origen, no con un acceso maestro."
  - step: "Se conecta en minutos"
    detail: "Desde Cursor, Claude Desktop o cualquier herramienta compatible, el equipo agrega el servidor y sus agentes ya pueden consultar ese sistema."
delivered:
  - "Plataforma para publicar servidores MCP a partir de especificaciones OpenAPI"
  - "Control de qué operación se expone, con qué nombre y con qué documentación"
  - "Autenticación OAuth 2.0 y versionado por servidor publicado"
  - "Seis registros de decisión de arquitectura como documentación viva del sistema"
stack:
  - "Node 22"
  - "TypeScript"
  - "Fastify"
  - "Docker"
  - "Google Cloud Build"
  - "OpenSpec"
outcome: "Una API pasa de documento a servidor MCP publicado en menos de quince minutos, con las credenciales del sistema de origen."
fits:
  - "Tienes varios sistemas internos con API y quieres que los asistentes de IA del equipo los consulten"
  - "Cada integración nueva hoy es un proyecto y no tienes forma de sostener ese ritmo"
  - "Necesitas que cada agente entre con los permisos del usuario, no con una llave maestra"
  - "Ya usan Claude Code, Cursor o Copilot y el freno es que los agentes no ven los datos reales"
pitch: "La versión pequeña de esto cabe en una empresa mediana: un solo servidor MCP sobre tu sistema principal, con las operaciones que tú decidas y los permisos que ya existen. Eso es lo que convierte a un asistente genérico en uno que sabe de tu negocio."
---

El flujo es importar, generar herramientas, curar y publicar. Lo que hace distinto al proyecto es el trabajo previo de arquitectura: seis registros de decisión cubren validación de acceso, autenticación, versionado, granularidad de herramientas, servidores sin estado y formas de disponibilidad del host.

La granularidad es la decisión menos obvia y la que más pesa. Una API con cien operaciones no se convierte en cien herramientas útiles: un agente con demasiadas opciones elige mal. Por eso hay un paso de curación humana antes de publicar, y por eso el proyecto no es solo un generador automático.

Es la pieza que permite que la capa agéntica de una empresa grande crezca sin que cada integración sea un proyecto.
