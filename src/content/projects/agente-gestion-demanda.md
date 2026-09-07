---
title: "Agente de gestión de la demanda"
client: "Fintech de pagos (nombre reservado)"
sector: "Fintech"
city: "Lima"
year: 2026
line: "agentica"
status: "desarrollo"
role: "cliente"
order: 4
summary: "Agente conversacional para que toda la empresa registre, consulte y priorice demanda de trabajo hacia tecnología desde un solo lugar."
problem: "Las solicitudes hacia el área de tecnología llegaban por correo, chat y reuniones. Nadie tenía una vista completa de la demanda ni de su estado."
context: "Cuando la demanda no está en un solo lugar, la priorización se vuelve una negociación de pasillo: gana quien insiste más, no lo que más valor tiene. Y el área de tecnología pasa una parte del día contestando «¿en qué va lo mío?» en tres canales distintos."
built:
  - "Agente conversacional con base de conocimiento propia y evaluaciones automáticas de calidad"
  - "Especificaciones, plan de release e historias como fuente de verdad del desarrollo"
  - "Despliegue en Google Cloud con operación documentada"
howItWorks:
  - step: "Cualquiera pide en lenguaje normal"
    detail: "El colaborador describe lo que necesita como se lo contaría a una persona. No tiene que aprender un formulario ni saber cómo se llama el proceso por dentro."
  - step: "El agente completa lo que falta"
    detail: "Repregunta hasta que la solicitud tenga lo mínimo para ser evaluada: qué se necesita, para qué, para cuándo y a quién afecta."
  - step: "Queda registrada en un solo lugar"
    detail: "Ya no hay demanda viviendo en un correo o en un chat. Todo entra al mismo inventario y se puede ver completo."
  - step: "Se consulta el estado sin pedirlo a nadie"
    detail: "«¿En qué va la solicitud del área comercial?» se responde en el mismo chat, con el estado real."
  - step: "La calidad se mide, no se supone"
    detail: "Hay evaluaciones automáticas que revisan si las respuestas del agente son correctas. Cuando la calidad baja, se detecta antes de que lo note un usuario."
delivered:
  - "Agente conversacional sobre la base de conocimiento de la propia empresa"
  - "Inventario único de demanda hacia tecnología, con estado consultable"
  - "Evaluaciones automáticas de calidad de respuesta desde el inicio"
  - "Despliegue en Google Cloud con operación documentada"
stack:
  - "Python 3.12"
  - "Docker"
  - "Google Cloud"
  - "Evals"
outcome: "Release 1 en construcción dentro de la iniciativa de IA 2026 de la empresa."
fits:
  - "Las solicitudes hacia un área interna llegan por tres o cuatro canales y nadie tiene la vista completa"
  - "Se prioriza por insistencia porque no hay un inventario común que comparar"
  - "Tu equipo gasta horas contestando «¿en qué va lo mío?»"
  - "Quieres poner IA en un proceso interno de bajo riesgo antes de llevarla a algo que toca al cliente"
pitch: "Un proceso interno es el mejor primer proyecto de IA de una empresa: el riesgo es bajo, el usuario es tu propio equipo y el aprendizaje se queda en casa. Este patrón sirve igual para recepción de solicitudes de mantenimiento, compras o recursos humanos."
---

Proyecto construido con el método de ingeniería de la empresa: especificación primero, evaluaciones desde el inicio y operación documentada antes del despliegue.

Ese orden importa. Un agente conversacional sin evaluaciones automáticas es imposible de mejorar: cuando alguien reporta que «contestó mal», no hay forma de saber si fue un caso aislado o una regresión. Aquí las evaluaciones existían antes que el primer usuario.
