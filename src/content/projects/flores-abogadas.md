---
title: "Sitio de Flores Abogadas"
client: "Flores Abogadas"
sector: "Servicios legales, derecho familiar"
city: "Monterrey"
year: 2026
line: "sitios"
status: "produccion"
role: "cliente"
summary: "Sitio bilingüe para un despacho de derecho familiar: catálogo de servicios y áreas, guías, agenda de asesorías supervisada y formularios que llegan por correo sin exponer credenciales."
problem: "El despacho necesitaba una presencia que convirtiera en citas de asesoría, con un catálogo de servicios claro, una versión en inglés para mexicanos que viven en Estados Unidos y necesitan trámites en México, y un modelo de mantenimiento continuo."
built:
  - "Sitio estático con páginas por servicio y por área de especialidad, guías y aviso de privacidad"
  - "Versión en inglés con estrategia SEO propia para el público en Estados Unidos"
  - "Agenda de asesorías embebida, supervisada por el personal administrativo para evitar conflictos"
  - "Relay de formularios: los sitios estáticos envían a un servicio central que identifica al cliente por origen y entrega por correo"
  - "Despliegue en VPS con Docker y Traefik, y plan de mantenimiento mensual con ajustes de SEO"
stack:
  - "Astro 5"
  - "Tailwind"
  - "Docker"
  - "Traefik"
  - "Node"
outcome: "Sitio en producción en floresabogadas.com.mx con mantenimiento mensual contratado."
url: "https://floresabogadas.com.mx"
featured: false
order: 21
---

La arquitectura de servicios se decidió después de revisar once sitios de despachos de derecho familiar en Estados Unidos y Canadá, y la versión en inglés no es una traducción: responde a búsquedas de personas en Estados Unidos que necesitan resolver trámites dentro de México.

El relay de formularios nació aquí y hoy sirve a todos los sitios de clientes: un solo contenedor recibe los formularios, valida el origen y entrega por correo, sin que ninguna credencial viva en el navegador.
