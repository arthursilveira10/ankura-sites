// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { rm } from 'node:fs/promises';
import { cliente } from './cliente.config.mjs';

/** Remove a prancha de estilo (/previa) e as pranchas de direção (/pranchas) do build publicado. */
const semPrevia = () => ({
  name: 'ankura-sem-previa',
  hooks: {
    'astro:build:done': async (/** @type {{ dir: URL }} */ { dir }) => {
      for (const pasta of ['./previa/', './pranchas/']) {
        await rm(new URL(pasta, dir), { recursive: true, force: true });
      }
    },
  },
});

export default defineConfig({
  site: cliente.url,
  fonts: cliente.fontes,
  integrations: [
    sitemap({ filter: (url) => !url.includes('/lp/') && !url.includes('/previa') && !url.includes('/pranchas') }),
    semPrevia(),
  ],
  vite: { plugins: [tailwindcss()] },
});
