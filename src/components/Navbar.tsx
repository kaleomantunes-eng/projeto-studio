import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onPreSaveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPreSaveClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#121214]/90 backdrop-blur-md border-b border-[#d4af37]/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element Brand wordmark */}
          <a
            href="#"
            className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#d4af37] hover:text-[#f3cd57] transition-colors whitespace-nowrap shrink-0"
          >
            KEROL & KALEO WORSHIP
          </a>

          {/* Zone 2: 4 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a
              href="#"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#d4af37]/60 pb-1"
            >
              Início
            </a>
            <a
              href="#biografia"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#d4af37]/60 pb-1"
            >
              Quem Somos
            </a>
            <a
              href="#fotos"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#d4af37]/60 pb-1"
            >
              Fotos de Trabalho
            </a>
            <a
              href="#contato"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#d4af37]/60 pb-1"
            >
              Contatos & Parcerias
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={onPreSaveClick}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#121214] bg-[#d4af37] hover:bg-[#eac44e] active:scale-[0.98] transition-all rounded-md shadow-sm tracking-wider uppercase whitespace-nowrap shrink-0"
            >
              Fazer Pre-Save
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
              aria-label="Abrir menu de navegação"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#161618] border-b border-[#d4af37]/20 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-zinc-200">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#d4af37] transition-colors"
            >
              Início
            </a>
            <a
              href="#biografia"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#d4af37] transition-colors"
            >
              Quem Somos
            </a>
            <a
              href="#fotos"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#d4af37] transition-colors"
            >
              Fotos de Trabalho
            </a>
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-[#d4af37] transition-colors"
            >
              Contatos & Parcerias
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onPreSaveClick();
              }}
              className="w-full py-3 text-center text-xs font-semibold text-[#121214] bg-[#d4af37] hover:bg-[#eac44e] rounded-md tracking-wider uppercase transition-colors"
            >
              Garantir Pre-Save Exclusivo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
