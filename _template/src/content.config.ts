// Modelo de conteúdo do site. Cada página é uma lista ordenada de seções.
// Os limites de caracteres protegem o layout (e valem também para o editor do médico).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const yaml = (base: string) => glob({ pattern: '**/*.{yaml,yml}', base });

// ---------- peças reutilizáveis ----------

const fotoSchema = (image: any) =>
  z.object({
    src: image().optional(),
    alt: z.string().max(140).default(''),
    // Texto do espaço reservado enquanto a foto real não chega.
    reservado: z.string().max(80).optional(),
    // Ponto focal do recorte (CSS object-position), ex.: "50% 20%".
    foco: z.string().default('50% 30%'),
  });

const botao = z.object({
  texto: z.string().max(34),
});

const ctaMeio = z
  .object({
    texto: z.string().max(40),
    posicao: z.enum(['meio-1', 'meio-2']),
  })
  .optional();

const titulo = z.string().max(110); // **palavra** = palavra-chave em destaque
const texto = z.string().max(900); // parágrafos separados por linha em branco

// ---------- seções ----------

const secoes = (image: any) => {
  const foto = fotoSchema(image);
  return z.discriminatedUnion('tipo', [
    z.object({
      tipo: z.literal('topo'),
      variante: z.enum(['foto-compacta', 'colagem']).default('foto-compacta'),
      rotulo: z.string().max(60).optional(),
      titulo: z.string().max(80),
      subtitulo: z.string().max(220),
      foto,
      fotosExtras: z.array(foto).max(2).default([]),
      selos: z.array(z.string().max(32)).max(3).default([]),
      botao,
      apoio: z.string().max(80).optional(),
    }),
    z.object({
      tipo: z.literal('faixa-dados'),
      // Sem itens, a faixa usa CRM, RQE, cidade e modalidade do médico.
      itens: z.array(z.object({ rotulo: z.string().max(24), valor: z.string().max(40) })).max(4).optional(),
    }),
    z.object({
      tipo: z.literal('marquee'),
      itens: z.array(z.string().max(40)).min(3).max(10),
    }),
    z.object({
      tipo: z.literal('identificacao'),
      variante: z.enum(['lista', 'cartas']).default('lista'),
      rotulo: z.string().max(40).optional(),
      titulo,
      texto: texto.optional(),
      itens: z.array(z.object({ titulo: z.string().max(70), texto: z.string().max(220) })).min(2).max(6),
      cta: ctaMeio,
    }),
    z.object({
      tipo: z.literal('manifesto'),
      rotulo: z.string().max(40).optional(),
      frase: z.string().max(320),
      // Fotos em pílula encaixadas depois da palavra de número N (começa em 1).
      fotos: z.array(z.object({ foto, aposPalavra: z.number().int().min(1) })).max(2).default([]),
      complemento: z.string().max(300).optional(),
    }),
    z.object({
      tipo: z.literal('profissional'),
      variante: z.enum(['foto-e-texto', 'com-linha-do-tempo']).default('foto-e-texto'),
      rotulo: z.string().max(40).optional(),
      titulo,
      texto: z.string().max(1100),
      foto,
      fatos: z.array(z.object({ valor: z.string().max(16), rotulo: z.string().max(60) })).max(3).default([]),
      marcos: z
        .array(z.object({ quando: z.string().max(20), titulo: z.string().max(90), onde: z.string().max(80).optional() }))
        .max(7)
        .default([]),
    }),
    z.object({
      tipo: z.literal('procedimentos'),
      variante: z.enum(['lista-em-linhas', 'lista-com-imagem', 'cards']).default('lista-em-linhas'),
      rotulo: z.string().max(40).optional(),
      titulo,
      texto: texto.optional(),
      // Sem itens, a seção lista as páginas de procedimento do site.
      itens: z
        .array(z.object({ nome: z.string().max(60), descricao: z.string().max(140), link: z.string().optional(), foto: foto.optional() }))
        .optional(),
    }),
    z.object({
      tipo: z.literal('o-que-e'),
      rotulo: z.string().max(40).optional(),
      titulo,
      texto,
      foto: foto.optional(),
    }),
    z.object({
      tipo: z.literal('para-quem'),
      rotulo: z.string().max(40).optional(),
      titulo,
      texto: texto.optional(),
      itens: z.array(z.string().max(140)).min(2).max(8),
      observacao: z.string().max(220).optional(),
    }),
    z.object({
      tipo: z.literal('numeros'),
      titulo: titulo.optional(),
      itens: z.array(z.object({ valor: z.string().max(14), rotulo: z.string().max(60) })).min(2).max(4),
      observacao: z.string().max(220).optional(),
    }),
    z.object({
      tipo: z.literal('cuidados'),
      rotulo: z.string().max(40).optional(),
      titulo,
      grupos: z.array(z.object({ titulo: z.string().max(40), itens: z.array(z.string().max(160)).min(1).max(6) })).min(1).max(3),
    }),
    z.object({
      tipo: z.literal('como-funciona'),
      variante: z.enum(['passos-com-linha', 'cartas-empilhadas', 'passos-simples']).default('passos-com-linha'),
      rotulo: z.string().max(40).optional(),
      titulo,
      texto: texto.optional(),
      passos: z.array(z.object({ titulo: z.string().max(60), texto: z.string().max(240) })).min(2).max(6),
      cta: ctaMeio,
    }),
    z.object({
      tipo: z.literal('depoimentos'),
      rotulo: z.string().max(40).optional(),
      titulo,
      nota: z.object({ valor: z.string().max(4), total: z.string().max(30), link: z.string().url().optional() }).optional(),
      itens: z.array(z.object({ texto: z.string().max(420), autor: z.string().max(40), origem: z.string().max(30).optional() })).min(1).max(8),
      cta: ctaMeio,
    }),
    z.object({
      tipo: z.literal('antes-depois'),
      rotulo: z.string().max(40).optional(),
      titulo,
      texto: texto.optional(),
      casos: z.array(z.object({ antes: foto, depois: foto, legenda: z.string().max(160) })).min(1).max(4),
      avisoLegal: z.string().min(40).max(320),
    }),
    z.object({
      tipo: z.literal('clinica'),
      variante: z.enum(['bento', 'carrossel']).default('bento'),
      rotulo: z.string().max(40).optional(),
      titulo,
      texto: texto.optional(),
      fotos: z.array(z.object({ foto, legenda: z.string().max(40).optional() })).min(3).max(5),
    }),
    z.object({
      tipo: z.literal('particular'),
      rotulo: z.string().max(40).optional(),
      titulo,
      itens: z.array(z.object({ titulo: z.string().max(50), texto: z.string().max(200) })).min(2).max(4),
    }),
    z.object({
      tipo: z.literal('faq'),
      rotulo: z.string().max(40).optional(),
      titulo,
      perguntas: z.array(z.object({ pergunta: z.string().max(120), resposta: z.string().max(500) })).min(3).max(12),
    }),
    z.object({
      tipo: z.literal('cta-final'),
      titulo,
      texto: z.string().max(300),
      botao,
      apoio: z.string().max(80).optional(),
    }),
  ]);
};

// ---------- coleções ----------

const medico = defineCollection({
  loader: yaml('./src/content/medico'),
  schema: ({ image }) =>
    z.object({
      // Identificação (fica com a Ankura)
      nome: z.string().max(60),
      tratamento: z.enum(['Dr.', 'Dra.', '']).default('Dr.'),
      especialidade: z.string().max(60),
      crm: z.string().max(20),
      rqe: z.string().max(20).optional(),
      logo: image().optional(),
      // Campos operacionais (o médico pode editar)
      cidade: z.string().max(40),
      uf: z.string().length(2),
      modalidade: z.string().max(40),
      whatsapp: z.string().regex(/^\d{12,13}$/, 'Só números, com 55 e DDD'),
      instagram: z.string().max(40).optional(),
      endereco: z.object({ linha1: z.string().max(80), linha2: z.string().max(80).optional(), mapa: z.string().url().optional() }),
      horarios: z.array(z.string().max(60)).max(4),
      consulta: z
        .object({ valor: z.string().max(20).optional(), mostrarValor: z.boolean().default(false), convenios: z.array(z.string().max(40)).default([]) })
        .default({ mostrarValor: false, convenios: [] }),
      // Avisos legais
      demonstracao: z.boolean().default(false), // true = faixa "site de demonstração, dados fictícios"
      avisoImagens: z.boolean().default(false),
      avisoUrgencia: z.string().max(200).optional(),
    }),
});

const paginas = defineCollection({
  loader: yaml('./src/content/paginas'),
  schema: ({ image }) =>
    z.object({
      tipo: z.enum(['home', 'procedimento']),
      nome: z.string().max(40), // nome curto (menu, listas)
      resumo: z.string().max(140).optional(), // usado na lista de procedimentos da home
      foto: fotoSchema(image).optional(), // miniatura na lista da home
      ordem: z.number().default(0),
      seo: z.object({
        titulo: z.string().max(65),
        descricao: z.string().max(160),
        imagem: image().optional(),
      }),
      cta: z.object({
        botaoMenu: z.string().max(22).default('Agendar consulta'),
        barra: z.string().max(28),
        mensagem: z.string().max(160),
      }),
      secoes: z.array(secoes(image)).min(1),
    }),
});

export const collections = { medico, paginas };
