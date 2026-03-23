'use client';

import Link from 'next/link';
import type { Lang } from '../i18n';

type Translations = typeof import('../i18n/pl').pl;

interface FooterProps {
  t: Translations;
  lang: Lang;
}

export default function Footer({ t, lang }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href={lang === 'pl' ? '/' : `/${lang}`} className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <rect width="32" height="32" rx="6" className="fill-current text-accent"/>
                <path d="M8 10h6v12H8V10z" fill="white"/>
                <path d="M16 10h8v4h-8v-4z" fill="white"/>
                <path d="M16 16h8v6h-8v-6z" fill="white"/>
              </svg>
              <span className="text-xl font-bold text-accent">InoxieSoft</span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-md">{t.footer.description}</p>
            <div className="mb-6">
              <p className="text-stone-500 text-sm mb-2">{t.footer.industries}:</p>
              <div className="flex flex-wrap gap-2">
                {t.footer.industriesList.map((industry) => (
                  <span key={industry} className="text-stone-400 text-sm">{industry}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-stone-400 text-sm">
              <p>{t.footer.email}</p>
              <p>{t.footer.phone}</p>
              <p>{t.footer.location}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2">
              {t.footer.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-stone-400 hover:text-accent text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.companyTitle}</h4>
            <ul className="space-y-2">
              {t.footer.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-stone-400 hover:text-accent text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} InoxieSoft. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}