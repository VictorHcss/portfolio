import { STACK_GROUPS, type StackGroup } from "@/data/stack";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { SpotlightCard } from "../ui/SpotlightCard";
import { TechIcon } from "../ui/TechIcon";

/** Distribuição no grid de 6 colunas (desktop): 3+3 / 2+2+2 / 6. */
const SPAN: Record<string, string> = {
  frontend: "lg:col-span-3",
  backend: "lg:col-span-3",
  database: "lg:col-span-2",
  quality: "lg:col-span-2",
  studying: "md:col-span-2 lg:col-span-2",
  tools: "md:col-span-2 lg:col-span-6",
};

const LIST_COLS: Record<string, string> = {
  frontend: "sm:grid-cols-2",
  backend: "sm:grid-cols-2",
  tools: "sm:grid-cols-2 lg:grid-cols-4",
};

const GroupCard = ({ group }: { group: StackGroup }) => {
  const studying = group.kind === "studying";
  return (
    <SpotlightCard
      className={`h-full rounded-lg p-6 transition-colors duration-500 sm:p-7 ${
        studying
          ? "border border-dashed border-brand/40 bg-gradient-to-br from-lavender/25 via-surface to-surface shadow-soft"
          : "surface-card hover:border-line-strong"
      }`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-[-0.02em] text-text">{group.label}</h3>
        <span className="font-mono text-[11px] text-subtle">
          {studying ? "estudando" : String(group.items.length).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted">{group.caption}</p>

      <ul className={`mt-6 grid gap-2 ${LIST_COLS[group.id] ?? ""}`}>
        {group.items.map((tech) => (
          <li
            key={tech.name}
            className="group/tech -mx-2 flex items-start gap-3 rounded-md border border-transparent p-2 transition-colors duration-300 hover:border-line hover:bg-surface-2/70"
          >
            <span
              className={`grid size-9 shrink-0 place-items-center rounded-md border text-muted transition-[color,transform,border-color,box-shadow] duration-300 ease-out-expo group-hover/tech:-translate-y-0.5 group-hover/tech:-rotate-6 group-hover/tech:border-brand/40 group-hover/tech:text-accent group-hover/tech:shadow-[0_8px_20px_-8px_rgb(var(--glow)/0.7)] ${
                studying ? "border-dashed border-brand/40 bg-surface" : "border-line bg-bg-deep"
              }`}
            >
              <TechIcon icon={tech.icon} size={17} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-text">{tech.name}</span>
              <span className="block text-xs leading-relaxed text-subtle">{tech.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
};

export const Stack = () => (
  <section id="stack" aria-label="Stack tecnológica" className="scroll-mt-24 py-20 md:py-32">
    <SectionHeading
      index="03"
      eyebrow="Tecnologias e habilidades"
      title={
        <>
          Ferramentas que uso <span className="text-gradient">para construir de ponta a ponta.</span>
        </>
      }
      description="Sem barras de porcentagem: só o que aparece de verdade nos meus projetos — e, separado, o que ainda estou estudando."
    />

    <Reveal className="-mt-6 mb-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted md:-mt-8">
      <span className="flex items-center gap-2">
        <span aria-hidden="true" className="size-3 rounded-sm border border-line-strong bg-surface-3" />
        Em uso nos projetos
      </span>
      <span className="flex items-center gap-2">
        <span aria-hidden="true" className="size-3 rounded-sm border border-dashed border-brand/60 bg-lavender/30" />
        Estudando e explorando
      </span>
    </Reveal>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
      {STACK_GROUPS.map((group, i) => (
        <Reveal key={group.id} delay={(i % 3) * 0.08} className={SPAN[group.id]}>
          <GroupCard group={group} />
        </Reveal>
      ))}
    </div>
  </section>
);
