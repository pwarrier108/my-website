import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://pwarrier108.github.io',
  base: '/my-website',  
  output: 'static',
  integrations: [mdx()],
});