import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Music2, Sparkles, Download } from 'lucide-react';
import { PreSaveLead } from '../types';

interface HeroProps {
  onOpenPrivacy: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPrivacy }) => {
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState<'spotify' | 'apple' | 'deezer' | 'youtube'>('spotify');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadCount, setLeadCount] = useState<number>(342);

  // Countdown timer logic targeting Christmas (December 25)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Check if user already submitted pre-save
    const saved = localStorage.getItem('kk_presave_lead');
    if (saved) {
      setIsSubmitted(true);
    }

    // Target date: December 25th (Christmas) of the current year
    const calculateTarget = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let targetDate = new Date(currentYear, 11, 25, 0, 0, 0); // Month 11 is December
      if (now.getTime() > targetDate.getTime()) {
        targetDate = new Date(currentYear + 1, 11, 25, 0, 0, 0);
      }
      return targetDate.getTime();
    };

    const targetTime = calculateTarget();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetTime - now);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    const newLead: PreSaveLead = {
      id: String(Date.now()),
      email,
      platform,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('kk_presave_lead', JSON.stringify(newLead));
    setIsSubmitted(true);
    setLeadCount((prev) => prev + 1);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0d0d0f]">
      {/* Background Hero Image with real uploaded photo 2.jpg */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/2.jpg"
          alt="Kerol e Kaleo em adoração sob a luz do sol"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-[0.75] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-[#0f0f10]/80 to-[#0f0f10]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0,transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Unboxed section tag */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-4">
          <span>Breve em Todas as Plataformas</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>Álbum Autoral Worship</span>
        </div>

        {/* Hero headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
          O som da entrega <br />
          <span className="text-[#d4af37]">está sendo gerado.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-light mb-6 sm:mb-8 leading-relaxed [text-wrap:balance]">
          Projetado estritamente sob a fé em Cristo por <strong className="text-white font-medium">Kerol & Kaleo Worship</strong>, prepare-se para a estreia do primeiro single 'O Amanhecer', nossa primeira música de trabalho do álbum 'Constelação'. Um clamor independente focado em conectar corações ao trono da graça com louvores de profunda entrega e cura.
        </p>

        {/* Featured Premiere Announcement Headline */}
        <div className="mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
          <h2 className="font-serif text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-[#d4af37] leading-snug uppercase [text-wrap:balance] drop-shadow-[0_2px_14px_rgba(212,175,55,0.22)]">
            ESTREIA DIA 25 DE DEZEMBRO • COM O NASCIMENTO DE CRISTO, NASCE O AMANHECER
          </h2>
        </div>

        {/* Countdown timer with tabular numerals */}
        <div className="flex justify-center items-center gap-3 sm:gap-6 mb-12">
          <div className="bg-[#17171a]/80 backdrop-blur-md border border-[#d4af37]/20 p-4 sm:p-5 rounded-lg min-w-[70px] sm:min-w-[95px] shadow-lg">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#d4af37] block tabular-nums">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest mt-1 block">
              Dias
            </span>
          </div>

          <span className="text-[#d4af37]/40 text-xl font-serif">:</span>

          <div className="bg-[#17171a]/80 backdrop-blur-md border border-[#d4af37]/20 p-4 sm:p-5 rounded-lg min-w-[70px] sm:min-w-[95px] shadow-lg">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#d4af37] block tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest mt-1 block">
              Horas
            </span>
          </div>

          <span className="text-[#d4af37]/40 text-xl font-serif">:</span>

          <div className="bg-[#17171a]/80 backdrop-blur-md border border-[#d4af37]/20 p-4 sm:p-5 rounded-lg min-w-[70px] sm:min-w-[95px] shadow-lg">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#d4af37] block tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest mt-1 block">
              Min
            </span>
          </div>

          <span className="text-[#d4af37]/40 text-xl font-serif">:</span>

          <div className="bg-[#17171a]/80 backdrop-blur-md border border-[#d4af37]/20 p-4 sm:p-5 rounded-lg min-w-[70px] sm:min-w-[95px] shadow-lg">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-zinc-200 block tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest mt-1 block">
              Seg
            </span>
          </div>
        </div>

        {/* Lead capture / Pre-save box */}
        <div className="max-w-xl mx-auto bg-[#18181c]/90 border border-[#d4af37]/30 rounded-xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          {!isSubmitted ? (
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div className="text-left mb-2">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block">
                  Acesso Antecipado & Pre-Save Oficial
                </span>
                <p className="text-sm text-zinc-300">
                  Cadastre seu e-mail para salvar o álbum de estreia de{' '}
                  <strong className="text-white font-medium">Kerol & Kaleo Worship</strong> em primeira mão.
                </p>
              </div>

              {/* Platform selector */}
              <div className="grid grid-cols-4 gap-2 text-xs">
                {(
                  [
                    { id: 'spotify', label: 'Spotify' },
                    { id: 'apple', label: 'Apple' },
                    { id: 'deezer', label: 'Deezer' },
                    { id: 'youtube', label: 'YouTube' },
                  ] as const
                ).map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlatform(p.id)}
                    className={`py-2 px-2 rounded-md font-medium text-xs transition-colors border ${
                      platform === p.id
                        ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f5df8b]'
                        : 'bg-[#121214] border-zinc-700 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail para o Pre-Save"
                  required
                  className="flex-1 px-4 py-3 bg-[#111113] border border-zinc-700 focus:border-[#d4af37] rounded-md text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#d4af37] hover:bg-[#eac44e] active:scale-[0.98] text-[#121214] text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap shadow-md cursor-pointer"
                >
                  Garantir Acesso
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-500 pt-1">
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors cursor-pointer text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Em conformidade com a LGPD · Sem spam</span>
                </button>
                <span className="tabular-nums text-zinc-400">
                  {leadCount.toLocaleString('pt-BR')} ouvintes inscritos
                </span>
              </div>
            </form>
          ) : (
            <div className="py-4 space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-1 border border-emerald-500/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Pre-Save Confirmado com Sucesso!
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Você receberá em primeira mão as notificações de lançamento no {platform.toUpperCase()} assim que as canções forem disponibilizadas.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#fotos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#d4af37] hover:bg-[#eac44e] text-[#121214] text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md"
                >
                  <span>Ver Fotos de Trabalho</span>
                </a>
                <a
                  href="#contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold uppercase tracking-wider rounded-md transition-all"
                >
                  <span>Contatar Assessoria</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
