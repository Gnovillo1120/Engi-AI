type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/50 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <div className="relative z-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/40 text-2xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        <h2 className="mb-2 text-xl font-bold">{title}</h2>

        <p className="leading-7 text-white/70">{description}</p>
      </div>
    </div>
  );
}


