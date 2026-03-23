import { translations, type Lang } from '../i18n';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'pl' }, { lang: 'en' }];
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const t = translations[lang as Lang];

  return (
    <>
      <Navbar t={t} lang={lang as Lang} />
      <main className="pt-16">
        {children}
      </main>
      <Footer t={t} lang={lang as Lang} />
    </>
  );
}