import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  as?: "h1" | "h2";
}

/** Cabeçalho de seção: índice técnico em mono, título expressivo e descrição. */
export const SectionHeading = ({ index, eyebrow, title, description, as: Tag = "h2" }: SectionHeadingProps) => (
  <Reveal className="mb-12 md:mb-16">
    <div className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-subtle uppercase">
      <span className="text-secondary">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
      <span>{eyebrow}</span>
    </div>
    <Tag className="max-w-3xl text-[clamp(2.1rem,5.5vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance text-text">
      {title}
    </Tag>
    {description && (
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted md:text-lg">{description}</p>
    )}
  </Reveal>
);
