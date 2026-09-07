import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const LINES = ['agentica', 'chatbots', 'software', 'sitios', 'marketing', 'ingenieria', 'cursos'] as const;
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

    // Optional case-study depth: written to make the project understandable
    // to a non-technical reader and to show what an equivalent would take.
    context: z.string().optional(),
    duration: z.string().optional(),
    howItWorks: z.array(z.object({ step: z.string(), detail: z.string() })).min(3).optional(),
    delivered: z.array(z.string()).min(2).optional(),
    impact: z.array(z.object({ v: z.string(), l: z.string() })).min(2).max(4).optional(),
    fits: z.array(z.string()).min(2).optional(),
    pitch: z.string().optional(),

    url: z.string().url().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    pagespeed: z
      .object({
        mobile: z.tuple([z.number(), z.number(), z.number(), z.number()]),
        desktop: z.tuple([z.number(), z.number(), z.number(), z.number()]),
        date: z.string(),
        report: z.string().url().optional(),
      })
      .optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
