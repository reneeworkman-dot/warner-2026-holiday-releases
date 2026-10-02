import React, { useState } from 'react';
import { SimpleSnow } from './components/SimpleSnow';
import { DollyOrnament } from './components/DollyOrnament';
import { DollyMemorialPage } from './components/DollyMemorialPage';
import { ReleaseCardWithUpload } from './components/ReleaseCardWithUpload';
import { GiftOfChristmasPast } from './components/GiftOfChristmasPast';
import { newReleases } from './data/catalogFull';
import { audioEngine } from './audio/audioEngine';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'main' | 'dolly'>('main');
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<Record<string, string>>({});

  const handlePlayChime = (id: string, trackTitle: string, artist: string) => {
    if (playingTrack === id) {
      audioEngine.stop();
      setPlayingTrack(null);
    } else {
      setPlayingTrack(id);
      audioEngine.playPreview(id, trackTitle, artist);
    }
  };

  const handleUploadImage = (releaseId: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setUploadedPhotos((prev) => ({
          ...prev,
          [releaseId]: e.target?.result as string,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  if (currentPage === 'dolly') {
    return (
      <DollyMemorialPage
        onBack={() => {
          setCurrentPage('main');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="relative min-h-screen text-amber-50">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}bg/holiday.jpg')` }}
      />
      <div className="fixed inset-0 -z-10 bg-black/25" />
      <SimpleSnow />

      <main className="relative z-10 max-w-4xl mx-auto px-5 py-8">
        <div className="flex justify-end gap-5 text-sm font-note text-amber-100/90">
          <button type="button" onClick={handleShareLink} className="cursor-pointer hover:text-white">
            {copied ? 'copied' : 'share'}
          </button>
          <a
            href="mailto:sync.holiday@warnerrecords.com?subject=Warner%20Records%202026%20Holiday%20Inquiry"
            className="hover:text-white"
          >
            write us
          </a>
        </div>

        <header className="text-center mt-10 mb-6">
          <h1 className="font-serif text-4xl sm:text-6xl text-white leading-tight [text-shadow:0_3px_18px_rgba(0,0,0,0.85)]">
            WR 2026 Holiday releases
          </h1>
          <h2 className="font-handwriting text-4xl sm:text-5xl text-amber-100 mt-1 [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            holiday hits
          </h2>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8">
          {newReleases.map((release) => (
            <ReleaseCardWithUpload
              key={release.id}
              release={release}
              customImage={uploadedPhotos[release.id] || null}
              onUploadImage={handleUploadImage}
              onPlayChime={handlePlayChime}
              isPlaying={playingTrack === release.id}
            />
          ))}
        </section>

        <div className="flex justify-center">
          <DollyOrnament
            onClick={() => {
              setCurrentPage('dolly');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>

        <GiftOfChristmasPast onPlayChime={handlePlayChime} playingTrack={playingTrack} />

        <footer className="mt-16 pb-8 text-center font-note text-sm text-amber-100/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
          Warner Records · sync.holiday@warnerrecords.com
        </footer>
      </main>
    </div>
  );
};
