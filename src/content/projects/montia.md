---
title: "MontIA"
client: "Grupo Mont"
sector: "Distribución industrial"
city: "Monterrey"
year: 2026
line: "agentica"
status: "produccion"
role: "cliente"
featured: true
order: 1
summary: "Asistente ejecutivo dedicado para dirección: lee WhatsApp, correo y archivos, construye memoria con procedencia y detecta compromisos antes de que se conviertan en otra junta."
problem: "La dirección de Grupo Mont recibía compromisos, cotizaciones y pendientes por WhatsApp, correo y archivos sueltos. Nada se perdía por descuido: se perdía porque estaba en cinco lugares."
built:
  - "Instalación aislada por directivo en su propio servidor, sin datos compartidos entre cuentas"
  - "Ingesta de WhatsApp (Evolution API), correo y archivos con procesamiento de audio, imagen y documentos"
  - "Memoria ejecutiva con procedencia: cada dato sabe de qué mensaje o archivo salió"
  - "Detección de compromisos y riesgos, con notificaciones web push y enlaces privados temporales"
  - "Ejecución de acciones únicamente dentro de permisos y con aprobación explícita"
stack:
  - "Next.js"
  - "PostgreSQL"
  - "MinIO"
  - "Evolution API"
  - "Workers Node"
  - "DeepSeek / OpenAI"
outcome: "La dirección consulta y actúa desde el chat que ya usa. El sistema opera en producción en la infraestructura del cliente."
url: "https://agentic.proveedorafarid.com"
cover: "/projects/montia.webp"
coverAlt: "Interfaz de MontIA detectando un compromiso a partir de una conversación"
---

MontIA no es un chatbot conectado a WhatsApp. Es una instalación por directivo que ingiere información de fuentes autorizadas, construye una memoria ejecutiva con procedencia, detecta situaciones relevantes y prepara acciones. Solo ejecuta dentro de permisos aprobados, y mide calidad, latencia y costo por cuenta.

La arquitectura separa canales y fuentes (WhatsApp, correo, calendario, archivos, ERP) de un gateway de conectores, un registro de eventos, una cola durable y los workers que procesan texto, audio, visión y documentos. Esa separación es lo que permite agregar una fuente nueva sin tocar el resto.
