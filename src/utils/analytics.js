export function trackEvent(name, params = {}) {
  try { console.log('[analytics]', name, params); } catch (e) {}
}