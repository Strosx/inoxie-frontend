'use client';

import Link from 'next/link';
import { type BlogPost } from '../../../i18n/blog-posts';
import type { Lang } from '../../../i18n';

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  t: {
    backToBlog: string;
    published: string;
    author: string;
    minRead: string;
    relatedPosts: string;
    share: string;
  };
  lang: Lang;
}

// Simple markdown to HTML converter for blog content
function parseMarkdown(content: string): string {
  let html = content;
  
  // Headers
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-slate-800 mt-8 mb-4">$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-slate-800 mt-10 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-slate-800 mt-10 mb-4">$1</h1>');
  
  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Lists
  html = html.replace(/^- (.*$)/gm, '<li class="ml-4 mb-2">$1</li>');
  html = html.replace(/(<li.*>[\s\S]*?<\/li>)/, '<ul class="mb-6">$1</ul>');
  html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-2 list-decimal">$1</li>');
  
  // Numbered lists
  html = html.replace(/(<li class="ml-4 mb-2 list-decimal">[\s\S]*?<\/li>)/, '<ol class="mb-6">$1</ol>');
  
  // Tables (basic support)
  html = html.replace(/\| (.*) \|/g, (match) => {
    const cells = match.split('|').filter(c => c.trim());
    if (cells.some(c => c.includes('---'))) return '';
    const row = cells.map(c => `<td class="border border-stone-300 px-4 py-2">${c.trim()}</td>`).join('');
    return `<tr>${row}</tr>`;
  });
  html = html.replace(/(<tr>[\s\S]*?<\/tr>)/, '<table class="w-full mb-6 border-collapse"><tbody>$1</tbody></table>');
  
  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-x mb-6"><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm">$1</code>');
  
  // Blockquotes
  html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-600 my-6">$1</blockquote>');
  
  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-stone-300" />');
  
  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p class="mb-4">');
  html = '<p class="mb-4">' + html + '</p>';
  
  // Clean up empty paragraphs
  html = html.replace(/<p class="mb-4"><\/p>/g, '');
  html = html.replace(/<p class="mb-4"><h/g, '<h');
  html = html.replace(/<\/h.*><\/p>/g, '</h2>');
  html = html.replace(/<p class="mb-4"><ul/g, '<ul');
  html = html.replace(/<\/ul><\/p>/g, '</ul>');
  html = html.replace(/<p class="mb-4"><table/g, '<table');
  html = html.replace(/<\/table><\/p>/g, '</table>');
  html = html.replace(/<p class="mb-4"><blockquote/g, '<blockquote');
  html = html.replace(/<\/blockquote><\/p>/g, '</blockquote>');
  html = html.replace(/<p class="mb-4"><pre/g, '<pre');
  html = html.replace(/<\/pre><\/p>/g, '</pre>');
  html = html.replace(/<p class="mb-4"><hr/g, '<hr');
  html = html.replace(/<hr.*><\/p>/g, '</hr>');
  
  return html;
}

export default function BlogPostClient({ post, relatedPosts, t, lang }: BlogPostClientProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const contentHtml = parseMarkdown(post.content);

  // Schema.org structured data for EEAT
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "description": post.authorBio
    },
    "publisher": {
      "@type": "Organization",
      "name": "InoxieSoft",
      "logo": {
        "@type": "ImageObject",
        "url": "https://inoxiesoft.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://inoxiesoft.com/${lang}/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(', '),
    "wordCount": post.content.split(/\s+/).length,
    "inLanguage": lang === 'pl' ? 'pl' : 'en',
    "isAccessibleForFree": true,
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-stone-200 py-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href={`/${lang}`} className="hover:text-amber-600">
                {lang === 'pl' ? 'Start' : 'Home'}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/${lang}/blog`} className="hover:text-amber-600">
                {t.backToBlog}
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 truncate max-w-[200px]">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="bg-white py-12 border-b border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Category */}
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-800 rounded-full mb-4">
            {post.category}
          </span>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            {post.title}
          </h1>
          
          {/* Excerpt */}
          <p className="text-xl text-slate-600 mb-8">
            {post.excerpt}
          </p>
          
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{t.published}: {formatDate(post.date)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{t.author}: {post.author}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readingTime} {t.minRead}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-slate-800
              prose-p:text-slate-600
              prose-a:text-amber-600
              prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-800
              prose-code:text-slate-800 prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-slate-800 prose-pre:text-slate-100
              prose-blockquote:border-l-amber-500 prose-blockquote:bg-stone-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
              prose-li:text-slate-600
              prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
              prose-table:w-full prose-table:border-collapse
              prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold
              prose-td:p-3 prose-td:border prose-td:border-stone-200"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          
          {/* Author Bio Box */}
          <div className="mt-12 p-6 bg-stone-100 rounded-xl border border-stone-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">{t.author}: {post.author}</h3>
                <p className="text-slate-600">{post.authorBio}</p>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-stone-100 text-slate-600 text-sm rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-stone-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">{t.relatedPosts}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost.slug} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold text-amber-600">{relatedPost.category}</span>
                  <h3 className="text-lg font-bold text-slate-800 mt-2 mb-2">
                    <Link href={`/${lang}/blog/${relatedPost.slug}`} className="hover:text-amber-600">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                  <Link 
                    href={`/${lang}/blog/${relatedPost.slug}`}
                    className="text-amber-600 font-semibold text-sm hover:text-amber-700"
                  >
                    {t.backToBlog} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {lang === 'pl' ? 'Gotowy na transformację AI?' : 'Ready for AI Transformation?'}
          </h2>
          <p className="text-slate-300 mb-6">
            {lang === 'pl' 
              ? 'Skontaktuj się z nami, aby omówić wdrożenie AI w Twojej firmie.'
              : 'Contact us to discuss AI implementation for your business.'}
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
