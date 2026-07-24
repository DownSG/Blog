import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://downsg.github.io',
  base: '/Blog/',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
