# _template: site-base da Ankura

Astro 7 + Tailwind 4, saída estática. Demo: **Dr. Arthur Silveira [FICTÍCIO]**, dermatologia, direção "Luz de janela" (prancha G de `public/pranchas/`).
Como usar num cliente: `.claude/skills/site-build/references/template.md`.

## Comandos

```bash
npm install        # primeira vez
npm run dev        # desenvolvimento em http://localhost:4321 (prancha em /previa)
npm run check      # confere tipos e conteúdo
npm run build      # gera a pasta dist/ (a prancha /previa fica de fora)
npm run preview    # serve o dist/ para testar
```

## Onde fica cada coisa

| O quê | Onde |
|---|---|
| Endereço do site e fontes | `cliente.config.mjs` |
| Cores, raios, recorte da foto | `src/styles/tema.css` |
| Dados do médico (CRM, endereço, horários, WhatsApp) | `src/content/medico/medico.yaml` |
| Páginas e seções (texto da copy) | `src/content/paginas/*.yaml` (`home.yaml` + um arquivo por procedimento) |
| Fotos | `src/assets/` (referenciadas nos .yaml) |
| Elementos do conceito do cliente | `src/components/conceito/` |
| Seções (não muda por cliente) | `src/components/secoes/` |
| Régua de medidas e animações (não muda por cliente) | `src/styles/global.css`, `src/styles/movimento.css` |
| Regras de formato do conteúdo | `src/content.config.ts` |
| Direção visual aprovada | `direcao-visual.md` |
| Publicação na Cloudflare | `wrangler.jsonc` |

## Endereços gerados

- `/` home
- `/[procedimento]` uma página por arquivo em `src/content/paginas/` com `tipo: procedimento`
- `/lp/[procedimento]` modo LP (menu sem links, `noindex`), destino dos anúncios
- `/previa` prancha de estilo (só em desenvolvimento)
- `/pranchas/a.html` a `g.html` as pranchas de direção do demo (só em desenvolvimento; `?estatico` desliga as animações)
