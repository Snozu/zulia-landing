import type { Line } from '../content.config';

export const SITE = {
  name: 'ZulIA',
  legalName: 'ZulIA',
  tagline: 'Consultoría de software, automatización e inteligencia artificial',
  city: 'Monterrey, México',
  url: 'https://zulia.lat',
  email: 'haziel@zulia.lat',
  whatsapp: '528122509882',
  founder: 'Haziel Zul',
  founderRole: 'Fundador y director técnico',
  founderLinkedin: 'https://www.linkedin.com/in/haziel-eduardo-zul-mendez-53b82b131/',
} as const;

export const CTA = {
  primary: 'Cotizar',
  primaryHref: '/cotizar/',
  secondary: 'Ver proyectos',
  secondaryHref: '/proyectos/',
} as const;

export const NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Proyectos', href: '/proyectos/' },
  { label: 'Guías', href: '/guias/' },
  { label: 'Semilla', href: '/semilla/' },
  { label: 'Cursos', href: '/cursos/' },
  { label: 'Nosotros', href: '/nosotros/' },
];

export const LINE_LABEL: Record<Line, string> = {
  agentica: 'Capa agéntica',
  chatbots: 'Chatbots y atención',
  software: 'Software a medida',
  sitios: 'Sitios y catálogos',
  marketing: 'Campañas con agentes',
  ingenieria: 'Ingeniería con IA',
  cursos: 'Cursos',
};

export const STATUS_LABEL = {
  produccion: 'En producción',
  piloto: 'Piloto',
  desarrollo: 'En desarrollo',
  interno: 'Uso interno',
  prelanzamiento: 'Pre-lanzamiento',
} as const;

export const ROLE_LABEL = {
  cliente: 'Proyecto para cliente',
  propio: 'Producto propio',
  equipo: 'Trabajo dentro del equipo del cliente',
} as const;

// Logos are always shown in their original colours, on a light plate, in both themes.
// `onDark`: for a white-only asset that needs a dark plate. Triumph came as a
// white SVG and desentonaba contra nueve placas blancas, así que se recoloreó a
// su negro original (`triumph-blanco.svg` guarda el archivo tal como llegó).
export const BRANDS: ReadonlyArray<{ name: string; file: string; dark?: string; onDark?: boolean }> = [
  { name: 'Proveedora Farid', file: '/brands/farid.png' },
  { name: 'Grupo Motomex', file: '/brands/grupo-motomex.png' },
  { name: 'iKom', file: '/brands/ikom.png', dark: '/brands/ikom-blanco.png' },
  { name: 'Kawasaki', file: '/brands/kawasaki.svg' },
  { name: 'Kymco', file: '/brands/kymco.png' },
  // Nombre nuevo a propósito: el archivo anterior era el logo blanco y los SVG
  // se cachean 30 días, así que quien ya lo tenía guardado seguía viendo un logo
  // blanco sobre placa blanca. Cambiar la URL es lo único que rompe ese caché.
  { name: 'Triumph', file: '/brands/triumph-negro.svg' },
  { name: 'TVS', file: '/brands/tvs.svg' },
  { name: 'Metales y Reciclados VIGA', file: '/brands/viga.png' },
  { name: 'Mueblería Juárez', file: '/brands/muebleria-juarez.png' },
  { name: 'Flores Abogadas', file: '/brands/flores-abogadas.png' },
];

export function whatsappUrl(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
