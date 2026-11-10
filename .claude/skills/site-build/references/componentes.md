# Biblioteca de componentes

Os componentes do `_template/`. Cada site escolhe componentes e variantes no **mapa de componentes** do direcao-visual.md. Nomes de arquivo e propriedades exatas estão em `references/template.md`.

Medidas padrão: `_referencias/extracao-tecnica.md`. Aqui ficam a função, as variantes e as regras de uso.

---

## Estrutura global (presente em todas as páginas)

### Menu flutuante
- Header fixo, transparente sobre o topo. Itens dentro de uma **pílula** com borda fina e fundo claro translúcido.
- Ao rolar: fundo de vidro (fundo a 72 a 86% + desfoque de 14 a 18px), altura menor (84→72px no desktop, 64px no celular).
- **Desktop: sempre visível**, porque o botão de agendar dentro dele faz o papel da barra fixa.
- **Celular:** esconde ao rolar para baixo e volta ao rolar para cima (0,7s), liberando tela. A barra fixa de CTA cuida da conversão.
- Hover do item: pílula preenchida na cor `tinta` (não na cor de ação).
- Celular: logo + botão de menu (mínimo 44px), abrindo painel de tela cheia com links grandes.
- **Modo LP:** mesmo header, sem os links. Fica só o logo e o botão.

### Barra fixa de CTA (só celular)
- Surge depois que o topo sai da tela, subindo em 0,4s, uma vez.
- Some quando a seção de CTA final ou o rodapé entram na tela.
- Pílula ou barra de 52 a 56px, margem lateral de 12 a 16px, respeitando a área segura do iPhone (`env(safe-area-inset-bottom)`).
- Texto curto por página ("Agendar consulta", "Quero avaliar meu melasma") + ícone do WhatsApp.
- Sem pulsar, sem chacoalhar, sem contador.
- Substitui a bolinha flutuante do WhatsApp. Nunca as duas juntas.
- `data-posicao="barra-fixa"`.

### Botão (CTA)
- Pílula com texto à esquerda e círculo com ícone à direita. Altura de 52 a 58px.
- 3 estilos, mesma forma: **ação** (cor de ação), **escuro** e **contorno**. Botão leve no meio da página usa contorno ou link com seta.
- Hover: sobe 2px, ícone gira ou executa a assinatura. Clique: afunda (escala 0,97).
- Todo botão de WhatsApp é montado pelo componente, que gera o link com a mensagem pronta da página e os atributos `data-cta`, `data-pagina`, `data-posicao`.

### Rodapé
- Nome, especialidade, **CRM e RQE**, endereço, horários, WhatsApp, Instagram, mapa (link, não iframe pesado).
- Aviso legal quando houver imagens de procedimento.
- Aviso de urgência quando o nicho pedir (psiquiatria, por exemplo).
- Fundo `escuro`.

### Divisor temático (opcional, vem do conceito)
- Linha ou forma do conceito entre seções. Substitui a troca de cor de fundo como separador.
- Decorativo: `aria-hidden`, atrás do conteúdo, sem bloquear clique.

---

## Seções da espinha

### Topo (hero)
**Função:** responder ao que o paciente buscou e apresentar o médico como solução.

Variantes:
- **foto-compacta** (padrão): foto do médico com o recorte da identidade, selos ao redor (especialidade, cidade, modalidade), headline, subheadline, botão.
- **colagem**: foto principal + 2 fotos menores (consultório, atendimento). Mais personalidade, mais pesada; use quando houver fotos boas.
- **titulo-gigante**: nome ou palavra do conceito em SVG grande atrás da foto (Bonança). Só no desktop; no celular vira foto-compacta.

Regras de celular (obrigatórias):
- Ordem: foto (260 a 300px de altura) → headline (34 a 40px) → subheadline (2 a 3 linhas) → botão.
- O botão termina até ~620px do topo. Teste em 390×664.
- Selos e decoração não empurram o botão para baixo.
- Todas as imagens do topo carregam na hora; a principal com `fetchpriority="high"`.
- A headline aparece sem depender de animação. Só a foto e os selos animam a entrada.

### Faixa de dados
**Função:** identificação obrigatória e confiança logo abaixo do topo.
- 3 a 4 itens: CRM, RQE, cidade, modalidade (presencial/online), tempo de atuação se comprovável.
- Divisórias finas, texto pequeno, sem ícones demais.
- Celular: grade de 2 colunas ou rolagem horizontal suave dos itens (sem esconder CRM/RQE).

### Marquee (opcional)
- Faixa com procedimentos ou frases curtas em loop, de 35 a 70s por volta.
- Pausa no movimento reduzido. Conteúdo duplicado com `aria-hidden` na cópia.
- No máximo um por página.

### Identificação
**Função:** o paciente pensa "é exatamente isso que eu sinto".
Variantes:
- **lista-de-situacoes**: título + 3 a 5 situações curtas em cards ou linhas.
- **manifesto**: frase grande com text reveal palavra por palavra (ver abaixo). Usar quando a identificação cabe numa frase forte.
- **cartas-empilhadas**: cada situação numa carta sticky que se empilha ao rolar. Funciona muito bem no celular.

### Manifesto (text reveal)
- Frase de 15 a 40 palavras, `clamp(26px, 3.6vw, 52px)`.
- Palavras vão da cor apagada para a cor cheia conforme a rolagem.
- Opcional: 1 a 2 fotos em pílula encaixadas entre as palavras.
- Sem JS ou com movimento reduzido: frase inteira na cor cheia.
- No máximo um por página.

### O profissional
**Função:** quem é o médico, por que ele faz o que faz e como trabalha.
Variantes:
- **foto-e-texto** (padrão): foto grande com o recorte da identidade + texto corrido (até ~120 palavras) + 3 fatos de prova (formação, tempo, instituições).
- **com-linha-do-tempo**: foto-e-texto seguida de uma linha do tempo de 4 a 6 marcos, com traço que se preenche com a rolagem e marcadores na forma do conceito.

### Procedimentos (home)
**Função:** portas de entrada para as páginas de procedimento.
Variantes:
- **lista-em-linhas** (padrão): cada linha com ícone do conceito, miniatura, nome (palavra-chave em negrito), uma linha de descrição e seta para a página. Funciona igual no celular e no desktop.
- **lista-com-imagem**: acordeão com a imagem dentro do item aberto e o primeiro item aberto. (A versão desktop com a imagem ao lado no hover ainda não existe no template.)
- **cards**: 2 a 4 cards com foto. Só quando houver poucos procedimentos e fotos boas.

### Detalhe do procedimento (páginas de procedimento)
Blocos que a copy pode pedir:
- **o-que-e**: explicação curta + imagem ou ilustração conceitual.
- **para-quem**: lista curta de indicações (com cuidado de regra: indicação, não promessa).
- **numeros-do-procedimento**: sessões, duração, retorno às atividades, em formato de 3 a 4 números grandes com rótulo. Só com dados confirmados pelo médico.
- **cuidados**: antes e depois do procedimento, em passos curtos.

### Como funciona (a experiência)
**Função:** tirar o medo do desconhecido.
Variantes:
- **passos-com-linha** (padrão): desktop com título sticky à esquerda e passos à direita; uma linha vertical se preenche com a rolagem e acende cada passo. No celular: título em cima, passos embaixo, linha mantida.
- **cartas-empilhadas**: cada passo numa carta sticky com topo crescente (84, 98, 112px...).
- **passos-simples**: 3 a 5 passos em grade, sem efeito de rolagem. Para páginas de intenção urgente, onde o paciente quer rapidez.

Depois desta seção: um dos botões leves do meio da página.

### Prova social
Variantes:
- **depoimentos**: cards com texto real, nome (ou iniciais, conforme autorização) e origem (Google, por exemplo). Carrossel com deslize no celular, grade no desktop.
- **avaliacoes-google**: nota média + 3 a 6 avaliações reais com link para o perfil.
- **antes-depois**: slider comparativo com arraste (`touch-action: pan-y`), etiquetas "antes"/"depois" e **legenda legal obrigatória** visível. Só com autorização e checagem da regra vigente.

Depois desta seção: o outro botão leve do meio da página.

### Clínica e estrutura
- **bento**: grade de 3 a 5 fotos reais do consultório (desktop: 3 colunas desiguais; celular: 2×2). Uma por página, no máximo.
- **carrossel**: fotos em deslize horizontal no celular.
- Endereço e como chegar podem fechar a seção.

### Por que consulta particular (opcional)
- 3 a 4 itens curtos (tempo de consulta, acompanhamento, acesso ao médico). Tom de esclarecimento.

### FAQ
- Acordeão acessível (`button` com `aria-expanded`), um aberto por vez ou todos fechados.
- 5 a 7 perguntas no modo LP; mais na home se a copy trouxer.
- Pode ter título sticky à esquerda no desktop.

### CTA final
**Função:** a seção 6 da espinha, coragem para agir.
- Bloco `escuro` arredondado com margem lateral (o fundo da página aparece ao redor).
- Retoma o problema em uma frase, diz o próximo passo e o que acontece depois do clique, com o botão de ação grande.
- Microtexto de apoio (horário de resposta, por exemplo).
- A barra fixa do celular some quando esta seção aparece.

---

## Recursos de desktop (opcionais por cliente)

- **Cursor acompanhante:** bolinha que segue o mouse e cresce sobre links, sem esconder o cursor nativo. Só com `(hover: hover) and (pointer: fine)`.
- **Scroll suave (Lenis):** só no desktop com mouse, desligado no movimento reduzido. Decida no direcao-visual.md se o ganho vale os ~10KB.
