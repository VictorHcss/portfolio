import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { OtherProjects } from "@/components/sections/OtherProjects";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { Contact } from "@/components/sections/Contact";
import { getOtherProjects } from "@/lib/projects";

export default async function Home() {
  const otherProjects = await getOtherProjects();

  return (
    <>
      <Hero />
      <Projects />
      <OtherProjects projects={otherProjects} limit={5} />
      <About />
      <Stack />
      <BeyondCode />
      <Contact />
    </>
  );
}
