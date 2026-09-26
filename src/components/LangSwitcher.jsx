import React from 'react';
import { AVAILABLE_LANGS } from '../localization/index.js';

export default function LangSwitcher({ lang, setLang }) {
  return (
    <div className="flex items-center gap-1 bg-[#F5F5F7] p-1 rounded-full border border-[#E5E5EA] text-xs font-semibold">
      {AVAILABLE_LANGS.map((code) => (
        <button key={code} type="button" onClick={() => setLang(code)}
          className={'px-3 py-1 rounded-full transition ' + (lang === code ? 'bg-white text-blue-600 shadow-sm' : 'text-[#86868B] hover:text-[#1D1D1F]')}>
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}