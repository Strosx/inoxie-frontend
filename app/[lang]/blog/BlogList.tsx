'use client';

import Link from 'next/link';
import { type BlogPost } from '../../i18n/blog-posts';
import type { Lang } from '../../i18n';

interface BlogListProps {
  posts: BlogPost[];
  t: {
    title: string;
    subtitle: string;
    readMore: string;
    published: string;
    author: string;
    minRead: string;
  };
  lang: Lang;
}

export default function BlogList({ posts, t, lang }: BlogListProps) {
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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl text-slate-300">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-200 flex flex-col"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-800 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                    <Link 
                      href={`/${lang}/blog/${post.slug}`}
                      className="hover:text-amber-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-slate-600 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-stone-100">
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
                      <span>{post.readingTime} {t.minRead}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link 
                    href={`/${lang}/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  >
                    {t.readMore}
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
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {lang === 'pl' ? 'Gotowy na transformację AI?' : 'Ready for AI Transformation?'}
          </h2>
          <p className="text-slate-300 mb-8">
            {lang === 'pl' 
              ? 'Skontaktuj się z nami, aby omówić, jak AI może pomóc Twojemu biznesowi.'
              : 'Contact us to discuss how AI can help your business.'}
          </p>
          <Link 
            href={`/${lang}/contact`}
            className="inline-block px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
          >
            {lang === 'pl' ? 'Kontakt' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </div>
  );
}
