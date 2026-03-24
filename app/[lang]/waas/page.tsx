import { type Lang } from '../../i18n';
import WAASPageClient from './WAASPageClient';

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
      title: 'Website as a Service | InoxieSoft',
      description: 'Kompletna strona www dla Twojej firmy za miesięczną opłatą. Bez ukrytych kosztów, bez długoterminowych zobowiązań.',
    },
    en: {
      title: 'Website as a Service | InoxieSoft',
      description: 'A complete website for your business for a monthly fee. No hidden costs, no long-term commitments.',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/waas',
        'en': 'https://inoxiesoft.com/en/waas',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  
  return <WAASPageClient lang={lang} />;
}
