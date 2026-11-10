# Anti-slop visual

O equivalente visual do `anti-slop.md` da copy. Site feito por IA tem cara: as mesmas escolhas "seguras" repetidas em todo projeto. Esta lista existe porque o primeiro demo do template caiu em quase todas (creme + serifa + terracota, palavra em itálico em todo título, rótulo em maiúsculas em toda seção, numeração sem sequência, cards iguais, conceito com elementos demais).

Base: princípios da skill `frontend-design` da Anthropic (github.com/anthropics/skills), adaptados ao gosto da Ankura (`_referencias/referencias.md`) e ao nicho médico.

Use em dois momentos: ao montar as 3 pranchas (Etapa A) e na autocrítica antes de mostrar qualquer coisa ao Arthur.

---

## 1. Escolhas padrão que denunciam IA

Nenhuma é proibida em absoluto, mas **cada uma só entra com motivo escrito no direcao-visual.md**. Se o motivo é "fica elegante", não entra.

### Paleta
- **Fundo creme ou areia + título serifado + cor de ação terracota/argila.** É a paleta mais repetida de site gerado por IA. Para dermatologia e estética, é a primeira coisa que vem; por isso mesmo, evite.
- Fundo quase preto com um único acento neon (verde-ácido, laranja-vermelho).
- Degradê lavado como decoração de fundo.
- Sombra cinza genérica (`rgba(0,0,0,.1)`) embaixo de todo card.
- Página inteira num tom só, sem alternância de fundo entre seções.

### Tipografia
- **Palavra do título destacada em itálico, negrito ou cor em todo título.** O destaque é recurso das refs 04 e 07; usado em todo título, vira tique. Regra: no máximo em 2 ou 3 títulos do site, nos que carregam a ideia central.
- **Rótulo em maiúsculas espaçadas em cima de toda seção** ("TALVEZ SEJA VOCÊ"). Só quando o rótulo informa algo que o título não diz.
- Texto com ponto no meio ("Campinas · SP", "Dermatologia · RQE"). Use vírgula, quebra de linha ou layout.
- Fonte monoespaçada em rótulos e números pequenos.
- Seta (→) colada no texto de link ou botão.
- Uma serifada "da moda" escolhida por ser bonita, sem relação com o médico.

### Layout
- **Kit de cards de SaaS:** cards idênticos, mesmo raio, mesma sombra, mesma altura, em grade.
- **Numeração decorativa** (01, 02, 03) em itens que não têm ordem. Número só em sequência real: passos, linha do tempo, etapas de tratamento.
- Toda seção com o mesmo esqueleto: rótulo + título à esquerda + conteúdo à direita.
- Seções coladas sem transição: mesmo fundo, mesmo espaçamento, nenhum elemento que marque a passagem.
- Elemento "largado": faixa ou bloco sem relação com o que está em volta (ex.: a faixa de CRM/RQE solta embaixo do topo).

### Conceito e decoração
- **Elementos do conceito demais ao mesmo tempo.** Um elemento memorável por site; o resto quieto. Se o paciente não consegue dizer "o site da lupa" ou "o site das camadas", o conceito se diluiu.
- Decoração cortada pela borda do contêiner sem intenção (SVG que termina reto no meio da curva). Decoração que sai da área termina em degradê de máscara ou continua até a borda da tela.
- Foto miniatura encaixada no meio de frase (o Arthur não gosta; fora do template).
- Grafismo "feito à mão" (rabisco, seta desenhada, letra cursiva) em site médico: soa infantil ou de agência criativa.
- Marcador de passo que é só um círculo com número. O marcador é lugar de personalidade (ver o barquinho do Bonança).

### Execução que denuncia amadorismo (lições do primeiro demo)
- **Efeito do conceito feito em código quando pedia realismo:** feixe de luz desfocado (invisível) e sombra de janela em SVG (artificial). Luz, sombra e textura reais vêm de imagem gerada.
- **Ideia boa usada em todo lugar:** um fio atravessando o site inteiro virou ruído, ainda mais no celular. No máximo duas seções conectadas pelo mesmo elemento.
- **Duas seções seguidas com a mesma mecânica** (linha + marcadores nas duas).
- **Elemento em cor sólida que briga com a imagem de fundo** (arcos verdes sobre a luz amarela).
- **Foto do médico dentro de cartão ou nicho**, pequena. O médico é o topo.
- **Foto cortada seco** no celular, sem degradê.
- **Página de procedimento toda no mesmo fundo**, mudando só no topo e no FAQ. Planeje pelo menos uma faixa ou bloco a cada 2 ou 3 seções, com borda desenhada em cima e embaixo.
- **Grade com buraco** (identificação de 4 colunas com 3 itens) e **números soltos com uma frase ao lado.**
- **Elemento removido em vez de corrigido.** Se o Arthur reclamou da cor, troque a cor.

### Movimento
- Todo bloco entrando com o mesmo "sobe e aparece".
- Hover em todo card.
- Efeito de rolagem tão sutil que ninguém percebe. Se o progresso existe, ele precisa ser visto na primeira rolagem (ver `animacao.md`).

---

## 2. O que fazer no lugar

- **Ler o desejo, não a frase.** Antes de cada prancha, releia "O que o Arthur busca" em `_referencias/referencias.md`: sóbrio na base, personalidade no ofício, uma ideia só.
- **Não misturar pranchas.** Feedback sobre 3 pranchas não vira uma quarta feita de pedaços das três (Frankenstein). Vira uma prancha nova, do zero, que atende ao desejo por trás do feedback.
- **Partir do mundo do médico**, não do mundo dos sites. Materiais, objetos, cores e vocabulário da especialidade e da história dele (o dermatoscópio, a camada da pele, a cidade, o consultório real).
- **Um momento marcante de movimento** por página (entrada do topo, uma seção-chave), em vez de efeito espalhado.
- **Ritmo de fundos planejado** no mapa de componentes: quais seções ficam no fundo, quais em faixa de tom, qual em bloco escuro arredondado, qual em bento. Regra prática: nunca mais de 2 seções seguidas no mesmo fundo sem um elemento de transição.
- **Duas fontes com funções claras**, ou uma só. Uma terceira fonte "de destaque" é permitida em **uma única seção** (manifesto, citação do médico, bilhete), como na ref 04, e precisa contrastar de verdade com as outras.
- **Variar o esqueleto das seções**: centralizado, assimétrico, tela cheia, bloco escuro, lista em linhas. A espinha é fixa; a forma de cada seção não.
- **Informação obrigatória com desenho próprio**: CRM, RQE e cidade fazem parte da composição do topo ou ganham uma faixa com fundo e forma, nunca uma linha de texto solta.

---

## 3. Autocrítica antes de mostrar

Antes de apresentar prancha ou site, com print em 390px e 1440px:

1. Passe a seção 1 item por item. Marque o que caiu e corrija ou justifique.
2. Pergunte: "isso poderia ser o site de qualquer dermatologista?" Se sim, o conceito não está no visual.
3. **Corte pelo menos um elemento** que não serve à mensagem. Registre o que saiu.
4. Olhe a página inteira em miniatura (zoom out). Dá para ver o ritmo de fundos? Tem um ponto focal por tela?
5. Só então mostre ao Arthur, dizendo o que foi cortado e por quê.
