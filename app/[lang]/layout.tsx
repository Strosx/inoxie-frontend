import { NextIntlClientProvider } from "next-intl";
import { type Lang } from "../i18n";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { OrganizationJsonLd } from "./OrganizationJsonLd";
import { LangUpdater } from "./LangUpdater";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: "pl" }, { lang: "en" }];
}

export async function generateMetadata({ params }: LayoutProps) {
  const { lang } = await params;

  const meta = {
    pl: {
      title: 'InoxieSoft | Automatyzacja AI + Oprogramowanie na Zamówienie',
      description: 'InoxieSoft — automatyzacja AI i oprogramowanie na zamówienie dla MŚP. Tworzymy strony www, aplikacje SaaS, chatboty i systemy backendowe. Wrocław, Polska.',
    },
    en: {
      title: 'InoxieSoft | AI Automation + Custom Software Development',
      description: 'InoxieSoft — AI automation and custom software development for SMBs. We build websites, SaaS applications, chatbots and backend systems.',
    },
  };

  return {
    title: meta[lang as Lang].title,
    description: meta[lang as Lang].description,
    alternates: {
      canonical: "https://inoxiesoft.com/pl",
      languages: {
        pl: "https://inoxiesoft.com/pl",
        en: "https://inoxiesoft.com/en",
      },
    },
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const messages = (await import(`../../messages/${lang}.json`)).default;

  return (
    <>
      <NextIntlClientProvider locale={lang} messages={messages}>
        <LangUpdater lang={lang} />
        <OrganizationJsonLd lang={lang as Lang} />
        <Navbar lang={lang as Lang} />
        <main className="pt-16">
          {children}
        </main>
        <Footer lang={lang as Lang} />
      </NextIntlClientProvider>
    </>
  );
}
