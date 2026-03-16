'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { Lang } from '../i18n';
import { translations } from '../i18n';

// Simple text-based icons
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
              href={lang.code === 'pl' ? '/pl' : '/en'}
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
    { href: lang === 'pl' ? '/pl' : '/en', label: t.start },
    { href: lang === 'pl' ? '/pl/offer' : '/en/offer', label: t.oferta },
    { href: lang === 'pl' ? '/pl/about-us' : '/en/about-us', label: t.oNas },
    { href: lang === 'pl' ? '/pl/contact' : '/en/contact', label: t.kontakt },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={lang === 'pl' ? '/pl' : '/en'} className="flex items-center gap-2">
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
              href={lang === 'pl' ? '/pl/contact' : '/en/contact'}
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
            <Link href={lang === 'pl' ? '/pl' : '/en'} className="flex items-center gap-2 mb-4">
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

const statsEN = [
  { value: '5+', label: 'Years Experience' },
  { value: '100+', label: 'Completed Projects' },
  { value: '50+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
];

const statsPL = [
  { value: '5+', label: 'Lat doświadczenia' },
  { value: '100+', label: 'Zrealizowanych projektów' },
  { value: '50+', label: 'Zadowolonych klientów' },
  { value: '99%', label: 'Satysfakcji klientów' },
];

const timelineEN = [
  { year: '2019', title: 'The Beginning', description: 'Company founded and first web projects' },
  { year: '2021', title: 'AI Development', description: 'First AI implementations for business clients' },
  { year: '2023', title: 'AI Platform', description: 'Created our own AI website generation platform' },
  { year: '2024', title: 'Expansion', description: 'Expanded operations across Poland and international markets' },
];

const timelinePL = [
  { year: '2019', title: 'Początek przygody', description: 'Założenie firmy i pierwsze projekty webowe' },
  { year: '2021', title: 'Rozwój AI', description: 'Pierwsze wdrożenia rozwiązań AI dla klientów biznesowych' },
  { year: '2023', title: 'Platforma AI', description: 'Stworzenie własnej platformy do generowania stron AI' },
  { year: '2024', title: 'Ekspansja', description: 'Rozszerzenie działalności na całą Polskę i rynki zagraniczne' },
];

const valuesEN = [
  { title: 'AI Expertise', description: 'We leverage the latest advancements in artificial intelligence to deliver innovative business solutions.' },
  { title: 'Speed', description: 'We understand that time is money. We deliver effective solutions in short timeframes without compromising quality.' },
  { title: 'Partnership', description: 'We treat every client as a partner. Our success is measured by our clients\' success.' },
  { title: 'Quality', description: 'We prioritize the highest quality in every aspect of our work. Code, design, service - everything at the highest level.' },
];

const valuesPL = [
  { title: 'Ekspertyza AI', description: 'Wykorzystujemy najnowsze osiągnięcia w dziedzinie sztucznej inteligencji, aby dostarczać innowacyjne rozwiązania dla biznesu.' },
  { title: 'Szybkość działania', description: 'Rozumiemy, że czas to pieniądz. Dostarczamy efektywne rozwiązania w krótkim czasie bez kompromisów jakościowych.' },
  { title: 'Partnerstwo', description: 'Traktujemy każdego klienta jak partnera. Nasz sukces mierzymy sukcesem naszych klientów.' },
  { title: 'Jakość', description: 'Stawiamy na najwyższą jakość w każdym aspekcie naszej pracy. Kod, design, obsługa - wszystko na najwyższym poziomie.' },
];

const testimonialsEN = [
  { quote: 'Working with InoxieSoft was a hit. Our new website attracts many new customers.', author: 'Anna Kowalska', position: 'Owner, Beauty Salon' },
  { quote: 'Professional approach, fast delivery. I recommend to anyone who needs a good website.', author: 'Jan Nowak', position: 'CEO, Construction Company' },
  { quote: 'AI automation changed our business. We save tons of time on routine tasks.', author: 'Maria Wiśniewska', position: 'Director, Law Firm' },
];

const testimonialsPL = [
  { quote: 'Współpraca z InoxieSoft to była strzał w dziesiątkę. Nasza nowa strona przyciąga wielu nowych klientów.', author: 'Anna Kowalska', position: 'Właścicielka, Salon Kosmetyczny' },
  { quote: 'Profesjonalne podejście, szybka realizacja. Polecam każdemu, kto potrzebuje dobrej strony www.', author: 'Jan Nowak', position: 'Prezes, Firma Budowlana' },
  { quote: 'AI automation zmieniła nasz biznes. Oszczędzamy mnóstwo czasu na rutynowych zadaniach.', author: 'Maria Wiśniewska', position: 'Dyrektor, Kancelaria Prawna' },
];

interface AboutPageClientProps {
  t: typeof translations.pl;
  lang: string;
}

export default function AboutPageClient({ t, lang }: AboutPageClientProps) {
  const stats = lang === 'pl' ? statsPL : statsEN;
  const timeline = lang === 'pl' ? timelinePL : timelineEN;
  const values = lang === 'pl' ? valuesPL : valuesEN;
  const testimonials = lang === 'pl' ? testimonialsPL : testimonialsEN;
  
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
                {lang === 'pl' ? 'O nas' : 'About Us'}
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
                {lang === 'pl' ? 'Tworzymy przyszłość biznesu w internecie' : 'Creating the Future of Business on the Internet'}
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
                {lang === 'pl' 
                  ? 'Jesteśmy zespołem pasjonatów, którzy tworzą nowoczesne strony internetowe i rozwiązania AI pomagające firmom zdobywać nowych klientów.'
                  : 'We are a team of passionate creators building modern websites and AI solutions that help businesses acquire new customers.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-8 lg:p-12 border border-stone-200"
          >
            <span className="text-6xl font-light text-accent/30 mb-6 block">—</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">{t.about.mission.title}</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto italic leading-relaxed">
              "{t.about.mission.content}"
            </p>
          </motion.div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 lg:py-28 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-stone-900 mb-6">
                  {lang === 'pl' ? 'Dlaczego my?' : 'Why Choose Us?'}
                </h2>
                <p className="text-stone-600 mb-6 text-lg">
                  {lang === 'pl' 
                    ? 'Słuchamy potrzeb klienta i dostarczamy rozwiązania dopasowane do biznesu.'
                    : 'We listen to client needs and deliver solutions tailored to their business.'}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-stone-900 rounded-2xl p-8"
              >
                <div className="grid grid-cols-1 gap-6">
                  {timeline.map((item) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 text-accent font-bold">{item.year}</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-stone-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-stone-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                {t.about.values.title}
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-accent/30 transition-colors"
                >
                  <span className="text-4xl font-light text-accent/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3 mt-2">{value.title}</h3>
                  <p className="text-stone-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                {lang === 'pl' ? 'Co mówią nasi klienci' : 'What Our Clients Say'}
              </h2>
              <p className="text-accent font-medium">⭐⭐⭐⭐⭐ 5.0 / 5.0</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 border border-stone-200"
                >
                  <p className="text-stone-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-stone-900">{testimonial.author}</p>
                    <p className="text-sm text-stone-500">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                {lang === 'pl' ? 'Potrzebujesz profesjonalnej strony www?' : 'Need a Professional Website?'}
              </h2>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-8">
                {lang === 'pl' 
                  ? 'Skontaktuj się z nami i porozmawiajmy o Twoich potrzebach.'
                  : 'Contact us and let us discuss your needs.'}
              </p>
              <Link
                href={lang === 'pl' ? '/pl/contact' : '/en/contact'}
                className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {lang === 'pl' ? 'Skontaktuj się z nami' : 'Contact Us'}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
