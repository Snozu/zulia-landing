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
context: "El problema no era técnico al principio, era de dobles citas: una herramienta veía un calendario y no el otro, y ofrecía horarios que en realidad ya estaban ocupados. La regla real tampoco era simétrica: el calendario personal siempre gana, el laboral tiene ventanas de excepción."
built:
  - "Motor de disponibilidad puro: horario base menos ocupado de Outlook (con excepciones) menos ocupado de Google (sin excepciones)"
  - "Widget que se pega en cualquier sitio con una línea y no saca al visitante de la página"
  - "Lectura de calendario por ICS y por API de disponibilidad"
howItWorks:
  - step: "Se define el horario en el que sí atiendes"
    detail: "El punto de partida: qué días y qué horas están disponibles en principio."
  - step: "Se restan los dos calendarios"
    detail: "Lo ocupado en el calendario de trabajo y lo ocupado en el personal se quitan del horario base. Cada uno con sus propias reglas: el personal bloquea siempre, el laboral admite excepciones."
  - step: "Solo se ofrece lo que queda"
    detail: "El visitante nunca ve un horario que en realidad estaba tomado. No hay dobles citas que después haya que reprogramar."
  - step: "Se agenda sin salir del sitio"
    detail: "El widget se pega en cualquier página con una línea de código y el visitante reserva ahí mismo, sin que lo manden a otra herramienta."
delivered:
  - "Motor de disponibilidad que cruza dos calendarios de proveedores distintos"
  - "Widget embebible en cualquier sitio con una línea de código"
  - "Lectura de calendarios por ICS y por API"
stack:
  - "Next.js"
  - "ical.js"
  - "Google Calendar API"
  - "Docker"
outcome: "Operando en agenda.zulia.lat y embebido en este sitio."
fits:
  - "Tu equipo agenda citas y las herramientas comerciales no leen todos los calendarios que necesitas"
  - "Se generan dobles citas porque un calendario no se ve desde el otro"
  - "Quieres que la gente agende dentro de tu sitio y no en una página de un tercero"
  - "Tienes reglas de disponibilidad que no caben en la configuración de una herramienta genérica"
pitch: "Este es el tipo de proyecto chico que casi siempre vale la pena: una regla propia que ninguna herramienta comercial respeta y que, resuelta, elimina un problema recurrente. Si tu operación tiene una de esas reglas, normalmente se resuelve en semanas y no en meses."
url: "https://agenda.zulia.lat"
---

Construido porque ninguna herramienta de agenda resolvía la regla real: el calendario personal siempre gana, el laboral tiene ventanas de excepción.

El motor de disponibilidad se escribió como una función pura, sin efectos ni dependencias del entorno: entra el horario base y los bloques ocupados, sale la lista de huecos libres. Esa decisión hace que la parte más delicada del sistema, la que provoca dobles citas si falla, se pueda probar exhaustivamente sin levantar nada.
