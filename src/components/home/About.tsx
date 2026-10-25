import { GraduationCap, Code2, MapPin, Rocket } from "lucide-react";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Formação",
    description: "Tecnólogo em ADS (Anhanguera, cursando) e Técnico em ADS (SENAC, concluído)",
  },
  {
    icon: Code2,
    title: "Foco",
    description: "Desenvolvimento full stack com TypeScript, React, Next.js e PostgreSQL",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Governador Valadares, MG — aberto a vagas remotas, híbridas e presenciais",
  },
  {
    icon: Rocket,
    title: "Experiência",
    description: "Análise de processos e relatórios diários para a diretoria na Rede HG",
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
          Estudo Análise e Desenvolvimento de Sistemas e transformo o que aprendo em
          projetos publicados. Meu projeto principal, o Kombexa, é um sistema de gestão
          para academias de artes marciais, com permissões, isolamento de dados entre
          academias e 269 testes automatizados.
        </p>

        <p className="text-neutral-300 leading-relaxed mb-4">
          Trabalho principalmente com TypeScript, React e Next.js no front-end e no
          back-end, PostgreSQL para dados e Python com FastAPI em APIs. Também uso
          ferramentas de IA (ChatGPT, Claude e Gemini) como apoio, revisando o que elas
          produzem.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          Na Rede HG, analiso a operação de postos, registro desvios e preparo relatórios
          diários para a diretoria. Essa rotina me ensinou a olhar para processos e
          comunicar informações com clareza, o que levo para o código.
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
