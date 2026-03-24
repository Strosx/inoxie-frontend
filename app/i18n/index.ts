// Lang type for the application
export type Lang = 'pl' | 'en';

export const languages = {
  pl: 'Polski',
  en: 'English',
} as const;

export const defaultLang = 'pl';
