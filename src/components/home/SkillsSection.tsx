import { SKILLS } from "@/lib/constants";

export const SkillsSection = () => {
  const allSkills = [
    ...SKILLS.frontend,
    ...SKILLS.backend,
    ...SKILLS.database,
    ...SKILLS.tools,
  ];

  return (
    <section className="py-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
      <h2 className="text-2xl font-bold mb-8 text-white tracking-tight">Habilidades</h2>
      <div className="flex flex-wrap gap-3">
        {allSkills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="px-5 py-2.5 bg-neutral-900/70 text-neutral-200 rounded-full font-medium text-sm border border-neutral-700 hover:border-white/50 hover:bg-neutral-800/70 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
