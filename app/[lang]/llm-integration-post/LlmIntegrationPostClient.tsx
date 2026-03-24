'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Lang } from '../../i18n';

// ─── DATA ───────────────────────────────────────────────────────────────────

const postData = {
  badge: 'Integracja LLM',
  badgeEn: 'LLM Integration',
  date: '2026-03-10',
  readingTime: '15 min',
  readingTimeEn: '15 min read',
  author: 'Maciej Kamieniak',
  authorPosition: 'Founder & AI Strategy Lead',
  authorBio: 'Założyciel InoxieSoft, ekspert AI z 4-letnim doświadczeniem we wdrażaniu integracji LLM dla firm MŚP w Polsce.',
  authorBioEn: 'Founder of InoxieSoft, AI expert with 4 years of experience implementing LLM integrations for SMBs in Poland.',
  title: 'Wdrożenie integracji LLM: Kompletny przewodnik dla polskich firm',
  titleEn: 'Implementing LLM Integration: A Complete Guide for Polish Companies',
  excerpt: 'Dowiedz się, jak skutecznie zintegrować Duże Modele Językowe z procesami biznesowymi. Przewodnik oparty na 50+ wdrożeniach w polskich firmach.',
  excerptEn: 'Learn how to successfully integrate Large Language Models into your business workflows. Guide based on 50+ implementations in Polish companies.',
  keyStats: [
    { value: '340%', label: 'ROI obsługa klienta', sublabel: 'po 6 miesiącach', positive: true },
    { value: '280%', label: 'ROI przetwarzanie dokumentów', sublabel: 'po 6 miesiącach', positive: true },
    { value: '60%', label: 'Zapytań automatycznych', sublabel: 'bez ingerencji człowieka', positive: true },
    { value: '2 min', label: 'Czas odpowiedzi', sublabel: 'z 4 godzin wcześniej', positive: true },
  ],
  keyStatsEn: [
    { value: '340%', label: 'Customer Service ROI', sublabel: 'after 6 months', positive: true },
    { value: '280%', label: 'Document Processing ROI', sublabel: 'after 6 months', positive: true },
    { value: '60%', label: 'Automated Inquiries', sublabel: 'without human involvement', positive: true },
    { value: '2 min', label: 'Response Time', sublabel: 'down from 4 hours', positive: true },
  ],
  llmComparison: [
    {
      name: 'GPT-4o',
      provider: 'OpenAI',
      strengths: 'Najlepsza ogólna wydajność, doskonałe rozumienie kontekstu, świetna obsługa polskiego',
      strengthsEn: 'Best overall performance, excellent context understanding, great Polish support',
      bestFor: 'Customer service, document analysis, general-purpose AI',
      bestForEn: 'Customer service, document analysis, general-purpose AI',
      apiCost: '$$',
      apiCostEn: '$$',
      polishSupport: true,
      pros: ['Najwyższa jakość odpowiedzi', 'Dobra obsługa polskiego', 'Szeroki ekosystem'],
      prosEn: ['Highest response quality', 'Good Polish support', 'Wide ecosystem'],
      cons: ['Wyższy koszt', 'Ograniczona kontrola'],
      consEn: ['Higher cost', 'Limited control'],
    },
    {
      name: 'Claude 3.5',
      provider: 'Anthropic',
      strengths: 'Bardzo silne zdolności推理 (reasoning), długie okno kontekstu, etyczne podejście',
      strengthsEn: 'Very strong reasoning capabilities, long context window, ethical approach',
      bestFor: 'Legal analysis, research, complex document review',
      bestForEn: 'Legal analysis, research, complex document review',
      apiCost: '$$',
      apiCostEn: '$$',
      polishSupport: true,
      pros: ['Świetny reasoning', 'Długi kontekst (200k tokenów)', 'Bezpieczny i stabilny'],
      prosEn: ['Excellent reasoning', 'Long context (200k tokens)', 'Safe and stable'],
      cons: ['Wolniejszy niż GPT-4o', 'Mniej narzędzi'],
      consEn: ['Slower than GPT-4o', 'Fewer tools'],
    },
    {
      name: 'Gemini 1.5',
      provider: 'Google',
      strengths: 'Bardzo długie okno kontekstu (1M tokenów), integracja z Google Cloud, multimodalny',
      strengthsEn: 'Very long context window (1M tokens), Google Cloud integration, multimodal',
      bestFor: 'Large document processing, multimodal tasks, Google ecosystem',
      bestForEn: 'Large document processing, multimodal tasks, Google ecosystem',
      apiCost: '$',
      apiCostEn: '$',
      polishSupport: true,
      pros: ['1M tokenów kontekstu', 'Multimodalny', 'Niska cena'],
      prosEn: ['1M token context', 'Multimodal', 'Low price'],
      cons: ['Jakość polska niższa', 'Młodszy model'],
      consEn: ['Lower Polish quality', 'Newer model'],
    },
    {
      name: 'Mistral',
      provider: 'Mistral AI',
      strengths: 'Open source, możliwość wdrożenia on-premise, niski koszt, dobra wydajność',
      strengthsEn: 'Open source, can deploy on-premise, low cost, good performance',
      bestFor: 'Companies needing data privacy, on-premise deployments, cost-sensitive',
      bestForEn: 'Companies needing data privacy, on-premise deployments, cost-sensitive',
      apiCost: '$',
      apiCostEn: '$',
      polishSupport: false,
      pros: ['Możliwy on-premise', 'Brak opłat za API', 'Pełna kontrola danych'],
      prosEn: ['On-premise possible', 'No API fees', 'Full data control'],
      cons: ['Słabszy jakościowo', 'Wymaga samodzielnej obsługi'],
      consEn: ['Lower quality', 'Requires self-management'],
    },
  ],
  deploymentModels: [
    {
      id: 'cloud',
      title: 'Cloud',
      titleEn: 'Cloud',
      icon: '☁️',
      description: 'API access to LLM providers. Fastest implementation, data leaves infrastructure.',
      descriptionEn: 'API access to LLM providers. Fastest implementation, data leaves infrastructure.',
      pros: [
        'Szybkie wdrożenie',
        'Skalowalność',
        'Brak kosztów infrastruktury',
        'Ciągłe ulepszenia modelu',
      ],
      prosEn: [
        'Fast deployment',
        'Scalability',
        'No infrastructure costs',
        'Continuous model improvements',
      ],
      cons: [
        'Dane opuszczają infrastrukturę',
        'Koszty API kumulują się',
        'Zależność od dostawcy',
      ],
      consEn: [
        'Data leaves infrastructure',
        'API costs accumulate',
        'Provider dependency',
      ],
      bestFor: 'Szybkie prototypy, firmy bez rygorystycznych wymagań',
      bestForEn: 'Fast prototypes, companies without strict requirements',
      color: 'blue',
    },
    {
      id: 'onpremise',
      title: 'On-premise',
      titleEn: 'On-premise',
      icon: '🖥️',
      description: 'LLM runs on your own servers. Full data control, higher upfront cost.',
      descriptionEn: 'LLM runs on your own servers. Full data control, higher upfront cost.',
      pros: [
        'Pełna kontrola danych',
        'Brak zależności od API',
        'Potencjalnie niższe koszty długoterminowe',
        'Spełnienie wymagań RODO',
      ],
      prosEn: [
        'Full data control',
        'No API dependency',
        'Potentially lower long-term costs',
        'GDPR compliance',
      ],
      cons: [
        'Wysoki koszt początkowy (GPU)',
        'Wymaga zespołu technicznego',
        'Wolniejsze wdrożenie',
      ],
      consEn: [
        'High upfront cost (GPU)',
        'Requires technical team',
        'Slower deployment',
      ],
      bestFor: 'Finanse, healthcare, firmy z rygorystycznym RODO',
      bestForEn: 'Finance, healthcare, companies with strict GDPR requirements',
      color: 'green',
    },
    {
      id: 'hybrid',
      title: 'Hybryda',
      titleEn: 'Hybrid',
      icon: '🔀',
      description: 'Combination of cloud + on-premise. Best of both worlds for most enterprises.',
      descriptionEn: 'Combination of cloud + on-premise. Best of both worlds for most enterprises.',
      pros: [
        'Elastyczność i kontrola',
        'Wrażliwe dane na-premise',
        'Ogólne zadania w chmurze',
        'Optymalny koszt/wydajność',
      ],
      prosEn: [
        'Flexibility and control',
        'Sensitive data on-premise',
        'General tasks in cloud',
        'Optimal cost/performance',
      ],
      cons: [
        'Bardziej złożona architektura',
        'Wymaga planowania',
        'Integracja może być trudniejsza',
      ],
      consEn: [
        'More complex architecture',
        'Requires planning',
        'Integration can be harder',
      ],
      bestFor: 'Większość polskich firm enterprise',
      bestForEn: 'Most Polish enterprise companies',
      color: 'amber',
    },
  ],
  mistakes: [
    {
      title: 'Starting Too Big',
      titlePl: 'Zaczynanie od zbyt dużego projektu',
      description: 'Firms try to automate everything at once, leading to overwhelming complexity and failed projects.',
      descriptionPl: 'Firmy próbują zautomatyzować wszystko na raz, co prowadzi do przytłaczającej złożoności i nieudanych projektów.',
      solution: 'Zacznij od jednego, wysokopriorytetowego przypadku użycia. Udowodnij wartość, następnie rozszerzaj.',
      solutionPl: 'Zacznij od jednego, wysokopriorytetowego przypadku użycia. Udowodnij wartość, następnie rozszerzaj.',
      icon: '🎯',
    },
    {
      title: 'Ignoring Data Quality',
      titlePl: 'Ignorowanie jakości danych',
      description: '"Garbage in, garbage out." Poor data leads to poor AI outputs and wasted investment.',
      descriptionPl: '"Śmieci na wejściu, śmieci na wyjściu." Słabe dane prowadzą do słabych wyników AI i zmarnowanej inwestycji.',
      solution: 'Zainwestuj w czyszczenie i organizację danych przed implementacją. To 20-30% czasu projektu, ale dramatycznie poprawia wyniki.',
      solutionPl: 'Zainwestuj w czyszczenie i organizację danych przed implementacją. To 20-30% czasu projektu, ale dramatycznie poprawia wyniki.',
      icon: '📊',
    },
    {
      title: 'Skipping Employee Training',
      titlePl: 'Pomijanie szkoleń pracowników',
      description: 'Technology is only as good as the people using it. Skipping training leads to low adoption.',
      descriptionPl: 'Technologia jest tak dobra, jak ludzie którzy jej używają. Pomijanie szkoleń prowadzi do niskiej adopcji.',
      solution: 'Zaplanuj kompleksowe szkolenia i wsparcie w zarządzaniu zmianą. Przedstaw AI jako pomocnika, nie zastępcę.',
      solutionPl: 'Zaplanuj kompleksowe szkolenia i wsparcie w zarządzaniu zmianą. Przedstaw AI jako pomocnika, nie zastępcę.',
      icon: '👥',
    },
    {
      title: 'Not Planning for Maintenance',
      titlePl: 'Brak planu utrzymania',
      description: 'LLMs require ongoing optimization, tuning, and model updates. Ignoring this leads to degrading performance.',
      descriptionPl: 'LLM wymagają ciągłej optymalizacji, dostrajania i aktualizacji modelu. Ignorowanie tego prowadzi do pogarszania się wydajności.',
      solution: 'Zaplanuj budżet na ciągłe doskonalenie. Ustaw pętle feedbacku. Planuj regularne aktualizacje modelu.',
      solutionPl: 'Zaplanuj budżet na ciągłe doskonalenie. Ustaw pętle feedbacku. Planuj regularne aktualizacje modelu.',
      icon: '🔧',
    },
    {
      title: 'Underestimating Integration Effort',
      titlePl: 'Niedoszacowanie wysiłku integracji',
      description: 'Connecting AI to existing systems is often harder than expected, especially with legacy systems.',
      descriptionPl: 'Podłączenie AI do istniejących systemów jest często trudniejsze niż oczekiwano, szczególnie w przypadku starszych systemów.',
      solution: 'Wybierz implementerów z doświadczeniem w Twoich konkretnych systemach. Daj dodatkowy czas na integrację.',
      solutionPl: 'Wybierz implementerów z doświadczeniem w Twoich konkretnych systemach. Daj dodatkowy czas na integrację.',
      icon: '🔌',
    },
  ],
  faqs: [
    {
      q: 'Czym jest LLM i czym różni się od zwykłego chatbota?',
      a: 'LLM (Large Language Model) to zaawansowany model AI przeszkolony na ogromnych ilościach tekstu. W przeciwieństwie do prostych chatbotów, LLM rozumie kontekst, potrafi generować naturalny język, analizować dokumenty i wykonywać złożone zadania — jak prawnik analizujący umowę lub księgowy sprawdzający faktury.',
    },
    {
      q: 'Którego dostawcę LLM wybrać dla polskiej firmy?',
      a: 'Dla większości polskich firm rekomendujemy GPT-4o (najlepsza jakość, dobra obsługa polskiego) lub Claude 3.5 (świetny reasoning, długi kontekst). Jeśli masz rygorystyczne wymagania RODO i budżet na infrastrukturę — Mistral on-premise. Zaczynamy zawsze od szybkiego pilotażu, żeby porównać modele na Twoich realnych danych.',
    },
    {
      q: 'Ile kosztuje integracja LLM?',
      a: 'Typowe wdrożenie dla firmy MŚP to 30,000-120,000 PLN (zależnie od zakresu i modelu). Koszty API to dodatkowe 2,000-15,000 PLN/miesięcznie. Dla firmy z 50-200 pracownikami typowy roczny budżet to 120,000-300,000 PLN łącznie (wdrożenie + utrzymanie + API).',
    },
    {
      q: 'Czy moje dane są bezpieczne przy korzystaniu z LLM?',
      a: 'To zależy od modelu wdrożenia. Cloud (GPT-4, Claude przez API) — dane teoretycznie opuszczają infrastrukturę (choć OpenAI/Anthropic mają silne zabezpieczenia). On-premise (Mistral na Twoich serwerach) — pełna kontrola, dane nigdy nie opuszczają firmy. Hybrid — najlepsze z obu światów: wrażliwe dane na-premise, ogólne zadania w chmurze.',
    },
    {
      q: 'Jak długo trwa wdrożenie integracji LLM?',
      a: 'Szybki prototyp (1 use case, np. chatbot) — 2-3 tygodnie. Pełne wdrożenie produkcyjne (1-3 integracje, szkolenia, optymalizacja) — 8-14 tygodni. Complex enterprise (wiele działów, legacy systems) — 4-8 miesięcy. Kluczowe: zaczynaj od małego pilotażu, nie próbuj wszystkiego na raz.',
    },
    {
      q: 'Czy LLM naprawdę daje ROI? Jakie są realne wyniki?',
      a: 'Tak — przy właściwym wdrożeniu. Customer service automation: ROI 340% po 6 miesiącach, 60% zapytań bez ingerencji człowieka. Document processing: ROI 280%, 80% redukcja czasu przeglądu umów. Knowledge base: 70% mniej powtarzalnych pytań do specjalistów. Kluczem jest wybór właściwego przypadku użycia i jakości danych.',
    },
  ],
  faqsEn: [
    {
      q: 'What is an LLM and how does it differ from a regular chatbot?',
      a: 'LLM (Large Language Model) is an advanced AI model trained on vast amounts of text. Unlike simple chatbots, LLM understands context, can generate natural language, analyze documents, and perform complex tasks — like a lawyer analyzing a contract or an accountant checking invoices.',
    },
    {
      q: 'Which LLM provider should a Polish company choose?',
      a: 'For most Polish companies we recommend GPT-4o (best quality, good Polish support) or Claude 3.5 (excellent reasoning, long context). If you have strict GDPR requirements and budget for infrastructure — Mistral on-premise. We always start with a quick pilot to compare models on your real data.',
    },
    {
      q: 'How much does LLM integration cost?',
      a: 'Typical implementation for an SMB is 30,000-120,000 PLN (depending on scope and model). API costs add 2,000-15,000 PLN/month. For a company with 50-200 employees, typical annual budget is 120,000-300,000 PLN total (deployment + maintenance + API).',
    },
    {
      q: 'Is my data safe when using LLM?',
      a: 'It depends on the deployment model. Cloud (GPT-4, Claude via API) — data theoretically leaves infrastructure (though OpenAI/Anthropic have strong protections). On-premise (Mistral on your servers) — full control, data never leaves. Hybrid — best of both worlds: sensitive data on-premise, general tasks in cloud.',
    },
    {
      q: 'How long does LLM integration take?',
      a: 'Quick prototype (1 use case, e.g. chatbot) — 2-3 weeks. Full production deployment (1-3 integrations, training, optimization) — 8-14 weeks. Complex enterprise (multiple departments, legacy systems) — 4-8 months. Key: start with a small pilot, do not try everything at once.',
    },
    {
      q: 'Does LLM really deliver ROI? What are the real results?',
      a: 'Yes — with proper implementation. Customer service automation: ROI 340% after 6 months, 60% inquiries without human involvement. Document processing: ROI 280%, 80% reduction in contract review time. Knowledge base: 70% fewer repetitive questions to specialists. The key is choosing the right use case and data quality.',
    },
  ],
};

// ─── ANIMATED ARCHITECTURE DIAGRAM ─────────────────────────────────────────

function ArchitectureDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const layers = [
    { id: 'input', x: 160, y: 30, w: 160, h: 50, label: 'Input', labelEn: 'Input Data', color: '#3b82f6' },
    { id: 'llm', x: 120, y: 110, w: 240, h: 60, label: 'LLM Engine', labelEn: 'LLM Engine', color: '#D97706' },
    { id: 'vector', x: 40, y: 200, w: 180, h: 50, label: 'Vector DB', labelEn: 'Vector DB', color: '#10b981' },
    { id: 'api', x: 260, y: 200, w: 140, h: 50, label: 'API Layer', labelEn: 'API Layer', color: '#8b5cf6' },
    { id: 'output', x: 120, y: 280, w: 240, h: 50, label: 'Output', labelEn: 'Output / Action', color: '#ec4899' },
  ];

  const arrows = [
    { from: 'input', to: 'llm' },
    { from: 'llm', to: 'vector' },
    { from: 'llm', to: 'api' },
    { from: 'vector', to: 'llm' },
    { from: 'api', to: 'llm' },
    { from: 'llm', to: 'output' },
  ];

  return (
    <svg ref={ref} viewBox="0 0 440 360" className="w-full h-auto">
      {/* Arrows */}
      {arrows.map((arrow, i) => {
        const fromLayer = layers.find(l => l.id === arrow.from)!;
        const toLayer = layers.find(l => l.id === arrow.to)!;
        const x1 = fromLayer.x + fromLayer.w / 2;
        const y1 = fromLayer.y + fromLayer.h;
        const x2 = toLayer.x + toLayer.w / 2;
        const y2 = toLayer.y;
        const midY = (y1 + y2) / 2;

        return (
          <motion.path
            key={i}
            d={`M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`}
            stroke="#D97706"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
            strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
            transition={{ duration: 1, delay: i * 0.15 }}
          />
        );
      })}

      {/* Arrow heads */}
      {arrows.map((arrow, i) => {
        const toLayer = layers.find(l => l.id === arrow.to)!;
        return (
          <motion.polygon
            key={`head-${i}`}
            points={`${toLayer.x + toLayer.w / 2},${toLayer.y} ${toLayer.x + toLayer.w / 2 - 5},${toLayer.y + 8} ${toLayer.x + toLayer.w / 2 + 5},${toLayer.y + 8}`}
            fill="#D97706"
            fillOpacity="0.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.5 } : {}}
            transition={{ duration: 0.3, delay: i * 0.15 + 0.8 }}
          />
        );
      })}

      {/* Layers */}
      {layers.map((layer, i) => (
        <motion.g key={layer.id}>
          <motion.rect
            x={layer.x} y={layer.y} width={layer.w} height={layer.h}
            rx="8"
            fill={layer.color}
            fillOpacity="0.15"
            stroke={layer.color}
            strokeWidth="2"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
          />
          <motion.text
            x={layer.x + layer.w / 2} y={layer.y + layer.h / 2 + 4}
            textAnchor="middle"
            className="fill-stone-700 font-semibold"
            style={{ fontSize: '12px', fontFamily: 'inherit' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.12 + 0.6 }}
          >
            {layer.label}
          </motion.text>
        </motion.g>
      ))}

      {/* Pulse animation on LLM */}
      {isInView && [0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={layers[1].x} y={layers[1].y} width={layers[1].w} height={layers[1].h}
          rx="8"
          fill="none"
          stroke="#D97706"
          strokeWidth="2"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 1.08],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.65,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </svg>
  );
}

// ─── LLM COMPARISON TABLE ────────────────────────────────────────────────────

function LlmComparisonTable({ lang }: { lang: Lang }) {
  const isPL = lang === 'pl';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="overflow-x-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <table className="w-full border-collapse rounded-xl overflow-hidden border border-stone-200 shadow-sm">
          <thead>
            <tr className="bg-stone-800 text-white">
              <th className="px-4 py-4 text-left text-sm font-semibold">{isPL ? 'Model' : 'Model'}</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">{isPL ? 'Dostawca' : 'Provider'}</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">{isPL ? 'Najlepsze zastosowanie' : 'Best For'}</th>
              <th className="px-4 py-4 text-center text-sm font-semibold">{isPL ? 'Koszt API' : 'API Cost'}</th>
              <th className="px-4 py-4 text-center text-sm font-semibold">{isPL ? 'Obsługa PL' : 'Polish Support'}</th>
            </tr>
          </thead>
          <tbody>
            {postData.llmComparison.map((llm, i) => (
              <motion.tr
                key={llm.name}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'} hover:bg-yellow-50 transition-colors border-b border-stone-100 last:border-0`}
              >
                <td className="px-4 py-4">
                  <div className="font-bold text-stone-900">{llm.name}</div>
                </td>
                <td className="px-4 py-4 text-sm text-stone-600">{llm.provider}</td>
                <td className="px-4 py-4 text-sm text-stone-600 max-w-xs">{isPL ? llm.bestFor : llm.bestForEn}</td>
                <td className="px-4 py-4 text-center">
                  <span className="inline-block px-2 py-1 text-xs font-bold rounded bg-stone-100 text-stone-700">
                    {isPL ? llm.apiCostEn : llm.apiCostEn}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  {llm.polishSupport ? (
                    <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mx-auto text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Detail cards below table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {postData.llmComparison.map((llm, i) => (
          <motion.div
            key={llm.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-white rounded-xl p-5 border border-stone-200"
          >
            <h4 className="font-bold text-stone-900 mb-2">{llm.name}</h4>
            <div className="text-xs text-stone-500 mb-2">{llm.provider}</div>
            <div className="space-y-1">
              {(isPL ? llm.pros : llm.prosEn).slice(0, 3).map((pro, j) => (
                <div key={j} className="flex items-start gap-1.5 text-xs text-stone-600">
                  <svg className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{pro}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── DEPLOYMENT MODEL CARDS ──────────────────────────────────────────────────

function DeploymentCards({ lang }: { lang: Lang }) {
  const isPL = lang === 'pl';
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const colorMap: Record<string, { border: string; bg: string; badge: string }> = {
    blue: { border: 'border-blue-200', bg: 'bg-blue-50', badge: 'bg-blue-100 text-blue-700' },
    green: { border: 'border-green-200', bg: 'bg-green-50', badge: 'bg-green-100 text-green-700' },
    amber: { border: 'border-amber-200', bg: 'bg-amber-50', badge: 'bg-amber-100 text-amber-700' },
  };

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {postData.deploymentModels.map((model, i) => {
        const colors = colorMap[model.color];
        return (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            onMouseEnter={() => setHovered(model.id)}
            onMouseLeave={() => setHovered(null)}
            className={`bg-white rounded-2xl p-6 border ${colors.border} transition-all ${hovered === model.id ? 'shadow-lg' : 'shadow-sm'}`}
          >
            <div className="text-3xl mb-3">{model.icon}</div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              {isPL ? model.title : model.titleEn}
            </h3>
            <p className="text-sm text-stone-600 mb-4 leading-relaxed">
              {isPL ? model.description : model.descriptionEn}
            </p>

            {/* Pros */}
            <div className="space-y-2 mb-4">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                {isPL ? 'Zalety' : 'Pros'}
              </div>
              {(isPL ? model.prosEn : model.prosEn).map((pro, j) => (
                <div key={j} className="flex items-start gap-2 text-sm text-stone-700">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{pro}</span>
                </div>
              ))}
            </div>

            {/* Cons */}
            <div className="space-y-1.5 mb-4">
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                {isPL ? 'Wady' : 'Cons'}
              </div>
              {(isPL ? model.consEn : model.consEn).map((con, j) => (
                <div key={j} className="flex items-start gap-2 text-sm text-stone-600">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>{con}</span>
                </div>
              ))}
            </div>

            {/* Best for */}
            <div className={`text-xs font-medium px-3 py-2 rounded-lg ${colors.badge}`}>
              {isPL ? model.bestFor : model.bestForEn}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── MISTAKES SECTION ────────────────────────────────────────────────────────

function MistakesSection({ lang }: { lang: Lang }) {
  const isPL = lang === 'pl';
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="space-y-4">
      {postData.mistakes.map((mistake, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-amber-50 border border-amber-200 rounded-xl p-5"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">{mistake.icon}</span>
            <div>
              <h4 className="font-bold text-stone-900 mb-1">
                {isPL ? mistake.titlePl : mistake.title}
              </h4>
              <p className="text-sm text-stone-600 mb-2 leading-relaxed">
                {isPL ? mistake.descriptionPl : mistake.description}
              </p>
              <div className="flex items-start gap-2 bg-white/70 rounded-lg p-3">
                <svg className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-stone-700">
                  <span className="font-semibold">{isPL ? 'Rozwiązanie: ' : 'Solution: '}</span>
                  {isPL ? mistake.solutionPl : mistake.solution}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── FAQ ITEM ────────────────────────────────────────────────────────────────

function FaqItem({ faq, index, lang }: { faq: typeof postData.faqs[0]; index: number; lang: Lang }) {
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
        <span className="text-accent font-bold text-sm mt-0.5">
          {String(index + 1).padStart(2, '0')}
        </span>
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

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function LlmIntegrationPostClient({
  t,
  lang,
}: {
  t: typeof import('../../i18n').translations.pl;
  lang: Lang;
}) {
  const isPL = lang === 'pl';

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
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=60"
            alt="LLM Integration"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900/95 to-stone-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 text-xs font-bold bg-accent text-white rounded-full mb-6 tracking-wider">
                  {isPL ? postData.badge : postData.badgeEn}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {isPL ? postData.title : postData.titleEn}
                </h1>
                <p className="text-lg text-stone-300 mb-8 max-w-xl leading-relaxed">
                  {isPL ? postData.excerpt : postData.excerptEn}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(postData.date)}</span>
                  </div>
                  <span className="text-stone-600">•</span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{isPL ? postData.readingTime : postData.readingTimeEn}</span>
                  </div>
                  <span className="text-stone-600">•</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                      {postData.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span>{postData.author}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-sm font-semibold text-stone-300 mb-4 uppercase tracking-wider">
                {isPL ? 'Architektura integracji LLM' : 'LLM Integration Architecture'}
              </div>
              <ArchitectureDiagram />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── B. KEY STATS ── */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {(isPL ? postData.keyStats : postData.keyStatsEn).map((stat, i) => (
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
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-stone-900 mb-1">{stat.label}</div>
                <div className="text-xs text-stone-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C. LLM COMPARISON ── */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {isPL ? 'Porównanie dostawców LLM' : 'LLM Provider Comparison'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {isPL
                ? 'Kluczowe różnice między GPT-4o, Claude, Gemini i Mistral — który wybrać dla polskiej firmy?'
                : 'Key differences between GPT-4o, Claude, Gemini and Mistral — which to choose for a Polish company?'}
            </p>
          </motion.div>
          <LlmComparisonTable lang={lang} />
        </div>
      </section>

      {/* ── D. DEPLOYMENT MODELS ── */}
      <section className="py-16 lg:py-20 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {isPL ? 'Modele wdrożenia LLM' : 'LLM Deployment Models'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {isPL
                ? 'Cloud, On-premise czy Hybrid? Wybierz model dopasowany do wymagań bezpieczeństwa i budżetu.'
                : 'Cloud, On-premise or Hybrid? Choose the model that matches your security requirements and budget.'}
            </p>
          </motion.div>
          <DeploymentCards lang={lang} />
        </div>
      </section>

      {/* ── E. COMMON MISTAKES ── */}
      <section className="py-16 lg:py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {isPL ? '5 najczęstszych błędów przy integracji LLM' : '5 Most Common LLM Integration Mistakes'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {isPL
                ? 'Na podstawie 50+ wdrożeń w polskich firmach — co idzie nie tak i jak tego uniknąć.'
                : 'Based on 50+ implementations in Polish companies — what goes wrong and how to avoid it.'}
            </p>
          </motion.div>
          <MistakesSection lang={lang} />
        </div>
      </section>

      {/* ── F. FAQ SECTION ── */}
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
              {isPL ? 'Często zadawane pytania' : 'Frequently Asked Questions'}
            </h2>
          </motion.div>

          <div>
            {(isPL ? postData.faqs : postData.faqsEn).map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ── G. CTA SECTION ── */}
      <section className="py-16 lg:py-20 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isPL ? 'Rozpocznij integrację LLM' : 'Start Your LLM Integration'}
            </h2>
            <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
              {isPL
                ? 'Umów bezpłatną konsultację i dowiedz się, jak LLM może transformować procesy w Twojej firmie.'
                : 'Book a free consultation and find out how LLM can transform processes in your company.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {isPL ? 'Rozpocznij integrację →' : 'Start Integration →'}
              </Link>
              <Link
                href={`/${lang}/blog`}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                {isPL ? 'Zobacz więcej →' : 'See More →'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── H. AUTHOR SECTION ── */}
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
              {postData.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-stone-900 text-lg">{postData.author}</h3>
                <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-semibold">
                  {isPL ? 'Ekspert w InoxieSoft' : 'Expert at InoxieSoft'}
                </span>
              </div>
              <p className="text-sm text-accent font-medium mb-3">{postData.authorPosition}</p>
              <p className="text-stone-600 text-sm leading-relaxed">
                {isPL ? postData.authorBio : postData.authorBioEn}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── I. RELATED SERVICES ── */}
      <section className="py-12 lg:py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            {isPL ? 'Powiązane usługi' : 'Related Services'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: isPL ? 'Automatyzacja AI' : 'AI Automation',
                href: `/${lang}/automatyzacja-ai-wroclaw`,
                desc: isPL ? 'Agenci AI i automatyzacja procesów' : 'AI agents and process automation',
              },
              {
                title: isPL ? 'AI dla Firm' : 'AI for Business',
                href: `/${lang}/ai-dla-firm`,
                desc: isPL ? 'Sztuczna inteligencja dla MŚP' : 'Artificial intelligence for SMBs',
              },
              {
                title: isPL ? 'Chatbot dla Firmy' : 'Chatbot for Business',
                href: `/${lang}/chatbot-dla-firmy`,
                desc: isPL ? 'Automatyczna obsługa klienta 24/7' : '24/7 AI customer service',
              },
              {
                title: isPL ? 'Automatyzacja Procesów' : 'Process Automation',
                href: `/${lang}/automatyzacja-procesow-biznesowych`,
                desc: isPL ? 'Workflow automation dla firm' : 'Workflow automation for businesses',
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
