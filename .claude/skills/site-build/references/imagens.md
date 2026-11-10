# Imagens

## Regras

- **Foto real, sempre:** médico, equipe, consultório, equipamento, paciente. Nunca IA, nunca banco de imagem.
- **IA permitida:** texturas, fundos, elementos decorativos, mockups (ex.: celular mostrando o Instagram do médico), ilustrações conceituais (ex.: explicar como funciona um procedimento sem mostrar paciente).
- **SVG no código:** ícones, grafismos, formas, elementos do conceito, divisores. Não peça ao Arthur o que dá para desenhar em código.
- Imagem de paciente, antes/depois e depoimento com foto: só com autorização registrada e checagem da regra vigente (CFM + Meta + Google).
- Enquanto a imagem não chega: espaço reservado com a proporção final e a etiqueta `[FOTO: descrição]`. Nunca uma foto provisória de banco.

## Inventário de imagens

Antes dos briefings, liste tudo:

```
| Seção | Imagem | Proporção | Tipo (real/IA/SVG) | Status (tenho / falta / fraca) | Quem providencia |
```

## Briefing de imagem (IA)

Um por peça. O Arthur gera no ChatGPT e coloca em `assets/`.

```
### [ID]: [nome curto]
Onde entra: [seção e posição; ex.: fundo do bloco de CTA final, atrás do texto]
Proporção e tamanho: [ex.: 16:9, mínimo 2400×1350; ou 1:1, 1200×1200]
Função: [o que a imagem faz pela mensagem]
Estilo: [ligado ao conceito e à paleta; cite os códigos de cor]
O que NÃO pode ter: [pessoas, rostos, mãos, texto, logotipos, elementos médicos realistas...]
Área livre: [ex.: terço esquerdo limpo para o texto]
Prompt pronto:
"""
[prompt em inglês ou português, completo, com estilo, cores, composição, luz, proporção e as exclusões]
"""
Nome do arquivo: assets/ia-[id]-[descricao].png
```

Regras do prompt: cite as cores em hex, peça fundo e textura coerentes com a paleta, exclua pessoas e texto explicitamente e peça a proporção exata.

## Briefing de ensaio fotográfico (fotos reais)

Quando faltam fotos reais ou as que existem não servem (luz ruim, fundo poluído, selfie, sem variedade). Vai para o médico e para o fotógrafo.

```
# Ensaio fotográfico: [médico]

## Por que essas fotos
[1 parágrafo: onde cada foto entra no site e o que ela precisa transmitir]

## Direção geral
- Roupa: [cores da paleta; ex.: jaleco + peça na cor X; evitar estampas e logos de terceiros]
- Cenário: [consultório real, parede de cor Y, luz natural lateral]
- Objetos de cena: [ligados ao conceito e à especialidade, sem parecer encenado]
- Expressão: [próxima, calma; olhar na câmera nas fotos de topo]
- Formato: arquivos originais, sem filtro, na maior resolução possível

## Lista de fotos (obrigatórias)
1. Topo, vertical 4:5: meio corpo, olhando para a câmera, fundo limpo com espaço acima da cabeça.
2. Topo, versão horizontal 3:2: mesma pose para o desktop.
3. Profissional, vertical 3:4: em atividade (explicando, examinando, escrevendo), sem olhar para a câmera.
4. Detalhe: mãos, instrumento de trabalho, anotação (sem dado de paciente).
5. Consultório vazio, horizontal: sala de atendimento inteira, luz natural.
6. Recepção ou entrada, horizontal.
7. 2 a 3 detalhes do ambiente (texturas, plantas, objetos da identidade) para bento e miniaturas.
8. Equipe, se houver: individuais no mesmo fundo + uma em grupo.

## Opcionais
- Atendimento com paciente (modelo ou paciente com autorização assinada), sem mostrar procedimento ou resultado.
- Fachada e caminho de chegada.

## Cuidados
- Nenhum dado de paciente visível (tela, prontuário, ficha).
- Sem certificados emoldurados como fundo principal.
- Celular serve se for câmera boa, luz natural e sem modo retrato exagerado.
```

## Código ou imagem gerada?

- **Código (SVG/CSS):** formas geométricas, linhas, ícones, grafismos do conceito, degradês simples, movimento.
- **Imagem gerada (GPT):** tudo que precisa parecer fotográfico ou material: luz e sombra realistas, parede, tecido, papel, textura orgânica, fundo atrás do médico. Luz de janela feita em código ficou artificial no demo; quando o efeito pede realismo, escreva o briefing e peça ao Arthur. Exemplo pronto: `_template/briefings-imagem-demo.md`.

## Foto do médico como peça de direção de arte

O topo e o "sobre" ganham muito quando a foto do médico vira composição em camadas (ref 01 e prancha G do template): recorte sem fundo à frente de um nicho, sombra de janela ou outro elemento do conceito atrás e passando por cima, selo flutuante.

- **Sempre foto real.** Recorte, cor, luz, sombra e moldura são liberados. Gerar ou "refazer" a pessoa por IA não é (muda a aparência e fere a regra de imagem real).
- **Fluxo:** o Arthur recorta a foto (Canva ou outra ferramenta) e entrega um **PNG ou WebP com fundo transparente**, meio corpo, com folga acima da cabeça; o Claude monta a composição em código. Texturas e elementos de fundo (sombra de janela, tecido, papel) podem vir do ChatGPT com briefing de imagem.
- **No ensaio:** peça ao menos uma foto em fundo liso e com luz lateral, que recorta bem, além das fotos em ambiente.
- No celular, a composição ancora pelo topo (cabeça e ombros visíveis) e corta embaixo; nunca deixe o menu flutuante cobrir o rosto.
- **O topo é a foto, não um cartão com foto.** Médico grande, ancorado na base do topo, sem moldura. A textura (imagem gerada) cobre a seção inteira, suavizada atrás do texto por um degradê para a leitura; um elemento do conceito em escala grande fica atrás do médico (no demo, o arco de sol que volta no CTA final). Referência de presença: ref 01.
- **Composição pronta do "sobre"** (feita pelo Arthur no Canva, como na ref 01): painel com cantos assimétricos, fundo de luz gerado e a cabeça do médico saindo pelo alto do painel. Entregue em PNG ou WebP com transparência fora do painel; entra como uma imagem só. Exemplo: `_template/public/pranchas/img/sobre-composicao.webp`.
- **Elemento em código sobre imagem gerada:** a cor precisa casar com a imagem. Arcos verdes sólidos sobre a luz amarela da janela destoaram; um brilho suave na cor da própria luz funcionou. Na dúvida, o elemento atrás do médico é luz ou sombra, não forma colorida.
- **Figurino na paleta.** A foto parece feita para o site quando a roupa conversa com as cores da marca (ref 01). No briefing de ensaio, oriente: 2 ou 3 opções de roupa lisa nas cores da paleta ou neutras que combinem, sem estampa nem logo grande. Para fotos que já existem, **recolorir a roupa** (Photoshop, Canva) é permitido. Trocar a peça por IA só se rosto, corpo e mãos ficarem idênticos e o médico aprovar o resultado; na dúvida, não.

## Tratamento dos arquivos

- Formato: **AVIF ou WebP** gerados pelo Astro (`<Image>`/`<Picture>`) a partir do original em `assets/`.
- Tamanhos responsivos com `srcset` e `sizes` corretos (no celular, a foto do topo não precisa de 2000px).
- Largura e altura sempre declaradas (evita o layout pular).
- Topo: carregamento imediato, foto principal com `fetchpriority="high"`. Resto: `loading="lazy"`.
- Ponto focal definido (`object-position`) para o recorte não cortar o rosto em nenhuma largura.
- Peso-alvo: foto do topo no celular até ~120KB; demais até ~200KB.
- `alt` descritivo nas fotos com conteúdo ("Dr. Fulano explicando o tratamento no consultório"); `alt=""` nas decorativas.
