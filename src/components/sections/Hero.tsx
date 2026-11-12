"use client";

import { motion, type Variants } from "motion/react";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { SITE, SPECIALTIES } from "@/lib/constants";
import { ButtonLink } from "../ui/ButtonLink";
import { RotatingText } from "../ui/RotatingText";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { HeroPortrait } from "./HeroPortrait";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Números reais: soma dos testes citados nos projetos (269 + 89 + 118). */
const FACTS = [
  { value: "Sempre evoluindo", label: "aprendizado contínuo em tecnologia" },
  { value: "Código limpo", label: "organização, testes e boas práticas" },
  { value: "TS · Python", label: "do front-end à API" },
];

const socialClass =
  "grid size-12 place-items-center rounded-md border border-line bg-surface/50 text-muted transition-[color,border-color,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-surface hover:text-text";

export const Hero = () => (
  <section
    id="inicio"
    aria-labelledby="hero-title"
    className="relative pt-28 pb-16 md:pt-40 md:pb-24"
  >
    <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="lg:col-span-7"
      >
        {SITE.available && (
          <motion.p
            variants={item}
            className="glass mb-8 inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-3 text-xs text-muted"
          >
            <span
              className="size-2 animate-pulse-dot rounded-full bg-success"
              aria-hidden="true"
            />
            {SITE.availability}
            <span className="hidden font-mono text-subtle sm:inline">
              · Júnior ou estágio
            </span>
          </motion.p>
        )}

        <motion.p
          variants={item}
          className="mb-4 font-mono text-xs tracking-[0.14em] text-secondary uppercase md:text-sm"
        >
          {SITE.role}
        </motion.p>

        <motion.h1
          variants={item}
          id="hero-title"
          className="text-[clamp(3.25rem,11vw,7.25rem)] leading-[0.88] font-semibold tracking-[-0.055em] text-text"
        >
          Victor
          <br />
          <span className="text-gradient animate-gradient">Henrique</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-xl leading-snug font-medium tracking-[-0.02em] text-text md:text-2xl"
        >
          Construo <RotatingText words={SPECIALTIES} className="text-accent" />
          <br className="hidden sm:block" /> com cuidado do banco de dados à
          interface.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-lg leading-relaxed text-pretty text-muted"
        >
          Estou construindo minha trajetória em desenvolvimento de software,
          cursando ADS em {SITE.location}. Aprendo fazendo: crio projetos
          próprios com TypeScript, Next.js, PostgreSQL e FastAPI, com testes
          automatizados.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <ButtonLink href="/#projetos">
            Conhecer projetos
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </ButtonLink>
          <ButtonLink href="/#contato" variant="ghost">
            Entrar em contato
          </ButtonLink>
          <div className="flex items-center gap-2 sm:ml-2">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Victor Henrique"
              className={socialClass}
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Victor Henrique"
              className={socialClass}
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href={SITE.cv}
              download={SITE.cvDownloadName}
              aria-label="Baixar currículo em PDF"
              className={socialClass}
            >
              <Download size={18} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="lg:col-span-5">
        <HeroPortrait />
      </div>
    </div>

    <motion.dl
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="mt-16 grid grid-cols-1 border-y border-line sm:grid-cols-3 md:mt-24"
    >
      {FACTS.map((fact, i) => (
        <div
          key={fact.label}
          className={`flex items-baseline gap-3 py-5 sm:flex-col sm:gap-1 sm:px-6 sm:py-7 ${
            i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : "sm:pl-0"
          }`}
        >
          <dt className="order-last text-sm text-muted">{fact.label}</dt>
          <dd className="text-2xl font-semibold tracking-[-0.03em] text-text md:text-3xl">
            {fact.value}
          </dd>
        </div>
      ))}
    </motion.dl>

    <a
      href="#projetos"
      aria-label="Rolar até os projetos"
      className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 translate-y-1/2 place-items-center rounded-full border border-line bg-bg p-2 text-subtle transition-colors hover:text-accent md:grid"
    >
      <motion.span
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="block"
      >
        <ArrowDown size={16} aria-hidden="true" />
      </motion.span>
    </a>
  </section>
);
