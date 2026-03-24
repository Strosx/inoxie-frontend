'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { type BlogPost } from '../../i18n/blog-posts';
import type { Lang } from '../../i18n';

// Mapping from old blog slugs to new dedicated page URLs
// ONLY includes slugs where dedicated page ACTUALLY EXISTS
const slugToDedicatedPage: Record<string, string> = {
  // PL slugs
  'roi-ai-polskie-przedsiebiorstwa-2026': 'roi-ai-post',
  'agenci-ai-2026-automatyzacja-biznesowa': 'ai-agents-post',
  'integracja-llm-przewodnik-polskie-firmy': 'llm-integration-post',
  'ai-readiness-checklist-2026': 'ai-readiness-checklist-post',
  'shadow-ai-2026': 'shadow-ai-post',
  // EN slugs
  'ai-roi-polish-enterprises-2026': 'roi-ai-post',
  'ai-agents-2026-business-automation': 'ai-agents-post',
  'llm-integration-guide-polish-companies': 'llm-integration-post',
  'shadow-ai-hidden-threat-2026': 'shadow-ai-post',
};

function getBlogUrl(slug: string, lang: Lang): string {
  const dedicatedPage = slugToDedicatedPage[slug];
  if (dedicatedPage) {
    return `/${lang}/${dedicatedPage}`;
  }
  return `/${lang}/blog/${slug}`;
}

interface BlogListProps {
  posts: BlogPost[];
  lang: Lang;
}

// Get image based on category
function getCategoryImage(category: string): string {
  const images: Record<string, string> = {
    'AI Agents': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    'Agenci AI': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    'AI Integration': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    'Integracja AI': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    'Business AI': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'AI w biznesie': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  };
  return images[category] || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80';
}

export default function BlogList({ posts, lang }: BlogListProps) {
  const t = useTranslations('blog');
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-stone-900 via-stone-800 to-accent/20" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
                <p className="text-xl text-stone-300">{t('subtitle')}</p>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article 
                    key={post.slug} 
                    className="bg-stone-50 rounded-2xl border border-stone-200 hover:border-accent/30 hover:shadow-lg transition-all overflow-hidden flex flex-col"
                  >
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={getCategoryImage(post.category)}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-4 left-4 inline-block px-3 py-1 text-xs font-semibold bg-accent text-white rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-stone-900 mb-3 line-clamp-2">
                        <Link 
                          href={getBlogUrl(post.slug, lang)}
                          className="hover:text-accent transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-stone-600 mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-stone-500 pt-4 border-t border-stone-200">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{post.readingTime} {t('minRead')}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <Link 
                        href={getBlogUrl(post.slug, lang)}
                        className="mt-4 inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors"
                      >
                        {t('readMore')}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-20 bg-stone-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {lang === 'pl' ? 'Gotowy na transformację AI?' : 'Ready for AI Transformation?'}
              </h2>
              <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
                {lang === 'pl' 
                  ? 'Skontaktuj się z nami, aby omówić, jak AI może pomóc Twojemu biznesowi.'
                  : 'Contact us to discuss how AI can help your business.'}
              </p>
              <Link 
                href={`/${lang}/contact`}
                className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {lang === 'pl' ? 'Kontakt' : 'Contact Us'}
              </Link>
            </div>
          </section>
    </div>
  );
}
