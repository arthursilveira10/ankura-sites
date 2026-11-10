---
name: site-copy
description: "Método da Ankura para escrever a copy de sites, landing pages e páginas de serviço/procedimento: voz humana em primeira pessoa, técnico traduzido para o leitor, persuasão implícita, regras anti-texto-de-IA e o que escrever em cada seção. Use SEMPRE que a tarefa for escrever, reescrever, revisar ou criticar textos de site, LP, hero, headline, seção, FAQ, CTA ou página de procedimento, para médicos ou qualquer nicho, mesmo que a pessoa só peça para escrever o texto da página, melhorar uma headline ou revisar uma copy."
---

# Copy de sites, Método Ankura

Esta skill é a segunda etapa do processo. Ela parte do **briefing.md** e do **arquitetura.md** produzidos pela skill `site-estrategia`. Se eles não existirem, pare e peça (ou sugira fazer a estratégia antes): copy sem briefing vira texto genérico, e evitar texto genérico é o motivo de esta skill existir.

Entregável: **copy.md**, com o texto final de cada seção da arquitetura, na ordem, pronto para ir para o design.

## O estilo, em uma frase

Copy persuasiva, inteligente, humana, sincera e honesta. Soa como uma conversa com alguém que entende do assunto e se importa com quem está lendo.

## Princípios

### 1. Primeira pessoa, próxima

Padrão: o profissional fala direto com o leitor. "Eu vou te examinar com calma", não "O Dr. Fulano realiza avaliação criteriosa". Terceira pessoa só se o usuário indicar para aquele projeto.

### 2. O técnico existe, traduzido

O leitor não quer o termo; quer saber se o profissional resolve, se é bom e se dá para confiar. É como uma agência explicando "API de conversões" para um médico: ele não precisa do nome, precisa entender o que ganha.

Regra: todo dado técnico vem acompanhado da consequência para o leitor.
- Fraco: "Utilizo escleroterapia ecoguiada."
- Forte: "Faço o tratamento guiado por ultrassom. Assim consigo ver a veia durante o procedimento e tratar com precisão, sem cortes."

O técnico funciona como prova de competência, não como vocabulário.

### 3. Mostrar em vez de declarar

Qualidades declaradas não convencem; viram ruído. Mostre o fato que prova a qualidade.
- Declarar: "Atendimento humanizado e de excelência."
- Mostrar: "A primeira consulta dura uma hora. Quero entender sua história antes de examinar."

Teste: se dá para trocar o nome do profissional por outro e a frase continua verdadeira, ela está genérica. Reescreva com algo que só ele pode dizer.

### 4. Persuasão implícita

Os gatilhos existem, mas embutidos no conteúdo, nunca anunciados.
- Autoridade: mostre formação, experiência, forma de trabalhar. Não escreva "sou referência".
- Prova social: deixe o depoimento falar. Não escreva "milhares de pacientes satisfeitos".
- Reciprocidade: entregue informação útil de verdade na página (o FAQ e a seção de experiência são ótimos para isso).
- Redução de risco: explique o que acontece depois do clique, quanto tempo leva, o que esperar.

### 5. Especificidade acima de tudo

O antídoto para texto genérico é material real do briefing: as palavras que o público usa para descrever o problema, as perguntas que ele realmente faz, detalhes concretos da experiência, fatos do profissional. Antes de escrever cada seção, liste quais elementos do briefing vão alimentá-la. Se uma seção não tem material específico, sinalize a lacuna em vez de preencher com frase vaga.

### 6. Ritmo de conversa

Alterne frases curtas e longas. Parágrafos curtos. Vocabulário do dia a dia. Leia em voz alta mentalmente: se soa como discurso, folheto ou redação escolar, reescreva.

### 7. Escrita para quem passa o olho

A maioria das pessoas não lê a página inteira; ela escaneia. A copy precisa funcionar assim sem virar uma lista rasa de tópicos nem um artigo. O equilíbrio vem de três regras:

**Orçamento de texto por seção** (referência, não lei):
- Topo: headline + subheadline com até ~30 palavras no total.
- Seções comuns (identificação, serviço/tratamento, experiência, inclusões): ~40 a 80 palavras.
- Seção do profissional: até ~120 palavras. É a seção onde texto corrido mais faz sentido.
- Respostas do FAQ: 2 a 3 linhas cada.

Escreva, depois corte. Se uma seção estourou, corte a explicação que o leitor não precisa, nunca o detalhe específico que torna a página daquele cliente.

**O formato segue o conteúdo:**
- Sequência vira passos curtos (título do passo + uma linha).
- Lista de verdade vira itens curtos.
- Argumento, emoção e história ficam em parágrafo de 2 a 3 linhas.
- Uma frase-chave por seção pode virar destaque.
Nem tudo em tópicos, nem tudo em parágrafo.

**A copy já imagina o design.** Cada seção traz uma linha de *sugestão de formato* (ex.: "4 passos com ícone, título e uma linha"; "foto da médica ao lado, texto corrido"). É uma ideia inicial para orientar o design, não uma decisão: o pensamento profundo de layout acontece na etapa de design, que pode mudar a sugestão.

### 8. Nenhum motivo para adiar

Nenhum argumento pode fazer o leitor sentir que agora não é o momento. Ex.: "o melhor é tratar entre março e setembro" faz quem lê em novembro desistir. Se o tempo importa, mostre como começar agora ("na consulta a gente planeja as sessões para a sua época do ano").

## Proibido

- **Travessão (—)**, em qualquer lugar da copy. Use ponto, vírgula ou dois-pontos.
- Agressividade, pressão, tom de vendedor.
- Falsa escassez, urgência fabricada, contagem regressiva, "últimas vagas" sem ser verdade.
- Gatilhos mentais explícitos e empilhados.
- Promessa ou garantia de resultado, incluindo afirmações absolutas ("não volta", "não dói", "definitivo", "100%", "sem riscos"). Use formas honestas: "o vaso tratado tende a não reaparecer, mas novos podem surgir", "a maioria das pacientes descreve como...".
- Argumentos que dão motivo para adiar (ver princípio 8).
- Inventar números, depoimentos, títulos ou fatos. Faltou informação: use `[A CONFIRMAR: ...]`.
- Os padrões de texto de IA listados em `references/anti-slop.md`. **Leia esse arquivo antes de escrever e use-o de novo na revisão final.**

## Processo

1. Releia briefing.md e arquitetura.md. Identifique voz, intenção (urgente/eletiva), ação de conversão, provas disponíveis, perguntas e objeções reais.
2. Leia o módulo do nicho em `references/nichos/` (medicina: `references/nichos/medicina.md`).
3. Escreva seção por seção seguindo `references/secoes.md`, já com a sugestão de formato de cada uma.
4. Corte para caber no orçamento de texto (princípio 7).
5. Revise com o checklist abaixo e com `references/anti-slop.md`. Corrija antes de entregar.
6. Entregue o copy.md, aponte as lacunas e os trechos que dependem de checagem de regra, e sugira rodar a skill `site-revisao` antes de aprovar.

## Formato do copy.md

```
# Copy: [página]
Voz: [1ª pessoa / outra]  |  Intenção: [urgente/eletiva]  |  Ação: [ex.: WhatsApp]

## [Nome da seção 1]
Função: [da arquitetura]
Sugestão de formato: [ideia inicial de layout, ex.: "3 itens curtos ao lado de foto"]
Títulos: [3 opções, preferida marcada + 1 linha de justificativa]
[Texto final: corpo, CTA]

## [Nome da seção 2]
...

## Lacunas e pontos de checagem
- [A CONFIRMAR: ...]
- [CHECAR REGRA: depoimento X, CFM/Meta]
```

**Variações para aprovação:**
- Topo: **5 pares de headline + subheadline**, variando o ângulo (dor, desejo, diferencial do profissional, como funciona, pergunta do paciente). Marque o preferido e justifique em uma linha.
- Cada seção: **3 opções de título**, preferida marcada.

## Checklist de revisão

- [ ] Nenhum travessão.
- [ ] Topo com 5 pares de headline/subheadline; seções com 3 títulos.
- [ ] Cada seção dentro do orçamento de texto e com sugestão de formato.
- [ ] Nenhuma afirmação absoluta; nenhum argumento que dê motivo para adiar.
- [ ] O topo responde ao que a pessoa buscou e apresenta o profissional como solução.
- [ ] Cada seção usa pelo menos um elemento específico do briefing.
- [ ] Todo termo técnico vem com a consequência para o leitor.
- [ ] Nenhuma qualidade só declarada; todas mostradas.
- [ ] Teste da troca de nome: nenhuma frase serviria igual para outro profissional.
- [ ] Frases com tamanhos variados; nenhum padrão de IA repetido ao longo da página.
- [ ] Nada de `references/anti-slop.md` sobrou.
- [ ] CTAs dizem o que acontece depois do clique.
- [ ] FAQ responde perguntas reais do briefing.
- [ ] Sem promessa de resultado, sem escassez falsa, regras do nicho conferidas.
