import React, { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children, maxWidth = 'max-w-lg' }) {
  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <div className={'bg-white rounded-3xl w-full ' + maxWidth + ' p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl'} onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute top-5 right-6 text-[#86868B] hover:text-[#1D1D1F] text-lg transition" aria-label="Close">✕</button>
        {children}
      </div>
    </div>
  );
}