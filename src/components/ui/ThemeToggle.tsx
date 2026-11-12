"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Monitor, Moon, Sun } from "lucide-react";
import { applyTheme, readTheme, subscribeTheme, type ThemePreference } from "@/lib/theme";

const ORDER: ThemePreference[] = ["system", "light", "dark"];

const META: Record<ThemePreference, { label: string; Icon: typeof Sun }> = {
  system: { label: "Tema do sistema", Icon: Monitor },
  light: { label: "Tema claro", Icon: Sun },
  dark: { label: "Tema escuro", Icon: Moon },
};

interface ThemeToggleProps {
  /** Exibe também o nome do tema (menu mobile). */
  withLabel?: boolean;
  className?: string;
}

/** Alterna entre sistema → claro → escuro. A escolha fica salva no navegador. */
export const ThemeToggle = ({ withLabel = false, className = "" }: ThemeToggleProps) => {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, () => "system" as ThemePreference);
  const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
  const { label, Icon } = META[theme];

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={`${label}. Mudar para ${META[next].label.toLowerCase()}`}
      title={label}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-line-strong bg-surface/60 text-muted transition-[color,background-color,border-color] duration-300 hover:border-brand/50 hover:text-text ${
        withLabel ? "px-4" : ""
      } ${className}`}
    >
      <span className="relative grid size-[18px] place-items-center" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Icon size={18} strokeWidth={1.75} />
          </motion.span>
        </AnimatePresence>
      </span>
      {withLabel && <span className="text-sm">{label}</span>}
    </button>
  );
};
