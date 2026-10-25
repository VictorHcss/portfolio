import { FEATURED_PROJECTS } from "@/data/projects";
import { FeaturedProjectCard } from "../projects/FeaturedProjectCard";

export const FeaturedProjects = () => {
  return (
    <section id="projetos" className="py-16">
      <h2 className="text-3xl font-bold mb-3 text-white tracking-tight">Projetos em destaque</h2>
      <p className="text-neutral-400 mb-10">
        Três projetos que mostram o que sei fazer, do banco de dados à interface.
      </p>
      <div className="flex flex-col gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <FeaturedProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};
