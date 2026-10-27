import React from 'react';
import { ScreenId } from '../types';

interface BottomNavBarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenConsultasModal?: () => void;
  onOpenPerfilModal?: () => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentScreen,
  onNavigate,
  onOpenConsultasModal,
  onOpenPerfilModal,
}) => {
  // If we are on confirmation screen, native bottom nav is suppressed per design specs
  if (currentScreen === 'confirmation') {
    return null;
  }

  const isInicio = currentScreen === 'home';
  const isAgendar = currentScreen === 'catalog' || currentScreen === 'schedule' || currentScreen === 'doctor';
  const isConsultas = false;
  const isPerfil = false;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-4 pb-6 pt-2 pointer-events-none">
      <div className="w-full max-w-sm mx-auto pointer-events-auto">
        <div className="h-16 rounded-full bg-white/80 backdrop-blur-2xl border border-white/90 shadow-lg shadow-[#191c1e]/5 flex items-center justify-around px-2">
          {/* Tab 1: Início */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className={`flex flex-col items-center justify-center transition-transform duration-150 ease-out py-1 px-3 active:scale-95 ${
              isInicio ? 'text-[#006194] font-semibold' : 'text-[#565e74] hover:text-[#191c1e]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: isInicio ? "'FILL' 1" : "'FILL' 0" }}
            >
              home
            </span>
            <span className="text-[11px] font-semibold tracking-wide">Início</span>
            {isInicio && (
              <span className="w-1 h-1 bg-[#7df4ff] rounded-full mt-0.5 shadow-[0_0_8px_#7df4ff]"></span>
            )}
          </button>

          {/* Tab 2: Agendar */}
          <button
            type="button"
            onClick={() => onNavigate('catalog')}
            className={`flex flex-col items-center justify-center transition-transform duration-150 ease-out py-1 px-3 active:scale-95 ${
              isAgendar ? 'text-[#006194] font-semibold' : 'text-[#565e74] hover:text-[#191c1e]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: isAgendar ? "'FILL' 1" : "'FILL' 0" }}
            >
              calendar_month
            </span>
            <span className="text-[11px] font-semibold tracking-wide">Agendar</span>
            {isAgendar && (
              <span className="w-1 h-1 bg-[#7df4ff] rounded-full mt-0.5 shadow-[0_0_8px_#7df4ff]"></span>
            )}
          </button>

          {/* Tab 3: Consultas */}
          <button
            type="button"
            onClick={() => {
              if (onOpenConsultasModal) {
                onOpenConsultasModal();
              } else {
                onNavigate('confirmation');
              }
            }}
            className={`flex flex-col items-center justify-center transition-transform duration-150 ease-out py-1 px-3 active:scale-95 ${
              isConsultas ? 'text-[#006194] font-semibold' : 'text-[#565e74] hover:text-[#191c1e]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: isConsultas ? "'FILL' 1" : "'FILL' 0" }}
            >
              assignment
            </span>
            <span className="text-[11px] font-semibold tracking-wide">Consultas</span>
            {isConsultas && (
              <span className="w-1 h-1 bg-[#7df4ff] rounded-full mt-0.5 shadow-[0_0_8px_#7df4ff]"></span>
            )}
          </button>

          {/* Tab 4: Perfil */}
          <button
            type="button"
            onClick={() => {
              if (onOpenPerfilModal) {
                onOpenPerfilModal();
              } else {
                onNavigate('doctor');
              }
            }}
            className={`flex flex-col items-center justify-center transition-transform duration-150 ease-out py-1 px-3 active:scale-95 ${
              isPerfil ? 'text-[#006194] font-semibold' : 'text-[#565e74] hover:text-[#191c1e]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: isPerfil ? "'FILL' 1" : "'FILL' 0" }}
            >
              person
            </span>
            <span className="text-[11px] font-semibold tracking-wide">Perfil</span>
            {isPerfil && (
              <span className="w-1 h-1 bg-[#7df4ff] rounded-full mt-0.5 shadow-[0_0_8px_#7df4ff]"></span>
            )}
          </button>
        </div>

        {/* iOS Native Home Indicator Bar */}
        <div className="w-32 h-1 bg-[#191c1e]/30 rounded-full mx-auto mt-2 pointer-events-none"></div>
      </div>
    </nav>
  );
};
