"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, X } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

type Status = "idle" | "copied" | "error";

const LABELS: Record<Status, string> = {
  idle: "Copiar e-mail",
  copied: "E-mail copiado",
  error: "Não foi possível copiar",
};

export const CopyEmailButton = ({ email, className = "" }: CopyEmailButtonProps) => {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2400);
  };

  const Icon = status === "copied" ? Check : status === "error" ? X : Copy;
  const tone = status === "copied" ? "text-success" : status === "error" ? "text-danger" : "text-accent";

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex min-h-12 items-center gap-2.5 rounded-md border px-5 text-sm font-medium text-text transition-[border-color,background-color,transform] duration-300 active:scale-[0.97] ${
        status === "copied"
          ? "border-success/40 bg-success/10"
          : "border-line-strong bg-surface/70 hover:border-secondary/50 hover:bg-surface-2"
      } ${className}`}
    >
      <span className="relative grid size-4 place-items-center" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={status}
            initial={{ scale: 0.3, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className={tone}
          >
            <Icon size={16} />
          </motion.span>
        </AnimatePresence>
      </span>
      <span>{LABELS[status]}</span>
      <span className="sr-only" role="status" aria-live="polite">
        {status === "copied" ? `${email} copiado para a área de transferência.` : ""}
      </span>
    </button>
  );
};
