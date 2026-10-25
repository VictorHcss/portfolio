import { GraduationCap, Code2, MapPin, Rocket } from "lucide-react";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Formação",
    description:
      "Tecnólogo em ADS (Anhanguera, cursando) e Técnico em ADS (SENAC, concluído)",
  },
  {
    icon: Code2,
    title: "Foco",
    description:
      "Desenvolvimento Full-Stack",
  },
  {
    icon: MapPin,
    title: "Localização",
    description:
      "Governador Valadares - MG",
  },
  {
    icon: Rocket,
    title: "Experiência prática",
    description:
      "Desenvolvimento de projetos próprios, do planejamento à implementação",
  },
];

export const About = () => {
  return (
    <section className="py-14 md:py-16 animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-tight">
        Sobre
      </h2>
      <div className="bg-neutral-900/50 p-6 md:p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm mb-10">
        <p className="text-neutral-300 leading-relaxed mb-4">
          Estudo Análise e Desenvolvimento de Sistemas e busco transformar o que
          aprendo em projetos reais. Ao longo dessa jornada, desenvolvo
          aplicações como o Kombexa, uma plataforma de gestão para academias de
          artes marciais, o Foodie, voltado ao universo gastronômico, e o
          Finance, além de outros projetos que me permitem explorar novas ideias
          e desafios.
        </p>

        <p className="text-neutral-300 leading-relaxed mb-4">
          Trabalho e estudo com TypeScript, React e Next.js no desenvolvimento
          full stack, PostgreSQL para bancos de dados e Python com FastAPI para
          APIs. Também utilizo ferramentas de inteligência artificial, como
          ChatGPT, Claude e Gemini, para apoiar o desenvolvimento, sempre
          revisando e validando o código gerado.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          Busco desenvolver aplicações que vão além de uma interface bem
          construída, valorizando funcionalidades consistentes, código
          organizado, segurança e qualidade. Gosto de enfrentar desafios
          práticos, aprender novas tecnologias e aprimorar continuamente meus
          projetos, transformando ideias em soluções funcionais.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
