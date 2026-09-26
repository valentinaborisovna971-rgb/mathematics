import React from 'react';
import LangSwitcher from './LangSwitcher.jsx';

export default function Header({ t, lang, setLang }) {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 px-6 sm:px-8 py-4 flex justify-between items-center border-b border-[#E5E5EA]">
      <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-[#1D1D1F]">{t.nav.brand}</h1>
      <LangSwitcher lang={lang} setLang={setLang} />
    </header>
  );
}