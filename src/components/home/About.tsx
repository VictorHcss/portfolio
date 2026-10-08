import { GraduationCap, Code2, MapPin, Rocket } from "lucide-react";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Formação",
    description: "ADS — graduação em andamento",
  },
  {
    icon: Code2,
    title: "Foco",
    description: "Desenvolvimento Web",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Governador Valadares - MG",
  },
  {
    icon: Rocket,
    title: "Prática",
    description: "Projetos próprios e aprendizado contínuo",
  },
];

export const About = () => {
  return (
    <section className="py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-2xl font-bold mb-8 text-white tracking-tight">
        Sobre
      </h2>

      <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm mb-10">
        <p className="text-neutral-300 leading-relaxed mb-4">
          Sou desenvolvedor em formação, com foco em desenvolvimento web e
          experiência prática na construção de projetos próprios.
        </p>
        
        <p className="text-neutral-300 leading-relaxed mb-4">
          Estudo JavaScript, TypeScript e Python, aplicando esses conhecimentos
          em aplicações web com React, Next.js, APIs e bancos de dados.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          Gosto de transformar problemas do dia a dia em projetos de software,
          explorando também arquitetura, regras de negócio, testes e boas
          práticas de desenvolvimento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="p-6 bg-neutral-900/70 border border-neutral-800 rounded-xl transition-all duration-300 hover:border-neutral-700 hover:-translate-y-1"
          >
            <card.icon className="text-white mb-3" size={24} />

            <h3 className="text-lg font-semibold text-white mb-1">
              {card.title}
            </h3>

            <p className="text-sm text-neutral-400">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
