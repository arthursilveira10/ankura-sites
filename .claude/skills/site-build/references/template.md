# Como usar o _template

O `_template/` é um site completo e funcionando (demo do Dr. Arthur Silveira [FICTÍCIO]). Um cliente novo começa como cópia dele.

## Stack e comandos

Astro 7 + Tailwind 4, saída estática, sem framework no navegador. JS próprio: `src/scripts/fx.ts` (~3KB).

```bash
npm install
npm run dev      # http://localhost:4321  ·  prancha de estilo em /previa
npm run check    # tipos + validação do conteúdo
npm run build    # gera dist/ (remove /previa)
npm run preview  # serve dist/
```

O `npm run build` **falha** se algum texto passar do limite de caracteres ou faltar campo obrigatório. É a proteção do layout: corrija o conteúdo (ou peça ajuste da copy), não o limite.

## Onde fica cada coisa

| O quê | Arquivo | Muda por cliente? |
|---|---|---|
| URL do site e fontes (Google, baixadas no build) | `cliente.config.mjs` | sim |
| Cores, raios, recorte da foto, estilo da palavra-chave | `src/styles/tema.css` | sim |
| Dados do médico | `src/content/medico/medico.yaml` | sim |
| Páginas e seções | `src/content/paginas/*.yaml` | sim |
| Fotos | `src/assets/` | sim |
| Elementos do conceito | `src/components/conceito/` | sim |
| Direção visual aprovada | `direcao-visual.md` | sim |
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
| `topo` | `foto-compacta`, `colagem` | `selos` (até 3), `botao`, `apoio` |
| `faixa-dados` | | sem `itens`, usa CRM, RQE, cidade e modalidade do médico |
| `divisor` | | elemento do conceito entre seções (`semente` muda o desenho) |
| `marquee` | | 3 a 10 itens |
| `identificacao` | `lista`, `cartas` | `cta` opcional |
| `manifesto` | | `fotos` encaixadas com `aposPalavra` |
| `profissional` | `foto-e-texto`, `com-linha-do-tempo` | `fatos` (até 3), `marcos` |
| `procedimentos` | `lista-em-linhas`, `lista-com-imagem`, `cards` | sem `itens`, lista as páginas de procedimento |
| `o-que-e` | | `foto` opcional |
| `para-quem` | | `itens`, `observacao` |
| `numeros` | | 2 a 4 números; só dados confirmados |
| `cuidados` | | `grupos` (antes/depois) |
| `como-funciona` | `passos-com-linha`, `cartas-empilhadas`, `passos-simples` | `cta` opcional |
| `depoimentos` | | `nota` opcional, `cta` opcional |
| `antes-depois` | | `avisoLegal` obrigatório |
| `clinica` | `bento`, `carrossel` | 3 a 5 fotos |
| `particular` | | 2 a 4 itens |
| `faq` | | gera também os dados estruturados FAQPage |
| `cta-final` | | esconde a barra fixa quando aparece |

Marcações no texto: `**palavra**` no título = palavra-chave em destaque; em texto corrido = negrito. Parágrafos separados por linha em branco (use `|-` no YAML).

`cta` dos botões leves do meio: `posicao: meio-1` ou `meio-2` (no máximo os dois por página).

Fotos: `foto: { src: ../../assets/arquivo.jpg, alt: '...', foco: '50% 25%' }`. Sem `src`, aparece o espaço reservado com o texto de `reservado`.

## Elementos do conceito (`src/components/conceito/`)

| Arquivo | O que é |
|---|---|
| `Marca.astro` | logo (usa `logo` do médico ou o nome em texto) |
| `IconeAssinatura.astro` | ícone + assinatura dentro dos botões de WhatsApp |
| `DecorTopo.astro` | decoração atrás da foto do topo |
| `SobreFoto.astro` | elemento sobre o canto da foto do topo (pode ficar vazio) |
| `DecorCta.astro` | fundo do bloco de CTA final |
| `Divisor.astro` | divisor temático entre seções |
| `Marcador.astro` | marcador dos passos e da linha do tempo |
| `Separador.astro` | separador do marquee e das listas |
| `IconeProcedimento.astro` | ícones da lista de procedimentos (traço com `pathLength="1"` para se desenharem) |
| `topografia.ts` | gerador das curvas de nível do demo (exemplo de desenho gerado no build) |

Regras: decoração sempre com a classe `decor` (sem clique), `aria-hidden="true"`, atrás do conteúdo. Para um elemento se desenhar ao aparecer: atributo `data-desenha` no SVG e `pathLength="1"` nos traços.

## Atributos de comportamento (para novos componentes)

- `data-revela`: entra subindo ao rolar (`style="--atraso:N"` para cascata).
- `data-revela-foto`: foto entra com máscara abrindo.
- `data-desenha`: traços de SVG se desenham.
- `data-progresso`: recebe `--p` de 0 a 1 conforme a rolagem (use em CSS com `calc`).
- `data-topo`, `data-esconde-barra`: controlam a barra fixa de CTA.

Sem JS ou com movimento reduzido, tudo aparece no estado final.

## Cliente novo, passo a passo

1. Copie a pasta sem `node_modules`, `dist` e `.astro`:
   ```bash
   robocopy _template sites/[cliente-pagina]/site /E /XD node_modules dist .astro
   ```
2. O Arthur cria um repositório **privado e vazio** no GitHub para o cliente. Dentro de `site/`: `git init -b main`, `git remote add origin [url]`, commit e push.
3. `npm install` e `npm run dev`.
4. Troque: `cliente.config.mjs` (URL, fontes), `tema.css` (paleta da direção visual), `medico.yaml` (com `demonstracao: false`), `direcao-visual.md`.
5. Apague `toxina-botulinica.yaml` e `melasma.yaml`; crie um `.yaml` por procedimento do projeto a partir da copy.md. Reescreva `home.yaml`.
6. Refaça os arquivos de `src/components/conceito/` com o conceito aprovado.
7. Coloque as fotos em `src/assets/` e referencie nos `.yaml`.
8. `npm run check`, `npm run build`, checklist de `qualidade.md`.
9. Publicação: Cloudflare com `wrangler.jsonc` (troque `name`) ou qualquer hospedagem estática (build `npm run build`, pasta `dist`).

## Limitações conhecidas (a evoluir no template)

- `lista-com-imagem` é acordeão também no desktop; a imagem ao lado com hover ainda não existe.
- Cursor acompanhante e scroll suave (Lenis) ainda não estão no template.
- Editor (CMS) para o médico: Fase 4, etapa 5.
