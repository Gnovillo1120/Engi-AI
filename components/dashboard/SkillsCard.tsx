const skills = [
  { name: "System design", level: "High" },
  { name: "Docker basics", level: "Medium" },
  { name: "Dynamic programming", level: "Medium" },
];

export default function SkillsCard() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <h2 className="mb-5 text-xl font-bold">Skills to address</h2>

      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between">
            <span className="text-white/75">{skill.name}</span>

            <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-semibold text-red-200">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}