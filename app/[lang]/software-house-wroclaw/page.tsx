import { type Lang } from '../../i18n';
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
      title: 'Software House Wrocław | Tworzenie Oprogramowania | InoxieSoft',
      description: 'Software house we Wrocławiu — tworzymy dedykowane oprogramowanie, aplikacje SaaS, integracje i modernizacje systemów. Pracujemy zdalnie w całej Polsce.',
    },
    en: {
      title: 'Software House Wrocław | Custom Software Development | InoxieSoft',
      description: 'Software house in Wrocław — we build custom software, SaaS applications, integrations and system modernizations. We work remotely across Poland.',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/software-house-wroclaw',
        'en': 'https://inoxiesoft.com/en/software-house-wroclaw',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return <ServicePageClient lang={lang} />;
}
