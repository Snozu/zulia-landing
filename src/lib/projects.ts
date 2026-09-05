import { getCollection, type CollectionEntry } from 'astro:content';
import type { Line } from '../content.config';

export type Project = CollectionEntry<'projects'>;

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export async function getFeaturedProjects(limit = 6): Promise<Project[]> {
  const all = await getProjects();
  const featured = all.filter((p) => p.data.featured);
  return (featured.length >= limit ? featured : all).slice(0, limit);
}

export async function getProjectsByLine(line: Line): Promise<Project[]> {
  const all = await getProjects();
  return all.filter((p) => p.data.line === line);
}

export function projectUrl(p: Project): string {
  return `/proyectos/${p.id}/`;
}
