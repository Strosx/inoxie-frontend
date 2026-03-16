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
  
  return {
    title: `${translations[lang].offer.title} | InoxieSoft`,
    description: translations[lang].offer.subtitle,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/offer',
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
