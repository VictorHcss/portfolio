import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-start justify-center pt-24">
      <p className="mb-5 font-mono text-xs tracking-[0.14em] text-secondary uppercase">Erro 404</p>
      <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-balance text-text">
        Essa rota <span className="text-gradient">não existe.</span>
      </h1>
      <p className="mt-6 max-w-md leading-relaxed text-muted">
        O endereço pode ter mudado ou sido digitado errado. Que tal voltar para o início?
      </p>
      <ButtonLink href="/" className="mt-10">
        <ArrowLeft size={16} aria-hidden="true" className="transition-transform duration-300 group-hover/btn:-translate-x-1" />
        Voltar ao início
      </ButtonLink>
    </section>
  );
}
