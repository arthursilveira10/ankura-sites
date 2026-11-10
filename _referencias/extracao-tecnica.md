# Extração técnica das referências 03 a 06

Medições feitas em 10/11/2026 com navegador automatizado, em 1440×900 (desktop) e 390×844 (celular, com navegador de celular simulado). O que é específico do celular está na seção 5. Registramos **princípios e medidas** para orientar a skill `site-build` e o `_template/`. Nada de código, imagem ou texto dessas páginas deve ir para os nossos sites.

Na seção 1 está a síntese com os valores padrão da Ankura. Os detalhes por referência estão na seção 2.

---

## 1. Síntese: padrão Ankura (ponto de partida do template)

As 4 referências convergem muito. Onde convergem, viramos padrão. A identidade de cada cliente muda cor, fonte e textura, não a régua.

### Tipografia

| Item | Padrão | De onde vem |
|---|---|---|
| Fontes | 1 família para tudo (sans) **ou** par serifada nos títulos + sans no texto. Máximo 2 famílias, em **fonte variável**, hospedada no próprio site (woff2, `font-display: swap`) | 4 de 4 hospedam a fonte no próprio site; 03 usa 1 família, 04 usa par serifada + sans |
| H1 (topo) | `clamp(40px, 5.2vw, 84px)`, peso 400 a 500, entrelinha 0,95 a 1,1, espaçamento entre letras **negativo** (-0,03 a -0,045em) | 03: 40→76px; 04: 54→84px; 05: 44→106px; 06: 43→98px |
| H2 (seções) | `clamp(30px, 4.2vw, 60px)`, entrelinha ~1,05, espaçamento entre letras -0,025 a -0,04em | 03: 32→56px; 04: 44→60px; 05: 37→74px; 06: 32→58px |
| H3 (cards, passos) | 20 a 28px, peso 500, espaçamento entre letras levemente negativo | 4 de 4 |
| Texto corrido | 15,5 a 17px, entrelinha 1,55 a 1,65 | 4 de 4 |
| Texto de destaque (lead) | `clamp(17px, 1.3vw, 20px)` | 03, 05, 06 |
| Largura de leitura | parágrafos com no máximo ~34em; títulos com no máximo ~11 a 12em | 06 explicita; os outros seguem na prática |
| Quebra de linha | `text-wrap: balance` em títulos e textos curtos | 04 |
| Rótulo de seção (eyebrow) | 12,5 a 14px, maiúsculas, espaçamento entre letras +0,1 a +0,2em | 03, 04 |

Títulos grandes, finos e "apertados" + texto pequeno e arejado: esse contraste é o que dá o ar editorial e premium das 4.

**Fallback de fonte ajustado** (04 e 05): definem uma fonte de sistema com as métricas corrigidas (`size-adjust`, `ascent-override`) para o texto não "pular" quando a fonte carrega. Vale levar para o template.

### Espaçamento e grade

| Item | Padrão |
|---|---|
| Largura máxima do conteúdo | **1240px** (03, 04 e 06 usam exatamente isso; 05 usa 1320px) |
| Margem lateral | `clamp(20px, 4vw, 48px)` (03 e 05 usam exatamente isso) |
| Respiro vertical das seções | `clamp(64px, 10vw, 150px)` em cima e embaixo. No celular fica entre 64 e 90px |
| Espaço entre cards | 12 a 18px (padrão: 16px) |
| Espaço entre colunas grandes | `clamp(32px, 5vw, 88px)` |
| Grade do topo | 2 colunas assimétricas: texto mais largo que a foto (ex.: 7fr / 5fr). No celular empilha com a foto primeiro ou logo após a headline |

### Cantos (raio)

| Uso | Padrão |
|---|---|
| Blocos grandes e cards | **24 a 30px** (o mais comum nas 4 é 24px; 03 usa 28px; 04 usa 30px) |
| Blocos médios | 20 a 22px |
| Elementos pequenos (miniaturas, inputs) | 12 a 14px |
| Botões, menu e chips | **999px** (pílula), em 4 de 4 |
| Seção inteira em bloco (fundo colorido arredondado) | 28 a 56px, com margem lateral de 16px mostrando o fundo da página |

Escala sugerida para o tema: `--r-lg: 28px`, `--r-md: 20px`, `--r-sm: 12px`, `--r-pill: 999px`. A identidade do cliente pode puxar tudo para mais reto (6 a 12px, como a 06) ou mais redondo.

### Movimento

| Item | Padrão |
|---|---|
| Curva padrão | **ease-out forte**: `cubic-bezier(0.16, 1, 0.3, 1)`. As 4 usam variações quase idênticas: (0.2, 0.7, 0.1, 1), (0.22, 1, 0.36, 1), (0.16, 1, 0.3, 1) |
| Entrada de elementos ao rolar | sobe 22 a 34px + aparece (opacidade 0→1) em **0,9 a 1s**. Atraso em cascata de 0,1s entre irmãos |
| Gatilho | IntersectionObserver, threshold ~0,1, margem inferior -6% a -8%. Anima uma vez e para de observar |
| Hover (botão, menu, card) | 0,3 a 0,5s |
| Entrada da foto no topo | máscara que abre (`clip-path` de recorte para cheio) em **1,2 a 1,4s**, ou leve subida. Começa junto com o carregamento, nunca esconde a headline |
| Marquee | 33 a 70s por volta, linear, infinito. Pausa no hover é bem-vinda |
| Decoração em loop (ícone girando, flutuar) | 6 a 22s, sutil (±10px ou rotação lenta) |
| Movimento reduzido | 4 de 4 respeitam `prefers-reduced-motion`: desligam animação e transição e mostram tudo visível. **Obrigatório no template** |
| Sem JS | 04 e 05 garantem que o conteúdo apareça se o JS falhar (classe `no-js`/`js`). **Obrigatório no template** |

### Menu flutuante

Padrão consolidado (03 e 05, o 05 é o mais refinado):
- Header fixo no topo, transparente sobre o hero.
- **Itens dentro de uma pílula** (raio 999px, borda fina de 1px na cor de linha, fundo claro a ~60% de opacidade, padding interno 5 a 8px).
- Hover do item: fundo pílula preenchido com a cor principal e texto invertido, transição de 0,3s.
- **Ao rolar:** ganha fundo de vidro (cor do fundo a 72 a 86% + `backdrop-filter: blur(14 a 18px)`), linha fina ou sombra suave embaixo e altura menor (84→72px). No 05 a pílula também encolhe de largura (até ~1080px).
- **Esconde ao rolar para baixo e volta ao rolar para cima** (05), em 0,7s. Bom para celular: libera tela para o conteúdo.
- CTA de agendamento sempre visível dentro do menu.
- No celular: botão hambúrguer que abre um painel de tela cheia com links grandes (`clamp(28px, 7vw, 44px)`). O 03 abre com um círculo crescendo a partir do botão.

### Botão (CTA)

Padrão comum a 03 e 04: **pílula com o texto à esquerda e um círculo com ícone à direita**. Altura de 50 a 58px, padding de 8px 8px 8px 24px, ícone num círculo de 36 a 42px.
- Hover: o botão sobe 2px e o ícone gira (-45°). O 04 também passa um brilho diagonal pelo botão.
- Texto em 14 a 15px, peso 500 a 600.
- Botão flutuante de WhatsApp fixo no canto: 48 a 58px, redondo, com sombra (03 e 04).

### Textura e profundidade

- **Grão** (05): ruído SVG gerado em código, fixo na tela, opacidade ~4,5%, `pointer-events: none`. Dá materialidade sem imagem pesada.
- **Brilho radial** suave atrás de elementos (04, 06): gradiente radial da cor de destaque a ~7 a 38% de opacidade.
- **Grade de linhas finas** nas laterais (04): gradiente linear formando quadriculado a 14% de opacidade. Decoração de borda, longe do texto.
- **Sombra** só em cards empilhados e no botão flutuante, sempre difusa e projetada para baixo (`0 30px 70px -38px` com a cor do texto a ~38%).
- **Paleta**: fundo off-white quente (#F4F1EB a #FAF9F6) + tinta escura quase preta (não #000) + 1 cor de destaque + 1 tom escuro para seções invertidas. 4 de 4 seguem isso.

### Performance (o que elas fazem certo)

- Imagens em **WebP com `srcset`** (300/600/1100w), `loading="lazy"` fora do topo, `decoding="async"`, largura e altura declaradas (03).
- `content-visibility: auto` nas seções abaixo da dobra (04). Acelera a primeira renderização em páginas longas.
- Pouco ou nenhum JS de terceiros: 03 e 04 são HTML e CSS feitos à mão com ~8KB de JS inline e nenhuma biblioteca. Tudo o que o Arthur gosta nelas cabe nisso.

---

## 2. Componentes: como cada interação funciona

### Faixa de dados abaixo do topo (03)
Linha de 3 a 4 itens (CRM, RQE, cidade, modalidade) logo após o hero, com divisórias finas. Variação na 06: números de prova logo abaixo do CTA, em grade de 3 colunas com borda superior e divisórias verticais, número grande (`clamp(22px, 1rem + 1vw, 30px)`) e rótulo pequeno (12,5px) embaixo.

### Text reveal da frase-manifesto (03, 04, 06)
- O texto é quebrado em palavras via JS (cada palavra num `span`). Sem JS, o texto aparece normal.
- Todas as palavras começam numa cor apagada (cor do texto com pouco contraste) e passam para a cor cheia conforme o progresso do scroll pela seção. Transição de cor de 0,4 a 0,5s por palavra.
- O progresso é calculado com `requestAnimationFrame` sobre um listener de scroll passivo, nunca a cada evento.
- O 03 encaixa uma **miniatura de foto em pílula** no meio da frase, tratada como uma "palavra". Bom recurso para humanizar.
- Tamanho da frase: `clamp(26px, 3.6vw, 52px)`, peso 400 a 500.
- No movimento reduzido: todas as palavras já na cor cheia.

### Sticky section do "como funciona" (05, 03)
- **05 (o preferido do Arthur):** grade de 2 colunas (1fr / 1,1fr, espaço de 64px). A coluna da esquerda (título + texto curto) fica `position: sticky; top: 140px`. Na direita, os passos têm 88px de respiro entre si.
- Cada passo tem: bolinha na linha do tempo (23px), número em fonte tabular, título e texto.
- Uma **linha vertical** liga os passos e vai sendo **preenchida conforme o scroll** (escala vertical de 0 a 1 no traço colorido).
- Passos ainda não alcançados ficam a 35% de opacidade. O passo atual e os anteriores ficam a 100%, com a bolinha preenchida e um halo de 6px. Transição de 0,8s.
- Sem JS: tudo a 100%.
- **03 (variante "cartas empilhadas"):** cards com raio de 28px e `position: sticky` com `top` crescente (110, 130, 150, 170px). Ao rolar, cada card para um pouco abaixo do anterior e eles se empilham, com sombra para cima. Funciona também no celular (top 84, 98, 112...). Ótimo para "o ciclo do problema" ou "etapas".
- No celular, o padrão do 05 vira coluna única: o título sai do sticky e os passos seguem embaixo com a linha.

### Hover que revela imagem por serviço (06)
- Lista de serviços em linhas com borda fina, cada linha com número, ícone, nome (`clamp(19px, 1rem + 0.8vw, 26px)`) e seta.
- Item ativo: texto escurece e um traço colorido de 1,5px cresce da esquerda para a direita embaixo (0,7s).
- No desktop, a coluna ao lado mostra a imagem do serviço ativo, trocando com fade.
- **No celular não existe hover**: o item ativo é escolhido por toque (vira acordeão) ou a imagem aparece dentro do item. O template precisa prever isso.

### Antes e depois em slider (06)
- Uma variável CSS (`--split`, 50% no início) controla o corte: a imagem "antes" fica por cima, recortada com `clip-path: inset(0 calc(100% - var(--split)) 0 0)`.
- Uma linha vertical de 1,5px com brilho e um puxador de 46px acompanham o corte.
- Etiquetas "antes" e "depois" fixas nos cantos.
- `touch-action: pan-y` permite arrastar na horizontal sem travar o scroll vertical no celular. `user-select: none`.
- Legenda legal obrigatória embaixo (autorização, resultados variam, não é promessa, responsável técnico).

### Linha do tempo da trajetória (06)
- Trilho vertical de 1px à esquerda; um traço colorido é preenchido conforme o progresso do scroll pela seção.
- Cada marco tem um marcador (losango de 11px na 06; no nosso caso a forma vem da identidade) que "acende" quando o traço chega nele.
- Conteúdo do marco: ano/quando (13px, cor de destaque), título (17px, peso 500), local (13,5px, cor apagada).
- Implementação elegante: o JS só atualiza **uma** variável de progresso (`--p`) na seção, e o CSS calcula o resto. Pouquíssimo JS.

### Marquee (03, 05, 06)
- Faixa com frases ou tratamentos repetidos, conteúdo duplicado lado a lado, animação deslocando -50% em loop linear.
- Velocidade: 33 a 70s por volta. Texto de `clamp(20px, 2.4vw, 38px)`.
- Separador entre itens (ponto, estrela, ícone SVG da identidade).
- No movimento reduzido: para.

### Bento grid / blocos da clínica (04)
- Grade de 3 colunas desiguais (~1,2fr / 1fr / 1fr), altura fixa de 360px, espaço de 18px, raio de 30px.
- A foto entra com um zoom leve que assenta na escala normal ao aparecer (1,4s).
- **Cuidado do Arthur:** blocos a serviço da mensagem. Na prática: máximo 3 a 5 blocos por grade e no máximo uma grade bento por página.

### Cursor personalizado (05)
- Bolinha de 10px que segue o mouse; vira círculo de 44px translúcido sobre links e um círculo de 86px com rótulo ("ver", "arrastar") sobre elementos específicos.
- `pointer-events: none` e só aparece em dispositivos com mouse (`(hover: hover) and (pointer: fine)`).
- O 05 esconde o cursor nativo (`cursor: none`). **Recomendação:** manter o cursor nativo e usar o personalizado como um acompanhante. Esconder o nativo prejudica a acessibilidade e incomoda parte dos usuários.

### Scroll suave (05)
- Usa a biblioteca Lenis no desktop. 03 e 04 usam só `scroll-behavior: smooth` nativo para âncoras.
- **Recomendação:** Lenis só no desktop com mouse, desligado no celular e no movimento reduzido. Ou ficar só com o nativo, se o ganho não justificar ~10KB.

---

## 3. O que NÃO levar

- **Tela de carregamento (preloader)** antes do conteúdo (05): atrasa o primeiro contato do paciente vindo do anúncio. Proibido no template.
- **Esconder o cursor nativo** (05): ver acima.
- **Grão sobre o conteúdo com z-index alto** (05): funciona porque é quase invisível e não bloqueia clique, mas o nosso padrão é deixar texturas **atrás** do conteúdo, como pede o CLAUDE.md.
- **Next.js para uma página de conteúdo** (05 e 06 usam): carrega ~8 arquivos de JS para algo que 03 e 04 entregam com HTML puro. Confirma a escolha do Astro.
- **Decoração animada em excesso** (04 tem 6 animações infinitas diferentes na mesma página): limitar a 1 ou 2 elementos em loop por página.

---

## 4. Reaproveitamento no template (resumo para a skill `site-build`)

| Componente | Base técnica | Referência |
|---|---|---|
| Menu flutuante em pílula | fixo + vidro ao rolar + esconde ao descer | 05, 03 |
| Botão pílula com ícone | hover com subida de 2px e ícone girando | 03, 04 |
| Entrada ao rolar | IntersectionObserver + classe, 1s, curva padrão | 4 de 4 |
| Entrada da foto do topo | clip-path abrindo em 1,3s | 03, 06 |
| Faixa de dados | grade com divisórias finas | 03, 06 |
| Text reveal | palavras em span + progresso por scroll | 03, 04, 06 |
| Sticky "como funciona" | coluna sticky + linha que preenche | 05 |
| Cartas empilhadas | sticky com top crescente | 03 |
| Hover com imagem | lista + imagem ao lado (desktop), acordeão (celular) | 06 |
| Antes e depois | variável `--split` + clip-path + legenda legal | 06 |
| Linha do tempo | uma variável de progresso + CSS | 06 |
| Marquee | conteúdo duplicado + translateX -50% | 03, 05, 06 |
| Bento | grade de 3 colunas desiguais, raio de 28 a 30px | 04 |
| Cursor e scroll suave | só desktop com mouse, opcionais por cliente | 05 |

---

## 5. Celular (390×844)

O paciente chega pelo Instagram. Dentro do app do Instagram, o navegador tem barras em cima e embaixo, e a área visível fica menor que os 844px medidos aqui (na prática, algo entre 650 e 700px). As conclusões abaixo já consideram isso.

### O que cada referência faz no topo

| Ref. | Ordem no topo | Headline | Botão principal | Foto |
|---|---|---|---|---|
| 03 Lucas | foto (colagem) → selo → headline → texto → botão | 34px, começa em 486px | termina em ~810px | começa em 84px, ~300px de altura |
| 04 Mônica | foto (arco) → selo → headline → local → 2 botões | 32px, começa em 557px | termina em ~783px | começa em 86px, ~375px de altura |
| 05 Helena | selo → headline → texto → 2 botões → foto | 44px, começa em 192px | visível já na primeira tela | começa em 600px |
| 06 Gabrielle | selo → headline → texto → 2 botões → números → foto | 43px, começa em 172px | termina em 527px | começa em 806px, fora da primeira tela |

**Leitura:** são dois modelos.
- **Foto primeiro (03, 04):** o médico como protagonista, bonito e humano. Mas o botão cai abaixo de ~780px, ou seja, **fora da tela no navegador do Instagram**. O paciente precisa rolar para achar como agendar.
- **Texto primeiro (05, 06):** headline e botão aparecem na hora, mas a foto do médico só aparece rolando. Isso contraria a nossa regra de "foto real do médico no topo junto com a resposta".

**Padrão Ankura para o topo no celular (meio-termo):**
- Foto do médico em cima, mas **compacta**: 260 a 300px de altura (cerca de 35% da tela), com o recorte da identidade (arco, cantos, colagem).
- Headline logo depois: 34 a 40px.
- Texto de apoio curto (2 a 3 linhas) e o botão principal **terminando até ~620px do topo**, para aparecer inteiro no navegador do Instagram sem rolar.
- Selos e elementos decorativos ao redor da foto, nunca empurrando o botão para baixo.
- Faixa de dados (CRM, RQE, cidade) logo abaixo do botão.
- **Validar a primeira tela em 390×664** (simulando o Instagram) no checklist da skill.

### Medidas no celular

| Item | Referências | Padrão Ankura |
|---|---|---|
| H1 | 32 a 44px | 34 a 40px |
| H2 | 27 a 37px | 28 a 34px |
| Texto corrido | 14,5px (03) a 16,8px (05) | **mínimo 16px**. O 14,5px do Lucas fica pequeno para leitura longa no celular |
| Respiro entre seções | 32px (04) a 104px (06) | 72 a 96px. O da Mônica (32px de cada lado) deixa as seções coladas |
| Margem lateral | 16 a 20px | 20px |
| Header | 64 a 88px de altura | 64 a 72px, para não roubar tela |
| Botão do menu | 46px | mínimo 44px |
| Botão de WhatsApp flutuante | 48 a 49px, 12 a 16px da borda (03, 04, 06; a 05 não tem) | 56px, 16px da borda. Na página normal: botão flutuante. No modo LP: barra fixa embaixo com o CTA escrito |
| Botões | 52 a 58px de altura | 52 a 56px, largura total ou quase total |
| Áreas de toque pequenas (menos de 40px) | 2 a 11 por página | nenhuma em link ou botão importante. Mínimo de 44px |
| Rolagem lateral acidental | nenhuma das 4 | nenhuma (item do checklist) |
| Tamanho total da página | 13 a 22 telas (05: 13; 04: 14; 06: 21; 03: 22) | a home e as páginas de procedimento podem ser longas. No **modo LP**, buscar no máximo ~14 telas |

### Como as interações se comportam no celular

- **Sticky do "como funciona" (05) e dos pilares (06):** **desligam** no celular e viram uma coluna normal. O título fixo à esquerda não cabe numa tela de 390px. No template: no celular, título em cima e passos embaixo, mantendo a linha que se preenche com a rolagem (funciona bem em coluna).
- **Cartas empilhadas (03):** **continuam funcionando** no celular (cada carta para 14px abaixo da anterior). É o único efeito de rolagem fixa que sobrevive bem no celular. Boa opção para dar movimento a essa seção no celular.
- **Hover com imagem (06):** no celular vira uma lista com **todos os itens abertos e uma imagem em cada um**, com ~545px por item. Com 5 serviços dá ~2.700px, mais de 3 telas só nessa seção. **No nosso template:** acordeão com o primeiro item aberto e a imagem dentro do item aberto, ou cards em carrossel horizontal com deslize.
- **Bento (04):** passa de 3 colunas para uma grade 2×2 com ~470px de altura. Funciona bem.
- **Antes e depois (06):** mantém o slider com arraste na largura total. Funciona bem.
- **Menu:** hambúrguer abrindo painel de tela cheia nas 4.
- **Cursor personalizado e scroll suave:** desligados no celular (05).

### Problemas encontrados (para não repetir)

- **Fotos secundárias do topo carregando atrasadas (03, 04):** a foto principal tem prioridade alta, mas as fotos menores da colagem estão com carregamento adiado (`loading="lazy"`). No primeiro print elas aparecem como **blocos vazios**. Regra: **tudo que aparece na primeira tela carrega na hora**, e a foto principal tem `fetchpriority="high"`.
- **Topo invisível até a animação terminar (05):** a headline e a foto só aparecem depois da tela de carregamento e da animação de entrada. No teste, a primeira tela ficou vazia por vários segundos. O tempo foi inflado porque o navegador do teste estava em segundo plano, mas o problema é de fundo: **a headline nunca pode depender de animação para aparecer**. A animação de entrada vale só para a foto e os elementos decorativos.
- **Selo de agenda com mês (05):** "agenda aberta em outubro" já estava fora do prazo quando medimos. Nada de data no topo.
