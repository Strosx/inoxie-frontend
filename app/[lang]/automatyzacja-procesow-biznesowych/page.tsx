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
      title: 'Automatyzacja Procesów Biznesowych | Systemy Workflow AI | InoxieSoft',
      description: 'Automatyzacja procesów biznesowych z AI — workflow automation, integracje API, chatboty i agenci AI. Redukuj koszty operacyjne o 40%. Darmowa konsultacja!',
    },
    en: {
      title: 'Business Process Automation | AI Workflow Systems | InoxieSoft',
      description: 'Business process automation with AI — workflow automation, API integrations, chatbots and AI agents. Reduce operational costs by 40%. Free consultation!',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/automatyzacja-procesow-biznesowych',
        'en': 'https://inoxiesoft.com/en/automatyzacja-procesow-biznesowych',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang];

  return <ServicePageClient t={t} lang={lang} />;
}
