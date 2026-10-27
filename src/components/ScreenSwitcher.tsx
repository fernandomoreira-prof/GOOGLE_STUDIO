import React, { useState } from 'react';
import { ScreenId } from '../types';

interface ScreenSwitcherProps {
  currentScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  isPhoneFrame: boolean;
  onTogglePhoneFrame: () => void;
}

const SCREENS: { id: ScreenId; label: string; icon: string }[] = [
  { id: 'home', label: '1. Início', icon: 'home' },
  { id: 'catalog', label: '2. Serviços', icon: 'medical_services' },
  { id: 'doctor', label: '3. Dra. Camila', icon: 'person' },
  { id: 'schedule', label: '4. Agendar', icon: 'calendar_month' },
  { id: 'map', label: '5. Mapa Unidades', icon: 'map' },
  { id: 'confirmation', label: '6. Passe Digital', icon: 'confirmation_number' },
];

export const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({
  currentScreen,
  onSelectScreen,
  isPhoneFrame,
  onTogglePhoneFrame,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed top-2 right-2 sm:right-4 z-50 flex items-center gap-2 select-none">
      {/* Quick Screen Pill Bar */}
      <div className="hidden lg:flex items-center gap-1 p-1 bg-white/80 backdrop-blur-xl border border-white/90 rounded-full shadow-lg text-xs">
        {SCREENS.map((s) => {
          const isActive = currentScreen === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelectScreen(s.id)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1 ${
                isActive
                  ? 'bg-gradient-to-r from-[#006194] to-[#007bb9] text-white shadow-sm'
                  : 'text-[#565e74] hover:text-[#191c1e] hover:bg-slate-100'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">{s.icon}</span>
              <span>{s.label}</span>
            </button>
          );
        })}

        <div className="h-4 w-px bg-slate-200 mx-1"></div>

        {/* Toggle Frame View */}
        <button
          type="button"
          onClick={onTogglePhoneFrame}
          title={isPhoneFrame ? 'Expandir para tela cheia' : 'Enquadrar em iPhone'}
          className={`px-2.5 py-1.5 rounded-full font-medium transition-all flex items-center gap-1 ${
            isPhoneFrame ? 'bg-slate-100 text-slate-700' : 'bg-slate-800 text-white'
          }`}
        >
          <span className="material-symbols-outlined text-[15px]">
            {isPhoneFrame ? 'fullscreen' : 'smartphone'}
          </span>
          <span>{isPhoneFrame ? 'iPhone 16' : 'Full'}</span>
        </button>
      </div>

      {/* Mobile / Compact Dropdown Pill for Small Screens */}
      <div className="lg:hidden relative">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-md text-xs font-semibold text-[#006194]"
        >
          <span className="w-2 h-2 rounded-full bg-[#7df4ff] shadow-[0_0_6px_#7df4ff]"></span>
          <span>Telas ({SCREENS.findIndex((s) => s.id === currentScreen) + 1}/6)</span>
          <span className="material-symbols-outlined text-[16px]">expand_more</span>
        </button>

        {isExpanded && (
          <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-100 p-2 space-y-1">
            {SCREENS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  onSelectScreen(s.id);
                  setIsExpanded(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left text-xs font-medium ${
                  currentScreen === s.id
                    ? 'bg-[#006194] text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{s.icon}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
