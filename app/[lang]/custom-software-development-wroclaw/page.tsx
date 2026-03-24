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
      title: 'Custom Software Development Wrocław | Dedykowane Oprogramowanie | InoxieSoft',
      description: 'Custom software development in Wrocław — we build tailor-made applications, SaaS systems, API integrations and AI solutions for SMBs. 4+ years experience.',
    },
    en: {
      title: 'Custom Software Development Wrocław | Tailor-Made Software | InoxieSoft',
      description: 'Custom software development in Wrocław — we build tailor-made applications, SaaS systems, API integrations and AI solutions for SMBs. 4+ years experience.',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/custom-software-development-wroclaw',
        'en': 'https://inoxiesoft.com/en/custom-software-development-wroclaw',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang];

  return <ServicePageClient t={t} lang={lang} />;
}
