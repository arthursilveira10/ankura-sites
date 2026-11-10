---
name: site-build
description: "Método da Ankura para transformar a copy aprovada em site: direção visual a partir de um conceito-mãe do cliente, briefings de imagem e de ensaio fotográfico, montagem com o _template (Astro + Tailwind), biblioteca de componentes, regras de animação, performance, acessibilidade, mobile e checklist final. Use SEMPRE que a tarefa for criar o visual, a direção de arte, o layout ou o código de um site, landing page ou página de procedimento, montar um site a partir do copy.md, ajustar o design de um site existente, escrever briefing de imagem ou de fotos, ou conferir um site antes de publicar, para médicos ou qualquer nicho, mesmo que a pessoa só diga 'vamos para o design', 'monta o site' ou 'como fica isso no celular'."
---

# Build de sites, Método Ankura

Esta skill cobre as etapas 4 (Design) e 5 (Build) do processo. Ela parte de:
- **copy.md** aprovada (skill `site-copy`);
- **revisao.md** sem pendência crítica (skill `site-revisao`);
- **briefing.md** (skill `site-estrategia`), de onde sai a identidade e o conceito do cliente;
- o que existir de identidade: logo, cores, fontes, fotos.

Se a copy não estiver aprovada, pare e diga. Desenhar em cima de texto provisório faz o layout ser refeito depois.

Entregáveis, nesta ordem e com aprovação do Arthur entre eles:
1. **Rodadas de pranchas** (3 distintas, depois 1 ou 2 novas, depois refino com materiais reais) → o Arthur aprova uma → `direcao-visual.md` → aprovação.
2. **Briefings de imagem** (IA) e **briefing de ensaio fotográfico** (fotos reais) → Arthur providencia.
3. **Site montado** em `sites/[cliente-pagina]/site/` a partir do `_template/` → revisão no navegador.
4. **Checklist final** preenchido → publicação.

## O objetivo, em uma frase

Um site com personalidade própria, que nasce da história do médico, e que no celular leva o paciente do Instagram ao WhatsApp sem atrito.

Personalidade sem conversão é peça de portfólio. Conversão sem personalidade é template. A Ankura entrega os dois.

## Princípios

### 0. Fugir do visual de IA
Toda escolha padrão (creme + serifa + terracota, palavra em itálico em todo título, rótulo em maiúsculas em toda seção, cards iguais, numeração sem sequência) precisa de motivo escrito ou sai. Lista completa e autocrítica: `references/anti-slop-visual.md`. Leia antes de cada prancha e antes de cada apresentação.

### 0b. O médico é o topo, e o site tem direção de arte
O topo é a foto do médico, grande, recortada e sem moldura, com textura e luz cobrindo a seção e um elemento do conceito atrás dele (ref 01 é a referência de presença). Layout correto sem camada artística fica "chapado". A seriedade fica na base (tipografia sóbria, cor firme, espaço); a personalidade fica no ofício: uma ideia só, visível, em poucos lugares. Ver `references/processo-design.md`.

### 1. Conceito antes de layout
Toda direção visual começa por um **conceito-mãe**: uma metáfora curta tirada do briefing (a história do médico, o nome, a forma como ele trabalha, o que o paciente sente). Dele saem de 3 a 4 elementos visuais com função no site e 1 microinteração-assinatura no botão. Referências: a bússola do Lucas (ref. 03) e o sistema inteiro do Bonança (ref. 07). Como fazer: `references/direcao-visual.md`.

### 2. A régua é fixa, a identidade muda
Espaçamento, tamanhos de texto, larguras, curvas de animação e regras de celular seguem os valores padrão de `_referencias/extracao-tecnica.md` (seções 1 e 5), que já estão no tema do template. O cliente muda **cor, fonte, forma (raio), textura e os elementos do conceito**. Não invente medidas novas por projeto sem motivo.

### 3. Celular primeiro, e no navegador do Instagram
O paciente chega pelo Instagram, cujo navegador mostra uns 650 a 700px de altura útil. Todo layout é pensado primeiro em 390px de largura. **A primeira tela (390×664) precisa mostrar: foto do médico, headline e o botão principal inteiro.** O desktop é a adaptação.

### 4. Um caminho claro até o WhatsApp
- Botão principal no topo.
- No celular, **barra fixa de CTA** que surge depois do topo e some na seção final e no rodapé.
- No desktop, o botão no menu flutuante faz esse papel.
- No meio da página, só 1 ou 2 botões leves nos pontos de decisão.
- Seção final de CTA sempre.
- A **cor de ação é exclusiva** dos CTAs.

Texto da barra e mensagem pronta do WhatsApp variam **por página**, nunca por seção.

### 5. Movimento com propósito
Animações leves, que explicam ou dão vida, nunca atrasam o conteúdo. O texto nunca depende de animação para aparecer. Tudo respeita `prefers-reduced-motion` e funciona sem JS. Limites e valores: `references/animacao.md`.

### 6. Foto real de gente, IA só para o resto
Médico, equipe, consultório, equipamento e paciente: sempre foto real. IA só para texturas, elementos decorativos, mockups e ilustrações conceituais. O Arthur gera no ChatGPT a partir do briefing de imagem. Ícones e grafismos simples saem em SVG no código. Ver `references/imagens.md`.

### 7. Menos blocos, mais mensagem
Cada seção existe para a copy, não o contrário. Máximo de uma grade bento por página, no máximo 1 ou 2 elementos em loop por página e nada de recurso que não serve ao paciente (ex.: modo escuro).

## Proibido

- Scrolljacking de qualquer tipo, inclusive seção que trava a rolagem vertical para andar na horizontal.
- Tela de carregamento (preloader), intro animada antes do conteúdo, headline escondida até a animação terminar.
- Parallax pesado, animação contínua sobre o conteúdo (partículas em tela cheia, grão com z-index alto).
- Elemento decorativo sobre texto ou bloqueando clique. Decoração sempre atrás e com `pointer-events: none`.
- Esconder o cursor nativo.
- Texto corrido abaixo de 16px no celular; área de toque abaixo de 44px.
- Data ou mês no topo ("agenda aberta em outubro"), contagem regressiva, selo de escassez.
- Foto de banco de imagem ou IA no lugar do médico, da equipe, do consultório ou de paciente.
- Copiar layout, código, imagem ou texto das referências. Usamos princípios e medidas.
- Inventar dado do cliente. Faltou: `[A CONFIRMAR: ...]` visível no site de prévia.

## Processo

O processo completo, com o que deu certo e errado no primeiro demo, está em `references/processo-design.md`. Leia antes de começar a Etapa A. Resumo:

### Etapa A. Direção visual em rodadas (aprovação antes de codar)
1. Releia briefing.md, copy.md e revisao.md. Leia `_referencias/referencias.md` (seção 1, inclusive "O que o Arthur busca"), `_referencias/extracao-tecnica.md` e `references/anti-slop-visual.md`.
2. **Peça os materiais reais já no início:** foto do médico (de preferência já recortada, sem fundo), logo e cores da marca, se houver. Prancha com foto listrada não deixa o Arthur julgar a direção.
3. **Rodada 1:** 3 pranchas realmente distintas (`references/direcao-visual.md`, seção 8), com autocrítica de cada uma (anti-slop-visual.md, seção 3) em 390px e 1440px.
4. **Leia o feedback pelo desejo, não pela frase** (`processo-design.md`, seção 2). Resuma o desejo em 3 a 5 linhas e registre em `_referencias/referencias.md`.
5. **Rodada 2:** 1 ou 2 pranchas novas, do zero, que atendem ao desejo. Nunca uma prancha feita de pedaços das anteriores.
6. **Rodadas de refino** sobre a prancha escolhida: direção de arte com os materiais reais (foto recortada, figurino na paleta, imagens geradas por briefing), acabamento e celular.
7. **Teste no celular de verdade** antes de aprovar: link temporário (`processo-design.md`, seção 5).
8. Escreva `direcao-visual.md` na pasta do cliente a partir da prancha aprovada: conceito, vocabulário visual, paleta (tokens com papel), tipografia, forma e textura, assinatura do botão, ritmo de fundos, mapa de componentes por seção e o que o site não vai ter.

### Etapa B. Imagens
1. Liste todas as imagens do site por seção: as que existem, as que faltam e quem providencia.
2. **Foto do médico:** recorte sem fundo para o topo; composição pronta (painel + recorte, feita no Canva) para o "sobre". Figurino na paleta (recolorir é permitido). Ver `references/imagens.md`.
3. **Imagens geradas** (luz, parede, tecido, textura): briefing com prompt pronto; o Arthur gera 4 variações no GPT e você escolhe e justifica. Modelo: `_template/briefings-imagem-demo.md`.
4. Fotos reais faltando ou fracas: **briefing de ensaio fotográfico**, com orientação de figurino.
5. Enquanto as imagens não chegam, espaço reservado com a proporção certa e a etiqueta `[FOTO: ...]`. Nunca foto de banco.

### Etapa C. Montagem
Procedimento técnico em `references/template.md`.
1. Copie o `_template/` para `sites/[cliente-pagina]/site/` e crie o repositório próprio do cliente.
2. Leve a prancha aprovada para o tema (`tema.css`, `cliente.config.mjs`) e para `src/components/conceito/`.
3. Preencha o conteúdo a partir da copy.md, sem reescrever texto. Divergência entre copy e layout: aponte, não edite a copy por conta própria.
4. Monte cada página com os componentes e variantes do mapa aprovado. Use `faixa: true` para planejar o ritmo de fundos.
5. Gere home, páginas de procedimento e modo LP de cada página.

### Etapa D. Verificação
1. Navegador em 390×664, 390×844, 768 e 1440. Celular de verdade pelo link temporário.
2. Checklist de `references/qualidade.md` inteiro, incluindo Lighthouse no celular, movimento reduzido e sem JS.
3. Autocrítica de `references/anti-slop-visual.md` na página inteira; corte pelo menos um elemento.
4. Corrija e só depois apresente. Na apresentação, prints do celular primeiro, e diga o que ainda está fraco.

### Etapa E. Entrega
- Publicação de prévia (hospedagem definida no projeto; padrão Cloudflare).
- Lista de pendências: `[A CONFIRMAR]`, `[FOTO]`, checagens de regra.
- Lembrete de que o rastreamento é do Arthur: todos os CTAs saem com `data-cta`, `data-pagina` e `data-posicao`.

## Regras de saúde que tocam o build

- **CRM sempre visível** e **RQE** quando anunciar especialidade: na faixa de dados abaixo do topo e no rodapé.
- **Antes e depois** só com autorização e conferência da regra vigente, sempre com legenda legal visível (autorização do paciente, resultados variam, não é promessa, responsável técnico).
- **Rodapé** com aviso de que as imagens não representam promessa de resultado, quando houver imagens de procedimento.
- Psiquiatria e urgências: aviso de que o site não substitui atendimento de urgência, com o caminho certo (ex.: SAMU 192, CVV 188) quando fizer sentido.
- Nada de selo, badge ou animação que transmita escassez ou pressão.

## Referências desta skill

- `references/processo-design.md`: como conduzir as rodadas de pranchas, ler o feedback do Arthur, montar os materiais (foto, imagens geradas), testar no celular de verdade e levar para o template.
- `references/anti-slop-visual.md`: escolhas padrão que denunciam site de IA, o que fazer no lugar e a autocrítica antes de mostrar.
- `references/direcao-visual.md`: conceito-mãe, paleta, tipografia, forma, assinatura, formato do direcao-visual.md e da prancha.
- `references/componentes.md`: biblioteca de componentes com variantes, regras de celular e quando usar.
- `references/animacao.md`: o que é permitido, o que é proibido e os valores padrão.
- `references/imagens.md`: regras, briefing de imagem (IA), briefing de ensaio fotográfico, tratamento de arquivos.
- `references/qualidade.md`: performance, acessibilidade, SEO básico, compliance e checklist final.
- `references/template.md`: como usar o `_template/` na prática.
