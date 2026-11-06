import React, { useState } from 'react';
import { MessageCircle, Check, ExternalLink } from 'lucide-react';

export const ShareSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#131317] border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
          Faça Parte da Nossa Família
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Acompanhe e Compartilhe
        </h2>
        <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-400 mb-8 leading-relaxed">
          Caminhe conosco nessa missão! Siga nossos canais oficiais para não perder nenhum bastidor e
          compartilhe esse mover de adoração com seus amigos, irmãos de fé e equipe de louvor.
        </p>

        {/* Social and Share buttons with verified official links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/kerolkaleo_worship/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <span>Instagram Oficial</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@KerolKaleo_worship"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#cc181e] hover:bg-[#b01419] transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <span>Canal no YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/kerolkaleooficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#1877f2] hover:bg-[#1567d3] transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <span>Página no Facebook</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* WhatsApp Direct Conversation */}
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#25d366] hover:bg-[#20ba59] transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <span>Compartilhar no WhatsApp</span>
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Copy link bar */}
        <div className="inline-flex items-center gap-2 p-1.5 bg-[#1a1a20] border border-zinc-700/80 rounded-lg max-w-md w-full">
          <input
            type="text"
            readOnly
            value={shareUrl}
            className="bg-transparent border-none text-xs text-zinc-400 px-3 w-full focus:outline-none select-all"
          />
          <button
            type="button"
            onClick={handleCopyLink}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            {copiedLink ? (
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <Check className="w-3.5 h-3.5" /> Copiado!
              </span>
            ) : (
              'Copiar Link'
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
