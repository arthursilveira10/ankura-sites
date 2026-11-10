// Comportamento das pranchas: modo embutido (moldura de celular), progresso das linhas e passos.
(() => {
  const html = document.documentElement;
  html.classList.add('js');
  if (window.self !== window.top) html.classList.add('pr-embutido');
  if (location.search.includes('estatico')) html.classList.add('pr-estatico');
  const ir = new URLSearchParams(location.search).get('ir');
  if (ir) addEventListener('load', () => { const el = document.querySelector(ir); if (el) scrollTo(0, el.getBoundingClientRect().top + scrollY - 40); });

  const linhas = [...document.querySelectorAll('[data-progresso]')];
  const marca = () => {
    const alvo = innerHeight * 0.62;
    for (const el of linhas) {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (alvo - r.top) / r.height));
      el.style.setProperty('--p', p.toFixed(4));
      const passos = [...el.querySelectorAll('[data-passo]')];
      const horizontal = el.dataset.progresso === 'h' && innerWidth > 860;
      passos.forEach((passo, i) => {
        const feito = horizontal
          ? p * passos.length > i + 0.15
          : passo.getBoundingClientRect().top + 12 < alvo;
        passo.classList.toggle('feito', feito);
      });
    }
  };
  let pendente = false;
  addEventListener('scroll', () => {
    if (pendente) return;
    pendente = true;
    requestAnimationFrame(() => { marca(); pendente = false; });
  }, { passive: true });
  addEventListener('resize', marca);
  marca();
})();
