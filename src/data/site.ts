import type { Line } from '../content.config';

export const SITE = {
  name: 'ZulIA',
  legalName: 'ZulIA',
  tagline: 'Consultoría de software, automatización e inteligencia artificial',
  city: 'Monterrey, México',
  url: 'https://zulia.lat',
  email: 'hola@zulia.lat',
  whatsapp: '528122509882',
  founder: 'Haziel Zul',
  founderRole: 'Fundador y director técnico',
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
  { label: 'Semilla', href: '/semilla/' },
  { label: 'Cursos', href: '/cursos/' },
  { label: 'Nosotros', href: '/nosotros/' },
];

export const LINE_LABEL: Record<Line, string> = {
  agentica: 'Capa agéntica',
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

export const BRANDS: ReadonlyArray<{ name: string; file: string; dark?: string }> = [
  { name: 'Proveedora Farid', file: '/brands/farid.png' },
  { name: 'Grupo Motomex', file: '/brands/grupo-motomex.png' },
  { name: 'iKom', file: '/brands/ikom.png', dark: '/brands/ikom-blanco.png' },
  { name: 'Kawasaki', file: '/brands/kawasaki.svg' },
  { name: 'Kymco', file: '/brands/kymco.png' },
  { name: 'Triumph', file: '/brands/triumph.svg' },
  { name: 'TVS', file: '/brands/tvs.svg' },
  { name: 'Metales y Reciclados VIGA', file: '/brands/viga.png' },
];

export function whatsappUrl(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
