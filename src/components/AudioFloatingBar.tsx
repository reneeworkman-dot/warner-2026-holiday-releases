import React from 'react';
import { Volume2, Square, Sparkles } from 'lucide-react';
import { audioEngine } from '../audio/audioEngine';

interface Props {
  currentTrack: string | null;
  onStop: () => void;
}

export const AudioFloatingBar: React.FC<Props> = ({ currentTrack, onStop }) => {
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-in slide-in-from-bottom-5 duration-300">
      <div className="px-5 py-3 rounded-full bg-slate-900/90 border border-rose-500/40 shadow-2xl shadow-rose-950/60 backdrop-blur-xl flex items-center gap-4 text-white text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
          </span>
          <Volume2 className="w-4 h-4 text-rose-400 animate-pulse" />
        </div>

        <div className="max-w-[220px] sm:max-w-[320px] truncate">
          <span className="text-white/60">Audio Preview: </span>
          <span className="font-bold text-amber-200">{currentTrack}</span>
        </div>

        <button
          onClick={() => {
            audioEngine.stop();
            onStop();
          }}
          className="p-1.5 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-colors cursor-pointer"
          title="Stop Preview"
        >
          <Square className="w-3.5 h-3.5 fill-current" />
        </button>
      </div>
    </div>
  );
};
