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
1. `direcao-visual.md` + **prancha de estilo** (página HTML de prévia) → aprovação.
2. **Briefings de imagem** (IA) e **briefing de ensaio fotográfico** (fotos reais) → Arthur providencia.
3. **Site montado** em `sites/[cliente-pagina]/site/` a partir do `_template/` → revisão no navegador.
4. **Checklist final** preenchido → publicação.

## O objetivo, em uma frase

Um site com personalidade própria, que nasce da história do médico, e que no celular leva o paciente do Instagram ao WhatsApp sem atrito.

Personalidade sem conversão é peça de portfólio. Conversão sem personalidade é template. A Ankura entrega os dois.

## Princípios

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

### Etapa A. Direção visual (aprovação antes de codar)
1. Releia briefing.md, copy.md (com as sugestões de formato de cada seção) e revisao.md.
2. Leia `_referencias/referencias.md` (seção 1, gosto da Ankura) e `_referencias/extracao-tecnica.md` (padrões).
3. Proponha **2 conceitos-mãe** com 1 linha de justificativa cada e recomende um. Siga `references/direcao-visual.md`.
4. Escreva `direcao-visual.md` na pasta do cliente com: conceito, vocabulário visual e onde cada elemento entra, paleta (tokens com papel), tipografia, forma e textura, assinatura do botão, **mapa de componentes por seção** (qual componente e variante de `references/componentes.md` cada seção da copy usa) e o que o site **não** vai ter.
5. Gere a **prancha de estilo**: página HTML única com paleta, tipos, botões nos 3 estilos, um card, o topo no celular e os elementos do conceito. Mostre no navegador em 390px e 1440px.
6. Espere aprovação. Ajuste e só então siga.

### Etapa B. Imagens
1. Liste todas as imagens do site por seção: as que existem, as que faltam e quem providencia.
2. Fotos reais faltando ou fracas: escreva o **briefing de ensaio fotográfico** (`references/imagens.md`).
3. Elementos por IA: escreva um **briefing de imagem** por peça, com prompt pronto.
4. Enquanto as imagens não chegam, use espaços reservados com a proporção certa e a etiqueta `[FOTO: ...]`. Nunca uma foto de banco.

### Etapa C. Montagem
Procedimento técnico detalhado em `references/template.md` (copiar o template, repositório do cliente, onde fica cada coisa).
1. Copie o `_template/` para `sites/[cliente-pagina]/site/` e crie o repositório próprio do cliente.
2. Aplique o tema (tokens da direção visual) num arquivo só.
3. Preencha o conteúdo nos arquivos de dados a partir da copy.md, sem reescrever texto. Divergência entre copy e layout: aponte, não edite a copy por conta própria.
4. Monte cada página escolhendo componentes e variantes do mapa aprovado.
5. Faça os elementos do conceito em SVG e a assinatura do botão.
6. Gere home, páginas de procedimento e modo LP de cada página de procedimento.

### Etapa D. Verificação
1. Abra no navegador em 390×664, 390×844, 768 e 1440.
2. Passe o checklist de `references/qualidade.md` inteiro, incluindo o teste com movimento reduzido e sem JS.
3. Corrija e só depois apresente. Na apresentação, mostre prints do celular primeiro.

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

- `references/direcao-visual.md`: conceito-mãe, paleta, tipografia, forma, assinatura, formato do direcao-visual.md e da prancha.
- `references/componentes.md`: biblioteca de componentes com variantes, regras de celular e quando usar.
- `references/animacao.md`: o que é permitido, o que é proibido e os valores padrão.
- `references/imagens.md`: regras, briefing de imagem (IA), briefing de ensaio fotográfico, tratamento de arquivos.
- `references/qualidade.md`: performance, acessibilidade, SEO básico, compliance e checklist final.
- `references/template.md`: como usar o `_template/` na prática.
