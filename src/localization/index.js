import { ru } from './ru.js';
import { kz } from './kz.js';
import { en } from './en.js';

export const translations = { ru, kz, en };

export const AVAILABLE_LANGS = ['ru', 'kz', 'en'];

export function getTranslator(lang) {
  return translations[lang] || translations.ru;
}