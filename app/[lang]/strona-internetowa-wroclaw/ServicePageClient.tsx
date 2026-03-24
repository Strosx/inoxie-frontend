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
    badge: 'Strony www dla firm we Wrocławiu',
    headline: 'Profesjonalna strona internetowa dla Twojej firmy',
    headlineAccent: 'Zbudowana w 48h, zaprojektowana, by przyciągać klientów',
    subheadline: 'Tworzymy strony www dla firm MŚP we Wrocławiu i całej Polsce. Nowoczesny design, responsywność, optymalizacja SEO — wszystko w cenie. Od 799 zł.',
    ctaPrimary: 'Zamów stronę',
    ctaSecondary: 'Zobacz realizacje',
    cityLabel: 'Wrocław',
    stats: [
      { value: '48h', label: ' od zamówienia do gotowej strony' },
      { value: '100+', label: ' zrealizowanych projektów' },
      { value: '99%', label: ' klientów poleca nas dalej' },
    ],
    whyTitle: 'Dlaczego strona www od InoxieSoft we Wrocławiu?',
    whySubtitle: 'Jesteśmy lokalnym zespołem z Wrocławia — rozumiemy rynek dolnośląski. Tworzymy strony, które nie tylko ładnie wyglądają, ale przede wszystkim przyciągają klientów i pomagają firmom rosnąć.',
    whyItems: [
      { title: 'Realizacja w 48 godzin', description: 'Od briefu do gotowej, wdrożonej strony w zaledwie 48h. Nie czekasz miesiącami jak u tradycyjnych agencji.' },
      { title: 'SEO w cenie', description: 'Każda strona jest zoptymalizowana pod Google już od pierwszego dnia. Meta tagi, szybkość ładowania, schema markup.' },
      { title: 'Responsywny design', description: 'Twoja strona wygląda perfekcyjnie na telefonie, tablecie i komputerze. Bez dodatkowych kosztów.' },
      { title: 'Stały hosting w cenie', description: 'Nie musisz szukać hostingu ani martwić się o aktualizacje. Wszystko załatwiamy za Ciebie.' },
    ],
    servicesTitle: 'Jakie strony tworzymy?',
    servicesSubtitle: 'Dobieramy typ strony do Twoich celów biznesowych — nie robimy jednego szablonu na wszystko.',
    services: [
      {
        title: 'Strony wizytówki',
        description: 'Profesjonalna prezentacja Twojej firmy w internecie. Idealna dla rzemieślników, gabinetów, małych firm usługowych.',
        features: ['Indywidualny design dopasowany do branży', 'Sekcja oferty z cennikiem', 'Formularz kontaktowy', 'Mapa Google z adresem', 'Integracja z social media'],
      },
      {
        title: 'Sklepy internetowe',
        description: 'Pełnoprawny e-commerce z koszykiem, płatnościami online i zarządzaniem zamówieniami. Gotowy do sprzedaży od pierwszego dnia.',
        features: ['Koszyk i kasa', 'Płatności online (BLIK, karta, przelew)', 'Zarządzanie zamówieniami', 'Faktury automatyczne', 'Responsive na mobile'],
      },
      {
        title: 'Landing pages',
        description: 'Jednostronicowa strona konwersyjna — idealna na kampanie reklamowe, promocje, nowe produkty. Maksymalnie skuteczna.',
        features: ['Wysoka konwersja', 'Formularz leadowy', 'Counter / social proof', 'CTA na każdym etapie', 'Szybkie wdrożenie'],
      },
      {
        title: 'Strony z ofertą dla B2B',
        description: 'Zaawansowane strony z katalogiem usług, case studies, cennikiem i systemem lead generation. Dla firm, które sprzedają rozwiązania innym firmom.',
        features: ['Katalog usług z parametrami', 'Case studies i portfolio', 'Integracja z CRM', 'System wyceny online', 'Dedykowane CTA dla B2B'],
      },
    ],
    processTitle: 'Jak zamawiam stronę?',
    processSteps: [
      { step: '1', title: 'Brief — 10 minut', description: 'Wypełniasz krótki formularz: podajesz nazwę firmy, branżę, kolory i preferencje. To wszystko, co potrzebujemy na start.' },
      { step: '2', title: 'Projekt — 24h', description: 'Przygotowujemy indywidualny projekt strony. Dostajesz podgląd przed uruchomieniem i możesz poprosić o zmiany.' },
      { step: '3', title: 'Wdrożenie — 24h', description: 'Po akceptacji projektu uruchamiamy stronę. DNS przekierowuje domenę i Twoja nowa strona jest online — z hostingu, SSL i wszystkim.' },
    ],
    ctaTitle: 'Potrzebujesz strony www dla swojej firmy?',
    ctaSubtitle: 'Zamów bezpłatną wycenę — odpowiadamy w ciągu 2 godzin w dni robocze.',
    ctaButton: 'Zamów stronę',
    ctaAlt: 'lub zadzwoń: +48 798 943 352',
  },
  en: {
    badge: 'Website Development in Wrocław',
    headline: 'Professional Website for Your Business',
    headlineAccent: 'Built in 48h, designed to attract customers',
    subheadline: 'We create professional business websites in Wrocław and across Poland. Modern design, responsive layout, SEO optimized — all included. From €199.',
    ctaPrimary: 'Order website',
    ctaSecondary: 'See our work',
    cityLabel: 'Wrocław',
    stats: [
      { value: '48h', label: ' from order to live website' },
      { value: '100+', label: ' completed projects' },
      { value: '99%', label: ' clients recommend us' },
    ],
    whyTitle: 'Why a website from InoxieSoft in Wrocław?',
    whySubtitle: 'We are a local team from Wrocław — we understand the Lower Silesian market. We create websites that not only look great, but primarily attract customers and help businesses grow.',
    whyItems: [
      { title: 'Delivery in 48 hours', description: 'From brief to live, deployed website in just 48h. No waiting months like with traditional agencies.' },
      { title: 'SEO included', description: 'Every website is optimized for Google from day one. Meta tags, page speed, schema markup.' },
      { title: 'Responsive design', description: 'Your site looks perfect on mobile, tablet, and desktop. No extra cost.' },
      { title: 'Hosting included', description: 'No need to find hosting or worry about updates. We handle everything.' },
    ],
    servicesTitle: 'What types of websites do we build?',
    servicesSubtitle: 'We match the website type to your business goals — we do not use one template for everything.',
    services: [
      {
        title: 'Business Websites',
        description: 'Professional presentation of your company online. Ideal for tradespeople, clinics, small service businesses.',
        features: ['Individual design matched to your industry', 'Services section with pricing', 'Contact form', 'Google Maps with address', 'Social media integration'],
      },
      {
        title: 'E-commerce Stores',
        description: 'Full e-commerce with cart, online payments and order management. Ready to sell from day one.',
        features: ['Cart and checkout', 'Online payments (BLIK, card, transfer)', 'Order management', 'Automatic invoices', 'Mobile responsive'],
      },
      {
        title: 'Landing Pages',
        description: 'Single-page conversion-focused page — ideal for ad campaigns, promotions, new products. Maximally effective.',
        features: ['High conversion rate', 'Lead generation form', 'Counter / social proof', 'CTA at every stage', 'Fast deployment'],
      },
      {
        title: 'B2B Service Websites',
        description: 'Advanced sites with service catalogs, case studies, pricing and lead generation system. For companies selling solutions to other businesses.',
        features: ['Service catalog with parameters', 'Case studies and portfolio', 'CRM integration', 'Online pricing system', 'Dedicated B2B CTAs'],
      },
    ],
    processTitle: 'How do I order a website?',
    processSteps: [
      { step: '1', title: 'Brief — 10 minutes', description: 'You fill out a short form: company name, industry, colors and preferences. That is all we need to start.' },
      { step: '2', title: 'Design — 24h', description: 'We prepare an individual website design. You get a preview before launch and can request changes.' },
      { step: '3', title: 'Deployment — 24h', description: 'After design approval, we launch the site. DNS redirects your domain and your new site is live — with hosting, SSL and everything.' },
    ],
    ctaTitle: 'Need a website for your business?',
    ctaSubtitle: 'Order a free quote — we respond within 2 hours on business days.',
    ctaButton: 'Order website',
    ctaAlt: 'or call: +48 798 943 352',
  },
};

export default function ServicePageClient({ lang }: ServicePageClientProps) {
  const c = lang === 'pl' ? content.pl : content.en;

  return (
    <>
      <BreadcrumbJsonLd lang={lang} items={[{ label: c.badge, href: `/${lang}/strona-internetowa-wroclaw` }]} />
      <Breadcrumb lang={lang} items={[{ label: c.badge, href: `/${lang}/strona-internetowa-wroclaw` }]} />
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
              {c.badge}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              {c.headline}
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
              {c.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={lang === 'pl' ? '/contact' : '/en/contact'}
                className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {c.ctaPrimary}
              </Link>
              <Link
                href={lang === 'pl' ? '/offer' : '/en/offer'}
                className="inline-block bg-white border border-stone-300 text-stone-700 px-8 py-4 rounded-xl font-semibold hover:border-stone-400 transition-all"
              >
                {c.ctaSecondary}
              </Link>
            </div>

            {/* Stats */}
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

      {/* Why Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.whyTitle}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {c.whySubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.whyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-stone-50 rounded-2xl p-8 border border-stone-100"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.servicesTitle}
            </h2>
            <p className="text-lg text-stone-600 max-w-xl mx-auto">
              {c.servicesSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-stone-100 hover:border-accent/30 transition-colors"
              >
                <span className="text-6xl font-light text-accent/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.processTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
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
                  {lang === 'pl' ? 'Doświadczenie, któremu możesz zaufać' : 'Experience You Can Trust'}
                </h2>
                <p className="text-stone-600 mb-6">
                  {lang === 'pl'
                    ? 'Od ponad 4 lat tworzymy profesjonalne strony www dla firm w całej Polsce. Każda strona jest projektowana indywidualnie — nie używamy gotowych szablonów. Znamy się na tym, co robimy.'
                    : 'For over 4 years, we have been creating professional websites for businesses across Poland. Every website is designed individually — we do not use ready-made templates. We know what we are doing.'}
                </p>
                <ul className="space-y-3">
                  {[
                    lang === 'pl' ? '4+ lata doświadczenia w web development' : '4+ years of web development experience',
                    lang === 'pl' ? '100+ zrealizowanych projektów' : '100+ completed projects',
                    lang === 'pl' ? 'Indywidualne projekty, żadnych szablonów' : 'Individual designs, no templates',
                    lang === 'pl' ? 'Stały hosting i wsparcie w cenie' : 'Ongoing hosting and support included',
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
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80"
                  alt={lang === 'pl' ? 'Tworzenie stron www' : 'Website development'}
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
              {c.ctaTitle}
            </h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-8">
              {c.ctaSubtitle}
            </p>
            <Link
              href={lang === 'pl' ? '/contact' : '/en/contact'}
              className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              {c.ctaButton}
            </Link>
            <p className="text-stone-500 text-sm mt-4">{c.ctaAlt}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
