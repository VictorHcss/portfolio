"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SITE } from "@/lib/constants";

const fieldClass =
  "w-full rounded-md border border-line-strong bg-bg-deep/80 px-4 py-3 text-text placeholder:text-subtle transition-[border-color,box-shadow] duration-300 focus:border-primary focus:shadow-[0_0_0_4px_rgb(var(--glow)/0.15)] focus:outline-none";

const FIELDS = [
  { id: "name", label: "Nome", type: "text", autoComplete: "name" },
  { id: "email", label: "E-mail", type: "email", autoComplete: "email" },
  { id: "subject", label: "Assunto", type: "text", autoComplete: "off" },
] as const;

/**
 * Não há servidor de e-mail: o formulário abre o aplicativo de e-mail do visitante
 * com a mensagem preenchida, em vez de fingir que enviou.
 */
export const ContactForm = () => {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const body = `${get("message")}\n\n— ${get("name")} (${get("email")})`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(get("subject"))}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="surface-card space-y-5 rounded-lg p-6 sm:p-8">
      {FIELDS.map((f) => (
        <div key={f.id}>
          <label htmlFor={f.id} className="mb-2 block font-mono text-xs tracking-wider text-muted uppercase">
            {f.label}
          </label>
          <input id={f.id} name={f.id} type={f.type} autoComplete={f.autoComplete} required className={fieldClass} />
        </div>
      ))}
      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs tracking-wider text-muted uppercase">
          Mensagem
        </label>
        <textarea id="message" name="message" rows={5} required className={`${fieldClass} resize-y`} />
      </div>
      <button
        type="submit"
        className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-white shadow-button transition-[background-color,transform] duration-300 hover:bg-primary-strong active:scale-[0.98]"
      >
        Escrever por e-mail
        <Send size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
      <p className="text-xs text-subtle" role="status" aria-live="polite">
        {opened
          ? `Seu aplicativo de e-mail deve ter aberto. Se não abriu, escreva para ${SITE.email}.`
          : "O botão abre o seu aplicativo de e-mail com a mensagem preenchida."}
      </p>
    </form>
  );
};
