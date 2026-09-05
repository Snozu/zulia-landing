export type Service = {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  summary: string;
  outcome: string;
  idealFor: string;
  capabilities: string[];
  process: string[];
  searchTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "desarrollo-software-a-medida",
    number: "01",
    name: "Software para operar mejor",
    shortName: "Software y producto",
    summary:
      "Diseñamos y construimos portales, SaaS, backoffices y herramientas internas que encajan con tu operación, en lugar de obligar a tu equipo a trabajar alrededor de un software genérico.",
    outcome:
      "Un producto web listo para operar, medir y evolucionar: desde la experiencia de usuario hasta la API, los datos y el despliegue.",
    idealFor:
      "Empresas con procesos particulares, equipos que ya rebasaron las hojas de cálculo y fundadores que necesitan convertir una idea en un producto usable.",
    capabilities: [
      "SaaS y plataformas multiempresa",
      "Portales de clientes y backoffices",
      "APIs, bases de datos e integraciones",
      "Dashboards y sistemas operativos internos",
      "Despliegue, observabilidad y soporte",
    ],
    process: [
      "Mapeamos usuarios, decisiones y procesos críticos.",
      "Prototipamos el flujo que debe resolver el producto.",
      "Construimos por entregables demostrables, no por meses de silencio.",
      "Medimos uso y priorizamos la siguiente iteración.",
    ],
    searchTitle: "Desarrollo de Software a Medida en México | ZulIA",
    metaDescription:
      "Desarrollo de SaaS, portales, backoffices y herramientas internas a medida. Producto, frontend, backend, datos y despliegue con un solo equipo en México.",
  },
  {
    slug: "agentes-inteligencia-artificial",
    number: "02",
    name: "Sistemas que piensan y actúan",
    shortName: "Sistemas con IA",
    summary:
      "Creamos agentes que consultan conocimiento real, usan herramientas y ejecutan tareas dentro de tus sistemas, con reglas claras para saber cuándo actuar y cuándo escalar a una persona.",
    outcome:
      "Un asistente conectado a tu negocio capaz de atender, investigar, clasificar, cotizar o coordinar tareas sin perder contexto.",
    idealFor:
      "Operaciones con alto volumen de conversaciones, soporte técnico, ventas consultivas, logística o equipos que necesitan encontrar respuestas en documentación dispersa.",
    capabilities: [
      "RAG y búsqueda sobre documentos",
      "Orquestación multiagente",
      "Copilotos para soporte y operaciones",
      "Memoria, herramientas y guardrails",
      "Integración con WhatsApp, CRM y APIs",
    ],
    process: [
      "Elegimos una tarea frecuente con valor y límites verificables.",
      "Conectamos fuentes de conocimiento y herramientas autorizadas.",
      "Probamos calidad, fallos y rutas de escalamiento humano.",
      "Desplegamos con trazabilidad para mejorar con casos reales.",
    ],
    searchTitle: "Agentes de Inteligencia Artificial para Empresas | ZulIA",
    metaDescription:
      "Agentes de IA para soporte, ventas y operaciones. RAG, multiagentes, WhatsApp, CRM y automatización conectados a los datos reales de tu empresa.",
  },
  {
    slug: "automatizacion-procesos",
    number: "03",
    name: "Procesos que corren solos",
    shortName: "Automatización",
    summary:
      "Conectamos las herramientas que ya usas para mover información, validar reglas, generar documentos, notificar al equipo y mantener tus sistemas sincronizados.",
    outcome:
      "Menos captura manual, menos pasos olvidados y una operación que puede crecer sin multiplicar tareas repetitivas.",
    idealFor:
      "Equipos que copian datos entre sistemas, persiguen aprobaciones por chat o dependen de una persona para mantener cada proceso en movimiento.",
    capabilities: [
      "Workflows con n8n y webhooks",
      "Integraciones CRM, ERP y mensajería",
      "Aprobaciones y notificaciones",
      "Procesamiento de documentos y datos",
      "Monitoreo, reintentos y alertas",
    ],
    process: [
      "Documentamos el flujo actual y su costo operativo.",
      "Separamos decisiones humanas de pasos automatizables.",
      "Implementamos una ruta controlada con recuperación de errores.",
      "Medimos tiempo ahorrado y expandimos donde sí conviene.",
    ],
    searchTitle: "Automatización de Procesos para Empresas | ZulIA México",
    metaDescription:
      "Automatización de procesos con n8n, APIs, CRM, WhatsApp y sistemas internos. Integra tu operación y elimina captura manual con flujos confiables.",
  },
  {
    slug: "landing-pages-seo",
    number: "04",
    name: "Sitios visibles donde hoy se decide",
    shortName: "Web, SEO y búsqueda con IA",
    summary:
      "Diseñamos sitios y e-commerce rápidos, claros y técnicamente legibles para buscadores clásicos, respuestas generativas y agentes que comparan opciones.",
    outcome:
      "Una presencia que puede ser encontrada, entendida, citada y convertida en una conversación, sin depender de un solo canal de adquisición.",
    idealFor:
      "Negocios B2B, servicios especializados, e-commerce y productos nuevos que necesitan ganar demanda en Google, Bing y experiencias de búsqueda con inteligencia artificial.",
    capabilities: [
      "Estrategia de mensaje y arquitectura web",
      "Sitios, landing pages y e-commerce responsive",
      "SEO técnico, entidades y datos estructurados",
      "GEO y contenido listo para respuestas de IA",
      "Rastreo para buscadores y agentes autorizados",
      "Analítica de visibilidad, demanda y conversión",
    ],
    process: [
      "Mapeamos consultas, preguntas y decisiones a lo largo de la búsqueda.",
      "Definimos entidades, evidencia y respuestas que una persona o sistema pueda verificar.",
      "Construimos con rendimiento, accesibilidad, indexación y datos estructurados desde la base.",
      "Medimos búsquedas, citas disponibles, referencias y conversiones para seguir mejorando.",
    ],
    searchTitle: "Diseño Web, SEO y GEO para Búsqueda con IA | ZulIA",
    metaDescription:
      "Diseño web, e-commerce, SEO técnico y GEO en México. Sitios preparados para Google, respuestas de IA, búsqueda agéntica y conversión comercial.",
  },
  {
    slug: "consultoria-arquitectura-tecnologica",
    number: "05",
    name: "Dirección técnica sin rodeos",
    shortName: "Estrategia y arquitectura",
    summary:
      "Aterrizamos ideas complejas, auditamos sistemas existentes y convertimos objetivos de negocio en un plan técnico con prioridades, riesgos y entregables claros.",
    outcome:
      "Una decisión informada antes de invertir: qué construir, qué integrar, qué automatizar y qué conviene dejar como está.",
    idealFor:
      "Fundadores y líderes que tienen una oportunidad clara pero necesitan definir alcance, arquitectura, costos relativos y una ruta de implementación realista.",
    capabilities: [
      "Descubrimiento y definición de producto",
      "Auditoría de arquitectura y código",
      "Diseño de sistemas y flujos de datos",
      "Roadmap técnico priorizado",
      "Acompañamiento de implementación",
    ],
    process: [
      "Entendemos el resultado de negocio y las restricciones.",
      "Revisamos procesos, datos, sistemas y dependencias.",
      "Comparamos alternativas con sus riesgos y costo de cambio.",
      "Entregamos una ruta ejecutable con el siguiente paso definido.",
    ],
    searchTitle: "Consultoría de IA y Arquitectura de Software | ZulIA",
    metaDescription:
      "Consultoría tecnológica para definir productos, automatizaciones, IA y arquitectura de software. Roadmap claro antes de invertir en construcción.",
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
