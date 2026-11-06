import React, { useState } from 'react';
import { WORSHIP_SONGS } from '../data/songs';
import { SongChord } from '../types';
import { Download, Music, Share2, Play, Volume2, Copy, Check, Printer } from 'lucide-react';
import { worshipAudio } from '../utils/audioSynth';

interface SongbookSectionProps {
  onOpenSongbookModal: (song?: SongChord) => void;
}

const CHROMATIC_SCALE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function transposeChord(chord: string, semitones: number): string {
  if (semitones === 0) return chord;
  return chord.replace(/([A-G][#b]?)/g, (match) => {
    let root = match;
    // Normalize flats
    if (root === 'Db') root = 'C#';
    if (root === 'Eb') root = 'D#';
    if (root === 'Gb') root = 'F#';
    if (root === 'Ab') root = 'G#';
    if (root === 'Bb') root = 'A#';

    const index = CHROMATIC_SCALE.indexOf(root);
    if (index === -1) return match;
    const newIndex = (index + semitones + 12 * 10) % 12;
    return CHROMATIC_SCALE[newIndex];
  });
}

function transposeLine(line: string, semitones: number): string {
  if (semitones === 0) return line;
  // Match chord symbols within string preserving spacing
  return line.replace(/\b([A-G][#b]?(?:m|maj|min|dim|aug|sus|add|\d|\/[A-G][#b]?)*)\b/g, (chord) => {
    // If chord has slash bass note like D/F#
    if (chord.includes('/')) {
      const parts = chord.split('/');
      return `${transposeChord(parts[0], semitones)}/${transposeChord(parts[1], semitones)}`;
    }
    return transposeChord(chord, semitones);
  });
}

export const SongbookSection: React.FC<SongbookSectionProps> = ({ onOpenSongbookModal }) => {
  const [selectedSong, setSelectedSong] = useState<SongChord>(WORSHIP_SONGS[0]);
  const [semitones, setSemitones] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isPlayingPad, setIsPlayingPad] = useState(false);

  const handleSelectSong = (song: SongChord) => {
    setSelectedSong(song);
    setSemitones(0);
    if (isPlayingPad) {
      worshipAudio.playAmbientPad(song.key);
    }
  };

  const handleTogglePad = () => {
    if (isPlayingPad) {
      worshipAudio.stop();
      setIsPlayingPad(false);
    } else {
      const targetKey = transposeChord(selectedSong.key, semitones);
      worshipAudio.playAmbientPad(targetKey);
      setIsPlayingPad(true);
    }
  };

  const handleCopyChords = () => {
    let text = `${selectedSong.title} — Kerol & Kaleo Worship\n`;
    text += `Tom: ${transposeChord(selectedSong.key, semitones)} | BPM: ${selectedSong.bpm} | ${selectedSong.capo}\n\n`;

    selectedSong.sections.forEach((sec) => {
      text += `[${sec.name}]\n`;
      sec.lines.forEach((l) => {
        if (l.chordLine) {
          text += `${transposeLine(l.chordLine, semitones)}\n`;
        }
        text += `${l.lyricLine}\n`;
      });
      text += '\n';
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentTransposedKey = transposeChord(selectedSong.key, semitones);

  return (
    <section id="cifras" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121215] border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
            Material Congregacional Gratuito
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Caderno de Cifras Oficial
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Arranjos harmônicos completos, digitações e letras autorais liberados com licença de uso
            para igrejas locais, equipes de louvor e ministérios de adoração.
          </p>
        </div>

        {/* Hero showcase banner for the chord notebook */}
        <div className="bg-[#18181d] border border-[#d4af37]/20 rounded-2xl overflow-hidden mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
              <img
                src="/src/assets/images/DSC_8279-2.JPG"
                alt="Kaleo tocando violão e Kerol ministrando adoração"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] block mb-1">
                  Licença Congregacional Inclusa
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Toque na sua igreja sem burocracias
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  Ouvimos o anseio de líderes e músicos que desejam ministrar essas canções em suas
                  comunidades. O Caderno de Cifras traz o guia de acordes de violão, teclado e arranjo vocal.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    Formato PDF Pronto para Impressão
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    Diagramas de Acordes para Violão
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    100% Gratuito
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenSongbookModal(selectedSong)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] hover:bg-[#eac44e] text-[#121214] text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Caderno Completo (.PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Songbook Viewer */}
        <div className="bg-[#16161a] border border-zinc-800 rounded-2xl p-6 sm:p-8">
          {/* Song selector tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-zinc-800">
            {WORSHIP_SONGS.map((song) => {
              const isSelected = selectedSong.id === song.id;
              return (
                <button
                  key={song.id}
                  onClick={() => handleSelectSong(song)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#d4af37] text-[#121214] font-semibold shadow-sm'
                      : 'bg-[#1e1e24] text-zinc-400 hover:text-white hover:bg-[#25252d]'
                  }`}
                >
                  {song.title}
                </button>
              );
            })}
          </div>

          {/* Song Details Toolbar */}
          <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {selectedSong.title}
                </h3>
                <span className="text-xs px-2.5 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f5df8b] font-mono font-bold">
                  Tom: {currentTransposedKey}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                {selectedSong.subtitle} · {selectedSong.bpm} BPM · {selectedSong.timeSignature} · {selectedSong.capo}
              </p>
            </div>

            {/* Transpose Controls & Actions */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Semitone transpose */}
              <div className="inline-flex items-center bg-[#1c1c22] border border-zinc-700 rounded-lg p-1 text-xs">
                <span className="text-zinc-400 px-2 font-medium">Tom:</span>
                <button
                  type="button"
                  onClick={() => setSemitones((prev) => prev - 1)}
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-700 text-white font-mono"
                  title="Diminuir meio tom"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono font-bold text-[#d4af37]">
                  {semitones > 0 ? `+${semitones}` : semitones}
                </span>
                <button
                  type="button"
                  onClick={() => setSemitones((prev) => prev + 1)}
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-zinc-700 text-white font-mono"
                  title="Aumentar meio tom"
                >
                  +
                </button>
              </div>

              {/* Ambient Pad playback */}
              <button
                type="button"
                onClick={handleTogglePad}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors border ${
                  isPlayingPad
                    ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f5df8b]'
                    : 'bg-[#1c1c22] border-zinc-700 text-zinc-300 hover:text-white'
                }`}
                title="Tocar pad ambiente no tom da música"
              >
                <Music className="w-3.5 h-3.5" />
                <span>{isPlayingPad ? 'Parar Pad' : `Pad em ${currentTransposedKey}`}</span>
              </button>

              {/* Copy chords button */}
              <button
                type="button"
                onClick={handleCopyChords}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1c1c22] hover:bg-zinc-700 border border-zinc-700 rounded-lg text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Copiar letra e acordes"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>

              {/* Print button */}
              <button
                type="button"
                onClick={() => window.print()}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-[#1c1c22] hover:bg-zinc-700 border border-zinc-700 rounded-lg text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Imprimir cifra"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir</span>
              </button>
            </div>
          </div>

          {/* Chord Badges */}
          <div className="py-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-zinc-500 uppercase tracking-wider mr-1">Acordes Usados:</span>
            {selectedSong.chords.map((ch) => (
              <span
                key={ch}
                className="px-2.5 py-1 text-xs font-mono font-semibold text-[#d4af37] bg-[#1a1a20] border border-[#d4af37]/20 rounded"
              >
                {transposeChord(ch, semitones)}
              </span>
            ))}
          </div>

          {/* Song Lyrics & Chords Display */}
          <div className="mt-4 p-6 bg-[#0f0f13] border border-zinc-800/80 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto text-zinc-200">
            {selectedSong.sections.map((sec, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <span className="text-xs font-sans uppercase tracking-widest text-[#d4af37] font-bold block mb-2">
                  [{sec.name}]
                </span>
                <div className="space-y-2">
                  {sec.lines.map((line, lIdx) => (
                    <div key={lIdx} className="space-y-0.5">
                      {line.chordLine && (
                        <div className="text-[#d4af37] font-bold select-all whitespace-pre">
                          {transposeLine(line.chordLine, semitones)}
                        </div>
                      )}
                      <div className="text-zinc-200 select-all whitespace-pre">
                        {line.lyricLine}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
