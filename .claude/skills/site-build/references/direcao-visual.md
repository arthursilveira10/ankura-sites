# Direção visual

A direção visual é aprovada **antes** de qualquer código. Ela traduz a história do médico em um sistema visual pequeno e coerente.

## 1. Conceito-mãe

Uma metáfora curta que resume o que o médico faz pelo paciente, tirada do briefing. Não é slogan e não precisa aparecer escrita no site. É a ideia que organiza as escolhas visuais.

**De onde tirar** (nesta ordem de força):
1. A forma como o médico trabalha ou explica o próprio trabalho (Lucas: "uma bússola, não um mapa").
2. O nome do médico, da clínica ou da marca (Bonança: a calmaria depois da tempestade).
3. A transformação que o paciente vive (de onde ele sai, aonde ele chega).
4. Algo concreto e marcante da história ou da cidade do médico.

**Como testar um conceito:**
- Explica algo verdadeiro sobre esse médico? Se servir para qualquer colega da especialidade, está genérico.
- Gera 3 ou 4 elementos visuais concretos e desenháveis em SVG?
- Combina com a voz da copy (próxima, calma, honesta)?
- Passa nas regras de saúde? Nada que sugira resultado garantido, transformação milagrosa ou "antes ruim, depois perfeito".

**Evite os clichês da especialidade:** coração para cardiologia, folha para dermatologia, cérebro para psiquiatria, dente para odontologia. Clichê só serve quando o conceito o reinterpreta.

Os conceitos entram nas **3 pranchas** (seção 8): um conceito por prancha, ou o mesmo conceito expresso de três formas bem diferentes.

## 2. Vocabulário visual

**1 elemento memorável** + até 2 elementos de apoio, derivados do conceito. **Cada um com uma função no site**, nunca só de enfeite. O memorável aparece grande em 1 ou 2 lugares (topo, uma seção-chave); os de apoio são discretos (marcador, divisor). Funções possíveis:

| Função | Exemplo (Bonança) |
|---|---|
| Ícone do botão (assinatura) | barco que se desenha no hover |
| Divisor entre seções | linha de onda com o barco |
| Indicador de progresso (passos, linha do tempo) | barco andando na linha |
| Fundo ou moldura do topo | sol nascendo atrás do nome |
| Ícones dos pilares ou serviços | farol, mapa |
| Elemento animado de uma seção-chave | bússola girando com a rolagem (Lucas) |
| Marcador da linha do tempo ou do "como funciona" | forma própria no lugar da bolinha |

Ponto ideal para médicos: **1 conceito, 1 elemento memorável, até 2 de apoio, 1 assinatura no botão**. O demo do template com lente + curvas + alvo de mapa + anel girando ficou com cara de colagem: mais do que isso compete com a mensagem.

Os elementos são desenhados em SVG no código, em traço ou forma simples, com o mesmo peso de linha em todos.

## 3. Paleta

Tokens com **papel definido**. O nome pode vir do conceito (como "calmaria" e "sol" no Bonança), mas o papel é fixo:

| Token | Papel | Regra |
|---|---|---|
| `fundo` | fundo da página | off-white quente ou frio, nunca #FFF puro em página inteira. Creme/areia com terracota é a paleta-clichê de IA: só com motivo (anti-slop-visual.md) |
| `superficie` | cards e blocos claros | um passo mais claro ou mais escuro que o fundo |
| `superficie-2` | faixas de seção e blocos de destaque | tom da cor da marca com diferença visível do fundo (é ele que faz a alternância de fundos) |
| `tinta` | títulos | quase preto com matiz da marca, nunca #000 |
| `texto` | texto corrido | contraste AA (4,5:1) sobre fundo e superfícies |
| `apagado` | legendas, rótulos | contraste mínimo 4,5:1 se for texto |
| `linha` | bordas e divisórias | tinta a 10 a 20% de opacidade |
| `acao` | **exclusiva dos CTAs** | não usar em títulos, ícones ou decoração |
| `destaque` | palavra-chave, detalhes do conceito | diferente da cor de ação |
| `escuro` | seções invertidas, CTA final, rodapé | com `escuro-texto` e `escuro-apagado` próprios |

Regras:
- Teste o contraste de cada par texto/fundo (AA) antes de aprovar.
- O texto do botão de ação precisa de contraste AA sobre a cor de ação.
- Se o cliente já tem identidade, parta das cores dele e complete os papéis que faltam.

## 4. Tipografia

- No máximo **2 famílias**: uma para títulos e uma para texto, ou uma só para tudo.
- Fonte **variável**, hospedada no próprio site (woff2), `font-display: swap`, com fallback de métricas ajustadas.
- Combinações que funcionam:
  - serifada expressiva nos títulos + sans neutra no texto (editorial, premium);
  - sans geométrica ou grotesca em tudo, com peso fino nos títulos (moderno, sóbrio);
  - serifada nos títulos + sans arredondada no texto (acolhedor).
- Títulos com espaçamento entre letras negativo (-0,02 a -0,045em) e entrelinha 0,95 a 1,1.
- **Palavra-chave em destaque no título** (peso, itálico ou cor): recurso, não padrão. No máximo em 2 ou 3 títulos do site, nos que carregam a ideia central. Nos outros, o título fica limpo.
- **Fonte de destaque (opcional):** uma terceira família só para **uma seção** (manifesto, citação ou bilhete do médico), como na ref 04. Precisa contrastar de verdade com as outras duas (manuscrita, display de alto contraste, condensada). Carrega só os pesos usados.
- Títulos sóbrios funcionam melhor para médico do que serifadas "expressivas" demais: o Arthur prefere a sobriedade das refs 01, 03 e 05, com a personalidade vindo da fonte de destaque, da composição e do conceito.
- Licença: fontes do Google Fonts ou com licença comercial do cliente.

Tamanhos e escalas: `_referencias/extracao-tecnica.md`, seção 1 e seção 5. Já estão no tema do template.

## 5. Forma e textura

- **Raio:** escolha um dos três perfis e aplique em tudo.
  - Suave: blocos 28 a 32px, médios 20px, pequenos 12px.
  - Médio (padrão): 24 / 16 / 10px.
  - Reto: 8 / 6 / 4px.
  - Botões e menu continuam em pílula nos três perfis, a não ser que o conceito peça outra coisa.
- **Recortes de foto:** arco, cantos assimétricos, círculo, pílula. Escolha um como marca do site e use no topo e na seção do profissional.
- **Textura** (opcional, uma só): grão sutil, brilho radial da cor de destaque, linhas finas. Sempre atrás do conteúdo e em área delimitada.
- **Sombras:** só em elementos que flutuam (cards empilhados, botão, menu ao rolar). Difusas e projetadas para baixo.

## 5b. Ritmo de fundos

Planeje, seção por seção, onde fica cada fundo. Sem isso a página vira um bloco contínuo de um tom só.

Recursos (combine 3 ou 4 numa página):
- **fundo** da página;
- **faixa de tom** (`superficie-2`) de borda a borda;
- **bloco arredondado com margem lateral** (claro ou `escuro`), em que o fundo da página aparece em volta (refs 04 e 05, CTA final);
- **bento** (no máximo um por página);
- **transição desenhada**: borda superior da seção com a forma do conceito (onda, camada, curva), em SVG, na cor da seção seguinte.

Regras: nunca mais de 2 seções seguidas no mesmo fundo sem elemento de transição; o CTA final é sempre bloco escuro arredondado; o rodapé é escuro; no celular, os blocos arredondados mantêm 12 a 16px de margem lateral.

## 6. Assinatura do botão

Uma microinteração que liga o conceito ao ponto de conversão. Exemplos:
- o ícone do conceito se desenha no hover;
- uma forma do conceito preenche o botão a partir do ícone;
- partículas ou brilho discreto **dentro** do botão.

Regras: dentro do botão, curta (0,3 a 0,6s no hover), desligada no movimento reduzido. No celular, a assinatura aparece na entrada do botão ou no toque, não depende de hover.

## 7. Formato do direcao-visual.md

```
# Direção visual: [cliente]

## Conceito
Recomendado: [nome do conceito]: [1 a 2 frases]. Por quê: [ligação com o briefing].
Alternativa: [nome]: [1 frase].

## Vocabulário visual
| Elemento | Função no site | Onde aparece |

## Paleta
| Token | Cor | Papel | Contraste conferido |

## Tipografia
Títulos: [família, pesos]. Texto: [família, pesos]. Destaque: [fonte de destaque e a seção onde entra, ou nenhuma]. Palavra-chave: [em quais títulos e como].

## Forma e textura
Raio: [perfil]. Recorte de foto: [qual]. Textura: [qual ou nenhuma].

## Ritmo de fundos
| Seção | Fundo | Transição |

## Assinatura do botão
[descrição + comportamento no celular]

## Mapa de componentes
| Seção da copy | Componente | Variante | Observação |

## Imagens
[resumo do que existe e do que falta; detalhes nos briefings]

## O que este site NÃO vai ter
[ex.: cursor personalizado, marquee, bento; com o porquê]
```

## 8. As 3 pranchas de estilo

O Arthur escolhe a direção **vendo**, não lendo. Por isso a Etapa A entrega 3 pranchas realmente distintas, e não uma prancha refeita várias vezes.

**Onde ficam:** `site/public/pranchas/a.html`, `b.html`, `c.html` (HTML puro, fontes do Google Fonts por link). Abrem com o servidor de desenvolvimento em `/pranchas/a.html` e saem da publicação automaticamente (integração `semPrevia` do template). Depois da escolha, a prancha aprovada vira o `tema.css` e os elementos de `src/components/conceito/`; a prancha `/previa` do Astro passa a mostrar o tema real.

**Distintas de verdade** (as 3 diferem em todos estes pontos):
- par de fontes (e fonte de destaque, se houver);
- família de cor do fundo e da ação (não três tons de bege);
- composição do topo;
- ritmo de fundos;
- elemento memorável.

**Cada prancha mostra:**
- nome da direção e 2 linhas de porquê;
- paleta com nomes e papéis;
- o topo da home no desktop **com a faixa de CRM/RQE integrada**, e o mesmo topo em 390px de largura (moldura de celular);
- títulos com frases reais da copy, texto corrido, botões nos 3 estilos com a assinatura funcionando;
- uma amostra do ritmo de fundos: 3 ou 4 seções em sequência (ex.: identificação, como funciona, bloco escuro, CTA final) com as transições;
- o elemento memorável em ação.

Antes de mostrar: autocrítica de `anti-slop-visual.md` em cada uma. Na apresentação, recomende uma e diga o que cada prancha sacrifica.
