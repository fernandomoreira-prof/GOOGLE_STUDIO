import React from 'react';
import { ScreenId, Doctor } from '../types';
import { DOCTORS, PATIENT_SOFIA } from '../data/mockData';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenNotifications: () => void;
  onOpenCheckupDetails: () => void;
  onOpenConciergeCall: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectDoctor,
  onOpenNotifications,
  onOpenCheckupDetails,
  onOpenConciergeCall,
}) => {
  return (
    <div className="flex flex-col space-y-6 pt-1 pb-24">
      {/* TopAppBar: Sofia VIP Profile Lockup */}
      <div className="flex items-center justify-between px-5 pt-2">
        <div className="flex items-center gap-3">
          {/* Avatar with VIP Status ring */}
          <div className="relative cursor-pointer" onClick={() => onNavigate('doctor')}>
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#006194] to-[#7df4ff] shadow-md shadow-[#006194]/20">
              <img
                className="w-full h-full rounded-full object-cover"
                src={PATIENT_SOFIA.avatar}
                alt={PATIENT_SOFIA.name}
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#f7f9fb] flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7df4ff] shadow-[0_0_8px_#7df4ff]"></span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[20px] font-semibold tracking-tight text-[#191c1e]">
                Olá, Sofia
              </span>
              <span
                className="material-symbols-outlined text-[#006194] text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[11px] uppercase tracking-wider text-[#006194] font-semibold">
                Paciente VIP Platinum
              </span>
            </div>
          </div>
        </div>

        {/* Notifications Action Button with Neon Pulse */}
        <button
          type="button"
          aria-label="Notificações"
          onClick={onOpenNotifications}
          className="relative w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 flex items-center justify-center text-[#191c1e] hover:opacity-80 active:scale-95 transition-all duration-200 shadow-sm"
        >
          <span className="material-symbols-outlined text-[#006194]">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#7df4ff] shadow-[0_0_8px_#7df4ff] ring-2 ring-white animate-pulse"></span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="px-5 space-y-6">
        {/* Banner de Destaque: Check-up Anual Pré-agendado */}
        <section className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0284C7] to-[#0369A1] p-5 text-white shadow-xl shadow-[#006194]/20 border border-white/30">
          <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-[#7df4ff]/20 blur-xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7df4ff] shadow-[0_0_6px_#7df4ff]"></span>
                <span className="text-[11px] text-white font-medium tracking-wide">
                  Concierge Preventivo
                </span>
              </div>
              <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#7df4ff] font-semibold tracking-wider">
                AURA 2025
              </span>
            </div>
            <h2 className="text-[20px] font-semibold text-white tracking-tight mb-1.5">
              Check-up Anual Pré-agendado
            </h2>
            <p className="text-[15px] text-white/90 leading-snug mb-5 max-w-[90%]">
              Sua bateria de exames preventivos está pronta para agendamento prioritário.
            </p>
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={onOpenCheckupDetails}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#006194] text-[17px] font-semibold shadow-lg shadow-black/10 hover:opacity-95 active:scale-98 transition-transform duration-150"
              >
                <span>Ver Detalhes</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-white/80 font-medium">3 exames inclusos</span>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Próxima Consulta */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-[17px] font-semibold text-[#191c1e] tracking-tight">
                Próxima Consulta
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#7df4ff]/20 text-[#00666d] text-[11px] font-semibold border border-[#7df4ff]/40">
                Confirmada
              </span>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('confirmation')}
              className="text-[#006194] text-[13px] font-medium hover:opacity-80 transition-opacity"
            >
              Ver todas
            </button>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-white/80 backdrop-blur-xl border border-slate-200/80 p-5 shadow-lg shadow-[#191c1e]/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#cce5ff]/30 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={DOCTORS[1].avatar} // Dr. Marcelo Guimarães
                    alt={DOCTORS[1].name}
                  />
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-[#191c1e]">
                    Dr. Marcelo Guimarães
                  </h4>
                  <p className="text-[15px] text-[#565e74]">Cardiologista Intervencionista</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span
                      className="material-symbols-outlined text-[#00666d] text-[15px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      stars
                    </span>
                    <span className="text-[11px] text-[#3f4850] font-medium">CRM/SP 148.920</span>
                  </div>
                </div>
              </div>

              {/* Date Indicator Pill */}
              <div className="bg-[#006194]/10 border border-[#006194]/20 rounded-2xl px-3 py-1.5 text-center flex-shrink-0">
                <span className="block text-[11px] uppercase font-bold text-[#006194]">Amanhã</span>
                <span className="block text-[17px] font-semibold text-[#006194]">14:30</span>
              </div>
            </div>

            {/* Clinic Location Metadata */}
            <div className="flex items-center gap-2 py-2 px-3 rounded-xl bg-slate-100/70 border border-slate-200/60 mb-4">
              <span className="material-symbols-outlined text-[#006194] text-[18px]">domain</span>
              <span className="text-[15px] text-[#3f4850] truncate">
                Sala 402, Edifício Jardins • Torre A
              </span>
            </div>

            {/* Bottom Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={() => {
                  onSelectDoctor(DOCTORS[1]);
                  onNavigate('schedule');
                }}
                className="h-[46px] rounded-xl bg-white border border-[#bfc7d2]/50 text-[#191c1e] text-[17px] font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                <span>Reagendar</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('map')}
                className="h-[46px] rounded-xl bg-gradient-to-r from-[#006194] to-[#007bb9] text-white text-[17px] font-semibold flex items-center justify-center gap-2 shadow-[0_4px_20px_0_rgba(0,240,255,0.35)] hover:opacity-95 active:scale-95 transition-all border border-[#7df4ff]/30"
              >
                <span
                  className="material-symbols-outlined text-[18px] text-[#7df4ff]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  near_me
                </span>
                <span>Rota no Mapa</span>
              </button>
            </div>
          </div>
        </section>

        {/* Seção: Grid de Categorias Rápidas */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[17px] font-semibold text-[#191c1e] tracking-tight">
              Categorias Rápidas
            </h3>
            <span className="text-[11px] text-[#565e74]">Acesso Exclusivo</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5">
            {/* Item 1: Consultas */}
            <button
              type="button"
              onClick={() => onNavigate('catalog')}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200 hover:border-[#006194]/40 active:scale-95 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#cce5ff]/40 flex items-center justify-center mb-2 group-hover:bg-[#cce5ff] transition-colors">
                <span
                  className="material-symbols-outlined text-[#006194] text-[24px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stethoscope
                </span>
              </div>
              <span className="text-[13px] font-semibold text-[#191c1e]">Consultas</span>
              <span className="text-[11px] text-[#565e74] mt-0.5">Especialistas</span>
            </button>

            {/* Item 2: Procedimentos */}
            <button
              type="button"
              onClick={() => onNavigate('catalog')}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200 hover:border-[#006194]/40 active:scale-95 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#dae2fd]/40 flex items-center justify-center mb-2 group-hover:bg-[#dae2fd] transition-colors">
                <span
                  className="material-symbols-outlined text-[#006194] text-[24px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  medical_services
                </span>
              </div>
              <span className="text-[13px] font-semibold text-[#191c1e]">Procedimentos</span>
              <span className="text-[11px] text-[#565e74] mt-0.5">Clínicos</span>
            </button>

            {/* Item 3: Exames */}
            <button
              type="button"
              onClick={() => onNavigate('catalog')}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200 hover:border-[#006194]/40 active:scale-95 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#cce5ff]/40 flex items-center justify-center mb-2 group-hover:bg-[#cce5ff] transition-colors">
                <span className="material-symbols-outlined text-[#006194] text-[24px]">vital_signs</span>
              </div>
              <span className="text-[13px] font-semibold text-[#191c1e]">Exames</span>
              <span className="text-[11px] text-[#565e74] mt-0.5">Diagnósticos</span>
            </button>

            {/* Item 4: Telemedicina */}
            <button
              type="button"
              onClick={() => {
                onSelectDoctor(DOCTORS[4]); // Dra. Camila Fontana
                onNavigate('schedule');
              }}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200 hover:border-[#006194]/40 active:scale-95 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7df4ff]/30 flex items-center justify-center mb-2 group-hover:bg-[#7df4ff]/50 transition-colors">
                <span className="material-symbols-outlined text-[#00666d] text-[24px]">videocam</span>
              </div>
              <span className="text-[13px] font-semibold text-[#191c1e]">Telemedicina</span>
              <span className="text-[11px] text-[#00666d] font-medium mt-0.5">Online 24h</span>
            </button>

            {/* Item 5: Emergência VIP */}
            <button
              type="button"
              onClick={onOpenConciergeCall}
              className="col-span-3 sm:col-span-1 flex flex-col items-center justify-center p-3 rounded-2xl bg-[#ffdad6]/40 backdrop-blur-lg border border-[#ba1a1a]/30 hover:border-[#ba1a1a] active:scale-95 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ba1a1a]/10 flex items-center justify-center mb-2 group-hover:bg-[#ba1a1a]/20 transition-colors">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[24px]">e911_emergency</span>
              </div>
              <span className="text-[13px] font-semibold text-[#ba1a1a]">Emergência VIP</span>
              <span className="text-[11px] text-[#ba1a1a]/80 mt-0.5">Prioritário</span>
            </button>
          </div>
        </section>

        {/* Seção: Médicos em Destaque */}
        <section className="space-y-3 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-[17px] font-semibold text-[#191c1e] tracking-tight">
                Médicos em Destaque
              </h3>
              <span className="w-2 h-2 rounded-full bg-[#7df4ff] shadow-[0_0_6px_#7df4ff]"></span>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('doctor')}
              className="text-[#006194] text-[13px] font-medium hover:opacity-80 transition-opacity"
            >
              Ver corpo clínico
            </button>
          </div>

          {/* Horizontal Scroll List */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2">
            {/* Card Médico Principal: Dra. Camila Fontes (Featured) */}
            <div className="w-64 flex-shrink-0 rounded-[24px] bg-white/80 backdrop-blur-xl border border-slate-200 p-4 shadow-md shadow-[#191c1e]/5 flex flex-col justify-between">
              <div>
                <div
                  className="relative w-full h-36 rounded-2xl overflow-hidden mb-3 bg-slate-100 cursor-pointer"
                  onClick={() => {
                    onSelectDoctor(DOCTORS[0]);
                    onNavigate('doctor');
                  }}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={DOCTORS[0].avatar}
                    alt={DOCTORS[0].name}
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md flex items-center gap-1 shadow-sm border border-slate-200">
                    <span
                      className="material-symbols-outlined text-[13px] text-[#00666d]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-['JetBrains_Mono',monospace] text-[11px] font-semibold text-[#191c1e]">
                      {DOCTORS[0].rating}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#006194]/80 backdrop-blur-md text-white text-[10px] font-semibold">
                    Titular Aura
                  </div>
                </div>
                <h4
                  className="text-[17px] font-semibold text-[#191c1e] cursor-pointer hover:text-[#006194]"
                  onClick={() => {
                    onSelectDoctor(DOCTORS[0]);
                    onNavigate('doctor');
                  }}
                >
                  {DOCTORS[0].name}
                </h4>
                <p className="text-[14px] text-[#565e74]">Dermatologia & Estética</p>
                <p className="text-[11px] text-[#707881] mt-1">Unidade Jardins Flagship</p>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#707881]">Consulta Concierge</span>
                  <span className="font-['JetBrains_Mono',monospace] text-[13px] font-semibold text-[#006194]">
                    R$ {DOCTORS[0].price}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onSelectDoctor(DOCTORS[0]);
                    onNavigate('schedule');
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#006194] text-white text-[13px] font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm"
                >
                  Agendar
                </button>
              </div>
            </div>

            {/* Card Médico 1: Dra. Helena Siqueira */}
            <div className="w-64 flex-shrink-0 rounded-[24px] bg-white/80 backdrop-blur-xl border border-slate-200 p-4 shadow-md shadow-[#191c1e]/5 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3 bg-slate-100">
                  <img
                    className="w-full h-full object-cover"
                    src={DOCTORS[2].avatar}
                    alt={DOCTORS[2].name}
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md flex items-center gap-1 shadow-sm border border-slate-200">
                    <span
                      className="material-symbols-outlined text-[13px] text-[#00666d]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-['JetBrains_Mono',monospace] text-[11px] font-semibold text-[#191c1e]">
                      5.0
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#006194]/80 backdrop-blur-md text-white text-[10px] font-semibold">
                    Disponível hoje
                  </div>
                </div>
                <h4 className="text-[17px] font-semibold text-[#191c1e]">{DOCTORS[2].name}</h4>
                <p className="text-[14px] text-[#565e74]">{DOCTORS[2].title}</p>
                <p className="text-[11px] text-[#707881] mt-1">{DOCTORS[2].hospital}</p>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#707881]">Consulta Concierge</span>
                  <span className="font-['JetBrains_Mono',monospace] text-[13px] font-semibold text-[#006194]">
                    R$ {DOCTORS[2].price}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onSelectDoctor(DOCTORS[2]);
                    onNavigate('schedule');
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#006194] text-white text-[13px] font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm"
                >
                  Agendar
                </button>
              </div>
            </div>

            {/* Card Médico 2: Dr. Roberto Paiva */}
            <div className="w-64 flex-shrink-0 rounded-[24px] bg-white/80 backdrop-blur-xl border border-slate-200 p-4 shadow-md shadow-[#191c1e]/5 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3 bg-slate-100">
                  <img
                    className="w-full h-full object-cover"
                    src={DOCTORS[3].avatar}
                    alt={DOCTORS[3].name}
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md flex items-center gap-1 shadow-sm border border-slate-200">
                    <span
                      className="material-symbols-outlined text-[13px] text-[#00666d]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-['JetBrains_Mono',monospace] text-[11px] font-semibold text-[#191c1e]">
                      5.0
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#006194]/80 backdrop-blur-md text-white text-[10px] font-semibold">
                    Online amanhã
                  </div>
                </div>
                <h4 className="text-[17px] font-semibold text-[#191c1e]">{DOCTORS[3].name}</h4>
                <p className="text-[14px] text-[#565e74]">{DOCTORS[3].title}</p>
                <p className="text-[11px] text-[#707881] mt-1">{DOCTORS[3].fellowship}</p>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#707881]">Consulta Concierge</span>
                  <span className="font-['JetBrains_Mono',monospace] text-[13px] font-semibold text-[#006194]">
                    R$ {DOCTORS[3].price}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onSelectDoctor(DOCTORS[3]);
                    onNavigate('schedule');
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#006194] text-white text-[13px] font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm"
                >
                  Agendar
                </button>
              </div>
            </div>

            {/* Card Médico 3: Dra. Camila Fontana */}
            <div className="w-64 flex-shrink-0 rounded-[24px] bg-white/80 backdrop-blur-xl border border-slate-200 p-4 shadow-md shadow-[#191c1e]/5 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3 bg-slate-100">
                  <img
                    className="w-full h-full object-cover"
                    src={DOCTORS[4].avatar}
                    alt={DOCTORS[4].name}
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md flex items-center gap-1 shadow-sm border border-slate-200">
                    <span
                      className="material-symbols-outlined text-[13px] text-[#00666d]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-['JetBrains_Mono',monospace] text-[11px] font-semibold text-[#191c1e]">
                      4.9
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#565e74]/80 backdrop-blur-md text-white text-[10px] font-semibold">
                    Telemedicina
                  </div>
                </div>
                <h4 className="text-[17px] font-semibold text-[#191c1e]">{DOCTORS[4].name}</h4>
                <p className="text-[14px] text-[#565e74]">{DOCTORS[4].title}</p>
                <p className="text-[11px] text-[#707881] mt-1">{DOCTORS[4].hospital}</p>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#707881]">Consulta Concierge</span>
                  <span className="font-['JetBrains_Mono',monospace] text-[13px] font-semibold text-[#006194]">
                    R$ {DOCTORS[4].price}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onSelectDoctor(DOCTORS[4]);
                    onNavigate('schedule');
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#006194] text-white text-[13px] font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm"
                >
                  Agendar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
