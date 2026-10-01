import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldAlert, Sparkles, Music2, FileText, Download } from 'lucide-react';
import { CatalogItem, KeyTrack } from '../data/types';
import confetti from 'canvas-confetti';
import { audioEngine } from '../audio/audioEngine';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  item: CatalogItem | null;
  track?: KeyTrack | null;
}

export const LicensingModal: React.FC<Props> = ({
  isOpen,
  onClose,
  item,
  track,
}) => {
  if (!isOpen || !item) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    partnerName: '',
    company: '',
    email: '',
    useCase: 'Broadcast Commercial (TV / Digital)',
    budgetTier: '$25,000 - $75,000',
    timeline: 'Immediate (Within 48 hours)',
    territory: 'Worldwide',
    specificNeeds: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    audioEngine.playChime();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#d4af37', '#10b981', '#38bdf8']
    });
  };

  const handleDownloadDeck = () => {
    audioEngine.playChime();
    // Generate one-sheet markdown summary and trigger download
    const content = `# Warner Records Holiday Licensing One-Sheet
Project: ${item.artist} - ${item.title}
Season: Holiday 2025/2026 Partner Suite
Pre-Clearance Status: ${item.syncCleared}

Key Contact: Julia Betley (Global Creative Sync) - sync.holiday@warnerrecords.com
Office: Los Angeles / New York

Highlights:
${item.highlights.map(h => `- ${h}`).join('\n')}

Priority Tracks:
${item.keyTracks.map(t => `- "${t.title}" (${t.duration}) | Vibe: ${t.vibe} | Suggested Sync: ${t.syncIdeas}`).join('\n')}

Sound Alikes: ${item.soundAlikes}
Formats Available: ${item.format}

Confidential Partner Asset — Warner Records Inc.
`;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `WarnerRecords_${item.artist.replace(/\s+/g, '_')}_Holiday_OneSheet.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl glass-panel-glow border border-white/20 p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received &amp; Prioritized</h3>
            <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.partnerName || 'Partner'}</span>. Our Warner Records Holiday Sync &amp; Brand Partnership desk has flagged your request for{' '}
              <span className="text-rose-400 font-semibold">{item.artist} - {track ? track.title : item.title}</span>.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-xs text-white/70 text-left space-y-1">
              <p><strong>Timeline:</strong> {formData.timeline}</p>
              <p><strong>Use Case:</strong> {formData.useCase}</p>
              <p><strong>Dedicated Coordinator:</strong> Julia Betley (sync.holiday@warnerrecords.com)</p>
            </div>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleDownloadDeck}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Download className="w-4 h-4" /> Download Official One-Sheet
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header info */}
            <div className="flex items-start gap-4 mb-6">
              <img
                src={item.coverArt}
                alt={item.title}
                className="w-20 h-20 rounded-xl object-cover border border-white/10 shadow-lg flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Partner Sync Request
                  </span>
                  <span className="text-xs text-white/40">{item.releaseYear}</span>
                </div>
                <h2 className="text-2xl font-black text-white mt-1">{item.artist}</h2>
                <p className="text-sm text-amber-200">
                  {track ? `Specific Track Focus: "${track.title}"` : item.title}
                </p>
              </div>
            </div>

            {/* Pre-Clearance info box */}
            <div className="mb-6 p-3 rounded-xl bg-rose-950/30 border border-rose-500/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-rose-200">
                <Sparkles className="w-4 h-4 text-rose-400" />
                <span>Pre-cleared masters &amp; fast-track Q4 sync clearance available.</span>
              </div>
              <button
                type="button"
                onClick={handleDownloadDeck}
                className="text-white hover:text-amber-300 flex items-center gap-1 font-semibold underline text-xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" /> Spec Sheet
              </button>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 font-semibold mb-1">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formData.partnerName}
                    onChange={e => setFormData({ ...formData, partnerName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-white/70 font-semibold mb-1">Company / Studio / Agency</label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Netflix, Wieden+Kennedy, Apple Music"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 font-semibold mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@agency.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-white/70 font-semibold mb-1">Primary Use Case</label>
                  <select
                    value={formData.useCase}
                    onChange={e => setFormData({ ...formData, useCase: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-rose-500"
                  >
                    <option>Broadcast Commercial (TV / Digital / Social)</option>
                    <option>Feature Film / Streaming Episodic Sync</option>
                    <option>Retail &amp; Hospitality In-Store Playlist</option>
                    <option>DSP Curated Original / Platform Partnership</option>
                    <option>Gaming / Metaverse Activation</option>
                    <option>Holiday Live Event &amp; Parade Broadcast</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 font-semibold mb-1">Estimated Budget Range</label>
                  <select
                    value={formData.budgetTier}
                    onChange={e => setFormData({ ...formData, budgetTier: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-rose-500"
                  >
                    <option>Under $25,000</option>
                    <option>$25,000 - $75,000</option>
                    <option>$75,000 - $150,000</option>
                    <option>$150,000+ (Global Campaign / Custom Liners)</option>
                    <option>Promotional / Non-Commercial Co-Op</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 font-semibold mb-1">Turnaround Needed</label>
                  <select
                    value={formData.timeline}
                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141824] border border-white/10 text-white focus:outline-none focus:border-rose-500"
                  >
                    <option>Immediate (Within 48 hours)</option>
                    <option>1–2 Weeks (Standard TV Cutdown)</option>
                    <option>Q3/Q4 Early Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 font-semibold mb-1">Project Notes / Stems Required</label>
                <textarea
                  rows={3}
                  value={formData.specificNeeds}
                  onChange={e => setFormData({ ...formData, specificNeeds: e.target.value })}
                  placeholder="e.g. Need 30s instrumental mix, Dolby Atmos stems, or custom artist holiday voice greeting..."
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-white/40">
                  Direct inquiry to Warner Records Sync Team
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold shadow-lg shadow-rose-900/40 flex items-center gap-2 cursor-pointer transition-transform active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit Inquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
