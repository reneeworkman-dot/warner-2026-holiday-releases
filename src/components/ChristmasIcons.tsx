import React from 'react';

// Cute hand-drawn styled SVG Christmas Icons
export const HollyIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Green leaves */}
    <path d="M32 28 C20 18 10 24 6 36 C18 36 24 44 32 32 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
    <path d="M32 28 C44 18 54 24 58 36 C46 36 40 44 32 32 Z" fill="#16a34a" stroke="#15803d" strokeWidth="2" />
    <path d="M32 32 C30 46 36 56 46 58 C46 44 42 38 32 32 Z" fill="#4ade80" stroke="#15803d" strokeWidth="2" />
    {/* Red Berries */}
    <circle cx="28" cy="24" r="7" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
    <circle cx="36" cy="22" r="6.5" fill="#f87171" stroke="#991b1b" strokeWidth="2" />
    <circle cx="33" cy="31" r="7" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
    {/* Highlights */}
    <circle cx="26" cy="22" r="2" fill="#ffffff" />
    <circle cx="34" cy="20" r="1.8" fill="#ffffff" />
  </svg>
);

export const CandyCaneIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 56 L38 24 C38 14 30 8 20 8 C10 8 4 14 4 22" stroke="#dc2626" strokeWidth="10" strokeLinecap="round" />
    <path d="M38 56 L38 24 C38 14 30 8 20 8 C10 8 4 14 4 22" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" strokeDasharray="6 8" />
    <path d="M38 56 L38 24 C38 14 30 8 20 8 C10 8 4 14 4 22" stroke="#450a0a" strokeWidth="1.5" fill="none" />
    {/* Cute Ribbon Bow */}
    <path d="M26 26 C20 22 18 32 26 30 C34 32 32 22 26 26 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
    <circle cx="26" cy="28" r="3" fill="#eab308" />
  </svg>
);

export const GingerbreadManIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <ellipse cx="32" cy="18" rx="10" ry="11" fill="#b45309" stroke="#78350f" strokeWidth="2" />
    <path d="M24 28 C14 26 10 36 6 36 C4 36 4 32 8 26 C12 20 24 24 24 28 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
    <path d="M40 28 C50 26 54 36 58 36 C60 36 60 32 56 26 C52 20 40 24 40 28 Z" fill="#b45309" stroke="#78350f" strokeWidth="2" />
    <path d="M22 28 C22 44 26 44 26 58 C26 61 20 61 20 58 C20 48 18 46 18 38" fill="#b45309" stroke="#78350f" strokeWidth="2" />
    <path d="M42 28 C42 44 38 44 38 58 C38 61 44 61 44 58 C44 48 46 46 46 38" fill="#b45309" stroke="#78350f" strokeWidth="2" />
    <rect x="22" y="26" width="20" height="22" rx="8" fill="#b45309" stroke="#78350f" strokeWidth="2" />
    {/* Cute Icing Face */}
    <circle cx="28" cy="16" r="1.5" fill="#ffffff" />
    <circle cx="36" cy="16" r="1.5" fill="#ffffff" />
    <path d="M28 22 Q32 26 36 22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    {/* Candy Gumdrop Buttons */}
    <circle cx="32" cy="32" r="2.5" fill="#ef4444" />
    <circle cx="32" cy="39" r="2.5" fill="#22c55e" />
    {/* Cute Bowtie */}
    <polygon points="28,26 36,26 32,28" fill="#ec4899" />
    <polygon points="28,30 36,30 32,28" fill="#ec4899" />
  </svg>
);

export const SantaHatIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Red Cone */}
    <path d="M12 46 C16 36 28 14 44 14 C48 14 54 18 52 24 C50 28 46 30 42 32 C34 36 26 42 16 46 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
    {/* Pompom */}
    <circle cx="50" cy="24" r="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
    {/* Fluffy Brim */}
    <rect x="8" y="44" width="44" height="12" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
  </svg>
);

export const ChristmasTreeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Trunk */}
    <rect x="28" y="50" width="8" height="10" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />
    {/* Tree Branches */}
    <path d="M32 10 L44 26 L38 26 L48 38 L42 38 L52 50 L12 50 L22 38 L16 38 L26 26 L20 26 Z" fill="#15803d" stroke="#14532d" strokeWidth="2" />
    <path d="M32 12 L41 24 L36 24 L45 36 L39 36 L48 48 L16 48 L25 36 L19 36 L28 24 L23 24 Z" fill="#16a34a" />
    {/* Ornaments */}
    <circle cx="24" cy="44" r="2.5" fill="#ef4444" />
    <circle cx="40" cy="44" r="2.5" fill="#f59e0b" />
    <circle cx="28" cy="34" r="2.2" fill="#ec4899" />
    <circle cx="36" cy="32" r="2.2" fill="#38bdf8" />
    <circle cx="32" cy="22" r="2" fill="#fbbf24" />
    {/* Gold Topper Star */}
    <polygon points="32,4 34,9 39,9 35,13 37,18 32,15 27,18 29,13 25,9 30,9" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
  </svg>
);

export const JingleBellsIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left Bell */}
    <g transform="rotate(-15 26 36)">
      <path d="M16 42 C16 28 24 24 28 24 C32 24 40 28 40 42 C40 44 16 44 16 42 Z" fill="#facc15" stroke="#a16207" strokeWidth="2" />
      <rect x="14" y="42" width="28" height="4" rx="2" fill="#eab308" stroke="#a16207" strokeWidth="1.5" />
      <circle cx="28" cy="47" r="3" fill="#713f12" />
    </g>
    {/* Right Bell */}
    <g transform="rotate(18 38 36)">
      <path d="M26 42 C26 28 34 24 38 24 C42 24 50 28 50 42 C50 44 26 44 26 42 Z" fill="#fde047" stroke="#a16207" strokeWidth="2" />
      <rect x="24" y="42" width="28" height="4" rx="2" fill="#eab308" stroke="#a16207" strokeWidth="1.5" />
      <circle cx="38" cy="47" r="3" fill="#713f12" />
    </g>
    {/* Red Ribbon Top */}
    <path d="M24 16 C30 12 34 24 32 24 C30 24 34 12 40 16" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
    <circle cx="32" cy="18" r="4" fill="#dc2626" />
  </svg>
);

export const StockingIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Hanging Loop */}
    <path d="M22 10 C20 6 26 4 28 8" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
    {/* Red Boot */}
    <path d="M24 18 L24 40 C24 48 16 54 22 58 C28 62 38 60 42 54 C46 48 40 38 40 18 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
    {/* Green Toe and Heel */}
    <path d="M38 52 C38 58 44 54 42 54 Z" fill="#22c55e" />
    <circle cx="24" cy="42" r="5" fill="#22c55e" />
    {/* White Fluffy Cuff */}
    <rect x="20" y="14" width="24" height="10" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
  </svg>
);

export const ChristmasGiftIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Box */}
    <rect x="12" y="24" width="40" height="34" rx="4" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
    {/* Lid */}
    <rect x="8" y="18" width="48" height="9" rx="3" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
    {/* Ribbons */}
    <rect x="28" y="18" width="8" height="40" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
    <rect x="12" y="36" width="40" height="8" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
    {/* Bow */}
    <ellipse cx="26" cy="14" rx="7" ry="5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
    <ellipse cx="38" cy="14" rx="7" ry="5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
    <circle cx="32" cy="16" r="3" fill="#eab308" />
  </svg>
);

export const SnowmanIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bottom Snowball */}
    <circle cx="32" cy="44" r="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
    {/* Top Snowball */}
    <circle cx="32" cy="24" r="11" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
    {/* Top Hat */}
    <rect x="24" y="6" width="16" height="10" rx="1" fill="#1e293b" />
    <rect x="20" y="15" width="24" height="3" rx="1.5" fill="#0f172a" />
    <rect x="24" y="13" width="16" height="2" fill="#ef4444" />
    {/* Coal Eyes & Smile */}
    <circle cx="28" cy="22" r="1.5" fill="#0f172a" />
    <circle cx="36" cy="22" r="1.5" fill="#0f172a" />
    <circle cx="28" cy="27" r="0.8" fill="#0f172a" />
    <circle cx="32" cy="28" r="0.8" fill="#0f172a" />
    <circle cx="36" cy="27" r="0.8" fill="#0f172a" />
    {/* Carrot Nose */}
    <polygon points="31,23 38,25 31,26" fill="#f97316" />
    {/* Red Cozy Scarf */}
    <path d="M22 30 C26 34 38 34 42 30 C44 32 44 34 42 36 C38 40 26 40 22 36 Z" fill="#dc2626" />
    <rect x="34" y="32" width="6" height="14" rx="2" fill="#ef4444" />
  </svg>
);

export const ButterflyChristmasIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wings */}
    <path d="M32 28 C20 10 2 16 8 36 C14 50 28 38 32 32 Z" fill="#f43f5e" stroke="#be123c" strokeWidth="2" />
    <path d="M32 28 C44 10 62 16 56 36 C50 50 36 38 32 32 Z" fill="#fb7185" stroke="#be123c" strokeWidth="2" />
    <path d="M32 32 C24 38 16 56 26 58 C32 58 32 44 32 32 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
    <path d="M32 32 C40 38 48 56 38 58 C32 58 32 44 32 32 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
    {/* Sparkle spots */}
    <circle cx="18" cy="26" r="3" fill="#ffffff" />
    <circle cx="46" cy="26" r="3" fill="#ffffff" />
    {/* Body */}
    <ellipse cx="32" cy="30" rx="3" ry="12" fill="#881337" />
    <circle cx="30" cy="16" r="1.5" fill="#881337" />
    <circle cx="34" cy="16" r="1.5" fill="#881337" />
  </svg>
);
