import { z, defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// ── Starlight docs collection ──
const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

// ── Blog posts ──
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Lagos Team'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// ── Changelog entries ──
const changelog = defineCollection({
  type: 'content',
  schema: z.object({
    version: z.string(),
    releaseDate: z.coerce.date(),
    title: z.string(),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { docs, blog, changelog };
