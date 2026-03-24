'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb, { BreadcrumbJsonLd } from '../../components/Breadcrumb';

interface ServicePageClientProps {
  lang: string;
}

const content = {
  pl: {
    badge: 'Firma programistyczna w Wrocławiu',
    headline: 'Firma programistyczna dla Twojego biznesu',
    headlineAccent: 'Dedykowane oprogramowanie, które rozwiązuje Twoje realne problemy',
    subheadline: 'Jesteśmy software house z Wrocławia. Tworzymy dedykowane aplikacje webowe, systemy SaaS, integracje API i modernizacje legacy. Pomagamy firmom MŚP rosnąć dzięki technologii.',
    ctaPrimary: 'Porozmawiajmy o projekcie',
    ctaSecondary: 'Zobacz nasze realizacje',
    stats: [
      { value: '4+', label: ' lat na rynku' },
      { value: '50+', label: ' zrealizowanych projektów' },
      { value: '100%', label: ' dostarczonych na czas' },
    ],
    whyTitle: 'Dlaczego InoxieSoft jako firma programistyczna?',
    whySubtitle: 'Nie jesteśmy dużą korporacją — jesteśmy zgranym zespołem ekspertów, którzy rozumieją zarówno technologię, jak i biznes. Każdy projekt traktujemy jak własny.',
    whyItems: [
      { title: 'Pełna transparentność', description: 'Na bieżąco raportujemy postępy. Masz wgląd w kod, kanban i wszystkie decyzje techniczne.' },
      { title: 'Dedykowane rozwiązania', description: 'Nie robimy copy-paste. Każde oprogramowanie projektujemy pod kątem Twoich konkretnych potrzeb.' },
      { title: 'Wsparcie po wdrożeniu', description: 'Nie znikamy po oddaniu projektu. Zapewniamy gwarancję, wsparcie i rozwój produktu.' },
      { title: 'Przystępne ceny', description: 'Dla firm MŚP oferujemy model współpracy, który łączy jakość z rozsądnym budżetem.' },
    ],
    servicesTitle: 'Co robimy?',
    servicesSubtitle: 'Oferujemy pełen zakres usług programistycznych — od pomysłu po działający produkt.',
    services: [
      {
        title: 'Aplikacje webowe na zamówienie',
        description: 'Budujemy aplikacje webowe szyte na miarę — od CRM po dedykowane narzędzia dla Twojego zespołu.',
        features: ['React / Next.js / Node.js', 'Bazy danych PostgreSQL / MongoDB', 'API REST / GraphQL', 'White-label i branding'],
      },
      {
        title: 'Systemy SaaS',
        description: 'Tworzymy wielodostępne platformy SaaS z modelem subskrypcyjnym. Od architektury po płatności.',
        features: ['Architektura multi-tenant', 'Integracja Stripe / BLIK', 'Dashboardy i analityka', 'Automatyczne faktury'],
      },
      {
        title: 'Integracje API',
        description: 'Łączymy Twoje systemy z zewnętrznymi usługami — ERP, CRM, e-commerce, dostawcy usług.',
        features: ['Integracje z systemami ERP/CRM', 'API e-commerce (Shoper, Magento)', 'Integracje z dostawcami usług', 'Automatyzacja przepływów danych'],
      },
      {
        title: 'Modernizacja legacy',
        description: 'Przejmujemy stare systemy, modernizujemy architekturę i dodajemy nowe funkcjonalności bez przepisywania od zera.',
        features: ['Audyt kodu i architektury', 'Stopniowa migracja', 'Zachowanie ciągłości działania', 'Dokumentacja i transfer wiedzy'],
      },
    ],
    processTitle: 'Jak wygląda współpraca?',
    processSteps: [
      { step: '1', title: 'Discovery — bezpłatnie', description: 'Rozmawiamy o Twoich potrzebach, analizujemy rynek i konkurencję. Dostajesz od nas wstępną wycenę i rekomendację podejścia.' },
      { step: '2', title: 'Projekt i wycena', description: 'Przygotowujemy szczegółowy projekt techniczny i kosztorys. Dzielimy pracę na etapy z przejrzystym cennikiem za każdy etap.' },
      { step: '3', title: 'Realizacja i wdrożenie', description: 'Pracujemy w sprintach, na bieżąco pokazujemy postępy. Po wdrożeniu przekazujemy dokumentację i szkolimy Twój zespół.' },
    ],
    ctaTitle: 'Masz projekt programistyczny?',
    ctaSubtitle: 'Porozmawiajmy — ocenimy Twój pomysł i zaproponujemy najlepsze podejście. Bez zobowiązań.',
    ctaButton: 'Umów spotkanie',
    ctaAlt: 'lub napisz: kontakt@inoxiesoft.com',
  },
  en: {
    badge: 'Software Company in Wrocław',
    headline: 'Software Company for Your Business',
    headlineAccent: 'Custom software that solves your real problems',
    subheadline: 'We are a software house from Wrocław. We build custom web applications, SaaS systems, API integrations and legacy modernizations. We help SMBs grow through technology.',
    ctaPrimary: 'Let\'s talk about your project',
    ctaSecondary: 'See our work',
    stats: [
      { value: '4+', label: ' years on the market' },
      { value: '50+', label: ' completed projects' },
      { value: '100%', label: ' delivered on time' },
    ],
    whyTitle: 'Why InoxieSoft as a software company?',
    whySubtitle: 'We are not a big corporation — we are a cohesive team of experts who understand both technology and business. We treat every project as our own.',
    whyItems: [
      { title: 'Full transparency', description: 'We report progress in real time. You have full visibility into code, kanban and all technical decisions.' },
      { title: 'Tailored solutions', description: 'We do not copy-paste. Every piece of software is designed for your specific needs.' },
      { title: 'Post-deployment support', description: 'We do not disappear after project delivery. We provide warranty, support and product development.' },
      { title: 'Affordable pricing', description: 'For SMBs, we offer a collaboration model that combines quality with a reasonable budget.' },
    ],
    servicesTitle: 'What do we do?',
    servicesSubtitle: 'We offer a full range of programming services — from idea to working product.',
    services: [
      {
        title: 'Custom Web Applications',
        description: 'We build tailor-made web applications — from CRM to dedicated tools for your team.',
        features: ['React / Next.js / Node.js', 'PostgreSQL / MongoDB databases', 'REST / GraphQL API', 'White-label and branding'],
      },
      {
        title: 'SaaS Systems',
        description: 'We create multi-tenant SaaS platforms with a subscription model. From architecture to payments.',
        features: ['Multi-tenant architecture', 'Stripe / BLIK integration', 'Dashboards and analytics', 'Automatic invoices'],
      },
      {
        title: 'API Integrations',
        description: 'We connect your systems with external services — ERP, CRM, e-commerce, service providers.',
        features: ['ERP/CRM system integrations', 'E-commerce API (Shoper, Magento)', 'Service provider integrations', 'Data flow automation'],
      },
      {
        title: 'Legacy Modernization',
        description: 'We take over old systems, modernize architecture and add new functionality without rewriting from scratch.',
        features: ['Code and architecture audit', 'Gradual migration', 'Maintaining business continuity', 'Documentation and knowledge transfer'],
      },
    ],
    processTitle: 'What does collaboration look like?',
    processSteps: [
      { step: '1', title: 'Discovery — free', description: 'We discuss your needs, analyze the market and competition. You get an initial estimate and approach recommendation from us.' },
      { step: '2', title: 'Design and quotation', description: 'We prepare a detailed technical design and cost estimate. We divide work into stages with a transparent price for each stage.' },
      { step: '3', title: 'Implementation and deployment', description: 'We work in sprints, show progress in real time. After deployment, we hand over documentation and train your team.' },
    ],
    ctaTitle: 'Have a software project?',
    ctaSubtitle: 'Let\'s talk — we will evaluate your idea and propose the best approach. No obligations.',
    ctaButton: 'Book a meeting',
    ctaAlt: 'or write: kontakt@inoxiesoft.com',
  },
};

export default function ServicePageClient({ lang }: ServicePageClientProps) {
  const c = lang === 'pl' ? content.pl : content.en;

  return (
    <>
      <BreadcrumbJsonLd lang={lang} items={[{ label: c.badge, href: `/${lang}/firma-programistyczna-wroclaw` }]} />
      <Breadcrumb lang={lang} items={[{ label: c.badge, href: `/${lang}/firma-programistyczna-wroclaw` }]} />
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-stone-50 via-white to-accent/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-accent-light text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {c.badge}
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">{c.headline}</h1>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-8">{c.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href={lang === 'pl' ? '/contact' : '/en/contact'} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25">
                {c.ctaPrimary}
              </Link>
              <Link href={lang === 'pl' ? '/offer' : '/en/offer'} className="inline-block bg-white border border-stone-300 text-stone-700 px-8 py-4 rounded-xl font-semibold hover:border-stone-400 transition-all">
                {c.ctaSecondary}
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {c.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-stone-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">{c.whyTitle}</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">{c.whySubtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.whyItems.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">{c.servicesTitle}</h2>
            <p className="text-lg text-stone-600 max-w-xl mx-auto">{c.servicesSubtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 border border-stone-100 hover:border-accent/30 transition-colors">
                <span className="text-6xl font-light text-accent/30">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-bold text-stone-900 mb-3 mt-4">{service.title}</h3>
                <p className="text-stone-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-stone-500">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-sm text-stone-400 mb-3">{lang === 'pl' ? 'Powiązane usługi:' : 'Related services:'}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.title.includes('web') || service.title.includes('SaaS') ? (
                      <Link href={lang === 'pl' ? '/pl/software-house-wroclaw' : '/en/software-house-wroclaw'} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent/20 transition-colors">{lang === 'pl' ? 'Software House Wrocław →' : 'Software House Wrocław →'}</Link>
                    ) : (
                      <Link href={lang === 'pl' ? '/pl/automatyzacja-ai-wroclaw' : '/en/automatyzacja-ai-wroclaw'} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent/20 transition-colors">{lang === 'pl' ? 'AI Automation Wrocław →' : 'AI Automation Wrocław →'}</Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">{c.processTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.processSteps.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }} className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">{step.step}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 lg:p-12 border border-stone-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">{lang === 'pl' ? 'Zespół ekspertów IT' : 'IT Expert Team'}</h2>
                <p className="text-stone-600 mb-6">{lang === 'pl' ? 'Nasz zespół to programiści, architekci systemów i eksperci AI z wieloletnim doświadczeniem w projektach komercyjnych. Pracujemy zdalnie, ale jesteśmy dostępni gdy tylko potrzebujesz.' : 'Our team is programmers, system architects and AI experts with years of experience in commercial projects. We work remotely but are available whenever you need us.'}</p>
                <ul className="space-y-3">
                  {[
                    lang === 'pl' ? '4+ lata doświadczenia komercyjnego' : '4+ years of commercial experience',
                    lang === 'pl' ? 'Eksperci React, Node.js, Python, AI' : 'Experts in React, Node.js, Python, AI',
                    lang === 'pl' ? 'Doświadczenie z projektami dla MŚP i korporacji' : 'Experience with SMB and corporate projects',
                    lang === 'pl' ? 'Stały kontakt i wsparcie techniczne' : 'Ongoing contact and technical support',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-stone-700">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt={lang === 'pl' ? 'Zespół programistyczny' : 'Programming team'} width={500} height={400} className="w-full h-auto object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-8">{c.ctaSubtitle}</p>
            <Link href={lang === 'pl' ? '/contact' : '/en/contact'} className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25">
              {c.ctaButton}
            </Link>
            <p className="text-stone-500 text-sm mt-4">{c.ctaAlt}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
