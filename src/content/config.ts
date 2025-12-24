import { defineCollection, z } from 'astro:content';

// Ideas collections now have 'category' field
const essaysCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        type: z.enum(['essay', 'case', 'reflection', 'blog']),
        themes: z.array(z.string()),
        era: z.string().nullable(),
        category: z.enum(['technology', 'leadership', 'memoir', 'philosophy']),
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
        category: z.enum(['technology', 'leadership', 'memoir', 'philosophy']),
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
        category: z.enum(['technology', 'leadership', 'memoir', 'philosophy']),
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
        category: z.enum(['technology', 'leadership', 'memoir', 'philosophy']),
        status: z.enum(['draft', 'published', 'canonical']),
        summary: z.string(),
        related: z.array(z.string()).optional(),
    }),
});

// Inspirations collection - no 'era' field, has different categories
const inspirationsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        type: z.enum(['essay', 'case', 'reflection', 'blog', 'memoir', 'curated-list']),
        themes: z.array(z.string()),
        category: z.enum(['spiritual', 'family', 'people', 'works', 'places']),
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
    'inspirations': inspirationsCollection,
};
