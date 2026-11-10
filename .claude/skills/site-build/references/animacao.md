# Animação e interação

Movimento existe para explicar, guiar o olhar ou dar vida ao conceito. Se não faz nenhum dos três, sai.

## Valores padrão (já no tema do template)

| Uso | Valor |
|---|---|
| Curva padrão | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Entrada de elemento ao rolar | sobe 24px + opacidade 0→1, 0,9s; cascata de 0,08 a 0,1s entre irmãos |
| Gatilho de entrada | IntersectionObserver, threshold 0,1, rootMargin inferior -8%; anima uma vez |
| Entrada da foto do topo | `clip-path` abrindo em 1,2 a 1,4s, começando no carregamento |
| Hover de botão, menu, card | 0,3 a 0,5s |
| Ícone em traço se desenhando | 1,2 a 1,8s na entrada; 0,6s no hover |
| Barra fixa de CTA surgindo | 0,4s, uma vez |
| Marquee | 35 a 70s por volta, linear |
| Decoração em loop | 6 a 22s, amplitude pequena (até 10px ou rotação lenta) |
| Text reveal e linhas que se preenchem | ligados ao progresso da rolagem, com `requestAnimationFrame` sobre scroll passivo |

## Permitido

- Entradas suaves ao rolar (texto, cards, fotos).
- Entrada da foto do médico no topo.
- Text reveal no manifesto.
- Linha que se preenche no "como funciona" e na linha do tempo.
- Cartas empilhadas com sticky.
- Ícones e elementos do conceito em traço que se desenham.
- Marquee (um por página).
- 1 ou 2 elementos decorativos em loop por página.
- Assinatura do botão.
- Cursor acompanhante e scroll suave, só no desktop com mouse.

## Proibido

- Scrolljacking, inclusive rolagem horizontal travada.
- Preloader, intro, tela de carregamento.
- Headline, texto de corpo ou botão que só aparecem depois de animação. **Texto de leitura sempre visível desde o início**; no máximo, uma entrada suave que não começa invisível por mais de 0,3s no topo.
- Parallax pesado ou ligado a várias camadas.
- Animação contínua cobrindo a página (partículas, grão animado em tela cheia).
- Pulsar, piscar ou chacoalhar botões.
- Mais de 2 elementos em loop por página.
- Animação que move o layout (mudança de altura que empurra conteúdo enquanto a pessoa lê).
- Bibliotecas pesadas para efeitos que cabem em CSS e poucas linhas de JS (GSAP, Framer Motion, Three.js). Exceção só com motivo registrado no direcao-visual.md.

## Movimento reduzido

- Toda animação contínua só liga dentro de `@media (prefers-reduced-motion: no-preference)`.
- Com redução: entradas aparecem já no estado final, text reveal mostra a frase inteira, linhas aparecem preenchidas, marquee para, scroll suave e cursor desligam.
- Teste obrigatório no checklist.

## Sem JS

- O HTML sai com tudo visível. A classe `js` no `<html>` (posta por um script mínimo no `<head>`) é que habilita os estados iniciais das animações.
- Acordeões abertos por padrão sem JS, ou feitos com `<details>`.

## Orçamento de JS

- JS próprio do site: até ~15KB comprimido, sem framework no navegador (as ilhas do Astro só quando indispensável).
- Um único observer de entrada e um único listener de rolagem para a página toda, distribuindo o progresso para os componentes.
