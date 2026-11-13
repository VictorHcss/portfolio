import type { FeaturedProject, Project } from "@/types/project";

/**
 * Projetos em destaque, escritos à mão. Mantenha estes textos alinhados
 * ao currículo e aos READMEs dos repositórios.
 * As imagens em /public/projects são capturas reais das demos publicadas
 * (o print do Aureon vem do próprio repositório, com dados de demonstração).
 */
export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: "kombexa",
    title: "Kombexa",
    kind: "SaaS de gestão",
    stage: "development",
    status: "MVP em desenvolvimento",
    summary:
      "Plataforma de gestão para academias de artes marciais: alunos, mensalidades, pagamentos, presença, graduações e uma Área do Aluno para cada atleta.",
    pillars: [
      {
        label: "Arquitetura",
        text: "Next.js 16 com Server Components e Server Actions, validação com Zod e migrations versionadas.",
      },
      {
        label: "Autenticação",
        text: "Permissões por perfil (equipe, aluno, responsável e plataforma) checadas em toda página e action.",
      },
      {
        label: "Banco de dados",
        text: "PostgreSQL com Drizzle ORM e isolamento de dados entre academias.",
      },
      {
        label: "Regras de negócio",
        text: "Mensalidade quitada pela soma dos pagamentos, pagamento parcial e geração do mês sem duplicar.",
      },
    ],
    highlights: [
      "Presença por QR Code e carteirinha digital do aluno",
      "Financeiro, relatórios e recibos com a identidade da academia",
      "Log de auditoria e direitos do titular (LGPD)",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "Vitest",
      "Playwright",
      "Docker",
    ],
    image: {
      src: "/projects/kombexa.webp",
      alt: "Site do Kombexa mostrando o painel da academia e a carteirinha do aluno com QR Code",
    },
    githubUrl: "https://github.com/VictorHcss/kombexa",
    demoUrl: "https://kombexa-website-pi.vercel.app",
    demoLabel: "Demonstração interativa",
  },
  {
    slug: "aureon",
    title: "Aureon",
    kind: "Automação & monitoramento",
    stage: "functional",
    status: "Funcional · Em desenvolvimento",
    summary:
      "Monitor pessoal de preços: consulta os produtos cadastrados todos os dias, guarda o histórico, compara ofertas e avisa quando surge uma oportunidade.",
    pillars: [
      {
        label: "Monitoramento",
        text: "Coleta pela API oficial do Mercado Livre, com OAuth renovado automaticamente.",
      },
      {
        label: "Automação",
        text: "Rotina diária no GitHub Actions, com trava contra execução duplicada, timeouts e repetição limitada.",
      },
      {
        label: "Histórico de preços",
        text: "Gráficos de 7 a 180 dias, menor preço observado e regras de alerta por produto.",
      },
      {
        label: "Integrações",
        text: "Avisos e relatório diário por Telegram, e-mail (Resend) e WhatsApp Cloud API.",
      },
    ],
    highlights: [
      "Login com cookie assinado, proteção contra SSRF e redação de segredos nos logs",
      "Painel responsivo com tema claro, escuro ou do sistema",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zod",
      "Recharts",
      "Vitest",
      "GitHub Actions",
    ],
    image: {
      src: "/projects/aureon.webp",
      alt: "Visão geral do painel do Aureon no tema escuro, com dados de demonstração",
    },
    githubUrl: "https://github.com/VictorHcss/aureon",
    demoUrl: "https://aureon-orpin-five.vercel.app",
    demoLabel: "Demonstração interativa",
  },
  {
    slug: "finance-ai",
    title: "Finance.AI",
    kind: "Finanças pessoais",
    stage: "functional",
    status: "Funcional, em evolução",
    summary:
      "Gerenciamento financeiro pessoal com dashboard, metas e importação de extratos. A proposta é uma experiência inteligente de organização e análise das finanças.",
    pillars: [
      {
        label: "Dashboards",
        text: "Saldo, entradas, saídas e evolução das metas em gráficos com Recharts.",
      },
      {
        label: "APIs",
        text: "FastAPI em camadas (routers, serviços e repositórios) com autenticação por sessão.",
      },
      {
        label: "Testes",
        text: "89 testes automatizados no back-end, incluindo isolamento de dados entre contas.",
      },
      {
        label: "Insights",
        text: "Categoria dominante, despesas recorrentes, tendência de receita e projeção de metas, gerados do histórico real.",
      },
    ],
    highlights: [
      "Importação de extratos CSV e OFX",
      "Transações com exportação CSV e notificações",
      "Modo local automático quando o back-end está indisponível",
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
    metric: { value: "89", label: "testes automatizados no back-end" },
    image: {
      src: "/projects/finance.webp",
      alt: "Página inicial do Finance.AI com resumo de saldo, entradas e saídas",
    },
    githubUrl: "https://github.com/VictorHcss/finance-ai",
    demoUrl: "https://finance-ai-flame-six.vercel.app",
  },
  {
    slug: "foodie",
    title: "Foodie",
    kind: "Interface & UX",
    stage: "concept",
    status: "Conceitual · foco em front-end",
    summary:
      "Aplicação de delivery para descobrir restaurantes, montar a sacola, aplicar cupons e acompanhar pedidos, com foco total na experiência.",
    pillars: [
      {
        label: "Interface",
        text: "Componentes reutilizáveis com shadcn/ui e tema claro e escuro.",
      },
      {
        label: "Experiência",
        text: "Busca, filtros e ordenação para chegar rápido ao prato certo.",
      },
      {
        label: "Interatividade",
        text: "Sacola, cupons de desconto, favoritos, avaliações e status de pedidos.",
      },
      {
        label: "Front-end",
        text: "Estado compartilhado com Context API e persistência no navegador.",
      },
    ],
    highlights: [
      "Login, cadastro e perfil",
      "Interface responsiva do celular ao desktop",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Context API",
    ],
    image: {
      src: "/projects/foodie.webp",
      alt: "Página inicial do Foodie com busca de restaurantes e categorias de pratos",
    },
    githubUrl: "https://github.com/VictorHcss/foodie",
    demoUrl: "https://foodie-neon-five.vercel.app",
  },
];

const FEATURED_REPOS = new Set([
  "kombexa",
  "kombexa-website",
  "fight-manager",
  "finance-ai",
  "foodie",
  "aureon",
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
