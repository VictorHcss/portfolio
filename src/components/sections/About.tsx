import { GraduationCap, MapPin } from "lucide-react";
import { INTERESTS, JOURNEY, PRINCIPLES } from "@/data/journey";
import { SITE } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

interface AboutProps {
  standalone?: boolean;
}

export const About = ({ standalone = false }: AboutProps) => (
  <section
    id="sobre"
    aria-label="Sobre mim"
    className="scroll-mt-24 py-20 md:py-32"
  >
    <SectionHeading
      as={standalone ? "h1" : "h2"}
      index="02"
      eyebrow="Sobre mim"
      title={
        <>
          Curioso por natureza,{" "}
          <span className="text-gradient">dedicado por escolha.</span>
        </>
      }
    />

    <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
      {/* Coluna pessoal, fixa durante a leitura da timeline */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="text-xl leading-relaxed font-medium tracking-[-0.015em] text-pretty text-text md:text-2xl">
              Estou construindo minha trajetória no desenvolvimento de software
              — um projeto de cada vez.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 leading-relaxed text-pretty text-muted">
              <p>
                Gosto de explorar novas tecnologias, compreender a arquitetura
                por trás dos sistemas e descobrir como transformar ideias em
                soluções funcionais. Minha evolução na programação aconteceu
                principalmente por meio de projetos próprios, nos quais passei
                dos primeiros estudos com HTML e JavaScript ao desenvolvimento
                de aplicações utilizando TypeScript, Next.js, PostgreSQL e
                FastAPI. Acredito no aprendizado contínuo e busco aprimorar
                minhas habilidades a cada novo desafio.
              </p>
              <p>
                Uso ferramentas de IA como ChatGPT, Claude e Gemini para
                acelerar o trabalho, sempre revisando e validando o que é
                gerado. Tenho ambição de crescer na área e humildade para
                aprender com quem já percorreu o caminho. Hoje busco minha
                primeira oportunidade como desenvolvedor júnior ou estagiário.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ul
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Áreas de interesse"
            >
              {INTERESTS.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-line-strong bg-surface/70 px-3 py-1 text-xs text-muted transition-colors duration-300 hover:border-brand/50 hover:text-text"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-subtle">
              <li className="flex items-center gap-2">
                <MapPin
                  size={14}
                  aria-hidden="true"
                  className="text-secondary"
                />
                {SITE.location}
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap
                  size={14}
                  aria-hidden="true"
                  className="text-secondary"
                />
                Inglês intermediário
              </li>
            </ul>
          </Reveal>

          {/* Como penso desenvolvimento */}
          <Reveal delay={0.2}>
            <ol className="mt-10 space-y-px overflow-hidden rounded-md border border-line bg-line">
              {PRINCIPLES.map((p, i) => (
                <li
                  key={p.title}
                  className="group flex gap-4 bg-surface p-5 transition-colors duration-300 hover:bg-surface-2"
                >
                  <span className="font-mono text-xs text-secondary">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-text">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>

      {/* Timeline */}
      <div className="lg:col-span-7">
        <h3 className="mb-8 font-mono text-xs tracking-[0.14em] text-subtle uppercase">
          Trajetória
        </h3>
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-brand via-line-strong to-transparent"
          />
          {JOURNEY.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 0.06}
              className="group relative pb-12 pl-10 last:pb-0"
            >
              <span
                aria-hidden="true"
                className={`absolute top-1.5 left-0 size-[11px] rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  step.current
                    ? "border-brand bg-brand shadow-[0_0_0_4px_rgb(var(--glow)/0.18),0_0_16px_rgb(var(--glow)/0.7)]"
                    : "border-line-strong bg-bg"
                }`}
              />
              <p className="font-mono text-xs text-secondary">
                {step.period}
                {step.tag && (
                  <span className="ml-2 text-subtle">· {step.tag}</span>
                )}
              </p>
              <h4 className="mt-2 text-lg font-medium tracking-[-0.02em] text-text md:text-xl">
                {step.title}
              </h4>
              <p className="mt-1 text-sm text-accent/80">{step.place}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-pretty text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
