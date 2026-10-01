// Web Audio API Holiday Jingle Synth & Chimes
// Produces crisp, beautiful high-fidelity festive chimes & acoustic chord previews
// without requiring external heavy MP3s, guaranteed to work offline and fast!

class HolidayAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private currentPlayingId: string | null = null;
  private activeOscillators: OscillatorNode[] = [];
  private sequenceTimeout: number | null = null;
  private listenerCallback: ((isPlaying: boolean, trackName: string | null) => void) | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public subscribe(cb: (isPlaying: boolean, trackName: string | null) => void) {
    this.listenerCallback = cb;
  }

  public stop() {
    if (this.sequenceTimeout) {
      clearTimeout(this.sequenceTimeout);
      this.sequenceTimeout = null;
    }
    this.activeOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // already stopped
      }
    });
    this.activeOscillators = [];
    this.currentPlayingId = null;
    if (this.listenerCallback) {
      this.listenerCallback(false, null);
    }
  }

  public isTrackPlaying(id: string): boolean {
    return this.currentPlayingId === id;
  }

  // Play realistic music box / orchestral celesta holiday chime sequence
  public playPreview(trackId: string, trackTitle: string, artistName: string) {
    this.initCtx();
    if (this.currentPlayingId === trackId) {
      this.stop();
      return;
    }

    this.stop();
    this.currentPlayingId = trackId;
    if (this.listenerCallback) {
      this.listenerCallback(true, `${trackTitle} • ${artistName}`);
    }

    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Harmonized holiday melody notes (frequencies in Hz)
    // Plays a shimmering seasonal motif: C5, E5, G5, B5, C6, G5, A5, G5, E5, C5
    const festiveMelody = [
      { f: 523.25, d: 0.35, t: 0.0 },   // C5
      { f: 659.25, d: 0.35, t: 0.35 },  // E5
      { f: 783.99, d: 0.45, t: 0.7 },   // G5
      { f: 987.77, d: 0.35, t: 1.15 },  // B5
      { f: 1046.50, d: 0.8, t: 1.5 },   // C6
      { f: 783.99, d: 0.35, t: 2.3 },   // G5
      { f: 880.00, d: 0.4, t: 2.65 },   // A5
      { f: 783.99, d: 0.5, t: 3.05 },   // G5
      { f: 659.25, d: 0.4, t: 3.55 },   // E5
      { f: 523.25, d: 1.4, t: 3.95 },   // C5 long sustain
    ];

    festiveMelody.forEach(note => {
      this.playCelestaNote(note.f, now + note.t, note.d);
    });

    // Stop after complete phrase
    this.sequenceTimeout = window.setTimeout(() => {
      if (this.currentPlayingId === trackId) {
        this.stop();
      }
    }, 5500);
  }

  private playCelestaNote(freq: number, startTime: number, duration: number) {
    if (!this.ctx || this.isMuted) return;

    // Dual oscillator bell tone (Fundamental + sparkling harmonic 2.75x)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, startTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2.756, startTime);

    // Warm envelope
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.18, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.1);
    osc2.stop(startTime + duration + 0.1);

    this.activeOscillators.push(osc1, osc2);
  }

  // Play subtle bell chime for user interaction (button clicks, licensing cart, etc.)
  public playChime() {
    this.initCtx();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [1046.5, 1318.51, 1567.98].forEach((f, i) => {
      this.playCelestaNote(f, now + i * 0.08, 0.4);
    });
  }
}

export const audioEngine = new HolidayAudioEngine();
