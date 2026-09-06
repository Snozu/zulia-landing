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
built:
  - "Aplicación web con mapa de rutas y plan diario"
  - "API con base de datos propia y lectura de documentos escaneados (OCR)"
  - "Importación desde hojas de cálculo existentes para no romper el flujo actual"
stack:
  - "Next.js"
  - "Node"
  - "Drizzle"
  - "PostgreSQL"
  - "Tesseract OCR"
  - "Docker"
outcome: "En desarrollo. Se prueba en local con datos reales de la operación antes de su despliegue."
---

El proyecto respeta cómo trabaja hoy la operación: los mismos archivos de entrada, pero con un plan que se recalcula en lugar de rehacerse.
