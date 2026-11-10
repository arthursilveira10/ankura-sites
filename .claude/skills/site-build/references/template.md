# Como usar o _template

> **Em construção (Fase 4, Etapa 4).** Este arquivo será completado quando o `_template/` estiver pronto, com a estrutura real de pastas, os nomes dos componentes e os comandos. Até lá, vale o que está abaixo como contrato do que o template precisa oferecer.

## O que o template entrega

- Astro + Tailwind v4, saída estática.
- **Tema** do cliente num arquivo só (tokens de cor, fontes, raios, textura), seguindo os papéis de `direcao-visual.md`.
- **Conteúdo** em arquivos de dados com schema (limite de caracteres, proporção de imagem), separado dos componentes. Campos operacionais marcados para o editor (CMS).
- Componentes de `componentes.md` com as variantes descritas lá.
- Páginas: home, página de procedimento (gerada a partir dos dados de cada procedimento) e modo LP de cada procedimento (`/lp/[slug]`, `noindex`).
- Componente de botão de WhatsApp que monta o link com a mensagem da página e os atributos de rastreamento.
- Rota de prévia para a prancha de estilo, fora da publicação.
- Configuração de publicação para Cloudflare e instruções para outras hospedagens.
- Demo: Dr. Arthur Silveira [FICTÍCIO], dermatologia, home + 2 procedimentos + modo LP.

## Fluxo previsto para um cliente novo

1. Copiar `_template/` para `sites/[cliente-pagina]/site/` (sem `node_modules` e sem a pasta de build).
2. Criar o repositório privado do cliente no GitHub (o Arthur cria vazio; Claude conecta e envia).
3. Instalar dependências e rodar em modo de desenvolvimento.
4. Substituir o tema e o conteúdo do demo pelos do cliente.
5. Remover componentes e variantes que o mapa de componentes não usa.
6. Verificar (checklist) e publicar a prévia.
