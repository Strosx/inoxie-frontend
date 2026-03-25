import KsefAiPostClient from './KsefAiPostClient';
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
      title: 'KSeF + AI: Jak Polskie Firmy Automatyzują Obowiązkową Elektronizację Fakturowania w 2026 | InoxieSoft',
      description: 'KSeF obowiązkowy od 2026. Sprawdź, jak AI automatyzuje fakturowanie i oszczędza 60% kosztów. Praktyczny przewodnik dla firm MŚP.',
    },
    en: {
      title: 'KSeF + AI: How Polish Companies Are Automating Mandatory E-Invoicing in 2026 | InoxieSoft',
      description: 'KSeF mandatory from 2026. See how AI automates invoicing and saves 60% costs. Practical guide for SMBs.',
    },
  };
  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/ksef-ai-automation-post',
        'en': 'https://inoxiesoft.com/en/ksef-ai-automation-post',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <KsefAiPostClient lang={lang as Lang} />;
}
