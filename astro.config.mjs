import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://padmanandwarrier.com',
  base: '/',  // Root path for custom domain (not subpath)
  output: 'static',
});
