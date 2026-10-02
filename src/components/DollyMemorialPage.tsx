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
          <p className="font-note text-sm tracking-[0.25em] uppercase text-amber-200 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            in her memory
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-white mt-2 [text-shadow:0_3px_16px_rgba(0,0,0,0.85)]">
            Dolly Parton
          </h1>
          <p className="font-handwriting text-3xl text-amber-100 mt-2 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
            {dollyMemorial.tagline}
          </p>
          <p className="mt-6 font-serif italic text-xl text-amber-50 leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]">
            {dollyMemorial.tributeQuote}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-amber-50/95 [text-shadow:0_2px_8px_rgba(0,0,0,0.85)]">
            {dollyMemorial.memorialNote}
          </p>
        </header>

        <section className="mt-14">
          <p className="font-note text-amber-200 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
            A Holly Dolly Christmas
          </p>
          <h2 className="font-serif text-3xl text-white mt-1 [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
            {dollyMemorial.focusTrack}
          </h2>
          <button
            type="button"
            onClick={() => handlePlay(dollyMemorial.focusTrack, 'Dolly Parton & Michael Bublé')}
            className="mt-3 font-handwriting text-2xl text-amber-100 hover:text-white cursor-pointer"
          >
            {playingTrack === dollyMemorial.focusTrack ? 'stop the bells' : 'listen'}
          </button>
        </section>

        <ul className="mt-10">
          {dollyMemorial.tracks.map((t) => {
            const on = playingTrack === t.title;
            return (
              <li key={t.title} className="py-4 border-b border-white/20">
                <button
                  type="button"
                  onClick={() => handlePlay(t.title, t.artist)}
                  className="w-full text-left cursor-pointer"
                >
                  <p className="font-serif text-lg text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
                    {t.title}
                  </p>
                  <p className="text-sm text-amber-100/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
                    {t.artist}
                  </p>
                  <p className="mt-1 flex gap-2 text-sm text-amber-50/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
                    <span>❄</span>
                    <span>{t.vibe}</span>
                  </p>
                  <span className="font-handwriting text-lg text-amber-100">
                    {on ? 'playing' : 'listen'}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <ul className="mt-10 space-y-2">
          {dollyMemorial.legacyHighlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-amber-50 [text-shadow:0_1px_6px_rgba(0,0,0,0.85)]">
              <span className="text-amber-200">❄</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 pb-4 flex justify-center">
          <WarnerLogo />
        </div>
      </div>
    </div>
  );
};
