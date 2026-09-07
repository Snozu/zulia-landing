---
title: "Migración y catálogo Mueblería Juárez"
client: "Mueblería Juárez"
sector: "Retail de muebles"
city: "Monterrey"
year: 2026
line: "sitios"
status: "desarrollo"
role: "cliente"
pagespeed:
  mobile: [94, 97, 100, 100]
  desktop: [100, 97, 100, 100]
  date: "2026-09-06"
  report: "https://pagespeed.web.dev/analysis/https-muebleriajuarez-com/4qiaqd696t"
cover: "/projects/muebleria-juarez.webp"
coverAlt: "Portada de muebleriajuarez.com tras la migración al VPS"
order: 22
summary: "Migración del sitio WordPress a un VPS propio con Docker y construcción de un catálogo rápido administrado desde WordPress."
problem: "El sitio vivía en un hosting compartido lento y el catálogo dependía del tema de WordPress para todo."
context: "En un hosting compartido, el sitio compite por recursos con cientos de vecinos y no hay nada que optimizar desde adentro. Y cuando el catálogo depende del tema, cualquier mejora obliga a pelearse con código que no se escribió pensando en ese negocio."
built:
  - "Migración de hosting nacional a VPS con Docker y Caddy, incluyendo DNS y correo"
  - "Catálogo Astro que consume WordPress como administrador"
  - "Catálogo conversacional para atender consultas de productos por chat"
howItWorks:
  - step: "Primero se mudó la casa"
    detail: "El sitio se movió del hosting compartido a un servidor propio, con DNS y correo incluidos, sin tocar el contenido. Nadie perdió correos ni tuvo el sitio caído."
  - step: "WordPress se quedó como administrador"
    detail: "El equipo sigue publicando productos donde siempre. Lo que cambió es lo que hay del otro lado."
  - step: "El catálogo nuevo se construye encima"
    detail: "Páginas rápidas que leen el mismo WordPress. La velocidad deja de depender del tema y de los plugins."
  - step: "El chat contesta consultas de producto"
    detail: "Un catálogo conversacional para que quien pregunta por un mueble reciba respuesta sin tener que recorrer categorías."
delivered:
  - "Sitio migrado a servidor propio con Docker, incluyendo DNS y correo"
  - "Catálogo rápido administrado desde el WordPress que el equipo ya usa"
  - "Catálogo conversacional para consultas de producto por chat"
  - "Servidor, dominio y accesos a nombre del cliente"
stack:
  - "WordPress"
  - "Astro"
  - "Docker"
  - "Caddy"
  - "VPS Hostinger"
outcome: "Migración completada. Catálogo en construcción sobre la nueva infraestructura."
fits:
  - "Tu sitio está en un hosting compartido y va lento sin importar qué plugin instales"
  - "El catálogo depende del tema de WordPress y cualquier cambio es una pelea"
  - "Quieres mejorar la velocidad sin pedirle al equipo que aprenda otra herramienta"
  - "Necesitas mover DNS y correo sin quedarte sin sitio ni sin buzón un solo día"
pitch: "La migración se puede hacer sin drama y sin tocar el contenido: primero se muda la casa, después se remodela. Si hoy estás en hosting compartido, ese primer paso normalmente ya se nota, y deja el terreno listo para el catálogo rápido."
url: "https://muebleriajuarez.com"
---

Primero se movió la casa, después se remodeló: la migración se hizo sin tocar el contenido, y el catálogo nuevo se construye encima del WordPress que el equipo ya administra.

Separar la mudanza de la remodelación es lo que hace que el proyecto sea de bajo riesgo. Si las dos cosas se hacen a la vez y algo falla, no hay forma de saber si fue el cambio de servidor o el catálogo nuevo. Hechas por separado, cada paso se verifica solo.
