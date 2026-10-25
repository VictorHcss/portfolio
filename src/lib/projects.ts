import type { Project } from "@/types/project";
import { getGithubRepositories } from "@/lib/github";
import { FALLBACK_OTHER_PROJECTS, isFeaturedRepo } from "@/data/projects";

/** Demais projetos: vêm do GitHub; se a API falhar, usa a lista fixa. */
export async function getOtherProjects(): Promise<Project[]> {
  try {
    const repos = await getGithubRepositories();
    const projects = repos
      .filter((repo) => !isFeaturedRepo(repo.name))
      .map<Project>((repo) => ({
        id: repo.id,
        title: repo.name,
        description: repo.description || "Projeto de estudo e prática de desenvolvimento.",
        tags: [],
        githubUrl: repo.html_url,
        demoUrl: repo.homepage || "",
        language: repo.language,
      }));
    return projects.length > 0 ? projects : FALLBACK_OTHER_PROJECTS;
  } catch {
    return FALLBACK_OTHER_PROJECTS;
  }
}
