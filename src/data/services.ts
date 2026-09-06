import type { Line } from '../content.config';

export type ServiceVisual =
  | { type: 'image'; src: string; alt: string; caption: string }
  | { type: 'stats'; caption: string; items: { v: string; l: string }[] }
  | { type: 'list'; caption: string; items: string[] };

export type Service = {
  slug: string;
  line: Line;
  name: string;
  shortName: string;
  promise: string;
  summary: string;
  idealFor: string;
  outcomes: { t: string; d: string }[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  offer: { name: string; duration: string; includes: string[]; result: string };
  visual: ServiceVisual;
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
    promise: 'Deja de entrar al ERP. Pregúntale a tu chat y que él haga el movimiento.',
    summary:
      'Conectamos el ERP, el CRM, el correo y WhatsApp que tu empresa ya usa a un asistente de IA que consulta información, ejecuta operaciones y pide aprobación humana antes de cualquier acción sensible.',
    idealFor:
      'Direcciones y equipos de operación que viven entre cinco pantallas, soporte con alto volumen de consultas repetidas, y empresas que ya tienen sistemas pero no tiempo para usarlos.',
    outcomes: [
      { t: 'Una pregunta, una respuesta con datos', d: 'El estado de un pedido, el saldo de un cliente o el inventario de un producto, respondido desde tus sistemas y no de memoria.' },
      { t: 'Acciones sin recorrer pantallas', d: 'Crear un pedido, actualizar un dato o mandar un documento desde el chat, con las mismas reglas que hoy aplica una persona.' },
      { t: 'Nada sensible sin tu aprobación', d: 'Dinero, contratos y cambios delicados se detienen hasta que alguien diga sí. Todo queda registrado.' },
    ],
    deliverables: [
      'Asistente conectado a tus fuentes reales: base de datos, ERP, CRM, correo, archivos',
      'Herramientas con permisos: qué puede leer, qué puede escribir, qué requiere aprobación',
      'Canal donde ya trabaja tu equipo: WhatsApp, web o el chat de IA que ya usan',
      'Servidor MCP para que Claude, Cursor u otro agente use las mismas herramientas',
      'Trazabilidad de cada acción, evaluación de calidad y control de costo por uso',
    ],
    process: [
      { step: 'Elegimos una operación', detail: 'Una tarea frecuente, con valor claro y límites verificables.' },
      { step: 'Conectamos fuentes y herramientas', detail: 'Solo lectura primero. Escritura únicamente con aprobación humana.' },
      { step: 'Probamos con casos reales', detail: 'Calidad de respuesta, fallos, rutas de escalamiento a una persona.' },
      { step: 'Desplegamos y medimos', detail: 'En tu servidor o en el nuestro, con métricas de uso, latencia y costo.' },
    ],
    offer: {
      name: 'Fase 1: un asistente sobre una operación',
      duration: '4 a 6 semanas',
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
    slug: 'software-a-medida',
    line: 'software',
    name: 'Software operativo a medida',
    shortName: 'Software a medida',
    promise: 'El sistema que tu operación necesita, con IA donde aporta y sin donde no.',
    summary:
      'Diseñamos y construimos inventarios, portales, plataformas internas y SaaS que encajan con cómo trabaja tu empresa, en lugar de obligar al equipo a trabajar alrededor de un software genérico.',
    idealFor:
      'Empresas con procesos particulares, equipos que ya rebasaron las hojas de cálculo y fundadores que necesitan convertir una idea en un producto usable.',
    outcomes: [
      { t: 'Un solo lugar para operar', d: 'Inventario, pedidos, clientes o flotilla en un sistema que refleja cómo trabaja tu gente, no cómo trabaja un software genérico.' },
      { t: 'Datos que sí se pueden usar', d: 'Reportes, PDF y catálogos públicos salen de la misma base de datos que usa la operación. Sin copiar y pegar.' },
      { t: 'Tuyo, sin candados', d: 'Código, servidor y accesos a nombre de tu empresa desde el primer día.' },
    ],
    deliverables: [
      'Producto web listo para operar: interfaz, API, base de datos y despliegue',
      'Roles, permisos y sesiones seguras desde el primer día',
      'Catálogos públicos y paneles internos sobre la misma base de datos',
      'Reportes, PDF y exportaciones que tu administración realmente usa',
      'Documentación y transferencia: el código y la infraestructura son tuyos',
    ],
    process: [
      { step: 'Mapeamos la operación', detail: 'Usuarios, decisiones y el proceso crítico que el sistema debe resolver.' },
      { step: 'Prototipamos el flujo', detail: 'Pantallas reales con datos reales antes de escribir el backend.' },
      { step: 'Construimos por entregables', detail: 'Fases que se pueden usar desde la primera, no meses de silencio.' },
      { step: 'Medimos y evolucionamos', detail: 'Uso real para priorizar la siguiente iteración.' },
    ],
    offer: {
      name: 'Fase 1 usable',
      duration: '4 a 8 semanas',
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
      { q: '¿Cómo cotizan?', a: 'Por fases con alcance cerrado. Una fase uno usable en semanas, y las siguientes se cotizan con lo aprendido en producción.' },
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
    name: 'Sitios y catálogos que venden',
    shortName: 'Sitios y catálogos',
    promise: 'Una web rápida, indexable y legible para Google y para los agentes de IA que hoy recomiendan proveedores.',
    summary:
      'Sitios corporativos, catálogos y e-commerce construidos para ser encontrados, entendidos y convertidos en una conversación, con administración simple para tu equipo.',
    idealFor:
      'Negocios B2B, servicios especializados y distribuidores que necesitan ganar demanda en buscadores y en respuestas generadas por IA.',
    outcomes: [
      { t: 'Te encuentran', d: 'Páginas por producto o servicio, datos estructurados y contenido que Google y los asistentes de IA pueden leer y citar.' },
      { t: 'Carga en un parpadeo', d: 'Sitios estáticos con PageSpeed arriba de 90 como criterio de entrega, no como promesa.' },
      { t: 'Te escriben', d: 'Cada página termina en WhatsApp o en un formulario que llega a tu correo. Sin fricción, sin plugins que se rompen.' },
    ],
    deliverables: [
      'Arquitectura de mensaje y páginas por línea de negocio',
      'Catálogo administrable, con WordPress u otra fuente, y render estático rápido',
      'SEO técnico, datos estructurados y contenido listo para respuestas de IA',
      'Formularios que llevan a WhatsApp o correo sin fricción',
      'Hosting, dominio, correo y migración a nombre del cliente',
    ],
    process: [
      { step: 'Mapeamos búsquedas y decisiones', detail: 'Qué pregunta la gente, qué compara, qué necesita ver para escribirte.' },
      { step: 'Definimos entidades y evidencia', detail: 'Productos, capacidades y datos que una persona o un sistema pueda verificar.' },
      { step: 'Construimos con rendimiento desde la base', detail: 'Estático, accesible, indexable, con datos estructurados.' },
      { step: 'Medimos visibilidad y conversión', detail: 'Search Console, analítica y clics a WhatsApp.' },
    ],
    offer: {
      name: 'Sitio en producción',
      duration: '3 a 6 semanas',
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
    faq: [
      { q: '¿Puedo seguir administrando mi contenido?', a: 'Sí. Usamos WordPress u otra fuente como panel de administración y renderizamos un sitio estático rápido encima.' },
      { q: '¿Hacen la migración de hosting?', a: 'Sí, incluyendo DNS, correo y certificados. Lo hemos hecho de proveedores nacionales a VPS con Docker.' },
      { q: '¿Qué es el mantenimiento mensual?', a: 'Ajustes técnicos y de SEO, monitoreo, respaldos y cambios de contenido acotados. No es rediseñar cada mes.' },
    ],
    searchTitle: 'Diseño de sitios web y catálogos B2B con SEO en Monterrey | ZulIA',
    metaDescription:
      'Sitios corporativos, catálogos y e-commerce rápidos e indexables, listos para buscadores y respuestas de IA. Administración simple y hosting a tu nombre.',
  },
  {
    slug: 'campanas-con-agentes',
    line: 'marketing',
    name: 'Campañas de Google Ads operadas por agentes',
    shortName: 'Campañas con agentes',
    promise: 'Para negocios de ticket alto y pocas búsquedas: que el clic correcto encuentre a alguien que conteste.',
    summary:
      'Un método de siete fases para campañas de búsqueda en mercados industriales y B2B, ejecutado cada semana por un agente con reglas duras y revisado por una persona. Medición antes del primer peso, atribución de ventas reales y reporte mensual.',
    idealFor:
      'Industria, maquinaria, materiales, equipo usado, refacciones y servicios especializados: mercados con pocas búsquedas al mes donde una sola venta paga el año. No es para e-commerce ni consumo masivo.',
    outcomes: [
      { t: 'Gastas en el clic correcto, no en volumen', d: 'Solo red de búsqueda, concordancia de frase, negativas desde el día uno y tope de costo por clic. En nichos industriales gastar más compra basura.' },
      { t: 'Sabes qué venta vino de la campaña', d: 'La landing marca cada contacto de WhatsApp con su origen y campaña. El criterio de corte es la venta real que reporta el cliente, nunca un clic.' },
      { t: 'Alguien la opera cada semana', d: 'Un agente con procedimiento auditable diagnostica, propone, aplica con tu confirmación y reporta. Nada se cambia sin que lo veas.' },
    ],
    deliverables: [
      'Ficha del cliente con unit economics: ticket, margen y cuánto vale un contacto',
      'Investigación de búsquedas reales por vertical y ciudad',
      'Landing propia por vertical con WhatsApp en un toque y captura de origen',
      'Medición instalada antes de encender la pauta',
      'Campaña construida con reglas duras y estructura mínima por región',
      'Operación semanal por agente con ciclo de cinco pasos y bitácora',
      'Reporte mensual en tu idioma: inversión, IVA retenido, contactos y ventas atribuidas',
    ],
    process: [
      { step: 'Ficha e investigación', detail: 'Qué vendes, a quién, en qué ciudades y qué buscan de verdad. Con datos, en la llamada.' },
      { step: 'Activo digital y medición', detail: 'Landing por vertical con WhatsApp y rastreo de origen. No se gasta un peso sin medir.' },
      { step: 'Construcción con reglas duras', detail: 'Solo búsqueda, frase, negativas, tope de CPC, una campaña por región.' },
      { step: 'Operación y decisión', detail: 'Cada semana: leer, diagnosticar, proponer, aplicar con confirmación, verificar. Cada mes: escalar, ampliar o recortar.' },
    ],
    offer: {
      name: 'Instalación y primer mes de operación',
      duration: '30 días',
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
      { q: '¿Funciona para cualquier negocio?', a: 'No. Está hecho para ticket alto y pocas búsquedas: industria, maquinaria, materiales, servicios especializados. En e-commerce, retail o restaurantes el juego es de volumen y las reglas de presupuesto de este método se quedan cortas.' },
      { q: '¿Cuánto presupuesto de pauta necesito?', a: 'Menos del que dice la industria. El caso de VIGA gastó alrededor de $900 MXN al mes y generó dos ventas. Lo definimos con tus unit economics, no con un mínimo genérico.' },
      { q: '¿Qué hace el agente y qué hace una persona?', a: 'El agente lee la cuenta, diagnostica con datos reales y propone cambios respaldados. Una persona confirma antes de aplicar cualquier cambio o gasto. Todo queda en bitácora.' },
      { q: '¿La cuenta es mía?', a: 'Sí. Se construye en tu cuenta de Google Ads y la landing queda en tu dominio. Si dejamos de operarla, todo sigue siendo tuyo.' },
    ],
    searchTitle: 'Campañas de Google Ads para industria y B2B operadas con agentes de IA | ZulIA',
    metaDescription:
      'Método de siete fases para campañas de búsqueda en mercados de ticket alto: medición antes de gastar, atribución de ventas reales y operación semanal por agente. Caso VIGA: $4.56 M MXN en ventas con $1,370 de pauta.',
  },
  {
    slug: 'ingenieria-con-ia',
    line: 'ingenieria',
    name: 'Ingeniería asistida por IA para tu equipo',
    shortName: 'Ingeniería con IA',
    promise: 'Tu equipo construye con agentes de código sin romper producción.',
    summary:
      'Instalamos el método: especificaciones antes de código, reglas para agentes, skills reutilizables, runbooks y compuertas de revisión, adaptados al stack y a los riesgos reales de tu empresa.',
    idealFor:
      'Equipos técnicos que ya usan Claude Code, Cursor o Copilot y necesitan velocidad sin perder control, y direcciones que quieren medir qué tanto aporta la IA al desarrollo.',
    outcomes: [
      { t: 'Los agentes conocen tu repo', d: 'Contexto, reglas y prohibiciones viven en el repositorio. Ningún agente recomienda una migración destructiva porque el archivo dice que no.' },
      { t: 'Nada entra sin propuesta', d: 'Cambios no triviales se especifican, se revisan y se aplican. La velocidad viene de no rehacer, no de saltarse pasos.' },
      { t: 'Se sostiene sin nosotros', d: 'Skills, runbooks y plantillas que el equipo reutiliza en cada repositorio nuevo.' },
    ],
    deliverables: [
      'Metodología documentada: ciclo de vida, propuestas, revisión humana, archivo',
      'Archivos de contexto para agentes (AGENTS.md, skills, hooks) por repositorio',
      'Servidores MCP internos para exponer tus APIs a los agentes con autenticación',
      'Runbooks de despliegue y operación que un agente puede seguir',
      'Sesiones de adopción con el equipo y métricas de uso',
    ],
    process: [
      { step: 'Auditamos cómo construyen hoy', detail: 'Repos, despliegues, pruebas, dónde duele.' },
      { step: 'Definimos el ciclo con IA', detail: 'Qué se especifica, qué se delega, dónde revisa una persona.' },
      { step: 'Instrumentamos los repos', detail: 'Contexto, skills y compuertas en el código, no en un PDF.' },
      { step: 'Acompañamos la adopción', detail: 'Sesiones con el equipo hasta que el método se sostenga solo.' },
    ],
    offer: {
      name: 'Auditoría e instalación',
      duration: '3 a 4 semanas',
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
    promise: 'Tu equipo usando IA en su chamba real, no en teoría.',
    summary:
      'Cursos de inteligencia artificial en Monterrey para profesionistas, dueños de negocio y áreas completas, enfocados en trabajo real: correos, reportes, análisis, automatizaciones.',
    idealFor:
      'Áreas de administración, ventas, marketing y operaciones, y dueños de pymes que ya vieron que la IA sirve y no saben por dónde empezar en su operación.',
    outcomes: [
      { t: 'Horas de vuelta cada semana', d: 'Correos, resúmenes, reportes y análisis que hoy toman una tarde, resueltos en minutos con las herramientas que ya tienen.' },
      { t: 'Con sus propios casos', d: 'Cada ejercicio usa los documentos y procesos del participante, no ejemplos de internet.' },
      { t: 'Una lista de qué automatizar', d: 'El curso cierra con un diagnóstico de los procesos del área que conviene automatizar después.' },
    ],
    deliverables: [
      'Programas abiertos en Monterrey y formato in company',
      'Ejercicios sobre los documentos y procesos reales de los participantes',
      'Material de seguimiento y comunidad de alumnos',
      'Diagnóstico de oportunidades de automatización al cierre',
    ],
    process: [
      { step: 'Diagnóstico', detail: 'Qué hace el equipo todos los días y dónde la IA ahorra tiempo real.' },
      { step: 'Programa', detail: 'Sesiones prácticas con sus propios casos.' },
      { step: 'Seguimiento', detail: 'Material, comunidad y una ruta para lo que sigue.' },
    ],
    offer: {
      name: 'Taller in company',
      duration: '1 a 3 sesiones',
      includes: [
        'Diagnóstico previo con el responsable del área',
        'Sesiones prácticas sobre los casos del equipo',
        'Material de seguimiento y acceso a la comunidad',
        'Diagnóstico de automatización al cierre',
      ],
      result: 'El equipo sale usando IA en su trabajo y con una lista priorizada de lo que sigue.',
    },
    visual: {
      type: 'list',
      caption: 'Programa base, se adapta al área.',
      items: ['Escribir y resumir con IA', 'Datos, reportes y análisis', 'Automatizar lo repetitivo', 'Cierre: diagnóstico de tu operación'],
    },
    faq: [
      { q: '¿Es para programadores?', a: 'No. Es para gente que trabaja y quiere usar IA en su trabajo. Quien busca certificarse como ingeniero de IA no es el público.' },
      { q: '¿Dónde se imparten?', a: 'Programas abiertos en Monterrey y talleres in company en tus instalaciones o en línea.' },
    ],
    searchTitle: 'Cursos de inteligencia artificial para empresas en Monterrey | ZulIA',
    metaDescription:
      'Capacitación práctica en IA para profesionistas, dueños de negocio y equipos completos. Programas abiertos e in company en Monterrey.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getServiceByLine = (line: Line) => services.find((s) => s.line === line);
