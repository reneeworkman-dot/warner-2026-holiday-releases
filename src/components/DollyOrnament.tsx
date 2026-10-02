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
      {/* Tiny gold hanging loop, ornament-style */}
      <div className="w-3 h-3 rounded-full border-2 border-amber-300 -mb-1" />

      <div className="relative">
        {/* Warm gold halo glow behind the ornament */}
        <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-amber-300/50 via-yellow-400/35 to-amber-500/30 blur-2xl animate-pulse" />

        {/* Gold ring frame */}
        <div className="relative p-1.5 rounded-full bg-gradient-to-br from-yellow-200 via-amber-400 to-amber-600 shadow-[0_0_35px_rgba(251,191,36,0.55)] transition-transform duration-300 group-hover:scale-[1.04]">
          <div className="rounded-full p-[3px] bg-gradient-to-br from-amber-100 via-amber-300 to-amber-500">
            <img
              src={`${import.meta.env.BASE_URL}bg/dolly.jpg`}
              alt=""
              className="w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-full"
            />
          </div>
        </div>

        {/* Sparkle accent */}
        <span className="absolute -top-1 -right-1 text-amber-200 text-xl drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]">
          ✦
        </span>
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
