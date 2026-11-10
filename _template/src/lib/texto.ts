// Utilidades de texto e links. Todo texto vem do conteúdo (copy aprovada); aqui só formatamos.

const escapar = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** **palavra** vira a palavra-chave em destaque do título. */
export function titulo(s: string): string {
  return escapar(s).replace(/\*\*(.+?)\*\*/g, '<span class="chave">$1</span>');
}

/** **negrito** em texto corrido. */
export function inline(s: string): string {
  return escapar(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

/** Parágrafos separados por linha em branco. */
export function paragrafos(s?: string): string[] {
  if (!s) return [];
  return s
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map(inline);
}

/** Link do WhatsApp com mensagem pronta. */
export function linkWhatsApp(numero: string, mensagem: string): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

/** Quebra uma frase em palavras para o text reveal (sem JS no navegador). */
export function palavras(frase: string): string[] {
  return frase.trim().split(/\s+/);
}

/** Texto sem marcações (para atributos, SEO). */
export function limpo(s: string): string {
  return s.replace(/\*\*/g, '');
}
