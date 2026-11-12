import type { LucideIcon } from "lucide-react";
import { Boxes, BrainCircuit, Network, Sparkles, Theater, Workflow } from "lucide-react";
import {
  siDocker,
  siDrizzle,
  siEslint,
  siFastapi,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siPostgresql,
  siPytest,
  siPython,
  siReact,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVitest,
  siWordpress,
  siZod,
  type SimpleIcon,
} from "simple-icons";

export type TechIcon = SimpleIcon | LucideIcon;

export interface Tech {
  name: string;
  description: string;
  icon: TechIcon;
}

export interface StackGroup {
  id: string;
  label: string;
  caption: string;
  /** "using": aparece nos projetos; "studying": em estudo/aprofundamento. */
  kind: "using" | "studying";
  items: Tech[];
}

/**
 * Tecnologias usadas de fato nos projetos e listadas no currículo.
 * O grupo "studying" reúne o que ainda estou estudando — sem prometer domínio.
 */
export const STACK_GROUPS: StackGroup[] = [
  {
    id: "frontend",
    label: "Front-end",
    caption: "Interfaces rápidas, acessíveis e responsivas.",
    kind: "using",
    items: [
      { name: "React", description: "Componentes e estado da interface", icon: siReact },
      { name: "Next.js", description: "App Router, Server Components e Server Actions", icon: siNextdotjs },
      { name: "TypeScript", description: "Tipagem estrita do front ao back", icon: siTypescript },
      { name: "JavaScript", description: "Base da web moderna", icon: siJavascript },
      { name: "Tailwind CSS", description: "Estilização com design tokens", icon: siTailwindcss },
      { name: "HTML & CSS", description: "Semântica e layout responsivo", icon: siHtml5 },
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    caption: "Regras de negócio claras e APIs bem definidas.",
    kind: "using",
    items: [
      { name: "Python", description: "Back-end, automações e scripts", icon: siPython },
      { name: "FastAPI", description: "APIs em camadas: routers, serviços e repositórios", icon: siFastapi },
      { name: "APIs REST", description: "Contratos HTTP e integrações externas", icon: Network },
      { name: "Zod", description: "Validação de entrada no servidor", icon: siZod },
    ],
  },
  {
    id: "database",
    label: "Banco de dados",
    caption: "Modelagem relacional e dados isolados por conta.",
    kind: "using",
    items: [
      { name: "PostgreSQL", description: "Modelagem relacional e multi-tenant", icon: siPostgresql },
      { name: "Drizzle ORM", description: "Queries tipadas e migrations versionadas", icon: siDrizzle },
      { name: "SQLite", description: "Persistência leve sem ORM", icon: siSqlite },
      { name: "Supabase", description: "PostgreSQL gerenciado com RLS", icon: siSupabase },
    ],
  },
  {
    id: "quality",
    label: "Testes e qualidade",
    caption: "Confiança para evoluir o código sem medo.",
    kind: "using",
    items: [
      { name: "Vitest", description: "Unitários e integração contra banco real", icon: siVitest },
      { name: "Playwright", description: "Testes de ponta a ponta no navegador", icon: Theater },
      { name: "Pytest", description: "Testes da API em Python", icon: siPytest },
      { name: "ESLint", description: "Padrões e análise estática do código", icon: siEslint },
    ],
  },
  {
    id: "studying",
    label: "Estudando e explorando",
    caption: "O que estou aprofundando agora — sem pular etapas.",
    kind: "studying",
    items: [
      { name: "Arquitetura de software", description: "Camadas, padrões e decisões de design", icon: Boxes },
      { name: "Inteligência artificial", description: "Como aplicar IA em produtos reais", icon: BrainCircuit },
      { name: "Automação", description: "Rotinas e integrações que poupam trabalho manual", icon: Workflow },
    ],
  },
  {
    id: "tools",
    label: "Ferramentas e infraestrutura",
    caption: "Do commit à publicação, com processos automatizados.",
    kind: "using",
    items: [
      { name: "Git", description: "Versionamento e histórico limpo", icon: siGit },
      { name: "GitHub", description: "Código, revisão e documentação", icon: siGithub },
      { name: "GitHub Actions", description: "CI e rotinas agendadas", icon: siGithubactions },
      { name: "Docker", description: "Ambientes reproduzíveis com Docker Compose", icon: siDocker },
      { name: "Vercel", description: "Deploy contínuo das aplicações", icon: siVercel },
      { name: "WordPress", description: "Gestão de sites e conteúdo", icon: siWordpress },
      { name: "IA como apoio", description: "ChatGPT, Claude e Gemini, sempre com revisão", icon: Sparkles },
    ],
  },
];
