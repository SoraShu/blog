import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";
import { CONTENT_BLOG_PATH, CONTENT_FRIENDS_PATH } from "@/config/site.config";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: CONTENT_BLOG_PATH }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    author: z.string().optional(),
  }),
});

const friends = defineCollection({
  loader: file(CONTENT_FRIENDS_PATH),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    avatar: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, friends };
