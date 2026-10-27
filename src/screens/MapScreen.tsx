import React, { useState } from 'react';
import { ScreenId, ClinicUnit } from '../types';
import { CLINIC_UNITS } from '../data/mockData';

interface MapScreenProps {
  onNavigate: (screen: ScreenId) => void;
  selectedUnit: ClinicUnit;
  onSelectUnit: (unit: ClinicUnit) => void;
  onOpenConciergeCall: () => void;
  onOpenUnitPhotos: () => void;
}

export const MapScreen: React.FC<MapScreenProps> = ({
  onNavigate,
  selectedUnit,
  onSelectUnit,
  onOpenConciergeCall,
  onOpenUnitPhotos,
}) => {
  const [searchQuery, setSearchQuery] = useState('Jardins');
  const [isNavigatingLive, setIsNavigatingLive] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleStartRoute = () => {
    setIsNavigatingLive(true);
    showToast('Iniciando rota em tempo real via Waze/Apple Maps: 12 min até Jardins Flagship');
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#191c1e]/90 text-white text-xs font-semibold backdrop-blur-md shadow-xl flex items-center gap-1.5 animate-fadeIn max-w-[90%] text-center">
          <span className="material-symbols-outlined text-[16px] text-[#7df4ff]">navigation</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Top Bar with Search & Unit Pills */}
      <div className="relative z-30 pt-2 px-5 space-y-2.5">
        {/* Search Bar Row */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Voltar"
            onClick={() => onNavigate('home')}
            className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-sm flex items-center justify-center text-[#006194] active:scale-95 transition-transform shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
          </button>

          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#707881] text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar unidade..."
              className="w-full h-11 pl-11 pr-10 rounded-full bg-white/95 backdrop-blur-xl border border-slate-200 text-[#191c1e] text-[15px] shadow-md focus:outline-none focus:ring-2 focus:ring-[#006194]"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#006194]"
            >
              <span className="material-symbols-outlined text-[18px]">tune</span>
            </button>
          </div>
        </div>

        {/* Unit Selector Chips Horizontal */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {CLINIC_UNITS.map((u) => {
            const isSelected = selectedUnit.id === u.id;
            return (
              <button
                key={u.id}
                type="button"
                onClick={() => {
                  onSelectUnit(u);
                  setSearchQuery(u.name.split('-')[0].replace('Unidade', '').trim());
                }}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 active:scale-95 shadow-sm ${
                  isSelected
                    ? 'bg-[#006194] text-white shadow-[#006194]/25 ring-2 ring-[#7df4ff]/50'
                    : 'bg-white/90 text-[#3f4850] hover:bg-white border border-slate-200'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-[#7df4ff] shadow-[0_0_6px_#7df4ff]' : 'bg-slate-300'
                  }`}
                ></span>
                <span>{u.name.replace('Unidade ', '')}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Vector Interactive Map Canvas */}
      <div className="absolute inset-0 z-0 map-pattern flex items-center justify-center overflow-hidden">
        {/* Stylized SVG Map Layer representing São Paulo Jardins / Faria Lima area */}
        <svg
          viewBox="0 0 430 650"
          className="w-full h-full object-cover select-none pointer-events-none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* River (Rio Pinheiros) */}
          <path
            d="M -30,120 Q 80,180 140,320 T 260,560 T 340,700"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="32"
            opacity="0.85"
          />
          <path
            d="M -30,120 Q 80,180 140,320 T 260,560 T 340,700"
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="20"
            opacity="0.9"
          />

          {/* Major Avenues (Arterial Roads) */}
          {/* Av. Rebouças / Av. Europa */}
          <path
            d="M 50,40 L 380,480"
            fill="none"
            stroke="#ffffff"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 50,40 L 380,480"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="10"
            strokeLinecap="round"
          />

          {/* Rua Oscar Freire */}
          <path
            d="M 120,240 L 400,210"
            fill="none"
            stroke="#ffffff"
            strokeWidth="10"
            strokeLinecap="round"
          />

          {/* Av. Brigadeiro Faria Lima */}
          <path
            d="M 400,100 L 100,520"
            fill="none"
            stroke="#ffffff"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M 400,100 L 100,520"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Minor Cross Streets */}
          <line x1="80" y1="180" x2="220" y2="100" stroke="#ffffff" strokeWidth="6" />
          <line x1="160" y1="360" x2="340" y2="280" stroke="#ffffff" strokeWidth="6" />
          <line x1="100" y1="280" x2="260" y2="200" stroke="#ffffff" strokeWidth="6" />

          {/* GPS Route Dash Line to Flagship */}
          <path
            d="M 160,180 Q 190,240 220,330"
            fill="none"
            stroke="#0284c7"
            strokeWidth="5"
            strokeDasharray="6 4"
            className={isNavigatingLive ? 'animate-pulse' : ''}
          />

          {/* User Location Pulse (Blue Dot) */}
          <circle cx="160" cy="180" r="10" fill="#38bdf8" opacity="0.4" />
          <circle cx="160" cy="180" r="5" fill="#0284c7" />

          {/* Area Labels */}
          <text x="80" y="270" fill="#64748b" fontSize="12" fontWeight="600" opacity="0.6">
            JARDINS
          </text>
          <text x="290" y="230" fill="#64748b" fontSize="12" fontWeight="600" opacity="0.6">
            ITAIM
          </text>
          <text x="260" y="380" fill="#64748b" fontSize="11" fontWeight="500" opacity="0.7">
            Faria Lima
          </text>
        </svg>

        {/* Floating Aura Health Flagship Pin (Interactive) */}
        <div
          onClick={() => onSelectUnit(CLINIC_UNITS[0])}
          className="absolute z-20 top-[40%] left-[48%] -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center group pointer-events-auto"
        >
          {/* Tooltip Pill */}
          <div className="mb-2 px-3 py-1 rounded-full bg-[#191c1e] text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-lg border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#7df4ff] shadow-[0_0_8px_#7df4ff]"></span>
            <span>Aura Health Flagship</span>
          </div>

          {/* Pin Icon with animated halo glow */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-[#006194] text-white flex items-center justify-center shadow-2xl border-2 border-white neon-pulse-ring">
              <span className="material-symbols-outlined text-[24px]">local_hospital</span>
            </div>
            {/* Pointer pin triangle */}
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#006194] mx-auto -mt-0.5"></div>
          </div>
        </div>

        {/* Secondary Unit Pin: Faria Lima */}
        <div
          onClick={() => onSelectUnit(CLINIC_UNITS[1])}
          className="absolute z-20 top-[52%] left-[72%] -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center pointer-events-auto group"
        >
          <div className="w-8 h-8 rounded-full bg-white text-[#006194] border-2 border-[#006194] flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-[16px]">add</span>
          </div>
        </div>

        {/* Floating Map Controls on Right side */}
        <div className="absolute right-5 top-[35%] z-20 flex flex-col gap-2.5 pointer-events-auto">
          <button
            type="button"
            aria-label="Recentrar"
            onClick={() => showToast('Localização centralizada em São Paulo - Jardins')}
            className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-slate-200 flex items-center justify-center text-[#006194] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">my_location</span>
          </button>
          <button
            type="button"
            aria-label="Camadas"
            onClick={() => showToast('Alternando para camada de tráfego em tempo real')}
            className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-slate-200 flex items-center justify-center text-[#006194] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">layers</span>
          </button>
        </div>
      </div>

      {/* Bottom Sheet Modal / Card (Matching Image 9) */}
      <div className="relative z-30 px-4 pb-7 pt-2">
        <div className="rounded-[28px] bg-white/95 backdrop-blur-2xl border border-white shadow-2xl p-5 space-y-4">
          {/* Drag Handle Bar */}
          <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto -mt-1 mb-1"></div>

          {/* Unit Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[20px] font-bold text-[#191c1e] tracking-tight">
                {selectedUnit.name}
              </h2>
              <div className="flex items-start gap-1.5 mt-1 text-xs text-[#565e74]">
                <span className="material-symbols-outlined text-[16px] text-[#006194] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>
                  {selectedUnit.address} - {selectedUnit.neighborhood}, {selectedUnit.city}
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#cce5ff]/50 text-[#001d31] text-[11px] font-bold shrink-0">
              {selectedUnit.badge}
            </span>
          </div>

          {/* Metrics Row: 12 min de você & Aberto hoje */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#006194] shadow-sm">
                <span className="material-symbols-outlined text-[20px]">directions_car</span>
              </div>
              <div>
                <span className="text-[13px] font-bold text-[#191c1e] block">
                  {selectedUnit.distanceTime}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                  • {selectedUnit.trafficStatus}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#006194] shadow-sm">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
              </div>
              <div>
                <span className="text-[13px] font-bold text-[#191c1e] block">Aberto hoje</span>
                <span className="text-[11px] text-[#565e74] block">Até às 21:00</span>
              </div>
            </div>
          </div>

          {/* Comodidades & Exclusividades */}
          <div className="space-y-2">
            <span className="text-[11px] text-[#565e74] uppercase tracking-wider font-semibold block">
              Comodidades & Exclusividades
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#191c1e]">
              {selectedUnit.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/60"
                >
                  <span className="material-symbols-outlined text-[#006194] text-[16px]">
                    {item.icon}
                  </span>
                  <span className="font-medium text-[11px]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button: Como Chegar Waze / Apple Maps */}
          <button
            type="button"
            onClick={handleStartRoute}
            className="w-full h-[52px] rounded-xl bg-gradient-to-r from-[#006194] to-[#007bb9] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#006194]/20 hover:opacity-95 active:scale-98 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">turn_right</span>
            <span>Como Chegar (Waze / Apple Maps)</span>
          </button>

          {/* Secondary Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              type="button"
              onClick={onOpenConciergeCall}
              className="h-11 rounded-xl bg-white border border-slate-200 text-[#191c1e] font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-[#006194]">
                support_agent
              </span>
              <span>Ligar para Concierge</span>
            </button>
            <button
              type="button"
              onClick={onOpenUnitPhotos}
              className="h-11 rounded-xl bg-white border border-slate-200 text-[#191c1e] font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-[#006194]">
                photo_library
              </span>
              <span>Fotos da Unidade</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
