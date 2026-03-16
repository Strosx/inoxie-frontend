'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
              href={lang.code === 'pl' ? '/oferta' : '/en/oferta'}
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
  
  const navLinks = [
    { href: '/', label: 'Start' },
    { href: '/oferta', label: 'Oferta' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
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
              href="/contact"
              className="bg-accent text-white px-5 py-2 rounded-lg font-medium hover:bg-accent-hover transition-colors"
            >
              Darmowa konsultacja
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
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <rect width="32" height="32" rx="6" className="fill-current text-accent"/>
                <path d="M8 10h6v12H8V10z" fill="white"/>
                <path d="M16 10h8v4h-8v-4z" fill="white"/>
                <path d="M16 16h8v6h-8v-6z" fill="white"/>
              </svg>
              <span className="text-xl font-bold text-accent">InoxieSoft</span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-md">
              Tworzymy nowoczesne strony internetowe i rozwiązania AI dla firm. 
              Pomagamy przedsiębiorcom zdobywać nowych klientów.
            </p>
            <div className="mb-6">
              <p className="text-stone-500 text-sm mb-2">Branże:</p>
              <div className="flex flex-wrap gap-2">
                {['Finanse', 'Medycyna', 'E-commerce', 'Usługi', 'Produkcja'].map((industry) => (
                  <span key={industry} className="text-stone-400 text-sm">{industry}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-stone-400 text-sm">
              <p>kontakt@inoxiesoft.com</p>
              <p>+48 XXX XXX XXXX</p>
              <p>Polska</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2">
              <li><Link href="/offer" className="text-stone-400 hover:text-accent text-sm">Strony www</Link></li>
              <li><Link href="/offer" className="text-stone-400 hover:text-accent text-sm">Sklepy internetowe</Link></li>
              <li><Link href="/offer" className="text-stone-400 hover:text-accent text-sm">Pozycjonowanie SEO</Link></li>
              <li><Link href="/offer" className="text-stone-400 hover:text-accent text-sm">Automatyzacja AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Firma</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-stone-400 hover:text-accent text-sm">O nas</Link></li>
              <li><Link href="/contact" className="text-stone-400 hover:text-accent text-sm">Kontakt</Link></li>
              <li><Link href="/cennik" className="text-stone-400 hover:text-accent text-sm">Cennik</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} InoxieSoft. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

const services = [
  {
    title: 'Strony www dla firm',
    description: 'Profesjonalne strony wizytówki, sklepy internetowe, strony z ofertą dopasowane do Twojej branży.',
    features: ['Strony wizytówki', 'Sklepy internetowe', 'Landing pages', 'Portfolia'],
  },
  {
    title: 'Pozycjonowanie SEO',
    description: 'Twoja firma znajduje się wyżej w Google - więcej klientów Cię znajduje.',
    features: ['Optymalizacja treści', 'Szybkość ładowania', 'Mobile-first', 'Linki i cytowania'],
  },
  {
    title: 'Automatyzacja AI',
    description: 'Wykorzystujemy AI do automatyzacji procesów w Twojej firmie. Oszczędzaj czas i pieniądze.',
    features: ['Automatyzacja zadań', 'Integracje z narzędziami', 'Asystenci AI', 'Oszczędność czasu'],
  },
  {
    title: 'Lead Generation',
    description: 'Pomagamy pozyskiwać nowych klientów przez stronę i kampanie marketingowe.',
    features: ['Optymalizacja konwersji', 'Kampanie email', 'SMS marketing', 'CRM integracje'],
  },
];

const cities = ['Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Gdańsk', 'Łódź', 'Katowice', 'Lublin'];

const citySEO = {
  Warszawa: {
    title: 'Strony www Warszawa',
    description: 'Pomagamy firmom z Warszawy budować profesjonalne strony internetowe. Szybka realizacja, konkurencyjne ceny, pełne wsparcie.',
  },
  Kraków: {
    title: 'Strony www Kraków',
    description: 'Tworzymy nowoczesne strony internetowe dla firm z Krakowa. SEO-friendly, szybkie, responsywne.',
  },
  Wrocław: {
    title: 'Strony www Wrocław',
    description: 'Profesjonalne strony www dla firm we Wrocławiu. Kompleksowa obsługa, atrakcyjne ceny.',
  },
  Poznań: {
    title: 'Strony www Poznań',
    description: 'Budujemy strony internetowe dla poznańskich firm. Szybka realizacja, nowoczesny design.',
  },
  Gdańsk: {
    title: 'Strony www Gdańsk',
    description: 'Tworzymy profesjonalne strony dla firm z Gdańska. SEO, hosting, wsparcie techniczne.',
  },
  Łódź: {
    title: 'Strony www Łódź',
    description: 'Strony internetowe dla łódzkich firm. Responsywne, szybkie, zoptymalizowane pod SEO.',
  },
  Katowice: {
    title: 'Strony www Katowice',
    description: 'Pomagamy firmom z Katowic budować profesjonalną obecność w internecie.',
  },
  Lublin: {
    title: 'Strony www Lublin',
    description: 'Tworzymy strony www dla lubelskich firm. Nowoczesne rozwiązania, konkurencyjne ceny.',
  },
};

export default function OfertaPage() {
  return (
    <>
      <Navbar lang="pl" />
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
                Nasze usługi
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
                Profesjonalne strony www dla firm
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
                Tworzymy nowoczesne strony internetowe, które pomagają firmom zdobywać nowych klientów. 
                Szybka realizacja, konkurencyjne ceny, pełne wsparcie.
              </p>
              
              {/* Cities - EEAT: Local presence */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="bg-white border border-stone-200 px-4 py-2 rounded-full text-stone-600 font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* EEAT - Trust Signals */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '5+', label: 'Lat doświadczenia' },
                { value: '100+', label: 'Zrealizowanych projektów' },
                { value: '50+', label: 'Zadowolonych klientów' },
                { value: '99%', label: 'Satysfakcji klientów' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-stone-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* City SEO Sections */}
        {Object.entries(citySEO).slice(0, 4).map(([city, seo]) => (
          <section key={city} className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-stone-50">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">{seo.title}</h2>
            <p className="text-stone-600 max-w-2xl">{seo.description}</p>
          </section>
        ))}

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                Co robimy
              </h2>
              <p className="text-lg text-stone-600 max-w-xl mx-auto">
                Oferujemy kompleksowe rozwiązania internetowe dla firm każdej wielkości.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-accent/30 transition-colors"
                >
                  <span className="text-6xl font-light text-accent/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mb-3 mt-4">{service.title}</h3>
                  <p className="text-stone-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-stone-500">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More City SEO */}
        {Object.entries(citySEO).slice(4).map(([city, seo]) => (
          <section key={city} className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-stone-50">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">{seo.title}</h2>
            <p className="text-stone-600 max-w-2xl">{seo.description}</p>
          </section>
        ))}

        {/* EEAT - Author/Expertise Section */}
        <section className="py-20 lg:py-28 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 lg:p-12 border border-stone-200"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                    Doświadczenie, któremu możesz zaufać
                  </h2>
                  <p className="text-stone-600 mb-6">
                    Od ponad 5 lat tworzymy profesjonalne strony internetowe dla firm w całej Polsce. 
                    Nasz zespół ekspertów łączy wiedzę techniczną z doświadczeniem biznesowym.
                  </p>
                  <ul className="space-y-3">
                    {[
                      '5+ lat doświadczenia w branży webowej',
                      '100+ zrealizowanych projektów',
                      'Stałe wsparcie i opieka techniczna',
                      'Transparentne ceny bez ukrytych kosztów',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-stone-700">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                    alt="Nasz zespół"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Potrzebujesz profesjonalnej strony www?
              </h2>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-8">
                Skontaktuj się z nami i porozmawiajmy o Twoich potrzebach. 
                Pomożemy Ci zdobyć więcej klientów.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Skontaktuj się z nami
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}
