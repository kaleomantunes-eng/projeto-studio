import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, Calendar, MapPin, User, Building } from 'lucide-react';
import { ProposalFormState } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ProposalFormState>({
    nome: '',
    email: '',
    whatsapp: '',
    cidade: '',
    tipoProposta: 'Convite Ministerial / Culto',
    dataPrevista: '',
    detalhes: '',
  });

  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const directEmail = 'sunshinne.contato@gmail.com';
  const whatsappNumberRaw = '5551992211732';
  const whatsappNumberFormatted = '+55 (51) 99221-1732';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(whatsappNumberFormatted);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.whatsapp.trim()) {
      setSubmittedStatus('Preencha pelo menos seu nome e WhatsApp.');
      return;
    }

    const mensagemTexto =
      `Olá Assessoria Kerol & Kaleo Worship!\n\n` +
      `Gostaríamos de apresentar uma proposta de contato:\n\n` +
      `• Solicitante / Contratante: ${formData.nome}\n` +
      `• E-mail: ${formData.email || 'Não informado'}\n` +
      `• WhatsApp do Solicitante: ${formData.whatsapp}\n` +
      `• Localidade (Cidade/UF): ${formData.cidade || 'Não informada'}\n` +
      `• Tipo de Parceria / Evento: ${formData.tipoProposta}\n` +
      `• Data Prevista: ${formData.dataPrevista || 'A definir'}\n` +
      (formData.detalhes ? `• Detalhes / Mensagem: ${formData.detalhes}\n` : '') +
      `\nAguardamos o retorno da equipe de agenda!`;

    const url = `https://wa.me/${whatsappNumberRaw}?text=${encodeURIComponent(mensagemTexto)}`;
    window.open(url, '_blank');
    setSubmittedStatus('Redirecionando para o WhatsApp oficial da Assessoria...');
  };

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f0f12] border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
            Agendamento & Parcerias
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#d4af37] mb-4 [text-wrap:balance]">
            LEVE KEROL & KALEO WORSHIP PARA O SEU EVENTO
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Disponível para Louvores Congregacionais, Shows, Eventos, Parcerias Comerciais ou Convites Ministeriais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="bg-[#16161a] border border-zinc-800 p-6 rounded-2xl space-y-4 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                  E-mail Direto da Assessoria
                </span>
                <a
                  href={`mailto:${directEmail}`}
                  className="font-serif text-lg font-bold text-white hover:text-[#d4af37] transition-colors break-all"
                >
                  {directEmail}
                </a>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Envie termos de parcerias, propostas institucionais de gravadoras, releases e convites para datas especiais.
              </p>
              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1f1f26] hover:bg-zinc-700 text-zinc-300 text-xs font-medium rounded transition-colors cursor-pointer"
                >
                  {emailCopied ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Copiado!
                    </span>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar E-mail</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${directEmail}?subject=Proposta%20de%20Agenda%20Kerol%20e%20Kaleo%20Worship`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#d4af37]/15 hover:bg-[#d4af37]/25 text-[#f5df8b] text-xs font-medium rounded transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Escrever E-mail</span>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="bg-[#16161a] border border-zinc-800 p-6 rounded-2xl space-y-4 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#25d366]/10 flex items-center justify-center text-[#25d366]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                  WhatsApp da Assessoria
                </span>
                <span className="font-serif text-lg font-bold text-white block">
                  {whatsappNumberFormatted}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Atendimento direto para confirmação rápida de datas na agenda e logística de viagens e ministração ministerial.
              </p>
              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1f1f26] hover:bg-zinc-700 text-zinc-300 text-xs font-medium rounded transition-colors cursor-pointer"
                >
                  {phoneCopied ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Copiado!
                    </span>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Número</span>
                    </>
                  )}
                </button>
                <a
                  href={`https://wa.me/${whatsappNumberRaw}?text=${encodeURIComponent(
                    'Olá Assessoria Kerol & Kaleo Worship! Gostaria de consultar a agenda do ministério.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded transition-colors"
                >
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Interactive Proposal Form */}
          <div className="lg:col-span-7 bg-[#17171c] border border-[#d4af37]/25 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                Formulário de Proposta e Agendamento
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Preencha os dados abaixo para gerar e enviar instantaneamente sua proposta formatada para nossa assessoria.
              </p>
            </div>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome do Contratante */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Nome do Responsável / Solicitante *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Pr. Carlos / Mariana Oliveira"
                      className="w-full pl-9 pr-4 py-2.5 bg-[#101013] border border-zinc-700 focus:border-[#d4af37] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    WhatsApp para Retorno *
                  </label>
                  <div className="relative">
                    <MessageCircle className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="Ex: (51) 99999-9999"
                      className="w-full pl-9 pr-4 py-2.5 bg-[#101013] border border-zinc-700 focus:border-[#d4af37] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* E-mail */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contato@igreja.com.br"
                      className="w-full pl-9 pr-4 py-2.5 bg-[#101013] border border-zinc-700 focus:border-[#d4af37] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Cidade / Estado */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Cidade & Estado (UF)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      placeholder="Ex: Porto Alegre / RS"
                      className="w-full pl-9 pr-4 py-2.5 bg-[#101013] border border-zinc-700 focus:border-[#d4af37] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Tipo de Proposta */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Tipo de Evento ou Parceria
                  </label>
                  <select
                    value={formData.tipoProposta}
                    onChange={(e) => setFormData({ ...formData, tipoProposta: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#101013] border border-zinc-700 focus:border-[#d4af37] rounded-lg text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Convite Ministerial / Culto Especial">Convite Ministerial / Culto Especial</option>
                    <option value="Noite de Adoração / Show Worship">Noite de Adoração / Show Worship</option>
                    <option value="Conferência de Jovens ou Líderes">Conferência de Jovens ou Líderes</option>
                    <option value="Parceria Comercial / Gravadora">Parceria Comercial / Gravadora</option>
                    <option value="Outro Formato">Outro Formato</option>
                  </select>
                </div>

                {/* Data Prevista */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Data Prevista (Opcional)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      value={formData.dataPrevista}
                      onChange={(e) => setFormData({ ...formData, dataPrevista: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 bg-[#101013] border border-zinc-700 focus:border-[#d4af37] rounded-lg text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Mensagem / Detalhes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Detalhes Adicionais da Proposta
                </label>
                <textarea
                  rows={3}
                  value={formData.detalhes}
                  onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                  placeholder="Descreva detalhes como estrutura de som, expectativa de público ou proposta..."
                  className="w-full px-4 py-2.5 bg-[#101013] border border-zinc-700 focus:border-[#d4af37] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#25d366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Proposta via WhatsApp da Assessoria</span>
                </button>

                {submittedStatus && (
                  <p className="text-xs text-[#d4af37] text-center font-medium">
                    {submittedStatus}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
