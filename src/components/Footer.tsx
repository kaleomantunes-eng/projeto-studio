import React from 'react';
import { Heart, ShieldCheck, FileText, Music, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCopyright: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenCopyright,
}) => {
  return (
    <footer className="bg-[#0b0b0d] border-t border-zinc-900 text-zinc-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-2xl font-bold tracking-wider text-[#d4af37] block">
              KEROL & KALEO WORSHIP
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold block">
              Música Autoral Worship · Dupla de Adoração Cristã
            </span>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Um clamor independente focado em conectar corações ao trono da graça. Feito com gratidão
              pelo milagre da vida restaurada em Cristo Jesus.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200 block">
              Navegação & Ministério
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#biografia" className="hover:text-[#d4af37] transition-colors">
                  Quem Somos & Testemunho
                </a>
              </li>
              <li>
                <a href="#fotos" className="hover:text-[#d4af37] transition-colors">
                  Fotos de Trabalho & Press Kit
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#d4af37] transition-colors">
                  Agenda e Parcerias
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Compliance */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200 block">
              Jurídico & LGPD
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="inline-flex items-center gap-1.5 hover:text-[#d4af37] transition-colors cursor-pointer text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Política de Privacidade (LGPD Lei 13.709/18)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCopyright}
                  className="inline-flex items-center gap-1.5 hover:text-[#d4af37] transition-colors cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Termos de Direitos Autorais & Licença Congregacional</span>
                </button>
              </li>
              <li className="pt-2 text-xs text-zinc-500">
                E-mail direto:{' '}
                <a
                  href="mailto:sunshinne.contato@gmail.com"
                  className="text-zinc-300 hover:text-[#d4af37] transition-colors"
                >
                  sunshinne.contato@gmail.com
                </a>
              </li>
              <li className="text-xs text-zinc-500">
                WhatsApp assessoria:{' '}
                <a
                  href="https://wa.me/5551992211732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#d4af37] transition-colors"
                >
                  +55 (51) 99221-1732
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Kerol & Kaleo Worship. Todos os direitos reservados.
            Licença concedida para reprodução congregacional em igrejas locais.
          </p>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Para a glória de Deus</span>
            <Heart className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
