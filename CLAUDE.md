# Ankura Sites: regras do workspace

Este é o workspace de criação de sites e landing pages da **Ankura**, agência de marketing digital do Arthur Silveira, especializada em médicos e clínicas médicas que querem desenvolver a atuação particular. Eventualmente atende outros nichos com o mesmo método.

Objetivo dos sites: **estratégicos e feitos para converter**, com boa copy e design bonito a serviço do paciente. Não buscamos sites para impressionar web designers.

## Como trabalhar com o Arthur

- Comunicação em português do Brasil, direta e casual.
- **Explique antes de criar.** Proponha o plano e espere aprovação antes de gerar arquivos grandes ou tomar decisões estruturais.
- Peça validação entre as etapas do processo. Não pule etapas.
- Seja honesto nas avaliações: aponte o que está fraco, inclusive no trabalho dele.
- **Leia o feedback pelo desejo, não pela frase.** O Arthur descreve sintomas; resuma o que ele quer antes de mexer. Nunca junte pedaços de opções diferentes (Frankenstein) e nunca remova um elemento quando ele pediu para corrigir.
- Nunca invente dados de cliente. Faltou informação: `[A CONFIRMAR: ...]`. Em testes, dados inventados são marcados `[FICTÍCIO]`.

## Processo (sempre nesta ordem)

1. **Estratégia** (skill `site-estrategia`): briefing.md + arquitetura.md
2. **Copy** (skill `site-copy`): copy.md, com sugestão de formato por seção
3. **Revisão** (skill `site-revisao`): relatório de riscos e ajustes antes de aprovar
4. **Design** (skill `site-build`): direção visual em rodadas de pranchas (3 distintas, depois 1 ou 2 novas do zero, depois refino com a foto real e imagens geradas), testada no celular de verdade. Processo em `.claude/skills/site-build/references/processo-design.md`
5. **Build** (skill `site-build`): código a partir do `_template/`
6. **Publicação**: deploy. O rastreamento (pixel, eventos) é implementado pelo Arthur depois, do jeito dele.

## Estrutura de pastas

```
ankura-sites/
├── CLAUDE.md               regras gerais (este arquivo)
├── PASSAGEM-FASE-4.md      contexto da etapa atual de montagem
├── .claude/skills/         skills do método
├── _referencias/           referências visuais e estruturais + prints
├── _template/              site-base reutilizável (a construir)
└── sites/
    └── [cliente-pagina]/
        ├── briefing.md
        ├── arquitetura.md
        ├── copy.md
        ├── revisao.md
        ├── assets/         fotos reais + imagens geradas aprovadas
        └── site/           código, copiado do _template (repositório próprio do cliente)
```

Melhorias no método vão para as skills e para o `_template/`, nunca só para um site, para que todo projeto seguinte saia melhor.

O workspace fica em `C:\dev\ankura-sites` (fora do OneDrive) e o backup é o GitHub. Este repositório é privado da Ankura; o `site/` de cada cliente tem repositório próprio e é ignorado aqui, para que cada médico só enxergue o próprio site no editor.

`anti-slop.md` existe em `site-copy` e em `site-revisao` (cada skill precisa funcionar sozinha). Ao editar um, edite o outro igual.

## Decisões técnicas

- **Stack:** Astro + Tailwind v4. Tema do cliente (cores, fontes, raios) em variáveis num arquivo só; CSS próprio apenas para animações.
- **Conteúdo** em arquivos de dados com regras de formato (limite de caracteres, proporção de imagem), pronto para editor (CMS).
- **Editor do médico:** só campos operacionais (endereço, horários, valor da consulta, convênios, fotos do consultório). Copy de venda fica com a Ankura, para não pular a revisão CFM.
- **Contato:** somente botão de WhatsApp, com mensagem pronta por página. Formulário só em caso específico, decidido pelo Arthur.
- **CTA no celular:** barra fixa embaixo que surge depois do topo, em todas as páginas (substitui a bolinha flutuante do WhatsApp). Texto e mensagem de WhatsApp variam por página, não por seção. Some quando a seção final de CTA ou o rodapé aparecem. Sem pulsar. No desktop, o botão do menu flutuante faz esse papel.
- **Botões ao longo da página:** seção final de CTA sempre; no meio, só 1 ou 2 botões leves nos pontos de decisão (ex.: depois de "como funciona" e dos depoimentos).
- **Modo LP:** igual à página de procedimento, mas com o menu sem links.
- **CTAs identificados** no código (página e posição) para o rastreamento que o Arthur implementa depois.
- **Hospedagem:** Cloudflare como padrão; pode variar por cliente (qualquer hospedagem de site estático serve). O cliente é dono do próprio domínio.

## Estrutura padrão para médicos

Home (institucional enxuta) + páginas de procedimento (quantidade definida pelo Arthur em cada projeto) + variante "modo LP" de cada página de procedimento (sem links no menu) para receber anúncios. A personalização acontece dentro da estrutura, não na estrutura. Detalhes em `.claude/skills/site-estrategia/references/nichos/medicina.md`.

## Regras de imagem

- **Médico, consultório, equipe, equipamento e paciente: sempre foto real.** Nunca gerar por IA.
- Imagem por IA só para elementos decorativos, texturas, mockups e ilustrações conceituais.
- Fluxo: Claude escreve um **briefing de imagem** (onde entra, proporção, estilo, prompt pronto). Arthur gera no ChatGPT (4 variações) e coloca em `assets/`. Claude escolhe, justifica e encaixa.
- Luz, sombra, parede e textura que precisam parecer reais: imagem gerada, não código. Código para formas, linhas, ícones e movimento.
- Foto do médico: recorte sem fundo para o topo; composição pronta no Canva para o "sobre". Recolorir a roupa para a paleta é permitido; alterar rosto ou corpo, não.
- Ícones, grafismos e formas simples: Claude faz em SVG no código.

## Padrões de design e interação

- Mobile primeiro. O paciente vem do Instagram, no celular.
- Animações leves e com propósito. Nada de scrolljacking, parallax pesado ou animação que atrasa o conteúdo. Respeitar `prefers-reduced-motion`.
- Elementos decorativos nunca sobrepõem texto nem bloqueiam clique (`pointer-events: none`, atrás do conteúdo).
- Pouco texto por seção; o design ajuda a leitura (ver orçamento de texto na skill `site-copy`).
- O gosto da Ankura está documentado em `_referencias/referencias.md` (seção 1). Use princípios, nunca copie layout, fotos ou textos de outros sites.

## Regras de saúde (resumo)

Publicidade médica segue a Resolução CFM 2.336/2023 e as políticas de saúde da Meta e do Google. Nada de promessa de resultado ou afirmação absoluta. CRM sempre visível, RQE quando anunciar especialidade. Preço da consulta pode ser divulgado (decisão estratégica). Detalhes nas skills.
