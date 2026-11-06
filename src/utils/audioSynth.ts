class WorshipAudioSynth {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private isPlaying = false;
  private intervalId: any = null;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, val)), this.ctx.currentTime, 0.05);
    }
  }

  public playAmbientPad(chordName: string = 'G') {
    this.init();
    if (!this.ctx || !this.masterGain) return;
    this.stop();

    this.isPlaying = true;

    // Chord root frequencies (warm ambient acoustic worship frequencies)
    const chordFrequencies: Record<string, number[]> = {
      G: [98.0, 146.83, 196.0, 246.94, 293.66], // G2, D3, G3, B3, D4
      Em: [82.41, 123.47, 164.81, 196.0, 246.94], // E2, B2, E3, G3, B3
      C: [65.41, 130.81, 164.81, 196.0, 261.63], // C2, C3, E3, G3, C4
      D: [73.42, 146.83, 220.0, 293.66, 369.99], // D2, D3, A3, D4, F#4
    };

    const freqs = chordFrequencies[chordName] || chordFrequencies['G'];

    // Create warm pad with gentle detuning and lowpass filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(520, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.2, this.ctx.currentTime);
    filter.connect(this.masterGain);

    freqs.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      // Combine warm triangle and sine textures
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      // subtle detune for choir / strings shimmering effect
      osc.detune.setValueAtTime((idx - 2) * 4, this.ctx.currentTime);

      oscGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.06, this.ctx.currentTime + 1.8);

      osc.connect(oscGain);
      oscGain.connect(filter);

      osc.start();
      this.oscillators.push(osc);
    });
  }

  public playProgression() {
    this.init();
    const chords = ['G', 'Em', 'C', 'D'];
    let step = 0;
    this.playAmbientPad(chords[step]);

    this.intervalId = setInterval(() => {
      if (!this.isPlaying) return;
      step = (step + 1) % chords.length;
      this.playAmbientPad(chords[step]);
    }, 6000);
  }

  public stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.oscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {
        // ignore already stopped
      }
    });
    this.oscillators = [];
    this.isPlaying = false;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const worshipAudio = new WorshipAudioSynth();
