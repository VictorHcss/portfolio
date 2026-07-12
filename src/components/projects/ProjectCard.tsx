import { Project } from "@/types/project";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="min-h-[180px] p-5 bg-neutral-900/60 border border-neutral-800 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/70 hover:border-neutral-600 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg text-white">{project.title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.language && (
            <span key={project.language} className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-full border border-neutral-700">
              {project.language}
            </span>
          )}
        </div>
      </div>
      <div className="flex gap-4 pt-3">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors">
          <GithubIcon width={16} height={16} />
          GitHub
        </a>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
