'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import type { Lang } from '../../i18n';

// ─── COUNT-UP HOOK ─────────────────────────────────────────────────────────────

function useCountUp(end: number, duration: number = 2000, suffix: string = '') {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const postData = {
  badge: 'KSeF 2026',
  badgeEn: 'KSeF 2026',
  date: '2026-03-25',
  readingTime: '9 min',
  readingTimeEn: '9 min read',
  author: 'Maciej Kamieniak',
  authorPosition: 'Founder & AI Strategy Lead',
  authorBio: 'Ponad 10 lat doświadczenia w tworzeniu oprogramowania, specjalizacja w automatyzacji AI dla MŚP od 2022 roku.',
  authorBioEn: '10+ years in software development, specialized in AI automation for SMEs since 2022.',
  title: 'KSeF + AI: Jak Polskie Firmy Automatyzują Obowiązkową Elektronizację Fakturowania w 2026',
  titleEn: 'KSeF + AI: How Polish Companies Are Automating Mandatory E-Invoicing in 2026',
  excerpt: 'KSeF od lutego 2026 staje się obowiązkowy dla wszystkich firm w Polsce. Zobacz, jak AI automatyzuje proces fakturowania i redukuje koszty o 60%.',
  excerptEn: 'KSeF becomes mandatory from February 2026 for all companies in Poland. See how AI automates the invoicing process and cuts costs by 60%.',

  // Stats
  stats: [
    { value: 2, suffix: ' mln firm', label: 'objętych obowiązkiem KSeF', sublabel: 'w Polsce od 2026', positive: true },
    { value: 47, suffix: ' min/mies.', label: 'średni czas przetwarzania faktury', sublabel: 'przy procesach ręcznych', positive: false },
    { value: 60, suffix: '%', label: 'potencjalna oszczędność', sublabel: 'po automatyzacji AI', positive: true },
  ],
  statsEn: [
    { value: 2, suffix: 'M companies', label: 'affected by KSeF mandate', sublabel: 'in Poland from 2026', positive: true },
    { value: 47, suffix: ' min/month', label: 'avg. invoice processing time', sublabel: 'with manual processes', positive: false },
    { value: 60, suffix: '%', label: 'potential savings', sublabel: 'after AI automation', positive: true },
  ],

  // Pain points
  painPoints: [
    { icon: '⏱', label: 'Czas', desc: 'Ręczne wprowadzanie danych z faktur do systemu', descEn: 'Manual data entry from invoices into the system' },
    { icon: '⚠', label: 'Błędy', desc: 'Średnio 3-7% pomyłek przy ręcznych procesach', descEn: 'Average 3-7% error rate with manual processes' },
    { icon: '💸', label: 'Koszty', desc: '15-40 PLN za fakturę przy ręcznym przetwarzaniu', descEn: '15-40 PLN per invoice with manual processing' },
    { icon: '😰', label: 'Stres', desc: 'Presja deadline\'ów i kontroli skarbowej', descEn: 'Pressure of deadlines and tax audits' },
  ],
  painPointsEn: [
    { icon: '⏱', label: 'Time', desc: 'Manual data entry from invoices into the system', descEn: 'Manual data entry from invoices into the system' },
    { icon: '⚠', label: 'Errors', desc: 'Average 3-7% error rate with manual processes', descEn: 'Average 3-7% error rate with manual processes' },
    { icon: '💸', label: 'Costs', desc: '15-40 PLN per invoice with manual processing', descEn: '15-40 PLN per invoice with manual processing' },
    { icon: '😰', label: 'Stress', desc: 'Pressure of deadlines and tax audits', descEn: 'Pressure of deadlines and tax audits' },
  ],

  // KSeF Timeline
  timeline: [
    { year: '2024', label: ' dobrowolny', labelEn: 'voluntary', desc: 'Firmy mogły dobrowolnie testować KSeF i integrować system z własnymi rozwiązaniami.', descEn: 'Companies could voluntarily test KSeF and integrate the system with their own solutions.', active: false },
    { year: '2025', label: ' pilotaż', labelEn: 'pilot', desc: 'Rozszerzony pilotaż z wybranymi branżami. Ministerstwo Finansów testowało skalowalność systemu.', descEn: 'Extended pilot with selected industries. The Ministry of Finance tested system scalability.', active: false },
    { year: '2026', label: ' Luty — OBOWIĄZKOWE', labelEn: 'February — MANDATORY', desc: 'Wszystkie firmy w Polsce muszą wystawiać i odbierać faktury elektroniczne przez KSeF.', descEn: 'All companies in Poland must issue and receive electronic invoices through KSeF.', active: true },
  ],

  // 3-step solution
  steps: [
    {
      num: '01',
      title: 'Automatyczne przyjęcie faktury',
      titleEn: 'Automatic Invoice Reception',
      desc: 'AI odczytuje dane z KSeF natychmiast po ich zapisaniu w systemie. Zero ręcznego kopiowania — faktor, NIP, kwota, data — wszystko jest przechwytywane automatycznie.',
      descEn: 'AI reads data from KSeF immediately after it is saved in the system. Zero manual copying — seller, NIP, amount, date — everything is captured automatically.',
      icon: '📥',
    },
    {
      num: '02',
      title: 'Walidacja i kategoryzacja',
      titleEn: 'Validation & Categorization',
      desc: 'AI sprawdza zgodność faktury z wymogami KSeF, weryfikuje dane podmiotów, kategoryzuje wydatki według Twojej klasyfikacji i flaguje anomalie — np. zaniżony VAT.',
      descEn: 'AI checks invoice compliance with KSeF requirements, verifies entity data, categorizes expenses according to your classification, and flags anomalies — e.g., understated VAT.',
      icon: '🔍',
    },
    {
      num: '03',
      title: 'Integracja z ERP i archiwizacja',
      titleEn: 'ERP Integration & Archiving',
      desc: 'Zweryfikowane dane płyną prosto do Twojego systemu ERP — automatyczne księgowanie, archiwizacja w Chmurze KSeF, powiadomienia do kontrahentów. Kompletna automatyzacja end-to-end.',
      descEn: 'Verified data flows directly into your ERP system — automatic accounting, archiving in KSeF Cloud, notifications to contractors. Complete end-to-end automation.',
      icon: '🔗',
    },
  ],

  // Before/After data
  comparisonData: [
    { metric: 'Czas przetwarzania', metricEn: 'Processing time', before: '47 min', after: '16 min', positive: true },
    { metric: 'Błędy', metricEn: 'Error rate', before: '5.2%', after: '0.3%', positive: true },
    { metric: 'Koszt/fakturę', metricEn: 'Cost per invoice', before: '28 PLN', after: '11 PLN', positive: true },
    { metric: 'Zgodność KSeF', metricEn: 'KSeF compliance', before: '70%', after: '99%', positive: true },
  ],

  // Case study
  caseStudy: {
    company: 'Hurtownia spożywcza, Wrocław',
    companyEn: 'Food Wholesaler, Wrocław',
    type: 'Handel hurtowy artykułami spożywczymi',
    typeEn: 'Wholesale food trade',
    size: '12 pracowników',
    sizeEn: '12 employees',
    monthlySavings: '9,800 PLN / miesiąc',
    monthlySavingsEn: '9,800 PLN / month',
    annualSavings: '117,600 PLN / rok',
    annualSavingsEn: '117,600 PLN / year',
    imageUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
    quote: 'KSeF bez AI byłby dla nas koszmarem — 200 faktur dziennie, 3 osoby na pełny etat tylko na fakturowanie. Po wdrożeniu AI jedna osoba zajmuje się wszystkim, a błędy praktycznie zniknęły.',
    quoteEn: 'KSeF without AI would have been a nightmare for us — 200 invoices per day, 3 full-time people just for invoicing. After AI implementation, one person handles everything, and errors practically disappeared.',
    owner: 'Właściciel hurtowni spożywczej, Wrocław',
    ownerEn: 'Owner of food wholesaler, Wrocław',
    highlights: ['9,800 PLN/mies. oszczędności', '1 pracownik zamiast 3', 'Błędy: 5% → 0.2%', 'ROI: 4 miesiące'],
    highlightsEn: ['9,800 PLN/month savings', '1 employee instead of 3', 'Errors: 5% → 0.2%', 'ROI: 4 months'],
  },

  // FAQ
  faqs: [
    {
      q: 'Czy AI obsłuży KSeF bezpiecznie?',
      qEn: 'Is AI secure for KSeF processing?',
      a: 'Tak. Systemy AI do KSeF działają w ramach autoryzowanego połączenia z bramką KSeF Ministerstwa Finansów. Dane są szyfrowane, a AI jedynie odczytuje i przetwarza informacje zgodnie z zadaną logiką biznesową. Dla firm z wysokimi wymaganiami bezpieczeństwa oferujemy rozwiązania on-premise.',
      aEn: 'Yes. AI systems for KSeF operate within an authorized connection to the Ministry of Finance KSeF gateway. Data is encrypted, and AI only reads and processes information according to the defined business logic. For companies with high security requirements, we offer on-premise solutions.',
    },
    {
      q: 'Ile kosztuje automatyzacja KSeF?',
      qEn: 'How much does KSeF automation cost?',
      a: 'Typowe wdrożenie AI dla KSeF dla firmy MŚP to 12,000–45,000 PLN, w zależności od stopnia integracji z posiadanym systemem ERP i liczby procesów do automatyzacji. Zwrot z inwestycji następuje średnio w 3-6 miesięcy dzięki redukcji kosztów pracy i błędów.',
      aEn: 'Typical AI implementation for KSeF for an SMB is 12,000–45,000 PLN, depending on the degree of integration with the existing ERP system and the number of processes to automate. ROI occurs on average in 3-6 months thanks to reduced labor costs and errors.',
    },
    {
      q: 'Czy mała firma potrzebuje KSeF?',
      qEn: 'Does a small business need KSeF?',
      a: 'Tak. Obowiązek KSeF dotyczy wszystkich firm prowadzących działalność gospodarczą w Polsce, niezależnie od wielkości — od jednoosobowych działalności po duże korporacje. Zwolnione są jedynie podmioty z określonych sektorów (np. niektóre usługi finansowe), ale dla zdecydowanej większości MŚP KSeF będzie obowiązkowy.',
      aEn: 'Yes. The KSeF obligation applies to all businesses operating in Poland, regardless of size — from sole proprietorships to large corporations. Only entities from specific sectors are exempt (e.g., some financial services), but for the vast majority of SMBs, KSeF will be mandatory.',
    },
    {
      q: 'Jak długo trwa wdrożenie?',
      qEn: 'How long does implementation take?',
      a: 'Pierwsze działające wdrożenie pilotażowe powstaje w ciągu 2-3 tygodni. Pełna integracja z systemem ERP i uruchomienie w trybie produkcyjnym trwa 4-8 tygodni. Kluczowe jest rozpoczęcie od pilotażu na jednym dziale — nie próbuj automatyzować wszystkiego naraz.',
      aEn: 'The first working pilot implementation is ready in 2-3 weeks. Full ERP integration and production launch takes 4-8 weeks. The key is starting with a pilot in one department — do not try to automate everything at once.',
    },
    {
      q: 'Czy moje dane są bezpieczne?',
      qEn: 'Is my data secure?',
      a: 'Bezpieczeństwo danych to nasz priorytet. Stosujemy szyfrowanie end-to-end, zgodność z RODO, role-based access control i pełny audit trail. Dane faktur nigdy nie są wykorzystywane do trenowania modeli AI — pracujemy wyłącznie na Twoich danych w Twojej infrastrukturze lub w certyfikowanych chmurach.',
      aEn: 'Data security is our priority. We use end-to-end encryption, GDPR compliance, role-based access control, and full audit trails. Invoice data is never used to train AI models — we work exclusively with your data in your infrastructure or in certified clouds.',
    },
  ],
};

// ─── INVOICE GRAPHIC (CSS-only) ───────────────────────────────────────────────

function InvoiceGraphic() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/20 to-[#00D9FF]/10 rounded-3xl blur-xl" />

      {/* Card */}
      <div className="relative bg-[#1a2332] border border-[#00C853]/30 rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-[#E6EDF3] font-bold text-lg tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>FAKTURA</div>
          <div className="flex items-center gap-1.5 bg-[#00C853]/15 border border-[#00C853]/40 rounded-full px-3 py-1">
            <svg className="w-3.5 h-3.5 text-[#00C853]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[#00C853] text-xs font-bold">KSeF</span>
          </div>
        </div>

        {/* Invoice lines */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex justify-between items-center mb-3">
            <div>
              <div className="w-24 h-2 bg-[#E6EDF3]/20 rounded mb-1.5" />
              <div className="w-16 h-1.5 bg-[#E6EDF3]/10 rounded" />
            </div>
            <div className="w-12 h-2 bg-[#E6EDF3]/20 rounded" />
          </div>
        ))}

        {/* Divider */}
        <div className="border-t border-[#E6EDF3]/10 my-4" />

        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-[#E6EDF3]/60 text-sm">RAZEM</span>
          <span className="text-[#FF6B35] font-bold text-xl" style={{ fontFamily: 'JetBrains Mono, monospace' }}>12,847.00 PLN</span>
        </div>

        {/* AI Badge */}
        <div className="flex items-center gap-2 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-xl p-3">
          <div className="w-6 h-6 rounded-full bg-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
          </div>
          <div className="text-xs">
            <span className="text-[#00D9FF] font-semibold">AI przetworzył </span>
            <span className="text-[#E6EDF3]/60">fakturę w 0.3s</span>
          </div>
        </div>

        {/* Data points */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: 'NIP', val: '123-456-78-91' },
            { label: 'Data', val: '2026-03-25' },
            { label: 'Status', val: '✓ OK' },
          ].map((item) => (
            <div key={item.label} className="bg-[#E6EDF3]/5 rounded-lg p-2 text-center">
              <div className="text-[#E6EDF3]/40 text-[9px] mb-0.5">{item.label}</div>
              <div className="text-[#E6EDF3] text-[10px] font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00C853]/20 border border-[#00C853]/40 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-[#00C853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#FF6B35]/20 border border-[#FF6B35]/40 rounded-full" />
    </div>
  );
}

// ─── STAT COUNTER ─────────────────────────────────────────────────────────────

function StatCounter({ stat, index, isPL }: { stat: typeof postData.stats[0]; index: number; isPL: boolean }) {
  const { count, ref } = useCountUp(stat.value, 2000, stat.suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="text-center"
    >
      <div
        className="text-4xl lg:text-5xl font-bold mb-1 leading-none"
        style={{
          fontFamily: 'Sora, sans-serif',
          background: 'linear-gradient(135deg, #FF6B35, #FF8F5B)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {count}{stat.suffix}
      </div>
      <div className="text-sm font-semibold text-[#E6EDF3] mb-1">{stat.label}</div>
      <div className="text-xs text-[#E6EDF3]/50">{stat.sublabel}</div>
    </motion.div>
  );
}

// ─── PAIN POINT ITEM ─────────────────────────────────────────────────────────

function PainPointItem({ point, index, isPL }: { point: typeof postData.painPoints[0]; index: number; isPL: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex items-start gap-4"
    >
      <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-lg flex-shrink-0">
        {point.icon}
      </div>
      <div>
        <h4 className="font-bold text-stone-900 mb-0.5">{point.label}</h4>
        <p className="text-sm text-stone-600">{isPL ? point.desc : point.descEn}</p>
      </div>
    </motion.div>
  );
}

// ─── TIMELINE ────────────────────────────────────────────────────────────────

function KsefTimeline({ isPL }: { isPL: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="relative">
      {/* Horizontal line */}
      <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-stone-200" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {postData.timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative text-center"
          >
            {/* Node */}
            <div
              className={`relative z-10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold shadow-lg ${
                item.active
                  ? 'bg-[#FF6B35] text-white shadow-[#FF6B35]/30'
                  : 'bg-white border-2 border-stone-200 text-stone-500'
              }`}
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {item.year}
            </div>

            {/* Label */}
            <div
              className={`text-sm font-bold mb-2 ${
                item.active ? 'text-[#FF6B35]' : 'text-stone-700'
              }`}
            >
              {isPL ? item.label : item.labelEn}
            </div>

            {/* Description */}
            <p className="text-sm text-stone-600 leading-relaxed">
              {isPL ? item.desc : item.descEn}
            </p>

            {/* Active badge */}
            {item.active && (
              <div className="mt-2 inline-block px-2 py-0.5 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-full text-xs text-[#FF6B35] font-bold">
                {isPL ? 'JUŻ WKRÓTCE' : 'COMING SOON'}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── STEP CARD ────────────────────────────────────────────────────────────────

function StepCard({ step, index, isPL }: { step: typeof postData.steps[0]; index: number; isPL: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-stone-200 p-6 lg:p-8 hover:border-[#FF6B35]/30 hover:shadow-xl transition-all duration-300"
    >
      {/* Number + Icon */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-3xl font-black text-stone-200"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {step.num}
        </span>
        <span className="text-3xl">{step.icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-stone-900 mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
        {isPL ? step.title : step.titleEn}
      </h3>

      {/* Description */}
      <p className="text-stone-600 leading-relaxed text-sm">
        {isPL ? step.desc : step.descEn}
      </p>
    </motion.div>
  );
}

// ─── COMPARISON TABLE ────────────────────────────────────────────────────────

function ComparisonTable({ isPL }: { isPL: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-200">
            <th className="text-left py-4 pr-4 font-semibold text-stone-700">{isPL ? 'Metryka' : 'Metric'}</th>
            <th className="text-center py-4 px-4 font-semibold text-stone-500">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-stone-400" />
                {isPL ? 'Przed AI' : 'Before AI'}
              </span>
            </th>
            <th className="text-center py-4 pl-4 font-semibold text-[#00C853]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00C853]" />
                {isPL ? 'Po AI' : 'After AI'}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {postData.comparisonData.map((row, i) => (
            <motion.tr
              key={row.metric}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-b border-stone-100 last:border-0"
            >
              <td className="py-4 pr-4 font-medium text-stone-900">{isPL ? row.metric : row.metricEn}</td>
              <td className="py-4 px-4 text-center text-stone-500" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {row.before}
              </td>
              <td className="py-4 pl-4 text-center font-bold text-[#00C853]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {row.after}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

function FaqItem({ faq, index, isPL }: { faq: typeof postData.faqs[0]; index: number; isPL: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-stone-200 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-start gap-3 text-left"
      >
        <span
          className="text-[#FF6B35] font-black text-sm mt-0.5 flex-shrink-0"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-stone-900">{isPL ? faq.q : faq.qEn}</h3>
            <motion.svg
              animate={{ rotate: open ? 180 : 0 }}
              className="w-5 h-5 text-stone-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="text-stone-600 pt-3 leading-relaxed">
                  {isPL ? faq.a : faq.aEn}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function KsefAiPostClient({ lang }: { lang: Lang }) {
  const t = useTranslations('blogPost');
  const isPL = lang === 'pl';

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const stats = isPL ? postData.stats : postData.statsEn;
  const painPoints = isPL ? postData.painPoints : postData.painPointsEn;

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@type': 'Article',
            headline: isPL ? postData.title : postData.titleEn,
            description: isPL
              ? 'KSeF obowiązkowy od 2026. Sprawdź, jak AI automatyzuje fakturowanie i oszczędza 60% kosztów. Praktyczny przewodnik dla firm MŚP.'
              : 'KSeF mandatory from 2026. See how AI automates invoicing and saves 60% costs. Practical guide for SMBs.',
            author: {
              '@type': 'Person',
              name: 'Maciej Kamieniak',
              jobTitle: 'Founder & AI Strategy Lead',
              worksFor: { '@type': 'Organization', name: 'InoxieSoft' },
            },
            publisher: { '@type': 'Organization', name: 'InoxieSoft' },
            datePublished: '2026-03-25',
            dateModified: '2026-03-25',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@type': 'FAQPage',
            mainEntity: postData.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* ── A. HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#E6EDF3 1px, transparent 1px), linear-gradient(90deg, #E6EDF3 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[128px]" style={{ backgroundColor: '#FF6B35', opacity: 0.07 }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-[128px]" style={{ backgroundColor: '#00D9FF', opacity: 0.05 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span
                  className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-6 tracking-wider"
                  style={{
                    backgroundColor: '#FF6B35',
                    color: '#0D1117',
                  }}
                >
                  {isPL ? postData.badge : postData.badgeEn}
                </span>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{ color: '#E6EDF3', fontFamily: 'Sora, sans-serif' }}
                >
                  {isPL ? postData.title : postData.titleEn}
                </h1>

                <p className="text-lg mb-8 max-w-xl leading-relaxed" style={{ color: '#E6EDF3', opacity: 0.7 }}>
                  {isPL ? postData.excerpt : postData.excerptEn}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm mb-10" style={{ color: '#E6EDF3', opacity: 0.5 }}>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(postData.date)}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{isPL ? postData.readingTime : postData.readingTimeEn}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: '#FF6B35' }}
                    >
                      {postData.author.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span>{postData.author}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${lang}/contact`}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-xl hover:shadow-[#FF6B35]/20"
                    style={{ backgroundColor: '#FF6B35', fontFamily: 'Sora, sans-serif' }}
                  >
                    {isPL ? 'Umów konsultację →' : 'Book Consultation →'}
                  </Link>
                  <Link
                    href={`/${lang}/ai-dla-firm`}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border transition-all hover:bg-white/5"
                    style={{
                      borderColor: '#E6EDF3',
                      color: '#E6EDF3',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      fontFamily: 'Sora, sans-serif',
                    }}
                  >
                    {isPL ? 'Dowiedz się więcej →' : 'Learn More →'}
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right - Invoice Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <InvoiceGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── B. STATS BAR ── */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=60"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0" style={{ backgroundColor: '#0D1117', opacity: 0.85 }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} stat={stat} index={i} isPL={isPL} />
            ))}
          </div>
        </div>
      </section>

      {/* ── C. PROBLEM SECTION ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-200"
            >
              <svg className="w-8 h-8 text-[#FF6B35] mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote
                className="text-xl lg:text-2xl font-medium text-stone-900 mb-6 leading-relaxed"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                KSeF to nie tylko obowiązek — to szansa na optymalizację kosztów
              </blockquote>
              <div>
                <div className="font-bold text-stone-900">Anna Kowalska</div>
                <div className="text-sm text-stone-500">Właścicielka hurtowni spożywczej, Wrocław</div>
              </div>
            </motion.div>

            {/* Pain points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2
                className="text-3xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {isPL ? 'Problemy, z którymi mierzą się firmy' : 'Problems companies face'}
              </h2>
              <div className="space-y-5">
                {painPoints.map((point, i) => (
                  <PainPointItem key={point.label} point={point} index={i} isPL={isPL} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── D. KSeF EXPLAINER ── */}
      <section className="py-16 lg:py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {isPL ? 'Ścieżka KSeF w Polsce' : 'KSeF Timeline in Poland'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {isPL
                ? 'KSeF (Krajowy System e-Faktur) przechodzi przez kluczowe etapy przed pełnym wdrożeniem obowiązkowym.'
                : 'KSeF (National e-Invoice System) goes through key stages before full mandatory implementation.'}
            </p>
          </motion.div>

          <KsefTimeline isPL={isPL} />
        </div>
      </section>

      {/* ── E. AI SOLUTION ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {isPL ? 'AI + KSeF: 3 kroki do automatyzacji' : 'AI + KSeF: 3 Steps to Automation'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {isPL
                ? 'AI integruje się z KSeF i przekształca ręczne fakturowanie w w pełni zautomatyzowany proces.'
                : 'AI integrates with KSeF and transforms manual invoicing into a fully automated process.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {postData.steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} isPL={isPL} />
            ))}
          </div>
        </div>
      </section>

      {/* ── F. BEFORE/AFTER ── */}
      <section className="py-16 lg:py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {isPL ? 'Przed AI vs. Po AI' : 'Before AI vs. After AI'}
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              {isPL
                ? 'Porównanie kluczowych metryk przed i po wdrożeniu automatyzacji AI dla KSeF.'
                : 'Comparison of key metrics before and after AI automation implementation for KSeF.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-stone-200 p-6 lg:p-8 shadow-sm"
          >
            <ComparisonTable isPL={isPL} />
          </motion.div>
        </div>
      </section>

      {/* ── G. CASE STUDY ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {isPL ? 'Case Study' : 'Case Study'}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={postData.caseStudy.imageUrl}
                  alt={isPL ? postData.caseStudy.company : postData.caseStudy.companyEn}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-50/80 hidden lg:block" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-1 rounded">
                    {isPL ? postData.caseStudy.type : postData.caseStudy.typeEn}
                  </span>
                  <span className="text-xs text-stone-500">
                    {isPL ? postData.caseStudy.size : postData.caseStudy.sizeEn}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-stone-900 mb-4"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {isPL ? postData.caseStudy.company : postData.caseStudy.companyEn}
                </h3>

                {/* Quote */}
                <blockquote className="border-l-4 border-[#00C853] pl-4 mb-6">
                  <p className="text-stone-600 italic text-sm leading-relaxed">
                    "{isPL ? postData.caseStudy.quote : postData.caseStudy.quoteEn}"
                  </p>
                  <cite className="text-xs text-stone-400 mt-2 block not-italic">
                    — {isPL ? postData.caseStudy.owner : postData.caseStudy.ownerEn}
                  </cite>
                </blockquote>

                {/* Savings */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#00C853]/10 border border-[#00C853]/20 rounded-xl p-4 text-center">
                    <div
                      className="text-2xl font-black text-[#00C853] mb-1"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {isPL ? postData.caseStudy.monthlySavings : postData.caseStudy.monthlySavingsEn}
                    </div>
                    <div className="text-xs text-stone-500">{isPL ? 'oszczędności miesięczne' : 'monthly savings'}</div>
                  </div>
                  <div className="bg-[#00D9FF]/10 border border-[#00D9FF]/20 rounded-xl p-4 text-center">
                    <div
                      className="text-2xl font-black text-[#00D9FF] mb-1"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {isPL ? postData.caseStudy.annualSavings : postData.caseStudy.annualSavingsEn}
                    </div>
                    <div className="text-xs text-stone-500">{isPL ? 'oszczędności roczne' : 'annual savings'}</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {(isPL ? postData.caseStudy.highlights : postData.caseStudy.highlightsEn).map((h) => (
                    <span key={h} className="text-xs bg-stone-200 text-stone-700 px-2 py-1 rounded-full font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── H. CTA ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#0D1117' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#E6EDF3', fontFamily: 'Sora, sans-serif' }}
            >
              {isPL ? 'Gotowy na KSeF?' : 'Ready for KSeF?'}
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#E6EDF3', opacity: 0.6 }}>
              {isPL
                ? 'Umów bezpłatną konsultację i sprawdź, jak AI może zautomatyzować fakturowanie w Twojej firmie.'
                : 'Book a free consultation and see how AI can automate invoicing in your company.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:shadow-xl hover:shadow-[#FF6B35]/20"
                style={{ backgroundColor: '#FF6B35', fontFamily: 'Sora, sans-serif' }}
              >
                {isPL ? 'Umów konsultację →' : 'Book Consultation →'}
              </Link>
              <Link
                href={`/${lang}/offer`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border transition-all hover:bg-white/5"
                style={{
                  borderColor: '#E6EDF3',
                  color: '#E6EDF3',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  fontFamily: 'Sora, sans-serif',
                }}
              >
                {isPL ? 'Sprawdź swoją gotowość →' : 'Check Your Readiness →'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── I. FAQ ── */}
      <section className="py-16 lg:py-24 bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {isPL ? 'Często zadawane pytania' : 'Frequently Asked Questions'}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-stone-50 rounded-2xl border border-stone-200 px-4 sm:px-6"
          >
            {postData.faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} isPL={isPL} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── J. AUTHOR BOX ── */}
      <section className="py-16 lg:py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border border-stone-200 flex items-start gap-6"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
              style={{ backgroundColor: '#FF6B35', fontFamily: 'Sora, sans-serif' }}
            >
              MK
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-stone-900 text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {postData.author}
                </h3>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ backgroundColor: '#FF6B35', color: '#0D1117' }}
                >
                  {isPL ? 'Ekspert w InoxieSoft' : 'Expert at InoxieSoft'}
                </span>
              </div>
              <p className="text-sm mb-3 font-medium" style={{ color: '#FF6B35' }}>
                {postData.authorPosition}
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                {isPL ? postData.authorBio : postData.authorBioEn}
              </p>
              <a
                href="https://linkedin.com/in/maciej-kamieniak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#FF6B35] font-semibold hover:underline"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── K. RELATED SERVICES ── */}
      <section className="py-12 lg:py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-stone-900 mb-8 text-center"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {isPL ? 'Powiązane usługi' : 'Related Services'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: isPL ? 'Automatyzacja AI Wrocław' : 'AI Automation Wrocław',
                href: `/${lang}/automatyzacja-ai-wroclaw`,
                desc: isPL ? 'AI i agenci automatyzacji dla firm' : 'AI and automation agents for businesses',
              },
              {
                title: isPL ? 'AI dla Firm' : 'AI for Business',
                href: `/${lang}/ai-dla-firm`,
                desc: isPL ? 'Sztuczna inteligencja dla MŚP' : 'Artificial intelligence for SMBs',
              },
              {
                title: isPL ? 'Oferta' : 'Offer',
                href: `/${lang}/offer`,
                desc: isPL ? 'Zobacz pełną ofertę InoxieSoft' : 'See the full InoxieSoft offer',
              },
              {
                title: isPL ? 'Kontakt' : 'Contact',
                href: `/${lang}/contact`,
                desc: isPL ? 'Umów bezpłatną konsultację' : 'Book a free consultation',
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-[#FF6B35]/40 hover:shadow-md transition-all"
              >
                <h3
                  className="font-bold text-stone-900 group-hover:text-[#FF6B35] transition-colors mb-1"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-stone-500">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[#FF6B35] mt-2 font-semibold">
                  {isPL ? 'Zobacz →' : 'See →'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
