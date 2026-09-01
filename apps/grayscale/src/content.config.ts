import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const prints = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prints' }),
  schema: z.object({
    title: z.string(),
    series: z.string().default('drop-01'),
    status: z.enum(['available', 'sold-out', 'soon']).default('available'),
    colors: z.string().default('ч/б, ксерокс-белый, красный'),
    sizes: z.string().default('S–XXL'),
    edition: z.string().default('50'),
    desc_ru: z.string(),
    desc_en: z.string(),
  }),
});

export const collections = { prints };