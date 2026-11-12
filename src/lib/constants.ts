export const SITE = {
  name: "Victor Henrique",
  role: "Desenvolvedor de Software",
  title: "Desenvolvedor de Software · Full Stack Júnior",
  headline: "TypeScript • React • Next.js",
  location: "Governador Valadares, MG",
  url: "https://portfolio-virid-alpha-93.vercel.app",
  email: "henvictor2@gmail.com",
  github: "https://github.com/VictorHcss",
  githubHandle: "github.com/VictorHcss",
  linkedin: "https://www.linkedin.com/in/victor-henrique-155842377/",
  linkedinHandle: "in/victor-henrique-155842377",
  cv: "/cv/Victor_Henrique_Desenvolvedor_Web.pdf",
  cvDownloadName: "Victor_Henrique_Desenvolvedor_Web.pdf",
  available: true,
  availability: "Disponível para oportunidades",
} as const;

/** Especialidades que alternam no Hero — todas presentes nos projetos. */
export const SPECIALTIES = [
  "aplicações full stack",
  "interfaces modernas",
  "APIs e regras de negócio",
  "automações",
] as const;

export interface NavItem {
  id: string;
  label: string;
  /** Página dedicada que também ativa este item no menu. */
  page?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "projetos", label: "Projetos", page: "/projetos" },
  { id: "sobre", label: "Sobre", page: "/sobre" },
  { id: "stack", label: "Stack" },
  { id: "contato", label: "Contato", page: "/contato" },
];
