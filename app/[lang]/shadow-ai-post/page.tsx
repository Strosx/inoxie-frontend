import ShadowAIPostClient from './ShadowAIPostClient';
import { type Lang } from '../../i18n';

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
      title: 'Shadow AI: Ukryte Zagrożenie dla Polskich Firm w 2026 Roku | InoxieSoft',
      description: 'Shadow AI to ryzyko, że pracownicy używają narzędzi AI bez wiedzy firmy. Poznaj zagrożenia i jak się chronić. Darmowa konsultacja.',
    },
    en: {
      title: 'Shadow AI: The Hidden Threat to Polish Businesses in 2026 | InoxieSoft',
      description: 'Shadow AI risks when employees use AI tools without company knowledge. Learn the dangers and how to protect your business. Free consultation.',
    },
  };
  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/shadow-ai-post',
        'en': 'https://inoxiesoft.com/en/shadow-ai-post',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <ShadowAIPostClient lang={lang as Lang} />;
}
