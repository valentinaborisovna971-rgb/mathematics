import React, { useState } from 'react';
import Modal from '../../components/Modal.jsx';
import TariffSelect from './TariffSelect.jsx';
import { formatPrice } from '../../utils/format.js';
import { trackEvent } from '../../utils/analytics.js';

export default function BuyModal({ t, lang, program, isOpen, onClose }) {
  const [licenseType, setLicenseType] = useState('private');
  const [months, setMonths] = useState(1);

  if (!program) return null;

  const name =
    lang === 'kz' ? (program.nameKz || program.nameRu) :
    lang === 'en' ? (program.nameEn || program.nameRu) :
    program.nameRu;

  const prices = program.prices?.[licenseType] || {};
  const price = prices[months] || 0;

  const handlePay = () => {
    trackEvent('checkout_start', {
      program: program.id,
      licenseType,
      months,
    });

    if (!program.lemonSqueezyUrl) {
      // eslint-disable-next-line no-alert
      alert('Оплата ещё не подключена. Lemon Squeezy URL не задан.');
      return;
    }

    const url = new URL(program.lemonSqueezyUrl);
    url.searchParams.set('checkout[custom][program_id]', program.id);
    url.searchParams.set('checkout[custom][license_type]', licenseType);
    url.searchParams.set('checkout[custom][months]', String(months));

    window.location.href = url.toString();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-lg font-bold mb-4 pr-8">{name}</h3>

      <div className="flex gap-2 mb-5">
        <button
          type="button"
          onClick={() => setLicenseType('private')}
          className={
            'flex-1 py-2.5 rounded-xl border text-xs font-semibold transition ' +
            (licenseType === 'private'
              ? 'border-blue-600 bg-blue-50 text-blue-600'
              : 'border-[#E5E5EA] text-[#86868B]')
          }
        >
          {t.buy.privateTab}
        </button>
        <button
          type="button"
          onClick={() => setLicenseType('corporate')}
          className={
            'flex-1 py-2.5 rounded-xl border text-xs font-semibold transition ' +
            (licenseType === 'corporate'
              ? 'border-blue-600 bg-blue-50 text-blue-600'
              : 'border-[#E5E5EA] text-[#86868B]')
          }
        >
          {t.buy.corporateTab}
        </button>
      </div>

      <TariffSelect
        t={t}
        prices={prices}
        months={months}
        setMonths={setMonths}
      />

      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl flex justify-between items-center">
        <span className="text-xs font-semibold text-[#1D1D1F]">
          {t.buy.totalLabel}
        </span>
        <span className="text-lg font-bold text-blue-600">
          {formatPrice(price)}
        </span>
      </div>

      <button
        type="button"
        onClick={handlePay}
        className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full shadow-sm transition"
      >
        {t.buy.btnPay}
      </button>
    </Modal>
  );
}