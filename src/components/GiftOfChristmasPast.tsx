import React from 'react';
import { pastReleases } from '../data/catalogFull';

interface Props {
  onPlayChime: (id: string, title: string, artist: string) => void;
  playingTrack: string | null;
}

type PastItem = (typeof pastReleases)[number]['items'][number];

const leftNames = ['TEDDY SWIMS', 'SAWEETIE', 'GRIFF', 'PATRICK DRONEY', 'MORGAN WADE'];

const isRealDate = (label?: string) => /\b(19|20)\d{2}\b/.test(label || '');

export const GiftOfChristmasPast: React.FC<Props> = ({ onPlayChime, playingTrack }) => {
  const favorites = pastReleases[0]?.items ?? [];
  const evergreen = pastReleases[1]?.items ?? [];
  const moved = leftNames
    .map((name) => evergreen.find((item) => item.artist === name))
    .filter((item): item is PastItem => Boolean(item));
  const left = [...favorites, ...moved];
  const right = evergreen.filter((item) => !leftNames.includes(item.artist));

  const renderItem = (item: PastItem, trackKey: string) => {
    const isPlaying = playingTrack === trackKey;
    const showDate = isRealDate(item.date);

    return (
      <li key={item.artist + item.title} className="py-4 border-b border-white/15">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="font-serif text-xl text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
              {item.artist}
            </p>
            <p className="font-serif italic text-amber-100 [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">
              {item.title}
            </p>
          </div>
          {showDate && (
            <span className="font-note text-sm text-amber-200/80 shrink-0">
              {item.date}
            </span>
          )}
        </div>
        <ul className="mt-2 space-y-1">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-amber-50/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.75)]">
              <span className="text-amber-200">❄</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => onPlayChime(trackKey, item.title, item.artist)}
          className="mt-2 font-handwriting text-lg text-amber-100 hover:text-white cursor-pointer"
        >
          {isPlaying ? 'stop the bells' : 'listen'}
        </button>
      </li>
    );
  };

  return (
    <section className="w-full mt-6 pt-4">
      <h2 className="font-serif text-3xl sm:text-5xl text-white text-center [text-shadow:0_2px_14px_rgba(0,0,0,0.8)]">
        Endless Holiday Cheer
      </h2>
      <p className="font-handwriting text-2xl text-amber-100 text-center mt-1 [text-shadow:0_2px_8px_rgba(0,0,0,0.75)]">
        Everything Already Out in the World
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <ul>
          {left.map((item, idx) => renderItem(item, `past-left-${idx}`))}
        </ul>
        <ul>
          {right.map((item, idx) => renderItem(item, `past-right-${idx}`))}
        </ul>
      </div>
    </section>
  );
};
