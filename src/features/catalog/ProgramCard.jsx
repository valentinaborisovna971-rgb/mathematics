import React, { useState } from 'react';
import Button from '../../components/Button.jsx';
import { formatPrice } from '../../utils/format.js';
import { trackEvent } from '../../utils/analytics.js';

export default function ProgramCard({ t, lang, program, onBuy }) {
  const [expanded, setExpanded] = useState(false);

  const name =
    lang === 'kz' ? (program.nameKz || program.nameRu) :
    lang === 'en' ? (program.nameEn || program.nameRu) :
    program.nameRu;

  const desc =
    lang === 'kz' ? (program.descKz || program.descRu) :
    lang === 'en' ? (program.descEn || program.descRu) :
    program.descRu;

  const hasDownload = Boolean(program.downloadUrl);
  const pricePrivate = program.prices?.private?.[1];
  const priceCorporate = program.prices?.corporate?.[1];

  return (
    <div className="bg-white rounded-2xl border border-[#E5E5EA] p-6 hover:shadow-md transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-blue-600 text-xl font-bold shrink-0 select-none">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1D1D1F] tracking-tight">{name}</h3>
            <button type="button" onClick={() => setExpanded((v) => !v)}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium transition mt-1 block select-none">
              {expanded ? t.catalog.btnHide : t.catalog.btnMore}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end select-none flex-wrap">
          {hasDownload ? (
            <a href={program.downloadUrl} download onClick={() => trackEvent('download_click', { program: program.id })}
              className="bg-[#E8E8ED] hover:bg-[#D2D2D7] text-[#1D1D1F] px-4 py-2.5 rounded-full text-xs font-semibold transition text-center">
              {t.catalog.btnDownload}
            </a>
          ) : (
            <span className="bg-[#F5F5F7] text-[#86868B] px-4 py-2.5 rounded-full text-xs font-semibold text-center">
              {t.catalog.btnDownload} · {t.catalog.comingSoon}
            </span>
          )}
          <Button variant="primary" onClick={() => { trackEvent('buy_click', { program: program.id }); onBuy(program); }}>
            {t.catalog.btnBuy}
          </Button>
        </div>
      </div>

      {expanded && (
        <div className="mt-5 pt-5 border-t border-[#F5F5F7]">
          <p className="text-sm text-[#424245] leading-relaxed whitespace-pre-line bg-[#F5F5F7] p-4 rounded-xl border border-[#E5E5EA]">{desc}</p>
          <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 gap-2 text-xs text-[#86868B] font-medium bg-blue-50/50 p-3.5 rounded-xl border border-blue-100/70">
            <span className="flex items-center gap-1.5 text-[#1D1D1F]">{t.catalog.private}: <b className="text-blue-600 text-sm font-bold">{formatPrice(pricePrivate)}</b></span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-[#1D1D1F]">{t.catalog.corporate}: <b className="text-blue-600 text-sm font-bold">{formatPrice(priceCorporate)}</b> / {t.catalog.perMonth}</span>
          </div>
        </div>
      )}
    </div>
  );
}