---
title: "Portal vehicular por QR"
client: "Grupo Mont"
sector: "Distribución industrial"
city: "Monterrey"
year: 2026
line: "software"
status: "produccion"
role: "cliente"
cover: "/projects/portal-vehicular-grupo-mont.webp"
coverAlt: "Portal vehicular de Grupo Mont con la flotilla registrada y acceso por QR"
order: 11
summary: "Cada vehículo de la flotilla lleva un QR en su marbete. Al escanearlo se abre su expediente; el personal externo ve solo el reglamento."
problem: "La información de cada vehículo (documentos, seguros, verificaciones) estaba repartida en carpetas y personas. En una revisión nadie la tenía a la mano."
context: "El problema aparecía siempre en el peor momento: una revisión en carretera, un siniestro, una auditoría. La información existía, pero estaba en la computadora de alguien que en ese momento no contestaba el teléfono."
built:
  - "Portal individual por vehículo accesible desde el QR impreso en el marbete"
  - "QR genérico para personal externo con el reglamento operativo"
  - "Entrega en cuatro fases: portal público y QRs, integración con Google Drive, base de datos y panel administrativo, reportes y alertas"
  - "Roles y control de acceso por tipo de usuario"
howItWorks:
  - step: "Cada unidad trae su propio código"
    detail: "El QR va impreso en el marbete del vehículo. No hay que instalar nada ni recordar una dirección: se escanea con la cámara del teléfono."
  - step: "Se abre el expediente de esa unidad"
    detail: "Documentos, seguro, verificaciones. La información que antes estaba en una carpeta compartida ahora está pegada físicamente al vehículo del que habla."
  - step: "El externo ve solo lo que le toca"
    detail: "Hay un segundo QR, genérico, para transportistas y visitantes: abre el reglamento operativo y nada más. Sin cuentas ni contraseñas."
  - step: "Se entregó por fases usables"
    detail: "La fase uno salió sin base de datos, para poder imprimir marbetes en semanas. La base de datos, el panel administrativo y las alertas llegaron después, sin interrumpir lo que ya estaba operando."
delivered:
  - "Una dirección propia por vehículo, accesible desde el QR del marbete"
  - "Reglamento operativo accesible para personal externo sin necesidad de cuentas"
  - "Panel administrativo con roles y control de acceso por tipo de usuario"
  - "Plan de cuatro fases con la primera ya en operación"
stack:
  - "Next.js"
  - "Tailwind"
  - "Google Drive API"
  - "Exportación estática"
outcome: "Fase 1 operando: cada unidad tiene una URL propia y el reglamento es accesible sin cuentas."
fits:
  - "Manejas flotilla, maquinaria o equipo y sus documentos viven en carpetas y en la cabeza de alguien"
  - "Necesitas que un operador o un externo consulte información en campo, sin darle una cuenta"
  - "Prefieres tener algo operando en semanas que un sistema completo en meses"
  - "Quieres empezar simple y agregar base de datos y alertas cuando el uso lo justifique"
pitch: "El patrón sirve para cualquier activo físico con papeleo detrás: flotilla, maquinaria, extintores, equipos en renta. Y la lección de este caso es la que más ahorra dinero: la fase uno no llevó base de datos, y por eso pudo imprimirse y usarse en semanas en lugar de meses."
url: "https://vehicular.proveedorafarid.com"
---

La propuesta se diseñó para arrancar operación con la fase uno y escalar sin interrumpirla. Empezar por lo público y sin base de datos permitió imprimir marbetes en semanas.

Esa decisión se toma al revés de como suele hacerse. Lo normal es diseñar el sistema completo, construir la base de datos, el panel y los permisos, y entregar todo junto en el mes seis. Aquí se preguntó primero cuál es la versión más chica que ya sirve en campo, y esa fue la que salió antes. Las fases siguientes se cotizaron con el sistema ya en uso, que es cuando el cliente sabe de verdad qué necesita.
