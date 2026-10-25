import { FEATURED_PROJECTS } from "@/data/projects";
import { FeaturedProjectCard } from "../projects/FeaturedProjectCard";

export const FeaturedProjects = () => {
  return (
    <section id="projetos" className="py-14 md:py-16 animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight text-balance">
        Projetos em destaque
      </h2>
      <p className="text-neutral-400 mb-8">
        Aplicações completas, com banco de dados, autenticação e testes automatizados.
      </p>
      <div className="flex flex-col gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <FeaturedProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};
