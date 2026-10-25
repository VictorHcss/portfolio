import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { FEATURED_PROJECTS } from "@/data/projects";
import { getOtherProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Kombexa, Finance.AI, Foodie e outros projetos de Victor Henrique.",
};

export default async function ProjetosPage() {
  const otherProjects = await getOtherProjects();

  return (
    <main id="conteudo" className="max-w-6xl mx-auto px-4 sm:px-6 relative min-h-screen">
      <Header nome="VH" />
      <section className="py-14 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Voltar à página principal
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 text-balance">Projetos</h1>
        <p className="text-neutral-400 mb-10">
          Os três primeiros são os mais completos. Os demais são estudos e experimentos.
        </p>
        <div className="flex flex-col gap-8 mb-16">
          {FEATURED_PROJECTS.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {otherProjects.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-8">Outros projetos</h2>
            <ProjectGrid projects={otherProjects} />
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
