import { type Lang } from '../../i18n';
import AboutPageClient from '../../components/AboutPageClient';

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
      title: 'O nas | InoxieSoft',
      description: 'Pomagamy firmom wykorzystywać moc sztucznej inteligencji.',
    },
    en: {
      title: 'About Us | InoxieSoft',
      description: 'We help companies leverage the power of artificial intelligence.',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
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
  
  return <AboutPageClient lang={lang} />;
}
