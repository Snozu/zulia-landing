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
context: "El costo real no era el olvido, era la reconstrucción: antes de cada junta alguien tenía que rearmar a mano el estado de un tema leyendo conversaciones viejas y buscando el archivo correcto. Ese trabajo se repetía cada semana y no dejaba nada acumulado."
built:
  - "Instalación aislada por directivo en su propio servidor, sin datos compartidos entre cuentas"
  - "Ingesta de WhatsApp (Evolution API), correo y archivos con procesamiento de audio, imagen y documentos"
  - "Memoria ejecutiva con procedencia: cada dato sabe de qué mensaje o archivo salió"
  - "Detección de compromisos y riesgos, con notificaciones web push y enlaces privados temporales"
  - "Ejecución de acciones únicamente dentro de permisos y con aprobación explícita"
howItWorks:
  - step: "Autorizas las fuentes"
    detail: "El directivo conecta su WhatsApp, su correo y las carpetas de archivos que quiere que el asistente vea. Nada más entra. Cada directivo tiene su propia instalación y sus datos no se mezclan con los de nadie."
  - step: "Todo se vuelve una sola memoria"
    detail: "Los mensajes de voz se transcriben, las fotos y los PDF se leen, y cada dato queda guardado junto con su origen: de qué conversación, de qué correo o de qué archivo salió."
  - step: "El sistema levanta la mano solo"
    detail: "Reconoce cuando algo es un compromiso, una fecha o un riesgo, y lo separa del ruido. No hace falta pedirle un resumen: avisa cuando aparece algo que hay que atender."
  - step: "Preguntas en lenguaje normal"
    detail: "«¿En qué quedamos con este proveedor?» se responde con la cita del mensaje donde se quedó. Si el dato no existe en una fuente autorizada, el asistente lo dice en lugar de inventarlo."
  - step: "Actúa solo con permiso"
    detail: "Puede preparar una acción, pero ejecutarla requiere que una persona lo apruebe. Cada movimiento queda registrado con quién lo autorizó."
delivered:
  - "Una instalación por directivo, corriendo en la infraestructura del propio cliente"
  - "Conexión a WhatsApp, correo y archivos con procesamiento de audio, imagen y documentos"
  - "Memoria consultable con procedencia verificable en cada respuesta"
  - "Notificaciones y enlaces privados temporales para compartir sin exponer la cuenta"
  - "Medición de calidad, latencia y costo por cuenta"
stack:
  - "Next.js"
  - "PostgreSQL"
  - "MinIO"
  - "Evolution API"
  - "Workers Node"
  - "DeepSeek / OpenAI"
outcome: "La dirección consulta y actúa desde el chat que ya usa. El sistema opera en producción en la infraestructura del cliente."
fits:
  - "La información que necesita la dirección llega por WhatsApp, correo y archivos, y nadie la concentra en un solo lugar"
  - "Se caen compromisos porque quedaron en una conversación y no en un sistema"
  - "Ya tienes ERP o CRM, pero nadie tiene tiempo de entrar a consultarlos"
  - "Manejas información sensible y necesitas que viva en tu propio servidor"
pitch: "Si tu dirección o tu equipo comercial vive en WhatsApp y correo, esto se replica sobre tus propias fuentes. Empezamos por una sola: la que hoy te cuesta más trabajo revisar. Con esa funcionando y midiendo, se decide la siguiente."
url: "https://agentic.proveedorafarid.com"
cover: "/projects/montia.webp"
coverAlt: "Interfaz de MontIA detectando un compromiso a partir de una conversación"
---

MontIA no es un chatbot conectado a WhatsApp. Es una instalación por directivo que ingiere información de fuentes autorizadas, construye una memoria ejecutiva con procedencia, detecta situaciones relevantes y prepara acciones. Solo ejecuta dentro de permisos aprobados, y mide calidad, latencia y costo por cuenta.

La arquitectura separa canales y fuentes (WhatsApp, correo, calendario, archivos, ERP) de un gateway de conectores, un registro de eventos, una cola durable y los workers que procesan texto, audio, visión y documentos. Esa separación es lo que permite agregar una fuente nueva sin tocar el resto: conectar el ERP más adelante no obliga a rehacer lo que ya funciona.

La decisión más importante del proyecto fue la de procedencia. Un asistente que responde bonito pero no puede decir de dónde sacó el dato no sirve para dirección, porque nadie va a tomar una decisión con dinero encima sobre una frase sin respaldo. Aquí cada respuesta se puede rastrear hasta el mensaje o el archivo del que salió.
