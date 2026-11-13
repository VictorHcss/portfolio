"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GraduationCap } from "lucide-react";

/** Recorte chanfrado usado na moldura e na borda em gradiente. */
const CHAMFER =
  "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 36px 100%, 0 calc(100% - 36px))";

const Corner = ({ className }: { className: string }) => (
  <span
    aria-hidden="true"
    className={`absolute size-4 border-accent/60 ${className}`}
  />
);

/**
 * Fotografia real com tratamento: vinheta em ameixa para acalmar o fundo,
 * luz de recorte violeta lateral e fade inferior que integra a foto ao layout.
 */
export const HeroPortrait = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[22rem] sm:max-w-[25rem] lg:max-w-none"
    >
      {/* brilho atrás da foto */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-full sm:-inset-10 bg-[radial-gradient(closest-side,rgb(var(--glow)/0.35),transparent)] blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* borda em gradiente acompanhando o chanfro */}
        <div
          className="bg-gradient-to-br from-accent/50 via-primary/20 to-transparent p-px"
          style={{ clipPath: CHAMFER }}
        >
          <div
            className="relative aspect-[4/5] overflow-hidden bg-surface"
            style={{ clipPath: CHAMFER }}
          >
            <motion.div style={{ y }} className="absolute -inset-y-8 inset-x-0">
              <Image
                src="/victor-henrique.webp"
                alt="Fotografia de Victor Henrique, sorrindo, de terno escuro e gravata azul"
                fill
                priority
                sizes="(max-width: 640px) 352px, (max-width: 1024px) 400px, 460px"
                className="object-cover object-[50%_22%] [filter:saturate(0.88)_contrast(1.06)_brightness(0.96)]"
              />
            </motion.div>

            {/* vinheta ameixa: suaviza o fundo e mantém o rosto natural */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_58%_at_50%_34%,transparent_45%,rgb(16_13_25/0.82)_100%)]" />
            {/* luz de recorte violeta vinda da direita */}
            <div className="absolute inset-0 bg-[linear-gradient(255deg,rgb(167_139_250/0.38),transparent_42%)] mix-blend-screen" />
            {/* tonalização leve das sombras */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(91_33_182/0.12),rgb(16_13_25/0)_40%)] mix-blend-color" />
            {/* fade inferior para integrar ao fundo */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
            {/* linhas técnicas */}
            <div className="absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,transparent_55%,black)]" />

            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between font-mono text-[11px] tracking-wider text-muted uppercase">
              <span>
                <span className="text-accent">{"//"}</span> victor.henrique
              </span>
              <span>GV · MG</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* marcações de enquadramento */}
      <Corner className="-top-3 -left-3 border-t border-l" />
      <Corner className="-right-3 -bottom-3 border-r border-b" />

      {/* formação atual: informação real, no lugar de enfeite */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute right-2 bottom-16 sm:-right-4 lg:-right-5"
      >
        <div className="glass shadow-soft flex items-center gap-3 rounded-md px-3.5 py-2.5">
          <GraduationCap
            size={18}
            aria-hidden="true"
            className="shrink-0 text-accent"
          />
        </div>
      </motion.div>
    </div>
  );
};
