import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const LINES = ['agentica', 'software', 'sitios', 'ingenieria', 'cursos'] as const;
export type Line = (typeof LINES)[number];

export const STATUSES = ['produccion', 'piloto', 'desarrollo', 'interno', 'prelanzamiento'] as const;
export const ROLES = ['cliente', 'propio', 'equipo'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    sector: z.string(),
    city: z.string(),
    year: z.number(),
    line: z.enum(LINES),
    status: z.enum(STATUSES),
    role: z.enum(ROLES),
    summary: z.string().max(220),
    problem: z.string(),
    built: z.array(z.string()).min(2),
    stack: z.array(z.string()).min(1),
    outcome: z.string(),
    url: z.string().url().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
