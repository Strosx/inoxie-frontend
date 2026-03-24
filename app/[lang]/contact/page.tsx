import { type Lang } from '../../i18n';
import ContactContent from './ContactContent';

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
      title: 'Kontakt | InoxieSoft',
      description: 'Porozmawiajmy o Twoim projekcie. Skontaktuj się z nami, aby omówić wdrożenie AI w Twojej firmie.',
    },
    en: {
      title: 'Contact | InoxieSoft',
      description: "Let's talk about your project. Contact us to discuss AI implementation for your business.",
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/contact',
        'en': 'https://inoxiesoft.com/en/contact',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  
  return <ContactContent lang={lang} />;
}
