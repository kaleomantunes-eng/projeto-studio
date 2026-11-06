import React from 'react';
import { Headphones, Sparkles } from 'lucide-react';

export const ScriptureBanner: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#141417] border-y border-[#d4af37]/15 overflow-hidden">
      {/* Subtle warm glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl text-zinc-100 font-normal italic leading-relaxed tracking-wide [text-wrap:balance]">
          “Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.
          Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração;
          e encontrareis descanso para as vossas almas. Porque o meu jugo é suave e o meu fardo é leve.”
        </blockquote>

        <cite className="block mt-6 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#d4af37] uppercase not-italic">
          — Mateus 11:28-30
        </cite>

        {/* Action Button: Teaser Louvores em Breve */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2.5">
          <div className="relative inline-flex items-center">
            {/* Subtle luxury halo behind the button */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d4af37] via-[#f5df8b] to-[#d4af37] rounded-full blur-[3px] opacity-40" />

            <button
              type="button"
              disabled
              aria-disabled="true"
              className="relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#e5c363] via-[#d4af37] to-[#c79c29] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm shadow-xl border border-[#fff2b2]/50 cursor-not-allowed select-none opacity-95 transition-all"
              title="Lançamento em breve - Acompanhe nossos canais oficiais para novidades!"
            >
              <Headphones className="w-4 h-4 text-black shrink-0 stroke-[2.4]" />
              <span className="font-extrabold tracking-wide text-zinc-950">
                OUÇA LOUVORES DE KEROL & KALEO WORSHIP AQUI EM BREVE
              </span>
              <Sparkles className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
            </button>
          </div>

          <p className="text-[11px] sm:text-xs text-zinc-400 font-medium tracking-wider uppercase mt-1">
            Produção autoral em andamento • Lançamento oficial anunciado em primeira mão aqui
          </p>
        </div>
      </div>
    </section>
  );
};
