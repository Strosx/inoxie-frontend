import AiAgentsPostClient from './AiAgentsPostClient';
import { translations, type Lang } from '../../i18n';

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
      title: 'Agenci AI w 2026: Automatyzacja biznesowa | InoxieSoft',
      description: 'Jak agenci AI rewolucjonizują automatyzację biznesową w 2026? Analiza 30+ wdrożeń w Polsce. Case studies, statystyki i roadmap wdrożenia.',
    },
    en: {
      title: 'AI Agents in 2026: Revolutionizing Business Automation | InoxieSoft',
      description: 'How are AI agents revolutionizing business automation in 2026? Analysis of 30+ implementations in Poland. Case studies, statistics, and implementation roadmap.',
    },
  };
  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/ai-agents-post',
        'en': 'https://inoxiesoft.com/en/ai-agents-post',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang as Lang];
  return <AiAgentsPostClient t={t} lang={lang as Lang} />;
}
