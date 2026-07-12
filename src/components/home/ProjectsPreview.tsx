import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectGrid } from "../projects/ProjectGrid";
import { Project } from "@/types/project";

interface ProjectsPreviewProps {
  projects: Project[];
}

export const ProjectsPreview = ({ projects }: ProjectsPreviewProps) => {
  const previewProjects = projects.slice(0, 8);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">Projetos</h2>
      <ProjectGrid projects={previewProjects} />
      {projects.length > 8 && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/projetos"
            className="flex items-center gap-2 px-8 py-3 bg-neutral-900/70 text-white font-semibold rounded-full border border-neutral-700 transition-all duration-300 hover:bg-neutral-800 hover:border-white/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            Ver todos os projetos
            <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </section>
  );
};
