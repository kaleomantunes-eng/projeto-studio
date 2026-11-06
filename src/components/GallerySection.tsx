import React, { useState } from 'react';
import { Download, Eye, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export interface WorkPhoto {
  id: string;
  title: string;
  category: 'aovivo' | 'ensaio' | 'oficial';
  categoryLabel?: string;
  image: string;
  caption: string;
  context: string;
  specs: string;
}

export const WORK_PHOTOS: WorkPhoto[] = [
  {
    id: 'praia-violao-oficial',
    title: 'Kerol & Kaleo Worship · Adoração e Violão na Estrada',
    category: 'oficial',
    categoryLabel: 'Divulgação Oficial',
    image: '/src/assets/images/3.jpg',
    caption: 'Ensaio fotográfico oficial da dupla com violão acústico-elétrico para divulgação de agendas e eventos.',
    context: 'Press Kit & Divulgação de Eventos',
    specs: 'Foto Oficial de Divulgação (Alta Resolução)',
  },
  {
    id: 'retrato-ensaio-sol',
    title: 'Kerol & Kaleo Worship · Retrato & Luz do Sol',
    category: 'oficial',
    categoryLabel: 'Divulgação Oficial',
    image: '/src/assets/images/DSC_8224.JPG',
    caption: 'Ensaio fotográfico ao ar livre capturando a comunhão, a alegria e o testemunho de vida da dupla.',
    context: 'Ensaio ao Ar Livre & Divulgação',
    specs: 'Fotografia Oficial da Dupla (Alta Resolução)',
  },
  {
    id: 'louvor-gratidao-palco',
    title: 'Kerol & Kaleo Worship · Louvor Congregacional & Gratidão',
    category: 'aovivo',
    image: '/src/assets/images/DSC_8279-2.JPG',
    caption: 'Kaleo no violão e Kerol ministrando o louvor genuíno e a celebração do milagre de cura.',
    context: 'Ministração e Adoração ao Ar Livre',
    specs: 'Registro de Palco e Altar',
  },
  {
    id: 'harmonia-acustica-ensaio',
    title: 'Kerol & Kaleo Worship · Comunhão & Acordes de Louvor',
    category: 'ensaio',
    categoryLabel: 'Na Estrada & Ministração',
    image: '/src/assets/images/DSC_8270.JPG',
    caption: 'Harmonização de vozes e violão na caminhada ministerial, gerando canções de entrega sincera a Deus.',
    context: 'Vivência Ministerial e Ensaio Acústico',
    specs: 'Dinâmica de Vozes e Violão',
  },
  {
    id: 'celebracao-novo-folego',
    title: 'Kerol & Kaleo Worship · Celebração da Vida e Novo Fôlego',
    category: 'oficial',
    categoryLabel: 'Divulgação Oficial',
    image: '/src/assets/images/DSC_8366.JPG',
    caption: 'Kerol & Kaleo Worship unidos em gratidão a Cristo pelo testemunho do milagre de restauração da saúde.',
    context: 'Ensaio Oficial de Ministério',
    specs: 'Foto de Imprensa e Cartazes',
  },
  {
    id: 'silhueta-sol-entrega',
    title: 'Kerol & Kaleo Worship · O Som da Entrega no Altar',
    category: 'aovivo',
    image: '/src/assets/images/2.jpg',
    caption: 'Silhueta em adoração e oração sob a luz do sol, simbolizando a rendição e clamor da dupla diante do Senhor.',
    context: 'Momento Devocional de Clamor',
    specs: 'Silhueta Artística Oficial',
  },
];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredPhotos =
    activeCategory === 'all'
      ? WORK_PHOTOS
      : WORK_PHOTOS.filter((p) => p.category === activeCategory);

  const handleOpenPhoto = (photo: WorkPhoto) => {
    const index = WORK_PHOTOS.findIndex((p) => p.id === photo.id);
    setActivePhotoIndex(index);
    setDownloadSuccess(false);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % WORK_PHOTOS.length);
      setDownloadSuccess(false);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + WORK_PHOTOS.length) % WORK_PHOTOS.length);
      setDownloadSuccess(false);
    }
  };

  const handleDownload = (photo: WorkPhoto) => {
    const a = document.createElement('a');
    a.href = photo.image;
    a.download = `Kerol_e_Kaleo_Worship_${photo.id}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <section id="fotos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d10] border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
            Galeria Oficial · Fotos de Ministério e Estrada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Fotos de Trabalho
          </h2>
        </div>

        {/* Filter Buttons: Exclusively 'Todas as Fotos' and 'Divulgação Oficial' */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Todas as Fotos' },
            { id: 'oficial', label: 'Divulgação Oficial' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#121214] font-semibold shadow-sm'
                  : 'bg-[#18181d] text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => handleOpenPhoto(photo)}
              className="group relative bg-[#151518] border border-zinc-800 hover:border-[#d4af37]/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Overlaid tag: Removed for Ao Vivo & Altares to leave photo clean and visible */}
                {photo.categoryLabel && photo.categoryLabel !== 'Ao Vivo & Altares' && (
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-1 bg-black/70 backdrop-blur-md rounded text-zinc-300 border border-white/10">
                      {photo.categoryLabel}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#121214] flex items-center justify-center shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-[#d4af37] transition-colors mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
                <div className="pt-3 mt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>{photo.context}</span>
                  <span className="text-[#d4af37] font-medium">Ampliar & Baixar</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#151518] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
              aria-label="Fechar foto"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation buttons */}
            <button
              type="button"
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo view frame */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px]">
              <img
                src={WORK_PHOTOS[activePhotoIndex].image}
                alt={WORK_PHOTOS[activePhotoIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Bottom details & download */}
            <div className="p-6 bg-[#18181d] border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block mb-1">
                  {WORK_PHOTOS[activePhotoIndex].categoryLabel && WORK_PHOTOS[activePhotoIndex].categoryLabel !== 'Ao Vivo & Altares'
                    ? `${WORK_PHOTOS[activePhotoIndex].categoryLabel} · ${WORK_PHOTOS[activePhotoIndex].specs}`
                    : WORK_PHOTOS[activePhotoIndex].specs}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {WORK_PHOTOS[activePhotoIndex].title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {WORK_PHOTOS[activePhotoIndex].caption}
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleDownload(WORK_PHOTOS[activePhotoIndex])}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#d4af37] hover:bg-[#eac44e] text-[#121214] text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
                >
                  {downloadSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-900" />
                      <span>Download Concluído</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Baixar Foto em Alta</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
