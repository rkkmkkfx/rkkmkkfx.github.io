import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rkkmkkfx.dev',
  output: 'static',
  integrations: [mdx(), sitemap()],
  devToolbar: { enabled: false },
  experimental: { clientPrerender: true },
});
