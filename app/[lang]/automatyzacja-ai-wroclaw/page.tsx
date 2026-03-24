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
      title: 'Automatyzacja AI Wrocław | Agenci AI i Automatyzacja Procesów | InoxieSoft',
      description: 'Automatyzacja AI we Wrocławiu — wdrażamy agentów AI i automatyzujemy procesy biznesowe dla firm MŚP. Oszczędność czasu, redukcja kosztów. Darmowa konsultacja!',
    },
    en: {
      title: 'AI Automation Wrocław | AI Agents & Business Process Automation | InoxieSoft',
      description: 'AI Automation in Wrocław — we implement AI agents and automate business processes for SMBs. Save time, reduce costs. Free consultation!',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/automatyzacja-ai-wroclaw',
        'en': 'https://inoxiesoft.com/en/automatyzacja-ai-wroclaw',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return <ServicePageClient lang={lang} />;
}
