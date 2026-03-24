import { translations, type Lang } from '../../i18n';
import OfferPageClient from './OfferPageClient';

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
      title: 'Oferta | Automatyzacja AI, Strony WWW, Oprogramowanie na Zamówienie | InoxieSoft',
      description: 'Oferta InoxieSoft — automatyzacja AI, profesjonalne strony www dla firm, oprogramowanie na zamówienie, chatboty AI. Usługi dla firm MŚP. Wrocław, Warszawa, Kraków, Poznań, Katowice.',
    },
    en: {
      title: 'Services | AI Automation, Website Development, Custom Software | InoxieSoft',
      description: 'InoxieSoft services — AI automation, professional websites, custom software development, AI chatbots. Services for SMBs. Wrocław, Warsaw, Kraków, Poznań, Katowice.',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/offer',
        'en': 'https://inoxiesoft.com/en/offer',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang];
  
  return <OfferPageClient t={t} lang={lang} />;
}
