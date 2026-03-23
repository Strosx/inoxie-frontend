'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { translations } from '../../i18n';

const servicesEN = [
  { title: 'Custom Website Development', description: 'Professional business websites, e-commerce stores, and tailored solutions for your industry.', features: ['Business websites', 'E-commerce', 'Landing pages', 'Portfolios'] },
  { title: 'SEO Optimization', description: 'Your business ranks higher in Google - more customers find you.', features: ['Content optimization', 'Page speed', 'Mobile-first', 'Links and citations'] },
  { title: 'AI Automation', description: 'We use AI to automate processes in your company. Save time and money.', features: ['Task automation', 'Tool integrations', 'AI assistants', 'Time savings'] },
  { title: 'Lead Generation', description: 'We help acquire new customers through websites and marketing campaigns.', features: ['Conversion optimization', 'Email campaigns', 'SMS marketing', 'CRM integrations'] },
];

const servicesPL = [
  { title: 'Strony www dla firm', description: 'Profesjonalne strony wizytówki, sklepy internetowe, strony z ofertą dopasowane do Twojej branży.', features: ['Strony wizytówki', 'Sklepy internetowe', 'Landing pages', 'Portfolia'] },
  { title: 'Pozycjonowanie SEO', description: 'Twoja firma znajduje się wyżej w Google - więcej klientów Cię znajduje.', features: ['Optymalizacja treści', 'Szybkość ładowania', 'Mobile-first', 'Linki i cytowania'] },
  { title: 'Automatyzacja AI', description: 'Wykorzystujemy AI do automatyzacji procesów w Twojej firmie. Oszczędzaj czas i pieniądze.', features: ['Automatyzacja zadań', 'Integracje z narzędziami', 'Asystenci AI', 'Oszczędność czasu'] },
  { title: 'Lead Generation', description: 'Pomagamy pozyskiwać nowych klientów przez stronę i kampanie marketingowe.', features: ['Optymalizacja konwersji', 'Kampanie email', 'SMS marketing', 'CRM integracje'] },
];

const citiesEN = ['Warsaw', 'Krakow', 'Wroclaw', 'Poznan', 'Gdansk', 'Lodz', 'Katowice', 'Lublin'];
const citiesPL = ['Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Gdańsk', 'Łódź', 'Katowice', 'Lublin'];

interface OfferPageClientProps {
  t: typeof translations.pl;
  lang: string;
}

export default function OfferPageClient({ t, lang }: OfferPageClientProps) {
  const cities = lang === 'pl' ? citiesPL : citiesEN;
  const services = lang === 'pl' ? servicesPL : servicesEN;
  
  return (
    <>
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
                {lang === 'pl' ? 'Nasze usługi' : 'Our Services'}
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
                {lang === 'pl' ? 'Profesjonalne strony www dla firm' : 'Professional Websites for Businesses'}
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
                {lang === 'pl' 
                  ? 'Tworzymy nowoczesne strony internetowe, które pomagają firmom zdobywać nowych klientów. Szybka realizacja, konkurencyjne ceny, pełne wsparcie.'
                  : 'We create modern websites that help businesses acquire new customers. Fast delivery, competitive prices, full support.'}
              </p>
              
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
                { value: '5+', label: lang === 'pl' ? 'Lat doświadczenia' : 'Years Experience' },
                { value: '100+', label: lang === 'pl' ? 'Zrealizowanych projektów' : 'Completed Projects' },
                { value: '50+', label: lang === 'pl' ? 'Zadowolonych klientów' : 'Happy Clients' },
                { value: '99%', label: lang === 'pl' ? 'Satysfakcji klientów' : 'Client Satisfaction' },
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
                {lang === 'pl' ? 'Co robimy' : 'What We Do'}
              </h2>
              <p className="text-lg text-stone-600 max-w-xl mx-auto">
                {lang === 'pl' 
                  ? 'Oferujemy kompleksowe rozwiązania internetowe dla firm każdej wielkości.'
                  : 'We offer comprehensive internet solutions for businesses of all sizes.'}
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
                    {lang === 'pl' ? 'Doświadczenie, któremu możesz zaufać' : 'Experience You Can Trust'}
                  </h2>
                  <p className="text-stone-600 mb-6">
                    {lang === 'pl'
                      ? 'Od ponad 5 lat tworzymy profesjonalne strony internetowe dla firm w całej Polsce. Nasz zespół ekspertów łączy wiedzę techniczną z doświadczeniem biznesowym.'
                      : 'For over 5 years, we have been creating professional websites for businesses across Poland. Our expert team combines technical knowledge with business experience.'}
                  </p>
                  <ul className="space-y-3">
                    {[
                      lang === 'pl' ? '5+ lat doświadczenia w branży webowej' : '5+ years in web industry',
                      lang === 'pl' ? '100+ zrealizowanych projektów' : '100+ completed projects',
                      lang === 'pl' ? 'Stałe wsparcie i opieka techniczna' : 'Ongoing support and technical care',
                      lang === 'pl' ? 'Transparentne ceny bez ukrytych kosztów' : 'Transparent pricing with no hidden costs',
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
                    alt={lang === 'pl' ? 'Nasz zespół' : 'Our team'}
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
                {lang === 'pl' ? 'Potrzebujesz profesjonalnej strony www?' : 'Need a Professional Website?'}
              </h2>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-8">
                {lang === 'pl'
                  ? 'Skontaktuj się z nami i porozmawiajmy o Twoich potrzebach. Pomożemy Ci zdobyć więcej klientów.'
                  : 'Contact us and let us discuss your needs. We will help you acquire more customers.'}
              </p>
              <Link
                href={lang === 'pl' ? '/contact' : '/en/contact'}
                className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {lang === 'pl' ? 'Skontaktuj się z nami' : 'Contact Us'}
              </Link>
            </motion.div>
          </div>
        </section>
    </>
  );
}
