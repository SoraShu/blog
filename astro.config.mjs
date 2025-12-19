// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://yourdomain.com',
  output: 'static',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: 'cloudflare',
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['node:fs', 'node:path', 'node:url', 'node:crypto', 'node:fs/promises'],
    },
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});