"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { Mail, Download } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

type FormState = "idle" | "opened";

interface ContactProps {
  full?: boolean;
}

export const Contact = ({ full = false }: ContactProps) => {
  const [formState, setFormState] = useState<FormState>("idle");

  // Não há servidor de e-mail: o formulário abre o aplicativo de e-mail do visitante
  // com a mensagem preenchida, em vez de fingir que enviou.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormState("opened");
  };

  return (
    <section className="py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className={`${full ? "text-3xl" : "text-2xl"} font-bold mb-10 text-white tracking-tight`}>
        {full ? "Vamos construir algo juntos?" : "Contato"}
      </h2>
      <div className={`${full ? "grid grid-cols-1 lg:grid-cols-2 gap-10" : ""}`}>
        <div>
          <p className="text-neutral-400 mb-6 leading-relaxed">
            Busco vaga de Desenvolvedor Júnior ou estágio, remoto, híbrido ou presencial. Fico à disposição para conversar.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-neutral-300 text-sm font-medium">Disponível para oportunidades</span>
          </div>
          <div className="space-y-4 mb-8">
            <a href="mailto:henvictor2@gmail.com" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
              <Mail size={20} />
              <span>henvictor2@gmail.com</span>
            </a>
            <a href="https://github.com/VictorHcss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
              <GithubIcon width={20} height={20} />
              <span>github.com/VictorHcss</span>
            </a>
            <a href="https://www.linkedin.com/in/victor-henrique-155842377/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
              <LinkedinIcon width={20} height={20} />
              <span>linkedin.com/in/victor-henrique-155842377/</span>
            </a>
          </div>
          <a
            href={SITE.cv}
            download={SITE.cvDownloadName}
            className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-900/70 text-white font-semibold rounded-full border border-neutral-700 transition-all duration-300 hover:bg-neutral-800 hover:border-white/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            <Download size={20} />
            Baixar currículo (PDF)
          </a>
        </div>

        {full && (
          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-300 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-neutral-300 mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-neutral-300 mb-2">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-neutral-300 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-white/50 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold bg-white text-black transition-all duration-300 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                Escrever por e-mail
              </button>
              <p className="text-xs text-neutral-400" role="status" aria-live="polite">
                {formState === "opened"
                  ? `Seu aplicativo de e-mail deve ter aberto. Se não abriu, escreva para ${SITE.email}.`
                  : "O botão abre o seu aplicativo de e-mail com a mensagem preenchida."}
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
