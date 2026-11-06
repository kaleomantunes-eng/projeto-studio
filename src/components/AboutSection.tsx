import React from 'react';
import { Heart, Sparkles, Globe2, Music, Flame, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="biografia" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f0f12]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
            NOSSA CAMINHADA • MAIS DE 10 ANOS DE UNIÃO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Quem Somos
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A união entre vida, propósito e acordes dedicados exclusivamente à glória de Cristo.
          </p>
        </div>

        {/* Narrative & Testimony Card */}
        <div className="bg-[#17171b]/80 border border-[#d4af37]/20 rounded-2xl p-6 sm:p-10 lg:p-12 mb-16 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed text-left">
              <p>
                Há mais de uma década unindo vidas e acordes na mesma sinfonia, a dupla{' '}
                <strong className="text-white font-semibold">Kerol & Kaleo Worship</strong> se prepara para dar o
                passo mais profundo de sua caminhada musical. Em breve, um álbum completo de adoração
                autoral e louvores a Cristo será entregue ao mundo — uma obra que carrega uma atmosfera
                singular de reverência em cada melodia.
              </p>
              <p>
                O projeto nasce como um <strong className="text-[#d4af37] font-semibold">altar de profunda gratidão ao Senhor</strong>.
                Mais do que simples composições, cada faixa é um testemunho vivo: a celebração poética de um
                milagre de saúde real, onde a própria vida foi restaurada com a cura. De um vale de sombras e
                incertezas, Deus soprou um novo fôlego e inaugurou uma nova estação de graça e louvor.
              </p>
              <p>
                Assumindo uma diretriz <strong className="text-white font-semibold">100% independente e interdenominacional</strong>,
                nosso clamor não carrega placas de igrejas ou amarras institucionais. Nossa missão é única e
                imutável: expressar o amor por Cristo, agradecer pela vida nova que Ele nos concedeu e ecoar
                uma adoração genuína que alcance corações em qualquer congregação ou lar na Terra.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Real Photo of Kerol & Kaleo Worship */}
              <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
                <div className="aspect-[4/3] bg-zinc-900 overflow-hidden">
                  <img
                    src="/src/assets/images/3.jpg"
                    alt="Kerol e Kaleo em adoração acústica à beira-mar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold block">
                    Ministério Kerol & Kaleo Worship
                  </span>
                  <p className="text-xs text-white font-medium">
                    Mais de uma década unindo vidas, propósito e acordes na presença de Deus.
                  </p>
                </div>
              </div>

              {/* Ministerial Guideline Card */}
              <div className="bg-[#121215] border border-zinc-800 rounded-xl p-6 space-y-4">
                <div className="border-l-2 border-[#d4af37] pl-4">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                    Diretriz Ministerial
                  </span>
                  <p className="font-serif text-base sm:text-lg text-white font-medium italic">
                    “Não cantamos por vaidade, mas por gratidão pela vida que recebemos de volta.”
                  </p>
                  <cite className="block text-xs text-zinc-400 mt-2 not-italic">
                    — Kerol & Kaleo Worship
                  </cite>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 space-y-2.5 text-xs text-zinc-400">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>Músicas 100% autorais e arranjos congregacionais</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>Testemunho real de cura e fôlego de vida restaurado</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>Independente, sem placas nem vínculos institucionais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#151518] border border-zinc-800/80 hover:border-[#d4af37]/30 p-6 rounded-xl transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              01. Altar de Gratidão
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Cada verso foi escrito em secreto como uma oração de rendição e agradecimento a Deus
              pela fidelidade diária, manifestada em nossa casa.
            </p>
          </div>

          <div className="bg-[#151518] border border-zinc-800/80 hover:border-[#d4af37]/30 p-6 rounded-xl transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              02. Milagre de Cura
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              O álbum é a memória viva da vitória sobre a enfermidade. Quando a medicina apontou
              o fim, o Senhor operou a restauração completa.
            </p>
          </div>

          <div className="bg-[#151518] border border-zinc-800/80 hover:border-[#d4af37]/30 p-6 rounded-xl transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              03. Interdenominacional
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Livre de rótulos denominacionais, o som foi concebido para abençoar o corpo de Cristo e
              aproximar as pessoas de Deus onde quer que estejam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
