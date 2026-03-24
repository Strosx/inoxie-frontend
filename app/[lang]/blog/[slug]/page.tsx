import { type Lang } from '../../../i18n';
import { getBlogPostBySlug, getRelatedPosts, type BlogPost } from '../../../i18n/blog-posts';
import BlogPostClient from './BlogPostClient';
import { notFound, redirect } from 'next/navigation';

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
  
  return slugs.flatMap(slug => [
    { lang: 'pl', slug },
    { lang: 'en', slug },
  ]);
}

export async function generateMetadata({ params }: PageProps) {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug, lang);
  
  const meta = {
    pl: { blogTitle: 'Blog | InoxieSoft' },
    en: { blogTitle: 'Blog | InoxieSoft' },
  };
  
  if (!post) {
    return {
      title: meta[lang].blogTitle,
    };
  }
  
  return {
    title: `${post.title} | InoxieSoft Blog`,
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

// Slugs that have dedicated pages → redirect to dedicated URL
// ONLY includes slugs where dedicated page actually EXISTS
const slugToDedicatedPage: Record<string, string> = {
  'roi-ai-polskie-przedsiebiorstwa-2026': 'roi-ai-post',
  'ai-roi-polish-enterprises-2026': 'roi-ai-post',
  'agenci-ai-2026-automatyzacja-biznesowa': 'ai-agents-post',
  'integracja-llm-przewodnik-polskie-firmy': 'llm-integration-post',
  'ai-agents-2026-business-automation': 'ai-agents-post',
  'llm-integration-guide-polish-companies': 'llm-integration-post',
};

export default async function BlogPostPage({ params }: PageProps) {
  const { lang, slug } = await params;

  // Redirect old blog slugs to new dedicated pages
  const dedicatedPage = slugToDedicatedPage[slug];
  if (dedicatedPage) {
    redirect(`/${lang}/${dedicatedPage}`);
  }

  const post = getBlogPostBySlug(slug, lang);

  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(slug, lang, 2);
  
  return (
    <BlogPostClient 
      post={post} 
      relatedPosts={relatedPosts} 
      lang={lang} 
    />
  );
}
