---
name: site-revisao
description: "Revisão crítica de textos de marketing da Ankura antes de aprovar ou publicar: caça riscos de regra (CFM, políticas de anúncios de saúde da Meta e do Google), afirmações absolutas e promessas de resultado, padrões de texto de IA repetidos, argumentos que dão motivo para adiar e frases genéricas. Use SEMPRE que pedirem para revisar, checar, auditar ou dar o ok final em copy de site, LP, anúncio, legenda, roteiro de Reels ou qualquer texto para cliente, especialmente da área da saúde, mesmo que a pessoa só diga revisa isso ou tá ok pra publicar?"
---

# Revisão de copy, Método Ankura

Esta skill é a última barreira antes de um texto ir para o cliente ou para o ar. Ela não reescreve o texto inteiro: encontra problemas, mostra o trecho exato e propõe a correção mínima. Quem decide é o usuário.

Funciona para qualquer texto (site, LP, anúncio, legenda, roteiro). Para copy de site, complementa a skill `site-copy`.

## Postura

- Seja rigoroso com risco de regra e promessa de resultado: na dúvida, aponte.
- Seja calibrado com estilo: o problema de IA é o padrão **repetido**, não a frase isolada. Não proponha cortar boa redação só para zerar uma lista.
- Corrija o mínimo necessário, preservando a voz e o que é específico do cliente.
- Nunca invente fatos na correção. Se a correção depende de informação, marque `[A CONFIRMAR]`.

## O que verificar (nesta ordem)

### 1. Risco de regra (saúde)
Use `references/riscos-saude.md`. Verifique CFM, política da Meta, política do Google. Inclui depoimentos, antes/depois, especialidade sem RQE, identificação obrigatória, superlativos, sensacionalismo, insinuação da condição de saúde do leitor.

### 2. Afirmações absolutas e promessas
Qualquer frase que garanta, elimine, cure, prometa ausência de dor, de risco ou de recorrência. O FAQ é onde isso mais aparece. Proponha a forma honesta.

### 3. Motivo para adiar
Argumentos que fazem o leitor sentir que agora não é a hora (sazonalidade, "o ideal é esperar", pré-requisitos desnecessários). Proponha como reenquadrar para começar agora.

### 4. Genérico
Teste da troca de nome: a frase continuaria verdadeira com outro profissional? Qualidades declaradas sem prova ("atendimento humanizado", "excelência")? Benefícios abstratos?

### 5. Padrões de IA
Use `references/anti-slop.md`. Travessão é sempre erro. Os demais padrões só viram apontamento quando se repetem ou acumulam.

### 6. Forma (para copy de site)
**Conte as palavras do corpo de cada seção** (sem contar títulos alternativos e notas) e compare com o orçamento:
- Topo: headline + subheadline até ~30 palavras no total.
- Seções comuns (identificação, serviço/tratamento, experiência, inclusões): ~40 a 80 palavras.
- Seção do profissional: até ~120 palavras.
- Respostas do FAQ: 2 a 3 linhas cada; em LP de tráfego pago, 5 a 7 perguntas.

Toda seção acima do orçamento vira apontamento 🟡, com a contagem atual ("seção 3: ~190 palavras, orçamento 80") e uma sugestão concreta de corte: o que sai, o que vira item curto ou passo, e qual detalhe específico deve ser preservado. O orçamento é referência: um pequeno excesso numa seção que justifica pode virar ⚪.

Verifique também: texto corrido onde o conteúdo pedia passos ou itens, CTA vago, CTA inconsistente entre seções, falta de variações de título quando o formato pede.

## Formato do relatório

```
# Revisão: [nome do texto]

## Veredito
[Aprovado / Aprovado com ajustes / Precisa de revisão] + 2 linhas do porquê.

## Problemas
### 🔴 Crítico (bloqueia publicação: regra, promessa)
1. Trecho: "..."
   Problema: ...
   Sugestão: "..."

### 🟡 Importante (enfraquece a página)
...

### ⚪ Ajuste fino (opcional)
...

## Pontos que dependem de checagem externa
- [CHECAR REGRA: ...] o que verificar e onde.
- [CHECAR COM O CLIENTE: ...] orientação clínica, dados.

## O que está bom e deve ser mantido
2 a 4 itens. Serve para ninguém "corrigir" o que funciona.
```

Ordene por gravidade. Se não houver problema em uma categoria, omita a categoria. Se o usuário pedir, aplique as correções aprovadas e devolva o texto final.
