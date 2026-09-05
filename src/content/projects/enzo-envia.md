---
title: "Enzo"
client: "Envia.com"
sector: "Logística"
city: "Monterrey"
year: 2025
line: "agentica"
status: "produccion"
role: "equipo"
order: 6
summary: "Asistente logístico dentro de WhatsApp: responde, verifica identidad y ejecuta acciones con el contexto de la conversación."
problem: "Los clientes ya preguntaban por sus envíos en WhatsApp. La respuesta dependía de una persona que entraba a otro sistema a buscar."
built:
  - "Asistente en el canal que el cliente ya usa, con verificación de identidad"
  - "Orquestador multiagente con enrutamiento inteligente: rastreo síncrono en segundos, resto en cola"
  - "Integración con la API de rastreo y la plataforma de mensajería"
  - "Colas, caché y procesos separados de web y worker para escalar"
stack:
  - "LangGraph"
  - "LangChain"
  - "Node"
  - "Bull + Redis"
  - "Supabase"
  - "Respond.io"
outcome: "Atención logística en WhatsApp con respuestas de rastreo en uno a tres segundos. Producto construido como parte del equipo de Envia.com."
url: "https://help.envia.com/it/chi-e-enzo/"
---

Enzo demuestra dos cosas que repetimos en cada proyecto agéntico: el asistente vive donde ya está el usuario, y las tareas se separan por urgencia. Lo que debe responder en segundos se atiende en línea; lo demás va a una cola con reintentos.
