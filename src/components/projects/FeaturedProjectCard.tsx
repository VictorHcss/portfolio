import { ExternalLink } from "lucide-react";
import type { FeaturedProject } from "@/types/project";
import { GithubIcon } from "../icons/GithubIcon";

export const FeaturedProjectCard = ({ project }: { project: FeaturedProject }) => {
  return (
    <article
      id={project.slug}
      className="p-5 md:p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl flex flex-col gap-5"
    >
      <header className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
          <span className="text-xs text-neutral-300 bg-neutral-800 border border-neutral-700 px-2.5 py-1 rounded-full">
            {project.status}
          </span>
        </div>
        <p className="text-neutral-300 leading-relaxed">{project.summary}</p>
      </header>

      <p className="text-neutral-400 text-sm leading-relaxed">{project.problem}</p>

      <ul className="list-disc pl-5 space-y-1.5 text-sm text-neutral-300">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {project.note && (
        <p className="text-xs text-neutral-400 border-l-2 border-neutral-700 pl-3">{project.note}</p>
      )}

      <ul className="flex flex-wrap gap-2" aria-label={`Tecnologias de ${project.title}`}>
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-full border border-neutral-700"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-5 pt-1">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        >
          <GithubIcon width={16} height={16} />
          Código no GitHub
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <ExternalLink size={16} />
            Ver demonstração
          </a>
        )}
      </div>
    </article>
  );
};
