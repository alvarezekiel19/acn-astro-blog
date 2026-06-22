import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    number: z.string(),
    author: z.string(),
    readingTime: z.number(),
    image: z.string(),
    imageAlt: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    isFeatured: z.boolean().default(false),
    isEditorsPick: z.boolean().default(false)
  }),
});

export const collections = { blog };
