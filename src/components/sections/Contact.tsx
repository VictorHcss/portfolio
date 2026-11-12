import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { CopyEmailButton } from "../ui/CopyEmailButton";
import { Reveal } from "../ui/Reveal";
import { ContactForm } from "./ContactForm";

interface ContactProps {
  /** Página /contato: título h1 e formulário. */
  standalone?: boolean;
}

const LINKS = [
  { href: SITE.github, label: "GitHub", handle: SITE.githubHandle, Icon: GithubIcon },
  { href: SITE.linkedin, label: "LinkedIn", handle: SITE.linkedinHandle, Icon: LinkedinIcon },
];

const SocialLinks = () => (
  <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line">
    {LINKS.map(({ href, label, handle, Icon }) => (
      <li key={label}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-bg/80 p-5 transition-colors duration-300 hover:bg-surface-2"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-md border border-line text-muted transition-[color,border-color,transform] duration-300 group-hover:-rotate-6 group-hover:border-primary/40 group-hover:text-accent">
            <Icon width={18} height={18} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium text-text">{label}</span>
            <span className="block truncate font-mono text-xs text-subtle">{handle}</span>
          </span>
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="shrink-0 text-subtle transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
          <span className="sr-only">(abre em nova aba)</span>
        </a>
      </li>
    ))}
  </ul>
);

export const Contact = ({ standalone = false }: ContactProps) => {
  const Title = standalone ? "h1" : "h2";

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-24 py-20 md:py-32">
      <div className="relative overflow-hidden rounded-lg border border-line-strong bg-surface/70 px-5 py-12 sm:px-10 md:px-14 md:py-20">
        {/* luz e grade de fundo */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/2 left-1/3 h-[140%] w-[90%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(var(--glow)/0.28),transparent)]" />
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_30%_0%,black,transparent)]" />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-subtle uppercase">
                <span className="text-secondary">04</span>
                <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
                Contato
              </p>
              <Title
                id="contato-titulo"
                className="text-[clamp(2.4rem,7vw,5rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-balance text-text"
              >
                Vamos construir <span className="text-gradient">algo juntos?</span>
              </Title>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
                Busco minha primeira oportunidade como desenvolvedor júnior ou estagiário — remoto, híbrido ou
                presencial.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex max-w-full items-center gap-3 text-[clamp(1.2rem,4.6vw,2.25rem)] font-medium tracking-[-0.03em] text-text"
              >
                <span className="min-w-0 truncate bg-[linear-gradient(var(--primary),var(--primary))] bg-[length:100%_2px] bg-bottom-left bg-no-repeat pb-1 transition-[background-size] duration-500 ease-out-expo group-hover:bg-[length:0%_2px]">
                  {SITE.email}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-6 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:size-8"
                />
              </a>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CopyEmailButton email={SITE.email} />
                <a
                  href={SITE.cv}
                  download={SITE.cvDownloadName}
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-md px-5 text-sm font-medium text-muted transition-colors hover:text-text sm:px-3"
                >
                  <Download size={16} aria-hidden="true" className="text-accent" />
                  Baixar currículo (PDF)
                </a>
              </div>
            </Reveal>

            {standalone && (
              <Reveal delay={0.15} className="mt-12">
                <SocialLinks />
              </Reveal>
            )}
          </div>

          <div className={`lg:col-span-5 ${standalone ? "lg:self-start" : "lg:self-end"}`}>
            <Reveal delay={0.15}>
              {standalone ? (
                <ContactForm />
              ) : (
                <div className="space-y-4">
                  {SITE.available && (
                    <div className="rounded-md border border-line bg-bg/60 p-5">
                      <p className="flex items-center gap-2.5 text-sm font-medium text-text">
                        <span className="size-2 animate-pulse-dot rounded-full bg-success" aria-hidden="true" />
                        {SITE.availability}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        Desenvolvedor Júnior ou estágio · remoto, híbrido ou presencial.
                      </p>
                      <p className="mt-3 flex items-center gap-2 font-mono text-xs text-subtle">
                        <MapPin size={13} aria-hidden="true" className="text-secondary" />
                        {SITE.location}
                      </p>
                    </div>
                  )}
                  <SocialLinks />
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
