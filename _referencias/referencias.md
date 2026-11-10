# Referências visuais e estruturais: sites médicos

Curadoria do Arthur (novembro/2026), organizada para o workspace `ankura-sites/_referencias/`.
Prints na pasta `prints/`. Os comentários "Arthur" são dele; "Análise" é leitura das páginas.

**Como usar:** estas referências calibram o gosto da Ankura para a etapa de design e build. Use para extrair **princípios** (composição, ritmo, interações, estrutura), nunca para copiar layout, fotos, textos ou identidade de outro site. A copy destas páginas NÃO é referência automática: vários sites aqui têm bom visual e copy com problemas de regra (ver alertas).

---

## 1. Síntese: o gosto da Ankura

### O que se repete no que o Arthur gosta

1. **Identidade própria por médico, não template.** Cada referência tem uma estética diferente (orgânica e colorida na Flávia, sóbria e premium no João, quente e editorial no Lucas). A estética nasce da identidade do médico; não existe um "estilo Ankura" único de visual. O que é fixo é a qualidade e o método.
2. **Foto real do médico protagonista no topo**, com composição de personalidade: recortes arredondados ou em arco, colagem de fotos, elementos gráficos ao redor.
3. **Seções em blocos arredondados** (o nome técnico: *cards* ou *containers* com cantos arredondados; quando vários blocos de tamanhos diferentes formam um mosaico, chama-se *bento grid*).
4. **Menu flutuante** (*floating navbar*): barra em formato de pílula que fica sobre o conteúdo e acompanha o scroll, com hover com personalidade nos itens.
5. **Microinterações**: hover em botões e menu, cursor personalizado no desktop, scroll suave (*smooth scroll*).
6. **Animações de scroll com propósito**, todas leves:
   - título fixo à esquerda enquanto os passos entram à direita (*sticky section*);
   - frase-manifesto que clareia palavra a palavra conforme o scroll (*text reveal on scroll*);
   - faixa com frases passando em loop (*marquee*);
   - animação de entrada da foto do médico ao abrir a página;
   - ícone animado ligado ao conceito da página (a bússola do Lucas).
7. **Faixa de dados logo abaixo do topo**: CRM, RQE, cidade, modalidade de atendimento. Resolve identificação obrigatória e gera confiança sem ocupar o topo.
8. **Hover que revela imagem** ao passar sobre cada serviço/procedimento.
9. **Antes e depois em slider comparativo** (*before/after slider*), com legenda clínica e aviso legal, quando permitido.
10. **Linha do tempo** para contar a trajetória do profissional.

### O que o Arthur NÃO quer (regras para o build)

- **Texto demais**, mesmo bem escrito (hero e "Sobre" da Flávia). Reforça o orçamento de texto da skill de copy.
- **Elemento decorativo que sobrepõe conteúdo ou bloqueia clique** (as folhas da Flávia cobrem texto e travaram um acordeão). Regra técnica: decorações sempre com `pointer-events: none`, atrás do conteúdo, e testadas no mobile.
- **Excesso de blocos** que deixa a página pouco objetiva (alerta dele na Mônica). Blocos servem à mensagem, não ao contrário.
- **Recursos que não servem ao paciente** (modo claro/escuro numa LP: capricho dispensável).

---

## 2. Referências

### 01. Dra. Flávia Valentim (dermatologia, Indaiatuba/SP)
https://draflaviavalentim.com.br/
Prints: `01-flavia-hero.jpg`, `01-flavia-sobre-folhas.jpg`

**Arthur:** ama a personalidade da hero (cores, elementos, composição), tem identidade. Gosta dos elementos que dão profundidade (folhas), mas eles sobrepõem texto e chegaram a bloquear o clique de um acordeão. Texto demais.

**Análise:**
- Estrutura: hero → diferenciais → tratamentos → avaliações Google → como funciona a consulta → o que inclui → sobre → manifesto → contato → FAQ.
- Prova social forte e simples: "+300 avaliações 5 estrelas no Google" já no topo, com carrossel de avaliações reais.
- Lista de tratamentos enorme e repetida (aparece duas vezes): exemplo do que evitar numa LP.
- **Informação desatualizada no FAQ:** o site afirma que o CFM não permite informar o preço da consulta. Isso era a regra antiga; a Resolução 2.336/2023 (em vigor desde março/2024) passou a permitir. Mostrar ou não o preço é decisão estratégica, não restrição.

**Usar para:** identidade visual com personalidade, elementos orgânicos de profundidade, prova social do Google no topo.
**Não usar para:** volume de texto, listas longas de procedimentos.

---

### 02. Dr. João Francisco Oliveira (transplante capilar, Criciúma/SC)
https://drjoaofranciscoliveira.com.br/
Prints: `02-joao-hero.jpg`, `02-joao-antes-depois.jpg`

**Arthur:** estética simples e premium que funciona para este caso (não é referência universal). Scroll suave e cursor personalizado no desktop. Antes e depois de altíssimo impacto em conversão.

**Análise:**
- Estrutura enxuta e objetiva: hero → sobre → resultados (antes/depois) → técnicas → depoimentos → FAQ → formulário → localização.
- Antes/depois em slider, com legenda clínica precisa por caso (tempo pós-cirurgia, % do resultado esperado). É o formato a seguir quando permitido.
- Formulário de qualificação inteligente (grau de calvície, quando pretende fazer).
- SEO local bem feito: páginas por cidade da região.
- **Alerta de copy/regra:** "transplante definitivo", "O procedimento é doloroso? Não.", "resultado permanente", "excelência". São exatamente as afirmações absolutas que nossas skills proíbem. Não exibe RQE. Visual é referência; copy não.

**Usar para:** estética premium sóbria, slider de antes/depois com legenda, formulário de qualificação, SEO local.
**Não usar para:** copy.

---

### 03. Dr. Lucas Attoni (psiquiatria, BH/MG) ⭐ referência principal
https://drlucasattoni.com.br/
Prints: `03-lucas-hero.jpg`, `03-lucas-faixa-dados.jpg`, `03-lucas-identificacao.jpg`, `03-lucas-bussola.jpg`

**Arthur:** a página toda é excelente, em design, estrutura e copy. Hero com personalidade e proximidade, hover no botão, menu flutuante, faixa de dados, marquee, seção de identificação linda, o jogo de palavras "uma bússola, não um mapa" com a bússola animada.

**Análise:**
- Estrutura muito próxima da nossa espinha, com a ordem flexível bem usada: hero → faixa de dados (CRM, RQE, cidade, presencial/online) → marquee → identificação ("Você não está quebrado") → o ciclo do problema → o que muda → abordagem (2 pilares) → para quem é → o que esperar das consultas → sobre → depoimentos → FAQ → CTA final. O médico aparece tarde, porque a identificação é o que convence nesse nicho.
- Compliance exemplar: CRM e RQE na faixa e no rodapé, aviso de que não substitui urgência, depoimentos "com privacidade preservada".
- Microtexto de CTA excelente: "envie sua principal queixa e o que você já tentou", que já qualifica o contato e prepara o atendimento (pilar Conversão).
- **Observação importante para a skill de copy:** esta copy usa bastante o contraste "X, não Y" ("viver com sentido, não apenas existir", "uma bússola, não um mapa", "O problema não é você. É a estratégia"), que listamos como padrão de IA. Aqui funciona porque é **conceito**, não muleta: cada contraste carrega a ideia central da abordagem e não se repete por hábito. Calibragem a levar para a skill: contraste deliberado e conceitual é recurso; contraste em série por ritmo é vício.
- Créditos no rodapé: @pinacria.

**Usar para:** praticamente tudo. Estrutura, copy (com a calibragem acima), faixa de dados, interações, composição de fotos.

---

### 04. Dra. Mônica Fernandes (dermatologia, Campo Mourão/PR)
https://dramonicafernandes.com.br/
Prints: `04-monica-hero.jpg`, `04-monica-blocos-clinica.jpg`

**Arthur:** impecável. Blocos com borda arredondada, textura e gradiente com charme, menu com hover de personalidade. Cuidado para não exagerar nos blocos e perder objetividade.

**Análise:**
- Site institucional completo (home + páginas internas): bom exemplo de como a home leva para páginas de tratamento.
- Bento grid de fotos para apresentar a clínica.
- Boa prática de compliance: aviso legal no rodapé ("imagens não representam garantia ou promessa de resultados").
- **Alerta de copy:** superlativos e genéricos ("referência em tratamentos avançados", "tecnologia de ponta", "excelência médica", "soluções inovadoras"). Hero com frase bonita que não diz o que a médica resolve.
- Créditos no rodapé: Ideer Digital.

**Usar para:** blocos arredondados, texturas e gradientes sutis, menu, bento grid, aviso legal no rodapé.
**Não usar para:** copy, hero.

---

### 05. "Dra. Helena Duarte" (site-modelo de agência, odontologia)
https://lummeassessoria.com/clinicas/dra-helena-duarte/
Prints: `05-helena-lumme-como-funciona.jpg`, `05-helena-lumme-cta-bloco.jpg`

**Arthur:** amou o "como funciona" com título fixo à esquerda e passos entrando pela direita. Bloco arredondado no CTA final, menu flutuante. Modo claro/escuro é capricho desnecessário.

**Análise:**
- É um **site de demonstração** da agência Lumme (dados fictícios: CRO 00000, telefone genérico), de odontologia. Coincidência: tem o mesmo nome da médica fictícia do nosso teste.
- Estrutura limpa: hero → marquee de tratamentos → filosofia → tratamentos (com nº de sessões em cada um) → resultados (slider) → a doutora (com números) → clínica → como funciona → depoimentos → FAQ → CTA.
- Bom: legenda dos resultados ("publicadas com autorização, resultados variam").
- Alerta: selo "agenda aberta para avaliações em outubro" no topo é gatilho de tempo; em medicina, cuidado (pode soar como escassez, e passa do prazo).
- Odontologia segue o CFO, não o CFM: usar só como referência visual e estrutural.

**Usar para:** sticky section do "como funciona", CTA final em bloco, marquee, nº de sessões por tratamento.

---

### 06. Dra. Gabrielle Dutra (odontologia, Florianópolis/SC)
https://lummeassessoria.com/gabrielle-dutra/
Prints: `06-gabrielle-hero-a.jpg`, `06-gabrielle-hero-b.jpg`, `06-gabrielle-manifesto.jpg`, `06-gabrielle-hover-servicos.jpg`, `06-gabrielle-timeline.jpg`

**Arthur:** animação de entrada na foto da hero, clareza das informações no topo (headline fraca, porém). Manifesto que clareia com o scroll. Hover que mostra a imagem de cada serviço. Linha do tempo da trajetória. Junto com o site 05, ótimo exemplo de site inteiro.

**Análise:**
- Hero clara: números de prova logo abaixo do CTA (desde 2017, +500 pacientes, 5 estrelas Google) e selos ao redor da foto (registro, especialidade, local).
- Legenda dos casos de antes/depois muito boa: "publicados com autorização, resultados variam, não servem como promessa", com responsável técnica. Modelo de texto legal a adaptar.
- Timeline da trajetória curta e humana.
- Alerta de copy: headline e textos genéricos ("alto nível", "excelência", "sorriso impecável"). Odontologia (CFO): referência só visual/estrutural.

**Usar para:** animação de entrada da hero, selos ao redor da foto, text reveal, hover com imagem, timeline, legenda legal de casos.

---

## 3. Para a Fase 4 (Claude Code)

- Extrair tecnicamente das referências 03, 04, 05 e 06: escala tipográfica, fontes, raio dos cantos dos blocos, espaçamentos, duração e curva das animações, comportamento do menu flutuante, implementação do sticky section e do text reveal.
- Transformar a síntese da seção 1 em regras da skill `site-build` (componentes padrão + nível de animação + o que evitar).
- Já aplicado nas skills: calibragem do contraste conceitual (ref. 03) e a regra de que o preço da consulta pode ser divulgado (ref. 01).
