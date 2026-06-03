type EmptyStateCardProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

import Link from "next/link";

export default function EmptyStateCard({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <h2 className="mb-2 text-xl font-bold text-[#f3f0ff]">{title}</h2>

      <p className="mb-5 leading-7 text-[#c8c2ff]/60">{description}</p>

      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="inline-block rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-[#f3f0ff] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20"
        >
          {actionLabel}
        </Link>
      )}
    </section>
  );
}