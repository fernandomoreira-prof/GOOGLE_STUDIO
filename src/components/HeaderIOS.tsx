import React from 'react';
import { ScreenId } from '../types';

interface HeaderIOSProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenNotifications?: () => void;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
  onShare?: () => void;
}

export const HeaderIOS: React.FC<HeaderIOSProps> = ({
  currentScreen,
  onNavigate,
  onOpenNotifications,
  isBookmarked,
  onToggleBookmark,
  onShare,
}) => {
  return (
    <div className="w-full">
      {/* iOS Status Bar + Dynamic Island */}
      <div className="pt-3 px-6 flex items-center justify-between text-[#191c1e]">
        {/* Time */}
        <span className="font-['JetBrains_Mono',monospace] text-[14px] font-semibold tracking-tight text-[#191c1e]">
          9:41
        </span>

        {/* Dynamic Island Hardware Capsule */}
        <div className="w-[124px] h-[34px] bg-black rounded-full flex items-center justify-between px-3 shadow-sm select-none">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7df4ff] shadow-[0_0_8px_#7df4ff] animate-pulse"></span>
            <span className="text-[#7df4ff] text-[10px] font-['JetBrains_Mono',monospace] font-medium">
              {currentScreen === 'map' ? 'Aura GPS' : currentScreen === 'doctor' ? 'Aura Suite' : 'Aura'}
            </span>
          </div>
          {currentScreen === 'map' ? (
            <span className="material-symbols-outlined text-[13px] text-[#7df4ff]">near_me</span>
          ) : (
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/60"></div>
          )}
        </div>

        {/* Hardware Status Icons */}
        <div className="flex items-center space-x-1.5 text-[#191c1e]">
          <span className="material-symbols-outlined text-[16px]">signal_cellular_4_bar</span>
          <span className="material-symbols-outlined text-[16px]">wifi</span>
          <span className="material-symbols-outlined text-[18px]">battery_full</span>
        </div>
      </div>
    </div>
  );
};
