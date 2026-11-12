/**
 * Fundo global: gradientes radiais em movimento lento + grade técnica.
 * Apenas CSS (transform/opacity), fixo e fora da árvore de acessibilidade.
 */
export const Background = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
    <div className="absolute -top-[30%] -left-[20%] h-[80vmax] w-[80vmax] animate-aurora rounded-full bg-[radial-gradient(closest-side,rgb(var(--glow)/0.11),transparent)] will-change-transform" />
    <div className="absolute -right-[25%] top-[20%] h-[70vmax] w-[70vmax] animate-aurora-slow rounded-full bg-[radial-gradient(closest-side,rgb(var(--glow)/0.07),transparent)] will-change-transform" />
    <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,black,transparent_70%)]" />
    {/* vinheta para dar profundidade às bordas */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--vignette))]" />
  </div>
);
