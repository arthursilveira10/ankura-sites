# Direção visual: Dr. Arthur Silveira [FICTÍCIO] (demo do template)

Aprovada em 11/2026, depois de 7 pranchas (A a G em `public/pranchas/`). Processo e lições: `.claude/skills/site-build/references/processo-design.md`.

## Conceito
**Luz de janela.** A pele guarda a história da luz que recebe: o sol do verão, a mancha que volta, o tempo. O site é a luz natural de um consultório calmo, que entra pela janela no topo, percorre a consulta e se põe no CTA final.
Por quê: liga a especialidade (luz e pele) à copy ("Sua pele tem uma história") e ao jeito do médico (consulta sem pressa).

## Vocabulário visual
| Elemento | Função no site | Onde aparece |
|---|---|---|
| Luz de janela (imagem gerada) | textura de fundo e profundidade | topo inteiro; painel do "sobre" |
| Sol de fim de tarde (código) | elemento memorável atrás do médico | topo |
| Sol que percorre a linha (código) | progresso do "como funciona" | como funciona |
| Pôr do sol em arcos (código) | fecho da narrativa | CTA final |
| Horizonte com fio de luz (código) | transição entre fundos | topo das faixas |

## Paleta
| Token | Cor | Papel | Contraste conferido |
|---|---|---|---|
| fundo | #F3F4EF | fundo da página | |
| superficie | #FBFBF8 | cards, barra de dados, botão claro | |
| superficie-2 | #E3E8E0 | faixas de seção (névoa) | |
| tinta | #142620 | títulos | 14,3:1 sobre o fundo |
| texto | #44524C | texto corrido | 7,4:1 sobre o fundo (6,6:1 na névoa) |
| apagado | #5D6B64 | legendas, rótulos | 5,1:1 sobre o fundo (4,5:1 na névoa) |
| muda | #7A8780 | nome inativo na lista de tratamentos (só texto grande) | 3,4:1 sobre o fundo |
| acao | #1E4A3C | só CTAs | texto branco 10:1 |
| acao-hover | #2B6753 | hover dos CTAs | texto branco 6,6:1 |
| luz | #F2D49B | brilho, marcadores, hover do ícone, seleção | nunca texto sobre fundo claro |
| escuro | #142B25 | blocos escuros e rodapé | texto #EDF1EC 13:1; apagado #A3B6AD 7:1 |

## Tipografia
Títulos: Newsreader 350 a 400. Texto: Geist 400 a 500. Destaque: nenhum (sem palavra destacada, sem rótulo em maiúsculas).

## Forma e textura
Raio: suave (32 / 20 / 14px), botões em pílula. Foto do médico: recorte sem moldura no topo; composição pronta (painel com cantos assimétricos) no "sobre". Textura: imagem gerada de luz de janela.

## Assinatura do botão
No hover, o botão muda de cor e o círculo do ícone acende na cor da luz, com uma leve rotação. No celular, o toque afunda o botão.

## Ritmo de fundos
| Seção | Fundo | Transição |
|---|---|---|
| Topo | imagem de luz, de borda a borda | dissolve no fundo; dados encaixados na base |
| Identificação, procedimentos, depoimentos, FAQ | fundo | |
| Como funciona | bloco escuro arredondado | |
| Sobre + CTA final | faixa névoa | horizonte com fio de luz |
| Rodapé | escuro, de borda a borda | |

## Imagens
- `src/assets/medico-recorte.webp`: recorte do médico (camisa recolorida na paleta).
- `src/assets/sobre-composicao.webp`: composição do "sobre" feita no Canva.
- `src/assets/fundo-topo.webp`: luz de janela gerada no GPT (briefing em `briefings-imagem-demo.md`).

## O que este site NÃO tem
Palavra destacada nos títulos, rótulos em maiúsculas, numeração decorativa, cards iguais na identificação, foto no meio do manifesto, cursor personalizado.
