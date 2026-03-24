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
      title: 'Strona Internetowa Wrocław | Profesjonalne Strony WWW dla Firm | InoxieSoft',
      description: 'Strona internetowa dla firmy we Wrocławiu — tworzymy profesjonalne strony www, sklepy i landing page. Szybka realizacja, nowoczesny design, SEO w cenie. Sprawdź!',
    },
    en: {
      title: 'Website Development Wrocław | Professional Business Websites | InoxieSoft',
      description: 'Professional website development in Wrocław — we create business websites, e-commerce stores and landing pages. Fast delivery, modern design, SEO included. Check us out!',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/strona-internetowa-wroclaw',
        'en': 'https://inoxiesoft.com/en/strona-internetowa-wroclaw',
      },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return <ServicePageClient lang={lang} />;
}
