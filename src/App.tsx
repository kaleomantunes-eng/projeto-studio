import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScriptureBanner } from './components/ScriptureBanner';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ShareSection } from './components/ShareSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [copyrightOpen, setCopyrightOpen] = useState(false);

  const handleScrollToHeroPreSave = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseModals = () => {
    setPrivacyOpen(false);
    setCopyrightOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0f0f10] text-zinc-100 font-sans selection:bg-[#d4af37]/30 selection:text-[#f8e7a2]">
      {/* Top Bar Header adhering to Top Bar Contract */}
      <Navbar onPreSaveClick={handleScrollToHeroPreSave} />

      <main>
        {/* Hero with countdown, pre-save lead capture & imagery */}
        <Hero onOpenPrivacy={() => setPrivacyOpen(true)} />

        {/* Biblical Verse with Ambient Worship Sound Pad */}
        <ScriptureBanner />

        {/* Quem Somos: Biografia, Testemunho de Cura & Pilares */}
        <AboutSection />

        {/* Galeria Oficial de Fotos de Trabalho & Press Kit */}
        <GallerySection />

        {/* Redes Sociais & Compartilhamento */}
        <ShareSection />

        {/* Agendamento & Parcerias com WhatsApp e E-mail direto */}
        <ContactSection />
      </main>

      {/* Footer com links LGPD e Direitos Autorais */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenCopyright={() => setCopyrightOpen(true)}
      />

      {/* Modais Legais */}
      <LegalModals
        privacyOpen={privacyOpen}
        copyrightOpen={copyrightOpen}
        songbookModalOpen={false}
        onClose={handleCloseModals}
      />
    </div>
  );
}
