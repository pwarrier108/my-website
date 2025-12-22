import { defineCollection, z } from 'astro:content';

const essaysCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        type: z.enum(['essay', 'case', 'reflection', 'blog']),
        themes: z.array(z.string()),
        era: z.string().nullable(),
        status: z.enum(['draft', 'published', 'canonical']),
        summary: z.string(),
        related: z.array(z.string()).optional(),
    }),
});

const casesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        type: z.enum(['essay', 'case', 'reflection', 'blog']),
        themes: z.array(z.string()),
        era: z.string().nullable(),
        status: z.enum(['draft', 'published', 'canonical']),
        summary: z.string(),
        related: z.array(z.string()).optional(),
    }),
});

const reflectionsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        type: z.enum(['essay', 'case', 'reflection', 'blog']),
        themes: z.array(z.string()),
        era: z.string().nullable(),
        status: z.enum(['draft', 'published', 'canonical']),
        summary: z.string(),
        related: z.array(z.string()).optional(),
    }),
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        type: z.enum(['essay', 'case', 'reflection', 'blog']),
        themes: z.array(z.string()),
        era: z.string().nullable(),
        status: z.enum(['draft', 'published', 'canonical']),
        summary: z.string(),
        related: z.array(z.string()).optional(),
    }),
});

export const collections = {
    'essays': essaysCollection,
    'cases': casesCollection,
    'reflections': reflectionsCollection,
    'blog': blogCollection,
};
