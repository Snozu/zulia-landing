---
title: "Plan logístico"
client: "Proveedora Farid"
sector: "Distribución industrial"
city: "Monterrey"
year: 2026
line: "software"
status: "desarrollo"
role: "cliente"
cover: "/projects/plan-logistico-farid.webp"
coverAlt: "Acceso por PIN al sistema de planeación logística de Proveedora Farid"
order: 12
summary: "Planeación de rutas de entrega con mapa, lectura automática de documentos y una API propia para la operación diaria."
problem: "Las rutas se armaban a mano a partir de pedidos en papel y hojas de cálculo, y cada cambio implicaba rehacer el plan completo."
context: "El plan del día se hacía temprano y quedaba obsoleto a media mañana: entraba un pedido urgente, se caía una entrega, cambiaba una dirección. Como el plan era un documento y no un sistema, cada cambio obligaba a rehacerlo desde cero."
built:
  - "Aplicación web con mapa de rutas y plan diario"
  - "API con base de datos propia y lectura de documentos escaneados (OCR)"
  - "Importación desde hojas de cálculo existentes para no romper el flujo actual"
howItWorks:
  - step: "Entra lo que ya existe"
    detail: "Las mismas hojas de cálculo que la operación usa hoy se importan tal cual, y los pedidos en papel se leen por escaneo. Nadie tiene que recapturar nada."
  - step: "El plan del día se arma en un mapa"
    detail: "Las entregas se ven ubicadas, no en una lista. Quien planea decide con la geografía a la vista."
  - step: "Los cambios recalculan, no rehacen"
    detail: "Si entra un pedido urgente o se cae una entrega, el plan se ajusta. Es la diferencia entre corregir y volver a empezar."
  - step: "Se prueba con datos reales antes de salir"
    detail: "El sistema se está validando con la operación real del cliente antes de desplegarlo, para no aprender los casos raros en producción."
delivered:
  - "Aplicación web con mapa y plan diario de entregas"
  - "API y base de datos propias del cliente"
  - "Lectura automática de documentos escaneados"
  - "Importación desde las hojas de cálculo que la operación ya usa"
stack:
  - "Next.js"
  - "Node"
  - "Drizzle"
  - "PostgreSQL"
  - "Tesseract OCR"
  - "Docker"
outcome: "En desarrollo. Se prueba en local con datos reales de la operación antes de su despliegue."
fits:
  - "Planeas entregas, visitas o rutas a mano en hojas de cálculo"
  - "Cada cambio del día obliga a rehacer el plan completo"
  - "Parte de la información entra en papel y alguien la recaptura"
  - "No quieres cambiar de golpe la forma de trabajar de la operación"
pitch: "El criterio de este proyecto aplica a cualquier sistema que sustituye hojas de cálculo: si obliga al equipo a cambiar su forma de trabajar el primer día, no se adopta. Aquí las entradas siguen siendo las mismas y lo que cambia es lo que pasa después."
---

El proyecto respeta cómo trabaja hoy la operación: los mismos archivos de entrada, pero con un plan que se recalcula en lugar de rehacerse.

Ese respeto no es cortesía, es estrategia de adopción. Los sistemas operativos que fracasan casi nunca fracasan por la tecnología: fracasan porque el equipo de piso los vive como trabajo extra y vuelve a su hoja de cálculo en cuanto hay presión. Mantener la entrada intacta quita esa salida de emergencia.
