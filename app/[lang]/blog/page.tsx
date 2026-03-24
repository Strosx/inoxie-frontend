import { type Lang } from '../../i18n';
import { getBlogPosts, type BlogPost } from '../../i18n/blog-posts';
import BlogList from './BlogList';

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
      title: 'Blog | InoxieSoft - Automatyzacja AI i Oprogramowanie',
      description: 'Poznaj najnowsze trendy w AI i automatyzacji biznesowej. Artykuły o agentach AI, integracji LLM i ROI sztucznej inteligencji.',
    },
    en: {
      title: 'Blog | InoxieSoft - AI Automation and Software',
      description: 'Discover the latest trends in AI and business automation. Articles about AI agents, LLM integration and artificial intelligence ROI.',
    },
  };

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      languages: {
        'pl': 'https://inoxiesoft.com/pl/blog',
        'en': 'https://inoxiesoft.com/en/blog',
      },
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { lang } = await params;
  const posts = getBlogPosts(lang);
  
  return <BlogList posts={posts} lang={lang} />;
}
