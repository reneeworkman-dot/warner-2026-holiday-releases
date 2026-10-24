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
  ['Ryan Peter Murphy', 'Christmas in New England / “Joy Lives Here (Hallmark Anthem)”'],
  ['Ingrid Andress', '“Snowed In With Me”'],
  ['Dasha', '“Something To Believe In”'],
  ['The Neighbourhood', '“Why’d You Have To Leave”'],
  ['Lucky Daye', 'Present For You'],
  ['Colton Dawson', '“I’ll Be Home For Christmas”'],
  ['Highway Home', 'Highway Home For Christmas: “Please Come Home For Christmas / O Holy Night”'],
  ['Bea', '“Christmas Makes Me Cry”'],
  ['Slater Nalley', '“January (w/The Castellows)”'],
  ['adore', '“I’ll Hold On For Christmas”'],
  ['Jenna Raine', '“Frosty / A Baby Was Born”'],
  ['Dan + Shay', '“It’s Beginning To Look A Lot Like Christmas”'],
  ['The Creekers', '“Mary, Did You Know?” (w/ The Band Loula) / “Christmas Time’s a Comin’”'],
  ['Chris Janson', '“Reason For The Season”'],
  ['Morgan Wade', '“Christmas List”'],
  ['Tyler Braden', '“A Lot Like Christmas”'],
  ['Hailey Hutcheson', '“Bells of Christmas Eve”'],
];

const endlessKeys: Array<[string, string]> = [
  ['Dan + Shay', '“Officially Christmas”'],
  ['Michael Bublé', 'Christmas (Deluxe 10th Anniversary Edition)'],
  ['Cher', 'Christmas'],
  ['Josh Groban', 'Noël'],
  ['Teddy Swims', 'A Very Teddy Christmas'],
  ['Dasha', '“Driving Home For Christmas”'],
  ['Patrick Droney', '“All I Want for Christmas Is You”'],
  ['Alex Crichton', '“What If I Call (Merry Christmas, i miss you)”'],
  ['Dolly Parton', 'A Holly Dolly Christmas (Ultimate Deluxe Edition)'],
  ['Brandy Clark', '“My Favorite Christmas / I’ll Be Home For Christmas”'],
  ['The Goo Goo Dolls', 'It’s Christmas All Over'],
  ['Faith Hill', 'Joy To The World'],
  ['Alex Isley', '“The Christmas Song”'],
  ['Cody Johnson', 'A Cody Johnson Christmas'],
  ['Maddox Batson', '“Home for the Holidays”'],
  ['Gabby Barrett', 'Carols and Candlelight (Deluxe)'],
];

const moreKeys: Array<[string, string]> = [
  ['Griff', '“Pure Imagination”'],
  ['Warren Zeiders', '“How Great Thou Art”'],
  ['Saweetie', 'Dear Big Santa: “Big Santa / I Want You This Christmas”'],
  ['Gabby Barrett', '“Where Are You Christmas”'],
  ['Green Day', '“Xmas Time of Year”'],
  ['Dan + Shay', '“Long Live Christmas”'],
  ['Anna Rae', '“Christmas Eve”'],
  ['Honey Bxby', '“All I Want”'],
  ['My Chemical Romance', '“All I Want For Christmas is You - 2005”'],
  ['Morgan Wade', 'Christmas in My Dreams'],
  ['Anna Rae', '“Shouldn’t It Be Christmas”'],
  ['NLE Choppa', 'What A Christmas'],
];

const catalogue = catalogueReleases();
const previousOrder = [...catalogue.slice(0, 12), ...newReleases, ...catalogue.slice(12)];
const byKey = new Map([...previousOrder, ...addedReleases].map((release) => [releaseKey(release), release]));
const pick = (keys: Array<[string, string]>) =>
  keys.map(([artist, title]) => {
    const release = byKey.get(`${artist}\0${title}`);
    if (!release) {
      throw new Error(`Missing release: ${artist} — ${title}`);
    }
    return release;
  });
const comingReleases = pick(comingKeys);
const endlessReleases = pick(endlessKeys);
const moreReleases = pick(moreKeys);

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
          title="Endless Holiday Hits"
          subtitle="Everything Already Out in the World"
          items={endlessReleases}
          uploadedPhotos={uploadedPhotos}
          onUploadImage={handleUploadImage}
          onPlayChime={handlePlayChime}
          playingId={playingTrack}
        />

        <GiftOfChristmasPast
          title="And More Holiday Cheer"
          items={moreReleases}
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
