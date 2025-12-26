import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://padmanandwarrier.com',
  base: '/',
  output: 'static',
  integrations: [mdx()],
});