import AiReadinessChecklistClient from './AiReadinessChecklistClient';
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
      title: 'AI Readiness Checklist 2026: Czy Twoja firma jest gotowa na transformację AI? | InoxieSoft',
      description: 'Praktyczny 10-punktowy checklist gotowości AI dla polskich firm MŚP na 2026. Sprawdź, czy Twoja firma powinna inwestować w AI i od czego zacząć.',
    },
    en: {
      title: 'AI Readiness Checklist 2026: Is Your Business Ready for AI Transformation? | InoxieSoft',
      description: 'Practical 10-point AI readiness checklist for Polish SMBs in 2026. Check if your company should invest in AI and where to start.',
    },
  };
  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/ai-readiness-checklist-post',
        'en': 'https://inoxiesoft.com/en/ai-readiness-checklist-post',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <AiReadinessChecklistClient lang={lang as Lang} />;
}
