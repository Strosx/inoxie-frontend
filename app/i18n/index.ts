import { pl } from './pl';
import { en } from './en';

export const languages = {
  pl: 'Polski',
  en: 'English',
} as const;

export const defaultLang = 'pl';

export const translations = {
  pl,
  en,
} as const;

export type Lang = keyof typeof translations;

export function useTranslations(lang: Lang) {
  return translations[lang];
}

// Helper to get path with language prefix
export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path === '/' ? '' : path}`;
}

// SEO metadata generator for each language
export function generateMetadata(lang: Lang) {
  const t = translations[lang].seo;
  
  return {
    title: t.title,
    description: t.description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/',
        'en': 'https://inoxiesoft.com/en',
      },
    },
  };
}
