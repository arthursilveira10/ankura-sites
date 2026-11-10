// Nomes dos ícones de base/Icone.astro (também aceitos no conteúdo, no campo "icone").
export const icones = [
  'whatsapp', 'seta', 'seta-baixo', 'mais', 'instagram', 'local', 'relogio', 'menu', 'fechar', 'estrela',
  'cracha', 'selo', 'porta', 'online', 'chapeu', 'calendario', 'frasco', 'sol', 'rosto', 'conversa', 'lupa', 'coracao',
] as const;
export type IconeNome = (typeof icones)[number];
