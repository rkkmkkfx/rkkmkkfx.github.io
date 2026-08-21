import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const work = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }), schema: z.object({
  title: z.string(), year: z.number(), role: z.string(), summary: z.string(), outcome: z.string(),
  tags: z.array(z.string()), url: z.string().url().optional(), image: z.string(),
}) });
const lab = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lab' }), schema: z.object({
  title: z.string(), date: z.coerce.date(), status: z.enum(['Exploring', 'In progress', 'Shipped']), summary: z.string(), tags: z.array(z.string()),
}) });
export const collections = { work, lab };
