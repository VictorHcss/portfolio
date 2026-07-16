"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

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
            sizes="(max-width: 768px) 100vw, 208px"
            className="object-cover rounded-full border-2 border-neutral-700"
            priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-tight">
            Olá, sou Victor
          </h1>
          <p className="text-xl text-neutral-400 mb-8">
            Desenvolvimento Full Stack | React • Next.js • TypeScript
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/projetos"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Ver projetos
            </Link>
            <a
              href="/cv/Curriculo_Victor_Henrique.pdf"
              download="Victor-Henrique-Curriculo.pdf"
              className="flex items-center gap-2 px-8 py-3 bg-neutral-900/70 text-white font-semibold rounded-full border border-neutral-700 transition-all duration-300 hover:bg-neutral-800 hover:border-white/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
