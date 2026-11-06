import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sosdesentupidorasp.com.br',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
