import { SKILL_GROUPS } from "@/lib/constants";

export const SkillsSection = () => {
  return (
    <section className="py-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
      <h2 className="text-2xl font-bold mb-8 text-white tracking-tight">Habilidades</h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <dt className="text-sm font-semibold text-neutral-400 mb-2">{group.label}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 bg-neutral-900/70 text-neutral-200 rounded-full text-sm border border-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
