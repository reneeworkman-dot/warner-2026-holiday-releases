import React from 'react';
import { pastReleases, Release } from '../data/catalogFull';
import { ReleaseCardWithUpload } from './ReleaseCardWithUpload';

interface Props {
  uploadedPhotos: Record<string, string>;
  onUploadImage: (id: string, file: File) => void;
}

export const GiftOfChristmasPast: React.FC<Props> = ({ uploadedPhotos, onUploadImage }) => {
  const items: Release[] = pastReleases.flatMap((group) =>
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

  return (
    <section className="w-full mt-6 pt-4">
      <h2 className="font-serif text-3xl sm:text-5xl text-white text-center [text-shadow:0_2px_14px_rgba(0,0,0,0.8)]">
        Endless Holiday Cheer
      </h2>
      <p className="font-handwriting text-2xl text-amber-100 text-center mt-1 [text-shadow:0_2px_8px_rgba(0,0,0,0.75)]">
        Everything Already Out in the World
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8">
        {items.map((release) => (
          <ReleaseCardWithUpload
            key={release.id}
            release={release}
            customImage={uploadedPhotos[release.id] || null}
            onUploadImage={onUploadImage}
            onPlayChime={() => undefined}
            isPlaying={false}
          />
        ))}
      </div>
    </section>
  );
};
