import Link from "next/link";

const steps = [
  { label: "Confirm your target role", href: "/settings" },
  { label: "Upload your resume", href: "/resume" },
  { label: "Generate your first roadmap", href: "/roadmap" },
];

export default function NextStepsCard() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <h2 className="mb-5 text-xl font-bold text-[#f3f0ff]">
        Recommended next steps
      </h2>

      <div className="space-y-3">
        {steps.map((step) => (
          <Link
            key={step.label}
            href={step.href}
            className="group relative block overflow-hidden rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-[#f3f0ff]/75 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:text-[#f3f0ff] hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">→ {step.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}