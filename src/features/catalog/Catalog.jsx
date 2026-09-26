import React from 'react';
import ProgramCard from './ProgramCard.jsx';

export default function Catalog({ t, lang, programs, onBuy }) {
  if (!programs || programs.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-[#E5E5EA] p-12 text-center shadow-sm">
        <p className="text-[#1D1D1F] font-medium text-base mb-1">{t.catalog.empty}</p>
        <p className="text-[#86868B] text-xs">{t.catalog.emptyDesc}</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {programs.map((program) => (
        <ProgramCard key={program.id} t={t} lang={lang} program={program} onBuy={onBuy} />
      ))}
    </div>
  );
}