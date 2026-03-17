'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type BlogPost } from '../../../i18n/blog-posts';
import type { Lang } from '../../../i18n';
import { translations, type Translations } from '../../../i18n';

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
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-stone-900 mt-8 mb-4">$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-stone-900 mt-10 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-stone-900 mt-10 mb-4">$1</h1>');
  
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
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-stone-800 text-stone-100 p-4 rounded-lg overflow-x mb-6"><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code class="bg-stone-100 text-stone-800 px-1 py-0.5 rounded text-sm">$1</code>');
  
  // Blockquotes
  html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-accent pl-4 italic text-stone-600 my-6">$1</blockquote>');
  
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

// Language Switcher Component
function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'pl' as Lang, name: 'Polski', flag: 'poland' },
    { code: 'en' as Lang, name: 'English', flag: 'uk' },
  ];
  
  const current = languages.find(l => l.code === currentLang) || languages[0];
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-stone-600 hover:text-accent transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-stone-50"
      >
        {current.flag === 'poland' ? (
          <svg className="w-5 h-4" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="12" rx="1" fill="white"/>
            <path d="M0 0H16V6H0V0Z" fill="white"/>
            <path d="M0 6H16V12H0V6Z" fill="#DC143C"/>
          </svg>
        ) : (
          <svg className="w-5 h-4" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="12" rx="1" fill="#012169"/>
            <path d="M0 12L16 0M0 0L16 12" stroke="white" strokeWidth="1.5"/>
            <path d="M8 0V12M0 6H16" stroke="white" strokeWidth="1.5"/>
            <path d="M0 0L16 12M16 0L0 12" stroke="#C8102E" strokeWidth="1"/>
            <path d="M8 0V12M0 6H16" stroke="#C8102E" strokeWidth="1"/>
          </svg>
        )}
        <span className="hidden sm:inline">{current.name}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-stone-200 py-2 min-w-[160px] z-50">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={lang.code === 'pl' ? `/pl/blog` : `/en/blog`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-stone-50 ${currentLang === lang.code ? 'text-accent font-medium bg-accent/5' : 'text-stone-600'}`}
            >
              {lang.flag === 'poland' ? (
                <svg className="w-5 h-4" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="12" rx="1" fill="white"/>
                  <path d="M0 0H16V6H0V0Z" fill="white"/>
                  <path d="M0 6H16V12H0V6Z" fill="#DC143C"/>
                </svg>
              ) : (
                <svg className="w-5 h-4" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="12" rx="1" fill="#012169"/>
                  <path d="M0 12L16 0M0 0L16 12" stroke="white" strokeWidth="1.5"/>
                  <path d="M8 0V12M0 6H16" stroke="white" strokeWidth="1.5"/>
                  <path d="M0 0L16 12M16 0L0 12" stroke="#C8102E" strokeWidth="1"/>
                  <path d="M8 0V12M0 6H16" stroke="#C8102E" strokeWidth="1"/>
                </svg>
              )}
              <span>{lang.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// Navigation Component
function Navbar({ t, lang }: { t: Translations; lang: Lang }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: `/${lang === 'pl' ? 'pl' : 'en'}`, label: t.nav.start },
    { href: `/${lang}/offer`, label: t.nav.oferta },
    { href: `/${lang}/blog`, label: t.nav.blog },
    { href: `/${lang}/about-us`, label: t.nav.oNas },
    { href: `/${lang}/contact`, label: t.nav.kontakt },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
              <rect width="32" height="32" rx="6" className="fill-current text-accent"/>
              <path d="M8 10h6v12H8V10z" fill="white"/>
              <path d="M16 10h8v4h-8v-4z" fill="white"/>
              <path d="M16 16h8v6h-8v-6z" fill="white"/>
            </svg>
            <span className="text-xl font-bold text-accent">InoxieSoft</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher currentLang={lang} />
          </div>

          <div className="hidden md:block">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent text-white px-5 py-2 rounded-lg font-medium hover:bg-accent-hover transition-colors"
            >
              {t.nav.darmowaKonsultacja}
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-xl">{isOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-stone-600 hover:text-accent py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="py-2">
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      )}
    </nav>
  );
}

// Footer Component
function Footer({ t, lang }: { t: Translations; lang: Lang }) {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <rect width="32" height="32" rx="6" className="fill-current text-accent"/>
                <path d="M8 10h6v12H8V10z" fill="white"/>
                <path d="M16 10h8v4h-8v-4z" fill="white"/>
                <path d="M16 16h8v6h-8v-6z" fill="white"/>
              </svg>
              <span className="text-xl font-bold text-accent">InoxieSoft</span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-md">{t.footer.description}</p>
            <div className="mb-6">
              <p className="text-stone-500 text-sm mb-2">{t.footer.industries}:</p>
              <div className="flex flex-wrap gap-2">
                {t.footer.industriesList.map((industry) => (
                  <span key={industry} className="text-stone-400 text-sm">{industry}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-stone-400 text-sm">
              <p>{t.footer.email}</p>
              <p>{t.footer.phone}</p>
              <p>{t.footer.location}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2">
              {t.footer.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-stone-400 hover:text-accent text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.companyTitle}</h4>
            <ul className="space-y-2">
              {t.footer.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-stone-400 hover:text-accent text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} InoxieSoft. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default function BlogPostClient({ post, relatedPosts, t, lang }: BlogPostClientProps) {
  const pageTranslations = translations[lang];
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const contentHtml = parseMarkdown(post.content);

  // Schema.org structured data for EEat
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
    <>
      <Navbar t={pageTranslations} lang={lang} />
      <main className="pt-16">
        <div className="min-h-screen bg-stone-50">
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          {/* Breadcrumb */}
          <nav className="bg-white border-b border-stone-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ol className="flex items-center gap-2 text-sm text-stone-500">
                <li>
                  <Link href={`/${lang}`} className="hover:text-accent">
                    {lang === 'pl' ? 'Start' : 'Home'}
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href={`/${lang}/blog`} className="hover:text-accent">
                    {t.backToBlog}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-stone-900 truncate max-w-[200px]">{post.title}</li>
              </ol>
            </div>
          </nav>

          {/* Article Header */}
          <header className="bg-white py-12 lg:py-16 border-b border-stone-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category */}
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full mb-4">
                {post.category}
              </span>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
                {post.title}
              </h1>
              
              {/* Excerpt */}
              <p className="text-xl text-stone-600 mb-8">
                {post.excerpt}
              </p>
              
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-stone-500">
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
          <article className="bg-white py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-stone-900
                  prose-p:text-stone-600
                  prose-a:text-accent
                  prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-stone-900
                  prose-code:text-stone-800 prose-code:bg-stone-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-stone-800 prose-pre:text-stone-100
                  prose-blockquote:border-l-accent prose-blockquote:bg-stone-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
                  prose-li:text-stone-600
                  prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                  prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                  prose-table:w-full prose-table:border-collapse
                  prose-th:bg-stone-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold
                  prose-td:p-3 prose-td:border prose-td:border-stone-200"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
              
              {/* Author Bio Box */}
              <div className="mt-12 p-6 bg-stone-50 rounded-xl border border-stone-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg mb-1">{t.author}: {post.author}</h3>
                    <p className="text-stone-600">{post.authorBio}</p>
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-12 lg:py-16 bg-stone-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-8">{t.relatedPosts}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <article key={relatedPost.slug} className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-accent/30 hover:shadow-lg transition-all">
                      <span className="text-xs font-semibold text-accent">{relatedPost.category}</span>
                      <h3 className="text-lg font-bold text-stone-900 mt-2 mb-2">
                        <Link href={`/${lang}/blog/${relatedPost.slug}`} className="hover:text-accent">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-stone-600 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                      <Link 
                        href={`/${lang}/blog/${relatedPost.slug}`}
                        className="text-accent font-semibold text-sm hover:text-accent-hover"
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
          <section className="py-12 lg:py-16 bg-stone-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {lang === 'pl' ? 'Gotowy na transformację AI?' : 'Ready for AI Transformation?'}
              </h2>
              <p className="text-lg text-stone-400 mb-6 max-w-xl mx-auto">
                {lang === 'pl' 
                  ? 'Skontaktuj się z nami, aby omówić wdrożenie AI w Twojej firmie.'
                  : 'Contact us to discuss AI implementation for your business.'}
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
      </main>
      <Footer t={pageTranslations} lang={lang} />
    </>
  );
}
