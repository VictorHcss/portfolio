import { Mail } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-neutral-800 mt-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <p className="text-neutral-400 mb-6 leading-relaxed">
        © {new Date().getFullYear()} VH. “Faith is taking the first step even when you can't see the whole staircase.” ― Martin Luther King Jr.
      </p>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/VictorHcss" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors">
          <GithubIcon width={20} height={20} />
          <span className="text-sm">GitHub</span>
        </a>
        <a href="mailto:henvictor2@gmail.com" className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors">
          <Mail size={20} />
          <span className="text-sm">E-mail</span>
        </a>
        <a href="https://www.linkedin.com/in/victor-henrique-155842377/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors">
          <LinkedinIcon width={20} height={20} />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};
