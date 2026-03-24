import LlmIntegrationPostClient from './LlmIntegrationPostClient';
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
      title: 'Integracja LLM w polskiej firmie: Kompletny przewodnik | InoxieSoft',
      description: 'Jak skutecznie zintegrować Duże Modele Językowe z procesami biznesowymi? Przewodnik oparty na 50+ wdrożeniach w polskich firmach.',
    },
    en: {
      title: 'LLM Integration for Polish Companies: Complete Guide | InoxieSoft',
      description: 'How to successfully integrate Large Language Models into your business workflows? Guide based on 50+ implementations in Polish companies.',
    },
  };
  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/llm-integration-post',
        'en': 'https://inoxiesoft.com/en/llm-integration-post',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <LlmIntegrationPostClient lang={lang as Lang} />;
}
