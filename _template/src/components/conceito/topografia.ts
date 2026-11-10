// CONCEITO "Leitura da pele" (demo): gera curvas de nível em SVG no build. Determinístico (mesma semente, mesmo desenho).

type P = [number, number];

function rng(semente: number) {
  let s = semente >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** Caminho suave fechado ou aberto por Catmull-Rom. */
function suave(pts: P[], fechado: boolean): string {
  const n = pts.length;
  const p = (i: number) => (fechado ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  const fim = fechado ? n : n - 1;
  for (let i = 0; i < fim; i++) {
    const [p0, p1, p2, p3] = [p(i - 1), p(i), p(i + 1), p(i + 2)];
    const c1: P = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: P = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return fechado ? d + 'Z' : d;
}

/** Curvas de nível fechadas ao redor de um centro (como um morro visto de cima). */
export function curvasFechadas(opts: { cx: number; cy: number; raio: number; niveis: number; semente?: number; irregular?: number }): string[] {
  const { cx, cy, raio, niveis, semente = 7, irregular = 0.16 } = opts;
  const r = rng(semente);
  const fases = Array.from({ length: 4 }, () => r() * Math.PI * 2);
  const amps = [irregular, irregular * 0.6, irregular * 0.35, irregular * 0.2];
  const freqs = [2, 3, 5, 7];
  const caminhos: string[] = [];
  for (let k = 1; k <= niveis; k++) {
    const base = (raio * k) / niveis;
    const deriva = k / niveis; // as curvas externas ficam mais irregulares
    const pts: P[] = [];
    const passos = 28;
    for (let i = 0; i < passos; i++) {
      const t = (i / passos) * Math.PI * 2;
      let f = 1;
      for (let j = 0; j < 4; j++) f += amps[j] * deriva * Math.sin(freqs[j] * t + fases[j] + k * 0.35);
      pts.push([cx + Math.cos(t) * base * f * 1.08, cy + Math.sin(t) * base * f]);
    }
    caminhos.push(suave(pts, true));
  }
  return caminhos;
}

/** Linhas abertas e onduladas (faixa de curvas de nível), para divisores. */
export function curvasAbertas(opts: { largura: number; altura: number; linhas: number; semente?: number }): string[] {
  const { largura, altura, linhas, semente = 3 } = opts;
  const r = rng(semente);
  const fases = Array.from({ length: 3 }, () => r() * Math.PI * 2);
  const caminhos: string[] = [];
  for (let k = 0; k < linhas; k++) {
    const y0 = (altura * (k + 0.5)) / linhas;
    const pts: P[] = [];
    const passos = 16;
    for (let i = 0; i <= passos; i++) {
      const x = (largura * i) / passos;
      const t = (i / passos) * Math.PI * 2;
      const y = y0 + altura * 0.12 * Math.sin(t * 1.3 + fases[0] + k * 0.25) + altura * 0.06 * Math.sin(t * 2.7 + fases[1] - k * 0.4);
      pts.push([x, y]);
    }
    caminhos.push(suave(pts, false));
  }
  return caminhos;
}
