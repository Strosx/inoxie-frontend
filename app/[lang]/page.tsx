import { translations, type Lang } from '../i18n';
import HomeContent from './HomeContent';

interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export async function generateStaticParams() {
  return [{ lang: 'pl' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang].seo;
  
  return {
    title: t.title,
    description: t.description,
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
  const t = translations[lang];
  
  return <HomeContent t={t} lang={lang} />;
}
