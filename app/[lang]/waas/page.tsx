import { translations, type Lang } from '../../i18n';
import WAASPageClient from './WAASPageClient';

interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export async function generateStaticParams() {
  return [{ lang: 'pl' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang].waas.seo;
  
  return {
    title: t.title,
    description: t.description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/waas',
        'en': 'https://inoxiesoft.com/en/waas',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang];
  
  return <WAASPageClient t={t} lang={lang} />;
}
