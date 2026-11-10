# Qualidade: performance, acessibilidade, SEO e checklist final

## Metas de performance (celular, 4G)

| Métrica | Meta |
|---|---|
| LCP (maior elemento visível carregado) | até 2,5s |
| CLS (layout pulando) | até 0,05 |
| INP (resposta ao toque) | até 200ms |
| JS próprio | até ~15KB comprimido |
| Fontes | até 2 famílias variáveis em woff2, a do título com `preload` |
| Peso da primeira tela | até ~400KB no total |
| Lighthouse celular | 90+ em Performance, Acessibilidade, Boas práticas e SEO |

Como chegar lá: HTML estático do Astro, imagens pelo componente de imagem, `content-visibility: auto` nas seções abaixo da dobra, nada de iframe pesado (mapa vira link ou imagem estática), nenhum script de terceiros no build (o rastreamento do Arthur entra depois).

## Acessibilidade

- `lang="pt-BR"`, um H1 por página, títulos em ordem (H2 → H3).
- Contraste AA em todo texto, inclusive sobre foto (use véu de cor quando precisar).
- Foco visível em links e botões (anel na cor `tinta` ou `acao`, nunca removido).
- Link "pular para o conteúdo".
- Áreas de toque de no mínimo 44×44px.
- Acordeões e menu com `button`, `aria-expanded` e `aria-controls`; menu de celular fecha com Esc e devolve o foco.
- Slider de antes/depois operável por teclado (setas) e com rótulo.
- Elementos decorativos com `aria-hidden="true"`; marquee duplicado escondido do leitor de tela.
- Movimento reduzido respeitado (ver `animacao.md`).

## SEO básico

- `<title>` e meta description por página, escritos a partir da copy (procedimento + cidade + médico).
- URL limpa por procedimento (`/melasma`, `/toxina-botulinica`). Modo LP em `/lp/[procedimento]` com `noindex`.
- Open Graph com imagem própria (1200×630) por página.
- Dados estruturados: `Physician` ou `MedicalClinic` com nome, especialidade, endereço, telefone e horário; `FAQPage` quando houver FAQ.
- `sitemap.xml` e `robots.txt` (sem as rotas de LP e de prévia).

## Compliance de saúde no site

- CRM e RQE visíveis na faixa de dados e no rodapé.
- Nenhuma afirmação absoluta em texto de imagem, selo ou microtexto que não passou pela revisão.
- Legenda legal em todo antes/depois.
- Aviso no rodapé quando houver imagens de procedimento.
- Aviso de urgência quando o nicho pedir.
- Nenhum elemento de escassez ou pressão.

## Rastreamento (preparação para o Arthur)

- Todo CTA de WhatsApp com `data-cta="whatsapp"`, `data-pagina="[slug]"` e `data-posicao="topo | meio-1 | meio-2 | final | barra-fixa | menu | rodape"`.
- Link de WhatsApp com mensagem pronta por página, sem parâmetros pessoais.
- Nenhum pixel ou script de rastreamento no build.

---

## Checklist final (preencher antes de apresentar)

**Celular**
- [ ] Em 390×664: foto do médico, headline e botão principal inteiros na primeira tela.
- [ ] Em 360px de largura: nada transborda, nenhuma rolagem lateral.
- [ ] Texto corrido com 16px ou mais; nenhuma área de toque abaixo de 44px.
- [ ] Barra fixa surge depois do topo, some na seção final e no rodapé, não cobre conteúdo importante, respeita a área segura.
- [ ] Menu abre, fecha, navega e devolve o foco.
- [ ] Hover nenhum é necessário para ver conteúdo (acordeões e toques funcionam).

**Desktop**
- [ ] Em 1440px: menu flutuante sempre visível com o botão de agendar; sticky e efeitos de rolagem funcionam.
- [ ] Em 768px (tablet): layout não quebra.

**Movimento e robustez**
- [ ] Com movimento reduzido: nada anima em loop, tudo aparece no estado final.
- [ ] Sem JS: todo o texto aparece, links funcionam.
- [ ] Nenhuma decoração sobre texto ou bloqueando clique.
- [ ] No máximo 2 elementos em loop por página.

**Conteúdo e regra**
- [ ] Texto igual ao copy.md aprovado (nenhuma edição sem aviso).
- [ ] Nenhum `[A CONFIRMAR]` ou `[FOTO]` sem estar na lista de pendências.
- [ ] CRM e RQE na faixa de dados e no rodapé; avisos legais onde precisa.
- [ ] Todos os CTAs com mensagem certa por página e os 3 atributos de rastreamento.
- [ ] Modo LP: menu sem links, `noindex`, mesmo conteúdo da página de procedimento.

**Técnico**
- [ ] Lighthouse celular 90+ nas 4 categorias.
- [ ] Imagens otimizadas, com largura/altura e `alt`; topo sem `lazy`.
- [ ] Title, description, Open Graph e dados estruturados por página.
- [ ] Sem erros no console.
- [ ] Contraste AA conferido nos pares de cor usados.

**Identidade**
- [ ] O conceito aparece nos elementos combinados no direcao-visual.md, cada um com função.
- [ ] Cor de ação só nos CTAs.
- [ ] Teste da troca de nome visual: o site não serviria igual para outro médico só trocando a foto.
