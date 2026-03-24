'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { translations } from '../../i18n';
import Breadcrumb, { BreadcrumbJsonLd } from '../../components/Breadcrumb';

interface ServicePageClientProps {
  t: typeof translations.pl;
  lang: string;
}

const content = {
  pl: {
    badge: 'Chatbot dla firmy',
    headline: 'Chatbot AI dla Twojej firmy',
    headlineAccent: 'Odpowiadaj na pytania klientów 24/7, non-stop',
    subheadline: 'Instalujemy inteligentne chatboty AI na Twoją stronę, Messengera i WhatsApp. Obsługują klientów, kwalifikują leady i umawiają spotkania — bez przerwy, bez kosztów wynagrodzenia.',
    ctaPrimary: 'Zamów chatbot dla firmy',
    ctaSecondary: 'Zobacz demo',
    stats: [
      { value: '24/7', label: ' dostępność bez przerw' },
      { value: '80%', label: ' mniej zapytań do zespołu' },
      { value: '3x', label: ' więcej pozyskanych leadów' },
    ],
    whyTitle: 'Dlaczego chatbot AI to nie jest drogi gadżet?',
    whySubtitle: 'Chatboty pierwszej generacji były głupie i irytujące. AI chatboty nowej generacji to zupełnie inna kategoria — rozumieją kontekst, uczą się i rozwiązują realne problemy klientów.',
    whyItems: [
      { title: 'Obsługa po godzinach i weekendach', description: 'Twój zespół odpoczywa, a chatbot odpowiada na pytania i zbiera leady. Żaden lead nie ucieka o 23:00.' },
      { title: 'Natychmiastowe odpowiedzi', description: 'Klienci oczekują odpowiedzi w minutach, nie godzinach. Chatbot odpowiada w sekundach — niezależnie od liczby zapytań.' },
      { title: 'Kwalifikacja leadów', description: 'Chatbot pyta, sprawdza, kwalifikuje — do Twojego zespołu trafiają tylko hot leady, gotowe do rozmowy sprzedażowej.' },
      { title: 'Stałe uczenie się', description: 'Każda rozmowa sprawia, że chatbot jest mądrzejszy. Po miesiącu obsługuje 90% zapytań bez eskalacji.' },
    ],
    servicesTitle: 'Co potrafi nasz chatbot AI?',
    servicesSubtitle: 'Dedykowany chatbot nauczony na Twojej firmie — nie generyczny, lecz naprawdę pomocny.',
    services: [
      {
        title: 'Odpowiadanie na pytania o ofertę',
        description: 'Klienci pytają o ceny, terminy, warunki — chatbot odpowiada na podstawie Twojej bazy wiedzy. Zawsze aktualne informacje.',
        features: ['Odpowiedzi na pytania o produkty i usługi', 'Porównania ofert i rekomendacje', 'Aktualne ceny i dostępność', 'Linki do relevantnych stron'],
      },
      {
        title: 'Umawianie spotkań i konsultacji',
        description: 'Chatbot sprawdza dostępność, proponuje terminy i automatycznie rezerwuje spotkania w kalendarzu. Bez emails, bez telefonów.',
        features: ['Integracja z kalendarzem Google / Outlook', 'Potwierdzenia SMS / email', 'Automatyczne przypomnienia', 'Reschedule i anulowanie'],
      },
      {
        title: 'Kwalifikacja i scoring leadów',
        description: 'Chatbot zbiera informacje o potencjalnym kliencie — budżet, potrzeby, timeline — i ocenia jakość leadu zanim trafi do sprzedaży.',
        features: ['Scoring leadów (hot/warm/cold)', 'Routing do odpowiedniego handlowca', 'Historia rozmowy w CRM', 'Automatyczne lead notification'],
      },
      {
        title: 'Obsługa posprzedażowa',
        description: 'Chatbot pomaga klientom po zakupie — odpowiada na pytania o realizację, status zamówienia, zwroty i reklamacje.',
        features: ['Status zamówienia i przesyłki', 'Proces reklamacji i zwrotów', 'Dokumentacja i instrukcje', 'Eskalacja do supportu gdy potrzeba'],
      },
    ],
    processTitle: 'Jak wdrażamy chatbot?',
    processSteps: [
      { step: '1', title: 'Brief i analiza', description: 'Poznajemy Twoją firmę, produkty, klientów i najczęstsze pytania. Tworzymy bazę wiedzy dla chatbota.' },
      { step: '2', title: 'Konfiguracja i trening', description: 'Konfigurujemy chatbota, uczymy go na Twoich danych, podłączamy do strony, Messengera, WhatsApp.' },
      { step: '3', title: 'Launch i optymalizacja', description: 'Uruchamiamy chatbota, monitorujemy rozmowy, optymalizujemy odpowiedzi. Zostajemy na dłużej.' },
    ],
    ctaTitle: 'Chcesz chatbota, który naprawdę działa?',
    ctaSubtitle: 'Zacznij od bezpłatnej konsultacji — sprawdzimy, gdzie chatbot przyniesie najwięcej korzyści w Twojej firmie.',
    ctaButton: 'Zamów chatbot',
    ctaAlt: 'lub zadzwoń: +48 798 943 352',
  },
  en: {
    badge: 'Chatbot for business',
    headline: 'AI Chatbot for Your Business',
    headlineAccent: 'Answer customer questions 24/7, non-stop',
    subheadline: 'We install intelligent AI chatbots on your website, Messenger and WhatsApp. They serve customers, qualify leads and schedule meetings — without a break, without salary costs.',
    ctaPrimary: 'Order a chatbot for business',
    ctaSecondary: 'See demo',
    stats: [
      { value: '24/7', label: ' availability without breaks' },
      { value: '80%', label: ' fewer requests to the team' },
      { value: '3x', label: ' more leads acquired' },
    ],
    whyTitle: 'Why is an AI chatbot not an expensive gadget?',
    whySubtitle: 'First-generation chatbots were dumb and annoying. New-generation AI chatbots are a completely different category — they understand context, learn and solve real customer problems.',
    whyItems: [
      { title: 'After-hours and weekend support', description: 'Your team rests, and the chatbot answers questions and collects leads. No lead escapes at 23:00.' },
      { title: 'Instant responses', description: 'Customers expect responses in minutes, not hours. Chatbot responds in seconds — regardless of the number of queries.' },
      { title: 'Lead qualification', description: 'Chatbot asks, checks, qualifies — only hot leads ready for sales conversation reach your team.' },
      { title: 'Constant learning', description: 'Each conversation makes the chatbot smarter. After a month, it handles 90% of queries without escalation.' },
    ],
    servicesTitle: 'What can our AI chatbot do?',
    servicesSubtitle: 'A dedicated chatbot trained on your company — not generic, but truly helpful.',
    services: [
      {
        title: 'Answering questions about the offer',
        description: 'Customers ask about prices, terms, conditions — chatbot answers based on your knowledge base. Always up-to-date information.',
        features: ['Answers to product and service questions', 'Offer comparisons and recommendations', 'Current prices and availability', 'Links to relevant pages'],
      },
      {
        title: 'Scheduling meetings and consultations',
        description: 'Chatbot checks availability, suggests dates and automatically books meetings in the calendar. Without emails, without phone calls.',
        features: ['Google Calendar / Outlook integration', 'SMS / email confirmations', 'Automatic reminders', 'Reschedule and cancellation'],
      },
      {
        title: 'Lead qualification and scoring',
        description: 'Chatbot collects information about a potential customer — budget, needs, timeline — and assesses lead quality before it reaches sales.',
        features: ['Lead scoring (hot/warm/cold)', 'Routing to the right salesperson', 'Conversation history in CRM', 'Automatic lead notification'],
      },
      {
        title: 'Post-sale support',
        description: 'Chatbot helps customers after purchase — answers questions about implementation, order status, returns and complaints.',
        features: ['Order and shipment status', 'Complaint and return process', 'Documentation and instructions', 'Escalation to support when needed'],
      },
    ],
    processTitle: 'How do we implement a chatbot?',
    processSteps: [
      { step: '1', title: 'Brief and analysis', description: 'We learn about your company, products, customers and most common questions. We create a knowledge base for the chatbot.' },
      { step: '2', title: 'Configuration and training', description: 'We configure the chatbot, train it on your data, connect to website, Messenger, WhatsApp.' },
      { step: '3', title: 'Launch and optimization', description: 'We launch the chatbot, monitor conversations, optimize responses. We stay for the long term.' },
    ],
    ctaTitle: 'Want a chatbot that actually works?',
    ctaSubtitle: 'Start with a free consultation — we will check where the chatbot will bring the most benefits to your business.',
    ctaButton: 'Order chatbot',
    ctaAlt: 'or call: +48 798 943 352',
  },
};

export default function ServicePageClient({ t, lang }: ServicePageClientProps) {
  const c = lang === 'pl' ? content.pl : content.en;

  return (
    <>
      <BreadcrumbJsonLd lang={lang} items={[{ label: c.badge, href: `/${lang}/chatbot-dla-firmy` }]} />
      <Breadcrumb lang={lang} items={[{ label: c.badge, href: `/${lang}/chatbot-dla-firmy` }]} />
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
              <Link href={lang === 'pl' ? '/pl/ai-dla-firm' : '/en/ai-dla-firm'} className="inline-block bg-white border border-stone-300 text-stone-700 px-8 py-4 rounded-xl font-semibold hover:border-stone-400 transition-all">
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
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">{lang === 'pl' ? 'Gdzie instalujemy chatbota?' : 'Where do we install the chatbot?'}</h2>
                <p className="text-stone-600 mb-6">{lang === 'pl' ? 'Chatbot może działać na wielu platformach jednocześnie — jedna konfiguracja, pełna obecność.' : 'Chatbot can operate on many platforms simultaneously — one configuration, full presence.'}</p>
                <ul className="space-y-3">
                  {[
                    lang === 'pl' ? 'Twoja strona www (widget na dole ekranu)' : 'Your website (widget at the bottom of the screen)',
                    lang === 'pl' ? 'Facebook Messenger' : 'Facebook Messenger',
                    lang === 'pl' ? 'WhatsApp Business' : 'WhatsApp Business',
                    lang === 'pl' ? 'Instagram Direct' : 'Instagram Direct',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-stone-700">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80" alt={lang === 'pl' ? 'Chatbot AI' : 'AI Chatbot'} width={500} height={400} className="w-full h-auto object-cover" />
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
