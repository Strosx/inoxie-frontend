import type { Lang } from '../i18n';
import HomeContent from './HomeContent';

interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export async function generateStaticParams() {
  return [{ lang: 'pl' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  
  const meta = {
    pl: {
      title: 'InoxieSoft | Automatyzacja AI + Oprogramowanie na Zamówienie | Wrocław, Polska',
      description: 'InoxieSoft — automatyzacja AI i oprogramowanie na zamówienie dla MŚP. Tworzymy strony www, aplikacje SaaS, chatboty i systemy backendowe. Wrocław, Warszawa, Kraków, Poznań, Katowice.',
    },
    en: {
      title: 'InoxieSoft | AI Automation + Custom Software Development | Wrocław, Poland',
      description: 'InoxieSoft — AI automation and custom software development for SMBs. We build websites, SaaS applications, chatbots and backend systems. Serving clients in Wrocław, Warsaw, Kraków, Poznań, Katowice.',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      canonical: 'https://inoxiesoft.com/pl',
      languages: {
        'pl': 'https://inoxiesoft.com/pl',
        'en': 'https://inoxiesoft.com/en',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  
  return <HomeContent lang={lang} />;
}
