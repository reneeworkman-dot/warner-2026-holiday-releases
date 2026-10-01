import React from 'react';

export const SnowyLandscape: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Warm Golden Spiced Cider / Mulled Wine Holiday Twilight Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2b0f19] via-[#4a1829] via-[#612431] via-[#8c3b3e] to-[#b85e49]" />

      {/* Warm parchment paper overlay texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffd8a8 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Giant Cozy Amber Harvest / Holiday Lantern Moon */}
      <div className="absolute top-6 right-12 w-48 h-48 rounded-full bg-amber-300/25 blur-3xl" />
      <div className="absolute top-10 right-16 w-24 h-24 rounded-full bg-gradient-to-tr from-amber-200 via-amber-100 to-yellow-50 shadow-[0_0_60px_rgba(251,191,36,0.6)] border-2 border-amber-200/60 opacity-90" />

      {/* Warm Twinkling Holiday Stars */}
      <div className="absolute top-6 left-[8%] text-amber-200/80 text-sm animate-pulse">✦</div>
      <div className="absolute top-14 left-[20%] text-amber-100/70 text-xs">✧</div>
      <div className="absolute top-8 left-[35%] text-yellow-200/90 text-base animate-pulse">✦</div>
      <div className="absolute top-20 left-[52%] text-amber-100/70 text-xs">✧</div>
      <div className="absolute top-10 left-[72%] text-yellow-100/90 text-sm animate-pulse">✦</div>
      <div className="absolute top-5 left-[84%] text-amber-200/80 text-xs">✧</div>

      {/* Warm Misty Alpine Mountain Silhouettes in deep spiced cranberry & plum tones */}
      <svg className="absolute bottom-40 left-0 w-full h-72 opacity-45" viewBox="0 0 1200 300" preserveAspectRatio="none">
        <polygon points="0,300 120,130 250,220 400,100 580,240 750,110 900,210 1080,90 1200,200 1200,300" fill="#380d19" />
        {/* Warm golden-rose snow caps on mountain peaks */}
        <polygon points="120,130 145,160 100,165" fill="#fde68a" opacity="0.65" />
        <polygon points="400,100 435,140 370,145" fill="#fde68a" opacity="0.75" />
        <polygon points="750,110 790,150 720,155" fill="#fde68a" opacity="0.65" />
        <polygon points="1080,90 1115,130 1050,135" fill="#fde68a" opacity="0.75" />
      </svg>

      {/* Hand-Drawn Rolling Snow Hills with warm cinnamon & peach underglow */}
      <svg className="absolute bottom-14 left-0 w-full h-60 opacity-70" viewBox="0 0 1200 240" preserveAspectRatio="none">
        <path d="M0,130 C180,60 340,160 560,100 C780,40 940,140 1200,80 L1200,240 L0,240 Z" fill="#6e2b34" />
        <path d="M0,160 C240,100 420,190 700,130 C960,70 1080,150 1200,110 L1200,240 L0,240 Z" fill="#9e4343" opacity="0.5" />
      </svg>

      {/* Pine Tree Forest silhouettes with warm forest green and snow blankets */}
      <div className="absolute bottom-32 left-0 right-0 h-28 flex justify-between items-end px-3 opacity-60">
        {[45, 70, 40, 85, 55, 75, 50, 95, 65, 45, 80, 60, 90, 50, 65].map((h, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[#1c3321]"
            style={{ borderBottomWidth: `${h}px` }}
          />
        ))}
      </div>

      {/* Cozy Winter Cabin with warm candlelight and chimney smoke */}
      <div className="absolute bottom-24 left-[12%] flex items-end gap-1 opacity-90">
        <div className="w-14 h-10 bg-[#3d181e] rounded-t-sm relative border-t-2 border-amber-100 shadow-lg">
          {/* Snowy roof with warm cream snow */}
          <div className="absolute -top-3.5 -left-1.5 w-17 h-4 bg-[#fff9ed] rounded-full shadow-sm" />
          {/* Glowing amber window with candlelight flicker */}
          <div className="absolute top-2.5 left-3.5 w-3.5 h-3.5 bg-amber-300 rounded-sm shadow-[0_0_14px_rgba(251,191,36,1)] animate-pulse" />
          {/* Chimney with cozy woodsmoke puffs */}
          <div className="absolute -top-6 right-2 w-2.5 h-4 bg-stone-700">
            <div className="w-2 h-2 rounded-full bg-amber-100/40 -translate-y-2 translate-x-1 blur-[1px]" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-100/30 -translate-y-4 translate-x-2 blur-[1.5px]" />
            <div className="w-3 h-3 rounded-full bg-amber-100/20 -translate-y-6 translate-x-3 blur-[2px]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-[15%] flex items-end gap-1 opacity-90 hidden sm:flex">
        <div className="w-16 h-11 bg-[#4a1c22] rounded-t-sm relative border-t-2 border-amber-100 shadow-lg">
          <div className="absolute -top-4 -left-1.5 w-19 h-4 bg-[#fff9ed] rounded-full shadow-sm" />
          <div className="absolute top-3 left-4 w-4 h-4 bg-amber-300 rounded-sm shadow-[0_0_14px_rgba(251,191,36,1)] animate-pulse" />
          <div className="absolute -top-7 right-3 w-2.5 h-5 bg-stone-700" />
        </div>
      </div>

      {/* Foreground Soft Warm Snowdrifts (buttery cream tones instead of cold blue) */}
      <svg className="absolute bottom-0 left-0 w-full h-36" viewBox="0 0 1200 160" preserveAspectRatio="none">
        <path d="M0,75 C200,35 380,105 620,55 C860,10 1020,75 1200,40 L1200,160 L0,160 Z" fill="#e8cfb5" opacity="0.6" />
        <path d="M0,100 C240,70 420,125 700,85 C960,45 1100,100 1200,75 L1200,160 L0,160 Z" fill="#f7e6d2" opacity="0.85" />
        <path d="M0,120 C180,95 360,135 600,110 C840,85 1020,130 1200,105 L1200,160 L0,160 Z" fill="#fffdf7" />
      </svg>

      {/* Homemade Hand-Crafted Snowman */}
      <div className="absolute bottom-4 left-8 scale-90 sm:scale-100 opacity-95 hidden sm:block">
        <div className="w-16 h-16 rounded-full bg-[#fffcf5] shadow-md relative mx-auto border border-amber-200/50">
          <div className="absolute top-4 left-7 w-2 h-2 rounded-full bg-stone-800" />
          <div className="absolute top-8 left-7 w-2 h-2 rounded-full bg-stone-800" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#fffcf5] shadow-sm relative -mt-5 mx-auto border border-amber-200/50">
          <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-stone-800" />
          <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-stone-800" />
          <div className="absolute top-4.5 left-4 w-3.5 h-1.5 bg-amber-600 rounded-full rotate-6" />
          {/* Knit Pom-Pom Hat */}
          <div className="absolute -top-4 left-2 w-8 h-4.5 bg-rose-700 rounded-t-xl">
            <div className="absolute -top-2 right-2.5 w-3 h-3 rounded-full bg-amber-100 border border-amber-300" />
          </div>
          {/* Cozy Knitted Scarf */}
          <div className="absolute -bottom-1 -left-1 w-14 h-3 bg-emerald-800 rounded-full shadow" />
        </div>
      </div>

      {/* Decorated Evergreen Tree with festive folk ornaments */}
      <div className="absolute bottom-5 right-8 scale-90 sm:scale-100 opacity-95 hidden sm:block">
        <svg className="w-24 h-36" viewBox="0 0 100 150">
          <polygon points="50,12 75,50 65,50 82,90 20,90 35,50 25,50" fill="#1b4324" />
          <polygon points="50,10 72,46 63,46 78,86 24,86 37,46 28,46" fill="#245a30" />
          <rect x="44" y="90" width="12" height="22" fill="#542e18" rx="2" />
          {/* Warm snowy dollops on branches */}
          <path d="M50,12 L58,26 Q50,23 42,26 Z" fill="#fff9ed" />
          <path d="M35,50 L48,60 Q35,56 25,50 Z" fill="#fff9ed" />
          <path d="M65,50 L52,60 Q65,56 75,50 Z" fill="#fff9ed" />
          {/* Handmade Star Topper */}
          <polygon points="50,3 53,9 60,9 54,13 56,19 50,15 44,19 46,13 40,9 47,9" fill="#fcd34d" />
          {/* Warm Glass Baubles */}
          <circle cx="40" cy="40" r="3.5" fill="#dc2626" />
          <circle cx="60" cy="45" r="3.5" fill="#f59e0b" />
          <circle cx="34" cy="75" r="4" fill="#e11d48" />
          <circle cx="68" cy="70" r="3.5" fill="#fde047" />
          <circle cx="50" cy="65" r="4" fill="#f97316" />
        </svg>
      </div>

      {/* Warm Glowing Popcorn & Cranberry Holiday Fairylight Garland across top */}
      <div className="absolute top-0 left-0 right-0 h-10 flex justify-around items-start opacity-90 z-10">
        {['#f59e0b', '#dc2626', '#fbbf24', '#16a34a', '#f97316', '#dc2626', '#facc15', '#15803d', '#f59e0b', '#dc2626', '#fde047'].map((c, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-amber-900/60" />
            <div
              className="w-3.5 h-4 rounded-full shadow-md animate-pulse"
              style={{
                backgroundColor: c,
                boxShadow: `0 0 14px ${c}`,
                animationDelay: `${i * 0.25}s`,
                animationDuration: '2.2s'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
