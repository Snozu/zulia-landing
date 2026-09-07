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
context: "El costo se pagaba en la venta: un cliente preguntaba por un diámetro que en la página aparecía disponible y ya no estaba, o al revés, material que sí había en patio nunca se publicó. La sincronización manual entre patio y catálogo siempre iba tarde."
built:
  - "Panel de administración para entradas, salidas y ajustes, con roles para capturistas"
  - "Catálogo público generado desde la misma base de datos, con cotización directa por WhatsApp"
  - "Sesiones en servidor con contraseñas cifradas, validación en tiempo real y transacciones"
  - "Compresión de fotos y generación de PDF de existencias"
  - "Despliegue en Web Apps con Node y MariaDB en Hostinger"
howItWorks:
  - step: "El patio captura lo que entra y sale"
    detail: "Entradas, salidas y ajustes desde un panel simple, con roles para que cada capturista vea solo lo suyo."
  - step: "El catálogo público se actualiza solo"
    detail: "No hay un segundo lugar que alguien tenga que actualizar. La página que ve el cliente lee la misma base de datos que usa el patio."
  - step: "El cliente cotiza desde el catálogo"
    detail: "Ve la existencia real y abre WhatsApp con el producto ya identificado en el mensaje. Sin formularios ni esperas."
  - step: "Administración saca su PDF"
    detail: "Un reporte de existencias listo para imprimir o mandar, generado del mismo dato, no de una hoja aparte."
delivered:
  - "Panel de inventario con entradas, salidas, ajustes y roles por capturista"
  - "Catálogo público conectado a la misma base de datos, con cotización por WhatsApp"
  - "Reportes de existencias en PDF"
  - "Sesiones seguras, contraseñas cifradas y validación en tiempo real"
  - "Despliegue en la infraestructura del cliente"
stack:
  - "Astro 5 SSR"
  - "React"
  - "MariaDB"
  - "Node 22"
  - "Zod"
  - "Sharp"
  - "jsPDF"
outcome: "Un solo sistema para operación y venta. El catálogo público siempre muestra existencia real."
fits:
  - "Tienes inventario que cambia todos los días y un catálogo que no lo refleja"
  - "Alguien actualiza a mano dos lugares: el sistema interno y lo que ve el cliente"
  - "Vendes por WhatsApp y cada cotización empieza preguntando «¿todavía tienes?»"
  - "Manejas producto con variantes (medidas, diámetros, condición) que no cabe en una tienda genérica"
pitch: "La decisión que hace barato este proyecto es no construir dos sistemas. Un solo producto sirve al patio y al cliente, comparten base de datos y despliegue, y desaparece la sincronización que fallaba. Si hoy tienes inventario en hoja de cálculo y catálogo en otra parte, esto es exactamente lo mismo."
---

Un proyecto Astro full-stack resuelve las dos caras: el patio registra y el cliente cotiza. La decisión técnica clave fue no separar admin y catálogo en dos aplicaciones; comparten base de datos y despliegue, y eso elimina la sincronización que antes fallaba.

Es una decisión que también abarata el mantenimiento. Dos aplicaciones significan dos despliegues, dos lugares donde se rompe algo y una integración entre ellas que hay que cuidar. Para un inventario de un solo negocio, esa separación no compra nada.
