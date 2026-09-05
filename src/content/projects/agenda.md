---
title: "Agenda"
client: "ZulIA"
sector: "Servicios profesionales"
city: "Monterrey"
year: 2026
line: "software"
status: "produccion"
role: "propio"
order: 16
summary: "Agendador de consultorías propio y embebible: cruza la agenda de trabajo y la personal para ofrecer solo horarios realmente libres."
problem: "Las herramientas de agenda no leían dos calendarios de proveedores distintos con reglas de excepción."
built:
  - "Motor de disponibilidad puro: horario base menos ocupado de Outlook (con excepciones) menos ocupado de Google (sin excepciones)"
  - "Widget que se pega en cualquier sitio con una línea y no saca al visitante de la página"
  - "Lectura de calendario por ICS y por API de disponibilidad"
stack:
  - "Next.js"
  - "ical.js"
  - "Google Calendar API"
  - "Docker"
outcome: "Operando en agenda.zulia.lat y embebido en este sitio."
url: "https://agenda.zulia.lat"
---

Construido porque ninguna herramienta de agenda resolvía la regla real: el calendario personal siempre gana, el laboral tiene ventanas de excepción.
