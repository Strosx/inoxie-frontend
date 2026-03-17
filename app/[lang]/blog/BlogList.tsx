'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type BlogPost } from '../../i18n/blog-posts';
import type { Lang } from '../../i18n';
import { translations, type Translations } from '../../i18n';

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
              href={lang.code === 'pl' ? '/pl/blog' : '/en/blog'}
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

export default function BlogList({ posts, t, lang }: BlogListProps) {
  const pageTranslations = translations[lang];
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Navbar t={pageTranslations} lang={lang} />
      <main className="pt-16">
        <div className="min-h-screen bg-stone-50">
          {/* Hero Section */}
          <section className="relative bg-stone-900 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-stone-900 via-stone-800 to-accent/20" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
                <p className="text-xl text-stone-300">{t.subtitle}</p>
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
                    {/* Category Badge */}
                    <div className="p-6 pb-0">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-stone-900 mb-3 line-clamp-2">
                        <Link 
                          href={`/${lang}/blog/${post.slug}`}
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
                          <span>{post.readingTime} {t.minRead}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <Link 
                        href={`/${lang}/blog/${post.slug}`}
                        className="mt-4 inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors"
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
      </main>
      <Footer t={pageTranslations} lang={lang} />
    </>
  );
}
