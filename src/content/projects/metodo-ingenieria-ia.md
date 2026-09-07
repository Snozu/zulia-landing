---
title: "Método de ingeniería con agentes de IA"
client: "Fintech de pagos (nombre reservado)"
sector: "Fintech"
city: "Lima"
year: 2026
line: "ingenieria"
status: "produccion"
role: "cliente"
featured: true
order: 30
summary: "Metodología de ingeniería para construir con agentes de IA: ciclo de vida seguro, especificación primero, skills, runbooks y playbooks instalados en los repositorios."
problem: "Los equipos usaban asistentes de código sin reglas compartidas. Cada repositorio tenía su propio contexto y los agentes contradecían la realidad del código."
context: "El síntoma clásico: dos desarrolladores le piden lo mismo al mismo asistente y reciben respuestas incompatibles, porque ninguno de los dos repositorios le dice al agente cómo se hacen las cosas ahí. La velocidad que gana la IA escribiendo se pierde en revisiones y en deshacer."
built:
  - "Metodología documentada y versionada (ciclo de vida seguro, ingeniería compuesta, desarrollo guiado por especificación)"
  - "Skills, hooks, instrucciones y playbooks reutilizables entre repositorios"
  - "Runbooks de operación que un agente puede seguir"
  - "Servidores MCP internos y memoria compartida de decisiones"
howItWorks:
  - step: "Las reglas viven en el repositorio, no en un PDF"
    detail: "Cada proyecto lleva un archivo de contexto que el agente lee antes de tocar nada: cómo se nombra, qué patrones se usan, qué está prohibido. Un documento en el drive no lo lee nadie; un archivo en el repo lo lee el agente siempre."
  - step: "Nada no trivial entra sin especificación"
    detail: "Antes del código, una propuesta escrita: qué cambia, por qué y qué se rompe. Es la parte que evita rehacer, que es donde de verdad se pierde el tiempo."
  - step: "Una persona revisa y aprueba"
    detail: "El agente propone y ejecuta dentro de límites; el criterio sigue siendo humano. La velocidad viene de no rehacer, no de saltarse la revisión."
  - step: "Las operaciones peligrosas están prohibidas por contexto"
    detail: "Migraciones destructivas y scripts sobre producción están bloqueados en las reglas del repositorio. No depende de que alguien se acuerde."
  - step: "Lo que funciona se vuelve plantilla"
    detail: "Cada solución buena se convierte en un skill o un runbook reutilizable. El siguiente repositorio arranca con lo aprendido en el anterior."
delivered:
  - "Metodología documentada y versionada, propiedad del cliente"
  - "Archivos de contexto, skills y hooks instalados en los repositorios"
  - "Runbooks de despliegue y operación que un agente puede seguir paso a paso"
  - "Servidores MCP internos y memoria compartida de decisiones de arquitectura"
stack:
  - "Claude Code"
  - "Cursor"
  - "OpenSpec"
  - "MCP"
  - "Git hooks"
outcome: "Versión 2.0 en uso por ingeniería. Es el método con el que se construyen la fábrica de MCP, el agente de demanda y la plataforma de ciclo de vida de producto."
fits:
  - "Tu equipo ya usa Claude Code, Cursor o Copilot y cada quien lo usa a su manera"
  - "Los agentes proponen código que no encaja con las convenciones del proyecto"
  - "Tienes producción sin ambiente de pruebas separado y necesitas límites reales, no buenas intenciones"
  - "Dirección quiere medir qué está aportando la IA al desarrollo y hoy no hay con qué"
pitch: "No es una capacitación de dos días. Es instalar el método en uno o dos repositorios reales de tu equipo, acompañar la adopción, y dejarte la plantilla con la que el resto de los repos se instalan solos. Lo que se mide después es concreto: cuánto se rehace y cuánto entra sin propuesta."
---

Este método es la respuesta a una pregunta que toda empresa con desarrolladores se está haciendo: cómo dejar que los agentes escriban código sin que rompan producción. La respuesta no es una política, es contexto instalado en cada repositorio.

La diferencia entre las dos cosas es práctica. Una política dice «no hagas migraciones destructivas» y depende de que alguien la lea y se acuerde. El contexto instalado hace que el agente, cada vez que abre el proyecto, lea esa prohibición antes de proponer nada. La regla deja de ser una intención y se vuelve parte del entorno.

Los tres proyectos de esta misma empresa que aparecen en el portafolio (la fábrica de MCP, el agente de demanda y la plataforma de ciclo de vida de producto) se construyen con este método. No es teoría: es lo que hace que tres equipos distintos entreguen con el mismo estándar.
