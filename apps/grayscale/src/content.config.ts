import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const prints = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/prints' }),
  schema: z.object({
    title: z.string(),
    series: z.string().default('drop-01'),
    status: z
      .enum(['available', 'sold-out', 'burned', 'soon'])
      .default('available'),
    colors: z.string().default('ч/б, ксерокс-белый'),
    sizes: z.string().default('S–XXL'),
    edition: z.string().optional(),
    released: z.string().optional(),
    order: z.number().default(100),
    price: z.string().optional(),
    images: z.array(z.string()).default([]),
    desc_ru: z.string(),
    desc_en: z.string(),
  }),
});

export const collections = { prints };
