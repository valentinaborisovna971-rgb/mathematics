import React from 'react';

const VARIANTS = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
  secondary: 'bg-[#E8E8ED] hover:bg-[#D2D2D7] text-[#1D1D1F]',
  ghost: 'bg-transparent hover:bg-[#F5F5F7] text-[#1D1D1F] border border-[#E5E5EA]',
};

export default function Button({ children, variant = 'primary', disabled = false, className = '', ...rest }) {
  const base = 'px-5 py-2.5 rounded-full text-xs font-semibold transition text-center inline-block select-none';
  const v = VARIANTS[variant] || VARIANTS.primary;
  const dis = disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : '';
  return (
    <button type="button" className={base + ' ' + v + ' ' + dis + ' ' + className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}