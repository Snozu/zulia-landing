---
title: "Inventario y catálogo VIGA"
client: "Metales y Reciclados VIGA"
sector: "Acero y reciclaje industrial"
city: "Monterrey"
year: 2026
line: "software"
status: "produccion"
role: "cliente"
featured: false
order: 10
summary: "Control de inventario de tubería en patio con catálogo público conectado: lo que entra al sistema se puede cotizar por WhatsApp al instante."
problem: "El inventario de tubería recuperada se llevaba en hojas y fotos. El catálogo público no reflejaba lo que realmente había en patio."
built:
  - "Panel de administración para entradas, salidas y ajustes, con roles para capturistas"
  - "Catálogo público generado desde la misma base de datos, con cotización directa por WhatsApp"
  - "Sesiones en servidor con contraseñas cifradas, validación en tiempo real y transacciones"
  - "Compresión de fotos y generación de PDF de existencias"
  - "Despliegue en Web Apps con Node y MariaDB en Hostinger"
stack:
  - "Astro 5 SSR"
  - "React"
  - "MariaDB"
  - "Node 22"
  - "Zod"
  - "Sharp"
  - "jsPDF"
outcome: "Un solo sistema para operación y venta. El catálogo público siempre muestra existencia real."
---

Un proyecto Astro full-stack resuelve las dos caras: el patio registra y el cliente cotiza. La decisión técnica clave fue no separar admin y catálogo en dos aplicaciones; comparten base de datos y despliegue, y eso elimina la sincronización que antes fallaba.
