// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.anydna.co.uk',
  // Custom domain served at the root, so no `base` path is needed.
  trailingSlash: 'ignore',
  // Prefetch linked pages on hover so navigation feels instant.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
