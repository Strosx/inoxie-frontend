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
      title: 'Chatbot dla Firmy | Automatyczna Obsługa Klienta AI | InoxieSoft',
      description: 'Chatbot dla firmy — automatyczna obsługa klienta 24/7 z AI. Zwiększ konwersje, odciąż zespół, odpowiadaj na pytania natychmiast. Instalacja od 1 dnia!',
    },
    en: {
      title: 'Chatbot for Business | AI Customer Service Automation | InoxieSoft',
      description: 'Chatbot for business — 24/7 AI customer service. Increase conversions, relieve your team, answer questions instantly. Installation from 1 day!',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/chatbot-dla-firmy',
        'en': 'https://inoxiesoft.com/en/chatbot-dla-firmy',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang];

  return <ServicePageClient t={t} lang={lang} />;
}
