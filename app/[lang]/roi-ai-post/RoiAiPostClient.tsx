'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import type { Lang } from '../../i18n';

// ─── DATA ───────────────────────────────────────────────────────────────────

const postData = {
  badge: 'ROI AI 2026',
  title: 'Kalkulacja ROI AI w polskim biznesie',
  titleAccent: 'Analiza 47 firm i 12 branż',
  excerpt: 'Ile naprawdę wynosi zwrot z inwestycji w sztuczną inteligencję w firmach MŚP? Kompleksowa analiza oparta na danych z realnych wdrożeń.',
  author: 'Maciej Kamieniak',
  authorPosition: 'Founder & AI Strategy Lead',
  authorBio: 'Ponad 10 lat doświadczenia w tworzeniu oprogramowania, specjalizacja w automatyzacji AI dla MŚP od 2022 roku. Prelegent na konferencjach AI w Polsce.',
  date: '2026-03-05',
  readingTime: '18 min',
  stats: [
    { value: '220-340%', label: 'Średni ROI', sublabel: 'w 12 miesięcy', animate: false },
    { value: '47', label: 'Przebadanych firm', sublabel: '12 branż', animate: true },
    { value: '2.1', label: 'Najszybszy zwrot', sublabel: 'miesiąca', animate: false, suffix: ' miesiąca' },
    { value: '-40%', label: 'Koszty operacyjne', sublabel: 'średnio', animate: false },
  ],
  statsEn: [
    { value: '220-340%', label: 'Average ROI', sublabel: 'within 12 months', animate: false },
    { value: '47', label: 'Companies analyzed', sublabel: '12 industries', animate: true },
    { value: '2.1', label: 'Fastest payback', sublabel: 'months', animate: false, suffix: ' months' },
    { value: '-40%', label: 'Operational costs', sublabel: 'on average', animate: false },
  ],
  keyNumbers: [
    'Średni zwrot z inwestycji AI: **220-340%** w 12 miesięcy',
    'Najszybszy zwrot: **2.1 miesiąca** (firma usługowa, automatyzacja obsługi klienta)',
    'Najwolniejszy zwrot: **11 miesięcy** (duża firma produkcyjna, pełna transformacja)',
    'Automatyzacja redukuje koszty operacyjne średnio o **40%**',
    '70% firm widzi pierwsze efekty w ciągu **30 dni** od startu projektu',
  ],
  caseStudies: [
    {
      id: 1,
      company: 'Firma logistyczna',
      type: 'Transport i logistyka',
      size: '150 pracowników',
      roi: '394%',
      months: '2.4 miesiąca',
      metrics: [
        { label: 'Koszty paliwa', change: '-22%', positive: true },
        { label: 'Dostawy na czas', change: '94% → 98.5%', positive: true },
        { label: 'Wykorzystanie kierowców', change: '+18%', positive: true },
      ],
      description: 'Wdrożenie AI do optymalizacji tras i predykcji czasu dostawy. Agent AI analizuje dane z GPS, prognozy pogody, natężenie ruchu i historię dostaw w czasie rzeczywistym. Rezultatem jest znacząca redukcja kosztów paliwa, większa punktualność i wyższe wykorzystanie zasobów.',
      highlights: ['ROI 394%', '2.4 miesiąca zwrot', '890,000 PLN oszczędności rocznie'],
    },
    {
      id: 2,
      company: 'Firma produkcyjna',
      type: 'Produkcja części samochodowych',
      size: '300 pracowników',
      roi: '187%',
      months: '6.4 miesiąca',
      metrics: [
        { label: 'Wskaźnik defektów', change: '-35%', positive: true },
        { label: 'Nieplanowane przestoje', change: '-60%', positive: true },
        { label: 'Zwroty klientów', change: '-45%', positive: true },
      ],
      description: 'Implementacja AI do kontroli jakości z wykorzystaniem computer vision oraz predykcyjnego utrzymania ruchu. System analizuje obrazy z kamer przemysłowych w czasie rzeczywistym i przewiduje awarie maszyn zanim do nich dojdzie.',
      highlights: ['ROI 187%', '6.4 miesiąca zwrot', '280,000 PLN oszczędności rocznie'],
    },
    {
      id: 3,
      company: 'Firma usługowa',
      type: 'Usługi prawne i doradcze',
      size: '50 pracowników',
      roi: '420%',
      months: '2.1 miesiąca',
      metrics: [
        { label: 'Godziny rozliczalne', change: '+18%', positive: true },
        { label: 'Czas przeglądu dokumentów', change: '-65%', positive: true },
        { label: 'Wskaźnik wygranych ofert', change: '+25%', positive: true },
      ],
      description: 'Automatyzacja analizy umów i generowania ofert. Agent AI przeszukuje bazę wiedzy, analizuje wzorce i przygotowuje wstępne projekty dokumentów. Konsultanci mogą skupić się na pracy strategicznej zamiast żmudnych analiz.',
      highlights: ['ROI 420%', '2.1 miesiąca zwrot', 'Najwyższy ROI w bazie'],
    },
  ],
  roiTable: [
    { type: 'Obsługa klienta', roi: '340%', period: '3 miesiące', success: '94%' },
    { type: 'Przetwarzanie dokumentów', roi: '280%', period: '5 miesięcy', success: '89%' },
    { type: 'Automatyzacja email', roi: '150%', period: '10 miesięcy', success: '85%' },
    { type: 'Automatyzacja procesów', roi: '220%', period: '6 miesięcy', success: '87%' },
    { type: 'Analityka predykcyjna', roi: '190%', period: '8 miesięcy', success: '82%' },
    { type: 'Zarządzanie wiedzą', roi: '160%', period: '9 miesięcy', success: '78%' },
  ],
  timeline: [
    { phase: 'AUDYT', duration: 'Tydz 1-2', icon: '🔍', description: 'Analiza procesów, identyfikacja quick wins, audit data readiness' },
    { phase: 'PILOT', duration: 'Tydz 3-6', icon: '🧪', description: 'Wdrożenie pilotażowe w jednym obszarze, zbieranie feedbacku' },
    { phase: 'WDROŻENIE', duration: 'Mies 2-4', icon: '🚀', description: 'Skalowanie na produkcję, integracja z systemami, szkolenia' },
    { phase: 'OPTYMALIZACJA', duration: 'Mies 4-12', icon: '📈', description: 'Ciągłe doskonalenie, rozszerzanie zakresu, optymalizacja kosztów' },
  ],
  caseStudiesEn: [
    {
      id: 1,
      company: 'Logistics Company',
      type: 'Transport & Logistics',
      size: '150 employees',
      roi: '394%',
      months: '2.4 months',
      metrics: [
        { label: 'Fuel costs', change: '-22%', positive: true },
        { label: 'On-time deliveries', change: '94% → 98.5%', positive: true },
        { label: 'Driver utilization', change: '+18%', positive: true },
      ],
      description: 'AI implementation for route optimization and delivery time prediction. AI agent analyzes GPS data, weather forecasts, traffic patterns, and delivery history in real time. Result: significant fuel cost reduction, higher punctuality, and better resource utilization.',
      highlights: ['ROI 394%', '2.4 months return', '890,000 PLN annual savings'],
    },
    {
      id: 2,
      company: 'Manufacturing Company',
      type: 'Automotive Parts Production',
      size: '300 employees',
      roi: '187%',
      months: '6.4 months',
      metrics: [
        { label: 'Defect rate', change: '-35%', positive: true },
        { label: 'Unplanned downtime', change: '-60%', positive: true },
        { label: 'Customer returns', change: '-45%', positive: true },
      ],
      description: 'AI implementation for quality control using computer vision and predictive maintenance. System analyzes images from industrial cameras in real time and predicts machine failures before they occur.',
      highlights: ['ROI 187%', '6.4 months return', '280,000 PLN annual savings'],
    },
    {
      id: 3,
      company: 'Service Company',
      type: 'Legal & Advisory Services',
      size: '50 employees',
      roi: '420%',
      months: '2.1 months',
      metrics: [
        { label: 'Billable hours', change: '+18%', positive: true },
        { label: 'Document review time', change: '-65%', positive: true },
        { label: 'Proposal win rate', change: '+25%', positive: true },
      ],
      description: 'Contract analysis and proposal generation automation. AI agent searches the knowledge base, analyzes patterns, and prepares initial document drafts. Consultants can focus on strategic work instead of tedious analysis.',
      highlights: ['ROI 420%', '2.1 months return', 'Highest ROI in database'],
    },
  ],
  roiTableEn: [
    { type: 'Customer Service', roi: '340%', period: '3 months', success: '94%' },
    { type: 'Document Processing', roi: '280%', period: '5 months', success: '89%' },
    { type: 'Email Automation', roi: '150%', period: '10 months', success: '85%' },
    { type: 'Process Automation', roi: '220%', period: '6 months', success: '87%' },
    { type: 'Predictive Analytics', roi: '190%', period: '8 months', success: '82%' },
    { type: 'Knowledge Management', roi: '160%', period: '9 months', success: '78%' },
  ],
  timelineEn: [
    { phase: 'AUDIT', duration: 'Week 1-2', icon: '🔍', description: 'Process analysis, quick wins identification, data readiness audit' },
    { phase: 'PILOT', duration: 'Week 3-6', icon: '🧪', description: 'Pilot deployment in one area, feedback collection' },
    { phase: 'DEPLOYMENT', duration: 'Month 2-4', icon: '🚀', description: 'Production scaling, system integration, training' },
    { phase: 'OPTIMIZATION', duration: 'Month 4-12', icon: '📈', description: 'Continuous improvement, scope expansion, cost optimization' },
  ],
  faqs: [
    {
      q: 'Czy AI się opłaca dla małych firm?',
      a: 'Tak. Nawet firmy z 1-5 pracownikami mogą zautomatyzować 20-40% procesów i zobaczyć ROI w 3-6 miesięcy. W naszej bazie najszybszy zwrot wyniósł 2.1 miesiąca.',
    },
    {
      q: 'Ile kosztuje wdrożenie AI?',
      a: 'Typowe wdrożenie dla firmy MŚP to 15,000-50,000 PLN, w zależności od zakresu. Zwrot następuje średnio w 4-8 miesięcy. Inwestycja zwraca się średnio 3x w ciągu pierwszego roku.',
    },
    {
      q: 'Czy potrzebuję własnego zespołu AI?',
      a: 'Nie. Dedykowany zespół zewnętrzny (jak InoxieSoft) wdraża i utrzymuje rozwiązanie. Ty tylko korzystasz z efektów. Twoi pracownicy nie muszą mieć żadnego doświadczenia z AI.',
    },
    {
      q: 'Jakie dane potrzebuję do wdrożenia AI?',
      a: 'Zależy od procesu. Minimum to opis procesu + dostęp do systemów (CRM, email, bazy danych). Resztę analizujemy na etapie audytu. Na podstawie 47 wdrożeń możemy powiedzieć, że jakość danych to 20-30% sukcesu projektu.',
    },
    {
      q: 'Od czego zacząć?',
      a: 'Zamów bezpłatny audyt procesów — w ciągu 1h analizy powiemy, gdzie AI przyniesie najwięcej korzyści w Twojej firmie i oszacujemy potencjalny ROI.',
    },
  ],
};

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

// ─── EXPANDABLE CARD ─────────────────────────────────────────────────────────

function CaseStudyCard({ study, lang }: { study: typeof postData.caseStudies[0]; lang: Lang }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all"
    >
      {/* Card Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                {study.type}
              </span>
              <span className="text-xs text-stone-500">{study.size}</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-1">{study.company}</h3>
            <p className="text-sm text-stone-500">{study.type}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-bold text-accent">{study.roi}</div>
            <div className="text-xs text-stone-500">ROI</div>
            <div className="text-xs text-stone-400 mt-1">{study.months} {lang === 'pl' ? 'zwrot' : 'return'}</div>
          </div>
        </div>

        {/* Metrics Preview */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {study.metrics.slice(0, 3).map((metric, i) => (
            <div key={i} className="bg-stone-50 rounded-lg p-3">
              <div className="text-xs text-stone-500 mb-1">{metric.label}</div>
              <div className="text-sm font-bold text-stone-900">{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Expand indicator */}
        <div className="flex items-center gap-1 mt-4 text-accent text-sm font-semibold">
          <span>{expanded ? (lang === 'pl' ? 'Zwiń' : 'Collapse') : (lang === 'pl' ? 'Zobacz szczegóły' : 'View details')}</span>
          <motion.svg
            animate={{ rotate: expanded ? 180 : 0 }}
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-stone-100 pt-4">
          <p className="text-stone-600 mb-4">{study.description}</p>
          <div className="flex flex-wrap gap-2">
            {study.highlights.map((h, i) => (
              <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                {h}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── FAQ ITEM ────────────────────────────────────────────────────────────────

function FaqItem({ faq, index }: { faq: typeof postData.faqs[0]; index: number }) {
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
        <span className="text-accent font-bold text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-stone-900">{faq.q}</h3>
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
          <motion.div
            initial={false}
            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-stone-600 pt-3 leading-relaxed">{faq.a}</p>
          </motion.div>
        </div>
      </button>
    </motion.div>
  );
}

// ─── TIMELINE STEP ────────────────────────────────────────────────────────────

function TimelineStep({ step, index, total }: { step: typeof postData.timeline[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex items-start gap-4"
    >
      {/* Icon Circle */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          className="w-14 h-14 rounded-full bg-white border-2 border-stone-200 flex items-center justify-center text-2xl shadow-sm"
        >
          {step.icon}
        </motion.div>
        {/* Connecting line */}
        {index < total - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
            style={{ transformOrigin: 'top' }}
            className="w-0.5 h-16 bg-stone-200 mt-2"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-bold text-stone-900">{step.phase}</h3>
          <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded">{step.duration}</span>
        </div>
        <p className="text-sm text-stone-600">{step.description}</p>
      </div>
    </motion.div>
  );
}

// ─── ROI BAR CHART (SVG) ─────────────────────────────────────────────────────

function RoiBarChart() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const bars = [
    { label: 'Obsługa klienta', value: 340, color: '#d97706' },
    { label: 'Dokumenty', value: 280, color: '#d97706' },
    { label: 'Procesy', value: 220, color: '#d97706' },
    { label: 'Analityka', value: 190, color: '#d97706' },
    { label: 'Email', value: 150, color: '#d97706' },
  ].map((bar, i) => {
    const chartStartX = 16;
    const barWidth = 36;
    const gap = 20;
    return { ...bar, x: chartStartX + i * (barWidth + gap), width: barWidth };
  });

  const maxValue = 350;
  const chartHeight = 200;
  const barWidth = 48;
  const gap = 24;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${16 + bars.length * (36 + 20) + 40} ${chartHeight + 60}`}
      className="w-full h-auto"
    >
      {/* Y-axis lines */}
      {[0, 100, 200, 300].map((val) => {
        const y = chartHeight - (val / maxValue) * chartHeight;
        return (
          <g key={val}>
            <line x1="30" y1={y} x2={16 + bars.length * (36 + 20) + 30} y2={y} stroke="#e7e5e4" strokeWidth="1" strokeDasharray="4 4" />
            <text x="25" y={y + 4} textAnchor="end" className="text-xs fill-stone-400" style={{ fontSize: '10px' }}>
              {val}%
            </text>
          </g>
        );
      })}

      {/* Bars */}
      {bars.map((bar, i) => {
        const barHeight = (bar.value / maxValue) * chartHeight;
        const y = chartHeight - barHeight;

        return (
          <g key={i}>
            <motion.rect
              x={bar.x}
              y={chartHeight}
              width={bar.width}
              height={0}
              fill={bar.color}
              rx="4"
              animate={isInView ? {
                y: chartHeight - barHeight,
                height: barHeight,
              } : {
                y: chartHeight,
                height: 0,
              }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Value label */}
            <motion.text
              x={bar.x + bar.width / 2}
              y={chartHeight - barHeight - 8}
              textAnchor="middle"
              className="fill-stone-700 font-bold"
              style={{ fontSize: '11px' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.1 + 0.6 }}
            >
              {bar.value}%
            </motion.text>
            {/* X label */}
            <motion.text
              x={bar.x + bar.width / 2}
              y={chartHeight + 16}
              textAnchor="middle"
              className="fill-stone-500"
              style={{ fontSize: '9px' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.1 + 0.7 }}
            >
              {bar.label}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function RoiAiPostClient({
  lang,
}: {
  lang: Lang;
}) {
  const t = useTranslations('blogPost');
  const isPL = lang === 'pl';

  const content = isPL ? {
    badge: 'ROI AI 2026',
    title: 'Kalkulacja ROI AI w polskim biznesie: Analiza 47 firm i 12 branż',
    excerpt: 'Ile naprawdę wynosi zwrot z inwestycji w sztuczną inteligencję w firmach MŚP?',
    date: '2026-03-05',
    readTime: '18 min czytania',
    keyNumbers: [
      'Średni zwrot z inwestycji AI: **220-340%** w 12 miesięcy',
      'Najszybszy zwrot: **2.1 miesiąca** (firma usługowa, automatyzacja obsługi klienta)',
      'Najwolniejszy zwrot: **11 miesięcy** (duża firma produkcyjna, pełna transformacja)',
      'Automatyzacja redukuje koszty operacyjne średnio o **40%**',
      '70% firm widzi pierwsze efekty w ciągu **30 dni** od startu projektu',
    ],
    authorName: 'Maciej Kamieniak',
    authorBio: 'Założyciel InoxieSoft, ekspert AI z 4-letnim doświadczeniem we wdrażaniu automatyzacji AI dla firm MŚP w Polsce.',
  } : {
    badge: 'AI ROI 2026',
    title: 'AI ROI Calculation for Polish SMBs: Analysis of 47 Companies and 12 Industries',
    excerpt: 'What is the real return on investment in artificial intelligence for SMBs?',
    date: '2026-03-05',
    readTime: '18 min read',
    keyNumbers: [
      'Average AI ROI: **220-340%** within 12 months',
      'Fastest ROI: **2.1 months** (service company, customer service automation)',
      'Slowest ROI: **11 months** (large manufacturing company, full transformation)',
      'Automation reduces operational costs by an average of **40%**',
      '70% of companies see first results within **30 days** of project start',
    ],
    authorName: 'Maciej Kamieniak',
    authorBio: 'Founder of InoxieSoft, AI expert with 4 years of experience implementing AI automation for SMBs in Poland.',
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── A. HERO SECTION ── */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=60"
            alt="Dashboard analytics"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900/95 to-stone-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left - Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 text-xs font-bold bg-accent text-white rounded-full mb-6 tracking-wider">
                  {content.badge}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {content.title}
                </h1>
                <p className="text-lg text-stone-300 mb-8 max-w-xl leading-relaxed">
                  {content.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(content.date)}</span>
                  </div>
                  <span className="text-stone-600">•</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{content.readTime}</span>
                  </div>
                  <span className="text-stone-600">•</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                      {content.authorName.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <span>{content.authorName}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Chart */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="text-sm font-semibold text-stone-300 mb-4 uppercase tracking-wider">
                  {lang === 'pl' ? 'Średni ROI wg typu wdrożenia' : 'Average ROI by Implementation Type'}
                </div>
                <RoiBarChart />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── B. KEY NUMBERS SECTION ── */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {(isPL ? postData.stats : postData.statsEn).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-stone-50 rounded-2xl p-6 text-center border border-stone-100 hover:border-accent/20 transition-all"
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2 leading-none">
                  {stat.animate && stat.value === '47' ? (
                    <AnimatedCounter target={47} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-sm font-semibold text-stone-900 mb-1">{stat.label}</div>
                <div className="text-xs text-stone-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. WHY ROI SECTION ── */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-stone-600 leading-relaxed text-lg mb-6">
              {lang === 'pl'
                ? 'Po pracy z ponad 50 polskimi firmami nad wdrożeniami AI w różnych branżach zebraliśmy kompleksowe dane o tym, co działa, co nie działa, i jakie faktyczne zwroty można oczekiwać. To nie jest teoretyczna analiza — te liczby pochodzą z rzeczywistych wdrożeń na polskim rynku w ciągu ostatnich 18 miesięcy.'
                : 'After working with over 50 Polish companies on AI implementations across various industries, we have gathered comprehensive data on what works, what does not, and what actual returns you can expect. These are not theoretical numbers — they come from real implementations in the Polish market over the past 18 months.'}
            </p>
          </div>

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <h3 className="font-bold text-stone-900 mb-3 text-lg">
                  {lang === 'pl' ? 'Kluczowe liczby' : 'Key Numbers'}
                </h3>
                <ul className="space-y-2">
                  {content.keyNumbers.map((item: string, i: number) => (
                    <li key={i} className="text-stone-700 text-sm flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      <span>{item.replace(/\*\*(.*?)\*\*/g, '$1')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── D. CASE STUDIES SECTION ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {lang === 'pl' ? 'Studia przypadków' : 'Case Studies'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {lang === 'pl'
                ? 'Trzy szczegółowe przykłady wdrożeń AI z realnymi danymi finansowymi.'
                : 'Three detailed examples of AI implementations with real financial data.'}
            </p>
          </motion.div>

          <div className="space-y-4">
            {(isPL ? postData.caseStudies : postData.caseStudiesEn).map((study, i) => (
              <CaseStudyCard key={study.id} study={study} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ── E. ROI TABLE SECTION ── */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {lang === 'pl' ? 'ROI według typu wdrożenia' : 'ROI by Implementation Type'}
            </h2>
            <p className="text-stone-600">
              {lang === 'pl'
                ? 'Średnie wyniki z 47 firm na podstawie 18 miesięcy obserwacji.'
                : 'Average results from 47 companies based on 18 months of observation.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse rounded-xl overflow-hidden border border-stone-200 shadow-sm">
              <thead>
                <tr className="bg-stone-800 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">{lang === 'pl' ? 'Typ wdrożenia' : 'Implementation Type'}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">{lang === 'pl' ? 'Średni ROI' : 'Average ROI'}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">{lang === 'pl' ? 'Okres zwrotu' : 'Payback Period'}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">{lang === 'pl' ? 'Skuteczność' : 'Success Rate'}</th>
                </tr>
              </thead>
              <tbody>
                {(isPL ? postData.roiTable : postData.roiTableEn).map((row, i) => (
                  <tr
                    key={i}
                    className={`${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'} hover:bg-yellow-50 transition-colors border-b border-stone-100 last:border-0`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-stone-900">{row.type}</td>
                    <td className="px-6 py-4 text-center text-sm font-bold text-accent">{row.roi}</td>
                    <td className="px-6 py-4 text-center text-sm text-stone-600">{row.period}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-stone-700">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        {row.success}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="text-xs text-stone-500 mt-4 text-center">
            {lang === 'pl'
              ? '* Dane na podstawie badań 47 firm, 12 branż, InoxieSoft 2024-2026. Indywidualne wyniki mogą się różnić.'
              : '* Data based on research of 47 companies, 12 industries, InoxieSoft 2024-2026. Individual results may vary.'}
          </p>
        </div>
      </section>

      {/* ── F. ROI TIMELINE ── */}
      <section className="py-16 lg:py-20 bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {lang === 'pl' ? 'Fazy wdrożenia AI' : 'AI Implementation Phases'}
            </h2>
            <p className="text-stone-600">
              {lang === 'pl'
                ? 'Od audytu do pełnej optymalizacji — nasza sprawdzona metodologia.'
                : 'From audit to full optimization — our proven methodology.'}
            </p>
          </motion.div>

          <div>
            {(isPL ? postData.timeline : postData.timelineEn).map((step, i) => (
              <TimelineStep key={step.phase} step={step} index={i} total={(isPL ? postData.timeline : postData.timelineEn).length} />
            ))}
          </div>
        </div>
      </section>

      {/* ── G. SOFT CTA ── */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-lg text-stone-700 mb-2">
            {lang === 'pl' ? 'Chcesz podobne wyniki?' : 'Want similar results?'}
          </p>
          <p className="text-stone-500 mb-6">
            {lang === 'pl'
              ? 'Porozmawiajmy o tym, jak AI może transformować Twój biznes.'
              : 'Let\'s talk about how AI can transform your business.'}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            {lang === 'pl' ? 'Porozmawiajmy →' : 'Let\'s talk →'}
          </Link>
        </div>
      </section>

      {/* ── H. FAQ SECTION ── */}
      <section className="py-16 lg:py-20 bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {lang === 'pl' ? 'Często zadawane pytania' : 'Frequently Asked Questions'}
            </h2>
          </motion.div>

          <div>
            {postData.faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── I. AUTHOR SECTION ── */}
      <section className="py-16 lg:py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border border-stone-200 flex items-start gap-6"
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
              {content.authorName.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-stone-900 text-lg">{content.authorName}</h3>
                <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-semibold">
                  {isPL ? 'Ekspert w InoxieSoft' : 'Expert at InoxieSoft'}
                </span>
              </div>
              <p className="text-sm text-accent font-medium mb-3">{postData.authorPosition}</p>
              <p className="text-stone-600 text-sm leading-relaxed">{content.authorBio}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── J. FINAL CTA SECTION ── */}
      <section className="py-16 lg:py-20 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {lang === 'pl' ? 'Oblicz swoje ROI z AI' : 'Calculate Your AI ROI'}
            </h2>
            <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
              {lang === 'pl'
                ? 'Umów bezpłatną konsultację i dowiedz się, ile AI może przynieść Twojej firmie.'
                : 'Book a free consultation and find out how much AI can bring to your company.'}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="inline-block bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              {lang === 'pl' ? 'Oblicz ROI →' : 'Calculate ROI →'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── K. RELATED SERVICES ── */}
      <section className="py-12 lg:py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            {lang === 'pl' ? 'Powiązane usługi' : 'Related Services'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: lang === 'pl' ? 'Automatyzacja AI' : 'AI Automation',
                href: `/${lang}/automatyzacja-ai-wroclaw`,
                desc: lang === 'pl' ? 'Agenci AI i automatyzacja procesów' : 'AI agents and process automation',
              },
              {
                title: lang === 'pl' ? 'AI dla Firm' : 'AI for Business',
                href: `/${lang}/ai-dla-firm`,
                desc: lang === 'pl' ? 'Sztuczna inteligencja dla MŚP' : 'Artificial intelligence for SMBs',
              },
              {
                title: lang === 'pl' ? 'Chatbot dla Firmy' : 'Chatbot for Business',
                href: `/${lang}/chatbot-dla-firmy`,
                desc: lang === 'pl' ? 'Automatyczna obsługa klienta 24/7' : '24/7 AI customer service',
              },
              {
                title: lang === 'pl' ? 'Automatyzacja Procesów' : 'Process Automation',
                href: `/${lang}/automatyzacja-procesow-biznesowych`,
                desc: lang === 'pl' ? 'Workflow automation dla firm' : 'Workflow automation for businesses',
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-stone-900 group-hover:text-accent transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-500">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-accent mt-2 font-semibold">
                  {lang === 'pl' ? 'Zobacz →' : 'See →'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
