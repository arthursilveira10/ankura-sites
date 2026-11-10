# Processo de design: como chegar no site certo sem retrabalho

Este arquivo nasceu do primeiro demo do template (Dr. Arthur Silveira [FICTÍCIO], novembro de 2026). Foram 7 pranchas (A a G) e várias rodadas até a direção aprovada, "Luz de janela". Ele registra **o que funcionou, o que deu errado e por quê**, para que o próximo cliente chegue lá em menos rodadas.

---

## 1. O que o Arthur quer (o filtro de todas as decisões)

Um médico **adulto, sério e confiável, apresentado com acabamento de marca premium**.

- **Sóbrio na base:** serifada de leitura discreta e bem desenhada nos títulos (a Newsreader agradou; a Fraunces, a Caslon e as estreitas não), cor firme, muito espaço. Sem palavra destacada, sem rótulo em maiúsculas, sem número decorativo.
- **Personalidade no ofício:** uma ideia só (o conceito), **visível**, em poucos lugares, com movimento que conta algo (o padrão-ouro é o barquinho do Bonança, ref 07).
- **Direção de arte, não só layout:** o topo da ref 01 (Flávia) é a referência de presença: médico grande, recortado, com textura e elementos atrás dele, profundidade.
- **Acabamento:** ele vê alinhamento, espaçamento, transição de fundo e hover. Detalhe malfeito parece amador.

Lista completa e atualizada: `_referencias/referencias.md`, "O que o Arthur busca".

---

## 2. Como ler o feedback

O Arthur descreve sintomas. Às vezes a solução que ele sugere não é a melhor, e ele sabe disso ("nem sempre aquilo que eu escrevo é a melhor coisa").

1. **Separe sintoma de desejo.** "O círculo verde destoa do amarelo" é sobre harmonia de cor, não um pedido para remover o elemento. Tirar o que ele não pediu para tirar é erro: na dúvida, troque a forma ou a cor e mantenha a função.
2. **Junte os sintomas de todas as rodadas.** O mesmo desejo aparece de formas diferentes: "parece largado", "faltou charme", "ficou chapado" e "faltou transição" significam todos "falta acabamento e direção de arte".
3. **Escreva o desejo em 3 a 5 linhas** antes de mexer, registre em `referencias.md` e diga a ele o que entendeu.
4. **Nunca faça Frankenstein.** Pedaços elogiados de pranchas diferentes não somam: a nova prancha nasce do zero, atendendo ao desejo.
5. **Diga o que ainda está fraco** em cada entrega, inclusive o que depende dele (foto, ensaio).

---

## 3. As rodadas que funcionaram

| Rodada | O que entregar | Erro do primeiro demo a evitar |
|---|---|---|
| 1 | 3 pranchas distintas (fonte, cor, composição, ritmo, elemento memorável) | conceitos diferentes, mas todos com o mesmo vício de IA; caneta "infantil"; rosa para médico homem; amarelo forte demais |
| 2 | 1 ou 2 pranchas novas, do zero, a partir do desejo | um fio atravessando o site inteiro: ideia boa, usada em todo lugar, virou ruído |
| 3+ | refino da escolhida com **materiais reais** | luz feita em código, imperceptível ou artificial; foto em cartão; o elemento atrás do médico com cor errada |
| final | teste no celular de verdade, depois migração para o template | só simulador: o celular real mostrou o que faltava no topo |

O salto de qualidade veio de três coisas, nesta ordem: **(1)** a foto real recortada do médico; **(2)** o médico grande, sem moldura, com a textura cobrindo o topo inteiro; **(3)** imagens geradas no lugar de efeitos em código.

---

## 4. Materiais: foto e imagens

- **Foto do médico recortada** (PNG ou WebP com fundo transparente), meio corpo, com folga acima da cabeça. Peça no começo do projeto.
- **Figurino na paleta:** recolorir a roupa no Photoshop ou no Canva é permitido. Trocar a peça por IA só se rosto, corpo e mãos ficarem idênticos e o médico aprovar. No ensaio, já oriente 2 ou 3 opções de roupa lisa nas cores da marca.
- **Composição do "sobre" feita no Canva:** painel com cantos assimétricos, fundo de luz e a cabeça saindo pelo alto do painel. Exporte com **transparência fora do painel** (se vier com fundo branco, remova antes de usar).
- **Imagens geradas (GPT):** tudo que precisa parecer real (luz de janela, parede, tecido, textura). O Arthur gera 4 variações; você escolhe e justifica (a mais limpa, sem manchas que pesem atrás do médico). Para cobrir o topo inteiro, peça **16:9**; para nichos e painéis, 4:5 ou 1:1. Modelo de briefing: `_template/briefings-imagem-demo.md`.
- **Código (SVG/CSS):** formas, linhas, ícones, brilho suave e movimento. A cor do elemento em código casa com a imagem gerada; atrás do médico, prefira luz ou sombra a uma forma de cor sólida.

---

## 5. Verificação que pega o que importa

- **Print sem animação:** o painel do navegador escondido pausa as animações de entrada e a página parece vazia. Nas pranchas, use `?estatico` (`/pranchas/g.html?estatico`); no site, rode `document.getAnimations().forEach(a => a.finish())` antes do print.
- **Medir, não só olhar:** confira por JS que o botão do topo termina até ~620px em 390×664, que o marcador do "como funciona" começa no primeiro passo e para no último, que o título fixo prende e que `scrollWidth` é igual à largura da tela.
- **Celular de verdade:** o `localhost` só existe no computador. Para o Arthur abrir no iPhone, sirva a pasta com `python -m http.server` e abra um túnel temporário:

  ```bash
  cloudflared tunnel --no-autoupdate --url http://127.0.0.1:4400
  ```

  O link (`*.trycloudflare.com`) é público para quem tiver o endereço e morre quando o túnel fecha. Use só com dados fictícios ou com o aval do cliente. Para prévia duradoura, publique na Cloudflare (Etapa E).
- **Lighthouse no celular** antes de apresentar (meta: 95+ em tudo, exceto o SEO do modo LP, que é noindex de propósito).

---

## 6. Da prancha para o template

As pranchas ficam em `site/public/pranchas/` (HTML puro, fora da publicação). Quando uma for aprovada:

1. Paleta e fontes vão para `tema.css` e `cliente.config.mjs`.
2. O elemento do conceito vai para `src/components/conceito/` (topo, CTA final, divisor, marcadores, ícones de procedimento).
3. As fotos e imagens vão para `src/assets/` e entram pelo conteúdo (`foto`, `fundo`, `composicao`).
4. O ritmo de fundos é montado no conteúdo com `faixa: true`.
5. Confira se o template já tem o comportamento que a prancha mostrou; se a prancha inventou algo novo e bom, leve para o template, para todos os clientes.
