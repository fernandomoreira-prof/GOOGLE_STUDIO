import React, { useState } from 'react';
import { ScreenId, BookingState } from '../types';

interface ConfirmationScreenProps {
  onNavigate: (screen: ScreenId) => void;
  bookingState: BookingState;
  onOpenWalletModal: () => void;
  onOpenCalendarModal: () => void;
}

export const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({
  onNavigate,
  bookingState,
  onOpenWalletModal,
  onOpenCalendarModal,
}) => {
  const [isQrEnlarged, setIsQrEnlarged] = useState(false);

  return (
    <div className="flex flex-col space-y-4 pt-1 pb-16 px-5 relative">
      {/* Enlarged QR Code Modal for Fast Check-in */}
      {isQrEnlarged && (
        <div
          onClick={() => setIsQrEnlarged(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xs bg-white rounded-3xl p-6 text-center shadow-2xl border border-white"
          >
            <span className="text-xs font-bold text-[#006194] uppercase tracking-wider block mb-1">
              Totem Inteligente & Valet
            </span>
            <h3 className="font-bold text-base text-[#191c1e] mb-4">Apresente este QR Code</h3>
            <div className="p-3 bg-white rounded-2xl border-2 border-[#7df4ff] shadow-xl inline-block mb-3">
              <svg className="w-56 h-56 text-[#001d31] fill-current" viewBox="0 0 120 120">
                <rect x="10" y="10" width="30" height="30" rx="4" fill="#001d31"></rect>
                <rect x="16" y="16" width="18" height="18" rx="2" fill="#ffffff"></rect>
                <rect x="21" y="21" width="8" height="8" rx="1" fill="#007bb9"></rect>

                <rect x="80" y="10" width="30" height="30" rx="4" fill="#001d31"></rect>
                <rect x="86" y="16" width="18" height="18" rx="2" fill="#ffffff"></rect>
                <rect x="91" y="21" width="8" height="8" rx="1" fill="#007bb9"></rect>

                <rect x="10" y="80" width="30" height="30" rx="4" fill="#001d31"></rect>
                <rect x="16" y="86" width="18" height="18" rx="2" fill="#ffffff"></rect>
                <rect x="21" y="21" width="8" height="8" rx="1" fill="#007bb9"></rect>

                <rect x="48" y="12" width="6" height="6" fill="#001d31"></rect>
                <rect x="58" y="12" width="12" height="6" fill="#001d31"></rect>
                <rect x="48" y="24" width="12" height="6" fill="#001d31"></rect>
                <rect x="66" y="24" width="6" height="12" fill="#001d31"></rect>
                <rect x="12" y="48" width="6" height="12" fill="#001d31"></rect>
                <rect x="24" y="54" width="12" height="6" fill="#001d31"></rect>
                <rect x="42" y="42" width="12" height="12" fill="#007bb9"></rect>
                <rect x="60" y="42" width="6" height="6" fill="#001d31"></rect>
                <rect x="72" y="48" width="12" height="6" fill="#001d31"></rect>
                <rect x="90" y="48" width="18" height="6" fill="#001d31"></rect>
                <rect x="42" y="60" width="6" height="18" fill="#001d31"></rect>
                <rect x="54" y="66" width="18" height="6" fill="#007bb9"></rect>
                <rect x="78" y="60" width="6" height="12" fill="#001d31"></rect>
                <rect x="96" y="66" width="12" height="6" fill="#001d31"></rect>
                <rect x="48" y="84" width="12" height="6" fill="#001d31"></rect>
                <rect x="66" y="84" width="6" height="18" fill="#001d31"></rect>
                <rect x="78" y="90" width="12" height="6" fill="#001d31"></rect>
                <rect x="96" y="84" width="12" height="12" fill="#007bb9"></rect>
                <rect x="48" y="96" width="12" height="12" fill="#001d31"></rect>
                <rect x="84" y="102" width="6" height="6" fill="#001d31"></rect>
              </svg>
            </div>
            <p className="font-['JetBrains_Mono',monospace] text-xs font-semibold text-slate-600 mb-4">
              PASS • 8941 • 2024 • AURA
            </p>
            <button
              type="button"
              onClick={() => setIsQrEnlarged(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs"
            >
              Fechar QR Code
            </button>
          </div>
        </div>
      )}

      {/* Dismiss Button Navigation Row */}
      <div className="flex items-center justify-between pt-1">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-[11px] text-[#006194] font-semibold">VIP Concierge</span>
        </div>
        <button
          type="button"
          aria-label="Fechar confirmação"
          onClick={() => onNavigate('home')}
          className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-sm flex items-center justify-center text-[#191c1e] hover:bg-white active:scale-95 transition-all duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      {/* Luminous Celebration / Success Cluster */}
      <div className="flex flex-col items-center text-center mt-1 mb-2">
        <div className="relative flex items-center justify-center w-20 h-20 mb-3">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#006194] to-[#7df4ff]/50 blur-xl opacity-60"></div>
          <div className="relative w-16 h-16 rounded-full bg-white/85 backdrop-blur-2xl border border-white flex items-center justify-center neon-glow">
            <span
              className="material-symbols-outlined text-[34px] text-[#006194]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
        </div>
        <h1 className="text-[26px] font-bold text-[#191c1e] tracking-tight">
          Agendamento Confirmado!
        </h1>
        <p className="text-[15px] text-[#565e74] mt-1">
          Seu passe exclusivo já está sincronizado com a clínica.
        </p>
        <div className="mt-2.5 inline-flex items-center space-x-1.5 px-3 py-1 bg-white/60 backdrop-blur-md border border-white/80 rounded-full shadow-sm">
          <span className="text-[11px] text-[#565e74] uppercase tracking-wider font-medium">
            Protocolo
          </span>
          <span className="font-['JetBrains_Mono',monospace] text-[13px] text-[#006194] font-semibold">
            {bookingState.protocolNumber}
          </span>
        </div>
      </div>

      {/* BOARDING PASS MÉDICO / APPLE WALLET STYLE PASS */}
      <section className="relative w-full rounded-[28px] overflow-hidden ticket-shadow bg-white border border-white/90">
        {/* Pass Header: Noble Gradient (#0284C7 to #0F172A) */}
        <div className="relative bg-gradient-to-br from-[#0284C7] via-[#004f7c] to-[#0F172A] p-5 text-white overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#7df4ff]/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[#7df4ff] text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  spa
                </span>
              </div>
              <div>
                <span className="text-[17px] text-white font-semibold tracking-tight block">
                  Aura Health
                </span>
                <span className="text-[11px] text-[#7df4ff] font-medium">
                  Flagship Medical Pass
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-white/70 block uppercase tracking-wider">
                Acesso
              </span>
              <span className="text-[13px] font-semibold text-[#7df4ff] tracking-wide">
                Privé Diamond
              </span>
            </div>
          </div>

          {/* Doctor & Procedure Quick Banner */}
          <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-white/75 block">Especialista Responsável</span>
              <h2 className="text-[17px] text-white font-semibold tracking-tight">
                {bookingState.doctor.name}
              </h2>
              <p className="text-[11px] text-[#7df4ff]/90">{bookingState.doctor.title}</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#7df4ff]">
              <span className="material-symbols-outlined text-[22px]">verified</span>
            </div>
          </div>
        </div>

        {/* Ticket Body Details */}
        <div className="p-5 bg-white/95 backdrop-blur-xl space-y-4">
          {/* Row 1: Paciente e Procedimento */}
          <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-100">
            <div>
              <span className="text-[11px] text-[#565e74] uppercase tracking-wider block">
                Paciente
              </span>
              <span className="text-[15px] text-[#191c1e] font-semibold block mt-0.5">
                {bookingState.patientName}
              </span>
              <span className="text-[11px] text-[#006194]">
                ID Aura {bookingState.patientId}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-[#565e74] uppercase tracking-wider block">
                Procedimento
              </span>
              <span className="text-[15px] text-[#191c1e] font-semibold block mt-0.5 leading-snug">
                {bookingState.procedureName}
              </span>
              <span className="text-[11px] text-[#565e74]">+ Consulta Integrada</span>
            </div>
          </div>

          {/* Row 2: Data, Horário e Unidade */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <span className="text-[11px] text-[#565e74] uppercase tracking-wider block">
                Data & Horário
              </span>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <span className="material-symbols-outlined text-[#006194] text-[17px]">
                  calendar_today
                </span>
                <span className="text-[15px] text-[#191c1e] font-semibold">
                  {bookingState.dayNumber} Out, 2024
                </span>
              </div>
              <span className="text-[13px] font-semibold text-[#006194] block mt-0.5">
                Quinta-feira às {bookingState.timeSlot}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-[#565e74] uppercase tracking-wider block">
                Localização
              </span>
              <div className="flex items-start space-x-1.5 mt-0.5">
                <span className="material-symbols-outlined text-[#006194] text-[17px] mt-0.5">
                  location_on
                </span>
                <div>
                  <span className="text-[15px] text-[#191c1e] font-semibold block">
                    {bookingState.unit.name.split('-')[0].trim()}
                  </span>
                  <span className="text-[11px] text-[#565e74] block">Flagship • Sala 304</span>
                </div>
              </div>
            </div>
          </div>

          {/* Address Callout */}
          <div className="bg-slate-50/80 rounded-xl p-2.5 flex items-center justify-between border border-slate-200/50">
            <div className="flex items-center space-x-2 text-[#3f4850] text-xs">
              <span className="material-symbols-outlined text-[18px] text-[#006194]">
                directions_car
              </span>
              <span>{bookingState.unit.address} - Valet cortesia no local</span>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('map')}
              className="text-[#006194] text-[11px] font-semibold flex items-center hover:underline"
            >
              <span>Mapa</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* TICKET NOTCH & PERFORATED DIVIDER */}
        <div className="relative w-full h-7 flex items-center justify-center bg-white/95">
          <div className="ticket-cutout-left"></div>
          <div className="ticket-cutout-right"></div>
          <div className="w-[84%] border-b-2 border-dashed border-slate-300"></div>
        </div>

        {/* Ticket Footer / QR Code Area */}
        <div className="p-5 pt-2 bg-gradient-to-b from-white/95 to-slate-50 flex flex-col items-center text-center">
          <div className="mb-3 text-center">
            <span className="text-[11px] text-[#006194] font-semibold uppercase tracking-wider block">
              Fast Check-In Concierge
            </span>
            <p className="text-[11px] text-[#565e74]">
              Apresente este código no totem inteligente ou recepção
            </p>
          </div>

          {/* QR Code Frame with Neon Cyan Ring (Clickable to enlarge) */}
          <div
            onClick={() => setIsQrEnlarged(true)}
            className="p-3 bg-white rounded-2xl border-2 border-[#7df4ff] shadow-md relative group cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="absolute -inset-1 rounded-2xl bg-[#7df4ff]/30 blur-sm pointer-events-none"></div>
            <div className="relative w-36 h-36 bg-white flex flex-col items-center justify-center p-1">
              <svg className="w-full h-full text-[#001d31] fill-current" viewBox="0 0 120 120">
                <rect x="10" y="10" width="30" height="30" rx="4" fill="#001d31"></rect>
                <rect x="16" y="16" width="18" height="18" rx="2" fill="#ffffff"></rect>
                <rect x="21" y="21" width="8" height="8" rx="1" fill="#007bb9"></rect>

                <rect x="80" y="10" width="30" height="30" rx="4" fill="#001d31"></rect>
                <rect x="86" y="16" width="18" height="18" rx="2" fill="#ffffff"></rect>
                <rect x="91" y="21" width="8" height="8" rx="1" fill="#007bb9"></rect>

                <rect x="10" y="80" width="30" height="30" rx="4" fill="#001d31"></rect>
                <rect x="16" y="86" width="18" height="18" rx="2" fill="#ffffff"></rect>
                <rect x="21" y="21" width="8" height="8" rx="1" fill="#007bb9"></rect>

                <rect x="48" y="12" width="6" height="6" fill="#001d31"></rect>
                <rect x="58" y="12" width="12" height="6" fill="#001d31"></rect>
                <rect x="48" y="24" width="12" height="6" fill="#001d31"></rect>
                <rect x="66" y="24" width="6" height="12" fill="#001d31"></rect>
                <rect x="12" y="48" width="6" height="12" fill="#001d31"></rect>
                <rect x="24" y="54" width="12" height="6" fill="#001d31"></rect>
                <rect x="42" y="42" width="12" height="12" fill="#007bb9"></rect>
                <rect x="60" y="42" width="6" height="6" fill="#001d31"></rect>
                <rect x="72" y="48" width="12" height="6" fill="#001d31"></rect>
                <rect x="90" y="48" width="18" height="6" fill="#001d31"></rect>
                <rect x="42" y="60" width="6" height="18" fill="#001d31"></rect>
                <rect x="54" y="66" width="18" height="6" fill="#007bb9"></rect>
                <rect x="78" y="60" width="6" height="12" fill="#001d31"></rect>
                <rect x="96" y="66" width="12" height="6" fill="#001d31"></rect>
                <rect x="48" y="84" width="12" height="6" fill="#001d31"></rect>
                <rect x="66" y="84" width="6" height="18" fill="#001d31"></rect>
                <rect x="78" y="90" width="12" height="6" fill="#001d31"></rect>
                <rect x="96" y="84" width="12" height="12" fill="#007bb9"></rect>
                <rect x="48" y="96" width="12" height="12" fill="#001d31"></rect>
                <rect x="84" y="102" width="6" height="6" fill="#001d31"></rect>
              </svg>
            </div>
          </div>

          {/* Pass ID Number in Monospace */}
          <div className="mt-2.5 flex items-center space-x-2 text-[#565e74]">
            <span className="material-symbols-outlined text-[16px] text-[#00dbe9]">nfc</span>
            <span className="font-['JetBrains_Mono',monospace] text-[13px] font-medium tracking-wider">
              PASS • 8941 • 2024 • AURA
            </span>
          </div>
        </div>
      </section>

      {/* IOS ACTION BUTTONS STACK */}
      <div className="w-full mt-4 space-y-3">
        {/* Apple Wallet Button */}
        <button
          type="button"
          onClick={onOpenWalletModal}
          className="w-full h-[52px] rounded-[16px] bg-[#0F172A] text-white flex items-center justify-center space-x-2 shadow-md hover:bg-black active:scale-[0.98] transition-all duration-150 border border-white/10"
        >
          <svg className="w-5 h-5 fill-current text-white mb-0.5" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.85-11.93-14.42-6.53-10.12-11.53-21.43-15-33.94-3.48-12.51-5.22-24.15-5.22-34.92 0-14.25 3.59-26.06 10.77-35.43 7.18-9.37 16.32-14.15 27.42-14.34 4.8 0 10.34 1.32 16.63 3.96 6.28 2.64 10.23 4.02 11.83 4.14 1.83-.12 6.01-1.56 12.55-4.32 6.53-2.76 12.18-4.02 16.94-3.78 12.74.61 22.95 5.37 30.63 14.28-11.13 6.74-16.58 16.03-16.34 27.87.24 9.17 3.79 16.94 10.64 23.3 6.85 6.36 14.92 10.03 24.2 11-2.08 6.36-4.65 12.45-7.71 18.27zm-29.07-111.45c0 6.6-2.4 12.87-7.2 17.81-4.8 4.95-10.7 8.08-17.7 9.4-1.22-6.47.12-12.92 4.03-19.34 3.91-6.42 9.5-10.89 16.77-13.41 2.76 1.83 4.1 3.67 4.1 5.54z"></path>
          </svg>
          <span className="text-[15px] font-semibold tracking-tight">
            Adicionar à Apple Wallet
          </span>
        </button>

        {/* Secondary Calendar Button */}
        <button
          type="button"
          onClick={onOpenCalendarModal}
          className="w-full h-[50px] rounded-[16px] bg-white/70 backdrop-blur-xl border border-slate-200 text-[#006194] flex items-center justify-center space-x-2 shadow-sm hover:bg-white active:scale-[0.98] transition-all duration-150"
        >
          <span className="material-symbols-outlined text-[20px] text-[#006194]">
            event_available
          </span>
          <span className="text-[15px] font-semibold text-[#006194]">
            Adicionar ao Calendário do iPhone
          </span>
        </button>

        {/* Tertiary Return Link */}
        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center text-[#565e74] hover:text-[#006194] transition-colors py-2 px-4 rounded-full active:scale-95 duration-150 font-medium text-sm"
          >
            <span className="material-symbols-outlined text-[18px] mr-1">arrow_back</span>
            <span>Voltar ao Início</span>
          </button>
        </div>
      </div>
    </div>
  );
};
