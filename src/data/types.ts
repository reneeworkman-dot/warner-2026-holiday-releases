import catalogData from '../../data/catalog.json';
import partnerInfoData from '../../data/partnerInfo.json';

export interface KeyTrack {
  title: string;
  duration: string;
  vibe: string;
  syncIdeas: string;
  bpm: number;
  explicit: boolean;
}

export interface CatalogItem {
  id: string;
  title: string;
  artist: string;
  releaseYear: string;
  tagline: string;
  badge: string;
  category: string;
  format: string;
  syncCleared: string;
  keyTracks: KeyTrack[];
  highlights: string[];
  soundAlikes: string;
  accentColor: string;
  gradient: string;
  coverArt: string;
}

export interface PartnerContact {
  role: string;
  name: string;
  email: string;
  office: string;
  specialty: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const catalog: CatalogItem[] = catalogData as CatalogItem[];
export const partnerInfo = partnerInfoData;
