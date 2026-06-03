type EngiLogoProps = {
  size?: number;
  className?: string;
};

/**
 * Engi — the Engi AI mascot logo.
 * Use <EngiLogo size={32} /> anywhere you need the icon alone.
 * For the full wordmark lockup, use <EngiWordmark />.
 */
export default function EngiLogo({ size = 40, className = "" }: EngiLogoProps) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Engi AI logo"
      role="img"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="50" cy="58" r="47" fill="#1e1b4b" />

      {/* Face / squircle body */}
      <rect
        x="18" y="32" width="64" height="54" rx="24"
        fill="#4338ca" fillOpacity="0.18"
      />
      <rect
        x="18" y="32" width="64" height="54" rx="24"
        stroke="#818cf8" strokeWidth="1.4"
      />

      {/* Left eye — crescent */}
      <ellipse cx="38" cy="54" rx="10" ry="7" fill="#4338ca" fillOpacity="0.2" />
      <path
        d="M28 54 Q38 43 48 54"
        stroke="#a5b4fc" strokeWidth="2.4" strokeLinecap="round"
      />

      {/* Right eye — crescent */}
      <ellipse cx="62" cy="54" rx="10" ry="7" fill="#4338ca" fillOpacity="0.2" />
      <path
        d="M52 54 Q62 43 72 54"
        stroke="#a5b4fc" strokeWidth="2.4" strokeLinecap="round"
      />

      {/* Mouth — single dot */}
      <circle cx="50" cy="68" r="3.2" fill="#818cf8" />

      {/* Antenna — thick L-shape going up then left */}
      <polyline
        points="50,32 50,14 34,14"
        stroke="#a5b4fc" strokeWidth="4"
        strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Antenna tip orb */}
      <circle cx="33" cy="14" r="5.5" fill="#a5b4fc" />

      {/* Side ear nubs */}
      <rect x="14" y="50" width="8" height="5" rx="2.5" fill="#818cf8" fillOpacity="0.28" />
      <rect x="78" y="50" width="8" height="5" rx="2.5" fill="#818cf8" fillOpacity="0.28" />
    </svg>
  );
}