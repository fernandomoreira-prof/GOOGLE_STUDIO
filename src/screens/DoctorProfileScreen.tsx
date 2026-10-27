import React, { useState } from 'react';
import { ScreenId, Doctor } from '../types';
import { DOCTORS, PATIENT_REVIEWS } from '../data/mockData';

interface DoctorProfileScreenProps {
  onNavigate: (screen: ScreenId) => void;
  doctor?: Doctor;
  onSelectSchedule: (doctor: Doctor) => void;
}

export const DoctorProfileScreen: React.FC<DoctorProfileScreenProps> = ({
  onNavigate,
  doctor = DOCTORS[0], // Defaults to Dra. Camila Fontes
  onSelectSchedule,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [activeProcedureTab, setActiveProcedureTab] = useState<string>('Bioestimuladores');
  const [showShareToast, setShowShareToast] = useState(false);

  const handleShare = () => {
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2500);
  };

  return (
    <div className="flex flex-col space-y-4 pt-1 pb-36 relative">
      {/* Toast Notification for Share / Bookmark */}
      {showShareToast && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/85 text-white text-xs font-semibold backdrop-blur-md shadow-xl flex items-center gap-1.5 animate-fadeIn">
          <span className="material-symbols-outlined text-[16px] text-[#7df4ff]">check</span>
          <span>Link do perfil concierge copiado!</span>
        </div>
      )}

      {/* Navigation Bar Floating Controls */}
      <div className="flex items-center justify-between px-5 pt-2">
        <button
          type="button"
          aria-label="Voltar"
          onClick={() => onNavigate('home')}
          className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm flex items-center justify-center text-[#191c1e] hover:text-[#006194] active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
        </button>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Favoritar"
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm flex items-center justify-center text-[#006194] active:scale-95 transition-all group"
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}
            >
              bookmark
            </span>
          </button>
          <button
            type="button"
            aria-label="Compartilhar"
            onClick={handleShare}
            className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm flex items-center justify-center text-[#191c1e] hover:text-[#006194] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[22px]">ios_share</span>
          </button>
        </div>
      </div>

      {/* Hero Section: Foto Principal com Gradiente Perolado */}
      <section className="relative px-5 pt-1">
        <div className="relative w-full aspect-[4/4.2] rounded-[32px] overflow-hidden shadow-lg border border-white/80">
          <img
            className="w-full h-full object-cover object-top"
            src={doctor.fullImage || doctor.avatar}
            alt={doctor.name}
          />
          {/* Subtle Gradient Vignette Over Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/60 via-transparent to-transparent"></div>

          {/* Verified Badge over Doctor Portrait */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-sm">
              <span
                className="material-symbols-outlined text-[16px] text-[#006194]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-[11px] text-[#191c1e] font-semibold tracking-wide">
                Corpo Clínico Titular
              </span>
            </div>
          </div>

          {/* CRM Floating Badge at Bottom-Right */}
          <div className="absolute bottom-4 right-4">
            <div className="px-3 py-1.5 rounded-xl bg-[#191c1e]/75 backdrop-blur-md border border-white/20">
              <p className="font-['JetBrains_Mono',monospace] text-[11px] text-white font-medium tracking-wider">
                CRM {doctor.crm}
              </p>
            </div>
          </div>

          {/* Live Status Pill Bottom-Left */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#7df4ff]/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7df4ff] shadow-[0_0_8px_#7df4ff] animate-ping"></span>
              <span className="text-[11px] text-[#006194] font-semibold">Atendimento Concierge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details Card (Overlapping Glass Sheet) */}
      <section className="px-5 -mt-4 relative z-10">
        <div className="glass-specular rounded-[28px] p-6 shadow-xl space-y-4">
          <div>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h1 className="text-[26px] font-bold text-[#191c1e] tracking-tight">
                  {doctor.name}
                </h1>
                <p className="text-[17px] text-[#006194] font-medium mt-0.5">{doctor.title}</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-[#dae2fd]/60 flex items-center justify-center shrink-0 border border-[#dae2fd]">
                <span className="material-symbols-outlined text-[#006194] text-[22px]">
                  shield_person
                </span>
              </div>
            </div>
            <p className="text-[15px] text-[#3f4850] mt-1.5">{doctor.specialty}</p>
          </div>

          {/* Rating & Metrics Row */}
          <div className="pt-2 pb-1 flex items-center justify-between border-y border-[#bfc7d2]/30">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-[#00818a] gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[18px] text-[#00818a]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-[17px] font-bold text-[#191c1e]">{doctor.rating}</span>
              <span className="text-[15px] text-[#3f4850]">({doctor.reviewCount} avaliações)</span>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-[#707881] uppercase tracking-wider block">
                RQE Especialista
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-[13px] text-[#191c1e] font-semibold">
                {doctor.rqe || '91.802'}
              </span>
            </div>
          </div>

          {/* Credentials Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#cce5ff]/40 border border-[#cce5ff] text-[#001d31]">
              <span className="material-symbols-outlined text-[15px] text-[#006194]">
                workspace_premium
              </span>
              <span className="text-[11px] font-semibold">{doctor.membership || 'Membro SBD'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#dae2fd]/50 border border-[#dae2fd] text-[#131b2e]">
              <span className="material-symbols-outlined text-[15px] text-[#006194]">school</span>
              <span className="text-[11px] font-semibold">
                {doctor.fellowship || 'Fellow Harvard Medical'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-[#191c1e]">
              <span className="material-symbols-outlined text-[15px] text-[#006194]">
                hourglass_top
              </span>
              <span className="text-[11px] font-semibold">
                {doctor.experienceYears || 12}+ Anos Experiência
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="px-5 space-y-6">
        {/* Sobre a Especialista */}
        <section className="glass-specular rounded-[24px] p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[17px] font-bold text-[#191c1e] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006194] text-[20px]">
                clinical_notes
              </span>
              Sobre a Especialista
            </h2>
            <span className="text-[11px] text-[#006194] font-semibold">Protocolo Aura</span>
          </div>
          <p className="text-[15px] text-[#3f4850] leading-relaxed">
            {doctor.bio ||
              'Pioneira na aplicação de mapeamento facial de altíssima definição 3D e dermatologia regenerativa personalizada. Com abordagem integrativa e acolhedora, alia ciência celular de precisão a resultados naturais, preservando a identidade morfológica singular de cada paciente em ambiente de absoluto sigilo e conforto.'}
          </p>

          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#bfc7d2]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#7df4ff]/30 flex items-center justify-center text-[#00818a]">
                <span className="material-symbols-outlined text-[18px]">biotech</span>
              </div>
              <div>
                <p className="text-[11px] text-[#191c1e] font-semibold">Biotecnologia Suíça</p>
                <p className="text-[10px] text-[#707881]">Ativos de pureza médica</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#cce5ff]/40 flex items-center justify-center text-[#006194]">
                <span className="material-symbols-outlined text-[18px]">lock</span>
              </div>
              <div>
                <p className="text-[11px] text-[#191c1e] font-semibold">Privacidade Total</p>
                <p className="text-[10px] text-[#707881]">Suíte com acesso discreto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Procedimentos Realizados */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[17px] font-bold text-[#191c1e] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006194] text-[20px]">
                auto_awesome
              </span>
              Procedimentos Realizados
            </h2>
            <span className="text-[11px] text-[#3f4850] font-medium">8 disponíveis</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {[
              {
                id: 'Bioestimuladores',
                sub: 'Colágeno & Firmeza',
                icon: 'spa',
              },
              {
                id: 'Toxina Botulínica',
                sub: 'Microdoses Naturais',
                icon: 'face',
              },
              {
                id: 'Laser Fracionado',
                sub: 'Resurfacing Cutâneo',
                icon: 'blur_linear',
              },
              {
                id: 'Ultrassom Focado',
                sub: 'Lifting Não Cirúrgico',
                icon: 'waves',
              },
            ].map((proc) => {
              const isSelected = activeProcedureTab === proc.id;
              return (
                <button
                  key={proc.id}
                  type="button"
                  onClick={() => setActiveProcedureTab(proc.id)}
                  className={`flex flex-col items-start p-3.5 rounded-2xl text-left active:scale-98 transition-transform ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#006194] to-[#007bb9] text-white shadow-sm'
                      : 'glass-specular text-[#191c1e] hover:border-[#006194]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`material-symbols-outlined text-[20px] ${
                        isSelected ? 'text-[#7df4ff]' : 'text-[#006194]'
                      }`}
                    >
                      {proc.icon}
                    </span>
                    {isSelected ? (
                      <span className="w-2 h-2 rounded-full bg-[#7df4ff] shadow-[0_0_8px_#7df4ff]"></span>
                    ) : (
                      <span className="material-symbols-outlined text-[16px] text-slate-400">
                        chevron_right
                      </span>
                    )}
                  </div>
                  <span className="text-[17px] font-semibold leading-tight">{proc.id}</span>
                  <span
                    className={`text-[11px] mt-0.5 ${
                      isSelected ? 'text-white/90' : 'text-[#3f4850]'
                    }`}
                  >
                    {proc.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Locais de Atendimento */}
        <section className="glass-specular rounded-[24px] p-5">
          <h2 className="text-[17px] font-bold text-[#191c1e] mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#006194] text-[20px]">
              location_on
            </span>
            Locais de Atendimento
          </h2>
          <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/60 flex flex-col gap-2.5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[17px] font-semibold text-[#191c1e]">
                  Unidade Jardins - Flagship
                </h3>
                <p className="text-[15px] text-[#3f4850] mt-0.5">
                  Rua Oscar Freire, 1420 - 9º Andar
                </p>
                <p className="text-[11px] text-[#707881]">Jardins, São Paulo - SP</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#cce5ff]/50 text-[#001d31] text-[11px] font-semibold">
                Principal
              </span>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[#191c1e]">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200">
                <span className="material-symbols-outlined text-[15px] text-[#006194]">
                  local_parking
                </span>
                <span className="text-[11px] font-medium">Manobrista Cortesia</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200">
                <span className="material-symbols-outlined text-[15px] text-[#006194]">
                  room_service
                </span>
                <span className="text-[11px] font-medium">Concierge VIP</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200">
                <span className="material-symbols-outlined text-[15px] text-[#006194]">coffee</span>
                <span className="text-[11px] font-medium">Lounge Privativo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Avaliações VIP */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <h2 className="text-[17px] font-bold text-[#191c1e]">Avaliações VIP</h2>
              <span className="px-2 py-0.5 rounded-full bg-[#7df4ff]/30 text-[#002022] text-[11px] font-bold">
                {doctor.rating} ★
              </span>
            </div>
            <button
              type="button"
              className="text-[13px] text-[#006194] font-semibold hover:opacity-80"
            >
              Ver todas ({doctor.reviewCount})
            </button>
          </div>

          <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5">
            {PATIENT_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="glass-specular min-w-[280px] max-w-[280px] rounded-2xl p-4 flex flex-col justify-between shrink-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#cce5ff] flex items-center justify-center font-bold text-[#001d31] text-[11px]">
                        {rev.initials}
                      </div>
                      <div>
                        <h4 className="text-[13px] font-semibold text-[#191c1e]">{rev.author}</h4>
                        <span className="text-[10px] text-[#707881]">{rev.timeAgo}</span>
                      </div>
                    </div>
                    <div className="flex text-[#00818a] text-[14px]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined text-[15px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[13px] text-[#3f4850] italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#bfc7d2]/30 flex items-center justify-between text-[#707881] text-[11px] font-['JetBrains_Mono',monospace]">
                  <span>{rev.procedure}</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Garantia & Políticas Aura */}
        <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200/60 flex items-center gap-3">
          <span className="material-symbols-outlined text-[#006194] text-[24px]">verified_user</span>
          <div className="flex-1">
            <p className="text-[13px] font-semibold text-[#191c1e]">Atendimento Sob Medida</p>
            <p className="text-[11px] text-[#3f4850]">
              Reagendamento flexível até 24h antes sem custo concierge.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar (Glass Bar com Valor e Botão Selecionar Horário) */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto">
        <div className="bg-white/85 backdrop-blur-2xl border-t border-white/60 shadow-[0_-10px_30px_rgba(0,97,148,0.06)] px-5 pt-3.5 pb-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[11px] text-[#3f4850] font-medium">Valor da Consulta</span>
              <div className="flex items-baseline gap-1">
                <span className="text-[17px] font-medium text-[#006194]">R$</span>
                <span className="text-[26px] font-bold text-[#191c1e] tracking-tight">
                  {doctor.price}
                </span>
                <span className="text-[11px] text-[#707881] font-normal">/ sessão</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onSelectSchedule(doctor)}
              className="flex-1 h-[52px] rounded-[16px] bg-gradient-to-r from-[#006194] to-[#007bb9] text-white text-[17px] font-semibold flex items-center justify-center gap-2 shadow-md action-glow active:scale-[0.98] transition-all border border-white/30"
            >
              <span>Selecionar Horário</span>
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            </button>
          </div>
          <div className="w-full flex justify-center pt-2">
            <div className="w-36 h-1 bg-[#191c1e]/30 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};
