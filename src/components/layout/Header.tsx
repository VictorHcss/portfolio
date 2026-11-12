"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { ThemeToggle } from "../ui/ThemeToggle";

/** Observa as seções da home e devolve o id da que está em foco. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        // a primeira seção (na ordem do documento) visível na faixa central vence
        const current = sections.find((s) => visible.has(s.id));
        setActive(current ? current.id : null);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.01] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const activeSection = useActiveSection(isHome);
  const activeId = isHome ? activeSection : (NAV_ITEMS.find((item) => item.page === pathname)?.id ?? null);

  // Menu mobile: trava o scroll, fecha com Esc e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* progresso de leitura */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-lavender via-brand to-primary"
      />
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between px-4 transition-[margin,padding,background-color,border-color,box-shadow,border-radius] duration-500 ease-out-expo sm:px-6 md:h-[4.5rem] ${
          scrolled || open
            ? "mt-0 border-b border-line bg-bg/75 backdrop-blur-xl md:mt-3 md:rounded-lg md:border md:shadow-[0_20px_40px_-20px_rgb(var(--shadow)/var(--shadow-alpha))]"
            : "mt-0 border-b border-transparent md:mt-3"
        }`}
      >
        <Link
          href="/"
          onClick={close}
          className="group flex items-center gap-3 rounded-sm"
          aria-label={`${SITE.name}, página inicial`}
        >
          <span className="relative grid size-9 place-items-center rounded-md border border-line-strong bg-surface font-mono text-sm font-semibold text-accent transition-colors duration-300 group-hover:border-secondary/60">
            VH
            <span className="absolute -right-0.5 -bottom-0.5 size-1.5 rounded-full bg-brand shadow-[0_0_10px_2px_rgb(var(--glow)/0.8)]" />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-medium tracking-tight text-text">Victor Henrique</span>
            <span className="block text-xs text-subtle">{SITE.role}</span>
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-md border border-line bg-surface/40 p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-sm bg-surface-3 shadow-[inset_0_0_0_1px_rgb(var(--glow)/0.18)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Link
                    href={`/#${item.id}`}
                    aria-current={isActive ? (isHome ? "location" : "page") : undefined}
                    className={`relative block rounded-sm px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive ? "text-text" : "text-muted hover:text-text"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${SITE.email}`}
            className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-text lg:inline-flex"
          >
            Fale comigo
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-md border border-line-strong bg-surface/60 text-text transition-colors hover:bg-surface-2 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 bottom-0 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Menu mobile" className="flex h-full flex-col px-4 pt-6 pb-10">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.5 }}
                    className="border-b border-line"
                  >
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={`/#${item.id}`}
                      onClick={close}
                      aria-current={activeId === item.id ? "location" : undefined}
                      className="flex items-baseline justify-between py-5 text-3xl font-semibold tracking-[-0.03em] text-text"
                    >
                      {item.label}
                      <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 font-mono text-sm text-muted">
                <a href={`mailto:${SITE.email}`} className="py-1 hover:text-text">
                  {SITE.email}
                </a>
                <div className="flex gap-6">
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="py-1 hover:text-text">
                    GitHub ↗
                  </a>
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="py-1 hover:text-text">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
