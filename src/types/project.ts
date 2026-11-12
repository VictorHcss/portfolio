export interface Project {
  id: number | string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  language: string | null;
}

export interface ProjectPillar {
  label: string;
  text: string;
}

/** Estágio real do projeto, exibido com legenda na seção de projetos. */
export type ProjectStage = "development" | "functional" | "concept";

export interface FeaturedProject {
  slug: string;
  title: string;
  /** Categoria curta exibida acima do título. */
  kind: string;
  stage: ProjectStage;
  status: string;
  summary: string;
  /** Aspectos técnicos que o projeto demonstra (arquitetura, testes, UX...). */
  pillars: ProjectPillar[];
  highlights: string[];
  stack: string[];
  metric?: { value: string; label: string };
  image: { src: string; alt: string };
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  note?: string;
}
