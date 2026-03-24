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
    badge: 'Automatyzacja AI we Wrocławiu',
    headline: 'Automatyzacja AI dla firm we Wrocławiu',
    headlineAccent: 'Zwiększ efektywność, obniż koszty',
    subheadline: 'Wdrażamy agentów AI i automatyzujemy procesy biznesowe w firmach MŚP. Od obsługi klienta po przetwarzanie dokumentów — oszczędzamy Twój czas i pieniądze.',
    ctaPrimary: 'Darmowa konsultacja',
    ctaSecondary: 'Zobacz jak to działa',
    cityLabel: 'Wrocław',
    // Stats
    stats: [
      { value: '70%+', label: ' redukcja czasu na zadania' },
      { value: '24/7', label: ' praca agentów AI' },
      { value: '50+', label: ' wdrożonych automatyzacji' },
    ],
    // Why section
    whyTitle: 'Dlaczego automatyzacja AI we Wrocławiu?',
    whySubtitle: 'Jako lokalny zespół rozumiemy wyzwania firm MŚP w regionie. Znamy specyfikę dolnośląskiego rynku i wiemy, jak skutecznie wdrażać AI w praktyce.',
    whyItems: [
      { title: 'Szybka realizacja', description: 'Pierwsze efekty automatyzacji w ciągu 2-4 tygodni od startu projektu.' },
      { title: 'Praca 24/7', description: 'Agenci AI obsługują klientów i przetwarzają dane nonstop — bez przerw i absencji.' },
      { title: 'Mierzalne oszczędności', description: 'Automatyzacja powtarzalnych zadań redukuje koszty operacyjne średnio o 40%.' },
      { title: 'Lokalne wsparcie', description: 'Jesteśmy we Wrocławiu — możemy spotkać się osobiście lub pracować zdalnie w całej Polsce.' },
    ],
    // Services
    servicesTitle: 'Co automatyzujemy z AI?',
    servicesSubtitle: 'Dobieramy rozwiązania do Twoich konkretnych procesów biznesowych.',
    services: [
      {
        title: 'Obsługa klienta z AI',
        description: 'Chatboty i asystenci AI odpowiadają na pytania klientów 24/7. Obsługują wielu klientów jednocześnie, odciążając Twój zespół.',
        features: ['Responsywne chatboty na stronę i Messenger', 'Automatyczne odpowiedzi na FAQ', 'Eskalacja do człowieka gdy potrzeba', 'Integracja z CRM'],
      },
      {
        title: 'Automatyzacja procesów back-office',
        description: 'Automatyzujemy powtarzalne zadania administracyjne — przetwarzanie dokumentów, generowanie raportów, zarządzanie danymi.',
        features: ['Ekstrakcja danych z dokumentów (OCR + LLM)', 'Automatyczne raporty i podsumowania', 'Klasyfikacja i routing wiadomości', 'Integracje z systemami firmowymi'],
      },
      {
        title: 'Agenci AI do sprzedaży',
        description: 'AI agent prowadzi lejki sprzedażowe — kwalifikuje leady, umawia spotkania, follow-upuje zautomatyzowanymi wiadomościami.',
        features: ['Kwalifikacja leadów przez chat', 'Automatyczne umawianie spotkań', 'Follow-up po nieudan kontakcie', 'Analiza sentymentu rozmowy'],
      },
      {
        title: 'Automatyzacja email i komunikacji',
        description: 'Inteligentne zarządzanie skrzynką mailową — sortowanie, odpowiadanie, wyłapywanie pilnych wiadomości.',
        features: ['Automatyczne sortowanie wiadomości', 'Szkice odpowiedzi generowane przez AI', 'Priorytetyzacja wiadomości', 'Integracja z Gmail / Outlook'],
      },
    ],
    // Process
    processTitle: 'Jak wdrażamy automatyzację AI?',
    processSteps: [
      { step: '1', title: 'Audyt procesów', description: 'Analizujemy, które procesy w Twojej firmie pochłaniają najwięcej czasu i gdzie AI może przynieść najszybsze korzyści.' },
      { step: '2', title: 'Prototyp w 2 tygodnie', description: 'Budujemy pierwszy prototyp automatyzacji i testujemy go na realnych danych. Ty oceniasz efekty przed skalowaniem.' },
      { step: '3', title: 'Wdrożenie i optymalizacja', description: 'Uruchamiamy automatyzację, monitorujemy wyniki i optymalizujemy na bieżąco. Zapewniamy pełne wsparcie po uruchomieniu.' },
    ],
    // CTA
    ctaTitle: 'Gotowy na automatyzację AI w swojej firmze?',
    ctaSubtitle: 'Umów darmową konsultację — sprawdzimy, gdzie AI może przynieść Twojej firmie największe korzyści.',
    ctaButton: 'Umów konsultację',
    ctaAlt: 'lub zadzwoń: +48 798 943 352',
  },
  en: {
    badge: 'AI Automation in Wrocław',
    headline: 'AI Automation for Businesses in Wrocław',
    headlineAccent: 'Increase efficiency, reduce costs',
    subheadline: 'We implement AI agents and automate business processes for SMBs. From customer service to document processing — we save your time and money.',
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'See how it works',
    cityLabel: 'Wrocław',
    // Stats
    stats: [
      { value: '70%+', label: ' reduction in task time' },
      { value: '24/7', label: ' AI agents working' },
      { value: '50+', label: ' automations deployed' },
    ],
    // Why section
    whyTitle: 'Why AI automation in Wrocław?',
    whySubtitle: 'As a local team, we understand the challenges of SMBs in the region. We know the Lower Silesian market and how to effectively implement AI in practice.',
    whyItems: [
      { title: 'Fast implementation', description: 'First automation results within 2-4 weeks from project start.' },
      { title: 'Works 24/7', description: 'AI agents serve customers and process data non-stop — no breaks or absences.' },
      { title: 'Measurable savings', description: 'Automation of repetitive tasks reduces operational costs by an average of 40%.' },
      { title: 'Local support', description: 'We are based in Wrocław — we can meet in person or work remotely across Poland.' },
    ],
    // Services
    servicesTitle: 'What do we automate with AI?',
    servicesSubtitle: 'We select solutions for your specific business processes.',
    services: [
      {
        title: 'AI Customer Service',
        description: 'Chatbots and AI assistants answer customer questions 24/7. They handle multiple customers simultaneously, taking the load off your team.',
        features: ['Responsive chatbots for website and Messenger', 'Automatic FAQ answers', 'Escalation to human when needed', 'CRM integration'],
      },
      {
        title: 'Back-office Process Automation',
        description: 'We automate repetitive administrative tasks — document processing, report generation, data management.',
        features: ['Data extraction from documents (OCR + LLM)', 'Automatic reports and summaries', 'Message classification and routing', 'Business system integrations'],
      },
      {
        title: 'AI Sales Agents',
        description: 'AI agent manages sales funnels — qualifies leads, schedules meetings, follows up with automated messages.',
        features: ['Lead qualification via chat', 'Automatic meeting scheduling', 'Follow-up after missed contact', 'Conversation sentiment analysis'],
      },
      {
        title: 'Email & Communication Automation',
        description: 'Intelligent mailbox management — sorting, replying, catching urgent messages.',
        features: ['Automatic message sorting', 'AI-generated response drafts', 'Message prioritization', 'Gmail / Outlook integration'],
      },
    ],
    // Process
    processTitle: 'How do we implement AI automation?',
    processSteps: [
      { step: '1', title: 'Process audit', description: 'We analyze which processes in your company consume the most time and where AI can bring the fastest benefits.' },
      { step: '2', title: 'Prototype in 2 weeks', description: 'We build the first automation prototype and test it on real data. You evaluate results before scaling.' },
      { step: '3', title: 'Deployment & optimization', description: 'We launch automation, monitor results and optimize continuously. Full support after go-live.' },
    ],
    // CTA
    ctaTitle: 'Ready for AI automation in your business?',
    ctaSubtitle: 'Book a free consultation — we will check where AI can bring the biggest benefits to your company.',
    ctaButton: 'Book consultation',
    ctaAlt: 'or call: +48 798 943 352',
  },
};

export default function ServicePageClient({ t, lang }: ServicePageClientProps) {
  const c = lang === 'pl' ? content.pl : content.en;

  return (
    <>
      <BreadcrumbJsonLd lang={lang} items={[{ label: c.badge, href: `/${lang}/automatyzacja-ai-wroclaw` }]} />
      <Breadcrumb lang={lang} items={[{ label: c.badge, href: `/${lang}/automatyzacja-ai-wroclaw` }]} />
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
                    ? 'Od ponad 4 lat tworzymy rozwiązania IT dla firm w całej Polsce. Nasz zespół łączy wiedzę techniczną z doświadczeniem biznesowym — rozumiemy, że automatyzacja to nie cel sam w sobie, tylko narzędzie do osiągania konkretnych wyników.'
                    : 'For over 4 years, we have been creating IT solutions for businesses across Poland. Our team combines technical knowledge with business experience — we understand that automation is not a goal in itself, but a tool for achieving specific results.'}
                </p>
                <ul className="space-y-3">
                  {[
                    lang === 'pl' ? '4+ lata doświadczenia w branży AI' : '4+ years of experience in AI industry',
                    lang === 'pl' ? '50+ wdrożonych automatyzacji' : '50+ automations deployed',
                    lang === 'pl' ? 'Zespoł ekspertów AI i data science' : 'Team of AI and data science experts',
                    lang === 'pl' ? 'Stałe wsparcie po wdrożeniu' : 'Ongoing support after deployment',
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
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80"
                  alt={lang === 'pl' ? 'Automatyzacja AI' : 'AI Automation'}
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
