'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { Lang } from '../i18n';

interface FooterProps {
  lang: Lang;
}

const footerServices = {
  pl: [
    { label: 'Oprogramowanie na zamówienie', href: '/pl/firma-programistyczna-wroclaw' },
    { label: 'Automatyzacja AI', href: '/pl/automatyzacja-ai-wroclaw' },
    { label: 'Strona internetowa Wrocław', href: '/pl/strona-internetowa-wroclaw' },
    { label: 'Chatbot dla firmy', href: '/pl/chatbot-dla-firmy' },
    { label: 'Automatyzacja procesów', href: '/pl/automatyzacja-procesow-biznesowych' },
    { label: 'AI dla firm', href: '/pl/ai-dla-firm' },
    { label: 'Software House Wrocław', href: '/pl/software-house-wroclaw' },
    { label: 'Oferta', href: '/pl/offer' },
  ],
  en: [
    { label: 'Custom Software', href: '/en/firma-programistyczna-wroclaw' },
    { label: 'AI Automation', href: '/en/automatyzacja-ai-wroclaw' },
    { label: 'Website Wrocław', href: '/en/strona-internetowa-wroclaw' },
    { label: 'Chatbot for Business', href: '/en/chatbot-dla-firmy' },
    { label: 'Process Automation', href: '/en/automatyzacja-procesow-biznesowych' },
    { label: 'AI for Business', href: '/en/ai-dla-firm' },
    { label: 'Software House Wrocław', href: '/en/software-house-wroclaw' },
    { label: 'Services', href: '/en/offer' },
  ],
};

const footerCompany = {
  pl: [
    { label: 'O nas', href: '/pl/about-us' },
    { label: 'Blog', href: '/pl/blog' },
    { label: 'ROI AI 2026', href: '/pl/roi-ai-post' },
    { label: 'Kontakt', href: '/pl/contact' },
  ],
  en: [
    { label: 'About', href: '/en/about-us' },
    { label: 'Blog', href: '/en/blog' },
    { label: 'ROI AI 2026', href: '/en/roi-ai-post' },
    { label: 'Contact', href: '/en/contact' },
  ],
};

const industriesList = {
  pl: ['E-commerce', 'Finanse', 'Produkcja', 'Usługi', 'Healthcare', 'Retail'],
  en: ['E-commerce', 'Finance', 'Manufacturing', 'Services', 'Healthcare', 'Retail'],
};

export default function Footer({ lang }: FooterProps) {
  const t = useTranslations('footer');
  const services = footerServices[lang as 'pl' | 'en'];
  const company = footerCompany[lang as 'pl' | 'en'];
  const industries = industriesList[lang as 'pl' | 'en'];

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
            <p className="text-stone-400 mb-6 max-w-md">{t('description')}</p>
            <div className="mb-6">
              <p className="text-stone-500 text-sm mb-2">{t('industries')}:</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span key={industry} className="text-stone-400 text-sm">{industry}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-stone-400 text-sm">
              <p>{t('email')}</p>
              <p>{t('phone')}</p>
              <p>{t('location')}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('servicesTitle')}</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-stone-400 hover:text-accent text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('companyTitle')}</h4>
            <ul className="space-y-2">
              {company.map((link) => (
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
          <p>© {new Date().getFullYear()} InoxieSoft. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
