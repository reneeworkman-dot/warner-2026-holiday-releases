import React, { useState } from 'react';
import { dollyMemorial } from '../data/catalogFull';
import { audioEngine } from '../audio/audioEngine';
import { WarnerLogo } from './WarnerLogo';

interface Props {
  onBack: () => void;
}

export const DollyMemorialPage: React.FC<Props> = ({ onBack }) => {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const handlePlay = (title: string, artist: string) => {
    if (playingTrack === title) {
      audioEngine.stop();
      setPlayingTrack(null);
    } else {
      setPlayingTrack(title);
      audioEngine.playPreview(title, title, artist);
    }
  };

  return (
    <div className="relative min-h-screen text-amber-50">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}bg/dolly.jpg')` }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />

      <div className="relative max-w-2xl mx-auto px-5 py-10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="font-handwriting text-2xl text-amber-100 hover:text-white cursor-pointer [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]"
          >
            ← back
          </button>
          <WarnerLogo />
        </div>

        <header className="mt-12 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl text-white mt-2 [text-shadow:0_3px_16px_rgba(0,0,0,0.85)]">
            Dolly Parton
          </h1>
          <p className="mt-6 font-serif italic text-xl text-amber-50 leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]">
            {dollyMemorial.tributeQuote}
          </p>
        </header>

        <section className="mt-14">
          <p className="font-note text-sm text-amber-200/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
            {dollyMemorial.date} · {dollyMemorial.format}
          </p>
          <h2 className="font-serif text-3xl text-white mt-1 [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
            {dollyMemorial.albumTitle}
          </h2>
          <ul className="mt-4 space-y-1.5">
            <li className="flex gap-2 text-sm text-amber-50/95 [text-shadow:0_1px_6px_rgba(0,0,0,0.75)]">
              <span className="text-amber-200">❄</span>
              <span>Genre: {dollyMemorial.genre}</span>
            </li>
            <li className="flex gap-2 text-sm text-amber-50/95 [text-shadow:0_1px_6px_rgba(0,0,0,0.75)]">
              <span className="text-amber-200">❄</span>
              <span>Focus: {dollyMemorial.focusTrack}</span>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => handlePlay(dollyMemorial.focusTrack, 'Dolly Parton & Michael Bublé')}
            className="mt-3 font-handwriting text-2xl text-amber-100 hover:text-white cursor-pointer"
          >
            {playingTrack === dollyMemorial.focusTrack ? 'stop the bells' : 'listen'}
          </button>
        </section>

        <div className="mt-16 pb-4 flex justify-center">
          <WarnerLogo />
        </div>
      </div>
    </div>
  );
};
