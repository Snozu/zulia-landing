/**
 * Tarifas de la WhatsApp Business Platform, en dólares por mensaje entregado.
 *
 * Vigentes desde el 1 de julio de 2026. La tarifa de los mensajes de servicio
 * que empiezan a cobrarse el 1 de octubre de 2026 es la misma que la de las
 * plantillas de utility en cada mercado.
 *
 * Van fijas a propósito: un cotizador con tarifas que el visitante puede
 * cambiar no sirve para decidir nada. Cuando Meta las mueva, se actualizan
 * aquí y se cambia `TARIFAS_VIGENTES_DESDE`.
 */
export const TARIFAS_VIGENTES_DESDE = '1 de julio de 2026';
export const TARIFAS_FUENTE = 'https://whatsappbusiness.com/es-la/products/platform-pricing/';

export type Mercado = {
  clave: string;
  nombre: string;
  /** Divisa local del mercado, para preseleccionarla. */
  divisa: string;
  marketing: number;
  utility: number;
  /** Meta cobrará los mensajes de servicio a la misma tarifa que utility. */
  servicio: number;
};

export const MERCADOS: Mercado[] = [
  { clave: 'mx', nombre: 'México', divisa: 'MXN', marketing: 0.0305, utility: 0.0085, servicio: 0.0085 },
  { clave: 'co', nombre: 'Colombia', divisa: 'COP', marketing: 0.0125, utility: 0.0008, servicio: 0.0008 },
  { clave: 'pe', nombre: 'Perú', divisa: 'PEN', marketing: 0.0703, utility: 0.02, servicio: 0.02 },
  { clave: 'ar', nombre: 'Argentina', divisa: 'ARS', marketing: 0.0618, utility: 0.026, servicio: 0.026 },
  { clave: 'cl', nombre: 'Chile', divisa: 'CLP', marketing: 0.0889, utility: 0.02, servicio: 0.02 },
  { clave: 'es', nombre: 'España', divisa: 'EUR', marketing: 0.0707, utility: 0.02, servicio: 0.02 },
];

/**
 * Tipo de cambio de referencia contra el dólar. Solo sirve para mostrar la
 * cifra en la divisa del cliente; Meta factura en dólares.
 */
export const TIPO_CAMBIO_FECHA = '7 de septiembre de 2026';
export const DIVISAS: { clave: string; nombre: string; porDolar: number; decimales: number }[] = [
  { clave: 'USD', nombre: 'Dólar estadounidense', porDolar: 1, decimales: 2 },
  { clave: 'MXN', nombre: 'Peso mexicano', porDolar: 16.8894, decimales: 0 },
  { clave: 'COP', nombre: 'Peso colombiano', porDolar: 3140.8271, decimales: 0 },
  { clave: 'PEN', nombre: 'Sol peruano', porDolar: 3.3554, decimales: 0 },
  { clave: 'ARS', nombre: 'Peso argentino', porDolar: 1507.3745, decimales: 0 },
  { clave: 'CLP', nombre: 'Peso chileno', porDolar: 932.9792, decimales: 0 },
  { clave: 'BRL', nombre: 'Real brasileño', porDolar: 5.1221, decimales: 0 },
  { clave: 'EUR', nombre: 'Euro', porDolar: 0.8611, decimales: 2 },
];
