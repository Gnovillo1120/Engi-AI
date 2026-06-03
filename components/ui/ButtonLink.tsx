import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const baseClasses =
    "rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20";

  const variantClasses =
    variant === "primary"
      ? "border border-white/30 bg-white text-black hover:bg-indigo-200"
      : "border border-white/20 text-white/75 hover:border-indigo-400 hover:text-white";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}