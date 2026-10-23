import React, { useState } from 'react';
import { SimpleSnow } from './components/SimpleSnow';
import { WarnerLogo } from './components/WarnerLogo';
import { DollyOrnament } from './components/DollyOrnament';
import { DollyMemorialPage } from './components/DollyMemorialPage';
import { GiftOfChristmasPast, catalogueReleases } from './components/GiftOfChristmasPast';
import { newReleases, Release } from './data/catalogFull';
import { audioEngine } from './audio/audioEngine';

const releaseKey = (release: Release) => `${release.artist}\0${release.title}`;

const featuredKeys: Array<[string, string]> = [
  ['Ryan Peter Murphy', 'Christmas in New England'],
  ['Dan + Shay', '“Officially Christmas”'],
  ['The Neighbourhood', '“Why’d You Have To Leave”'],
  ['Dasha', '“Driving Home For Christmas”'],
  ['Lucky Daye', 'Present For You'],
  ['Alex Isley', '“The Christmas Song”'],
  ['Maddox Batson', '“Home for the Holidays”'],
  ['Gabby Barrett', 'Carols and Candlelight (Deluxe)'],
  ['Alex Crichton', '“What If I Call (Merry Christmas, i miss you)”'],
  ['Brandy Clark', '“My Favorite Christmas”'],
  ['Cher', 'Christmas'],
  ['Dolly Parton', 'A Holly Dolly Christmas (Ultimate Deluxe Edition)'],
  ['Cody Johnson', 'A Cody Johnson Christmas'],
  ['Michael Bublé', 'Christmas (Deluxe 10th Anniversary Edition)'],
  ['Teddy Swims', 'A Very Teddy Christmas'],
  ['Patrick Droney', '“All I Want for Christmas Is You”'],
  ['The Goo Goo Dolls', 'It’s Christmas All Over'],
  ['Faith Hill', 'Joy To The World'],
  ['Josh Groban', 'Noël'],
];

const catalogue = catalogueReleases();
const previousOrder = [...catalogue.slice(0, 12), ...newReleases, ...catalogue.slice(12)];
const byKey = new Map(previousOrder.map((release) => [releaseKey(release), release]));
const featuredReleases = featuredKeys.map(([artist, title]) => {
  const release = byKey.get(`${artist}\0${title}`);
  if (!release) {
    throw new Error(`Missing release: ${artist} — ${title}`);
  }
  return release;
});
const featuredSet = new Set(featuredReleases.map(releaseKey));
const remainingReleases = previousOrder.filter((release) => !featuredSet.has(releaseKey(release)));

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
        <div className="flex items-center justify-between gap-5">
          <WarnerLogo />
          <button type="button" onClick={handleShareLink} className="font-note text-sm text-amber-100/90 cursor-pointer hover:text-white">
            {copied ? 'copied' : 'share'}
          </button>
        </div>

        <header className="text-center mt-10 mb-6">
          <h1 className="display font-black uppercase text-4xl sm:text-6xl text-white leading-tight tracking-wide [text-shadow:0_3px_18px_rgba(0,0,0,0.85)]">
            Warner Records 2026 Holiday Releases
          </h1>
        </header>

        <GiftOfChristmasPast
          title="Endless Holiday Cheer"
          items={featuredReleases}
          uploadedPhotos={uploadedPhotos}
          onUploadImage={handleUploadImage}
          onPlayChime={handlePlayChime}
          playingId={playingTrack}
        />

        <div className="flex justify-center">
          <DollyOrnament
            onClick={() => {
              setCurrentPage('dolly');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>

        <GiftOfChristmasPast
          title="And More Holiday Hits"
          items={remainingReleases}
          uploadedPhotos={uploadedPhotos}
          onUploadImage={handleUploadImage}
          onPlayChime={handlePlayChime}
          playingId={playingTrack}
        />

        <footer className="mt-16 pb-8 flex justify-center">
          <WarnerLogo />
        </footer>
      </main>
    </div>
  );
};
