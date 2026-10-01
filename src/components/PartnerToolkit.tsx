import React, { useState } from 'react';
import { Download, Check, Sparkles, FolderArchive, Music, Shield, Radio, Presentation } from 'lucide-react';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

export const PartnerToolkit: React.FC = () => {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [downloaded, setDownloaded] = useState<Record<string, boolean>>({});

  const handleDownload = (id: string, fileName: string, fileType: string) => {
    setDownloading(id);
    audioEngine.playChime();

    setTimeout(() => {
      setDownloading(null);
      setDownloaded(prev => ({ ...prev, [id]: true }));
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#fbbf24', '#34d399']
      });

      // Generate download trigger
      const assetSummary = `WARNER RECORDS HOLIDAY PARTNER ASSET PACKAGE
Asset: ${fileName}
Classification: Approved Partner Collateral
Label: Warner Records Global Sync & Brand Partnerships
Contents:
- Full Studio Master Deliverables & Track Metadata
- High-Res 300 DPI Cover Graphics & Social Formats (1:1, 9:16, 16:9)
- Instrumental, Clean Stems, TV Backing Vocal Mixes
- Licensing Clearance Guidelines & One-Stop Contacts

To request broadcast cutdowns or direct artist voiceover drops, contact sync.holiday@warnerrecords.com.`;

      const blob = new Blob([assetSummary], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName.replace(/\s+/g, '_')}_WarnerHolidayKit.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }, 900);
  };

  const kits = [
    {
      id: 'epk-deck',
      icon: Presentation,
      title: 'Warner Holiday 2025/2026 Pitch Deck',
      desc: 'Complete 28-page PDF deck with demographic streaming breakdowns, artist bios, and case studies.',
      format: 'PDF Presentation (38 MB)',
      badge: 'Essential Partner Deck'
    },
    {
      id: 'sync-spreadsheet',
      icon: Music,
      title: 'Full Cue Sheet & Metadata Registry',
      desc: 'BPMs, key signatures, master splits, publishing contacts, and one-stop pre-cleared track flags.',
      format: 'CSV / Excel (1.8 MB)',
      badge: 'Music Supervisors'
    },
    {
      id: 'cover-art-pack',
      icon: FolderArchive,
      title: 'High-Res Key Art & Retail Visuals',
      desc: 'Print-ready 300 DPI PSD/TIFF pack, vector logos, 3D vinyl mockups, and digital display banners.',
      format: 'ZIP Archive (210 MB)',
      badge: 'Creative & Retail'
    },
    {
      id: 'broadcast-stems',
      icon: Radio,
      title: 'Broadcast 30s & 15s Cutdowns Guide',
      desc: 'Index of available instrumental stems, alt mixes, and promo liners ready for post-production.',
      format: 'PDF Guide + WAV Hub Link',
      badge: 'TV & Commercials'
    }
  ];

  return (
    <section id="partner-toolkit" className="py-16 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient decorative light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
              <FolderArchive className="w-3.5 h-3.5 text-rose-400" />
              Partner Collateral &amp; Pitch Assets
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              One-Click Partner Download Suite
            </h2>
            <p className="mt-2 text-slate-300 max-w-2xl text-sm leading-relaxed">
              Equip your creative and licensing team with verified track specs, 300 DPI high-res artwork, and pre-cleared sync documentation tailored for fast approvals.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-4 py-2 rounded-xl">
            <Shield className="w-4 h-4" />
            <span>Authorized for Media &amp; Brand Partners</span>
          </div>
        </div>

        {/* 4 Toolkits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kits.map((kit) => {
            const IconComponent = kit.icon;
            const isDone = downloaded[kit.id];
            const isLoading = downloading === kit.id;

            return (
              <div
                key={kit.id}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-amber-200 border border-white/10">
                      {kit.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {kit.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {kit.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/40">{kit.format}</span>
                  <button
                    onClick={() => handleDownload(kit.id, kit.title, kit.format)}
                    disabled={isLoading}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isDone
                        ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                        : 'bg-white/10 hover:bg-rose-600 text-white active:scale-95'
                    }`}
                  >
                    {isDone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" /> Downloaded
                      </>
                    ) : isLoading ? (
                      <span className="inline-block animate-spin">⏳</span>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" /> Download
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
