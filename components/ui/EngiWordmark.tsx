import EngiLogo from "./EngiLogo";

type EngiWordmarkProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
};

const sizes = {
  sm: { icon: 28, name: "text-base", tagline: "text-[10px]" },
  md: { icon: 36, name: "text-xl",   tagline: "text-[11px]" },
  lg: { icon: 48, name: "text-2xl",  tagline: "text-xs"     },
};

/**
 * Full Engi AI wordmark: icon + "Engi AI" text + optional tagline.
 *
 * Usage:
 *   <EngiWordmark size="sm" />               ← sidebar compact
 *   <EngiWordmark size="md" showTagline />   ← navbar / landing
 *   <EngiWordmark size="lg" showTagline />   ← hero / auth page header
 */
export default function EngiWordmark({
  size = "md",
  showTagline = false,
}: EngiWordmarkProps) {
  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <EngiLogo size={s.icon} />
      <div className="flex flex-col leading-none">
        <span className={`${s.name} font-medium tracking-tight`}>
          <span className="text-indigo-400">Engi</span>
          <span className="text-white/90"> AI</span>
        </span>
        {showTagline && (
          <span className={`${s.tagline} mt-1 uppercase tracking-widest text-white/40`}>
            Engineering career coach
          </span>
        )}
      </div>
    </div>
  );
}