import React, { useState } from 'react';
import { Play, Volume2, Sparkles, Heart, Music, ExternalLink, Download, FileText, Check, Copy } from 'lucide-react';
import { CatalogItem, KeyTrack } from '../data/types';
import { HollyIcon, CandyCaneIcon, ChristmasTreeIcon, ButterflyChristmasIcon, GingerbreadManIcon } from './ChristmasIcons';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

interface Props {
  dollyItem: CatalogItem;
  onOpenLicensingModal: (item: CatalogItem, track?: KeyTrack) => void;
  activePlayingTrack: string | null;
  onPlayTrack: (trackKey: string, trackTitle: string, artistName: string) => void;
}

export const DollyPartonShowcase: React.FC<Props> = ({
  dollyItem,
  onOpenLicensingModal,
  activePlayingTrack,
  onPlayTrack,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPitch = () => {
    const pitch = `Warner Records Dolly Parton Holiday Spotlight: "A Holly Dolly Christmas (Ultimate Deluxe Edition)" - 20 tracks, #1 Country & Holiday Billboard album featuring duets with Michael Bublé, Miley Cyrus, Jimmy Fallon, and Willie Nelson. Available for Q4 sync, brand co-ops, and broadcast licensing.`;
    navigator.clipboard.writeText(pitch);
    setCopied(true);
    audioEngine.playChime();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fbbf24', '#fbcfe8']
    });
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="dolly-spotlight" className="relative py-20 overflow-hidden">
      {/* Warm Pink & Golden Cozy Festive Glow Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0813] via-[#290a1a] to-[#120710]" />
      
      {/* Decorative Warm Holiday Fairylights String */}
      <div className="absolute top-0 left-0 right-0 h-10 flex justify-around items-start opacity-70 pointer-events-none">
        {['#f43f5e', '#facc15', '#22c55e', '#ec4899', '#38bdf8', '#facc15', '#f43f5e', '#22c55e', '#facc15', '#ec4899'].map((c, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-1.5 h-3 bg-zinc-700" />
            <div
              className="w-4 h-5 rounded-full animate-pulse shadow-md"
              style={{
                backgroundColor: c,
                boxShadow: `0 0 14px ${c}`,
                animationDelay: `${(i * 0.25)}s`,
                animationDuration: '2.5s'
              }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        
        {/* Section Header with Cute Dolly Icons */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 text-pink-200 border border-pink-400/40 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-pink-950/40">
            <ButterflyChristmasIcon className="w-4 h-4" />
            <span>Special Smoky Mountain Feature</span>
            <HollyIcon className="w-4 h-4" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-3 flex-wrap">
            <span>A Holly Dolly</span>
            <span className="text-pink-300 italic font-serif">Christmas</span>
            <span className="text-amber-300">★</span>
          </h2>

          <p className="mt-4 text-pink-100/80 text-sm sm:text-base leading-relaxed">
            There’s nobody quite like <strong className="text-white">Dolly Parton</strong> to bring joy, sparkle, and mountain warmth to your holiday campaigns. From intimate fireside hymns to playful duets with Michael Bublé and Miley Cyrus, explore 20 timeless tracks.
          </p>

          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-pink-200/90 font-medium">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> 20 Deluxe Master Tracks
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400" /> Multi-Gen Family Favorite
            </span>
            <span className="flex items-center gap-1.5">
              <HollyIcon className="w-3.5 h-3.5" /> Turnkey Q4 Clearances
            </span>
          </div>
        </div>

        {/* Dolly Showcase Card: Big, warm, lovable layout */}
        <div className="rounded-3xl bg-gradient-to-br from-pink-950/60 via-purple-950/40 to-rose-950/70 border-2 border-pink-500/30 p-6 sm:p-10 shadow-2xl shadow-pink-950/50 backdrop-blur-xl relative overflow-hidden">
          
          {/* Subtle Gingerbread & Holly stamps in background */}
          <GingerbreadManIcon className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 pointer-events-none rotate-12" />
          <ChristmasTreeIcon className="absolute top-4 right-10 w-24 h-24 opacity-10 pointer-events-none -rotate-12" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Album Cover & Quick Action Column */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-300/30 bg-slate-900">
                <img
                  src={dollyItem.coverArt}
                  alt="Dolly Parton Christmas"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Sparkling overlay badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-pink-600/90 text-white shadow-md border border-pink-300/40">
                    <ButterflyChristmasIcon className="w-3.5 h-3.5" />
                    Ultimate Deluxe
                  </span>
                </div>

                {/* Play Button Overlay */}
                <button
                  onClick={() => onPlayTrack('dolly-hero-preview', 'Holly Jolly Christmas', 'Dolly Parton')}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-pink-600 hover:bg-pink-500 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95">
                    {activePlayingTrack === 'dolly-hero-preview' ? (
                      <Volume2 className="w-7 h-7 animate-pulse" />
                    ) : (
                      <Play className="w-7 h-7 fill-current ml-1" />
                    )}
                  </div>
                </button>
              </div>

              {/* Dolly Quotes / Pitch Callout */}
              <div className="mt-5 p-4 rounded-2xl bg-pink-500/10 border border-pink-400/20 max-w-sm w-full text-left">
                <p className="text-xs text-pink-100 italic leading-relaxed">
                  “I wanted this to be like a Christmas card sent with lots of love from my home to yours.”
                </p>
                <p className="text-[11px] font-bold text-pink-300 mt-1">
                  — Dolly Parton
                </p>
              </div>

              {/* Fast Action Buttons */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center w-full max-w-sm">
                <button
                  onClick={() => onOpenLicensingModal(dollyItem)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold shadow-lg shadow-pink-900/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>License Dolly Tracks</span>
                </button>
                <button
                  onClick={handleCopyPitch}
                  className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  title="Copy Dolly pitch info"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-pink-300" />
                      <span>Copy Pitch</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Track Listing & Sync Highlights Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="border-b border-pink-500/20 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <HollyIcon className="w-4 h-4" />
                  <span>Grammy® Nominated • #1 Billboard Holiday Record</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Featured Duets &amp; Holiday Favorites
                </h3>
                <p className="text-xs text-pink-100/70 mt-1">
                  Click any track to hear the festive chime melody or request fast-track licensing.
                </p>
              </div>

              {/* Track List */}
              <div className="space-y-2.5">
                {dollyItem.keyTracks.map((track, idx) => {
                  const trackKey = `dolly-${idx}`;
                  const isPlaying = activePlayingTrack === trackKey;

                  return (
                    <div
                      key={track.title}
                      className={`p-3.5 rounded-2xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 border ${
                        isPlaying
                          ? 'bg-pink-900/60 border-pink-400 shadow-md shadow-pink-950/50 scale-[1.01]'
                          : 'bg-white/5 hover:bg-white/10 border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <button
                          onClick={() => onPlayTrack(trackKey, track.title, 'Dolly Parton')}
                          aria-label={`Preview ${track.title}`}
                          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform cursor-pointer ${
                            isPlaying
                              ? 'bg-pink-500 text-white scale-110 shadow-lg shadow-pink-500/50'
                              : 'bg-pink-500/20 hover:bg-pink-600 text-pink-200 hover:text-white'
                          }`}
                        >
                          {isPlaying ? (
                            <Volume2 className="w-4 h-4 animate-pulse" />
                          ) : (
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          )}
                        </button>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-sm truncate">
                              {track.title}
                            </h4>
                            <span className="font-mono text-[10px] text-pink-200/60">
                              {track.duration}
                            </span>
                          </div>
                          <p className="text-xs text-pink-200/80 mt-0.5 line-clamp-1">
                            {track.vibe}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                        <span className="hidden md:inline-block text-[11px] text-amber-200/80 bg-pink-950/60 px-2.5 py-1 rounded-lg border border-pink-500/20">
                          {track.syncIdeas.split(',')[0]}
                        </span>
                        <button
                          onClick={() => onOpenLicensingModal(dollyItem, track)}
                          className="px-3 py-1.5 rounded-xl bg-pink-500/20 hover:bg-pink-500 text-pink-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <span>License</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Warner Partner Perks for Dolly */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-pink-950/40 border border-pink-500/20">
                  <CandyCaneIcon className="w-5 h-5 mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-white">Full Instrumental Mixes</p>
                  <p className="text-[10px] text-pink-200/70">WAV stems &amp; clean cutdowns</p>
                </div>
                <div className="p-3 rounded-xl bg-pink-950/40 border border-pink-500/20">
                  <HollyIcon className="w-5 h-5 mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-white">Fast-Track Approvals</p>
                  <p className="text-[10px] text-pink-200/70">Warner / Butterfly sync desk</p>
                </div>
                <div className="p-3 rounded-xl bg-pink-950/40 border border-pink-500/20">
                  <ChristmasTreeIcon className="w-5 h-5 mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-white">Custom Greetings</p>
                  <p className="text-[10px] text-pink-200/70">Artist radio liners available</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
