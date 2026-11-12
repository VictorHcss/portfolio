import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/constants";

const linkClass = "inline-flex items-center gap-1 py-1 text-muted transition-colors hover:text-text";

export const Footer = () => (
  <footer className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
    <div className="grid grid-cols-2 gap-10 border-t border-line pt-12 md:grid-cols-12">
      {/* Marca */}
      <div className="col-span-2 md:col-span-6">
        <Link href="/" className="inline-flex items-center gap-3 rounded-sm" aria-label={`${SITE.name}, página inicial`}>
          <span className="grid size-9 place-items-center rounded-md border border-line-strong bg-surface font-mono text-sm font-semibold text-accent">
            VH
          </span>
          <span>
            <span className="block text-sm font-medium text-text">{SITE.name}</span>
            <span className="block text-xs text-subtle">{SITE.title}</span>
          </span>
        </Link>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-pretty text-subtle">
          “Faith is taking the first step even when you can&apos;t see the whole staircase.”
          <span className="mt-1 block font-mono text-xs">— Martin Luther King Jr.</span>
        </p>
      </div>

      {/* Navegação */}
      <nav aria-label="Rodapé" className="text-sm md:col-span-3">
        <p className="mb-3 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">Navegação</p>
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link href={`/#${item.id}`} className={linkClass}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contato */}
      <div className="text-sm md:col-span-3">
        <p className="mb-3 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">Contato</p>
        <ul className="space-y-1">
          <li>
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              E-mail
            </a>
          </li>
          <li>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub <ArrowUpRight size={13} aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a href={SITE.cv} download={SITE.cvDownloadName} className={linkClass}>
              Currículo (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-12 flex flex-col-reverse gap-4 border-t border-line pt-6 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {SITE.name} · {SITE.location}
      </p>
      <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
        Voltar ao topo <ArrowUp size={13} aria-hidden="true" />
      </a>
    </div>
  </footer>
);
