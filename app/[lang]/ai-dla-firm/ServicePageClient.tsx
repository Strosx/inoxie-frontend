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
    badge: 'AI dla firm i przedsiębiorstw',
    headline: 'Sztuczna inteligencja dla Twojej firmy',
    headlineAccent: 'Automatyzuj, optymalizuj, rozwijaj',
    subheadline: 'Wdrażamy AI w firmach MŚP — od prostych chatbotów po zaawansowanych agentów AI. Pokazujemy, gdzie AI przynosi realne korzyści, i wdrażamy rozwiązania, które działają.',
    ctaPrimary: 'Zaimplementuj AI w mojej firmie',
    ctaSecondary: 'Zobacz case studies',
    stats: [
      { value: '3x', label: ' szybsza obsługa klienta' },
      { value: '40%', label: ' redukcja kosztów operacyjnych' },
      { value: '70%', label: ' mniej pracy ręcznej' },
    ],
    whyTitle: 'Dlaczego AI jest teraz dostępne dla firm MŚP?',
    whySubtitle: 'Jeszcze 2 lata temu wdrożenie AI wymagało milionowych budżetów i zespołu data scientists. Dziś modele LLM i gotowe narzędzia sprawiają, że AI jest dostępne dla każdej firmy — także małej.',
    whyItems: [
      { title: 'Koszty spadły 10x', description: 'API do GPT-4, Claude i innych modeli kosztuje grosze za tysiąc tokenów. ROI jest realny nawet dla małych firm.' },
      { title: 'Gotowe narzędzia', description: 'LangChain, AutoGen, n8n — są frameworki, które przyspieszają wdrożenie o 80%. Nie budujemy wszystkiego od zera.' },
      { title: 'Szybka implementacja', description: 'Pierwszy działający prototyp chatbotu AI możesz mieć w 1-2 dni. Pełne wdrożenie w 2-4 tygodnie.' },
      { title: 'Mierzalne efekty', description: 'Liczymy ROI przed startem projektu. Wiemy, co ile oszczędza i kiedy się zwróci.' },
    ],
    servicesTitle: 'Jakie rozwiązania AI oferujemy?',
    servicesSubtitle: 'Dobieramy AI do Twoich konkretnych procesów — nie sprzedajemy rozwiązań, których nie potrzebujesz.',
    services: [
      {
        title: 'Chatboty AI na stronę',
        description: 'Inteligentny chatbot, który odpowiada na pytania klientów, kwalifikuje leady i umawia spotkania — bez przerwy, bez absencji.',
        features: ['Responsywny na stronę, Messenger, WhatsApp', 'Uczenie się na podstawie Twoich danych', 'Kwalifikacja leadów i routing do zespołu', 'Analityka rozmów i optymalizacja'],
      },
      {
        title: 'Agenci AI do automatyzacji',
        description: 'Autonomiczni agenci AI, którzy wykonują złożone zadania — przeszukują dane, piszą raporty, odpowiadają na maile, prowadzą follow-upy.',
        features: ['Wielokrokowe zadania bez nadzoru', 'Integracja z Twoimi systemami (CRM, email)', 'Pisanie i wysyłanie raportów', 'Automatyczny follow-up z klientami'],
      },
      {
        title: 'Asystenci AI dla zespołu',
        description: 'AI asystent wbudowany w workflow Twojego zespołu — pomaga w researchu, pisaniu, analizie danych i podejmowaniu decyzji.',
        features: ['Research i podsumowania dokumentów', 'Pisanie emaili, raportów, prezentacji', 'Analiza danych i wykresy', 'Integracja z Teams / Slack'],
      },
      {
        title: 'Integracje LLM z Twoimi danymi',
        description: 'Podłączamy modele AI do Twoich wewnętrznych danych — bazy wiedzy, dokumenty, bazy danych. AI odpowiada na pytania o Twoją firmę.',
        features: ['RAG — retrieval augmented generation', 'Bazy wektorowe z Twoimi dokumentami', 'Chatboty z wiedzą firmową', 'Wyszukiwanie po dokumentach wewnętrznych'],
      },
    ],
    processTitle: 'Jak wdrażamy AI?',
    processSteps: [
      { step: '1', title: 'Workshop — bezpłatnie', description: 'Pokazujemy na realnych przykładach, gdzie AI może pomóc w Twojej branży. Analizujemy Twoje procesy i szacujemy ROI.' },
      { step: '2', title: 'Pilotaż (1-2 tygodnie)', description: 'Wdrażamy pierwsze rozwiązanie AI na wybranym procesie. Testujemy, mierzymy efekty, optymalizujemy.' },
      { step: '3', title: 'Skalowanie', description: 'Po sukcesie pilotażu skalujemy AI na kolejne obszary. Tworzymy wewnętrzne procedury i szkolimy zespół.' },
    ],
    ctaTitle: 'Chcesz wdrożyć AI w swojej firmie?',
    ctaSubtitle: 'Zacznij od bezpłatnego workshopu — pokażemy Ci konkretne zastosowania AI w Twojej branży.',
    ctaButton: 'Umów bezpłatny workshop',
    ctaAlt: 'lub zadzwoń: +48 798 943 352',
  },
  en: {
    badge: 'AI for businesses and enterprises',
    headline: 'Artificial Intelligence for Your Business',
    headlineAccent: 'Automate, optimize, grow',
    subheadline: 'We implement AI in SMBs — from simple chatbots to advanced AI agents. We show where AI brings real benefits and implement solutions that work.',
    ctaPrimary: 'Implement AI in my company',
    ctaSecondary: 'See case studies',
    stats: [
      { value: '3x', label: ' faster customer service' },
      { value: '40%', label: ' reduction in operational costs' },
      { value: '70%', label: ' less manual work' },
    ],
    whyTitle: 'Why is AI now accessible for SMBs?',
    whySubtitle: 'Just 2 years ago, AI implementation required million-dollar budgets and data science teams. Today, LLM models and ready-made tools make AI accessible to every company — including small ones.',
    whyItems: [
      { title: 'Costs dropped 10x', description: 'API to GPT-4, Claude and other models costs pennies per thousand tokens. ROI is real even for small companies.' },
      { title: 'Ready-made tools', description: 'LangChain, AutoGen, n8n — there are frameworks that accelerate deployment by 80%. We do not build everything from scratch.' },
      { title: 'Fast implementation', description: 'You can have the first working AI chatbot prototype in 1-2 days. Full deployment in 2-4 weeks.' },
      { title: 'Measurable results', description: 'We calculate ROI before starting the project. We know what saves how much and when it pays off.' },
    ],
    servicesTitle: 'What AI solutions do we offer?',
    servicesSubtitle: 'We match AI to your specific processes — we do not sell solutions you do not need.',
    services: [
      {
        title: 'AI Chatbots for website',
        description: 'Intelligent chatbot that answers customer questions, qualifies leads and schedules meetings — without a break, without absences.',
        features: ['Responsive on website, Messenger, WhatsApp', 'Learning from your data', 'Lead qualification and team routing', 'Conversation analytics and optimization'],
      },
      {
        title: 'AI Agents for automation',
        description: 'Autonomous AI agents that perform complex tasks — search data, write reports, answer emails, conduct follow-ups.',
        features: ['Multi-step tasks without supervision', 'Integration with your systems (CRM, email)', 'Report writing and sending', 'Automatic client follow-up'],
      },
      {
        title: 'AI Assistants for teams',
        description: 'AI assistant built into your team workflow — helps with research, writing, data analysis and decision-making.',
        features: ['Research and document summaries', 'Writing emails, reports, presentations', 'Data analysis and charts', 'Teams / Slack integration'],
      },
      {
        title: 'LLM integrations with your data',
        description: 'We connect AI models to your internal data — knowledge bases, documents, databases. AI answers questions about your company.',
        features: ['RAG — retrieval augmented generation', 'Vector databases with your documents', 'Chatbots with company knowledge', 'Internal document search'],
      },
    ],
    processTitle: 'How do we implement AI?',
    processSteps: [
      { step: '1', title: 'Workshop — free', description: 'We show with real examples where AI can help in your industry. We analyze your processes and estimate ROI.' },
      { step: '2', title: 'Pilot (1-2 weeks)', description: 'We implement the first AI solution on a selected process. We test, measure effects, optimize.' },
      { step: '3', title: 'Scaling', description: 'After the pilot success, we scale AI to other areas. We create internal procedures and train the team.' },
    ],
    ctaTitle: 'Want to implement AI in your business?',
    ctaSubtitle: 'Start with a free workshop — we will show you specific AI applications in your industry.',
    ctaButton: 'Book a free workshop',
    ctaAlt: 'or call: +48 798 943 352',
  },
};

export default function ServicePageClient({ lang }: ServicePageClientProps) {
  const c = lang === 'pl' ? content.pl : content.en;

  return (
    <>
      <BreadcrumbJsonLd lang={lang} items={[{ label: c.badge, href: `/${lang}/ai-dla-firm` }]} />
      <Breadcrumb lang={lang} items={[{ label: c.badge, href: `/${lang}/ai-dla-firm` }]} />
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
              <Link href={lang === 'pl' ? '/pl/automatyzacja-ai-wroclaw' : '/en/automatyzacja-ai-wroclaw'} className="inline-block bg-white border border-stone-300 text-stone-700 px-8 py-4 rounded-xl font-semibold hover:border-stone-400 transition-all">
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
                  <div className="flex flex-wrap gap-2">
                    <Link href={lang === 'pl' ? '/pl/chatbot-dla-firmy' : '/en/chatbot-dla-firmy'} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent/20 transition-colors">{lang === 'pl' ? 'Chatbot dla firmy →' : 'Chatbot for Business →'}</Link>
                    <Link href={lang === 'pl' ? '/pl/automatyzacja-procesow-biznesowych' : '/en/automatyzacja-procesow-biznesowych'} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent/20 transition-colors">{lang === 'pl' ? 'Automatyzacja procesów →' : 'Process Automation →'}</Link>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">{lang === 'pl' ? 'AI, która się uczy i rozwija' : 'AI that learns and evolves'}</h2>
                <p className="text-stone-600 mb-6">{lang === 'pl' ? 'Nasze rozwiązania AI nie są statyczne — uczą się na podstawie interakcji z klientami i stale się poprawiają. Im dłużej działają, tym lepiej działają.' : 'Our AI solutions are not static — they learn from customer interactions and constantly improve. The longer they run, the better they work.'}</p>
                <ul className="space-y-3">
                  {[
                    lang === 'pl' ? 'Feedback loop — AI uczy się na podstawie poprawek zespołu' : 'Feedback loop — AI learns from team corrections',
                    lang === 'pl' ? 'Cykliczne raporty z efektywności i rekomendacji' : 'Periodic reports on effectiveness and recommendations',
                    lang === 'pl' ? 'Możliwość人工人工微调 na specyfikę Twojej firmy' : 'Ability to fine-tune to your company specifics',
                    lang === 'pl' ? 'Pełna kontrola — możesz wyłączyć AI w każdej chwili' : 'Full control — you can turn off AI at any time',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-stone-700">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80" alt={lang === 'pl' ? 'Sztuczna inteligencja' : 'Artificial Intelligence'} width={500} height={400} className="w-full h-auto object-cover" />
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
