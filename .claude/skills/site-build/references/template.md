# Como usar o _template

O `_template/` é um site completo e funcionando: demo do Dr. Arthur Silveira [FICTÍCIO], direção "Luz de janela" (prancha G, aprovada em 11/2026). Um cliente novo começa como cópia dele.

## Stack e comandos

Astro 7 + Tailwind 4, saída estática, sem framework no navegador. JS próprio: `src/scripts/fx.ts` (~4KB) + Lenis (scroll suave, só desktop com mouse).

```bash
npm install
npm run dev      # http://localhost:4321  ·  prancha de estilo em /previa
npm run check    # tipos + validação do conteúdo
npm run build    # gera dist/ (remove /previa)
npm run preview  # serve dist/
```

Mudou o modelo de conteúdo (`content.config.ts`) e o campo novo não aparece? Pare o servidor, apague `node_modules/.astro/data-store.json` e rode `npx astro sync` antes de subir de novo (o cache de conteúdo não se refaz sozinho).

O `npm run build` **falha** se algum texto passar do limite de caracteres ou faltar campo obrigatório. É a proteção do layout: corrija o conteúdo (ou peça ajuste da copy), não o limite.

## Onde fica cada coisa

| O quê | Arquivo | Muda por cliente? |
|---|---|---|
| URL do site e fontes (Google, baixadas no build) | `cliente.config.mjs` | sim |
| Cores, raios, recorte da foto, estilo da palavra-chave | `src/styles/tema.css` | sim |
| Dados do médico | `src/content/medico/medico.yaml` | sim |
| Páginas e seções | `src/content/paginas/*.yaml` | sim |
| Fotos e imagens (recorte do médico, composição do sobre, fundo gerado) | `src/assets/` | sim |
| Elementos do conceito | `src/components/conceito/` | sim |
| Direção visual aprovada | `direcao-visual.md` | sim |
| As 3 pranchas de direção (só desenvolvimento, `/pranchas/a.html`) | `public/pranchas/` | sim (substitua pelas do cliente na Etapa A) |
| Seções da espinha | `src/components/secoes/` | não (melhorias vão para o template) |
| Botão, header, barra fixa, rodapé, foto | `src/components/base/` | não |
| Régua e animações | `src/styles/global.css`, `src/styles/movimento.css` | não |
| Modelo de conteúdo e limites | `src/content.config.ts` | não |

## Conteúdo: como uma página é montada

Cada arquivo em `src/content/paginas/` é uma página. `home.yaml` é a home; os demais têm `tipo: procedimento` e o nome do arquivo vira o endereço (`melasma.yaml` → `/melasma` e `/lp/melasma`).

Campos da página: `nome`, `resumo` e `foto` (usados na lista da home), `ordem`, `seo` (título até 65, descrição até 160, imagem Open Graph), `cta` (`botaoMenu`, `barra` até 28, `mensagem` do WhatsApp) e `secoes`.

`secoes` é a lista na ordem da página. Cada item tem `tipo` e, quando houver, `variante`:

| tipo | variantes | observação |
|---|---|---|
| `topo` | `recorte` | `foto` (médico recortado, fundo transparente), `fundo` (imagem gerada 16:9), `botao`, `apoio` (até 60, só desktop), `dados` (padrão true: CRM/RQE encaixados na base) |
| `faixa-dados` | | barra de dados avulsa (o topo já traz os dados; use só se `dados: false` no topo) |
| `divisor` | | elemento do conceito entre seções (`semente` muda o desenho) |
| `marquee` | | 3 a 10 itens |
| `identificacao` | `lista` | itens com `icone`, `cta` opcional |
| `manifesto` | | frase com text reveal (sem fotos no meio da frase) |
| `profissional` | `foto-e-texto`, `com-linha-do-tempo` | `composicao: true` para a imagem pronta do Canva, `fatos` (até 3, com `icone`), `marcos` |
| `procedimentos` | `lista-com-imagem` (padrão), `lista-em-linhas`, `cards` | sem `itens`, lista as páginas de procedimento (usa `icone`, `resumo`, `detalhe` e `foto` de cada página); abre no hover no desktop |
| `o-que-e` | | `foto` opcional |
| `para-quem` | | `itens`, `observacao` |
| `numeros` | | 2 a 4 números; só dados confirmados |
| `cuidados` | | `grupos` (antes/depois) |
| `como-funciona` | `passos-com-linha` (padrão: bloco escuro, título fixo, sol que percorre), `passos-simples`, `cartas-empilhadas` | passos com `quando` opcional, `cta` opcional |
| `depoimentos` | | `nota` opcional, `cta` opcional |
| `antes-depois` | | `avisoLegal` obrigatório |
| `clinica` | `bento`, `carrossel` | 3 a 5 fotos |
| `particular` | | 2 a 4 itens |
| `faq` | | gera também os dados estruturados FAQPage |
| `cta-final` | | esconde a barra fixa quando aparece |

Marcações no texto: `**palavra**` no título = palavra-chave em destaque (use em no máximo 2 ou 3 títulos do site; o demo não usa); em texto corrido = negrito. Parágrafos separados por linha em branco (use `|-` no YAML). Evite `rotulo` (o texto em maiúsculas acima do título): só quando informa algo que o título não diz.

**Ritmo de fundos:** `faixa: true` coloca a seção numa faixa de fundo (névoa). Uma faixa no meio da página fecha embaixo com o mesmo arco, invertido. `seta: true` na primeira seção da faixa (ou em `para-quem`) põe a curvinha com seta de rolagem no topo. Seções seguidas com `faixa: true` dividem a mesma faixa, que entra com o divisor do conceito (no demo, o horizonte com fio de luz). Padrão do demo: home com o "sobre" numa faixa e depoimentos + FAQ + CTA na faixa final; procedimento com uma faixa no meio (o que é + pilares, ou depoimentos) e FAQ + CTA na faixa final. Tipos que aceitam: `profissional`, `o-que-e`, `para-quem`, `numeros`, `cuidados`, `depoimentos`, `clinica`, `particular`, `faq`, `cta-final`.

Ícones disponíveis no conteúdo (`icone`): lista em `src/lib/icones.ts`. Ícones dos procedimentos (`icone` da página): `linhas`, `mancha`, `lupa`, `gota`, `sol`, `folha` (`conceito/IconeProcedimento.astro`).

`cta` dos botões leves do meio: `posicao: meio-1` ou `meio-2` (no máximo os dois por página).

Fotos: `foto: { src: ../../assets/arquivo.jpg, alt: '...', foco: '50% 25%' }`. Sem `src`, aparece o espaço reservado com o texto de `reservado`.

## Elementos do conceito (`src/components/conceito/`)

| Arquivo | O que é (demo "Luz de janela") |
|---|---|
| `Marca.astro` | logo (usa `logo` do médico ou o nome em texto, provisório) |
| `IconeAssinatura.astro` | ícone dentro dos botões de WhatsApp (o hover que "acende" fica em `base/Botao.astro`) |
| `DecorTopo.astro` | elemento atrás do médico no topo: brilho + sol de fim de tarde em discos dourados |
| `DecorCta.astro` | fundo do CTA final: o pôr do sol em arcos verdes |
| `Divisor.astro` | horizonte com fio de luz (topo das faixas e tipo `divisor`) |
| `Marcador.astro`, `Separador.astro` | pequeno sol (linha do tempo, listas, marquee) |
| `IconeProcedimento.astro` | ícones dos procedimentos, por nome |

Regras: decoração sempre com a classe `decor` (sem clique), `aria-hidden="true"`, atrás do conteúdo. A cor do elemento casa com a imagem de fundo gerada.

## Pranchas de direção (`public/pranchas/`)

HTML puro, só em desenvolvimento (`/pranchas/g.html`), removido do build. A imagem de compartilhamento (Open Graph, 1200 × 630) é montada em `public/pranchas/og.html` e salva com um print do Chrome sem janela em `src/assets/compartilhamento.png`; a logo do cliente vai em `src/assets/logo/` (`logo` horizontal para o menu do desktop, `logoVertical` para o menu do celular, `logoEscuro` para o rodapé, símbolo para o favicon em `public/favicon.svg`). SVG com fundo transparente: o Canva exporta com um retângulo branco por trás, que precisa ser removido, e com sobra em volta, que precisa ser recortada. O demo guarda as 7 pranchas da primeira rodada (A a G) como referência; num cliente novo, apague e crie as do cliente. `?estatico` desliga as animações para os prints. Detalhes do processo: `processo-design.md`.

## Atributos de comportamento (para novos componentes)

- `data-revela`: entra subindo ao rolar (`style="--atraso:N"` para cascata).
- `data-revela-foto`: foto entra com máscara abrindo.
- `data-desenha`: traços de SVG se desenham.
- `data-progresso`: recebe `--p` de 0 a 1 conforme a rolagem (use em CSS com `calc`).
- `data-topo`, `data-esconde-barra`: controlam a barra fixa de CTA.
- `data-sol` (lista) + `data-passo` (itens): o marcador do conceito percorre a lista com a rolagem, do primeiro ao último item, e marca `.feito`.
- `data-abre-no-hover` (lista de `details`): no desktop, o item abre ao passar o mouse.

Sem JS ou com movimento reduzido, tudo aparece no estado final.

## Cliente novo, passo a passo

1. Copie a pasta sem `node_modules`, `dist` e `.astro`:
   ```bash
   robocopy _template sites/[cliente-pagina]/site /E /XD node_modules dist .astro
   ```
2. O Arthur cria um repositório **privado e vazio** no GitHub para o cliente. Dentro de `site/`: `git init -b main`, `git remote add origin [url]`, commit e push.
3. `npm install` e `npm run dev`.
4. Troque: `cliente.config.mjs` (URL, fontes), `tema.css` (paleta da prancha aprovada), `medico.yaml` (com `demonstracao: false`), `direcao-visual.md`, `public/pranchas/` (apague as do demo).
5. Apague `toxina-botulinica.yaml` e `melasma.yaml`; crie um `.yaml` por procedimento do projeto a partir da copy.md. Reescreva `home.yaml`.
6. Refaça os arquivos de `src/components/conceito/` com o conceito aprovado.
7. Coloque em `src/assets/` o recorte do médico, a composição do sobre e o fundo gerado, e referencie nos `.yaml` (`foto`, `fundo`, `composicao: true`).
8. `npm run check`, `npm run build`, checklist de `qualidade.md`.
9. Publicação: Cloudflare com `wrangler.jsonc` (troque `name`) ou qualquer hospedagem estática (build `npm run build`, pasta `dist`).

## Limitações conhecidas (a evoluir no template)

- Depoimentos, FAQ, clínica, números, cuidados e antes/depois ainda não passaram por uma rodada de direção de arte com o Arthur; seguem o tema, mas os depoimentos ainda são cards iguais.
- Cursor acompanhante não existe (não fez falta até agora).
- O texto do logo é provisório; todo cliente precisa de logo.
- A faixa do site de demonstração (28px) empurra o topo no celular; só existe no demo.
- Editor (CMS) para o médico: Fase 4, etapa 5.
