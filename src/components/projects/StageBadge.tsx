import type { ProjectStage } from "@/types/project";

export const STAGES: Record<ProjectStage, { label: string; dot: string; ring: string }> = {
  functional: {
    label: "Funcional",
    dot: "bg-success",
    ring: "border-success/30 bg-success/10",
  },
  development: {
    label: "Em desenvolvimento",
    dot: "bg-brand animate-pulse",
    ring: "border-brand/35 bg-brand/10",
  },
  concept: {
    label: "Conceitual",
    dot: "border border-secondary bg-transparent",
    ring: "border-line-strong bg-surface-2",
  },
};

interface StageBadgeProps {
  stage: ProjectStage;
  /** Texto detalhado; sem ele, mostra apenas o rótulo do estágio. */
  children?: React.ReactNode;
}

export const StageBadge = ({ stage, children }: StageBadgeProps) => {
  const s = STAGES[stage];
  return (
    <span className={`inline-flex w-fit items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] text-text ${s.ring}`}>
      <span className={`size-1.5 shrink-0 rounded-full ${s.dot}`} aria-hidden="true" />
      <span className="sr-only">Status: </span>
      {children ?? s.label}
    </span>
  );
};

/** Legenda dos estágios exibida acima dos projetos. */
export const StageLegend = () => (
  <ul className="flex flex-wrap gap-2" aria-label="Legenda de status dos projetos">
    {(Object.keys(STAGES) as ProjectStage[]).map((stage) => (
      <li key={stage}>
        <StageBadge stage={stage} />
      </li>
    ))}
  </ul>
);
