type DashboardStatCardProps = {
  title: string;
  value: string;
};

export default function DashboardStatCard({
  title,
  value,
}: DashboardStatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <p className="text-sm font-semibold text-white/70">{title}</p>
      <p className="mt-3 text-3xl font-bold text-indigo-300">{value}</p>
    </div>
  );
}