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

## Tratamento dos arquivos

- Formato: **AVIF ou WebP** gerados pelo Astro (`<Image>`/`<Picture>`) a partir do original em `assets/`.
- Tamanhos responsivos com `srcset` e `sizes` corretos (no celular, a foto do topo não precisa de 2000px).
- Largura e altura sempre declaradas (evita o layout pular).
- Topo: carregamento imediato, foto principal com `fetchpriority="high"`. Resto: `loading="lazy"`.
- Ponto focal definido (`object-position`) para o recorte não cortar o rosto em nenhuma largura.
- Peso-alvo: foto do topo no celular até ~120KB; demais até ~200KB.
- `alt` descritivo nas fotos com conteúdo ("Dr. Fulano explicando o tratamento no consultório"); `alt=""` nas decorativas.
