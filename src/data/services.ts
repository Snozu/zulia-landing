import type { Line } from '../content.config';

export type Service = {
  slug: string;
  line: Line;
  name: string;
  shortName: string;
  promise: string;
  summary: string;
  idealFor: string;
  deliverables: string[];
  process: { step: string; detail: string }[];
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
    deliverables: [
      'Asistente conectado a tus fuentes reales (base de datos, ERP, CRM, correo, archivos)',
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
    faq: [
      { q: '¿Es un chatbot?', a: 'No. Un chatbot responde texto. Una capa agéntica consulta tus sistemas, ejecuta acciones dentro de permisos y se detiene antes de gastar o modificar algo sin que una persona lo apruebe.' },
      { q: '¿Tenemos que cambiar de ERP o CRM?', a: 'No. La capa se conecta a lo que ya tienes por API, base de datos o correo. Si el sistema no tiene API, construimos el conector.' },
      { q: '¿Qué pasa con la información sensible?', a: 'Cada herramienta declara qué puede leer y escribir. El modelo no puede afirmar nada que no venga de una fuente autorizada, y cada llamada queda registrada.' },
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
    faq: [
      { q: '¿Cómo cotizan?', a: 'Por fases con alcance cerrado. Una fase uno usable en semanas, y las siguientes se cotizan con lo aprendido en producción.' },
      { q: '¿El código es nuestro?', a: 'Sí. Repositorio, infraestructura y accesos quedan a nombre de tu empresa desde el inicio.' },
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
    deliverables: [
      'Arquitectura de mensaje y páginas por línea de negocio',
      'Catálogo administrable (WordPress headless u otra fuente) con render estático rápido',
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
    faq: [
      { q: '¿Puedo seguir administrando mi contenido?', a: 'Sí. Usamos WordPress u otra fuente como panel de administración y renderizamos un sitio estático rápido encima.' },
      { q: '¿Hacen la migración de hosting?', a: 'Sí, incluyendo DNS, correo y certificados. Lo hemos hecho de proveedores nacionales a VPS con Docker.' },
    ],
    searchTitle: 'Diseño de sitios web y catálogos B2B con SEO en Monterrey | ZulIA',
    metaDescription:
      'Sitios corporativos, catálogos y e-commerce rápidos e indexables, listos para buscadores y respuestas de IA. Administración simple y hosting a tu nombre.',
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
    faq: [
      { q: '¿Es capacitación?', a: 'Es más que eso. Dejamos el método instalado en los repositorios y acompañamos al equipo hasta que lo opera sin nosotros.' },
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
    faq: [
      { q: '¿Es para programadores?', a: 'No. Es para gente que trabaja y quiere usar IA en su trabajo. Quien busca certificarse como ingeniero de IA no es el público.' },
    ],
    searchTitle: 'Cursos de inteligencia artificial para empresas en Monterrey | ZulIA',
    metaDescription:
      'Capacitación práctica en IA para profesionistas, dueños de negocio y equipos completos. Programas abiertos e in company en Monterrey.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getServiceByLine = (line: Line) => services.find((s) => s.line === line);
