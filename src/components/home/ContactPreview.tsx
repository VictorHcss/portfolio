import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const ContactPreview = () => {
  return (
    <section className="py-12">
      <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-6 text-white tracking-tight">Contato</h2>
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
        <Link
          href="/contato"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
        >
          Entrar em contato
        </Link>
      </div>
    </section>
  );
};
