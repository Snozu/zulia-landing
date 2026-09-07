---
title: "Cotizador multiempresa"
client: "Aceros y Metales La Barreta"
sector: "Acero y reciclaje industrial"
city: "Monterrey"
year: 2025
line: "software"
status: "produccion"
role: "cliente"
cover: "/projects/cotizador-barreta.webp"
coverAlt: "Cotizador multiempresa con datos de cliente, materiales y totales"
order: 15
summary: "Generador de cotizaciones en PDF para un grupo con varias razones sociales y marcas, con datos fiscales y sitios de cada una."
problem: "Cada cotización se armaba a mano en un procesador de textos, con errores en datos fiscales y formatos distintos por empresa."
context: "Con varias razones sociales, el error caro era el de los datos fiscales: una cotización salía con el RFC de otra empresa del grupo, o con un régimen que ya no aplicaba. Y como cada quien partía de su propio archivo, dos cotizaciones del mismo día no se parecían entre sí."
built:
  - "Selección de empresa con RFC, razón social, régimen y logo precargados"
  - "Partidas, totales y condiciones con generación de PDF en el navegador"
  - "Sin servidor: funciona como aplicación estática"
howItWorks:
  - step: "Eliges de qué empresa sale"
    detail: "RFC, razón social, régimen y logo se cargan solos. Los datos fiscales dejan de escribirse a mano y por lo tanto dejan de salir mal."
  - step: "Capturas partidas y condiciones"
    detail: "Materiales, cantidades y precios. Los totales se calculan solos."
  - step: "Sale el PDF"
    detail: "Con el formato de esa empresa, listo para mandar. Todas las cotizaciones del grupo se ven como del mismo grupo."
  - step: "Sin cuentas ni servidor"
    detail: "Es una aplicación que se abre y se usa. No hay contraseñas que administrar ni un servicio mensual que pagar por algo de este tamaño."
delivered:
  - "Aplicación de cotización lista para usar, sin cuentas ni servidor que mantener"
  - "Datos fiscales y formato precargados por cada empresa del grupo"
  - "Generación de PDF desde el navegador"
stack:
  - "React"
  - "Vite"
  - "Tailwind"
  - "jsPDF"
outcome: "Cotizaciones uniformes en minutos para todas las empresas del grupo."
fits:
  - "Tu equipo arma cotizaciones, contratos o remisiones a mano en Word o Excel"
  - "Manejas varias razones sociales o marcas y los datos fiscales se equivocan"
  - "Cada persona usa su propia plantilla y los documentos no se parecen entre sí"
  - "No quieres pagar una suscripción mensual por resolver algo pequeño"
pitch: "No todo problema necesita una plataforma. Este se resolvió con una aplicación sin servidor que el equipo abre y usa, y por eso costó y cuesta lo que debe costar. Si tienes un documento repetitivo que hoy se arma a mano, casi siempre este es el tamaño correcto de solución."
---

Un problema pequeño con una solución del tamaño correcto: una aplicación estática que el equipo abre y usa, sin cuentas ni servidor que mantener.

Decidir el tamaño es parte del trabajo. Aquí no hacía falta base de datos, ni usuarios, ni historial en la nube: hacía falta que el documento saliera bien y siempre igual. Cuando la solución es más grande que el problema, el cliente termina pagando mantenimiento por funciones que nadie usa.
