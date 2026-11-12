import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { FeaturedProject } from "@/types/project";
import { GithubIcon } from "../icons/GithubIcon";
import { Reveal } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";
import { StageBadge } from "./StageBadge";

interface ProjectCaseProps {
  project: FeaturedProject;
  index: number;
  /** Primeira imagem da página: carrega com prioridade. */
  priority?: boolean;
}

const hostOf = (url?: string) => (url ? new URL(url).host : "localhost");

export const ProjectCase = ({ project, index, priority = false }: ProjectCaseProps) => {
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="article" className="scroll-mt-28" y={40}>
      <SpotlightCard
        id={project.slug}
        className="group surface-card overflow-hidden rounded-lg transition-[border-color,box-shadow] duration-500 ease-out-expo hover:border-line-strong"
      >
        <div className="grid lg:grid-cols-12">
          {/* Captura real em moldura de navegador */}
          <div
            className={`relative p-3 sm:p-5 lg:col-span-7 lg:p-6 ${reversed ? "lg:order-2 lg:pl-0" : "lg:pr-0"}`}
          >
            <div className="overflow-hidden rounded-md border border-line-strong bg-bg-deep shadow-[0_30px_60px_-30px_rgb(var(--shadow)/var(--shadow-alpha))]">
              <div className="flex items-center gap-3 border-b border-line px-3 py-2.5">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-surface-3" />
                  <span className="size-2.5 rounded-full bg-surface-3" />
                  <span className="size-2.5 rounded-full bg-surface-3" />
                </div>
                <span className="truncate rounded-sm bg-surface px-2.5 py-0.5 font-mono text-[11px] text-subtle">
                  {hostOf(project.demoUrl)}
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  priority={priority}
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>
          </div>

          {/* Identidade do projeto */}
          <div
            className={`flex flex-col p-6 sm:p-8 lg:col-span-5 lg:p-10 ${reversed ? "lg:order-1" : ""}`}
          >
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-subtle uppercase">
              <span className="text-secondary">{number}</span>
              <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
              <span>{project.kind}</span>
            </div>

            <h3 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-text md:text-5xl">{project.title}</h3>
            <p className="mt-3">
              <StageBadge stage={project.stage}>{project.status}</StageBadge>
            </p>

            <p className="mt-5 leading-relaxed text-pretty text-muted">{project.summary}</p>

            {project.metric && (
              <p className="mt-6 flex items-baseline gap-3 border-l-2 border-primary pl-4">
                <span className="text-3xl font-semibold tracking-[-0.04em] text-accent">{project.metric.value}</span>
                <span className="text-sm text-muted">{project.metric.label}</span>
              </p>
            )}

            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-8">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-text"
                >
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom-left bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-out-expo group-hover/link:bg-[length:100%_1px]">
                    {project.demoLabel ?? "Ver demonstração"}
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="text-accent transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                  <span className="sr-only"> de {project.title} (abre em nova aba)</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-text"
              >
                <GithubIcon width={16} height={16} aria-hidden="true" />
                Código no GitHub
                <span className="sr-only"> de {project.title} (abre em nova aba)</span>
              </a>
            </div>
          </div>
        </div>

        {/* O que o projeto demonstra tecnicamente */}
        <div className="border-t border-line">
          <dl className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {project.pillars.map((pillar) => (
              <div key={pillar.label} className="bg-surface p-6 sm:p-7">
                <dt className="font-mono text-[11px] tracking-[0.14em] text-secondary uppercase">{pillar.label}</dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-pretty text-muted">{pillar.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-5 border-t border-line p-6 sm:p-7 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <ul className="space-y-1.5 text-sm text-text/85" aria-label={`Outras funcionalidades de ${project.title}`}>
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-[0.55em] size-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-1.5 lg:max-w-md lg:justify-end" aria-label={`Tecnologias de ${project.title}`}>
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-sm border border-line bg-surface-2/60 px-2 py-1 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:border-line-strong"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {project.note && (
          <p className="flex gap-2 border-t border-line bg-surface-2/50 px-6 py-3.5 text-xs leading-relaxed text-muted sm:px-7">
            <span aria-hidden="true" className="font-mono text-secondary">i</span>
            {project.note}
          </p>
        )}
      </SpotlightCard>
    </Reveal>
  );
};
