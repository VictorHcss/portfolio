import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { SkillsSection } from "@/components/home/SkillsSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { Contact } from "@/components/home/Contact";
import { getOtherProjects } from "@/lib/projects";

export default async function Home() {
  const otherProjects = await getOtherProjects();

  return (
    <main id="conteudo" className="max-w-6xl mx-auto px-4 md:px-6 relative">
      <Header nome="VH" />
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <About />
      <ProjectsPreview projects={otherProjects} />
      <Contact />
      <Footer />
    </main>
  );
}
