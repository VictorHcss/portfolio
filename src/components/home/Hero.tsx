import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { SITE } from "@/lib/constants";

export const Hero = () => {
  return (
    <section className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-900 blur-xl opacity-60"></div>
          <Image
            src="/photo-icon.png"
            alt="Foto de Victor Henrique"
            fill
            sizes="(max-width: 768px) 160px, 208px"
            className="object-cover rounded-full border-2 border-neutral-700"
            priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-tight">
            {SITE.name}
          </h1>
          <p className="text-xl text-neutral-200 mb-2">
            {SITE.title} | {SITE.headline}
          </p>
          <p className="text-neutral-400 mb-8 max-w-2xl leading-relaxed">
            Estudante de Análise e Desenvolvimento de Sistemas. Construo aplicações web completas,
            do banco de dados à interface, com testes automatizados. Busco minha primeira
            oportunidade como desenvolvedor júnior ou estagiário.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
            <Link
              href="/#projetos"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Ver projetos
            </Link>
            <a
              href={SITE.cv}
              download={SITE.cvDownloadName}
              className="flex items-center gap-2 px-8 py-3 bg-neutral-900/70 text-white font-semibold rounded-full border border-neutral-700 transition-all duration-300 hover:bg-neutral-800 hover:border-white/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              <Download size={20} aria-hidden="true" />
              Baixar currículo (PDF)
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Victor Henrique"
              className="p-3 text-neutral-300 hover:text-white transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <GithubIcon width={24} height={24} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Victor Henrique"
              className="p-3 text-neutral-300 hover:text-white transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <LinkedinIcon width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
