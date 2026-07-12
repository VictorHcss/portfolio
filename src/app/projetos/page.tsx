import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Project } from "@/types/project";
import { getGithubRepositories, GithubRepository } from "@/lib/github";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function convertGithubToProject(repo: GithubRepository): Project {
  return {
    id: repo.id,
    title: repo.name,
    description: repo.description || "Projeto desenvolvido para estudos e prática de desenvolvimento.",
    tags: [],
    githubUrl: repo.html_url,
    demoUrl: repo.homepage || "",
    language: repo.language,
  };
}

async function getProjects(): Promise<Project[]> {
  try {
    const repos = await getGithubRepositories();
    return repos.map(convertGithubToProject);
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

export default async function ProjetosPage() {
  const projects = await getProjects();

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 relative min-h-screen">
      <Header nome="VH" />
      <section className="py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Voltar à página principal
        </Link>
        <h1 className="text-3xl font-bold text-white tracking-tight mb-3">
          Todos os projetos
        </h1>
        <p className="text-neutral-400 mb-10">
          Explore todos os projetos desenvolvidos.
        </p>
        <ProjectGrid projects={projects} />
      </section>
      <Footer />
    </main>
  );
}
