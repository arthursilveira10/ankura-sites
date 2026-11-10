// Todo o JS do site. Um observer de entrada, um listener de rolagem e pequenos comportamentos.
// O HTML funciona sem este arquivo (ver movimento.css).
import Lenis from 'lenis';

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

// ---------- o sol que percorre os passos (data-sol) ----------
// Anda do primeiro ao último marcador e acende cada passo por onde passa. Ponto de referência: 55% da tela.
const sois = [...document.querySelectorAll<HTMLElement>('[data-sol]')].map((lista) => {
  const passos = [...lista.querySelectorAll<HTMLElement>('[data-passo]')];
  const sol = lista.querySelector<HTMLElement>('.sol');
  const aceso = lista.querySelector<HTMLElement>('.aceso');
  const trilho = lista.querySelector<HTMLElement>('.trilho');
  const MARCA = 15.5; // centro do marcador em relação ao topo do passo
  let ini = 0;
  let fim = 0;
  const medir = () => {
    if (!passos.length) return;
    ini = passos[0].offsetTop + MARCA;
    fim = passos[passos.length - 1].offsetTop + MARCA;
    for (const el of [trilho, aceso]) {
      if (!el) continue;
      el.style.top = `${ini}px`;
      el.style.height = `${fim - ini}px`;
    }
  };
  const quadro = () => {
    const y = reduzido ? fim : Math.min(fim, Math.max(ini, innerHeight * 0.55 - lista.getBoundingClientRect().top));
    if (sol) sol.style.transform = `translateY(${y}px)`;
    if (aceso) aceso.style.transform = `scaleY(${(y - ini) / (fim - ini || 1)})`;
    passos.forEach((p) => p.classList.toggle('feito', p.offsetTop + MARCA <= y + 1));
  };
  medir();
  addEventListener('resize', medir);
  document.fonts?.ready.then(() => {
    medir();
    quadro();
  });
  return { quadro };
});

// ---------- header e barra fixa ----------
const header = document.querySelector<HTMLElement>('[data-header]');
let ultimoY = scrollY;

function aoRolar() {
  const vh = innerHeight;
  sois.forEach((s) => s.quadro());
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
    if (!celular || menuAberto || y < 90 || y < ultimoY - 4) header.dataset.oculto = 'nao';
    else if (y > ultimoY + 4) header.dataset.oculto = 'sim';
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

// ---------- lista de tratamentos: no desktop abre ao passar o mouse ----------
if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll<HTMLDetailsElement>('[data-abre-no-hover] details').forEach((d) => {
    d.querySelector('summary')?.addEventListener('mouseenter', () => {
      if (!d.open) d.open = true;
    });
  });
}

// ---------- scroll suave: só desktop com mouse e sem movimento reduzido ----------
if (!reduzido && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const lenis = new Lenis({ lerp: 0.12 });
  const raf = (t: number) => {
    lenis.raf(t);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

// ---------- faixa de depoimentos: rola sozinha no desktop, para no mouse, arrasta ----------
document.querySelectorAll<HTMLElement>('[data-carrossel]').forEach((trilho) => {
  const lista = trilho.firstElementChild as HTMLElement | null;
  if (!lista) return;
  const metade = () => lista.scrollWidth / 2;
  let parado = false;
  let arrastando = false;
  let inicioX = 0;
  let inicioScroll = 0;
  const mouse = matchMedia('(hover: hover) and (pointer: fine)').matches;
  trilho.addEventListener('mouseenter', () => (parado = true));
  trilho.addEventListener('mouseleave', () => {
    parado = false;
    arrastando = false;
    trilho.classList.remove('arrastando');
  });
  trilho.addEventListener('focusin', () => (parado = true));
  trilho.addEventListener('focusout', () => (parado = false));
  trilho.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    arrastando = true;
    inicioX = e.clientX;
    inicioScroll = trilho.scrollLeft;
    trilho.classList.add('arrastando');
  });
  addEventListener('pointerup', () => {
    arrastando = false;
    trilho.classList.remove('arrastando');
  });
  trilho.addEventListener('pointermove', (e) => {
    if (arrastando) trilho.scrollLeft = inicioScroll - (e.clientX - inicioX);
  });
  // laço contínuo: o conteúdo está duplicado; ao passar da metade, volta para o começo sem salto visível
  trilho.addEventListener('scroll', () => {
    const m = metade();
    if (trilho.scrollLeft >= m) trilho.scrollLeft -= m;
    else if (trilho.scrollLeft <= 0 && arrastando) trilho.scrollLeft += m;
  }, { passive: true });
  if (reduzido || !mouse) return;
  let ultimo = 0;
  let pos = trilho.scrollLeft;
  const passo = (t: number) => {
    const dt = ultimo ? Math.min(64, t - ultimo) : 16;
    ultimo = t;
    if (parado || arrastando) pos = trilho.scrollLeft;
    else {
      pos += dt * 0.035; // ~35px por segundo
      const m = metade();
      if (pos >= m) pos -= m;
      trilho.scrollLeft = pos;
    }
    requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
});
