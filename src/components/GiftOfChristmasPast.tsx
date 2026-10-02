import React from 'react';
import { pastReleases } from '../data/catalogFull';

interface Props {
  onPlayChime: (id: string, title: string, artist: string) => void;
  playingTrack: string | null;
}

export const GiftOfChristmasPast: React.FC<Props> = ({ onPlayChime, playingTrack }) => {
  return (
    <section className="w-full mt-6 pt-4">
      <h2 className="font-serif text-3xl sm:text-5xl text-white text-center [text-shadow:0_2px_14px_rgba(0,0,0,0.8)]">
        The Gift of Christmas Past
      </h2>
      <p className="font-handwriting text-2xl text-amber-100 text-center mt-1 [text-shadow:0_2px_8px_rgba(0,0,0,0.75)]">
        Everything Already Out in the World
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
        {pastReleases.map((group) => (
          <div key={group.category}>
            <h3 className="font-note text-amber-200 text-lg mb-2 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
              {group.category}
            </h3>
            <ul>
              {group.items.map((item, idx) => {
                const trackKey = `past-${group.category}-${idx}`;
                const isPlaying = playingTrack === trackKey;
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
                      <span className="font-note text-sm text-amber-200/80 shrink-0">
                        {item.date}
                      </span>
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
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
