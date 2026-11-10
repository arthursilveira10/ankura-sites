/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    /** Contexto da página atual, definido pela página antes de renderizar os componentes. */
    ctx?: {
      pagina: string; // slug usado no rastreamento (home, melasma, ...)
      whatsapp: string; // link completo com a mensagem pronta da página
      modoLP: boolean;
    };
  }
}
