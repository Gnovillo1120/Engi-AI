const steps = [
  "Review your resume feedback",
  "Complete roadmap week 1 tasks",
  "Add deployment to one project",
];

export default function NextStepsCard() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <h2 className="mb-5 text-xl font-bold text-[#f3f0ff]">
        Recommended next steps
      </h2>

      <div className="space-y-3">
        {steps.map((step) => (
          <p key={step} className="text-[#f3f0ff]/75">
            → {step}
          </p>
        ))}
      </div>
    </section>
  );
}