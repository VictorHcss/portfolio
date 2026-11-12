# Portfólio — Victor Henrique

Site pessoal de Victor Henrique, Desenvolvedor Full Stack: projetos em destaque, trajetória, stack e contato.
Identidade visual **Dark Purple Developer — Digital Craft**.

**Online:** https://portfolio-virid-alpha-93.vercel.app

## Tecnologias

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion, lucide-react, simple-icons e React Compiler.

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
| Nome, links, disponibilidade, currículo, menu | `src/lib/constants.ts` |
| Projetos em destaque (textos, métricas, imagens) | `src/data/projects.ts` (`FEATURED_PROJECTS`) |
| Stack por categoria | `src/data/stack.ts` |
| Trajetória e princípios (seção Sobre) | `src/data/journey.ts` |
| Lista de "outros projetos" (fallback) | `src/data/projects.ts` |
| Capturas dos projetos / foto | `public/projects/`, `public/victor-henrique.webp` |
| Currículo em PDF | `public/cv/` (atualize também `SITE.cv`) |
| Tokens de design (cores, raios, utilitários) | `src/app/globals.css` |

## Estrutura

```
src/
  app/                 rotas (/, /projetos, /sobre, /contato), sitemap, robots, 404
  components/
    layout/            Header (menu ativo + mobile), Footer, Background
    sections/          Hero, Projects, OtherProjects, About, Stack, Contact
    projects/          ProjectCase (card de projeto)
    ui/                Reveal, ButtonLink, SpotlightCard, CopyEmailButton, ...
  data/                conteúdo (projetos, stack, trajetória)
  lib/                 constantes e integração com a API do GitHub
```

## Decisões

- **Conteúdo real:** projetos, números (269+, 89 e 118 testes) e datas vêm do currículo e dos READMEs dos repositórios. As imagens são capturas das demos publicadas; a do Aureon é do próprio repositório (dados de demonstração).
- **Outros projetos via API do GitHub, com fallback:** se a API falhar, o site usa uma lista fixa.
- **Formulário de contato:** não há servidor de e-mail; o formulário abre o aplicativo de e-mail com a mensagem preenchida (`mailto:`). Na home há um botão para copiar o e-mail.
- **Animações:** Motion para entrada do Hero, reveal no scroll, indicador do menu e microinterações; o fundo usa apenas CSS (transform). Tudo respeita `prefers-reduced-motion`.
- **Acessibilidade e SEO:** link "Ir para o conteúdo", foco visível, `aria-current` no menu, menu mobile com Esc e trava de scroll, metadata/Open Graph, JSON-LD (Person), sitemap e robots.
- **Segurança:** cabeçalhos `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` e HSTS; sem `X-Powered-By`.
