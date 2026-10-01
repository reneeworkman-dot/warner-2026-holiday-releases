import React, { useState } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, ChevronUp, Clock, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { partnerInfo } from '../data/types';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

export const LicensingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [quickContactSent, setQuickContactSent] = useState(false);
  const [quickEmail, setQuickEmail] = useState('');

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
    audioEngine.playChime();
  };

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail) return;
    setQuickContactSent(true);
    audioEngine.playChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.9 },
    });
  };

  return (
    <section id="licensing-contacts" className="py-20 border-t border-white/10 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                Warner Records Direct Desk
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Partner &amp; Sync Contacts
              </h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Need immediate clearance, bespoke orchestral edits, or a tailored holiday pitch deck for your client presentation? Connect directly with our lead executives.
              </p>
            </div>

            <div className="space-y-4">
              {partnerInfo.licensingContacts.map((contact) => (
                <div
                  key={contact.name}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                        {contact.role}
                      </p>
                      <h4 className="text-lg font-bold text-white mt-0.5 group-hover:text-rose-300 transition-colors">
                        {contact.name}
                      </h4>
                    </div>
                    <span className="text-[11px] text-white/50 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-400" /> {contact.office}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    {contact.specialty}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-xs font-medium text-rose-400 hover:text-rose-300 flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" /> {contact.email}
                    </a>
                    <span className="text-[11px] text-emerald-400 font-mono">Q4 Priority Queue</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick newsletter/pitch signup */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-950/60 to-purple-950/40 border border-rose-500/30 text-white">
              <h4 className="font-bold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" /> Subscribe to Q4 Music Supervisor Alerts
              </h4>
              <p className="text-xs text-white/70 mt-1 mb-3">
                Receive confidential notifications of brand-new unreleased holiday singles and festival sync promos.
              </p>
              {quickContactSent ? (
                <p className="text-xs text-emerald-300 font-semibold py-2">
                  ✓ You are on the Warner Holiday priority supervisor distribution list.
                </p>
              ) : (
                <form onSubmit={handleQuickContact} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="supervisor@studio.com"
                    className="flex-grow px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-rose-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Send className="w-3 h-3" /> Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                Clearance &amp; Partnership FAQ
              </div>
              <h3 className="text-2xl font-black text-white">
                Frequently Asked Licensing Questions
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              {partnerInfo.faq.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={item.q}
                    className={`rounded-2xl transition-all duration-300 border ${
                      isOpen
                        ? 'bg-white/[0.06] border-rose-500/40 shadow-lg'
                        : 'glass-panel border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-sm text-white sm:text-base leading-snug">
                        {item.q}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Turnaround speed promise */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-white">Q4 Fast-Track Turnaround Guarantee</h5>
                  <p className="text-xs text-white/60">
                    Average response time for holiday sync quotes: <span className="text-emerald-400 font-bold">under 4 business hours</span>.
                  </p>
                </div>
              </div>
              <a
                href="mailto:sync.holiday@warnerrecords.com?subject=Priority%20Holiday%20Sync%20Request"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors whitespace-nowrap"
              >
                Direct Email Desk
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
