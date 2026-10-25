import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectGrid } from "../projects/ProjectGrid";
import { Project } from "@/types/project";

interface ProjectsPreviewProps {
  projects: Project[];
}

export const ProjectsPreview = ({ projects }: ProjectsPreviewProps) => {
  const previewProjects = projects.slice(0, 4);
  if (previewProjects.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-3 text-white tracking-tight">Outros projetos</h2>
      <p className="text-neutral-400 mb-8">Estudos e experimentos que ajudaram na minha evolução.</p>
      <ProjectGrid projects={previewProjects} />
      <div className="mt-10 flex justify-center">
        <Link
          href="/projetos"
          className="flex items-center gap-2 px-8 py-3 bg-neutral-900/70 text-white font-semibold rounded-full border border-neutral-700 transition-all duration-300 hover:bg-neutral-800 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
        >
          Ver todos os projetos
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};
