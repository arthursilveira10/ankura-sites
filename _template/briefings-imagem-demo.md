# Briefings de imagem: demo (prancha G, "Luz de janela")

Imagens decorativas, geradas por IA. **Nenhuma tem pessoa**: o médico entra sempre com a foto real recortada, montada por cima em código.
Depois de gerar, mande o arquivo (PNG, JPG ou WebP). Eu converto, coloco em `public/pranchas/img/` e ajusto o encaixe.

**Resultado (10/11/2026):** os dois prompts funcionaram na primeira rodada (4 variações cada). Escolhidas: imagem 1, a variação mais limpa (janela de duas folhas e galhos no alto à esquerda, sem a sombra escura da parede); imagem 2, a de círculo de luz centrado e cortina bem definida à direita. Arquivos: `public/pranchas/img/fundo-topo.webp` e `fundo-sobre.webp`. Use este arquivo como modelo de briefing.

Dica para o GPT: gere 3 ou 4 variações de cada uma e escolha a mais calma. Se vier com objetos, pessoas ou texto, peça de novo com "apenas a parede".

---

## Imagem 1: fundo do topo

- **Onde entra:** dentro do nicho em arco, atrás do médico, no topo da home.
- **Proporção:** vertical 4:5, mínimo 1600 × 2000 px.
- **Área livre:** o médico cobre o centro e a direita, do meio para baixo. O interesse da luz precisa estar no **terço esquerdo e no alto**, que é o que fica visível.
- **Cores:** parede verde-sálvia acinzentada (#D3DBCF a #C3CEBF); luz quente e suave (#F7E3B5). Nada saturado.
- **Estilo:** fotografia de arquitetura editorial, luz natural, granulação muito sutil, sem perspectiva.

**Prompt:**

> Fotografia minimalista de uma parede lisa de reboco fino, cor verde-sálvia acinzentado claro (#D3DBCF), iluminada por luz natural de fim de tarde que entra por uma janela fora do quadro, à esquerda. A luz forma retângulos quentes e suaves (#F7E3B5) na parede, recortados pela sombra fina da esquadria de uma janela de duas folhas, concentrados no terço esquerdo e na parte de cima da imagem. Na parte superior esquerda, a sombra difusa e desfocada de alguns galhos com folhas finas. Sombras suaves, bordas levemente desfocadas, sensação calma e silenciosa de consultório. Sem pessoas, sem objetos, sem móveis, sem texto, sem molduras, sem plantas visíveis (só a sombra). Enquadramento vertical 4:5, câmera de frente para a parede. Estilo fotografia de arquitetura editorial, granulação muito sutil.

Variação sem folhas (se a sombra de planta parecer clichê de dermatologia): troque a frase dos galhos por "e a sombra ondulada e translúcida de uma cortina de linho na borda esquerda".

---

## Imagem 2: fundo do "sobre"

- **Onde entra:** no painel arredondado atrás do médico, na seção "Prazer, eu sou o Arthur".
- **Proporção:** quadrada 1:1, mínimo 2000 × 2000 px.
- **Área livre:** o médico cobre o centro, de cima a baixo. A luz fica **atrás da cabeça e dos ombros** (centro alto) e espalha para as bordas.
- **Cores:** a mesma parede da imagem 1, um pouco mais quente; o círculo de luz em #F7E3B5 a #FFF3D6.
- **Estilo:** o mesmo da imagem 1, para parecer o mesmo consultório.

**Prompt:**

> Fotografia minimalista de uma parede lisa de reboco fino, cor verde-sálvia acinzentado claro (#D3DBCF), com um grande círculo de luz solar quente e muito suave (#F7E3B5) projetado no centro-alto da parede, como o reflexo do sol baixo passando por uma janela. Bordas do círculo bem difusas, transição gradual para a parede. Na lateral direita, a sombra leve e ondulada de uma cortina de linho translúcida. Atmosfera calma de consultório no fim da tarde. Sem pessoas, sem objetos, sem móveis, sem texto. Enquadramento quadrado 1:1, câmera de frente para a parede. Estilo fotografia de arquitetura editorial, granulação muito sutil.

---

## Imagem 1b: fundo do topo, versão larga (usada)

- **Onde entra:** cobre o topo inteiro, de borda a borda. Um degradê suaviza a esquerda (texto) e a base.
- **Proporção:** 16:9, mínimo 2400 × 1350 px. Arquivo: `public/pranchas/img/fundo-topo-largo.webp` (escolhida a 3ª de 4: janela no centro-direita, galhos bem suaves à esquerda).

> Fotografia minimalista de uma parede lisa de reboco fino, cor verde-sálvia acinzentado claro (#D3DBCF), iluminada por luz natural de fim de tarde que entra por uma janela fora do quadro, à esquerda. A luz forma retângulos quentes e suaves (#F7E3B5) recortados pela sombra fina da esquadria de uma janela de duas folhas, concentrados no centro-direita da imagem. No terço esquerdo, apenas a sombra muito suave e desfocada de galhos com folhas finas, com pouco contraste. Sem pessoas, sem objetos, sem móveis, sem texto. Enquadramento horizontal 16:9, câmera de frente para a parede. Estilo fotografia de arquitetura editorial, granulação muito sutil.

---

## Imagens 3 e 4: lista de tratamentos da home (toxina e melasma)

**Resultado:** escolhidas a 4ª de toxina (três sombras onduladas bem definidas), a 1ª de melasma (mancha de sol redonda e cortina à direita) e, para a imagem 5, a 2ª ilustração (olhos abertos, rosto à direita, que recorta bem em 5:4). Arquivos em `src/assets/`: `procedimento-toxina.webp`, `procedimento-melasma.webp`, `toxina-ilustracao.webp`.

- **Onde entram:** na lista "Por onde você quer começar?", na miniatura que cresce quando o item abre (340 × 232 no desktop).
- **Proporção:** horizontal 3:2, mínimo 1500 × 1000 px.
- **Regra:** conceituais, sem pessoa, sem rosto, sem equipamento (procedimento e equipamento só com foto real; no site de um cliente, entram as fotos do consultório).
- **Estilo:** a mesma família das imagens 1 e 2 (parede sálvia, luz de fim de tarde), para a lista parecer um conjunto.

**Imagem 3, toxina botulínica (linhas de expressão suavizadas):**

> Fotografia minimalista de uma parede lisa de reboco fino, cor verde-sálvia acinzentado claro (#D3DBCF), iluminada por luz natural quente de fim de tarde (#F7E3B5). Sobre a parede, três sombras suaves, horizontais e levemente onduladas, como dobras delicadas de um tecido de linho fora do quadro, ficando mais suaves e espaçadas da esquerda para a direita. Sensação de calma e de linhas que se suavizam. Sem pessoas, sem rostos, sem objetos visíveis, sem texto. Enquadramento horizontal 3:2, câmera de frente para a parede. Estilo fotografia editorial de arquitetura, granulação muito sutil.

**Imagem 4, melasma (a mancha que volta com o sol):**

> Fotografia minimalista de uma parede lisa de reboco fino, cor verde-sálvia acinzentado claro (#D3DBCF). Um feixe de sol de fim de tarde forma uma mancha de luz quente, arredondada e de bordas irregulares (#F7E3B5) no centro-direita da parede, e ao lado dela a sombra suave e difusa de uma cortina de linho que filtra parte da luz. Sensação de luz controlada, calma. Sem pessoas, sem rostos, sem objetos visíveis, sem texto. Enquadramento horizontal 3:2, câmera de frente para a parede. Estilo fotografia editorial de arquitetura, granulação muito sutil.

---

## Imagem 5: página de toxina, seção "O que é"

- **Onde entra:** ao lado do texto "Um relaxamento temporário de alguns músculos".
- **Proporção:** 5:4, mínimo 1500 × 1200 px.
- **Regra:** ilustração conceitual, não foto. Um rosto genérico, desenhado, que não identifica ninguém; nada de antes e depois.

> Ilustração editorial minimalista em traço fino contínuo, cor verde-escuro (#1E4A3C), sobre fundo verde-sálvia muito claro (#E3E8E0). Perfil de três quartos de um rosto adulto sereno, sem traços que identifiquem uma pessoa real, desenhado com poucas linhas. Na testa e entre as sobrancelhas, três ou quatro linhas curvas finas em dourado (#C9963A), como se fossem as linhas de expressão, desenhadas de forma suave e elegante. Muito espaço vazio ao redor. Sem sombreado realista, sem texto, sem setas, sem anatomia de músculos. Estilo de ilustração de revista de saúde, delicado e sóbrio.

---

## Imagem de compartilhamento (Open Graph)

Não precisa gerar: eu monto em código (logo + foto recortada + fundo de luz, 1200 × 630) e salvo como imagem.

## Antes e depois (página de melasma)

Não pode ser gerado nem simulado. Só foto real de paciente, com autorização por escrito. No demo, a seção fica com o espaço reservado ou sai da página (decidir com o Arthur).

---

## Se quiser ir além no Canva

O encaixe em código já faz o recorte, o selo e a sombra do médico. O Canva vale a pena para uma coisa que o código faz mal: a **sombra de contato do médico na parede** (a silhueta dele projetada levemente para a direita, bem difusa). Se fizer, exporte **só o fundo com essa sombra**, sem o médico, no mesmo tamanho da imagem 1. O médico continua entrando por cima em código, para o encaixe funcionar no celular.
