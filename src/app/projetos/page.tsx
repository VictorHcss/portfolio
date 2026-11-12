import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { OtherProjects } from "@/components/sections/OtherProjects";
import { BackLink } from "@/components/ui/BackLink";
import { getOtherProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Kombexa, Finance.AI, Foodie, Aureon e outros projetos de Victor Henrique.",
  alternates: { canonical: "/projetos" },
};

export default async function ProjetosPage() {
  const otherProjects = await getOtherProjects();

  return (
    <div className="pt-24 md:pt-32 [&>section:first-of-type]:pt-10 md:[&>section:first-of-type]:pt-14">
      <BackLink />
      <Projects standalone />
      <OtherProjects projects={otherProjects} />
    </div>
  );
}
