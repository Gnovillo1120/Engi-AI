export default function SkillsCard() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <h2 className="mb-2 text-xl font-bold text-[#f3f0ff]">
        Skills to address
      </h2>

      <p className="leading-7 text-[#c8c2ff]/60">
        Upload your resume and generate an AI review to see which skills you
        should focus on first.
      </p>
    </section>
  );
}