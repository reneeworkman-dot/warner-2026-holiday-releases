import React, { useRef } from 'react';
import { Release } from '../data/catalogFull';

interface Props {
  release: Release;
  customImage: string | null;
  onUploadImage: (id: string, file: File) => void;
  onPlayChime: (id: string, title: string, artist: string) => void;
  isPlaying: boolean;
}

export const ReleaseCardWithUpload: React.FC<Props> = ({
  release,
  customImage,
  onUploadImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUploadImage(release.id, e.target.files[0]);
    }
  };

  return (
    <article className="py-6 border-b border-white/15">
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="relative block w-full aspect-square overflow-hidden cursor-pointer bg-black/25"
        title="Add a photo"
      >
        {customImage ? (
          <img src={customImage} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-center px-2 font-handwriting text-lg leading-tight text-amber-100/90">
            add a photo
          </span>
        )}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="pt-3">
        <p className="font-note text-xs text-amber-200/90">
          {[release.date, release.format].filter(Boolean).join(' · ')}
        </p>
        <h3 className="font-serif text-xl text-white leading-tight mt-0.5 [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]">
          {release.artist}
        </h3>
        <p className="font-serif italic text-base text-amber-100 [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]">
          {release.title}
        </p>

        <ul className="mt-2.5 space-y-1">
          {release.bullets?.map((bullet) => (
            <li key={bullet} className="flex gap-1.5 text-sm text-amber-50/95 leading-snug [text-shadow:0_1px_6px_rgba(0,0,0,0.75)]">
              <span className="text-amber-200 shrink-0">❄</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
