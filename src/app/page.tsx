import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/types/project";
import { Skills } from "@/components/Skills";

export default function Home() {
  const minhasHabilides = [
    "HTML",
    "JS",
    "CSS",
    "PHP",
    "Python",
    "MySQL",
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Git",
  ];
  const projects: Project[] = [
    {
      id: 1,
      title: "Foodie",
      description:
        "Aplicação web desenvolvida com Next.js para descobrir e explorar restaurantes.",
      tags: ["React", "Typescript"],
      githubUrl: "https://github.com/VictorHcss/foodie",
      demoUrl: "https://foodie-neon-five.vercel.app",
    },
    {
      id: 2,
      title: "Finance AI",
      description:
        "A personal finance management tool that helps you track expenses and organize your finances using AI",
      tags: ["React", "Typescript", "Python"],
      githubUrl: "https://github.com/VictorHcss/finance-ai",
      demoUrl: "",
    },
    {
      id: 3,
      title: "Cassette Player",
      description:
        "Um toca-fitas retrô desenvolvido em Python com interface gráfica inspirada nos aparelhos clássicos dos anos 80 e 90.",
      tags: ["Python", "Pathlib"],
      githubUrl: "https://github.com/VictorHcss/cassette-player-py",
      demoUrl: "",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4">
      <Header nome="VH" />

      <Skills tecnologias={minhasHabilides} />

      <h2 className="text-2xl font-bold mb-6">Projetos</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </main>
  );
}
