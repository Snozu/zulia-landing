import type { Line } from '../content.config';

export type ServiceVisual =
  | { type: 'image'; src: string; alt: string; caption: string }
  | { type: 'stats'; caption: string; items: { v: string; l: string }[] }
  | { type: 'list'; caption: string; items: string[] };

export type ServiceSpotlight = {
  label: string;
  title: string;
  body: string;
  items: { t: string; d: string; href?: string }[];
  note?: string;
};

export type Service = {
  slug: string;
  line: Line;
  name: string;
  shortName: string;
  promise: string;
  summary: string;
  /** La misma promesa dicha sin una sola palabra tecnica. Es lo que se lee en
   *  el hero: si alguien solo lee esta linea, ya sabe que se le esta vendiendo. */
  plain: string;
  idealFor: string;
  /** Una escena concreta en lugar de una descripcion. Es lo que hace que la
   *  pagina se entienda: nadie compra un concepto, compra un martes resuelto. */
  example: {
    /** 'chat' se pinta como conversación con burbujas; 'linea' como línea de
     *  tiempo. Lo que antes era una tabla de texto y no se veía como nada. */
    kind: 'chat' | 'linea' | 'consola';
    label: string;
    /** Solo en 'consola': lo que se le pide al agente. */
    peticion?: string;
    lines: { from: string; text: string; side?: 'der'; estado?: string }[];
    /** Solo en 'consola': la compuerta humana. Es lo unico que separa una capa
     *  agentica de un chatbot, asi que tiene que verse, no contarse. */
    aprobacion?: { titulo: string; detalle: string };
    outcome: string;
  };
  /** Lo que se muestra en el indice cuando la linea todavia no tiene casos
   *  publicados. Sin esto habria que inventar proyectos, y no se inventan. */
  indexNote?: string;
  /** Contraste honesto: la situacion de hoy y la de despues. Es el bloque que
   *  hace que el visitante se reconozca antes de leer nada tecnico. */
  contrast: { before: string[]; after: string[] };
  outcomes: { t: string; d: string }[];
  /** Etiqueta corta en negrita y el detalle despues. Una lista de seis
   *  renglones largos no se lee: se salta. Con la etiqueta al frente si. */
  deliverables: { t: string; d: string }[];
  process: { step: string; detail: string }[];
  offer: { name: string; includes: string[]; result: string };
  visual: ServiceVisual;
  spotlight?: ServiceSpotlight;
  faq: { q: string; a: string }[];
  searchTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'capa-agentica',
    line: 'agentica',
    name: 'Capa agéntica sobre tus sistemas',
    shortName: 'Capa agéntica',
    promise: 'Consulta y opera tus sistemas desde un solo chat, sin recorrer pantallas.',
    summary:
      'Conectamos el ERP, el CRM, el correo y WhatsApp que tu empresa ya usa a un asistente de IA que consulta información, ejecuta operaciones y pide aprobación humana antes de cualquier acción sensible.',
    plain:
      'En corto: le preguntas a un chat lo que hoy buscas en el ERP, y también le pides que haga la operación, con tu aprobación antes de cualquier movimiento delicado.',
    idealFor:
      'Direcciones y equipos de operación que viven entre cinco pantallas, soporte con alto volumen de consultas repetidas, y empresas que ya tienen sistemas pero no tiempo para usarlos.',
    example: {
      kind: 'consola',
      label: 'Martes, 9:15 de la mañana',
      peticion:
        '¿Cuánto nos debe La Barreta y cuándo fue su último pedido? Prepárale una cotización con esos mismos precios.',
      lines: [
        { from: 'ERP', text: 'Saldo de $184,300, con dos facturas vencidas.', estado: 'lectura' },
        { from: 'ERP', text: 'Último pedido: folio 4512, 21 de agosto, entregado.', estado: 'lectura' },
        { from: 'Cotizador', text: 'Cotización armada con los precios del folio 4512.', estado: 'borrador' },
        { from: 'Correo', text: 'Enviar al cliente es una acción sensible.', estado: 'detenido' },
      ],
      aprobacion: {
        titulo: '¿Enviar la cotización a La Barreta?',
        detalle: 'Sale desde tu correo. Queda registrado quién la aprobó y a qué hora.',
      },
      outcome:
        'Doce segundos, sin abrir el ERP. Y nada salió hasta que una persona dijo que sí.',
    },
    contrast: {
      before: [
        'Para saber el estado de un pedido alguien abre el ERP, busca el folio y lo copia a WhatsApp.',
        'Las mismas cinco preguntas llegan todos los días a la misma persona.',
        'Lo que se acordó por chat no queda registrado en ningún sistema.',
      ],
      after: [
        'Se pregunta en el chat y la respuesta sale del ERP, con folio y fecha.',
        'El asistente resuelve lo repetitivo y escala a una persona lo que no le toca.',
        'Cada consulta y cada acción queda registrada, con quién la aprobó.',
      ],
    },
    outcomes: [
      { t: 'Una pregunta, una respuesta con datos', d: 'Estado de un pedido, saldo de un cliente o existencia, respondido desde tus sistemas.' },
      { t: 'Acciones sin recorrer pantallas', d: 'Crear un pedido o mandar un documento desde el chat, con las reglas de siempre.' },
      { t: 'Nada sensible sin tu aprobación', d: 'Dinero, contratos y cambios delicados se detienen hasta que alguien diga sí.' },
    ],
    deliverables: [
      { t: 'Asistente conectado', d: 'a tus fuentes reales: base de datos, ERP, CRM, correo y archivos' },
      { t: 'Permisos por herramienta', d: 'qué puede leer, qué puede escribir y qué requiere aprobación' },
      { t: 'En el canal de siempre', d: 'WhatsApp, web o el chat de IA que tu equipo ya usa' },
      { t: 'Servidor MCP', d: 'para que Claude, Cursor u otro agente use las mismas herramientas' },
      { t: 'Trazabilidad', d: 'cada acción registrada, con evaluación de calidad y costo por uso' },
    ],
    process: [
      { step: 'Elegimos una operación', detail: 'Una tarea frecuente, con valor claro y límites verificables.' },
      { step: 'Conectamos fuentes y herramientas', detail: 'Solo lectura primero. Escritura únicamente con aprobación humana.' },
      { step: 'Probamos con casos reales', detail: 'Calidad de respuesta, fallos, rutas de escalamiento a una persona.' },
      { step: 'Desplegamos y medimos', detail: 'En tu servidor o en el nuestro, con métricas de uso, latencia y costo.' },
    ],
    offer: {
      name: 'Fase 1: un asistente sobre una operación',
      includes: [
        'Ficha de la operación: qué consulta, qué ejecuta, qué requiere aprobación',
        'Conexión a una o dos fuentes en modo lectura',
        'Canal en WhatsApp o web para tu equipo',
        'Dos semanas de pruebas con casos reales y ajustes',
        'Despliegue en tu servidor con registro de cada acción',
      ],
      result: 'Tu equipo consulta y opera esa tarea desde el chat. Con eso decidimos la siguiente.',
    },
    visual: { type: 'image', src: '/projects/montia.webp', alt: 'MontIA mostrando la actividad autónoma del día y una decisión pendiente', caption: 'MontIA, asistente ejecutivo para dirección. En producción.' },
    faq: [
      { q: '¿Es un chatbot?', a: 'No. Un chatbot responde texto. Una capa agéntica consulta tus sistemas, ejecuta acciones dentro de permisos y se detiene antes de gastar o modificar algo sin que una persona lo apruebe.' },
      { q: '¿Tenemos que cambiar de ERP o CRM?', a: 'No. La capa se conecta a lo que ya tienes por API, base de datos o correo. Si el sistema no tiene API, construimos el conector.' },
      { q: '¿Qué pasa con la información sensible?', a: 'Cada herramienta declara qué puede leer y escribir. El modelo no puede afirmar nada que no venga de una fuente autorizada, y cada llamada queda registrada.' },
      { q: '¿En qué servidor vive?', a: 'En el tuyo, si lo tienes, o en uno a tu nombre que administramos. Los datos no salen de ahí.' },
    ],
    searchTitle: 'Capa agéntica: agentes de IA conectados a tu ERP, CRM y WhatsApp | ZulIA',
    metaDescription:
      'Asistentes de IA que consultan y operan tus sistemas reales con permisos y aprobación humana. ERP, CRM, correo y WhatsApp conectados a un solo chat. Monterrey, México.',
  },
  {
    slug: 'chatbots',
    line: 'chatbots',
    name: 'Chatbots para WhatsApp y tu sitio',
    shortName: 'Chatbots',
    promise: 'Contesta las preguntas de siempre a cualquier hora, en WhatsApp, en tu sitio y en Instagram.',
    summary:
      'Montamos el chatbot completo: número propio verificado con Meta, entrenado con tu catálogo y tus políticas, respondiendo en WhatsApp, tu sitio web, Instagram y Messenger, y pasando la conversación a una persona cuando hace falta.',
    plain:
      'En corto: un asistente que atiende a tus clientes las veinticuatro horas con la información de tu negocio, y le pasa el chat a una persona cuando la conversación lo amerita.',
    idealFor:
      'Negocios que reciben las mismas preguntas todo el día por WhatsApp, equipos de ventas que pierden mensajes fuera de horario, y comercios que quieren atender mejor sin contratar a otra persona.',
    example: {
      kind: 'chat',
      label: 'Sábado, 10:40 de la noche',
      lines: [
        { from: 'Cliente', text: '¿Tienen el comedor Reyna en existencia? ¿Y hacen envío a Apodaca?' },
        { from: 'Asistente', text: 'Sí, queda una pieza de exhibición en $10,240. El envío al área metropolitana va sin costo y entrega en uno o dos días.', side: 'der' },
        { from: 'Cliente', text: 'Apártamela.' },
        { from: 'Asistente', text: 'Listo. Le paso tus datos a Ventas y el lunes a primera hora te confirman. ¿Me das tu nombre y un teléfono?', side: 'der' },
      ],
      outcome:
        'El lunes tu vendedor no encuentra un «hola» sin contestar desde el sábado: encuentra un prospecto con nombre, teléfono y qué quiere.',
    },
    contrast: {
      before: [
        'Los mensajes de la noche y del domingo se contestan hasta el lunes, si alguien se acuerda.',
        'Tres personas responden lo mismo: precio, horario, si hay existencia y si envían.',
        'El WhatsApp vive en el celular de una persona y nadie más ve esas conversaciones.',
      ],
      after: [
        'Se contesta al instante a cualquier hora, y en la mañana ya hay prospectos con datos.',
        'El asistente resuelve lo repetido y tu gente entra solo a lo que sí cierra.',
        'Número de la empresa, bandeja compartida y todo el historial a la vista del equipo.',
      ],
    },
    outcomes: [
      { t: 'Nadie se queda sin respuesta', d: 'Fuera de horario, en domingo y cuando entran veinte mensajes al mismo tiempo.' },
      { t: 'Tu gente atiende lo que sí vende', d: 'El asistente resuelve precio, horario y existencia. La persona entra a cerrar.' },
      { t: 'Deja de depender de un celular', d: 'El número queda a nombre de la empresa. Si alguien se va, las conversaciones no.' },
    ],
    deliverables: [
      { t: 'Número propio', d: 'verificado con Meta, a nombre de tu empresa y no de una persona' },
      { t: 'Entrenado con lo tuyo', d: 'catálogo, precios, políticas y preguntas frecuentes' },
      { t: 'Cuatro canales', d: 'el mismo asistente en WhatsApp, tu sitio, Instagram y Messenger' },
      { t: 'Plantillas aprobadas', d: 'para volver a escribirle a quien ya te contactó' },
      { t: 'Bandeja compartida', d: 'con paso a una persona en cualquier punto de la conversación' },
      { t: 'Reportes', d: 'cuántas conversaciones entraron, cuántas se resolvieron solas y qué costaron' },
    ],
    process: [
      { step: 'Juntamos lo que ya contestas', detail: 'Catálogo, precios, políticas y los mensajes reales de los últimos meses.' },
      { step: 'Damos de alta el número con Meta', detail: 'Verificación del negocio, número dedicado y plantillas a revisión.' },
      { step: 'Probamos con conversaciones reales', detail: 'Qué contesta bien, qué no sabe y en qué punto exacto debe pasar a una persona.' },
      { step: 'Publicamos y medimos', detail: 'Conversaciones atendidas, resueltas sin humano y costo por conversación.' },
    ],
    offer: {
      name: 'Nivel 1: el asistente contestando en un canal',
      includes: [
        'Alta y verificación del número con Meta',
        'Asistente entrenado con tu catálogo y tus preguntas frecuentes',
        'Publicado en WhatsApp o en tu sitio, el canal que más uses',
        'Bandeja compartida y paso a una persona',
        'Dos semanas de ajuste con conversaciones reales',
      ],
      result:
        'Tus clientes reciben respuesta a cualquier hora y tú ves por fin qué se pregunta de verdad. Con eso decidimos si conviene conectarlo a tus sistemas.',
    },
    spotlight: {
      label: 'Tres niveles',
      title: 'No todos necesitan lo mismo. Empieza donde te duele.',
      body:
        'Un asistente que solo responde preguntas cuesta y tarda una fracción de lo que cuesta uno conectado a tus sistemas. Te decimos en cuál estás antes de cotizarte, no después.',
      items: [
        { t: 'Responde', d: 'Aprende de tu catálogo, tus precios y tus políticas. Contesta lo que se pregunta siempre y pasa a una persona cuando no sabe. No consulta tus sistemas: no puede decirte dónde va un pedido.' },
        { t: 'Consulta', d: 'Lo anterior, más lectura en vivo de tu inventario, tu CRM o tu ERP. Responde con la existencia, el saldo y el estado del pedido reales, no con un guion.' },
        { t: 'Ejecuta', d: 'Ya no solo responde: crea el pedido, actualiza el dato, manda el documento. Con permisos y con aprobación humana antes de cualquier acción sensible. Eso es la capa agéntica.', href: '/servicios/capa-agentica/' },
      ],
      note:
        'La mayoría empieza en el primero y sube cuando ya tiene números propios. Lo que se construye en un nivel no se tira en el siguiente.',
    },
    visual: {
      type: 'list',
      caption: 'Lo que se monta y queda a tu nombre.',
      items: [
        'Número verificado con Meta',
        'Asistente entrenado con lo tuyo',
        'WhatsApp, web, Instagram y Messenger',
        'Plantillas aprobadas y costo por mensaje',
        'Bandeja compartida con paso a humano',
        'Reportes de conversación y de costo',
      ],
    },
    indexNote: 'Tres niveles, según lo que necesites',
    faq: [
      { q: '¿En qué se diferencia de los bots de botones?', a: 'Un bot de botones sigue un árbol: si el cliente escribe algo que no está en el menú, se traba. Este entiende la pregunta como venga escrita y responde con tu información. Y cuando no sabe, lo dice y pasa a una persona en lugar de inventar.' },
      { q: '¿Sirve el WhatsApp que ya uso?', a: 'El número que hoy usas en la aplicación de WhatsApp Business se puede migrar a la API oficial, pero deja de funcionar en esa aplicación. Casi siempre conviene dar de alta un número nuevo a nombre de la empresa y dejar el actual como está.' },
      { q: '¿Qué se le paga a Meta y qué a ustedes?', a: 'Desde julio de 2025 Meta cobra por mensaje, no por conversación, y ese consumo va directo a Meta. A partir del 1 de octubre de 2026 también se cobran las respuestas dentro de la ventana de 24 horas, que hoy son gratuitas. Te entregamos el cálculo por escrito con el modelo que va a estar vigente, no con el de hoy.' },
      { q: '¿Puede inventar cosas?', a: 'Responde únicamente con las fuentes que le autorizamos, con instrucción de decir que no sabe en lugar de suponer. Cada respuesta queda registrada para poder revisarla.' },
      { q: '¿Y si el cliente quiere hablar con una persona?', a: 'Lo pide y la conversación pasa a la bandeja compartida con todo el historial. También lo hace por su cuenta cuando detecta molestia o algo fuera de su alcance.' },
      { q: '¿Puede vender, no solo informar?', a: 'Sí: manda catálogo, arma el pedido y deja el prospecto calificado con nombre, teléfono y qué quiere. Cobrar dentro del chat es del segundo nivel, cuando ya está conectado a tus sistemas.' },
    ],
    searchTitle: 'Chatbot para WhatsApp y sitio web con inteligencia artificial | ZulIA',
    metaDescription:
      'Chatbots con IA para WhatsApp, sitio web, Instagram y Messenger. Número verificado con Meta, entrenado con tu catálogo y con paso a una persona. Monterrey, México.',
  },
  {
    slug: 'software-a-medida',
    line: 'software',
    name: 'Software operativo a medida',
    shortName: 'Software a medida',
    promise: 'El sistema que tu operación necesita, con IA donde aporta y sin donde no.',
    summary:
      'Diseñamos y construimos inventarios, portales, plataformas internas y SaaS que encajan con cómo trabaja tu empresa, en lugar de obligar al equipo a trabajar alrededor de un software genérico.',
    plain:
      'En corto: el sistema que hoy no existe, y por eso tu operación vive en hojas de cálculo y en la cabeza de dos personas.',
    idealFor:
      'Empresas con procesos particulares, equipos que ya rebasaron las hojas de cálculo y fundadores que necesitan convertir una idea en un producto usable.',
    example: {
      kind: 'linea',
      label: 'El cierre de mes, antes y después',
      lines: [
        { from: 'Antes', text: 'Alguien exportaba tres archivos, los cruzaba en Excel y armaba el reporte a mano. Media tarde, cada mes.' },
        { from: 'Antes', text: 'Cambiar un precio en el catálogo público era pedírselo a quien hizo la página.' },
        { from: 'Ahora', text: 'El reporte se abre hecho, con los datos de la misma base que usa la operación.' },
        { from: 'Ahora', text: 'Se cambia el precio en el sistema y el catálogo público ya lo trae.' },
      ],
      outcome:
        'No es que el equipo trabaje más rápido: es que el trabajo de copiar y pegar dejó de existir.',
    },
    contrast: {
      before: [
        'La operación vive en tres hojas de cálculo y en la cabeza de dos personas.',
        'El software de catálogo obliga al equipo a inventar atajos fuera del sistema.',
        'Cada reporte se arma a mano, copiando y pegando.',
      ],
      after: [
        'Un solo sistema con la lógica de tu negocio, no la de un producto genérico.',
        'El equipo trabaja dentro del sistema porque el sistema se parece a su trabajo.',
        'Reportes, PDF y catálogos salen de la misma base de datos, al momento.',
      ],
    },
    outcomes: [
      { t: 'Un solo lugar para operar', d: 'Inventario, pedidos, clientes o flotilla en un sistema con la lógica de tu negocio.' },
      { t: 'Datos que sí se pueden usar', d: 'Reportes, PDF y catálogo público salen de la misma base que usa la operación.' },
      { t: 'Tuyo, sin candados', d: 'Código, servidor y accesos a nombre de tu empresa desde el primer día.' },
    ],
    deliverables: [
      { t: 'Producto listo para operar', d: 'interfaz, API, base de datos y despliegue' },
      { t: 'Seguridad desde el día uno', d: 'roles, permisos y sesiones' },
      { t: 'Una sola base de datos', d: 'para el panel interno y para el catálogo público' },
      { t: 'Reportes y PDF', d: 'los que tu administración de verdad usa, no los que vienen de fábrica' },
      { t: 'Transferencia', d: 'documentación, código e infraestructura a tu nombre' },
    ],
    process: [
      { step: 'Mapeamos la operación', detail: 'Usuarios, decisiones y el proceso crítico que el sistema debe resolver.' },
      { step: 'Prototipamos el flujo', detail: 'Pantallas reales con datos reales antes de escribir el backend.' },
      { step: 'Construimos por entregables', detail: 'Fases que se pueden usar desde la primera, no meses de silencio.' },
      { step: 'Medimos y evolucionamos', detail: 'Uso real para priorizar la siguiente iteración.' },
    ],
    offer: {
      name: 'Fase 1 usable',
      includes: [
        'Mapa de la operación y del proceso que más duele',
        'Prototipo navegable con tus datos reales',
        'El módulo central en producción, con roles y permisos',
        'Despliegue en servidor a tu nombre y capacitación del equipo',
      ],
      result: 'Tu equipo opera el proceso principal en el sistema nuevo. Las siguientes fases se cotizan con lo aprendido.',
    },
    visual: { type: 'image', src: '/projects/cotizador-barreta.webp', alt: 'Cotizador multiempresa con datos de cliente, materiales y totales', caption: 'Cotizador multiempresa para un grupo acerero. En producción.' },
    faq: [
      { q: '¿Cómo cotizan?', a: 'Por fases con alcance cerrado. La primera es corta y termina con algo que tu equipo ya puede usar; su fecha se acuerda contigo en la asesoría inicial. Las siguientes se cotizan con lo aprendido en producción.' },
      { q: '¿El código es nuestro?', a: 'Sí. Repositorio, infraestructura y accesos quedan a nombre de tu empresa desde el inicio.' },
      { q: '¿Pueden trabajar con nuestro equipo actual?', a: 'Sí. Podemos liderar la implementación completa o entrar como apoyo en arquitectura, una integración crítica o una fase que el equipo interno necesita acelerar.' },
    ],
    searchTitle: 'Desarrollo de software a medida con IA en México | ZulIA',
    metaDescription:
      'Inventarios, portales, plataformas internas y SaaS a medida. Producto, frontend, backend, datos y despliegue con un solo equipo en Monterrey.',
  },
  {
    slug: 'sitios-y-catalogos',
    line: 'sitios',
    name: 'Sitios web, catálogos y tiendas en línea',
    shortName: 'Sitios y catálogos',
    promise: 'Sitios corporativos, landing pages, catálogos y e-commerce que cargan rápido y terminan en una conversación.',
    summary:
      'Sitios corporativos, landing pages, catálogos y tiendas en línea construidos para ser encontrados, entendidos y convertidos en una conversación o en una compra, con administración simple para tu equipo.',
    plain:
      'En corto: tu sitio, tu catálogo o tu tienda, hechos para abrir rápido, entenderse en el celular y terminar en una conversación contigo.',
    idealFor:
      'Cualquier negocio que necesite presencia y demanda en buscadores: distribuidores e industria, comercio y retail, despachos y servicios profesionales, y marcas que venden en línea. Desde una landing de una sola campaña hasta una red de sitios con catálogo. Igual construimos desde cero que reestructuramos el sitio que ya tienes.',
    example: {
      kind: 'linea',
      label: 'Domingo, 9:12 de la noche',
      lines: [
        { from: 'Alguien busca', text: '"racks industriales usados monterrey", desde el celular y con datos móviles.' },
        { from: 'Tu sitio', text: 'Abre en menos de dos segundos, con la medida, el precio y una foto real.' },
        { from: 'Esa persona', text: 'Toca un botón y ya está escribiendo por WhatsApp. No llenó ningún formulario.' },
        { from: 'Tú', text: 'Recibes el mensaje con la página y la campaña de donde vino.' },
      ],
      outcome:
        'Que te escriban o que se regresen a Google no se decide con ideas de diseño: se decide en segundos de carga y en dónde está el botón.',
    },
    contrast: {
      before: [
        'El sitio tarda en abrir y buena parte de quien llega desde el celular se va antes.',
        'Se ve como una plantilla: el visitante no distingue tu empresa de la de al lado.',
        'Actualizar un precio o un producto depende de quien hizo la página.',
      ],
      after: [
        'Carga en menos de dos segundos, medido con PageSpeed y con la prueba a la vista.',
        'Diseño hecho para tu negocio, que no parece plantilla ni salido de un generador.',
        'Tú actualizas el catálogo y el sitio se reconstruye solo.',
      ],
    },
    outcomes: [
      { t: 'Te encuentran', d: 'Páginas por producto o servicio que Google y los asistentes de IA pueden citar.' },
      { t: 'Carga en un parpadeo', d: 'PageSpeed arriba de 90 como criterio de entrega, no como promesa.' },
      { t: 'Te escriben', d: 'Cada página termina en WhatsApp o en un correo tuyo. Sin plugins que se rompen.' },
      { t: 'Se ve diseñado, no generado', d: 'Identidad propia y una sola idea por pantalla. Ni plantilla ni generador.' },
      { t: 'Sirve para reestructurar, no solo para empezar', d: 'Si ya tienes sitio, lo reordenamos sin perder lo que hoy te posiciona.' },
    ],
    deliverables: [
      { t: 'Lo que necesites', d: 'sitio corporativo, landing, catálogo o tienda en línea' },
      { t: 'Rediseño', d: 'reestructura del sitio actual conservando lo que ya posiciona' },
      { t: 'Diseño propio', d: 'sin plantillas y sin apariencia de página generada en automático' },
      { t: 'Arquitectura de mensaje', d: 'páginas por línea de negocio, no una sola que lo diga todo' },
      { t: 'Catálogo administrable', d: 'con WordPress u otra fuente, y render estático rápido' },
      { t: 'SEO técnico', d: 'datos estructurados y contenido listo para respuestas de IA' },
      { t: 'Formularios', d: 'que llevan a WhatsApp o a tu correo, sin fricción' },
      { t: 'Todo a tu nombre', d: 'hosting, dominio, correo y migración' },
    ],
    process: [
      { step: 'Mapeamos búsquedas y decisiones', detail: 'Qué pregunta la gente, qué compara, qué necesita ver para escribirte.' },
      { step: 'Definimos entidades y evidencia', detail: 'Productos, capacidades y datos que una persona o un sistema pueda verificar.' },
      { step: 'Construimos con rendimiento desde la base', detail: 'Estático, accesible, indexable, con datos estructurados.' },
      { step: 'Medimos visibilidad y conversión', detail: 'Search Console, analítica y clics a WhatsApp.' },
    ],
    offer: {
      name: 'Sitio en producción',
      includes: [
        'Arquitectura de mensaje y páginas por servicio o producto',
        'Diseño y construcción con tu identidad, sin plantilla',
        'SEO técnico, sitemap, datos estructurados y versión para respuestas de IA',
        'Formularios a WhatsApp o correo, hosting, dominio y correo a tu nombre',
        'Entrega con PageSpeed de 90 o más en móvil y escritorio',
      ],
      result: 'Un sitio que carga rápido, se indexa y convierte visitas en conversaciones. Mantenimiento mensual opcional.',
    },
    visual: { type: 'image', src: '/projects/muebleria-juarez.webp', alt: 'Portada de muebleriajuarez.com', caption: 'Mueblería Juárez. PageSpeed 94 en móvil y 100 en escritorio.' },
    spotlight: {
      label: 'Visibilidad en asistentes de IA',
      title: 'Cada vez más clientes preguntan primero a un asistente, no a Google.',
      body:
        'Cuando alguien le pide a ChatGPT, Claude, Perplexity o al resumen de Google que le recomiende un proveedor, la respuesta se arma con los sitios que esos sistemas pueden leer, entender y citar. La mayoría de los sitios en México no están preparados para eso. Los tuyos sí salen así de nuestras manos.',
      items: [
        { t: 'Permiso explícito, por nombre', d: 'En el archivo robots.txt declaramos qué asistentes pueden leer tu sitio: GPTBot y OAI-SearchBot de OpenAI, ClaudeBot de Anthropic, PerplexityBot y Google-Extended. Si no están autorizados, no te pueden citar.' },
        { t: 'Un resumen escrito para modelos', d: 'Publicamos un archivo llms.txt: una versión limpia y ordenada de qué hace tu empresa, qué vende y a quién, para que un modelo no tenga que adivinarlo del maquetado.' },
        { t: 'Datos estructurados', d: 'Organización, servicios, productos, precios y preguntas frecuentes marcados en schema.org, que es el formato que buscadores y asistentes leen sin ambigüedad.' },
        { t: 'Se mide, no se promete', d: 'PageSpeed de Google ya evalúa qué tan navegable es un sitio para un agente. El sitio satélite de VIGA salió 3 de 3 en ese criterio, medido en público.' },
      ],
      note: 'A esto se le llama SEO técnico para buscadores y GEO para motores generativos. El nombre importa menos que el resultado: que cuando alguien pregunte por un proveedor como tú, tu sitio sea uno de los que el asistente puede leer y citar.',
    },
    faq: [
      { q: '¿Puedo seguir administrando mi contenido?', a: 'Sí. Usamos WordPress u otra fuente como panel de administración y renderizamos un sitio estático rápido encima.' },
      { q: '¿Hacen la migración de hosting?', a: 'Sí, incluyendo DNS, correo y certificados. Lo hemos hecho de proveedores nacionales a VPS con Docker.' },
      { q: '¿Qué es el mantenimiento mensual?', a: 'Ajustes técnicos y de SEO, monitoreo, respaldos y cambios de contenido acotados. No es rediseñar cada mes.' },
    ],
    searchTitle: 'Diseño de sitios web, landing pages, catálogos y e-commerce en Monterrey | ZulIA',
    metaDescription:
      'Sitios corporativos, landing pages, catálogos y tiendas en línea rápidos e indexables, listos para buscadores y respuestas de IA. Administración simple y hosting a tu nombre.',
  },
  {
    slug: 'campanas-con-agentes',
    line: 'marketing',
    name: 'Campañas de Google Ads operadas por agentes',
    shortName: 'Campañas con agentes',
    promise: 'Para negocios de ticket alto y pocas búsquedas al mes: menos clics, pero los correctos.',
    summary:
      'Un método de siete fases para campañas de búsqueda en mercados industriales y B2B, ejecutado cada semana por un agente con reglas duras y revisado por una persona. Medición antes del primer peso, atribución de ventas reales y reporte mensual.',
    plain:
      'En corto: pauta en Google para negocios donde se busca poco al mes y cada clic equivocado se siente en el presupuesto.',
    idealFor:
      'Industria, maquinaria, materiales, equipo usado, refacciones y servicios especializados: mercados con pocas búsquedas al mes donde una sola venta paga el año. Para e-commerce y consumo masivo, la pauta se plantea de otra forma.',
    example: {
      kind: 'linea',
      label: 'Una semana de campaña',
      lines: [
        { from: 'Lunes', text: 'Alguien busca "racks industriales usados" y cae en la página de esa medida, no en el inicio.' },
        { from: 'Lunes', text: 'Otro busca "racks para bodega baratos". La campaña lo bloquea: no es tu cliente.' },
        { from: 'Jueves', text: 'Se revisan los términos reales que activaron los anuncios y se recorta lo que no sirvió.' },
        { from: 'Se mide', text: 'Conversaciones de WhatsApp y cotizaciones. No impresiones.' },
      ],
      outcome:
        'En la campaña de racks de VIGA fueron 48 clics en el mes, con $1,370 de pauta. De ahí salieron $4.56 M en ventas atribuidas.',
    },
    contrast: {
      before: [
        'La campaña gasta en clics de gente que nunca iba a comprar.',
        'El reporte habla de impresiones y clics, no de conversaciones reales.',
        'Nadie revisa las búsquedas que de verdad activaron el anuncio.',
      ],
      after: [
        'Se le habla a quien busca justo lo que vendes, y se bloquea el resto.',
        'Se mide la conversación y la cotización, no el clic.',
        'Cada semana se revisan términos reales y se recorta lo que no sirve.',
      ],
    },
    outcomes: [
      { t: 'Gastas en el clic correcto, no en volumen', d: 'Solo búsqueda, concordancia de frase y negativas desde el día uno.' },
      { t: 'Sabes qué venta vino de la campaña', d: 'Cada contacto llega marcado con la campaña y el término que lo trajo.' },
      { t: 'Alguien la opera cada semana', d: 'Un agente diagnostica, propone y ajusta cada semana, con bitácora.' },
    ],
    deliverables: [
      { t: 'Ficha del cliente', d: 'ticket, margen y cuánto vale un contacto para tu negocio' },
      { t: 'Investigación', d: 'búsquedas reales por vertical y por ciudad' },
      { t: 'Landing por vertical', d: 'con WhatsApp en un toque y el origen capturado en cada mensaje' },
      { t: 'Medición', d: 'instalada antes de encender la pauta, no después' },
      { t: 'Campaña', d: 'con reglas duras y estructura mínima por región' },
      { t: 'Operación semanal', d: 'a cargo de un agente, con ciclo de cinco pasos y bitácora' },
      { t: 'Reporte mensual', d: 'inversión, IVA retenido, contactos y ventas, en tu idioma' },
    ],
    process: [
      { step: 'Ficha e investigación', detail: 'Qué vendes, a quién, en qué ciudades y qué buscan de verdad. Con datos, en la llamada.' },
      { step: 'Activo digital y medición', detail: 'Landing por vertical con WhatsApp y rastreo de origen. No se gasta un peso sin medir.' },
      { step: 'Construcción con reglas duras', detail: 'Solo búsqueda, frase, negativas, tope de CPC, una campaña por región.' },
      { step: 'Operación y decisión', detail: 'Cada semana: leer, diagnosticar, proponer, aplicar con confirmación, verificar. Cada mes: escalar, ampliar o recortar.' },
    ],
    offer: {
      name: 'Instalación y primer mes de operación',
      includes: [
        'Ficha del cliente y unit economics en la primera llamada',
        'Investigación de búsquedas y trampa de volumen revisada',
        'Landing por vertical con WhatsApp y atribución de origen',
        'Campaña construida en tu propia cuenta de Google Ads',
        'Cuatro ciclos semanales de operación y el primer reporte mensual',
      ],
      result: 'Campaña operando con medición real. A partir del segundo mes, operación mensual con reporte.',
    },
    visual: {
      type: 'stats',
      caption: 'Metales y Reciclados VIGA, racks industriales usados, Baja California. 23 de julio al 2 de septiembre de 2026. Ventas reportadas por el cliente.',
      items: [
        { v: '$1,370', l: 'MXN de pauta real' },
        { v: '48', l: 'clics' },
        { v: '8.45%', l: 'CTR' },
        { v: '$4.56 M', l: 'MXN en ventas atribuidas' },
      ],
    },
    faq: [
      { q: '¿Funciona para cualquier negocio?', a: 'Este método de campañas no. Está hecho para ticket alto y pocas búsquedas al mes: industria, maquinaria, materiales, servicios especializados. En e-commerce, retail o restaurantes el juego es de volumen y las reglas de presupuesto de este método se quedan cortas; para esos casos construimos el sitio o la tienda en línea y planteamos la pauta de otra forma.' },
      { q: '¿Cuánto presupuesto de pauta necesito?', a: 'Menos del que dice la industria. El caso de VIGA gastó alrededor de $900 MXN al mes y generó dos ventas. Lo definimos con tus unit economics, no con un mínimo genérico.' },
      { q: '¿Qué hace el agente y qué hace una persona?', a: 'El agente lee la cuenta, diagnostica con datos reales y propone cambios respaldados. Una persona confirma antes de aplicar cualquier cambio o gasto. Todo queda en bitácora.' },
      { q: '¿La cuenta es mía?', a: 'Sí. Se construye en tu cuenta de Google Ads y la landing queda en tu dominio. Si dejamos de operarla, todo sigue siendo tuyo.' },
    ],
    searchTitle: 'Campañas de Google Ads para industria y B2B operadas con agentes de IA | ZulIA',
    metaDescription:
      'Campañas de Google Ads para industria y B2B de ticket alto en México. Medición antes de gastar, atribución de ventas reales y operación semanal por agentes.',
  },
  {
    slug: 'ingenieria-con-ia',
    line: 'ingenieria',
    name: 'Ingeniería asistida por IA para tu equipo',
    shortName: 'Ingeniería con IA',
    promise: 'Tu equipo construye con agentes de código sin romper producción.',
    summary:
      'Instalamos el método: especificaciones antes de código, reglas para agentes, skills reutilizables, runbooks y compuertas de revisión, adaptados al stack y a los riesgos reales de tu empresa.',
    plain:
      'En corto: instalamos la forma de trabajar para que tu equipo use agentes de código sin que el resultado dependa de quién los usó.',
    idealFor:
      'Equipos técnicos que ya usan Claude Code, Cursor o Copilot y necesitan velocidad sin perder control, y direcciones que quieren medir qué tanto aporta la IA al desarrollo.',
    example: {
      kind: 'linea',
      label: 'Un cambio, de principio a fin',
      lines: [
        { from: 'Se pide', text: 'La especificación antes que el código: qué debe pasar y qué no debe romperse.' },
        { from: 'El agente', text: 'Propone el cambio siguiendo las reglas del repositorio, no las suyas.' },
        { from: 'La revisión', text: 'Pruebas y compuertas deciden si entra. Nadie aprueba código que no leyó.' },
        { from: 'Queda', text: 'El archivo del cambio y el runbook para volver a desplegarlo igual.' },
      ],
      outcome:
        'La velocidad sube sin que la deuda técnica la pague el mes siguiente.',
    },
    contrast: {
      before: [
        'Cada quien usa el agente de código a su manera y el resultado no se parece.',
        'Entra código generado que nadie terminó de leer.',
        'La velocidad sube un mes y la deuda técnica la paga el siguiente.',
      ],
      after: [
        'Reglas, contexto y comandos iguales para todo el equipo, dentro del repositorio.',
        'El agente propone; la revisión y las pruebas deciden qué entra.',
        'Se mide cuánto del código generado sigue vivo una semana después.',
      ],
    },
    outcomes: [
      { t: 'Los agentes conocen tu repo', d: 'Contexto, reglas y prohibiciones viven en el repositorio, no en cada cabeza.' },
      { t: 'Nada entra sin propuesta', d: 'Los cambios que importan se especifican y se revisan antes de aplicarse.' },
      { t: 'Se sostiene sin nosotros', d: 'Skills, runbooks y plantillas que el equipo reutiliza sin nosotros.' },
    ],
    deliverables: [
      { t: 'Metodología documentada', d: 'ciclo de vida, propuestas, revisión humana y archivo' },
      { t: 'Contexto para agentes', d: 'AGENTS.md, skills y hooks, uno por repositorio' },
      { t: 'Servidores MCP internos', d: 'para exponer tus APIs a los agentes con autenticación' },
      { t: 'Runbooks', d: 'de despliegue y operación, escritos para que un agente los siga' },
      { t: 'Adopción', d: 'sesiones con el equipo y métricas de uso reales' },
    ],
    process: [
      { step: 'Auditamos cómo construyen hoy', detail: 'Repos, despliegues, pruebas, dónde duele.' },
      { step: 'Definimos el ciclo con IA', detail: 'Qué se especifica, qué se delega, dónde revisa una persona.' },
      { step: 'Instrumentamos los repos', detail: 'Contexto, skills y compuertas en el código, no en un PDF.' },
      { step: 'Acompañamos la adopción', detail: 'Sesiones con el equipo hasta que el método se sostenga solo.' },
    ],
    offer: {
      name: 'Auditoría e instalación',
      includes: [
        'Auditoría de repositorios, despliegues y pruebas',
        'Ciclo de desarrollo con IA definido con el equipo',
        'Contexto, skills y compuertas instalados en uno o dos repositorios',
        'Tres sesiones de adopción con el equipo',
      ],
      result: 'El equipo construye con agentes bajo reglas compartidas, y tiene la plantilla para el resto de los repos.',
    },
    visual: {
      type: 'list',
      caption: 'Lo que queda instalado en cada repositorio.',
      items: ['AGENTS.md con reglas y prohibiciones', 'Skills reutilizables por tarea', 'Propuesta, revisión y archivo de cada cambio', 'Runbooks de despliegue y operación', 'Servidor MCP interno con autenticación', 'Bitácora de sesiones por repositorio'],
    },
    faq: [
      { q: '¿Es capacitación?', a: 'Es más que eso. Dejamos el método instalado en los repositorios y acompañamos al equipo hasta que lo opera sin nosotros.' },
      { q: '¿Con qué herramientas funciona?', a: 'Claude Code, Cursor y Copilot. El contexto se escribe en formatos que los tres leen.' },
    ],
    searchTitle: 'Ingeniería de software asistida por IA para equipos técnicos | ZulIA',
    metaDescription:
      'Metodología, contexto para agentes, MCP internos y compuertas de revisión para que tu equipo construya con IA sin romper producción.',
  },
  {
    slug: 'cursos',
    line: 'cursos',
    name: 'Capacitación en IA para empresas',
    shortName: 'Cursos',
    promise: 'Tu equipo usando inteligencia artificial en su trabajo diario, no en teoría.',
    summary:
      'Cursos de inteligencia artificial en Monterrey para profesionistas, dueños de negocio y áreas completas, enfocados en el trabajo real de cada participante: correos, reportes, análisis y automatizaciones.',
    plain:
      'En corto: tu equipo aprende IA sobre sus propios correos, reportes y procesos, y sale del curso con una tarea suya ya automatizada.',
    idealFor:
      'Áreas de administración, ventas, marketing y operaciones, y dueños de pymes que ya vieron que la IA sirve y no saben por dónde empezar en su operación.',
    example: {
      kind: 'linea',
      label: 'Un taller de un día',
      lines: [
        { from: 'Antes', text: 'Cada quien trae una tarea suya que le come tiempo todas las semanas.' },
        { from: 'Durante', text: 'Esa tarea se resuelve con las herramientas que la empresa ya paga.' },
        { from: 'Al cierre', text: 'Sale la lista de qué más conviene automatizar en esa área.' },
        { from: 'Después', text: 'Queda el cuaderno de prompts y flujos del equipo.' },
      ],
      outcome:
        'Nadie sale con apuntes de un tutorial: sale con su propio pendiente ya resuelto.',
    },
    contrast: {
      before: [
        'El equipo vio un tutorial y volvió a trabajar exactamente igual.',
        'Se paga una herramienta que tres personas abren una vez al mes.',
        'Cada quien inventa sus prompts y ninguno se reutiliza.',
      ],
      after: [
        'Cada persona sale del curso con una tarea suya ya automatizada.',
        'Se usa lo que la empresa ya paga, sobre los casos reales del área.',
        'Queda un cuaderno de prompts y flujos del equipo, no de un curso genérico.',
      ],
    },
    outcomes: [
      { t: 'Horas de vuelta cada semana', d: 'Correos, resúmenes y reportes que hoy toman una tarde, resueltos en minutos.' },
      { t: 'Con sus propios casos', d: 'Cada ejercicio usa los documentos del participante, no ejemplos de internet.' },
      { t: 'Una lista de qué automatizar', d: 'El curso cierra con el diagnóstico de qué automatizar en esa área.' },
    ],
    deliverables: [
      { t: 'Dos formatos', d: 'programas abiertos en Monterrey y talleres in company' },
      { t: 'Ejercicios reales', d: 'sobre los documentos y procesos de cada participante' },
      { t: 'Seguimiento', d: 'material y comunidad de alumnos' },
      { t: 'Diagnóstico al cierre', d: 'qué conviene automatizar en esa área' },
    ],
    process: [
      { step: 'Diagnóstico', detail: 'Qué hace el equipo todos los días y dónde la IA ahorra tiempo real.' },
      { step: 'Programa', detail: 'Sesiones prácticas con sus propios casos.' },
      { step: 'Seguimiento', detail: 'Material, comunidad y una ruta para lo que sigue.' },
    ],
    offer: {
      name: 'Taller in company',
      includes: [
        'Diagnóstico previo con el responsable del área',
        'Sesiones prácticas sobre los casos del equipo',
        'Material de seguimiento y acceso a la comunidad',
        'Diagnóstico de automatización al cierre',
      ],
      result: 'El equipo sale usando IA en su trabajo y con una lista priorizada de lo que sigue.',
    },
    indexNote: 'Programas abiertos e in company',
    visual: {
      type: 'list',
      caption: 'Programa base, se adapta al área.',
      items: ['Escribir y resumir con IA', 'Datos, reportes y análisis', 'Automatizar lo repetitivo', 'Cierre: diagnóstico de tu operación'],
    },
    faq: [
      { q: '¿Es para programadores?', a: 'No. Está dirigido a personas que quieren aplicar inteligencia artificial en su trabajo diario. Quien busca certificarse como ingeniero de IA no es el público de estos programas.' },
      { q: '¿Dónde se imparten?', a: 'Programas abiertos en Monterrey y talleres in company en tus instalaciones o en línea.' },
    ],
    searchTitle: 'Cursos de inteligencia artificial para empresas en Monterrey | ZulIA',
    metaDescription:
      'Capacitación práctica en IA para profesionistas, dueños de negocio y equipos completos. Programas abiertos e in company en Monterrey.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getServiceByLine = (line: Line) => services.find((s) => s.line === line);
