import React, { useState, useMemo } from 'react';
import { ScreenId, ServiceProcedure, Doctor } from '../types';
import { SERVICES_PROCEDURES, DOCTORS } from '../data/mockData';

interface CatalogScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectProcedureAndBook: (procedure: ServiceProcedure, doctor?: Doctor) => void;
  onOpenNotifications: () => void;
  onOpenConciergeCall: () => void;
}

type FilterCategory = 'todas' | 'consultas' | 'estetica' | 'exames' | 'longevidade';

const CATEGORY_TABS: { id: FilterCategory; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'consultas', label: 'Consultas' },
  { id: 'estetica', label: 'Procedimentos Estéticos' },
  { id: 'exames', label: 'Exames Avançados' },
  { id: 'longevidade', label: 'Genômica & Longevidade' },
];

export const CatalogScreen: React.FC<CatalogScreenProps> = ({
  onNavigate,
  onSelectProcedureAndBook,
  onOpenNotifications,
  onOpenConciergeCall,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('todas');

  const filteredItems = useMemo(() => {
    return SERVICES_PROCEDURES.filter((item) => {
      const matchesCategory =
        activeCategory === 'todas' || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col space-y-4 pt-1 pb-24">
      {/* Top Header / App Bar */}
      <div className="flex items-center justify-between px-5 pt-2 pb-1">
        <button
          type="button"
          aria-label="Voltar"
          onClick={() => onNavigate('home')}
          className="w-10 h-10 rounded-full bg-white/80 border border-slate-200/80 shadow-sm flex items-center justify-center text-[#006194] active:scale-95 transition-transform duration-150"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-[11px] text-[#006194] uppercase tracking-widest font-semibold">
            Aura Health
          </span>
          <h1 className="text-[20px] text-[#191c1e] tracking-tight font-semibold">
            Serviços & Procedimentos
          </h1>
        </div>
        <button
          type="button"
          aria-label="Notificações"
          onClick={onOpenNotifications}
          className="w-10 h-10 rounded-full bg-white/80 border border-slate-200/80 shadow-sm flex items-center justify-center text-[#3f4850] active:scale-95 transition-transform duration-150 relative"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#006194] ring-2 ring-white"></span>
        </button>
      </div>

      {/* Search Bar & Advanced Filter Trigger */}
      <div className="px-5 pt-1 pb-1 flex items-center gap-2.5">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#707881] text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar médicos, exames ou tratamentos..."
            className="w-full h-[48px] pl-11 pr-4 rounded-xl bg-white/80 backdrop-blur-xl border border-slate-200 text-[#191c1e] placeholder:text-[#707881] text-[15px] shadow-sm focus:outline-none focus:border-[#006194] focus:ring-2 focus:ring-[#006194]/20 transition-all duration-200"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <span className="material-symbols-outlined text-[18px]">cancel</span>
            </button>
          )}
        </div>
        <button
          type="button"
          aria-label="Filtros avançados"
          onClick={() => setActiveCategory(activeCategory === 'estetica' ? 'todas' : 'estetica')}
          className="relative h-[48px] px-3.5 rounded-xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm flex items-center justify-center text-[#006194] active:scale-95 transition-transform duration-150 hover:bg-white"
        >
          <span className="material-symbols-outlined text-[20px]">tune</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#7df4ff] shadow-[0_0_8px_#7df4ff]"></span>
        </button>
      </div>

      {/* Segmented Controls / Categorias Pílulas */}
      <div className="px-5 pb-1">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-medium text-[13px] transition-all active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#006194] to-[#007bb9] text-white shadow-[0_4px_14px_rgba(0,123,185,0.25)] border border-[#7df4ff]/40'
                    : 'bg-white/85 backdrop-blur-md border border-slate-200 text-[#3f4850] shadow-sm hover:text-[#006194]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="px-5 space-y-4">
        {/* Sub-headline contextual info */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] text-[#565e74] uppercase tracking-wider font-semibold">
            Catálogo Selecionado
          </span>
          <span className="font-['JetBrains_Mono',monospace] text-[#707881] text-xs">
            {filteredItems.length} Especialidades
          </span>
        </div>

        {/* List of Procedure Cards */}
        {filteredItems.map((item) => {
          const doctorMatch = DOCTORS.find((d) => d.name.includes(item.doctorName.split(' ')[1] || ''));

          return (
            <article
              key={item.id}
              className="relative rounded-[22px] bg-white/85 backdrop-blur-2xl border border-slate-200/90 p-5 shadow-[0_10px_30px_-10px_rgba(2,132,199,0.08)] transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7df4ff]/20 border border-[#7df4ff]/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00dbe9] shadow-[0_0_8px_#00dbe9]"></span>
                    <span className="text-[11px] text-[#00666d] font-semibold tracking-wide">
                      {item.tag}
                    </span>
                  </div>
                  <h2 className="text-[17px] text-[#191c1e] font-semibold pt-1 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-[14px] text-[#3f4850] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-[#dae2fd]/50 flex items-center justify-center text-[#006194] flex-shrink-0 border border-slate-200">
                  <span className="material-symbols-outlined text-[22px]">
                    {item.category === 'estetica'
                      ? 'spa'
                      : item.category === 'consultas'
                      ? 'cardiology'
                      : item.category === 'exames'
                      ? 'vital_signs'
                      : 'biotech'}
                  </span>
                </div>
              </div>

              {/* Meta Details: Specialist & Duration */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#cce5ff] flex items-center justify-center text-[#006194] font-bold text-xs">
                    {item.doctorName.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="leading-tight">
                    <span className="text-[13px] text-[#191c1e] font-semibold block">
                      {item.doctorName}
                    </span>
                    <span className="text-[11px] text-[#565e74] block">
                      {item.doctorRole}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-[#565e74] text-sm">
                  <span className="material-symbols-outlined text-[18px] text-[#006194]">schedule</span>
                  <span className="font-['JetBrains_Mono',monospace] text-xs">{item.duration}</span>
                </div>
              </div>

              {/* Price and Action */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#565e74] block">Investimento</span>
                  <span className="text-[17px] text-[#191c1e] font-bold">
                    {item.pricePrefix || ''}R$ {item.price.toLocaleString('pt-BR')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProcedureAndBook(item, doctorMatch)}
                  className="h-11 px-6 rounded-xl bg-gradient-to-r from-[#006194] to-[#007bb9] text-white text-sm font-semibold shadow-[0_4px_16px_rgba(0,97,148,0.25)] active:scale-95 transition-transform flex items-center gap-1.5"
                >
                  <span>Agendar</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </article>
          );
        })}

        {/* Empty Search State */}
        {filteredItems.length === 0 && (
          <div className="p-8 text-center bg-white/70 rounded-2xl border border-slate-200">
            <span className="material-symbols-outlined text-4xl text-slate-300">search_off</span>
            <h3 className="font-semibold text-slate-700 mt-2">Nenhum procedimento encontrado</h3>
            <p className="text-xs text-slate-500 mt-1">Tente buscar por outro termo ou limpe o filtro.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todas');
              }}
              className="mt-3 px-4 py-1.5 bg-[#006194] text-white text-xs font-semibold rounded-lg"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Trust / Concierge Hospitality Banner */}
        <div
          onClick={onOpenConciergeCall}
          className="rounded-2xl bg-gradient-to-r from-[#006194]/10 via-[#7df4ff]/10 to-[#cce5ff]/20 p-4 border border-slate-200 flex items-center gap-3 cursor-pointer hover:shadow-sm transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#006194] shadow-sm flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">medical_information</span>
          </div>
          <div>
            <h3 className="text-[13px] text-[#191c1e] font-semibold">
              Atendimento Concierge Exclusivo
            </h3>
            <p className="text-xs text-[#3f4850]">
              Dúvidas sobre preparo para exames? Fale com nossa equipe médica 24/7.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
