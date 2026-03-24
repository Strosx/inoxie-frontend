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
      title: 'AI dla Firm | Sztuczna Inteligencja w Biznesie | InoxieSoft',
      description: 'AI dla firm MŚP — wdrażamy sztuczną inteligencję, która automatyzuje procesy, oszczędza czas i zwiększa przychody. Agenci AI, chatboty, LLM. Darmowa konsultacja!',
    },
    en: {
      title: 'AI for Business | Artificial Intelligence in Business | InoxieSoft',
      description: 'AI for SMBs — we implement artificial intelligence that automates processes, saves time and increases revenue. AI agents, chatbots, LLM. Free consultation!',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/ai-dla-firm',
        'en': 'https://inoxiesoft.com/en/ai-dla-firm',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return <ServicePageClient lang={lang} />;
}
