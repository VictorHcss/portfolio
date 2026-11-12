"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface RotatingTextProps {
  words: readonly string[];
  interval?: number;
  className?: string;
}

/**
 * Alterna palavras com uma transição curta. Leitores de tela recebem a lista
 * completa uma única vez (a parte animada fica oculta para eles).
 */
export const RotatingText = ({ words, interval = 2600, className = "" }: RotatingTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-grid align-bottom ${className}`}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className="relative inline-block overflow-hidden py-[0.08em]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={{ y: "70%", opacity: 0, filter: "blur(4px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-70%", opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block whitespace-nowrap"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
};
