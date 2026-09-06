---
title: "Relay"
client: "iKom"
sector: "Operaciones y atención a clientes"
city: "Monterrey"
year: 2026
line: "agentica"
status: "piloto"
role: "cliente"
cover: "/projects/relay-ikom.webp"
coverAlt: "Consola de operaciones de Relay con el panel de actividad de agentes y la base de conocimiento"
featured: true
order: 2
summary: "Agente de operaciones que responde desde la base de datos y las políticas propias de la empresa, y se detiene ante una persona antes de gastar un centavo."
problem: "La respuesta a “¿por qué no ha llegado el pedido de este cliente y le debemos dinero?” vivía en dos lugares: la base de datos de pedidos y un documento de políticas que nadie releía. Cerrar esa brecha a mano era la mayor parte del trabajo de soporte."
built:
  - "Un orquestador y dos especialistas (operaciones y políticas) con nueve herramientas sobre PostgreSQL"
  - "Regla dura: el modelo no puede afirmar nada que no venga de una herramienta; cada llamada se ve en pantalla con su latencia real"
  - "Búsqueda semántica sobre documentos de política con pgvector y citas verificables"
  - "Una sola acción de escritura (reembolso), siempre con aprobación humana"
  - "Servidor MCP: Claude Desktop, Cursor u otro agente usan las mismas herramientas de lectura"
stack:
  - "Next.js 16"
  - "Vercel AI SDK"
  - "PostgreSQL 17 + pgvector"
  - "Prisma"
  - "MCP"
  - "TypeScript"
outcome: "Soporte responde con datos y política citada en la misma pantalla, y la única acción con dinero pasa por una persona."
---

Relay cierra la brecha entre el sistema de pedidos y el documento de políticas, y muestra su trabajo mientras lo hace. Cada respuesta enseña qué herramienta consultó, con qué parámetros y cuánto tardó.

El diseño de permisos es el centro del proyecto: siete herramientas de lectura para el especialista de operaciones, búsqueda documental para el de políticas, y exactamente una escritura con compuerta humana. Al exponerse también como servidor MCP, las mismas herramientas quedan disponibles desde el asistente de IA que el equipo ya usa.
