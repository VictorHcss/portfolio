export interface GithubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

const GITHUB_API_URL = "https://api.github.com/users/VictorHcss/repos?sort=pushed&per_page=100";
const CACHE_DURATION = 3600;

export async function getGithubRepositories(): Promise<GithubRepository[]> {
  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: CACHE_DURATION },
    });

    if (!response.ok) {
      const isRateLimit = response.status === 403 || response.status === 429;
      let errorMessage = `GitHub API error: ${response.status} ${response.statusText}`;

      if (isRateLimit) {
        errorMessage = "GitHub API rate limit exceeded. Please try again later.";
      }

      throw new Error(errorMessage);
    }

    const repos = await response.json() as GithubRepository[];

    const filteredRepos = repos
      .filter((repo) => !repo.fork && !repo.archived && repo.name !== "VictorHcss")
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

    return filteredRepos;
  } catch (error) {
    console.error("Failed to fetch GitHub repositories:", error);
    throw error;
  }
}
