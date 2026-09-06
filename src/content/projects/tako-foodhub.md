---
title: "Portal de negocio y punto de venta para restaurantes"
client: "TaKo"
sector: "Restaurantes y alimentos"
city: "Monterrey"
year: 2026
line: "software"
status: "desarrollo"
role: "cliente"
summary: "Plataforma para dueños de restaurante: sucursales, catálogo, inventario, sesiones de punto de venta y usuarios, con un núcleo de mensajería para pedidos y notificaciones."
problem: "El negocio necesitaba separar la herramienta del dueño (portal) de la del operador (punto de venta) y del administrador interno, sobre una base que varios equipos pudieran mantener por separado."
built:
  - "Portal web del negocio para administrar sucursales, catálogo, inventario, sesiones POS y usuarios"
  - "Punto de venta como aplicación independiente conectada a la misma API"
  - "API central y núcleo de mensajería separados por repositorio, con guía de instalación del ecosistema"
stack:
  - "Spring Boot"
  - "Rust"
  - "PostgreSQL"
  - "Docker"
  - "Next.js"
outcome: "En desarrollo. La plataforma del negocio y el punto de venta se construyen sobre repositorios separados con guía de instalación compartida."
featured: false
order: 18
draft: false
---

Proyecto en curso dentro de una colaboración con otra consultoría. La separación en repositorios por servicio permite que cada equipo despliegue su parte sin bloquear a los demás.
