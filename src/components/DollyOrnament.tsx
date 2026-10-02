import React from 'react';

interface Props {
  onClick: () => void;
}

export const DollyOrnament: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="my-16 mx-auto flex flex-col items-center gap-3 cursor-pointer group"
    >
      <div className="w-px h-8 bg-amber-200/80" />
      <div className="relative">
        <div className="absolute inset-0 bg-amber-300/40 blur-2xl rounded-full scale-110 animate-pulse" />
        <svg
          viewBox="-60 -60 120 120"
          className="relative w-36 h-36 sm:w-44 sm:h-44 drop-shadow-[0_0_18px_rgba(251,191,36,0.85)] transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldFlake" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff4c2" />
              <stop offset="45%" stopColor="#f5c542" />
              <stop offset="100%" stopColor="#b8860b" />
            </linearGradient>
          </defs>
          <g stroke="url(#goldFlake)" strokeWidth="5" strokeLinecap="round" fill="none">
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <g key={angle} transform={`rotate(${angle})`}>
                <line x1="0" y1="0" x2="0" y2="-50" />
                <line x1="0" y1="-26" x2="14" y2="-38" />
                <line x1="0" y1="-26" x2="-14" y2="-38" />
                <line x1="0" y1="-40" x2="9" y2="-48" />
                <line x1="0" y1="-40" x2="-9" y2="-48" />
              </g>
            ))}
          </g>
          <circle r="7" fill="url(#goldFlake)" />
          <circle r="3" fill="#fff8dc" />
        </svg>
      </div>
      <span className="font-handwriting text-4xl font-bold text-amber-300 [text-shadow:0_0_18px_rgba(251,191,36,0.6),0_2px_12px_rgba(0,0,0,0.85)]">
        Dolly Parton
      </span>
      <span className="font-note text-sm text-amber-100/85 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
        A Page in Her Honor
      </span>
    </button>
  );
};
