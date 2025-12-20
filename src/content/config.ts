import { defineCollection, z } from "astro:content";

const essays = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.string(),
    themes: z.array(z.string()),
    era: z.string().nullable(),
    status: z.string(),
    summary: z.string(),
  }),
});

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    themes: z.array(z.string()),
    status: z.string(),
    summary: z.string(),
  }),
});

const reflections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
  }),
});

export const collections = {
  essays,
  cases,
  reflections,
  blog,
};
