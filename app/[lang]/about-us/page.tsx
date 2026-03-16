import { translations, type Lang } from '../../i18n';
import AboutPageClient from '../../components/AboutPageClient';

interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  
  return {
    title: `${translations[lang].about.title} | InoxieSoft`,
    description: translations[lang].about.subtitle,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/about-us',
        'en': 'https://inoxiesoft.com/en/about-us',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang];
  
  return <AboutPageClient t={t} lang={lang} />;
}
