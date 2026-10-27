import React, { useState } from 'react';
import { ScreenId, Doctor, ClinicUnit, BookingState } from '../types';
import { DOCTORS, CLINIC_UNITS } from '../data/mockData';

interface ScheduleScreenProps {
  onNavigate: (screen: ScreenId) => void;
  doctor: Doctor;
  unit: ClinicUnit;
  onOpenUnitSelector: () => void;
  bookingState: BookingState;
  onUpdateBooking: (partial: Partial<BookingState>) => void;
  onConfirmSchedule: () => void;
}

export const ScheduleScreen: React.FC<ScheduleScreenProps> = ({
  onNavigate,
  doctor = DOCTORS[0],
  unit = CLINIC_UNITS[0],
  onOpenUnitSelector,
  bookingState,
  onUpdateBooking,
  onConfirmSchedule,
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(bookingState.dayNumber || 24);
  const [selectedSlot, setSelectedSlot] = useState<string>(bookingState.timeSlot || '10:00');
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Available days in October 2024
  const availableDays = [17, 21, 22, 23, 24, 25, 28, 29, 30, 31];

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
    const dayNames = ['Quinta-feira', 'Sexta-feira', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira'];
    const dayName = day === 24 ? 'Quinta-feira' : day === 25 ? 'Sexta-feira' : day === 28 ? 'Segunda-feira' : 'Quarta-feira';
    const dateFormatted = `${day} de Outubro, ${dayName}`;
    onUpdateBooking({
      dayNumber: day,
      date: dateFormatted,
    });
  };

  const handleSelectSlot = (slot: string, period: 'morning' | 'afternoon' | 'night') => {
    setSelectedSlot(slot);
    onUpdateBooking({
      timeSlot: slot,
      timePeriod: period,
    });
  };

  return (
    <div className="flex flex-col space-y-5 pt-1 pb-36 relative">
      {/* Informative Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[#006194]">info</span>
              <h3 className="font-bold text-lg text-[#191c1e]">Regras de Agendamento</h3>
            </div>
            <p className="text-xs text-[#565e74] leading-relaxed">
              Consultas com especialistas titulares incluem recepção com concierge privativo, café
              gourmet no lounge VIP e triagem biométrica avançada sem filas de espera.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              Cancelamento ou reagendamento flexível com antecedência mínima de 24 horas.
            </div>
            <button
              type="button"
              onClick={() => setShowInfoModal(false)}
              className="mt-5 w-full h-11 rounded-xl bg-[#006194] text-white font-semibold text-xs"
            >
              Compreendi
            </button>
          </div>
        </div>
      )}

      {/* Navigation Bar with Step Indicator */}
      <div className="px-5 pt-2 flex items-center justify-between">
        <button
          type="button"
          aria-label="Voltar"
          onClick={() => onNavigate('doctor')}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#006194] active:scale-95 transition-transform duration-150"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
        </button>

        <div className="flex flex-col items-center">
          <h1 className="text-[17px] text-[#191c1e] font-semibold tracking-tight">
            Agendar Consulta
          </h1>
          <div className="flex items-center space-x-1.5 mt-0.5">
            <span className="text-[11px] text-[#006194] font-semibold">Etapa 2</span>
            <span className="text-[11px] text-[#707881]">de 3</span>
            <div className="flex space-x-1 ml-1">
              <span className="w-3 h-1 bg-[#006194] rounded-full"></span>
              <span className="w-4 h-1 bg-[#007bb9] rounded-full neon-pulse-dot"></span>
              <span className="w-1.5 h-1 bg-[#bfc7d2]/60 rounded-full"></span>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Informações"
          onClick={() => setShowInfoModal(true)}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#565e74] active:scale-95 transition-transform duration-150"
        >
          <span className="material-symbols-outlined text-[20px]">info</span>
        </button>
      </div>

      {/* Main Content Container */}
      <div className="px-5 space-y-5">
        {/* Resumo do Especialista: Compact High-End Glass Card */}
        <section className="glass-card rounded-[22px] p-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-14 h-14 rounded-2xl p-0.5 bg-gradient-to-tr from-[#006194] to-[#7df4ff] flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-[14px]"
                src={doctor.avatar}
                alt={doctor.name}
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#7df4ff] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#00666d] rounded-full"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-[17px] text-[#191c1e] font-semibold">{doctor.name}</h2>
                <span className="px-2 py-0.5 rounded-full bg-[#dae2fd]/50 text-[10px] text-[#006194] font-bold">
                  CRM {doctor.crm}
                </span>
              </div>
              <p className="text-[13px] text-[#565e74]">{doctor.title}</p>
              <div className="flex items-center space-x-1 mt-0.5">
                <span
                  className="material-symbols-outlined text-[14px] text-[#006194]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-[11px] text-[#191c1e] font-semibold">{doctor.rating}</span>
                <span className="text-[#707881] text-[11px]">• 128 avaliações concierge</span>
              </div>
            </div>
          </div>

          <div className="pl-2 border-l border-slate-200/60 flex flex-col items-end">
            <span className="text-[10px] text-[#565e74] font-medium">Honorários</span>
            <span className="text-[17px] text-[#006194] font-bold">R$ {bookingState.price}</span>
          </div>
        </section>

        {/* Dropdown Seletor de Unidade */}
        <section>
          <label className="block text-[11px] text-[#565e74] font-semibold uppercase tracking-wider mb-2 ml-1">
            Local de Atendimento Concierge
          </label>
          <div
            onClick={onOpenUnitSelector}
            className="glass-card-interactive rounded-[20px] p-3.5 flex items-center justify-between cursor-pointer border border-white/90 hover:border-[#006194]/40"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#cce5ff] to-[#dae2fd] flex items-center justify-center text-[#006194] shadow-sm">
                <span className="material-symbols-outlined text-[22px]">location_on</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[15px] font-semibold text-[#191c1e]">{unit.name}</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#7df4ff]/30 text-[10px] text-[#00666d] font-bold tracking-wide">
                    {unit.subtitle}
                  </span>
                </div>
                <p className="text-[13px] text-[#565e74]">{unit.address}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-[#006194]">
              <span className="text-[11px] font-semibold">Trocar</span>
              <span className="material-symbols-outlined text-[18px]">unfold_more</span>
            </div>
          </div>
        </section>

        {/* Calendário Mensal Interativo: Outubro 2024 */}
        <section className="glass-card rounded-[26px] p-4 pt-4.5">
          <div className="flex items-center justify-between mb-3 px-1">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[20px] text-[#191c1e] font-bold tracking-tight">
                  Outubro 2024
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#006194]/10 text-[#006194] font-semibold">
                  Disponível
                </span>
              </div>
              <p className="text-[11px] text-[#565e74] mt-0.5">
                Selecione o melhor dia para sua consulta
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <button
                type="button"
                aria-label="Mês Anterior"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#565e74] hover:bg-slate-100 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button
                type="button"
                aria-label="Próximo Mês"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#191c1e] hover:bg-slate-100 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            <span className="text-[11px] text-[#707881] font-semibold">D</span>
            <span className="text-[11px] text-[#707881] font-semibold">S</span>
            <span className="text-[11px] text-[#707881] font-semibold">T</span>
            <span className="text-[11px] text-[#707881] font-semibold">Q</span>
            <span className="text-[11px] text-[#006194] font-bold">Q</span>
            <span className="text-[11px] text-[#707881] font-semibold">S</span>
            <span className="text-[11px] text-[#707881] font-semibold">S</span>
          </div>

          {/* Month Calendar Grid */}
          <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center items-center">
            {/* Trailing dates from prev month */}
            <div className="h-10 flex flex-col items-center justify-center text-[#bfc7d2]/50 text-[13px]">
              29
            </div>
            <div className="h-10 flex flex-col items-center justify-center text-[#bfc7d2]/50 text-[13px]">
              30
            </div>
            {/* Week 1: 1 to 5 */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((day) => (
              <div
                key={day}
                className="h-10 flex flex-col items-center justify-center text-[#bfc7d2] text-[13px]"
              >
                {day}
              </div>
            ))}

            {/* 17: Available Date */}
            <button
              type="button"
              onClick={() => handleSelectDay(17)}
              className={`h-10 w-10 mx-auto rounded-full font-semibold text-[13px] flex flex-col items-center justify-center relative transition-colors ${
                selectedDay === 17
                  ? 'bg-gradient-to-br from-[#007bb9] to-[#006194] text-white neon-halo-cyan'
                  : 'bg-[#cce5ff]/40 hover:bg-[#cce5ff] text-[#006194]'
              }`}
            >
              17
              <span className="w-1 h-1 bg-[#006194] rounded-full mt-0.5"></span>
            </button>

            <div className="h-10 flex flex-col items-center justify-center text-[#bfc7d2] text-[13px]">
              18
            </div>
            <div className="h-10 flex flex-col items-center justify-center text-[#bfc7d2]/60 text-[13px]">
              19
            </div>
            <div className="h-10 flex flex-col items-center justify-center text-[#bfc7d2]/60 text-[13px]">
              20
            </div>

            {/* Days 21, 22, 23, 24, 25 */}
            {[21, 22, 23, 24, 25].map((day) => {
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  className={`h-10 w-10 mx-auto rounded-full font-semibold text-[13px] flex flex-col items-center justify-center relative transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#007bb9] to-[#006194] text-white font-bold text-[15px] neon-halo-cyan transform scale-105'
                      : 'bg-[#cce5ff]/40 text-[#006194] hover:bg-[#cce5ff]'
                  }`}
                >
                  {day}
                  <span
                    className={`w-1 h-1 rounded-full mt-0.5 ${
                      isSelected ? 'bg-[#7df4ff]' : 'bg-[#006194]'
                    }`}
                  ></span>
                </button>
              );
            })}

            <div className="h-10 flex flex-col items-center justify-center text-[#bfc7d2]/60 text-[13px]">
              26
            </div>
            <div className="h-10 flex flex-col items-center justify-center text-[#bfc7d2]/60 text-[13px]">
              27
            </div>

            {/* Days 28, 29, 30, 31 */}
            {[28, 29, 30, 31].map((day) => {
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  className={`h-10 w-10 mx-auto rounded-full font-semibold text-[13px] flex flex-col items-center justify-center relative transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#007bb9] to-[#006194] text-white font-bold neon-halo-cyan'
                      : 'bg-[#cce5ff]/40 text-[#006194] hover:bg-[#cce5ff]'
                  }`}
                >
                  {day}
                  <span
                    className={`w-1 h-1 rounded-full mt-0.5 ${
                      isSelected ? 'bg-[#7df4ff]' : 'bg-[#006194]'
                    }`}
                  ></span>
                </button>
              );
            })}

            <div className="h-10 flex flex-col items-center justify-center text-[#bfc7d2]/40 text-[13px]">
              1
            </div>
            <div className="h-10 flex flex-col items-center justify-center text-[#bfc7d2]/40 text-[13px]">
              2
            </div>
          </div>

          {/* Selected Date Banner Ribbon */}
          <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[#565e74]">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-[18px] text-[#006194]">
                event_available
              </span>
              <span className="text-[13px] text-[#191c1e] font-medium">
                Data selecionada:{' '}
                <strong className="text-[#006194] font-semibold">{bookingState.date}</strong>
              </span>
            </div>
            {selectedDay === 24 && (
              <span className="px-2 py-0.5 rounded-full bg-[#7df4ff]/30 text-[#00666d] text-[10px] font-bold">
                Hoje
              </span>
            )}
          </div>
        </section>

        {/* Seletor de Horários Segmentado */}
        <section className="space-y-3.5">
          <div className="flex items-center justify-between ml-1">
            <label className="text-[11px] text-[#565e74] font-semibold uppercase tracking-wider">
              Horários Disponíveis na {unit.name.split('-')[0]}
            </label>
            <span className="text-[11px] text-[#00666d] font-semibold flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#7df4ff] neon-pulse-dot mr-1"></span>
              Fuso Horário Brasília
            </span>
          </div>

          {/* Manhã */}
          <div className="glass-card rounded-[20px] p-3.5 space-y-2.5">
            <div className="flex items-center space-x-2 text-[#565e74]">
              <span className="material-symbols-outlined text-[19px] text-[#006194]">wb_sunny</span>
              <span className="text-[14px] text-[#191c1e] font-semibold">Manhã</span>
              <span className="text-[#707881] text-[11px]">(3 horários)</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleSelectSlot('09:00', 'morning')}
                className={`h-11 rounded-[14px] flex flex-col items-center justify-center font-semibold text-[14px] transition-all ${
                  selectedSlot === '09:00'
                    ? 'bg-gradient-to-br from-[#007bb9] to-[#006194] text-white neon-halo-cyan'
                    : 'glass-card-interactive text-[#191c1e] hover:text-[#006194]'
                }`}
              >
                09:00
                <span
                  className={`text-[9px] ${
                    selectedSlot === '09:00' ? 'text-[#7df4ff]' : 'text-[#565e74]'
                  }`}
                >
                  {selectedSlot === '09:00' ? 'Selecionado' : 'Normal'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectSlot('10:00', 'morning')}
                className={`h-11 rounded-[14px] flex flex-col items-center justify-center font-semibold text-[14px] transition-all ${
                  selectedSlot === '10:00'
                    ? 'bg-gradient-to-br from-[#007bb9] to-[#006194] text-white neon-halo-cyan'
                    : 'glass-card-interactive text-[#191c1e] hover:text-[#006194]'
                }`}
              >
                10:00
                <span
                  className={`text-[9px] ${
                    selectedSlot === '10:00' ? 'text-[#7df4ff]' : 'text-[#565e74]'
                  }`}
                >
                  {selectedSlot === '10:00' ? 'Selecionado' : 'Normal'}
                </span>
              </button>

              <button
                type="button"
                disabled
                className="h-11 rounded-[14px] bg-slate-100 text-slate-400 text-[14px] flex flex-col items-center justify-center line-through cursor-not-allowed border border-transparent opacity-60"
              >
                11:30
                <span className="text-[9px] text-slate-400 no-underline font-normal">Ocupado</span>
              </button>
            </div>
          </div>

          {/* Tarde */}
          <div className="glass-card rounded-[20px] p-3.5 space-y-2.5">
            <div className="flex items-center space-x-2 text-[#565e74]">
              <span className="material-symbols-outlined text-[19px] text-[#006194]">
                wb_twilight
              </span>
              <span className="text-[14px] text-[#191c1e] font-semibold">Tarde</span>
              <span className="text-[#707881] text-[11px]">(4 horários)</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['14:00', '15:30', '16:45', '17:30'].map((slot) => {
                const isSelected = selectedSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => handleSelectSlot(slot, 'afternoon')}
                    className={`h-11 rounded-[14px] flex flex-col items-center justify-center font-semibold text-[13px] transition-all ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#007bb9] to-[#006194] text-white neon-halo-cyan'
                        : 'glass-card-interactive text-[#191c1e] hover:text-[#006194]'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Noite */}
          <div className="glass-card rounded-[20px] p-3.5 space-y-2.5">
            <div className="flex items-center space-x-2 text-[#565e74]">
              <span className="material-symbols-outlined text-[19px] text-[#006194]">
                nights_stay
              </span>
              <span className="text-[14px] text-[#191c1e] font-semibold">Noite</span>
              <span className="text-[#707881] text-[11px]">(Horários Exclusivos)</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleSelectSlot('18:15', 'night')}
                className={`h-11 rounded-[14px] flex items-center justify-center space-x-1.5 font-semibold text-[14px] transition-all ${
                  selectedSlot === '18:15'
                    ? 'bg-gradient-to-br from-[#007bb9] to-[#006194] text-white neon-halo-cyan'
                    : 'glass-card-interactive text-[#191c1e] hover:text-[#006194]'
                }`}
              >
                <span>18:15</span>
                <span
                  className={`text-[10px] font-normal ${
                    selectedSlot === '18:15' ? 'text-[#7df4ff]' : 'text-[#565e74]'
                  }`}
                >
                  Executivo
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectSlot('19:00', 'night')}
                className={`h-11 rounded-[14px] flex items-center justify-center space-x-2 transition-all ${
                  selectedSlot === '19:00'
                    ? 'bg-gradient-to-br from-[#007bb9] to-[#006194] text-white neon-halo-cyan'
                    : 'glass-card-interactive text-[#191c1e] bg-gradient-to-r from-white to-[#dae2fd]/30'
                }`}
              >
                <span className="font-semibold text-[14px]">19:00</span>
                <span className="px-2 py-0.5 rounded-full bg-[#191c1e] text-white text-[9px] font-bold tracking-wider flex items-center">
                  <span
                    className="material-symbols-outlined text-[10px] text-[#7df4ff] mr-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  VIP
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Caixa de Aviso Informativo */}
        <section className="glass-card rounded-[18px] p-3.5 border-l-4 border-l-[#006194] flex items-start space-x-3 bg-gradient-to-r from-[#cce5ff]/20 to-white/70">
          <span className="material-symbols-outlined text-[#006194] text-[22px] mt-0.5">
            schedule
          </span>
          <div className="space-y-0.5">
            <p className="text-[13px] text-[#191c1e] font-semibold">Protocolo de Pontualidade</p>
            <p className="text-[11px] text-[#565e74] leading-relaxed">
              Tempo estimado de consulta: <strong className="text-[#191c1e]">50 minutos</strong>.
              Chegar com <strong className="text-[#191c1e]">10 min de antecedência</strong> para café
              de boas-vindas e triagem biométrica privada.
            </p>
          </div>
        </section>
      </div>

      {/* Rodapé Fixo Elevado com Botão Pill */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto bg-white/85 backdrop-blur-2xl px-5 pt-3.5 pb-6 shadow-[0_-10px_35px_-5px_rgba(0,97,148,0.08)]">
        <button
          type="button"
          onClick={onConfirmSchedule}
          className="w-full h-[54px] rounded-full bg-gradient-to-r from-[#007bb9] via-[#006194] to-[#00666d] text-white text-[17px] font-semibold flex items-center justify-between px-6 shadow-lg shadow-[#006194]/25 active:scale-[0.985] transition-all duration-150 neon-halo-cyan"
        >
          <span className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[20px] text-[#7df4ff]">
              event_available
            </span>
            <span className="tracking-tight text-sm sm:text-base">Continuar para Confirmação</span>
          </span>
          <div className="flex items-center space-x-1 bg-white/20 rounded-full px-2.5 py-1">
            <span className="text-[12px] font-bold">
              {selectedDay} Out • {selectedSlot.replace(':00', 'h')}
            </span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </div>
        </button>
        <div className="w-36 h-1.5 bg-[#191c1e]/20 rounded-full mx-auto mt-3"></div>
      </footer>
    </div>
  );
};
