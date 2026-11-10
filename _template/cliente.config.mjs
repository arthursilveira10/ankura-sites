// Configuração do cliente que o Astro precisa no momento do build.
// Cores, raios e texturas ficam em src/styles/tema.css.
// Conteúdo (textos, fotos, dados do médico) fica em src/content/.
import { fontProviders } from 'astro/config';

/** @type {{ url: string, fontes: NonNullable<import('astro').AstroUserConfig['fonts']> }} */
export const cliente = {
  // Endereço final do site (usado em sitemap, canonical e Open Graph).
  url: 'https://exemplo.ankura.com.br',

  // No máximo 2 famílias. Fontes do Google, baixadas no build e servidas pelo próprio site.
  // cssVariable é usada em src/styles/tema.css (--font-titulo e --font-texto).
  fontes: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--fonte-titulo',
      weights: ['300 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Hanken Grotesk',
      cssVariable: '--fonte-texto',
      weights: ['300 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Arial', 'sans-serif'],
    },
  ],
};
