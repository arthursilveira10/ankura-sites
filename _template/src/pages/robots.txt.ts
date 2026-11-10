import type { APIRoute } from 'astro';

// As páginas /lp/ não são bloqueadas aqui de propósito: elas usam noindex,
// e o robô precisa conseguir abrir a página para ler o noindex.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
