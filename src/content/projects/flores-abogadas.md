---
title: "Sitio de Flores Abogadas"
client: "Flores Abogadas"
sector: "Servicios legales, derecho familiar"
city: "Monterrey"
year: 2026
line: "sitios"
status: "produccion"
role: "cliente"
pagespeed:
  mobile: [98, 100, 100, 100]
  desktop: [100, 100, 100, 100]
  date: "2026-09-06"
  report: "https://pagespeed.web.dev/analysis/https-floresabogadas-com-mx/kt3gcxulx6"
summary: "Sitio bilingüe para un despacho de derecho familiar: catálogo de servicios y áreas, guías, agenda de asesorías supervisada y formularios que llegan por correo sin exponer credenciales."
problem: "El despacho necesitaba una presencia que convirtiera en citas de asesoría, con un catálogo de servicios claro, una versión en inglés para mexicanos que viven en Estados Unidos y necesitan trámites en México, y un modelo de mantenimiento continuo."
context: "Quien busca un abogado de familia no está comparando precios: está tratando de entender qué le va a pasar. Un sitio que solo lista áreas de práctica no responde eso, y por lo tanto no genera la llamada. La arquitectura del sitio se decidió con esa lectura, después de revisar once despachos de derecho familiar en Estados Unidos y Canadá."
built:
  - "Sitio estático con páginas por servicio y por área de especialidad, guías y aviso de privacidad"
  - "Versión en inglés con estrategia SEO propia para el público en Estados Unidos"
  - "Agenda de asesorías embebida, supervisada por el personal administrativo para evitar conflictos"
  - "Relay de formularios: los sitios estáticos envían a un servicio central que identifica al cliente por origen y entrega por correo"
  - "Despliegue en VPS con Docker y Traefik, y plan de mantenimiento mensual con ajustes de SEO"
howItWorks:
  - step: "Una página por servicio y por área"
    detail: "Cada trámite tiene su propia página, escrita para alguien que no es abogado. Es lo que permite aparecer en la búsqueda específica que la persona sí hace."
  - step: "Las guías responden antes de la llamada"
    detail: "Contenido que explica el proceso. Quien llega a la consulta llega informado, y la consulta rinde más."
  - step: "La versión en inglés no es una traducción"
    detail: "Está escrita para mexicanos que viven en Estados Unidos y necesitan resolver un trámite dentro de México, con su propia estrategia de búsqueda."
  - step: "La cita se agenda desde el sitio, con supervisión"
    detail: "La agenda está embebida, pero el personal administrativo revisa antes de confirmar, para evitar conflictos de interés entre partes de un mismo asunto."
  - step: "Los formularios llegan por correo sin credenciales expuestas"
    detail: "El sitio no guarda contraseñas de correo. Manda el mensaje a un servicio central que identifica de qué cliente viene y lo entrega."
delivered:
  - "Sitio bilingüe en producción, con páginas por servicio y por área de especialidad"
  - "Guías de contenido y aviso de privacidad"
  - "Agenda de asesorías embebida con supervisión administrativa"
  - "Formularios entregados por correo sin credenciales en el navegador"
  - "Hosting, dominio y accesos a nombre del despacho, con mantenimiento mensual contratado"
stack:
  - "Astro 5"
  - "Tailwind"
  - "Docker"
  - "Traefik"
  - "Node"
outcome: "Sitio en producción en floresabogadas.com.mx con mantenimiento mensual contratado."
fits:
  - "Vendes un servicio profesional donde el cliente llega con dudas, no con un carrito"
  - "Tu sitio lista lo que haces pero no explica lo que la persona quiere saber"
  - "Tienes público en otro país o en otro idioma y hoy solo hay una traducción"
  - "Quieres que las citas se agenden solas pero con alguien revisando antes de confirmar"
pitch: "Para servicios profesionales, el sitio se paga con consultas agendadas. La arquitectura se decide con investigación del sector, no con una plantilla, y la entrega se verifica con PageSpeed público en móvil y escritorio. El mantenimiento mensual existe porque el posicionamiento no se instala una vez."
url: "https://floresabogadas.com.mx"
cover: "/projects/flores-abogadas.webp"
coverAlt: "Portada de floresabogadas.com.mx"
featured: false
order: 21
---

La arquitectura de servicios se decidió después de revisar once sitios de despachos de derecho familiar en Estados Unidos y Canadá, y la versión en inglés no es una traducción: responde a búsquedas de personas en Estados Unidos que necesitan resolver trámites dentro de México.

El relay de formularios nació aquí y hoy sirve a todos los sitios de clientes: un solo contenedor recibe los formularios, valida el origen y entrega por correo, sin que ninguna credencial viva en el navegador. Es la solución al problema clásico del sitio estático: cómo mandar un correo sin poner la contraseña del correo en una página pública.
