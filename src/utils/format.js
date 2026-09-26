export function formatPrice(value, currency = '₸') {
  if (value === undefined || value === null || value === '') return '—';
  const num = Number(value);
  if (Number.isNaN(num)) return '—';
  return num.toLocaleString('ru-RU').replace(/\u00A0/g, ' ') + ' ' + currency;
}