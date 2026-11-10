# Passagem para a Fase 4

Este documento resume o que foi construído no chat do Claude (claude.ai) com o Arthur e o que esta etapa precisa entregar. Leia junto com o `CLAUDE.md`.

## Onde estamos

| Fase | Status |
|---|---|
| 1. Skill de estratégia (`site-estrategia`) | ✅ pronta e testada |
| 2. Skill de copy (`site-copy`) | ✅ pronta e testada |
| 2b. Skill de revisão (`site-revisao`) | ✅ pronta e testada |
| 3. Referências (`_referencias/`) | ✅ 6 sites analisados + 17 prints |
| **4. Workspace + template + skill de build** | **⏳ agora** |
| 5. Piloto (site real ou da própria Ankura) | depois |
| 6. Ajustes nas skills a partir do piloto | depois |

## Decisões já tomadas (não desfazer sem falar com o Arthur)

**Método e estrutura**
- Processo em etapas com validação entre elas (ver `CLAUDE.md`).
- Skills separadas por etapa, método universal, nicho como módulo (`references/nichos/medicina.md`).
- Estrutura padrão para médicos: home + páginas de procedimento + modo LP. Quantidade de páginas definida pelo Arthur por projeto.
- Espinha da página: 1 (topo) e 6 (coragem para agir) fixas; 2 a 5 em ordem flexível. Prova social e FAQ obrigatórios.
- Topo com foto real do médico, apresentado como solução, junto com a resposta ao problema do paciente.

**Copy**
- Primeira pessoa, próxima, técnico traduzido, mostrar em vez de declarar, persuasão implícita.
- Sem travessão. Padrões de IA só são problema quando repetidos. Contraste conceitual deliberado é recurso.
- Orçamento de texto por seção; a seção do profissional pode ser maior. Nem tudo em tópicos, nem artigo.
- Cada seção da copy traz uma **sugestão de formato** como ideia inicial; o design decide de fato.
- Nenhum argumento pode dar motivo para adiar. Motivação estética é legítima.
- 5 pares de headline/subheadline no topo; 3 títulos por seção.

**Referências e gosto visual** (detalhes em `_referencias/referencias.md`)
- Cada médico tem identidade própria; não há um visual único da Ankura.
- Padrões que o Arthur gosta: blocos arredondados/bento grid, menu flutuante, faixa de dados (CRM, RQE, cidade) abaixo do topo, sticky section no "como funciona", text reveal em frase-manifesto, marquee, hover que revela imagem por serviço, animação de entrada da foto, slider de antes/depois com legenda legal, timeline da trajetória, cursor personalizado e scroll suave no desktop.
- Não quer: texto demais, decoração sobre o conteúdo ou bloqueando clique, excesso de blocos, recursos inúteis (ex.: modo escuro em LP).
- Referência principal: Dr. Lucas Attoni (ref. 03), em design, estrutura e copy.

**Imagens**
- Foto real para médico, consultório, equipe e paciente. IA só para elementos, texturas e mockups.
- Fluxo híbrido: Claude gera briefing de imagem com prompt; Arthur gera no ChatGPT; Claude encaixa.

**Fora do escopo do build**
- Rastreamento (pixel, CAPI, eventos): o Arthur implementa depois, do jeito dele. O build só precisa deixar CTAs e formulários bem identificados para facilitar isso.

## O que a Fase 4 precisa entregar

1. **Organizar o workspace**: conferir a estrutura de pastas, as skills em `.claude/skills/` e o `CLAUDE.md`.
2. **Extração técnica das referências** 03, 04, 05 e 06 (abrir as páginas com navegador automatizado): fontes e escala tipográfica, raio dos cantos, espaçamentos, comportamento do menu flutuante, duração e curva das animações, implementação do sticky section e do text reveal. Registrar em `_referencias/extracao-tecnica.md`. Extrair princípios e medidas, nunca copiar código, imagens ou textos.
3. **Skill `site-build`** em `.claude/skills/site-build/`, cobrindo:
   - como transformar copy.md + identidade do cliente em direção visual (com proposta para aprovação antes de codar);
   - biblioteca de componentes padrão (seções da espinha e os padrões de interação acima);
   - nível de animação permitido e proibido;
   - regras de imagem + formato padrão do **briefing de imagem**;
   - performance, acessibilidade e mobile;
   - checklist final antes de entregar.
4. **`_template/`**: site-base reutilizável com a stack escolhida, componentes da biblioteca, botão de WhatsApp, formulário simples, modo LP e configuração de deploy.

## Decisões fechadas na Fase 4 (10/11/2026)

Registradas em "Decisões técnicas" no `CLAUDE.md`. Resumo: Astro + Tailwind v4; Cloudflare como padrão de hospedagem (pode variar); só WhatsApp; GitHub com repositório próprio por cliente; workspace movido para `C:\dev\ankura-sites`; demo do template = Dr. Arthur Silveira [FICTÍCIO], dermatologia; editor (CMS) para campos operacionais como última etapa da Fase 4.

## Plano da Fase 4 (validar com o Arthur ao fim de cada etapa)

1. ✅ Organizar workspace (mover, git, .gitignore, READMEs, decisões no CLAUDE.md)
2. Extração técnica das refs 03 a 06 → `_referencias/extracao-tecnica.md`
3. Skill `site-build` (primeira versão)
4. `_template/` com o demo do Dr. Arthur Silveira [FICTÍCIO]
5. Editor (CMS, candidato: Pages CMS) testado no demo; ajuste final da skill

## Primeira mensagem sugerida

"Leia o CLAUDE.md e o PASSAGEM-FASE-4.md. Antes de criar qualquer coisa, me proponha um plano para a Fase 4 e me faça as perguntas das decisões em aberto."
