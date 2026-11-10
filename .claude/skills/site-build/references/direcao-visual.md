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

Sempre apresente **2 conceitos** com uma linha de justificativa e recomende um.

## 2. Vocabulário visual

De 3 a 4 elementos derivados do conceito. **Cada um com uma função no site**, nunca só de enfeite. Funções possíveis:

| Função | Exemplo (Bonança) |
|---|---|
| Ícone do botão (assinatura) | barco que se desenha no hover |
| Divisor entre seções | linha de onda com o barco |
| Indicador de progresso (passos, linha do tempo) | barco andando na linha |
| Fundo ou moldura do topo | sol nascendo atrás do nome |
| Ícones dos pilares ou serviços | farol, mapa |
| Elemento animado de uma seção-chave | bússola girando com a rolagem (Lucas) |
| Marcador da linha do tempo ou do "como funciona" | forma própria no lugar da bolinha |

Ponto ideal para médicos: **1 conceito, 3 a 4 elementos, 1 assinatura no botão**. Mais do que isso começa a competir com a mensagem.

Os elementos são desenhados em SVG no código, em traço ou forma simples, com o mesmo peso de linha em todos.

## 3. Paleta

Tokens com **papel definido**. O nome pode vir do conceito (como "calmaria" e "sol" no Bonança), mas o papel é fixo:

| Token | Papel | Regra |
|---|---|---|
| `fundo` | fundo da página | off-white quente ou frio, nunca #FFF puro em página inteira |
| `superficie` | cards e blocos claros | um passo mais claro ou mais escuro que o fundo |
| `superficie-2` | blocos de destaque claros | tom suave da cor da marca |
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
- **Títulos com duas pesagens:** a frase em peso normal e a palavra-chave em negrito, itálico ou cor de destaque. Uma palavra-chave por título, no máximo.
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
Títulos: [família, pesos] · Texto: [família, pesos] · Palavra-chave: [como destaca]

## Forma e textura
Raio: [perfil] · Recorte de foto: [qual] · Textura: [qual ou nenhuma]

## Assinatura do botão
[descrição + comportamento no celular]

## Mapa de componentes
| Seção da copy | Componente | Variante | Observação |

## Imagens
[resumo do que existe e do que falta; detalhes nos briefings]

## O que este site NÃO vai ter
[ex.: cursor personalizado, marquee, bento; com o porquê]
```

## 8. Prancha de estilo

Uma página HTML única (pode ficar no próprio site do cliente, numa rota só de prévia) para o Arthur aprovar a direção vendo, não lendo. Mostra:
- a paleta com os nomes e papéis;
- os títulos (H1, H2, H3) com uma frase real da copy;
- texto corrido e legenda;
- os 3 estilos de botão, com a assinatura funcionando;
- um card e um bloco escuro;
- os elementos do conceito em SVG;
- o topo da home **em 390px de largura**, com foto (ou espaço reservado), headline e botão.

Mostre em 390px e em 1440px. A rota de prévia não vai para a publicação final.
