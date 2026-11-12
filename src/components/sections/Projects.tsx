import { FEATURED_PROJECTS } from "@/data/projects";
import { ProjectCase } from "../projects/ProjectCase";
import { StageLegend } from "../projects/StageBadge";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

interface ProjectsProps {
  /** Na página /projetos o título vira o h1. */
  standalone?: boolean;
}

export const Projects = ({ standalone = false }: ProjectsProps) => (
  <section id="projetos" aria-label="Projetos em destaque" className="scroll-mt-24 py-20 md:py-32">
    <SectionHeading
      as={standalone ? "h1" : "h2"}
      index="01"
      eyebrow="Projetos selecionados"
      title={
        <>
          Ideias que viraram <span className="text-gradient">software de verdade.</span>
        </>
      }
      description="Quatro projetos próprios, cada um com o seu status real: o que já funciona, o que ainda está em construção e o que é um estudo de interface."
    />
    <Reveal className="-mt-6 mb-10 md:-mt-8 md:mb-14">
      <StageLegend />
    </Reveal>
    <div className="flex flex-col gap-10 md:gap-14">
      {FEATURED_PROJECTS.map((project, i) => (
        <ProjectCase key={project.slug} project={project} index={i} />
      ))}
    </div>
  </section>
);
