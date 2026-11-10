import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Pagina = CollectionEntry<'paginas'>;
export type Medico = CollectionEntry<'medico'>['data'];
export type Secao = Pagina['data']['secoes'][number];

export async function medico(): Promise<Medico> {
  const lista = await getCollection('medico');
  if (lista.length !== 1) throw new Error('src/content/medico/ deve ter exatamente 1 arquivo.');
  return lista[0].data;
}

export async function procedimentos(): Promise<Pagina[]> {
  const todas = await getCollection('paginas', (p) => p.data.tipo === 'procedimento');
  return todas.sort((a, b) => a.data.ordem - b.data.ordem);
}

export async function home(): Promise<Pagina> {
  const h = await getEntry('paginas', 'home');
  if (!h) throw new Error('Falta src/content/paginas/home.yaml');
  return h;
}

/** Nome de exibição: "Dr. Fulano". */
export const nomeCompleto = (m: Medico) => [m.tratamento, m.nome].filter(Boolean).join(' ');
