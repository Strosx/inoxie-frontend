import { translations, type Lang } from '../../i18n';
import ContactContent from './ContactContent';

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
    title: `${translations[lang].contact.title} | InoxieSoft`,
    description: translations[lang].contact.description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/contact',
        'en': 'https://inoxiesoft.com/en/contact',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang];
  
  return <ContactContent t={t} lang={lang} />;
}
