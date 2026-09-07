---
title: "Plataforma de ciclo de vida de producto"
client: "Fintech de pagos (nombre reservado)"
sector: "Fintech"
city: "Lima"
year: 2026
line: "software"
status: "produccion"
role: "cliente"
order: 13
summary: "Plataforma interna de ciclo de vida de producto en producción, con más de 140 usuarios activos, evolucionada con especificaciones y pruebas antes de cada cambio."
problem: "Una plataforma en producción con usuarios reales y sin ambiente de desarrollo separado necesitaba evolucionar sin riesgo."
context: "Sin ambiente de pruebas, cada cambio se hace sobre el sistema que 140 personas están usando en ese momento. La única red de seguridad posible es de proceso: nada entra sin propuesta escrita, sin pruebas y sin una regla explícita sobre qué se puede tocar."
built:
  - "Backend y frontend mantenidos bajo un flujo de propuestas, revisión humana y aplicación"
  - "Pruebas de backend obligatorias antes de cerrar cualquier cambio"
  - "Reglas explícitas sobre migraciones y scripts que tocan producción"
howItWorks:
  - step: "Cada cambio empieza escrito"
    detail: "Antes de tocar código se redacta qué cambia, por qué y a quién afecta. Los cambios triviales se saltan este paso; los que no lo son, nunca."
  - step: "Una persona aprueba"
    detail: "La propuesta se revisa antes de implementarse. Es la compuerta que evita descubrir el problema con los usuarios adentro."
  - step: "Las pruebas son obligatorias"
    detail: "Ningún cambio de backend se cierra sin pruebas que corran. No es una recomendación del equipo, es un requisito del flujo."
  - step: "Lo destructivo está prohibido por defecto"
    detail: "Migraciones y scripts que tocan datos de producción tienen reglas explícitas. La prohibición está escrita en el proyecto, no en la memoria de quien está de guardia."
  - step: "Se entrega continuo, no por grandes saltos"
    detail: "Cambios pequeños y frecuentes sobre un sistema vivo, en lugar de una versión grande cada varios meses."
delivered:
  - "Flujo de propuesta, revisión y aplicación documentado y en uso por el equipo"
  - "Suite de pruebas de backend como requisito de cierre de cualquier cambio"
  - "Reglas explícitas de migraciones y operaciones sobre producción"
impact:
  - v: "+140"
    l: "usuarios activos en la plataforma"
  - v: "0"
    l: "incidentes por migraciones desde la adopción del flujo"
stack:
  - "Node"
  - "TypeScript"
  - "OpenSpec"
  - "Docker"
outcome: "Cambios continuos en una plataforma con 140 usuarios sin incidentes por migraciones."
fits:
  - "Tienes un sistema interno en producción del que depende gente todos los días"
  - "No hay ambiente de pruebas separado y cada cambio da miedo"
  - "El equipo entrega, pero cada tanto algo se rompe en producción y nadie sabe qué lo tocó"
  - "Necesitas seguir avanzando sin congelar el sistema"
pitch: "Cuando un sistema ya está vivo, el trabajo no es reescribirlo: es ponerle una forma segura de cambiar. Esa instalación se hace sobre tu plataforma actual, con tu equipo, y se nota en la primera semana porque deja de haber cambios que nadie puede explicar."
---

Aquí el valor no está en una pantalla nueva sino en el método: ningún cambio no trivial entra sin propuesta escrita, y las operaciones destructivas están prohibidas por contexto, no por memoria.

Es el caso que mejor muestra por qué separamos «software a medida» de «ingeniería con IA». El cliente no necesitaba un producto nuevo; necesitaba poder seguir cambiando el que ya tenía sin apagar el negocio de 140 personas. Ese es un problema de proceso, y se resuelve con proceso.
