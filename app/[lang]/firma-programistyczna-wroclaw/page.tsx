import { translations, type Lang } from '../../i18n';
import ServicePageClient from './ServicePageClient';

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
      title: 'Firma Programistyczna Wrocław | Software House | InoxieSoft',
      description: 'Firma programistyczna we Wrocławiu — tworzymy dedykowane oprogramowanie, aplikacje webowe i systemy SaaS dla firm MŚP. Zespół ekspertów, 4+ lat doświadczenia.',
    },
    en: {
      title: 'Software Company Wrocław | Custom Software Development | InoxieSoft',
      description: 'Software company in Wrocław — we build custom software, web applications and SaaS systems for SMBs. Expert team, 4+ years experience.',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/firma-programistyczna-wroclaw',
        'en': 'https://inoxiesoft.com/en/firma-programistyczna-wroclaw',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang];

  return <ServicePageClient t={t} lang={lang} />;
}
