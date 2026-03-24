import RoiAiPostClient from './RoiAiPostClient';
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
      title: 'ROI AI dla firm MŚP 2026 | Kalkulacja i Statystyki | InoxieSoft',
      description: 'Ile wynosi zwrot z inwestycji AI w firmach MŚP? Analiza 47 firm, 12 branż. Średni ROI 220-340%. Case studies, metodologia, kalkulator ROI.',
    },
    en: {
      title: 'AI ROI for SMBs 2026 | Calculation and Statistics | InoxieSoft',
      description: 'What is the return on investment for AI in SMBs? Analysis of 47 companies, 12 industries. Average ROI 220-340%. Case studies, methodology, ROI calculator.',
    },
  };
  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/roi-ai-post',
        'en': 'https://inoxiesoft.com/en/roi-ai-post',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = translations[lang as Lang];
  return <RoiAiPostClient t={t} lang={lang as Lang} />;
}
