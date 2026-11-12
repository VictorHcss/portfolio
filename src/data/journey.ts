export interface JourneyItem {
  period: string;
  title: string;
  place: string;
  description: string;
  current?: boolean;
  tag?: string;
}

/** Trajetória baseada no currículo (formação, experiência e projetos). */
export const JOURNEY: JourneyItem[] = [
  {
    period: "Ago/2026 — Fev/2029",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    place: "Faculdade Anhanguera",
    description:
      "Graduação em andamento, aprofundando engenharia de software, banco de dados e arquitetura.",
    current: true,
    tag: "cursando",
  },
  {
    period: "Out/2025 — atual",
    title: "Assistente de Escritório — Gestão de Monitoramento",
    place: "Rede HG",
    description:
      "Analiso processos, registro não conformidades e elaboro relatórios diários que apoiam decisões da diretoria. Um olhar de negócio que levo para cada sistema que construo.",
    current: true,
  },
  {
    period: "Em evolução",
    title: "Projetos full stack próprios",
    place: "Finance.AI · Foodie · Aureon",
    description:
      "Do PHP e Python dos primeiros projetos para TypeScript, Next.js, PostgreSQL e FastAPI, com autenticação, testes automatizados e CI.",
  },
  {
    period: "Abr/2025 — Set/2025",
    title: "Estagiário — Departamento Comercial",
    place: "Rede HG",
    description:
      "Atuação no suporte às rotinas comerciais, com elaboração de propostas, gerenciamento de cadastros em sistemas internos e desenvolvimento de relatórios, contribuindo para a organização e eficiência dos processos.",
  },
  {
    period: "Abr/2024 — Set/2025",
    title: "Técnico em Análise e Desenvolvimento de Sistemas",
    place: "SENAC",
    description:
      "Onde dei meus primeiros passos na programação, desenvolvi minha base em tecnologia e descobri minha paixão pelo desenvolvimento de software.",
  },
];

export const PRINCIPLES = [
  {
    title: "Aprender fazendo",
    text: "Cada projeto próprio é um laboratório: estudo, construo, erro, corrijo e documento o que aprendi.",
  },
  {
    title: "Entender antes de construir",
    text: "Gosto de saber como as coisas funcionam por dentro — do problema de quem vai usar até a estrutura do código.",
  },
  {
    title: "Qualidade nos detalhes",
    text: "Código organizado, testes, acessibilidade e uma interface cuidadosa fazem parte da entrega.",
  },
];

/** Áreas de interesse declaradas — não são níveis de domínio. */
export const INTERESTS = [
  "Desenvolvimento full stack",
  "Interfaces modernas",
  "Inteligência artificial",
  "Automação",
  "Arquitetura de sistemas",
];
