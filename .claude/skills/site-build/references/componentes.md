# Biblioteca de componentes

Os componentes do `_template/`. Cada site escolhe componentes e variantes no **mapa de componentes** do direcao-visual.md. Nomes de arquivo e propriedades exatas estão em `references/template.md`.

Medidas padrão: `_referencias/extracao-tecnica.md`. Aqui ficam a função, as variantes e as regras de uso.

---

## Estrutura global (presente em todas as páginas)

### Menu flutuante
- Header fixo, transparente sobre o topo. Itens dentro de uma **pílula** com borda fina e fundo claro translúcido.
- Ao rolar: fundo de vidro (fundo a 72 a 86% + desfoque de 14 a 18px), altura menor (84→72px no desktop, 64px no celular).
- **Desktop: sempre visível**, porque o botão de agendar dentro dele faz o papel da barra fixa.
- **No topo, o menu flutua quase sem fundo** (vidro bem leve) e na largura do conteúdo, para o topo ter destaque total. **Ao rolar, o fundo de vidro aparece e a pílula condensa** para uma largura mais enxuta (0,8s). Logo discreta: ~26px de altura no desktop.
- **Celular:** logo vertical (símbolo em cima, nome embaixo), ~42px de altura, com respiro até o botão de menu.
- **Celular:** não é pílula flutuante. É uma barra de borda a borda com o **logo centralizado** e o botão de menu (ícone, sem a palavra "Menu") à direita; transparente no topo, com fundo de vidro quando volta. **Some ao rolar para baixo e só volta quando o paciente rola para cima** (0,6s). A barra fixa de CTA cuida da conversão. Cuidado para o menu nunca cobrir o rosto do médico no topo.
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

### Alinhamento no celular
- Uma regra para a página inteira: **todos os títulos de seção centralizados no celular** (com o texto de apoio logo abaixo), ou nenhum. O padrão do template é centralizar. Listas, passos e texto corrido continuam alinhados à esquerda.

## Seções da espinha

### Topo (hero)
**Função:** responder ao que o paciente buscou e apresentar o médico como solução. **O médico é o destaque.**

Variante **recorte** (padrão do template, aprovada no demo):
- Foto do médico **recortada** (fundo transparente), grande, ancorada na base do topo, sem moldura de cartão. No desktop ocupa a metade direita inteira, com o alto da cabeça alinhado à headline e o corte na altura dos antebraços.
- **Textura de fundo cobrindo a seção inteira** (imagem gerada, 16:9), suavizada atrás do texto por um degradê e dissolvida na base.
- **Elemento do conceito atrás do médico**, na cor da textura (demo: brilho + sol de fim de tarde em discos dourados). Nunca uma forma de cor sólida que destoe da imagem.
- Headline sóbria, subheadline, botão e uma linha de apoio com ícone (desktop). Headline longa (mais de ~46 caracteres) ganha fonte menor e coluna mais larga: nunca 5 linhas de duas palavras.
- **Dados de identificação encaixados na base** (CRM, RQE, cidade, modalidade, com ícones), cobrindo o corte da foto.

Regras de celular (obrigatórias):
- Foto centralizada, maior que o texto, com o menu transparente por cima da imagem de fundo e a **base da foto surgindo com degradê** (nada de corte seco).
- Headline em 2 linhas (quebra no ponto final), subheadline e botão **centralizados**, com respiro entre a foto e o título.
- O botão termina até ~620px. Teste em 390×664 e no celular de verdade.
- Os dados podem ficar logo abaixo da primeira dobra; foto, headline e botão é que importam.
- A headline aparece sem depender de animação. Só a foto e o elemento do conceito animam a entrada.

### Faixa de dados
**Função:** identificação obrigatória e confiança logo abaixo do topo. No template, já vem dentro do topo; a seção `faixa-dados` avulsa é para topos sem dados.
- **Faz parte da composição do topo**: encaixada no bloco da foto, como base do topo com fundo próprio, ou num cartão sobre a borda. Nunca uma linha de texto solta entre o topo e a próxima seção.
- 3 a 4 itens: CRM, RQE, cidade, modalidade (presencial/online), tempo de atuação se comprovável.
- **Com ícones**, numa barra clara com divisórias finas. Sem ícone e sem barra, fica com cara de planilha ou de texto largado.
- Celular: grade de 2 colunas ou rolagem horizontal suave dos itens (sem esconder CRM/RQE).

### Marquee (opcional)
- Faixa com procedimentos ou frases curtas em loop, de 35 a 70s por volta.
- Pausa no movimento reduzido. Conteúdo duplicado com `aria-hidden` na cópia.
- No máximo um por página.

### Identificação
**Função:** o paciente pensa "é exatamente isso que eu sinto".
Variantes (o número de itens muda a grade: 3 itens = 3 colunas; ímpar acima de 3 = o último centralizado; nunca uma grade de 4 com um buraco):
- **lista** (padrão do template): grade de 2 colunas com um ícone em halo de luz por situação, linhas finas entre elas.
- **lista-de-situacoes**: título + 3 a 5 situações curtas. **Sem numeração** (não há ordem) e sem cards idênticos: linhas com tamanhos ou pesos diferentes, frases soltas em composição, ou citações na voz do paciente.
- **manifesto**: frase grande com text reveal palavra por palavra (ver abaixo). Usar quando a identificação cabe numa frase forte.
- **cartas-empilhadas**: cada situação numa carta sticky que se empilha ao rolar. Funciona muito bem no celular.

### Manifesto (text reveal)
- Frase de 15 a 40 palavras, `clamp(26px, 3.6vw, 52px)`.
- Palavras vão da cor apagada para a cor cheia conforme a rolagem.
- Sem fotos encaixadas no meio da frase (o Arthur não gosta).
- Bom lugar para a **fonte de destaque** da direção visual, quando houver.
- Sem JS ou com movimento reduzido: frase inteira na cor cheia.
- No máximo um por página.

### O profissional
**Função:** quem é o médico, por que ele faz o que faz e como trabalha.
Variantes:
- **foto-e-texto** (padrão): foto do médico como composição (recorte sobre fundo da identidade, ver `imagens.md`) + texto corrido (90 a 150 palavras, até 3 parágrafos) + até 3 fatos de prova sobre o médico (formação, título, tempo de atuação). Foto sem efeito sticky.
- **com-linha-do-tempo**: foto-e-texto seguida de uma linha do tempo de 4 a 6 marcos, com traço que se preenche com a rolagem e marcadores na forma do conceito.

### Procedimentos (home)
**Função:** portas de entrada para as páginas de procedimento.
Variantes:
- **lista-em-linhas** (padrão): cada linha com ícone do conceito, miniatura, nome (palavra-chave em negrito), uma linha de descrição e seta para a página. Funciona igual no celular e no desktop.
- **lista-com-imagem** (padrão, no espírito do Bonança): cada linha com ícone do conceito, miniatura, nome do procedimento (um peso só, sem palavra em negrito) e descrição curta, mais um botão redondo de abrir. O item aberto faz a miniatura crescer e mostra um texto de apoio e o link para a página; os fechados ficam com o nome apagado. **Desktop: abre ao passar o mouse**, sem clique. Celular: abre no toque. Primeiro item aberto.
- Em qualquer variante, o item da lista reage no desktop (cresce, muda o fundo ou revela a descrição). Lista parada parece tabela.
- **cards**: 2 a 4 cards com foto. Só quando houver poucos procedimentos e fotos boas.

### Detalhe do procedimento (páginas de procedimento)
- **números-do-procedimento:** um painel único com título ("O que esperar, em números"), ícone por número, divisórias finas e a observação de referência integrada como rodapé do próprio painel. Números soltos com uma frase ao lado parecem jogados.
- **cuidados (antes e depois):** painéis lado a lado com ícone e marcadores; o último painel escuro, para dar contraste. Dois blocos brancos iguais ficam genéricos.
- **Seta de rolagem** (`seta: true`): uma curvinha centralizada no topo do bloco ou da faixa logo depois da primeira dobra de conteúdo, com uma seta discreta. Incentiva continuar lendo.
Blocos que a copy pode pedir:
- **o-que-e**: explicação curta + imagem ou ilustração conceitual.
- **para-quem**: lista curta de indicações (com cuidado de regra: indicação, não promessa).
- **numeros-do-procedimento**: sessões, duração, retorno às atividades, em formato de 3 a 4 números grandes com rótulo. Só com dados confirmados pelo médico.
- **cuidados**: antes e depois do procedimento, em passos curtos.

### Como funciona (a experiência)
**Função:** tirar o medo do desconhecido.
Variantes:
- **passos-com-linha** (padrão, preferido do Arthur): bloco escuro arredondado na largura do conteúdo, título **fixo** à esquerda e passos à direita, cada um com um rótulo de quando acontece. O elemento do conceito (demo: um sol) **percorre a linha do primeiro ao último passo** e acende cada etapa; os percorridos ficam marcados. No celular: título centralizado em cima, linha mantida. Atenção: `overflow: hidden` no bloco quebra o sticky; use `overflow: clip`.
- **passos-simples**: grade sem efeito, para páginas de intenção urgente.
- **cartas-empilhadas**: pesa visualmente; use só com motivo.

Depois desta seção: um dos botões leves do meio da página.

### Prova social
- **Depoimentos (padrão do template):** faixa horizontal que passa devagar no desktop, para quando o mouse entra e pode ser arrastada; no celular, deslize com o dedo. Bordas laterais em degradê. Cards com aspas grandes na cor da luz, texto na serifada, iniciais em círculo e a origem. Costuma ficar numa faixa de fundo, para quebrar o ritmo.
- **Antes e depois:** compacto, até 3 casos lado a lado no desktop (nunca um quadro gigante), e o aviso legal num painel com ícone, integrado à página.
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
- O título pode ser humano ("Antes de agendar"), mas a seção precisa se anunciar: o template coloca o rótulo **"Perguntas frequentes"** acima do título quando a copy não traz outro.
- Acordeão acessível (`button` com `aria-expanded`), um aberto por vez ou todos fechados.
- 5 a 7 perguntas no modo LP; mais na home se a copy trouxer.
- Pode ter título sticky à esquerda no desktop.

### CTA final
**Função:** a seção 6 da espinha, coragem para agir.
- Bloco escuro arredondado **na mesma largura do conteúdo** (nada mais largo nem mais estreito), com o elemento do conceito no fundo (demo: pôr do sol em arcos, par do sol do topo).
- Retoma o problema em uma frase, diz o próximo passo e o que acontece depois do clique, com o botão claro grande.
- Microtexto de apoio (horário de resposta, por exemplo). Sem vazio grande embaixo.
- Costuma dividir a faixa de fundo com o "sobre" (home) ou o FAQ (procedimento), para não haver costura feia entre fundos.
- A barra fixa do celular some quando esta seção aparece.

---

## Recursos globais do template

- **Scroll suave (Lenis):** padrão, só desktop com mouse, desligado no movimento reduzido. Não é scrolljacking: a rolagem continua livre, só fica macia.
- **Cor de seleção de texto** própria (`::selection` na cor da luz da marca).
- **Hover que se vê:** todo botão muda de cor no hover e o ícone "acende" (assinatura). Subir 2px sozinho não basta.
- **Cursor acompanhante:** opcional, ainda não implementado.
