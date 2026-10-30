import type { FeaturedProject, Project } from "@/types/project";

/**
 * Projetos em destaque, escritos à mão. Mantenha estes textos alinhados
 * ao currículo e aos READMEs dos repositórios.
 */
export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: "Kombexa",
    title: "Kombexa",
    status: "MVP em desenvolvimento",
    summary:
      "Sistema web de gestão para academias de artes marciais, com mensalidades, presença, equipe e área do aluno.",
    problem:
      "Academias pequenas controlam alunos, mensalidades e presença em planilhas e mensagens. O Kombexa reúne isso em um só lugar, com permissões por perfil e dados separados entre academias.",
    highlights: [
      "Alunos, mensalidades, pagamentos parciais e financeiro",
      "Autenticação, permissões por perfil e isolamento de dados entre academias",
      "Log de auditoria",
      "Cadastro de alunos por QR Code para agilizar o processo de registro",
      "Área do Aluno para acesso às pagamentos de mensalidade e funcionalidades",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "Docker",
    ],
    githubUrl: "https://github.com/VictorHcss/kombexa",
    demoUrl: "https://kombexa-website-pi.vercel.app",
  },
  {
    slug: "finance-ai",
    title: "Finance.AI",
    status: "Funcional, em evolução",
    summary:
      "Controle financeiro pessoal com dashboard, metas, importação de extratos e insights gerados do histórico.",
    problem:
      "Ajuda a entender para onde o dinheiro vai: mostra saldo, entradas e saídas, detecta despesas recorrentes e projeta o prazo para concluir metas.",
    highlights: [
      "Transações com exportação CSV, metas com progresso e notificações",
      "Importação de extratos CSV e OFX",
      "API FastAPI em camadas, com autenticação e isolamento de dados por conta",
      "89 testes automatizados no back-end",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Recharts",
      "FastAPI",
      "SQLite",
    ],
    githubUrl: "https://github.com/VictorHcss/finance-ai",
    demoUrl: "https://finance-ai-flame-six.vercel.app",
  },
  {
    slug: "foodie",
    title: "Foodie",
    status: "Projeto de interface",
    summary:
      "Aplicação de delivery com busca, filtros, sacola, cupons e histórico de pedidos.",
    problem:
      "Projeto para praticar interfaces e fluxos interativos: descobrir restaurantes, montar a sacola, aplicar cupons e acompanhar pedidos.",
    highlights: [
      "Busca, filtros e ordenação; páginas de restaurantes",
      "Sacola, cupons de desconto, favoritos e avaliações",
      "Login, cadastro e perfil; tema claro e escuro",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Context API",
    ],
    githubUrl: "https://github.com/VictorHcss/foodie",
    demoUrl: "https://foodie-neon-five.vercel.app",
    note: "",
  },
];

const FEATURED_REPOS = new Set([
  "kombexa",
  "fight-manager",
  "finance-ai",
  "foodie",
  "portfolio",
]);

export const isFeaturedRepo = (name: string) =>
  FEATURED_REPOS.has(name.toLowerCase());

/** Usado quando a API do GitHub estiver indisponível (limite de requisições, por exemplo). */
export const FALLBACK_OTHER_PROJECTS: Project[] = [
  {
    id: "bookhub",
    title: "bookhub",
    description:
      "Sistema responsivo em PHP para gestão de acervo, empréstimos e devoluções, com portal público de catálogo.",
    tags: [],
    githubUrl: "https://github.com/VictorHcss/bookhub",
    demoUrl: "",
    language: "PHP",
  },
  {
    id: "caderno-project",
    title: "caderno-project",
    description:
      "Sistema web para organizar anotações acadêmicas por disciplina.",
    tags: [],
    githubUrl: "https://github.com/VictorHcss/caderno-project",
    demoUrl: "https://caderno-project.vercel.app",
    language: "HTML",
  },
  {
    id: "cassette-player-py",
    title: "cassette-player-py",
    description: "Toca-fitas digital para a web, feito com Vite.",
    tags: [],
    githubUrl: "https://github.com/VictorHcss/cassette-player-py",
    demoUrl: "https://cassette-player-py.vercel.app",
    language: "TypeScript",
  },
];
