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
    badge: 'Software House we Wrocławiu',
    headline: 'Software House — zespół ekspertów IT na Twój projekt',
    headlineAccent: 'Dedykowane oprogramowanie, które daje Ci przewagę',
    subheadline: 'Jesteśmy software house z Wrocławia. Budujemy dedykowane aplikacje webowe, systemy SaaS, integracje API i rozwiązania AI. Pracujemy z firmami MŚP w całej Polsce.',
    ctaPrimary: 'Zacznij projekt',
    ctaSecondary: 'Zobacz tech stack',
    stats: [
      { value: 'React', label: ' Next.js / Node.js' },
      { value: 'Python', label: ' AI / LLM / Automatyzacja' },
      { value: 'PostgreSQL', label: ' MongoDB / Redis' },
    ],
    whyTitle: 'Dlaczego InoxieSoft jako Twój software house?',
    whySubtitle: 'Nie jesteśmy singlowymi freelancerami ani wielką korporacją — jesteśmy idealnie sized zespołem, który może poświęcić pełną uwagę Twojemu projektowi.',
    whyItems: [
      { title: 'Pełna odpowiedzialność za projekt', description: 'Od analizy przez development po wdrożenie i wsparcie — bierzemy odpowiedzialność za całość. Nie zrzucamy winy na podwykonawców.' },
      { title: 'Nowoczesny stack technologiczny', description: 'Pracujemy na sprawdzonych, nowoczesnych technologiach — React, Next.js, Node.js, Python, PostgreSQL. Wybieramy narzędzia, nie szablony.' },
      { title: 'Czysty kod i architektura', description: 'Piszemy kod, z którego jesteśmy dumni. Architektura z myślą o przyszłości, dokumentacja, testy. Oddajemy Ci produkt, z którym możesz pracować latami.' },
      { title: 'Komunikacja na pierwszym miejscu', description: 'Nie znikamy po podpisaniu umowy. Cotygodniowe statusy, raporty, dostęp do repozytorium — jesteśmy transparentni przez cały projekt.' },
    ],
    servicesTitle: 'Nasze usługi programistyczne',
    servicesSubtitle: 'Oferujemy pełen zakres usług IT — od jednorazowych projektów po długoterminowe wsparcie.',
    services: [
      {
        title: 'Aplikacje webowe (React / Next.js)',
        description: 'Nowoczesne, szybkie i responsywne aplikacje webowe. Od MVP po pełnoprawne produkty enterprise.',
        features: ['Next.js 16 z Turbopack', 'TypeScript od początku', 'Responsywny design (Tailwind)', 'SEO-optimized (Core Web Vitals)'],
      },
      {
        title: 'Backend i API (Node.js / Python)',
        description: 'Solidne backendy z authentikacją, autoryzacją, bazami danych i API. Gotowe na skalę.',
        features: ['Node.js / Express lub FastAPI / Python', 'PostgreSQL, MongoDB, Redis', 'JWT / OAuth 2.0', 'WebSocket dla real-time'],
      },
      {
        title: 'AI i LLM (Python / OpenAI)',
        description: 'Integracje z modelami AI, budowanie agentów, automatyzacja z wykorzystaniem LLM.',
        features: ['Integracja GPT-4 / Claude / Gemini', 'RAG i bazy wektorowe', 'Automatyzacja z AI agents', 'Fine-tuning i optymalizacja modeli'],
      },
      {
        title: 'DevOps i infrastruktura',
        description: 'Wdrożenie, CI/CD, monitoring i utrzymanie. Twoja aplikacja działa, my się nią opiekujemy.',
        features: ['Docker / Kubernetes', 'GitHub Actions CI/CD', 'Vercel / AWS / Railway', 'Monitoring (Sentry, Grafana)'],
      },
    ],
    processTitle: 'Jak pracujemy?',
    processSteps: [
      { step: '1', title: 'Kickoff i discovery', description: 'Wspólnie analizujemy Twój pomysł, definiujemy wymagania i wybieramy najlepsze podejście techniczne. Ustalamy harmonogram i kamienie milowe.' },
      { step: '2', title: 'Sprinty i demo', description: 'Pracujemy w 2-tygodniowych sprintach. Na końcu każdego sprintu pokazujemy działający fragment produktu. Wszystko pod Twoją kontrolą.' },
      { step: '3', title: 'Wdrożenie i transfer', description: 'Po akceptacji wdrażamy produkt, szkolimy Twój zespół i przekazujemy pełną dokumentację. Zostajemy jako wsparcie na dłużej.' },
    ],
    ctaTitle: 'Masz projekt IT?',
    ctaSubtitle: 'Porozmawiajmy — ocenimy złożoność, zaproponujemy tech stack i oszacujemy czas. Bez zobowiązań.',
    ctaButton: 'Umów spotkanie',
    ctaAlt: 'lub napisz: kontakt@inoxiesoft.com',
  },
  en: {
    badge: 'Software House in Wrocław',
    headline: 'Software House — IT Expert Team for Your Project',
    headlineAccent: 'Custom software that gives you an edge',
    subheadline: 'We are a software house from Wrocław. We build custom web applications, SaaS systems, API integrations and AI solutions. We work with SMBs across Poland.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See tech stack',
    stats: [
      { value: 'React', label: ' Next.js / Node.js' },
      { value: 'Python', label: ' AI / LLM / Automation' },
      { value: 'PostgreSQL', label: ' MongoDB / Redis' },
    ],
    whyTitle: 'Why InoxieSoft as your software house?',
    whySubtitle: 'We are not single freelancers or a big corporation — we are an ideally sized team that can give full attention to your project.',
    whyItems: [
      { title: 'Full project responsibility', description: 'From analysis through development to deployment and support — we take responsibility for everything. We do not shift blame to subcontractors.' },
      { title: 'Modern tech stack', description: 'We work with proven, modern technologies — React, Next.js, Node.js, Python, PostgreSQL. We choose tools, not templates.' },
      { title: 'Clean code and architecture', description: 'We write code we are proud of. Architecture with the future in mind, documentation, tests. We deliver a product you can work with for years.' },
      { title: 'Communication first', description: 'We do not disappear after signing the contract. Weekly statuses, reports, repository access — we are transparent throughout the project.' },
    ],
    servicesTitle: 'Our programming services',
    servicesSubtitle: 'We offer a full range of IT services — from one-off projects to long-term support.',
    services: [
      {
        title: 'Web Applications (React / Next.js)',
        description: 'Modern, fast and responsive web applications. From MVP to full enterprise products.',
        features: ['Next.js 16 with Turbopack', 'TypeScript from day one', 'Responsive design (Tailwind)', 'SEO-optimized (Core Web Vitals)'],
      },
      {
        title: 'Backend and API (Node.js / Python)',
        description: 'Solid backends with authentication, authorization, databases and API. Ready to scale.',
        features: ['Node.js / Express or FastAPI / Python', 'PostgreSQL, MongoDB, Redis', 'JWT / OAuth 2.0', 'WebSocket for real-time'],
      },
      {
        title: 'AI and LLM (Python / OpenAI)',
        description: 'AI model integrations, building agents, automation using LLM.',
        features: ['GPT-4 / Claude / Gemini integration', 'RAG and vector databases', 'Automation with AI agents', 'Fine-tuning and model optimization'],
      },
      {
        title: 'DevOps and Infrastructure',
        description: 'Deployment, CI/CD, monitoring and maintenance. Your app runs, we take care of it.',
        features: ['Docker / Kubernetes', 'GitHub Actions CI/CD', 'Vercel / AWS / Railway', 'Monitoring (Sentry, Grafana)'],
      },
    ],
    processTitle: 'How do we work?',
    processSteps: [
      { step: '1', title: 'Kickoff and discovery', description: 'Together we analyze your idea, define requirements and choose the best technical approach. We set a schedule and milestones.' },
      { step: '2', title: 'Sprints and demo', description: 'We work in 2-week sprints. At the end of each sprint we show a working fragment of the product. Everything under your control.' },
      { step: '3', title: 'Deployment and transfer', description: 'After acceptance, we deploy the product, train your team and hand over full documentation. We stay as support for the long term.' },
    ],
    ctaTitle: 'Have an IT project?',
    ctaSubtitle: 'Let\'s talk — we will assess complexity, propose a tech stack and estimate time. No obligations.',
    ctaButton: 'Book a meeting',
    ctaAlt: 'or write: kontakt@inoxiesoft.com',
  },
};

export default function ServicePageClient({ t, lang }: ServicePageClientProps) {
  const c = lang === 'pl' ? content.pl : content.en;

  return (
    <>
      <BreadcrumbJsonLd lang={lang} items={[{ label: c.badge, href: `/${lang}/software-house-wroclaw` }]} />
      <Breadcrumb lang={lang} items={[{ label: c.badge, href: `/${lang}/software-house-wroclaw` }]} />
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
              <Link href={lang === 'pl' ? '/pl/firma-programistyczna-wroclaw' : '/en/firma-programistyczna-wroclaw'} className="inline-block bg-white border border-stone-300 text-stone-700 px-8 py-4 rounded-xl font-semibold hover:border-stone-400 transition-all">
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
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">{lang === 'pl' ? 'Stack technologiczny' : 'Technology Stack'}</h2>
                <p className="text-stone-600 mb-6">{lang === 'pl' ? 'Wybieramy najlepsze narzędzia do każdego projektu. Oto nasz główny stack:' : 'We choose the best tools for each project. Here is our main stack:'}</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { cat: 'Frontend', items: 'React, Next.js 16, TypeScript, Tailwind CSS' },
                    { cat: 'Backend', items: 'Node.js, FastAPI, Python, GraphQL' },
                    { cat: 'Bazy danych', items: 'PostgreSQL, MongoDB, Redis, Supabase' },
                    { cat: 'AI / ML', items: 'OpenAI, LangChain, ChromaDB, Hugging Face' },
                    { cat: 'Infrastructure', items: 'Vercel, AWS, Railway, Docker' },
                    { cat: 'Monitoring', items: 'Sentry, Grafana, Posthog, Vercel Analytics' },
                  ].map((tech) => (
                    <div key={tech.cat}>
                      <p className="font-semibold text-stone-900 text-sm">{tech.cat}</p>
                      <p className="text-stone-500 text-sm">{tech.items}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt={lang === 'pl' ? 'Programowanie' : 'Programming'} width={500} height={400} className="w-full h-auto object-cover" />
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
