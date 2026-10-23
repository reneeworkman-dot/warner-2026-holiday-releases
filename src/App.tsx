import React, { useState } from 'react';
import { SimpleSnow } from './components/SimpleSnow';
import { WarnerLogo } from './components/WarnerLogo';
import { DollyOrnament } from './components/DollyOrnament';
import { DollyMemorialPage } from './components/DollyMemorialPage';
import { GiftOfChristmasPast, catalogueReleases } from './components/GiftOfChristmasPast';
import { addedReleases, newReleases, Release } from './data/catalogFull';
import { audioEngine } from './audio/audioEngine';

const releaseKey = (release: Release) => `${release.artist}\0${release.title}`;

const comingKeys: Array<[string, string]> = [
  ['Ryan Peter Murphy', 'Christmas in New England'],
  ['Ingrid Andress', '“Snowed In With Me”'],
  ['The Neighbourhood', '“Why’d You Have To Leave”'],
  ['Lucky Daye', 'Present For You'],
  ['Colton Dawson', '“I’ll Be Home For Christmas”'],
  ['Highway Home', 'Highway Home For Christmas: “Please Come Home For Christmas / O Holy Night”'],
  ['Slater Nalley', '“January (w/The Castellows)”'],
  ['adore', '“I’ll Hold On For Christmas”'],
  ['Jenna Raine', '“Frosty / A Baby Was Born”'],
];

const cheerKeys: Array<[string, string]> = [
  ['Josh Groban', 'Noël'],
  ['Dan + Shay', '“Officially Christmas”'],
  ['Cher', 'Christmas'],
  ['Teddy Swims', 'A Very Teddy Christmas'],
  ['Patrick Droney', '“All I Want for Christmas Is You”'],
  ['Dasha', '“Driving Home For Christmas”'],
  ['Alex Isley', '“The Christmas Song”'],
  ['Alex Crichton', '“What If I Call (Merry Christmas, i miss you)”'],
  ['Cody Johnson', 'A Cody Johnson Christmas'],
  ['Michael Bublé', 'Christmas (Deluxe 10th Anniversary Edition)'],
  ['Maddox Batson', '“Home for the Holidays”'],
  ['Gabby Barrett', 'Carols and Candlelight (Deluxe)'],
  ['Brandy Clark', '“My Favorite Christmas / I’ll Be Home For Christmas”'],
  ['Dolly Parton', 'A Holly Dolly Christmas (Ultimate Deluxe Edition)'],
  ['The Goo Goo Dolls', 'It’s Christmas All Over'],
  ['Faith Hill', 'Joy To The World'],
];

const catalogue = catalogueReleases();
const previousOrder = [...catalogue.slice(0, 12), ...newReleases, ...catalogue.slice(12)];
const byKey = new Map(previousOrder.map((release) => [releaseKey(release), release]));
const pick = (keys: Array<[string, string]>) =>
  keys.map(([artist, title]) => {
    const release = byKey.get(`${artist}\0${title}`);
    if (!release) {
      throw new Error(`Missing release: ${artist} — ${title}`);
    }
    return release;
  });
const comingReleases = pick(comingKeys);
const cheerReleases = pick(cheerKeys);
const placed = new Set([...comingReleases, ...cheerReleases].map(releaseKey));
const remainingReleases = [
  ...previousOrder.filter((release) => !placed.has(releaseKey(release))),
  ...addedReleases,
];

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
          title="Coming This Season"
          items={comingReleases}
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
          title="Endless Holiday Cheer"
          subtitle="Everything Already Out in the World"
          items={cheerReleases}
          uploadedPhotos={uploadedPhotos}
          onUploadImage={handleUploadImage}
          onPlayChime={handlePlayChime}
          playingId={playingTrack}
        />

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
