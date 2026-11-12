import { Reveal } from "../ui/Reveal";

/**
 * "Além do código": uma parte pessoal da identidade, apresentada de forma
 * discreta — gradiente lavanda, serifa refinada e nenhum elemento gráfico extra.
 */
export const BeyondCode = () => (
  <section aria-labelledby="alem-do-codigo" className="py-16 md:py-24">
    <Reveal y={32}>
      <figure className="relative isolate overflow-hidden rounded-lg border border-brand/25 px-6 py-14 text-center shadow-soft sm:px-12 md:py-20">
        {/* gradiente lavanda em movimento lento */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-gradient bg-[linear-gradient(120deg,color-mix(in_srgb,var(--lavender)_42%,var(--surface))_0%,var(--surface)_45%,color-mix(in_srgb,var(--brand)_22%,var(--surface))_100%)] bg-[length:200%_200%]"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -z-10 h-full w-2/3 -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(var(--glow)/0.22),transparent)]"
        />

        <blockquote className="mx-auto max-w-3xl">
          <p className="font-serif text-[clamp(1.6rem,4.4vw,2.9rem)] leading-[1.18] tracking-[-0.01em] text-balance text-text italic">
            “E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e
            não aos homens.”
          </p>
        </blockquote>
        <figcaption className="mt-6 font-mono text-xs tracking-[0.16em] text-muted uppercase">
          Colossenses 3:23
        </figcaption>
      </figure>
    </Reveal>
  </section>
);
