'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Lang } from '../i18n';
import FeaturedBlogs from '../components/FeaturedBlogs';

type Translations = typeof import('../i18n/pl').pl;

interface HomeContentProps {
  t: Translations;
  lang: Lang;
}

// SVG Flag Components
function PolandFlag({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="12" rx="1" fill="white"/>
      <path d="M0 0H16V6H0V0Z" fill="white"/>
      <path d="M0 6H16V12H0V6Z" fill="#DC143C"/>
    </svg>
  );
}

function UKFlag({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="12" rx="1" fill="#012169"/>
      <path d="M0 12L16 0M0 0L16 12" stroke="white" strokeWidth="1.5"/>
      <path d="M8 0V12M0 6H16" stroke="white" strokeWidth="1.5"/>
      <path d="M0 0L16 12M16 0L0 12" stroke="#C8102E" strokeWidth="1"/>
      <path d="M8 0V12M0 6H16" stroke="#C8102E" strokeWidth="1"/>
    </svg>
  );
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
        {current.flag === 'poland' ? <PolandFlag className="w-5 h-4 rounded-sm" /> : <UKFlag className="w-5 h-4 rounded-sm" />}
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
              href={lang.code === 'pl' ? '/' : `/${lang.code}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-stone-50 ${currentLang === lang.code ? 'text-accent font-medium bg-accent/5' : 'text-stone-600'}`}
            >
              {lang.flag === 'poland' ? <PolandFlag className="w-5 h-4 rounded-sm" /> : <UKFlag className="w-5 h-4 rounded-sm" />}
              <span>{lang.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// Navigation Component with Language Switcher
function Navbar({ t, lang }: { t: Translations; lang: Lang }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: `/${lang === 'pl' ? '' : lang + '/'}`, label: t.nav.start },
    { href: `/${lang === 'pl' ? 'offer' : 'en/offer'}`, label: t.nav.oferta },
    { href: `/${lang === 'pl' ? 'blog' : 'en/blog'}`, label: t.nav.blog },
    { href: `/${lang === 'pl' ? 'about-us' : 'en/about-us'}`, label: t.nav.oNas },
    { href: `/${lang === 'pl' ? 'contact' : 'en/contact'}`, label: t.nav.kontakt },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang === 'pl' ? '' : lang}`} className="flex items-center gap-2">
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
              href={`/${lang === 'pl' ? 'contact' : 'en/contact'}`}
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

// Hero Section
function Hero({ t }: { t: Translations }) {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-stone-50 via-white to-accent/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-accent-light text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight"
            >
              {t.hero.headline}
              <span className="text-accent">{t.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-stone-600 mb-8 max-w-xl"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25 text-center"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="/offer"
                className="bg-white text-stone-900 px-8 py-4 rounded-xl font-semibold hover:bg-stone-50 transition-colors text-center border border-stone-200"
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 text-sm text-stone-500"
            >
              <div className="flex items-center gap-2">
                <span>{t.hero.projects}</span>
              </div>
              <span>•</span>
              <span>⭐ {t.hero.rating}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
                alt="InoxieSoft AI Developer - Automatyzacja procesów biznesowych z wykorzystaniem sztucznej inteligencji"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services({ t }: { t: Translations }) {
  return (
    <section className="py-20 lg:py-28 bg-white" id="oferta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.services.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-accent/30 transition-colors"
            >
              <span className="text-6xl font-light text-accent/30">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-bold text-stone-900 mb-3 mt-4">{service.title}</h3>
              <p className="text-stone-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-stone-500">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/offer" className="text-accent font-medium hover:text-accent-hover">
                {t.services.learnMore}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-stone-600 mb-4">{t.services.ctaTitle}</p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-hover"
          >
            {t.services.ctaButton}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// AI Automation Section
function AIAutomation({ t }: { t: Translations }) {
  return (
    <section className="py-20 lg:py-28 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.aiAutomation.title}</h2>
          <p className="text-lg text-stone-400 max-w-xl mx-auto">{t.aiAutomation.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {t.aiAutomation.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-stone-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.aiAutomation.automations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-800 rounded-2xl p-6 hover:bg-stone-700 border border-transparent hover:border-accent/30 transition-all"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-stone-400 text-sm mb-4">{item.description}</p>
              <div className="text-accent text-sm">→ {item.useCase}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/contact" className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-hover">
            {t.aiAutomation.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs({ t }: { t: Translations }) {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">{t.whyChooseUs.title}</h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">{t.whyChooseUs.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.whyChooseUs.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-stone-900 mb-2">{benefit.title}</h3>
              <p className="text-stone-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">{t.whyChooseUs.testimonials.title}</h3>
            <p className="text-accent font-medium">{t.whyChooseUs.testimonials.rating}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.whyChooseUs.testimonials.quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-stone-200"
              >
                <p className="text-stone-700 mb-6">"{quote.quote}"</p>
                <div>
                  <p className="font-semibold text-stone-900">{quote.author}</p>
                  <p className="text-sm text-stone-500">{quote.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-stone-200"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {t.whyChooseUs.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-stone-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ({ t }: { t: Translations }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ Schema for Rich Snippets
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.questions.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="faq">
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">{t.faq.title}</h2>
          <p className="text-lg text-stone-600">{t.faq.subtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {t.faq.questions.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between"
              >
                <span className="font-medium text-stone-900">{faq.question}</span>
                <span className="text-accent text-xl font-bold ml-4">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-stone-600">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-stone-600 mb-4">{t.faq.ctaTitle}</p>
          <Link href="/contact" className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-hover">
            {t.faq.ctaButton}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Component
function Footer({ t, lang }: { t: Translations; lang: Lang }) {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${lang === 'pl' ? '' : lang}`} className="flex items-center gap-2 mb-4">
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

// Main HomeContent Component
export default function HomeContent({ t, lang }: HomeContentProps) {
  return (
    <>
      <Hero t={t} />
      <Services t={t} />
      <AIAutomation t={t} />
      <FeaturedBlogs t={t} lang={lang} />
      <WhyChooseUs t={t} />
      <FAQ t={t} />
    </>
  );
}
