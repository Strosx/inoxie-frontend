'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { Lang } from '../../i18n';
import { translations } from '../../i18n';

// Simple text-based icons (no Lucide)
function MenuIcon() {
  return <span className="text-xl">☰</span>;
}

function CloseIcon() {
  return <span className="text-xl">×</span>;
}

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

function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'pl', name: 'Polski', flag: 'poland' },
    { code: 'en', name: 'English', flag: 'uk' },
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
              href={lang.code === 'pl' ? '/kontakt' : '/en/kontakt'}
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

function Navbar({ lang }: { lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang as Lang].nav;
  
  const navLinks = [
    { href: lang === 'pl' ? '/' : '/en', label: t.start },
    { href: lang === 'pl' ? '/oferta' : '/en/oferta', label: t.oferta },
    { href: lang === 'pl' ? '/about-us' : '/en/about-us', label: t.oNas },
    { href: lang === 'pl' ? '/kontakt' : '/en/kontakt', label: t.kontakt },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={lang === 'pl' ? '/' : '/en'} className="flex items-center gap-2">
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
              href={lang === 'pl' ? '/kontakt' : '/en/kontakt'}
              className="bg-accent text-white px-5 py-2 rounded-lg font-medium hover:bg-accent-hover transition-colors"
            >
              {t.darmowaKonsultacja}
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
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

function Footer({ lang }: { lang: string }) {
  const t = translations[lang as Lang].footer;
  
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href={lang === 'pl' ? '/' : '/en'} className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <rect width="32" height="32" rx="6" className="fill-current text-accent"/>
                <path d="M8 10h6v12H8V10z" fill="white"/>
                <path d="M16 10h8v4h-8v-4z" fill="white"/>
                <path d="M16 16h8v6h-8v-6z" fill="white"/>
              </svg>
              <span className="text-xl font-bold text-accent">InoxieSoft</span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-md">
              {t.description}
            </p>
            <div className="mb-6">
              <p className="text-stone-500 text-sm mb-2">{t.industries}:</p>
              <div className="flex flex-wrap gap-2">
                {t.industriesList.map((industry: string) => (
                  <span key={industry} className="text-stone-400 text-sm">{industry}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-stone-400 text-sm">
              <p>{t.email}</p>
              <p>{t.phone}</p>
              <p>{t.location}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.servicesTitle}</h4>
            <ul className="space-y-2">
              {t.services.map((service: { label: string; href: string }) => (
                <li key={service.href}><Link href={service.href} className="text-stone-400 hover:text-accent text-sm">{service.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.companyTitle}</h4>
            <ul className="space-y-2">
              {t.company.map((item: { label: string; href: string }) => (
                <li key={item.href}><Link href={item.href} className="text-stone-400 hover:text-accent text-sm">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} InoxieSoft. {t.copyright}</p>
          {t.nip && <p className="mt-1">{t.nip}</p>}
          {t.owner && <p className="mt-1">{t.owner}</p>}
        </div>
      </div>
    </footer>
  );
}

const citiesEN = ['Warsaw', 'Krakow', 'Wroclaw', 'Poznan', 'Gdansk', 'Lodz'];
const citiesPL = ['Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Gdańsk', 'Łódź'];

interface ContactContentProps {
  t: typeof translations.pl;
  lang: string;
}

export default function ContactContent({ t, lang }: ContactContentProps) {
  const cities = lang === 'pl' ? citiesPL : citiesEN;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navbar lang={lang} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-stone-50 via-white to-accent/5" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-accent-light text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                {t.contact.title}
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
                {t.contact.subtitle}
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
                {t.contact.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-stone-900 mb-6">
                  {t.contact.info.title}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-xl">✉</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{t.contact.info.email}</h3>
                      <a href={`mailto:${t.footer.email}`} className="text-stone-600 hover:text-accent">
                        {t.footer.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{t.contact.info.phone}</h3>
                      <a href={`tel:${t.footer.phone.replace(/\s/g, '')}`} className="text-stone-600 hover:text-accent">
                        {t.footer.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{t.contact.info.location}</h3>
                      <p className="text-stone-600">{t.footer.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-stone-50 rounded-xl border border-stone-100">
                  <h3 className="font-semibold text-stone-900 mb-3">{t.contact.info.availability}</h3>
                  <p className="text-stone-600">{lang === 'pl' ? 'Pon - Pt: 9:00 - 18:00' : 'Mon - Fri: 9:00 - 18:00'}</p>
                  <p className="text-stone-500 text-sm mt-2">{lang === 'pl' ? 'Wsparcie dostępne 24/7 dla klientów Enterprise' : '24/7 support available for Enterprise clients'}</p>
                </div>

                <div className="mt-8 p-6 bg-stone-900 rounded-xl">
                  <h3 className="font-semibold text-white mb-3">{lang === 'pl' ? 'Dlaczego warto się skontaktować?' : 'Why contact us?'}</h3>
                  <ul className="space-y-2 text-stone-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {lang === 'pl' ? 'Odpowiadamy w ciągu 24 godzin' : 'We respond within 24 hours'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {lang === 'pl' ? 'Bezpłatna wycena projektu' : 'Free project estimate'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {lang === 'pl' ? 'Doświadczenie: 100+ projektów' : 'Experience: 100+ projects'}
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-green-500 text-2xl">✓</span>
                      </div>
                      <h3 className="text-xl font-semibold text-stone-900 mb-2">
                        {t.contact.form.success}
                      </h3>
                      <p className="text-stone-600">
                        {lang === 'pl' ? 'Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.' : 'Thank you for contacting us. We will respond as soon as possible.'}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                          {t.contact.form.name} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                          placeholder={lang === 'pl' ? 'Jan Kowalski' : 'John Smith'}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                          {t.contact.form.email} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                          placeholder="jan@firma.pl"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                          {t.contact.form.phone}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                          placeholder="+48 123 456 789"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                          {t.contact.form.message} *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none bg-white"
                          placeholder={lang === 'pl' ? 'Opisz swój projekt lub zadaj pytanie...' : 'Describe your project or ask a question...'}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent text-white py-4 rounded-xl font-semibold hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin">⟳</span>
                            {t.contact.form.sending}
                          </>
                        ) : (
                          <>
                            <span>→</span>
                            {t.contact.form.submit}
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Image - EEAT: Local presence */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt={lang === 'pl' ? 'Nasze biuro' : 'Our office'}
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
