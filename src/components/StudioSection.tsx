import React, { useState } from 'react';
import { Mic2, Music4, Play, Pause, Disc, Radio } from 'lucide-react';
import { worshipAudio } from '../utils/audioSynth';

export const StudioSection: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  const studioLogs = [
    {
      id: 1,
      title: 'Arranjos Harmônicos & Harmonização Vocal',
      category: 'Violão & Vozes',
      date: 'Sessão de Ensaio e Captação',
      image: '/src/assets/images/DSC_8270.JPG',
      description:
        'Sessões acústicas com violão e afinações personalizadas para dar corpo e profundidade à mensagem dos louvores autorais.',
      duration: '0:45',
      chordKey: 'G',
    },
    {
      id: 2,
      title: 'Captação de Vocais Principais e Coral',
      category: 'Vocais & Adoração',
      date: 'Sessão Vocal Booth',
      image: '/src/assets/images/trabalho_bastidores_mesa_1793832665409.jpg',
      description:
        'Revisão e mixagem das orações cantadas e arranjos harmônicos com a equipe técnica de produção fonográfica.',
      duration: '0:50',
      chordKey: 'Em',
    },
  ];

  const handlePlaySample = (index: number, chordKey: string) => {
    if (activeTrack === index) {
      worshipAudio.stop();
      setActiveTrack(null);
    } else {
      worshipAudio.playAmbientPad(chordKey);
      setActiveTrack(index);
    }
  };

  return (
    <section id="bastidores" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0e0e11] border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
            Diário de Estúdio · Processo Criativo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Acompanhe as Gravações
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Bastidores, fotos e registros do processo de captação e produção fonográfica das canções autorais.
          </p>
        </div>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {studioLogs.map((log, idx) => {
            const isPlaying = activeTrack === idx;
            return (
              <div
                key={log.id}
                className="bg-[#16161a] border border-zinc-800 hover:border-[#d4af37]/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-lg"
              >
                {/* Photo frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={log.image}
                    alt={log.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] via-transparent to-transparent" />

                  {/* Play audio preview overlay button */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 bg-black/70 backdrop-blur-md rounded border border-white/10 text-zinc-300">
                      {log.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => handlePlaySample(idx, log.chordKey)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#d4af37] hover:bg-[#eac44e] text-[#121214] rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-95"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>Pausar Teaser</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Ouvir Teaser</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                      <span>{log.date}</span>
                      <span>Tom Base: {log.chordKey}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                      {log.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {log.description}
                    </p>
                  </div>

                  {/* Waveform indicator if playing */}
                  {isPlaying && (
                    <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Radio className="w-4 h-4 text-[#d4af37] animate-pulse" />
                        <span className="text-xs text-[#d4af37] font-medium">
                          Reproduzindo Ambiência da Sessão ({log.chordKey})
                        </span>
                      </div>
                      <div className="flex items-end gap-1 h-4">
                        <span className="w-1 bg-[#d4af37] h-2 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 bg-[#d4af37] h-4 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 bg-[#d4af37] h-3 animate-bounce" style={{ animationDelay: '300ms' }} />
                        <span className="w-1 bg-[#d4af37] h-4 animate-bounce" style={{ animationDelay: '75ms' }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
