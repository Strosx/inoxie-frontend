import { blogTranslations, type Lang } from '../../i18n';
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
  const t = blogTranslations[lang].seo;
  
  return {
    title: t.title,
    description: t.description,
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
  const t = blogTranslations[lang].blog;
  
  return <BlogList posts={posts} t={t} lang={lang} />;
}
