import { blogTranslations, type Lang } from '../../../i18n';
import { getBlogPostBySlug, getRelatedPosts, type BlogPost } from '../../../i18n/blog-posts';
import BlogPostClient from './BlogPostClient';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ lang: Lang; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = [
    'ai-agents-2026-business-automation',
    'llm-integration-guide-polish-companies',
    'ai-roi-polish-enterprises-2026',
    'agenci-ai-2026-automatyzacja-biznesowa',
    'integracja-llm-przewodnik-polskie-firmy',
    'roi-ai-polskie-przedsiebiorstwa-2026',
  ];
  
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug, lang);
  
  if (!post) {
    return {
      title: 'Blog | InoxieSoft',
    };
  }
  
  const t = blogTranslations[lang].seo;
  
  return {
    title: `${post.title} | ${t.title}`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    publishedTime: post.date,
    modifiedTime: post.date,
    alternates: {
      languages: {
        'pl': `https://inoxiesoft.com/pl/blog/${slug}`,
        'en': `https://inoxiesoft.com/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug, lang);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(slug, lang, 2);
  const t = blogTranslations[lang].blog;
  
  return (
    <BlogPostClient 
      post={post} 
      relatedPosts={relatedPosts} 
      t={t} 
      lang={lang} 
    />
  );
}
