import React, { useState } from 'react';
import { Play, Volume2, Sparkles, ExternalLink, Music, ShieldCheck, Check, Copy } from 'lucide-react';
import { CatalogItem, KeyTrack } from '../data/types';
import { HollyIcon, CandyCaneIcon, ChristmasGiftIcon, GingerbreadManIcon, SantaHatIcon } from './ChristmasIcons';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

interface Props {
  item: CatalogItem;
  onOpenLicensingModal: (item: CatalogItem, track?: KeyTrack) => void;
  activePlayingTrack: string | null;
  onPlayTrack: (trackKey: string, trackTitle: string, artistName: string) => void;
}

export const ReleaseCard: React.FC<Props> = ({
  item,
  onOpenLicensingModal,
  activePlayingTrack,
  onPlayTrack,
}) => {
  const [copied, setCopied] = useState(false);
  const [expandedTracks, setExpandedTracks] = useState(false);

  const handleCopyPitch = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Warner Records Holiday Music: ${item.artist} - ${item.title}. Highlights: ${item.tagline}. Clearances: ${item.syncCleared}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    audioEngine.playChime();
    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.7 },
      colors: ['#ef4444', '#facc15', '#22c55e']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="group relative rounded-3xl cozy-card cozy-card-hover flex flex-col overflow-hidden">
      {/* Decorative festive ribbon header */}
      <div 
        className="h-2 w-full transition-all duration-300 group-hover:h-2.5"
        style={{ backgroundColor: item.accentColor }}
      />

      {/* Card Header & Artwork */}
      <div className="p-5 pb-3">
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl mb-4 bg-slate-900 group/art border border-white/10">
          <img
            src={item.coverArt}
            alt={`${item.artist} - ${item.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Cute Badge with Festive Icon */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-md">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {item.badge}
            </span>
          </div>

          {/* Quick Play First Track Preview Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover/art:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
            <button
              onClick={() => onPlayTrack(`${item.id}-preview`, item.keyTracks[0]?.title || item.title, item.artist)}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              {activePlayingTrack === `${item.id}-preview` ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" /> Stop Preview
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" /> Listen
                </>
              )}
            </button>
            <span className="text-[11px] font-mono text-white/80 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm">
              {item.format.split(',')[0]}
            </span>
          </div>
        </div>

        {/* Release Meta */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-pink-200/60 font-medium">
            <span>{item.category.split('/')[0]}</span>
            <span className="font-mono">{item.releaseYear}</span>
          </div>
          <h3 className="text-xl font-black tracking-tight text-white group-hover:text-pink-300 transition-colors">
            {item.artist}
          </h3>
          <h4 className="text-xs font-semibold text-amber-200 line-clamp-1">
            {item.title}
          </h4>
        </div>

        {/* Tagline Pitch */}
        <p className="mt-2.5 text-xs text-pink-100/80 leading-relaxed line-clamp-2">
          {item.tagline}
        </p>

        {/* Pre-Clearance Badge */}
        <div className="mt-3 py-1.5 px-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/25 text-emerald-300 text-[11px] flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
          <span className="truncate">{item.syncCleared}</span>
        </div>
      </div>

      {/* Featured Key Tracks Audio Suite */}
      <div className="px-5 py-3 bg-white/[0.02] border-t border-b border-pink-200/10 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-pink-300/80 flex items-center gap-1.5">
            <Music className="w-3 h-3 text-pink-400" /> Key Songs
          </span>
          <button
            onClick={() => setExpandedTracks(!expandedTracks)}
            className="text-[11px] text-pink-400 hover:text-pink-300 cursor-pointer font-bold"
          >
            {expandedTracks ? 'Fewer' : `All (${item.keyTracks.length})`}
          </button>
        </div>

        <div className="space-y-1.5">
          {(expandedTracks ? item.keyTracks : item.keyTracks.slice(0, 2)).map((track, idx) => {
            const trackKey = `${item.id}-${idx}`;
            const isPlaying = activePlayingTrack === trackKey;

            return (
              <div
                key={track.title}
                className={`p-2.5 rounded-xl text-xs transition-colors flex items-center justify-between gap-2 ${
                  isPlaying ? 'bg-pink-900/40 border border-pink-500/40' : 'bg-white/[0.03] hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <button
                    onClick={() => onPlayTrack(trackKey, track.title, item.artist)}
                    aria-label={`Preview ${track.title}`}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${
                      isPlaying
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-600/50 scale-105'
                        : 'bg-white/10 hover:bg-rose-600 text-white/90 hover:text-white'
                    }`}
                  >
                    {isPlaying ? (
                      <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                    ) : (
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    )}
                  </button>
                  <div className="min-w-0">
                    <p className="font-bold text-white truncate text-[12px]">{track.title}</p>
                    <p className="text-[10px] text-pink-200/60 truncate">{track.vibe}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="font-mono text-[10px] text-white/40">{track.duration}</span>
                  <button
                    onClick={() => onOpenLicensingModal(item, track)}
                    className="p-1 rounded text-white/40 hover:text-pink-400 hover:bg-white/5 transition-colors cursor-pointer"
                    title="Request song details"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sound-alikes preview */}
      <div className="px-5 py-2.5 text-[11px] text-pink-200/70">
        <span className="text-pink-200/40 font-medium">Vibe matches: </span>
        <span className="italic">{item.soundAlikes}</span>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 bg-black/40 mt-auto border-t border-pink-200/10 flex items-center justify-between gap-2">
        <button
          onClick={handleCopyPitch}
          className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Copy pitch info to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-pink-300" /> Quick Pitch
            </>
          )}
        </button>

        <button
          onClick={() => onOpenLicensingModal(item)}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold transition-all shadow-md shadow-rose-950/40 flex items-center gap-1.5 cursor-pointer active:scale-95"
        >
          <span>License Track</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
