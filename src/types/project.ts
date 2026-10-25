export interface Project {
  id: number | string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  language: string | null;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  status: string;
  summary: string;
  problem: string;
  highlights: string[];
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  note?: string;
}
