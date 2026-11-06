import React from 'react';
import { X, ShieldCheck, FileText, Download, Check, Printer } from 'lucide-react';
import { SongChord } from '../types';
import { WORSHIP_SONGS } from '../data/songs';

interface LegalModalsProps {
  privacyOpen: boolean;
  copyrightOpen: boolean;
  songbookModalOpen: boolean;
  selectedSong?: SongChord;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  privacyOpen,
  copyrightOpen,
  songbookModalOpen,
  selectedSong,
  onClose,
}) => {
  if (!privacyOpen && !copyrightOpen && !songbookModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#17171c] border border-[#d4af37]/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-zinc-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. LGPD Privacy Modal */}
        {privacyOpen && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block">
                  Lei Geral de Proteção de Dados (Lei 13.709/18)
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Política de Privacidade & Consentimento
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed max-h-[55vh] overflow-y-auto pr-2 border-t border-b border-zinc-800 py-4">
              <p className="font-semibold text-white">
                KEROL & KALEO WORSHIP · Versão 1.0 (Atualizada em 04/11/2026)
              </p>

              <div>
                <h4 className="font-bold text-[#f5df8b] mb-1">1. Apresentação e Compromisso</h4>
                <p>
                  O ministério musical independente KEROL & KALEO WORSHIP valoriza a integridade, a transparência e a privacidade dos dados pessoais de seus ouvintes, contratantes e parceiros. Esta Política foi estruturada em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#f5df8b] mb-1">2. Finalidade dos Dados Coletados</h4>
                <p>
                  <strong>2.1. Campanha de Pré-Lançamento (Pre-Save):</strong> Coleta de e-mail para notificação exclusiva sobre lançamentos do álbum autoral.
                  <br />
                  <strong>2.2. Formulário de Contatos e Parcerias:</strong> Coleta de dados do responsável (nome, e-mail, telefone/WhatsApp, cidade/UF e tipo de evento ou parceria) com a finalidade exclusiva de avaliação de viabilidade técnica, logística e de agenda.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#f5df8b] mb-1">3. Privacidade Absoluta e Não Compartilhamento</h4>
                <p>
                  O CONTROLADOR garante que os dados pessoais coletados jamais serão comercializados, alugados, cedidos ou transferidos a terceiros para fins publicitários não relacionados ao ministério.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#f5df8b] mb-1">4. Direitos do Titular (LGPD Art. 18)</h4>
                <p>
                  O titular tem o direito de confirmação da existência de tratamento, acesso, retificação, limitação ou exclusão total e irrevogável de seus dados a qualquer momento, mediante solicitação para o e-mail oficial: <code className="text-[#d4af37]">sunshinne.contato@gmail.com</code>.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-[#d4af37] hover:bg-[#eac44e] text-[#121214] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Compreendi e Aceito
              </button>
            </div>
          </div>
        )}

        {/* 2. Copyright and Congregational License Modal */}
        {copyrightOpen && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block">
                  Lei de Direitos Autorais (Lei Federal 9.610/98)
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Termo de Direitos & Licença Congregacional
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed max-h-[55vh] overflow-y-auto pr-2 border-t border-b border-zinc-800 py-4">
              <p className="font-semibold text-white">
                PROJETO MUSICAL KEROL & KALEO WORSHIP
              </p>

              <div>
                <h4 className="font-bold text-[#f5df8b] mb-1">1. Titularidade Exclusiva das Obras</h4>
                <p>
                  Todas as composições literomusicais, arranjos harmônicos, fonogramas, gravações master e identidades visuais de KEROL & KALEO WORSHIP são de propriedade intelectual exclusiva dos autores originais.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#f5df8b] mb-1">2. Licença de Uso Congregacional (PERMITIDO)</h4>
                <p>
                  Concede-se licença não exclusiva, ampla e irrevogável para igrejas locais, congregações, grupos de louvor e comunidades de fé executarem publicamente as obras musicais em reuniões, cultos e celebrações legítimas sem fins lucrativos, bem como em transmissões de cultos ao vivo (livestreams), desde que devidamente citada a autoria de "Kerol & Kaleo Worship".
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#f5df8b] mb-1">3. Vedações Expressas</h4>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                  <li>Fica expressamente proibida a comercialização ou cobrança indevida por materiais disponibilizados gratuitamente.</li>
                  <li>É vedada a regravação fonográfica com fins comerciais sem prévia autorização expressa e por escrito dos autores.</li>
                  <li>Fica proibido o cadastro de canções em plataformas automatizadas de Content ID ou monetização de terceiros retendo direitos dos autores.</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-[#d4af37] hover:bg-[#eac44e] text-[#121214] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Fechar Termos
              </button>
            </div>
          </div>
        )}

        {/* 3. Caderno de Cifras Download Simulation Modal */}
        {songbookModalOpen && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block">
                  Download Autorizado
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Caderno de Cifras Completo (PDF)
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 max-h-[55vh] overflow-y-auto pr-2 border-t border-b border-zinc-800 py-4">
              <div className="p-4 bg-[#111114] border border-zinc-800 rounded-xl space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block">
                  Índice das Faixas Autorais Inclusas no Caderno:
                </span>
                <div className="space-y-2">
                  {WORSHIP_SONGS.map((song, i) => (
                    <div
                      key={song.id}
                      className="flex items-center justify-between p-2 rounded bg-zinc-900/60 border border-zinc-800 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-500 font-mono">0{i + 1}.</span>
                        <span className="text-white font-medium">{song.title}</span>
                      </div>
                      <span className="text-zinc-400 font-mono">
                        Tom: {song.key} · {song.bpm} BPM
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-zinc-400 text-xs">
                O arquivo contém diagramas de acordes, tablatura dos dedilhados principais, mapa harmônico para teclado e violão, e letras com marcações congregacionais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir Cifras</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  // Generate downloadable text representation or print
                  const content = WORSHIP_SONGS.map(
                    (s) =>
                      `=== ${s.title.toUpperCase()} ===\nTom: ${s.key} | BPM: ${s.bpm} | ${s.capo}\n\n` +
                      s.sections
                        .map(
                          (sec) =>
                            `[${sec.name}]\n` +
                            sec.lines
                              .map((l) => (l.chordLine ? `${l.chordLine}\n${l.lyricLine}` : l.lyricLine))
                              .join('\n')
                        )
                        .join('\n\n')
                  ).join('\n\n----------------------------------------\n\n');

                  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'Caderno_de_Cifras_Kerol_e_Kaleo_Worship.txt';
                  a.click();
                  URL.revokeObjectURL(url);
                  onClose();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#d4af37] hover:bg-[#eac44e] text-[#121214] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Baixar Arquivo Completo</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
