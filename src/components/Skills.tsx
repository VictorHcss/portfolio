interface SkillsProps {
  tecnologias: string[];
}

export const Skills = ({ tecnologias }: SkillsProps) => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Minhas Habilidades</h2>
      <div className="flex flex-wrap gap-3">
        {tecnologias.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm border border-blue-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};
