# Portfólio — Victor Henrique

Site pessoal de Victor Henrique, Desenvolvedor Full Stack Júnior: projetos em destaque, habilidades, sobre e contato.

**Online:** https://portfolio-virid-alpha-93.vercel.app

## Tecnologias

Next.js (App Router), React, TypeScript, Tailwind CSS 4, lucide-react, React Compiler.

## Como rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Variável opcional: `GITHUB_TOKEN` (aumenta o limite da API do GitHub, usada para listar os "Outros projetos").

## Onde editar o conteúdo

| O que | Arquivo |
|---|---|
| Nome, links, currículo | `src/lib/constants.ts` |
| Habilidades | `src/lib/constants.ts` (`SKILL_GROUPS`) |
| Projetos em destaque | `src/data/projects.ts` (`FEATURED_PROJECTS`) |
| Lista de "outros projetos" (fallback) | `src/data/projects.ts` |
| Currículo em PDF | `public/cv/` (atualize também `SITE.cv`) |

## Decisões

- **Projetos em destaque escritos à mão:** os três principais têm texto, tecnologias e links controlados por mim; só entra o que está implementado.
- **Outros projetos via API do GitHub, com fallback:** se a API falhar (limite de requisições), o site usa uma lista fixa em vez de mostrar uma seção vazia.
- **Formulário de contato:** não há servidor de e-mail; o formulário abre o aplicativo de e-mail com a mensagem preenchida (`mailto:`).
- **Acessibilidade:** link "Ir para o conteúdo", foco visível, `prefers-reduced-motion`, rótulos nos ícones.
