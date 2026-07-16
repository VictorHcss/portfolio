import Link from "next/link";

export const AboutPreview = () => {
  return (
    <section className="py-12">
      <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm">
        <p className="text-neutral-300 leading-relaxed mb-6">
          Sou Desenvolvedor Full Stack e construo aplicações web com React,
          Next.js, TypeScript, Node.js, transformando ideias e
          problemas reais em soluções funcionais.
        </p>

        <Link
          href="/sobre"
          className="inline-flex items-center gap-2 text-white font-semibold hover:text-neutral-300 transition-colors"
        >
          Saiba mais
        </Link>
      </div>
    </section>
  );
};
