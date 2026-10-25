import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export const ProjectGrid = ({ projects, className = "" }: ProjectGridProps) => {
  return (
    <div
      className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
