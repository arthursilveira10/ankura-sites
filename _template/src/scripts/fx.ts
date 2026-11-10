// Todo o JS do site. Um observer de entrada, um listener de rolagem e pequenos comportamentos.
// O HTML funciona sem este arquivo (ver movimento.css).

const reduzido = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- entradas ao rolar ----------
const revelaveis = document.querySelectorAll<HTMLElement>('[data-revela], [data-revela-foto], [data-desenha]');
if (reduzido || !('IntersectionObserver' in window)) {
  revelaveis.forEach((el) => el.classList.add('visivel'));
} else {
  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) {
          e.target.classList.add('visivel');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
  );
  revelaveis.forEach((el) => io.observe(el));
}

// ---------- progresso de rolagem (--p de 0 a 1) ----------
// data-progresso="centro": 0 quando o topo do elemento entra pela base da tela, 1 quando a base dele passa do centro.
const progressivos = [...document.querySelectorAll<HTMLElement>('[data-progresso]')];

// ---------- header e barra fixa ----------
const header = document.querySelector<HTMLElement>('[data-header]');
let ultimoY = scrollY;

function aoRolar() {
  const vh = innerHeight;
  if (!reduzido) {
    for (const el of progressivos) {
      const r = el.getBoundingClientRect();
      const inicio = vh * 0.85;
      const fim = vh * 0.45 - r.height;
      const p = Math.min(1, Math.max(0, (inicio - r.top) / (inicio - fim)));
      el.style.setProperty('--p', p.toFixed(3));
    }
  }
  if (header) {
    const y = scrollY;
    header.dataset.rolado = y > 24 ? 'sim' : 'nao';
    const celular = innerWidth < 1024;
    const menuAberto = document.documentElement.dataset.menu === 'aberto';
    header.dataset.oculto = celular && !menuAberto && y > ultimoY && y > 240 ? 'sim' : 'nao';
    ultimoY = y;
  }
}

let agendado = false;
addEventListener(
  'scroll',
  () => {
    if (!agendado) {
      agendado = true;
      requestAnimationFrame(() => {
        aoRolar();
        agendado = false;
      });
    }
  },
  { passive: true },
);
addEventListener('resize', aoRolar);
aoRolar();

// Barra fixa de CTA: aparece depois do topo, some no CTA final e no rodapé.
const barra = document.querySelector<HTMLElement>('[data-barra-cta]');
const topo = document.querySelector('[data-topo]');
const finais = document.querySelectorAll('[data-esconde-barra]');
if (barra && topo && 'IntersectionObserver' in window) {
  let topoVisivel = true;
  const finaisVisiveis = new Set<Element>();
  const atualizar = () => {
    barra.dataset.visivel = !topoVisivel && finaisVisiveis.size === 0 ? 'sim' : 'nao';
  };
  new IntersectionObserver(([e]) => {
    topoVisivel = e.isIntersecting;
    atualizar();
  }).observe(topo);
  const ioFinais = new IntersectionObserver((es) => {
    for (const e of es) e.isIntersecting ? finaisVisiveis.add(e.target) : finaisVisiveis.delete(e.target);
    atualizar();
  });
  finais.forEach((f) => ioFinais.observe(f));
}

// ---------- menu do celular ----------
const botaoMenu = document.querySelector<HTMLButtonElement>('[data-botao-menu]');
const painel = document.querySelector<HTMLElement>('[data-painel-menu]');
if (botaoMenu && painel) {
  const definir = (aberto: boolean) => {
    botaoMenu.setAttribute('aria-expanded', String(aberto));
    document.documentElement.dataset.menu = aberto ? 'aberto' : 'fechado';
    painel.inert = !aberto;
    if (aberto) painel.querySelector<HTMLElement>('a, button')?.focus();
  };
  painel.inert = true;
  botaoMenu.addEventListener('click', () => definir(botaoMenu.getAttribute('aria-expanded') !== 'true'));
  painel.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) definir(false);
  });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.documentElement.dataset.menu === 'aberto') {
      definir(false);
      botaoMenu.focus();
    }
  });
}

// ---------- antes e depois ----------
document.querySelectorAll<HTMLElement>('[data-antes-depois]').forEach((caixa) => {
  const range = caixa.querySelector<HTMLInputElement>('input[type="range"]');
  range?.addEventListener('input', () => caixa.style.setProperty('--corte', `${range.value}%`));
});
