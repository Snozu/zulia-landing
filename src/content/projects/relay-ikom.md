---
title: "Relay"
client: "iKom"
sector: "Operaciones y atención a clientes"
city: "Monterrey"
year: 2026
line: "agentica"
status: "piloto"
role: "cliente"
cover: "/projects/relay-ikom.webp"
coverAlt: "Consola de operaciones de Relay con el panel de actividad de agentes y la base de conocimiento"
featured: true
order: 2
summary: "Agente de operaciones que responde desde la base de datos y las políticas propias de la empresa, y se detiene ante una persona antes de gastar un centavo."
problem: "La respuesta a “¿por qué no ha llegado el pedido de este cliente y le debemos dinero?” vivía en dos lugares: la base de datos de pedidos y un documento de políticas que nadie releía. Cerrar esa brecha a mano era la mayor parte del trabajo de soporte."
context: "Un agente de soporte tardaba más en juntar la información que en resolver el caso: abrir el sistema, buscar el pedido, revisar el historial, y luego acordarse de qué dice la política de reembolsos para ese tipo de retraso. Cada caso se contestaba distinto según quién lo tomara."
built:
  - "Un orquestador y dos especialistas (operaciones y políticas) con nueve herramientas sobre PostgreSQL"
  - "Regla dura: el modelo no puede afirmar nada que no venga de una herramienta; cada llamada se ve en pantalla con su latencia real"
  - "Búsqueda semántica sobre documentos de política con pgvector y citas verificables"
  - "Una sola acción de escritura (reembolso), siempre con aprobación humana"
  - "Servidor MCP: Claude Desktop, Cursor u otro agente usan las mismas herramientas de lectura"
howItWorks:
  - step: "Alguien pregunta en lenguaje normal"
    detail: "«El pedido de este cliente lleva ocho días, ¿procede reembolso?». No hay que saber en qué tabla vive el dato ni en qué página está la política."
  - step: "El sistema decide a quién le toca"
    detail: "Un coordinador reparte: el especialista de operaciones consulta la base de datos de pedidos, el de políticas busca en los documentos internos de la empresa."
  - step: "Solo habla con datos en la mano"
    detail: "El modelo tiene prohibido afirmar algo que no venga de una consulta real. Si el dato no está, lo dice. Nunca completa el hueco con una suposición."
  - step: "Enseña su trabajo"
    detail: "En la misma pantalla se ve qué consultó, con qué parámetros, cuánto tardó y de qué párrafo de política salió la conclusión. Quien supervisa puede verificarlo sin abrir otro sistema."
  - step: "Se detiene antes del dinero"
    detail: "Puede leer todo lo que necesite, pero la única acción que mueve dinero (el reembolso) queda esperando a que una persona la apruebe."
delivered:
  - "Consola de operaciones donde soporte consulta datos y política citada en la misma pantalla"
  - "Nueve herramientas con permisos declarados: qué se puede leer, qué se puede escribir, qué requiere aprobación"
  - "Búsqueda sobre los documentos de política de la empresa con la cita verificable de cada respuesta"
  - "Servidor MCP para usar las mismas herramientas desde el asistente de IA que el equipo ya tiene"
  - "Trazabilidad de cada llamada con su latencia real"
stack:
  - "Next.js 16"
  - "Vercel AI SDK"
  - "PostgreSQL 17 + pgvector"
  - "Prisma"
  - "MCP"
  - "TypeScript"
outcome: "Soporte responde con datos y política citada en la misma pantalla, y la única acción con dinero pasa por una persona."
fits:
  - "Tu equipo de soporte u operaciones contesta las mismas preguntas todos los días cruzando un sistema con un documento"
  - "La respuesta correcta depende de quién tome el caso, porque la política vive en un archivo que nadie relee"
  - "Ya intentaron un chatbot y el problema fue que inventaba o que no podía consultar nada real"
  - "Necesitas que la IA lea mucho pero escriba poco, y que lo que toca dinero pase por una persona"
pitch: "Este es el patrón que aplica a casi cualquier área de servicio: los datos están en un sistema, las reglas están en un documento, y el trabajo humano es cruzarlos. Se replica sobre tu base de datos y tus políticas, empezando en modo de solo lectura para que puedas verificar la calidad antes de darle una sola acción de escritura."
---

Relay cierra la brecha entre el sistema de pedidos y el documento de políticas, y muestra su trabajo mientras lo hace. Cada respuesta enseña qué herramienta consultó, con qué parámetros y cuánto tardó.

El diseño de permisos es el centro del proyecto: siete herramientas de lectura para el especialista de operaciones, búsqueda documental para el de políticas, y exactamente una escritura con compuerta humana. Esa proporción no es casualidad. Un agente que puede leer mucho y escribir poco es útil desde el primer día y no puede causar un daño que alguien tenga que deshacer.

Al exponerse también como servidor MCP, las mismas herramientas quedan disponibles desde el asistente de IA que el equipo ya usa. No hay que elegir entre la consola nueva y la herramienta de siempre: las dos consultan exactamente la misma fuente.
