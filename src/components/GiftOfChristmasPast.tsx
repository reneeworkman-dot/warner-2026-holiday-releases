import React from 'react';
import { pastReleases, Release } from '../data/catalogFull';
import { ReleaseCardWithUpload } from './ReleaseCardWithUpload';

interface Props {
  uploadedPhotos: Record<string, string>;
  onUploadImage: (id: string, file: File) => void;
  title: string;
  subtitle?: string;
  items: Release[];
  onPlayChime?: (id: string, title: string, artist: string) => void;
  playingId?: string | null;
}

export const catalogueReleases = (): Release[] =>
  pastReleases.flatMap((group) =>
    group.items.map((item) => ({
      id: `past-${item.artist}-${item.title}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      artist: item.artist,
      title: item.title,
      format: item.format,
      genre: item.genre,
      date: item.date,
      bullets: item.bullets,
      coverImage: item.coverImage,
    })),
  );

export const GiftOfChristmasPast: React.FC<Props> = ({
  uploadedPhotos,
  onUploadImage,
  title,
  subtitle,
  items,
  onPlayChime,
  playingId,
}) => {

  return (
    <section className="w-full mt-6 pt-4">
      <h2 className="font-serif text-3xl sm:text-5xl text-white text-center [text-shadow:0_2px_14px_rgba(0,0,0,0.8)]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-handwriting text-2xl text-amber-100 text-center mt-1 [text-shadow:0_2px_8px_rgba(0,0,0,0.75)]">
          {subtitle}
        </p>
      )}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-x-8">
        {items.map((release) => (
          <div
            key={release.id}
            className="md:col-span-2 md:nth-[3n+1]:nth-last-2:col-start-2 md:nth-[3n+2]:last:col-start-4"
          >
            <ReleaseCardWithUpload
              release={release}
              customImage={uploadedPhotos[release.id] || null}
              onUploadImage={onUploadImage}
              onPlayChime={onPlayChime ?? (() => undefined)}
              isPlaying={playingId === release.id}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
