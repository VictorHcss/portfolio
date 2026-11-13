import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { Reveal } from "../ui/Reveal";

interface OtherProjectsProps {
  projects: Project[];
  /** Quantidade máxima exibida; sem limite mostra todos. */
  limit?: number;
}

/** Lista compacta de repositórios do GitHub (estudos e experimentos). */
export const OtherProjects = ({ projects, limit }: OtherProjectsProps) => {
  const list = limit ? projects.slice(0, limit) : projects;
  if (list.length === 0) return null;

  return (
    <section aria-labelledby="outros-projetos" className="pb-20 md:pb-28">
      <Reveal className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="outros-projetos" className="text-2xl font-semibold tracking-[-0.03em] text-text md:text-3xl">
            Outros projetos
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted">Estudos e experimentos que marcaram a minha evolução.</p>
      </Reveal>

      <ul className="border-t border-line">
        {list.map((project, i) => (
          <Reveal as="li" key={project.id} delay={Math.min(i, 6) * 0.04} y={12} className="border-b border-line">
            <div className="group relative grid gap-1 py-5 transition-colors duration-300 sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-3 hover:bg-surface/50">
              <span className="hidden font-mono text-xs text-subtle sm:col-span-1 sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-medium tracking-tight text-text sm:col-span-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 focus-visible:outline-none group-has-[:focus-visible]:underline"
                >
                  {project.title}
                  <span className="sr-only"> no GitHub (abre em nova aba)</span>
                </a>
              </h3>
              <p className="line-clamp-2 text-sm text-muted sm:col-span-5">{project.description}</p>
              <div className="mt-2 flex items-center justify-between gap-4 sm:col-span-3 sm:mt-0 sm:justify-end">
                {project.language && (
                  <span className="font-mono text-xs text-subtle">{project.language}</span>
                )}
                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 rounded-sm px-1 py-2.5 font-mono text-xs text-muted transition-colors hover:text-accent"
                    >
                      demo<span className="sr-only"> de {project.title}</span> ↗
                    </a>
                  )}
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="text-subtle transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      {limit && projects.length > limit && (
        <div className="mt-8">
          <Link
            href="/projetos"
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-text"
          >
            Ver todos os projetos
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="text-accent transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      )}
    </section>
  );
};
