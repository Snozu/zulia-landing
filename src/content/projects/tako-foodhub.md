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
context: "Son tres personas distintas con tres necesidades distintas: el dueño quiere ver el negocio, el cajero necesita cobrar rápido sin distracciones, y el administrador de la plataforma opera a varios restaurantes. Meterlos a los tres en la misma aplicación termina en un producto que estorba a los tres."
built:
  - "Portal web del negocio para administrar sucursales, catálogo, inventario, sesiones POS y usuarios"
  - "Punto de venta como aplicación independiente conectada a la misma API"
  - "API central y núcleo de mensajería separados por repositorio, con guía de instalación del ecosistema"
howItWorks:
  - step: "El dueño administra desde el portal"
    detail: "Sucursales, catálogo, inventario, usuarios y sesiones de caja. Es la vista de negocio, no la de operación."
  - step: "La caja cobra en su propia aplicación"
    detail: "El punto de venta es una aplicación aparte, pensada para velocidad en el mostrador, conectada a los mismos datos."
  - step: "Todo pasa por una API central"
    detail: "Portal y punto de venta no se hablan entre sí: los dos leen y escriben en el mismo lugar. Eso evita que los datos se desincronicen."
  - step: "Los avisos van por un núcleo de mensajería"
    detail: "Pedidos y notificaciones se manejan como piezas separadas, para que un pico de mensajes no afecte al cobro."
  - step: "Cada equipo despliega su parte"
    detail: "Al estar en repositorios separados con guía de instalación compartida, un equipo puede publicar su servicio sin bloquear a los demás."
delivered:
  - "Portal de negocio con sucursales, catálogo, inventario, usuarios y sesiones de caja"
  - "Punto de venta como aplicación independiente sobre la misma API"
  - "API central y núcleo de mensajería en repositorios separados"
  - "Guía de instalación del ecosistema completo"
stack:
  - "Spring Boot"
  - "Rust"
  - "PostgreSQL"
  - "Docker"
  - "Next.js"
outcome: "En desarrollo. La plataforma del negocio y el punto de venta se construyen sobre repositorios separados con guía de instalación compartida."
fits:
  - "Tu producto lo usan perfiles muy distintos y una sola pantalla no les sirve a todos"
  - "Varios equipos trabajan sobre el mismo sistema y se bloquean entre sí al desplegar"
  - "Necesitas que la parte crítica (cobrar, operar) no se caiga cuando falla otra cosa"
  - "Estás construyendo un producto que va a operar a varios negocios, no a uno"
pitch: "Cuando un producto tiene tres tipos de usuario, la decisión de arquitectura es tan comercial como técnica: define quién puede avanzar sin esperar a quién. Entramos en proyectos así tanto liderando la implementación como apoyando en la arquitectura junto al equipo del cliente."
featured: false
order: 18
draft: false
---

Proyecto en curso dentro de una colaboración con otra consultoría. La separación en repositorios por servicio permite que cada equipo despliegue su parte sin bloquear a los demás.

Es también un ejemplo de cómo entramos en proyectos donde no somos el único proveedor: aportando arquitectura y una parte del desarrollo, con reglas de integración claras para que las piezas ajenas encajen sin sorpresas.
