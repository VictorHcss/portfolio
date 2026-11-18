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
  },
  {
    slug: "cognita-ai",
    title: "Cognita AI",
    kind: "IA aplicada · LLM & RAG",
    stage: "development",
    status: "Etapa 5 de 9 · em desenvolvimento",
    summary:
      "Plataforma de conhecimento com IA: você envia PDFs, DOCX e Markdown, o Cognita extrai o texto, divide em trechos, gera embeddings e responde perguntas só com base nos seus documentos, citando a fonte de cada afirmação.",
    pillars: [
      {
        label: "Pipeline RAG",
        text: "A pergunta vira embedding, os trechos mais próximos viram fontes numeradas e a LLM responde com temperatura baixa, citando [n] após cada afirmação.",
      },
      {
        label: "Busca semântica",
        text: "PostgreSQL com pgvector e índice HNSW, vetores de 768 dimensões e avaliação da busca com hit@k e MRR.",
      },
      {
        label: "Respostas verificáveis",
        text: "Detecta citações inventadas e respostas cortadas. Sem trechos relevantes, a LLM nem é chamada e a resposta é “Não encontrei”.",
      },
      {
        label: "Arquitetura",
        text: "FastAPI em camadas, com provedores de LLM e embeddings atrás de interfaces: hoje Gemini, mais um provedor falso para testes sem rede e sem custo.",
      },
    ],
    highlights: [
      "Proteção contra injeção de prompt: o conteúdo dos documentos é tratado como dado, não como instrução",
      "Biblioteca com coleções, extração de texto e processamento em segundo plano",
      "Diário de aprendizado com o conceito, as decisões e os testes de cada etapa",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "SQLAlchemy",
      "Gemini",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Pytest",
      "Docker",
    ],
    metric: { value: "74", label: "testes automatizados no back-end" },
    image: {
      src: "/projects/cognita.webp",
      alt: "Chat do Cognita AI respondendo o que é RAG com citações numeradas e as fontes consultadas",
    },
    githubUrl: "https://github.com/VictorHcss/cognita-ai",
  },
  {
    slug: "aureon",
    title: "Aureon",
    kind: "Automação & monitoramento",
    stage: "functional",
    status: "Funcional · Em desenvolvimento",
    summary:
      "Monitor de preços com conta própria: cada pessoa cadastra os produtos que quer acompanhar e o Aureon consulta os preços todos os dias, guarda o histórico, compara as ofertas e avisa quando surge uma oportunidade.",
    pillars: [
      {
        label: "Coleta de preços",
        text: "Scraper do Mercado Livre da Bright Data, chamado só no servidor. Uma falha nunca vira preço nem apaga o último preço válido.",
      },
      {
        label: "Automação",
        text: "Coleta diária às 8h no GitHub Actions, com trava contra execução duplicada, timeouts, repetição limitada e limite de taxa.",
      },
      {
        label: "Regras de alerta",
        text: "Preço-alvo, queda percentual, menor preço já visto, volta ao estoque e dados desatualizados, com deduplicação e período de espera.",
      },
      {
        label: "Notificações",
        text: "Alertas e relatório diário por e-mail com Resend, no máximo um relatório por dia e sem repetir o mesmo aviso.",
      },
    ],
    highlights: [
      "Contas com cadastro e recuperação de senha; cada pessoa vê só os próprios produtos e alertas",
      "Várias ofertas por produto e histórico de 7, 30, 90, 180 dias ou do período todo",
      "Sessão em cookie assinado, proteção contra SSRF, redação de segredos nos logs e RLS no banco",
      "Documentação de estudo: arquitetura, fluxos completos, glossário e roteiro de estudos",
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
      "Bright Data",
    ],
    image: {
      src: "/projects/aureon.webp",
      alt: "Visão geral do painel do Aureon no tema escuro, com dados de demonstração",
    },
    githubUrl: "https://github.com/VictorHcss/aureon",
    demoUrl: "https://aureon-orpin-five.vercel.app",
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
    demoUrl: "https://landing-nu-virid-55.vercel.app",
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
  "cognita-ai",
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
