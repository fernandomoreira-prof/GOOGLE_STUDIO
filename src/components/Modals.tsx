import React, { useState } from 'react';
import { ClinicUnit } from '../types';
import { CLINIC_UNITS, PATIENT_SOFIA } from '../data/mockData';

interface ModalsProps {
  // Unit selector
  showUnitSelector: boolean;
  onCloseUnitSelector: () => void;
  selectedUnit: ClinicUnit;
  onSelectUnit: (unit: ClinicUnit) => void;

  // Unit photos gallery
  showUnitPhotos: boolean;
  onCloseUnitPhotos: () => void;

  // Concierge call
  showConciergeCall: boolean;
  onCloseConciergeCall: () => void;

  // Checkup details
  showCheckupDetails: boolean;
  onCloseCheckupDetails: () => void;
  onScheduleCheckup: () => void;

  // Apple wallet added
  showWalletModal: boolean;
  onCloseWalletModal: () => void;

  // Calendar added
  showCalendarModal: boolean;
  onCloseCalendarModal: () => void;

  // Notifications
  showNotifications: boolean;
  onCloseNotifications: () => void;

  // Consultas list
  showConsultasModal: boolean;
  onCloseConsultasModal: () => void;
  onSelectConsultaDetail: () => void;

  // Perfil Sofia
  showPerfilModal: boolean;
  onClosePerfilModal: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  showUnitSelector,
  onCloseUnitSelector,
  selectedUnit,
  onSelectUnit,
  showUnitPhotos,
  onCloseUnitPhotos,
  showConciergeCall,
  onCloseConciergeCall,
  showCheckupDetails,
  onCloseCheckupDetails,
  onScheduleCheckup,
  showWalletModal,
  onCloseWalletModal,
  showCalendarModal,
  onCloseCalendarModal,
  showNotifications,
  onCloseNotifications,
  showConsultasModal,
  onCloseConsultasModal,
  onSelectConsultaDetail,
  showPerfilModal,
  onClosePerfilModal,
}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isCalling, setIsCalling] = useState(true);

  return (
    <>
      {/* 1. UNIT SELECTOR MODAL */}
      {showUnitSelector && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-t-[32px] sm:rounded-[28px] p-6 shadow-2xl border border-white/90 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-[#006194] uppercase">
                  Rede de Atendimento
                </span>
                <h3 className="text-[19px] font-bold text-[#191c1e]">Selecione a Unidade</h3>
              </div>
              <button
                type="button"
                onClick={onCloseUnitSelector}
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {CLINIC_UNITS.map((unit) => {
                const isSelected = unit.id === selectedUnit.id;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => {
                      onSelectUnit(unit);
                      onCloseUnitSelector();
                    }}
                    className={`w-full p-4 rounded-2xl text-left border transition-all ${
                      isSelected
                        ? 'border-[#006194] bg-[#f0f9ff] ring-2 ring-[#006194]/20'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-[15px] text-[#191c1e]">{unit.name}</h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#cce5ff] text-[#001d31]">
                            {unit.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#565e74] mt-1">{unit.address}</p>
                      </div>
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          isSelected ? 'text-[#006194]' : 'text-slate-300'
                        }`}
                        style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-[#565e74]">
                      <span className="flex items-center gap-1 font-medium text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {unit.distanceTime} ({unit.trafficStatus})
                      </span>
                      <span>{unit.hours}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 2. UNIT PHOTOS GALLERY MODAL */}
      {showUnitPhotos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="w-full max-w-lg bg-[#191c1e] rounded-[28px] overflow-hidden text-white shadow-2xl border border-white/20">
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <div>
                <h3 className="font-bold text-[16px] text-white">Unidade Jardins - Flagship</h3>
                <p className="text-xs text-white/70">Ambientes de Atendimento VIP & Lounges</p>
              </div>
              <button
                type="button"
                onClick={onCloseUnitPhotos}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={selectedUnit.photos[photoIndex]?.url || selectedUnit.photos[0].url}
                alt={selectedUnit.photos[photoIndex]?.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-sm font-medium text-white">
                  {selectedUnit.photos[photoIndex]?.caption}
                </p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <span className="text-xs text-white/60 font-mono">
                {photoIndex + 1} de {selectedUnit.photos.length} fotos
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={photoIndex === 0}
                  onClick={() => setPhotoIndex((p) => Math.max(0, p - 1))}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-semibold"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  disabled={photoIndex === selectedUnit.photos.length - 1}
                  onClick={() => setPhotoIndex((p) => Math.min(selectedUnit.photos.length - 1, p + 1))}
                  className="px-3 py-1.5 rounded-xl bg-[#007bb9] hover:bg-[#006194] disabled:opacity-30 text-xs font-semibold"
                >
                  Próxima
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. CONCIERGE DIRECT CALL MODAL */}
      {showConciergeCall && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-fadeIn">
          <div className="w-full max-w-sm rounded-[32px] bg-gradient-to-b from-[#0F172A] to-[#022135] p-6 text-white text-center shadow-2xl border border-white/20 relative overflow-hidden">
            <div className="w-20 h-20 rounded-full mx-auto p-1 bg-gradient-to-tr from-[#00F0FF] to-[#0284C7] shadow-[0_0_24px_rgba(0,240,255,0.4)] mb-4">
              <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px] text-[#7df4ff] animate-pulse">
                  support_agent
                </span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#7df4ff]/20 text-[#7df4ff] text-[11px] font-bold uppercase tracking-wider inline-block mb-2">
              Linha Exclusiva VIP 24/7
            </span>
            <h3 className="text-xl font-bold">Concierge Aura Health</h3>
            <p className="text-xs text-white/70 mt-1">Conectando você a um enfermeiro concierge...</p>

            {/* Simulated Live Audio Waves */}
            <div className="flex items-center justify-center gap-1.5 my-6 h-8">
              {[40, 75, 95, 60, 85, 30, 90, 65, 45].map((h, i) => (
                <span
                  key={i}
                  className="w-1 bg-[#7df4ff] rounded-full animate-pulse"
                  style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
                ></span>
              ))}
            </div>

            <p className="text-xs text-white/80 font-mono mb-6">
              Protocolo de Atendimento Prioritário Ativo
            </p>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={onCloseConciergeCall}
                className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white shadow-lg active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[26px]">call_end</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. CHECK-UP ANUAL DETAILS MODAL */}
      {showCheckupDetails && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-t-[32px] sm:rounded-[28px] p-6 shadow-2xl border border-white/90 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7df4ff] shadow-[0_0_8px_#7df4ff]"></span>
                <span className="text-xs font-bold text-[#006194] uppercase tracking-wider">
                  Concierge Preventivo 2025
                </span>
              </div>
              <button
                type="button"
                onClick={onCloseCheckupDetails}
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-[#191c1e]">Check-up Anual Pré-agendado</h3>
              <p className="text-sm text-[#565e74] mt-1">
                Sua bateria de exames de prevenção primária de alta acurácia está autorizada para
                agendamento no seu dia de preferência.
              </p>

              <div className="mt-5 space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#f0f9ff] border border-[#cce5ff] flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#006194] text-[22px] mt-0.5">
                    radiology
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">
                      1. Ressonância Craniana 3.0 Tesla
                    </h4>
                    <p className="text-xs text-[#565e74]">
                      Mapeamento anatômico neurovascular com supressão de ruído acústico.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#f0f9ff] border border-[#cce5ff] flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#006194] text-[22px] mt-0.5">
                    biotech
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">
                      2. Perfil Lipídico Avançado & Biomarcadores
                    </h4>
                    <p className="text-xs text-[#565e74]">
                      ApoB, PCR-us, Homocisteína e dosagem hormonal completa em jejum de 8h.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#f0f9ff] border border-[#cce5ff] flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#006194] text-[22px] mt-0.5">
                    photo_camera
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">
                      3. Mapeamento Corporal Dermatológico Digital
                    </h4>
                    <p className="text-xs text-[#565e74]">
                      Varredura 3D de nevos por inteligência clínica na Unidade Jardins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onCloseCheckupDetails();
                    onScheduleCheckup();
                  }}
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-[#006194] to-[#007bb9] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                >
                  <span>Agendar Check-up Agora</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. APPLE WALLET MODAL */}
      {showWalletModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-sm bg-black rounded-[28px] p-6 text-white text-center shadow-2xl border border-white/20">
            <div className="w-14 h-14 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-4">
              <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.85-11.93-14.42-6.53-10.12-11.53-21.43-15-33.94-3.48-12.51-5.22-24.15-5.22-34.92 0-14.25 3.59-26.06 10.77-35.43 7.18-9.37 16.32-14.15 27.42-14.34 4.8 0 10.34 1.32 16.63 3.96 6.28 2.64 10.23 4.02 11.83 4.14 1.83-.12 6.01-1.56 12.55-4.32 6.53-2.76 12.18-4.02 16.94-3.78 12.74.61 22.95 5.37 30.63 14.28-11.13 6.74-16.58 16.03-16.34 27.87.24 9.17 3.79 16.94 10.64 23.3 6.85 6.36 14.92 10.03 24.2 11-2.08 6.36-4.65 12.45-7.71 18.27zm-29.07-111.45c0 6.6-2.4 12.87-7.2 17.81-4.8 4.95-10.7 8.08-17.7 9.4-1.22-6.47.12-12.92 4.03-19.34 3.91-6.42 9.5-10.89 16.77-13.41 2.76 1.83 4.1 3.67 4.1 5.54z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Adicionado à Apple Wallet!</h3>
            <p className="text-xs text-white/70 mt-1">
              Seu Flagship Medical Pass foi sincronizado com seu iPhone e Apple Watch. O QR Code e
              o valet estarão disponíveis na tela de bloqueio ao se aproximar da unidade.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-white/10 text-xs font-mono text-[#7df4ff]">
              PASS • 8941 • 2024 • AURA
            </div>
            <button
              type="button"
              onClick={onCloseWalletModal}
              className="mt-5 w-full h-11 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-100"
            >
              Concluído
            </button>
          </div>
        </div>
      )}

      {/* 6. CALENDAR ADDED MODAL */}
      {showCalendarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-[28px] p-6 text-center shadow-2xl border border-white">
            <div className="w-12 h-12 rounded-full bg-[#cce5ff] text-[#006194] mx-auto flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[28px]">event_available</span>
            </div>
            <h3 className="text-lg font-bold text-[#191c1e]">Evento Adicionado ao Calendário</h3>
            <p className="text-xs text-[#565e74] mt-1">
              "Consulta Dermatologia - Dra. Camila Fontes" foi agendada para 24 de Outubro às 10:00
              com alerta de saída com trânsito em tempo real.
            </p>
            <button
              type="button"
              onClick={onCloseCalendarModal}
              className="mt-5 w-full h-11 rounded-xl bg-[#006194] text-white font-semibold text-sm hover:bg-[#007bb9]"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* 7. NOTIFICATIONS DRAWER */}
      {showNotifications && (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/40 backdrop-blur-sm p-3 animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-[28px] p-5 shadow-2xl border border-slate-100 mt-12">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#006194] text-[20px]">notifications</span>
                <h3 className="font-bold text-[16px] text-[#191c1e]">Notificações VIP</h3>
              </div>
              <button
                type="button"
                onClick={onCloseNotifications}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <div className="mt-3 space-y-2.5">
              <div className="p-3 rounded-2xl bg-[#f0f9ff] border border-[#cce5ff]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#006194]">Check-up Anual</span>
                  <span className="text-[10px] text-slate-400">Hoje 08:30</span>
                </div>
                <p className="text-xs text-slate-700 mt-1">
                  Sua bateria preventiva de exames está pronta para agendamento com o Concierge.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-800">Lembrete de Consulta</span>
                  <span className="text-[10px] text-slate-400">Ontem</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Consulta confirmada com Dr. Marcelo Guimarães para amanhã às 14:30 na Sala 402.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. CONSULTAS LIST MODAL */}
      {showConsultasModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-t-[32px] sm:rounded-[28px] p-6 shadow-2xl border border-white max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-[#006194] uppercase">
                  Minha Agenda VIP
                </span>
                <h3 className="text-[19px] font-bold text-[#191c1e]">Consultas & Passes</h3>
              </div>
              <button
                type="button"
                onClick={onCloseConsultasModal}
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {/* Consulta 1 */}
              <div
                onClick={() => {
                  onCloseConsultasModal();
                  onSelectConsultaDetail();
                }}
                className="p-4 rounded-2xl bg-gradient-to-br from-[#f0f9ff] to-white border border-[#cce5ff] cursor-pointer hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded-full bg-[#7df4ff]/30 text-[#00666d] text-[10px] font-bold">
                      Confirmada • Passe Ativo
                    </span>
                    <h4 className="font-bold text-[15px] text-[#191c1e] mt-1.5">
                      Dra. Camila Fontes
                    </h4>
                    <p className="text-xs text-[#565e74]">
                      Limpeza de Pele Profunda & Consulta Integrada
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#006194] block">24 Outubro</span>
                    <span className="text-xs font-semibold text-slate-600 block">10:00</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#006194] font-semibold">
                  <span>Ver Boarding Pass & QR</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>

              {/* Consulta 2 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      Amanhã
                    </span>
                    <h4 className="font-bold text-[15px] text-[#191c1e] mt-1.5">
                      Dr. Marcelo Guimarães
                    </h4>
                    <p className="text-xs text-[#565e74]">
                      Cardiologia Intervencionista • Sala 402
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-800 block">Amanhã</span>
                    <span className="text-xs font-semibold text-slate-600 block">14:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. PERFIL SOFIA MODAL */}
      {showPerfilModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-t-[32px] sm:rounded-[28px] p-6 shadow-2xl border border-white">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-[19px] font-bold text-[#191c1e]">Perfil Concierge</h3>
              <button
                type="button"
                onClick={onClosePerfilModal}
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <img
                src={PATIENT_SOFIA.avatar}
                alt={PATIENT_SOFIA.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-[#006194]"
              />
              <div>
                <h4 className="font-bold text-lg text-[#191c1e]">{PATIENT_SOFIA.name}</h4>
                <p className="text-xs text-[#006194] font-semibold">{PATIENT_SOFIA.tier}</p>
                <p className="text-xs text-slate-400 font-mono">ID {PATIENT_SOFIA.id}</p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 flex justify-between items-center">
                <span className="text-slate-500">Plano de Saúde & Cobertura</span>
                <span className="font-semibold text-slate-800">Bradesco Saúde Top National Plus</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 flex justify-between items-center">
                <span className="text-slate-500">Tipo Sanguíneo & Biometria</span>
                <span className="font-semibold text-slate-800">O+ • Validação Facial Ativa</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 flex justify-between items-center">
                <span className="text-slate-500">Unidade de Referência</span>
                <span className="font-semibold text-[#006194]">Jardins Flagship</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
