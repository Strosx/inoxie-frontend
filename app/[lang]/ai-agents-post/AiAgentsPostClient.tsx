'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Lang } from '../../i18n';

// ─── DATA ───────────────────────────────────────────────────────────────────

const postData = {
  badge: 'Agenci AI 2026',
  badgeEn: 'AI Agents 2026',
  date: '2026-03-15',
  readingTime: '12 min',
  readingTimeEn: '12 min read',
  author: 'Maciej Kamieniak',
  authorPosition: 'Founder & AI Strategy Lead',
  authorBio: 'Założyciel InoxieSoft, ekspert AI z 4-letnim doświadczeniem we wdrażaniu agentów AI dla firm MŚP w Polsce.',
  authorBioEn: 'Founder of InoxieSoft, AI expert with 4 years of experience implementing AI agents for SMBs in Poland.',
  title: 'Agenci AI w 2026: Jak rewolucjonizują automatyzację biznesową',
  titleEn: 'AI Agents in 2026: How They\'re Revolutionizing Business Automation',
  excerpt: 'Odkryj, jak agenci AI przekształcają procesy biznesowe i co to oznacza dla Twojej firmy w 2026 roku. Dane z 30+ polskich wdrożeń.',
  excerptEn: 'Discover how AI agents are transforming business processes and what it means for your company in 2026. Data from 30+ Polish implementations.',
  keyStats: [
    { value: '85%', label: 'Szybsza odpowiedź', sublabel: 'z 4h do 30 min', positive: true },
    { value: '40-60%', label: 'Redukcja kosztów', sublabel: 'operacyjnych', positive: true },
    { value: '35%', label: 'Satysfakcja pracowników', sublabel: 'wyższa', positive: true },
    { value: '70%', label: 'Redukcja błędów', sublabel: 'manuelnych', positive: true },
  ],
  keyStatsEn: [
    { value: '85%', label: 'Faster Response', sublabel: 'from 4h to 30 min', positive: true },
    { value: '40-60%', label: 'Cost Reduction', sublabel: 'operational costs', positive: true },
    { value: '35%', label: 'Employee Satisfaction', sublabel: 'increase', positive: true },
    { value: '70%', label: 'Error Reduction', sublabel: 'manual errors', positive: true },
  ],
  industryTabs: [
    { id: 'manufacturing', label: 'Produkcja', labelEn: 'Manufacturing', icon: '🏭' },
    { id: 'retail', label: 'Retail', labelEn: 'Retail', icon: '🛒' },
    { id: 'healthcare', label: 'Healthcare', labelEn: 'Healthcare', icon: '⚕️' },
    { id: 'services', label: 'Usługi', labelEn: 'Professional Services', icon: '💼' },
  ],
  industryData: {
    manufacturing: {
      title: 'Produkcja',
      titleEn: 'Manufacturing',
      description: 'Polskie firmy produkcyjne borykają się z niedoborami kadrowymi, rosnącą konkurencją i potrzebą wysokich standardów jakości. Agenci AI rozwiązują te problemy poprzez automatyzację kontroli jakości, optymalizację harmonogramów produkcji i zarządzanie komunikacją w łańcuchu dostaw.',
      descriptionEn: 'Polish manufacturing companies face unique challenges: labor shortages, increasing competition, and the need for high quality standards. AI agents address these by automating quality control inspections, optimizing production schedules, and managing supply chain communications.',
      stats: [
        { label: 'Redukcja defektów', value: '45%', labelEn: 'Defect reduction', valueEn: '45%' },
        { label: 'Oszczędności roczne', value: '1.2M PLN', labelEn: 'Annual savings', valueEn: '1.2M PLN' },
        { label: 'Czas wdrożenia', value: '4-6 mies.', labelEn: 'Implementation time', valueEn: '4-6 months' },
        { label: 'ROI', value: '340%', labelEn: 'ROI', valueEn: '340%' },
      ],
      statsEn: [
        { label: 'Defect reduction', value: '45%', labelEn: 'Defect reduction', valueEn: '45%' },
        { label: 'Annual savings', value: '1.2M PLN', labelEn: 'Annual savings', valueEn: '1.2M PLN' },
        { label: 'Implementation time', value: '4-6 months', labelEn: 'Implementation time', valueEn: '4-6 months' },
        { label: 'ROI', value: '340%', labelEn: 'ROI', valueEn: '340%' },
      ],
    },
    retail: {
      title: 'Retail',
      titleEn: 'Retail & E-commerce',
      description: 'Polskie firmy retail konkurują szybkością obsługi klienta i personalizacją. Agenci AI umożliwiają obsługę 24/7 w języku polskim i angielskim, spersonalizowane rekomendacje produktów, automatyczne zarządzanie zamówieniami i optymalizację stanów magazynowych.',
      descriptionEn: 'Polish retailers compete on customer service speed and personalization. AI agents enable 24/7 customer support in Polish and English, personalized product recommendations, automated order management, and inventory optimization.',
      stats: [
        { label: 'Zapytania automatyczne', value: '60%', labelEn: 'Automated inquiries', valueEn: '60%' },
        { label: 'Satysfakcja klientów', value: '4.6/5', labelEn: 'Customer satisfaction', valueEn: '4.6/5' },
        { label: 'Czas wdrożenia', value: '3-5 mies.', labelEn: 'Implementation time', valueEn: '3-5 months' },
        { label: 'ROI', value: '280%', labelEn: 'ROI', valueEn: '280%' },
      ],
      statsEn: [
        { label: 'Automated inquiries', value: '60%', labelEn: 'Automated inquiries', valueEn: '60%' },
        { label: 'Customer satisfaction', value: '4.6/5', labelEn: 'Customer satisfaction', valueEn: '4.6/5' },
        { label: 'Implementation time', value: '3-5 months', labelEn: 'Implementation time', valueEn: '3-5 months' },
        { label: 'ROI', value: '280%', labelEn: 'ROI', valueEn: '280%' },
      ],
    },
    healthcare: {
      title: 'Healthcare',
      titleEn: 'Healthcare',
      description: 'Polskie placówki medyczne wdrażają agentów AI do zarządzania rezerwacjami pacjentów, asysty w dokumentacji medycznej, przetwarzania roszczeń ubezpieczeniowych i komunikacji z pacjentami. Automatyzacja zmniejsza obciążenie personelu i skraca czas oczekiwania.',
      descriptionEn: 'Polish healthcare providers are implementing AI agents for patient appointment scheduling, medical documentation assistance, insurance claim processing, and patient communication. Automation reduces staff workload and shortens wait times.',
      stats: [
        { label: 'Automatyzacja rezerwacji', value: '80%', labelEn: 'Scheduling automation', valueEn: '80%' },
        { label: 'Redukcja czasu oczekiwania', value: '55%', labelEn: 'Wait time reduction', valueEn: '55%' },
        { label: 'Czas wdrożenia', value: '5-7 mies.', labelEn: 'Implementation time', valueEn: '5-7 months' },
        { label: 'ROI', value: '220%', labelEn: 'ROI', valueEn: '220%' },
      ],
      statsEn: [
        { label: 'Scheduling automation', value: '80%', labelEn: 'Scheduling automation', valueEn: '80%' },
        { label: 'Wait time reduction', value: '55%', labelEn: 'Wait time reduction', valueEn: '55%' },
        { label: 'Implementation time', value: '5-7 months', labelEn: 'Implementation time', valueEn: '5-7 months' },
        { label: 'ROI', value: '220%', labelEn: 'ROI', valueEn: '220%' },
      ],
    },
    services: {
      title: 'Usługi',
      titleEn: 'Professional Services',
      description: 'Kancelarie prawne, firmy doradcze i biura rachunkowe w Polsce korzystają z analizy dokumentów i przeglądu umów, asysty badawczej, automatyzacji komunikacji z klientami oraz zarządzania terminami i spotkaniami.',
      descriptionEn: 'Law firms, consulting companies, and accounting offices in Poland benefit from document analysis and contract review, research assistance, client communication automation, and scheduling management.',
      stats: [
        { label: 'Redukcja czasu przeglądu', value: '70%', labelEn: 'Review time reduction', valueEn: '70%' },
        { label: 'Firmy w bazie', value: '30+', labelEn: 'Companies in database', valueEn: '30+' },
        { label: 'Czas wdrożenia', value: '2-4 mies.', labelEn: 'Implementation time', valueEn: '2-4 months' },
        { label: 'ROI', value: '420%', labelEn: 'ROI', valueEn: '420%' },
      ],
      statsEn: [
        { label: 'Review time reduction', value: '70%', labelEn: 'Review time reduction', valueEn: '70%' },
        { label: 'Companies in database', value: '30+', labelEn: 'Companies in database', valueEn: '30+' },
        { label: 'Implementation time', value: '2-4 months', labelEn: 'Implementation time', valueEn: '2-4 months' },
        { label: 'ROI', value: '420%', labelEn: 'ROI', valueEn: '420%' },
      ],
    },
  },
  caseStudies: [
    {
      id: 1,
      company: 'Polska firma produkcyjna',
      companyEn: 'Polish Manufacturing Company',
      type: 'Produkcja części samochodowych',
      typeEn: 'Automotive Parts Manufacturing',
      size: '250 pracowników',
      sizeEn: '250 employees',
      roi: '340%',
      months: '4 miesiące',
      monthsEn: '4 months',
      investment: '420,000 PLN',
      investmentEn: '420,000 PLN',
      annualSavings: '2.4M PLN rocznie',
      annualSavingsEn: '2.4M PLN annually',
      metrics: [
        { label: 'Przetwarzanie zamówień', change: '80% automatyczne', changeEn: '80% automated', positive: true },
        { label: 'Czas realizacji', change: '2 dni → 4 godziny', changeEn: '2 days → 4 hours', positive: true },
        { label: 'Błędy przetwarzania', change: '15% → 0%', changeEn: '15% → 0%', positive: true },
        { label: 'Satysfakcja klientów', change: '+40%', changeEn: '+40%', positive: true },
      ],
      metricsEn: [
        { label: 'Order processing', change: '80% automated', changeEn: '80% automated', positive: true },
        { label: 'Processing time', change: '2 days → 4 hours', changeEn: '2 days → 4 hours', positive: true },
        { label: 'Processing errors', change: '15% → 0%', changeEn: '15% → 0%', positive: true },
        { label: 'Customer satisfaction', change: '+40%', changeEn: '+40%', positive: true },
      ],
      description: 'Wdrożenie agenta AI do przetwarzania zamówień, zarządzania stanami magazynowymi i obsługi klienta. Agent przeszkolony na 5 latach danych historycznych, uczący się wzorców zamówień, logiki cenowej i ograniczeń wysyłkowych.',
      descriptionEn: 'AI agent implementation for order processing, inventory management, and customer service. Agent trained on 5 years of historical data, learning order patterns, pricing logic, and shipping constraints.',
      highlights: ['ROI 340%', '4 miesiące zwrot', '2.4M PLN oszczędności rocznie', 'Zero błędów'],
      highlightsEn: ['ROI 340%', '4 months return', '2.4M PLN annual savings', 'Zero errors'],
    },
    {
      id: 2,
      company: 'Polska firma e-commerce',
      companyEn: 'Polish E-commerce Company',
      type: 'Handel detaliczny online',
      typeEn: 'Online Retail',
      size: '80 pracowników',
      sizeEn: '80 employees',
      roi: '280%',
      months: '3 miesiące',
      monthsEn: '3 months',
      investment: '180,000 PLN',
      investmentEn: '180,000 PLN',
      annualSavings: '1.2M PLN rocznie',
      annualSavingsEn: '1.2M PLN annually',
      metrics: [
        { label: 'Zapytania obsługiwane', change: '60% automatycznie', changeEn: '60% automatically', positive: true },
        { label: 'Czas odpowiedzi', change: '4 godz. → 2 min', changeEn: '4 hours → 2 min', positive: true },
        { label: 'Satysfakcja klientów', change: '3.8 → 4.6/5', changeEn: '3.8 → 4.6/5', positive: true },
        { label: 'Zwroty kosztów obsługi', change: '-85,000 PLN/mies.', changeEn: '-85,000 PLN/month', positive: true },
      ],
      metricsEn: [
        { label: 'Inquiries handled', change: '60% automatically', changeEn: '60% automatically', positive: true },
        { label: 'Response time', change: '4 hours → 2 min', changeEn: '4 hours → 2 min', positive: true },
        { label: 'Customer satisfaction', change: '3.8 → 4.6/5', changeEn: '3.8 → 4.6/5', positive: true },
        { label: 'Support cost savings', change: '-85,000 PLN/month', changeEn: '-85,000 PLN/month', positive: true },
      ],
      description: 'Agent AI do obsługi klienta 24/7 w języku polskim i angielskim, zarządzania zamówieniami i reklamacjami. Integracja z systemem helpdesk, bazą produktową i stanami magazynowymi w czasie rzeczywistym.',
      descriptionEn: 'AI agent for 24/7 customer service in Polish and English, managing orders and complaints. Integration with helpdesk system, product database, and real-time inventory.',
      highlights: ['ROI 280%', '3 miesiące zwrot', '60% zapytań automatycznie', '4.6/5 satysfakcja'],
      highlightsEn: ['ROI 280%', '3 months return', '60% inquiries automated', '4.6/5 satisfaction'],
    },
    {
      id: 3,
      company: 'Polska kancelaria prawna',
      companyEn: 'Polish Law Firm',
      type: 'Usługi prawne i doradcze',
      typeEn: 'Legal & Advisory Services',
      size: '50 pracowników',
      sizeEn: '50 employees',
      roi: '420%',
      months: '2.1 miesiąca',
      monthsEn: '2.1 months',
      investment: '95,000 PLN',
      investmentEn: '95,000 PLN',
      annualSavings: '1.8M PLN rocznie',
      annualSavingsEn: '1.8M PLN annually',
      metrics: [
        { label: 'Czas przeglądu umów', change: '-70%', changeEn: '-70%', positive: true },
        { label: 'Godziny rozliczalne', change: '+18%', changeEn: '+18%', positive: true },
        { label: 'Wskaźnik wygranych ofert', change: '+25%', changeEn: '+25%', positive: true },
        { label: 'Błędy w umowach', change: '-95%', changeEn: '-95%', positive: true },
      ],
      metricsEn: [
        { label: 'Contract review time', change: '-70%', changeEn: '-70%', positive: true },
        { label: 'Billable hours', change: '+18%', changeEn: '+18%', positive: true },
        { label: 'Proposal win rate', change: '+25%', changeEn: '+25%', positive: true },
        { label: 'Contract errors', change: '-95%', changeEn: '-95%', positive: true },
      ],
      description: 'Agent AI do wstępnego przeglądu kontraktów, przygotowywania projektów dokumentów i badania podstaw prawnych. Prawnicy mogą skupić się na pracy strategicznej zamiast żmudnych analiz.',
      descriptionEn: 'AI agent for initial contract reviews, document draft preparation, and legal research. Lawyers can focus on strategic work instead of tedious analysis.',
      highlights: ['ROI 420%', '2.1 miesiąca zwrot', 'Najwyższy ROI w bazie', 'Godziny rozliczalne +18%'],
      highlightsEn: ['ROI 420%', '2.1 months return', 'Highest ROI in database', 'Billable hours +18%'],
    },
  ],
  timeline: [
    { phase: 'AUDYT', phaseEn: 'AUDIT', duration: 'Tydz 1-2', durationEn: 'Week 1-2', icon: '🔍', description: 'Analiza procesów, identyfikacja quick wins, audyt gotowości danych, wycena ROI', descriptionEn: 'Process analysis, quick wins identification, data readiness audit, ROI estimation' },
    { phase: 'PILOT', phaseEn: 'PILOT', duration: 'Tydz 3-6', durationEn: 'Week 3-6', icon: '🧪', description: 'Wdrożenie pilotażowe w jednym obszarze, zbieranie feedbacku, iteracja', descriptionEn: 'Pilot deployment in one area, feedback collection, iteration' },
    { phase: 'WDROŻENIE', phaseEn: 'DEPLOYMENT', duration: 'Mies 2-4', durationEn: 'Month 2-4', icon: '🚀', description: 'Skalowanie na produkcję, integracja z systemami, szkolenia użytkowników', descriptionEn: 'Production scaling, system integration, user training' },
    { phase: 'OPTYMALIZACJA', phaseEn: 'OPTIMIZE', duration: 'Mies 4-8', durationEn: 'Month 4-8', icon: '📈', description: 'Ciągłe doskonalenie, rozszerzanie zakresu, optymalizacja kosztów', descriptionEn: 'Continuous improvement, scope expansion, cost optimization' },
    { phase: 'SKALOWANIE', phaseEn: 'SCALE', duration: 'Mies 6-12', durationEn: 'Month 6-12', icon: '🌐', description: 'Pełna integracja w organizacji, nowe agenty, analiza trendów', descriptionEn: 'Full organization integration, new agents, trend analysis' },
  ],
  faqs: [
    {
      q: 'Czym są agenci AI i czym różnią się od tradycyjnych chatbotów?',
      a: 'Agenci AI to autonomiczne systemy, które potrafią myśleć, wnioskować i działać w imieniu Twojej firmy. W przeciwieństwie do chatbotów, którzy odpowiadają na konkretne słowa kluczowe, agenci AI rozumieją kontekst, podejmują decyzje i wykonują wieloetapowe procesy bez ingerencji człowieka — np. analizują dokumenty, składają zamówienia, generują raporty.',
    },
    {
      q: 'Ile kosztuje wdrożenie agenta AI dla firmy MŚP?',
      a: 'Typowe wdrożenie dla firmy MŚP to 15,000-50,000 PLN za pierwszego agenta, w zależności od stopnia integracji i złożoności. Kolejni agenci kosztują mniej dzięki wykorzystaniu istniejącej infrastruktury. Zwrot następuje średnio w 2-6 miesięcy.',
    },
    {
      q: 'Czy agenci AI zastąpią moich pracowników?',
      a: 'Nie — agenci AI odciążają Twój zespół od powtarzalnych, żmudnych zadań. Pracownicy mogą skupić się na pracy wymagającej ludzkiego osądu, kreatywności i relacji. W naszych wdrożeniach satysfakcja pracowników wzrosła średnio o 35% — bo pozbyli się nudnych zadań.',
    },
    {
      q: 'Jak szybko można wdrożyć pierwszego agenta AI?',
      a: 'Pierwsze działające wdrożenie pilotażowe powstaje w ciągu 2-3 tygodni. Pełne wdrożenie (włącznie ze szkoleniami i integracjami) trwa 4-8 tygodni. Kluczowe jest rozpoczęcie od jednego, wysokopriorytetowego procesu — nie próbuj automatyzować wszystkiego naraz.',
    },
    {
      q: 'Czy agent AI jest bezpieczny? Jak wygląda kwestia danych?',
      a: 'Tak, z odpowiednią konfiguracją. Dane są przetwarzane zgodnie z polityką prywatności, agent działa tylko w ramach zdefiniowanych uprawnień. Dla firm z rygorystycznymi wymaganiami (finanse, healthcare) oferujemy wdrożenia on-premise, gdzie dane nigdy nie opuszczają infrastruktury klienta.',
    },
  ],
  faqsEn: [
    {
      q: 'What are AI agents and how do they differ from traditional chatbots?',
      a: 'AI agents are autonomous systems that can think, reason, and act on behalf of your business. Unlike chatbots that respond to specific keywords, AI agents understand context, make decisions, and execute multi-step processes without human intervention — such as analyzing documents, placing orders, or generating reports.',
    },
    {
      q: 'How much does AI agent implementation cost for an SMB?',
      a: 'Typical implementation for an SMB is 15,000-50,000 PLN for the first agent, depending on integration complexity. Subsequent agents cost less due to existing infrastructure. Payback averages 2-6 months.',
    },
    {
      q: 'Will AI agents replace my employees?',
      a: 'No — AI agents relieve your team from repetitive, tedious tasks. Employees can focus on work requiring human judgment, creativity, and relationships. In our implementations, employee satisfaction increased by 35% on average — because they no longer handle boring tasks.',
    },
    {
      q: 'How fast can the first AI agent be deployed?',
      a: 'The first working pilot is ready in 2-3 weeks. Full deployment (including training and integrations) takes 4-8 weeks. The key is starting with one high-priority process — do not try to automate everything at once.',
    },
    {
      q: 'Is AI agent safe? What about data security?',
      a: 'Yes, with proper configuration. Data is processed according to privacy policy, and the agent operates only within defined permissions. For companies with strict requirements (finance, healthcare), we offer on-premise deployments where data never leaves the client infrastructure.',
    },
  ],
};

// ─── ANIMATED SVG NETWORK DIAGRAM ────────────────────────────────────────────

function AgentNetworkDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nodes = [
    { id: 'core', x: 200, y: 100, label: 'AI Core', color: '#D97706' },
    { id: 'n1', x: 80, y: 200, label: 'Agent 1', color: '#D97706' },
    { id: 'n2', x: 200, y: 200, label: 'Agent 2', color: '#D97706' },
    { id: 'n3', x: 320, y: 200, label: 'Agent 3', color: '#D97706' },
    { id: 'n4', x: 140, y: 300, label: 'Data', color: '#D97706' },
    { id: 'n5', x: 260, y: 300, label: 'API', color: '#D97706' },
  ];

  const connections = [
    { from: 'core', to: 'n1' },
    { from: 'core', to: 'n2' },
    { from: 'core', to: 'n3' },
    { from: 'n1', to: 'n4' },
    { from: 'n2', to: 'n4' },
    { from: 'n2', to: 'n5' },
    { from: 'n3', to: 'n5' },
    { from: 'n1', to: 'n2' },
    { from: 'n2', to: 'n3' },
    { from: 'n4', to: 'n5' },
  ];

  return (
    <svg ref={ref} viewBox="0 0 400 380" className="w-full h-auto">
      {/* Connection lines */}
      {connections.map((conn, i) => {
        const from = nodes.find(n => n.id === conn.from)!;
        const to = nodes.find(n => n.id === conn.to)!;
        return (
          <motion.line
            key={i}
            x1={from.x} y1={from.y}
            x2={to.x} y2={to.y}
            stroke="#D97706"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
            transition={{ duration: 0.8, delay: i * 0.08 }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g key={node.id}>
          {/* Outer glow */}
          <motion.circle
            cx={node.x} cy={node.y} r={28}
            fill="none"
            stroke="#D97706"
            strokeWidth="1"
            strokeOpacity="0.15"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
          />
          {/* Main circle */}
          <motion.circle
            cx={node.x} cy={node.y} r={20}
            fill={node.id === 'core' ? '#D97706' : '#18181b'}
            stroke={node.id === 'core' ? '#D97706' : '#D97706'}
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.12 + 0.5 }}
          />
          {/* Inner dot */}
          <motion.circle
            cx={node.x} cy={node.y} r={5}
            fill={node.id === 'core' ? '#fff' : '#D97706'}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.12 + 0.7 }}
          />
          {/* Label */}
          <motion.text
            x={node.x} y={node.y + 38}
            textAnchor="middle"
            className="fill-stone-400"
            style={{ fontSize: '9px', fontFamily: 'inherit' }}
            initial={{ opacity: 0, y: 5 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: i * 0.12 + 0.8 }}
          >
            {node.label}
          </motion.text>
        </motion.g>
      ))}

      {/* Animated pulse rings on core node */}
      {isInView && [0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={200} cy={100} r={20}
          fill="none"
          stroke="#D97706"
          strokeWidth="1.5"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{
            scale: [1, 2.5],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </svg>
  );
}

// ─── INDUSTRY TABS ───────────────────────────────────────────────────────────

function IndustryTabs({ lang }: { lang: Lang }) {
  const isPL = lang === 'pl';
  const [active, setActive] = useState('manufacturing');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const data = postData.industryData[active as keyof typeof postData.industryData];

  return (
    <div ref={ref} className="space-y-6">
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2">
        {postData.industryTabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
              active === tab.id
                ? 'bg-accent text-white shadow-lg shadow-accent/25'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-accent/40'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{isPL ? tab.label : tab.labelEn}</span>
          </motion.button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-stone-200 p-6 lg:p-8"
        >
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Description */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                {isPL ? data.title : data.titleEn}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {isPL ? data.description : data.descriptionEn}
              </p>
            </div>

            {/* Stats */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {(isPL ? data.stats : data.statsEn).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-stone-50 rounded-xl p-4 text-center border border-stone-100"
                >
                  <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-xs text-stone-500">{isPL ? stat.label : stat.labelEn}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── EXPANDABLE CASE STUDY CARD ──────────────────────────────────────────────

function CaseStudyCard({ study, index, lang }: {
  study: typeof postData.caseStudies[0];
  index: number;
  lang: Lang;
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isPL = lang === 'pl';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
                {isPL ? study.type : study.typeEn}
              </span>
              <span className="text-xs text-stone-500">{isPL ? study.size : study.sizeEn}</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-1">
              {isPL ? study.company : study.companyEn}
            </h3>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-bold text-accent">{study.roi}</div>
            <div className="text-xs text-stone-500">ROI</div>
            <div className="text-xs text-stone-400 mt-1">
              {isPL ? study.months : study.monthsEn} {isPL ? 'zwrot' : 'return'}
            </div>
          </div>
        </div>

        {/* Metrics Preview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          {(isPL ? study.metrics : study.metricsEn).map((metric, i) => (
            <div key={i} className="bg-stone-50 rounded-lg p-3">
              <div className="text-xs text-stone-500 mb-1">{metric.label}</div>
              <div className="text-sm font-bold text-accent">{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Expand indicator */}
        <div className="flex items-center gap-1 mt-4 text-accent text-sm font-semibold">
          <span>{expanded ? (isPL ? 'Zwiń' : 'Collapse') : (isPL ? 'Zobacz szczegóły' : 'View details')}</span>
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
          <p className="text-stone-600 mb-4 leading-relaxed">
            {isPL ? study.description : study.descriptionEn}
          </p>

          {/* Investment info */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-stone-50 rounded-lg p-3">
              <div className="text-xs text-stone-500 mb-1">{isPL ? 'Inwestycja' : 'Investment'}</div>
              <div className="text-sm font-bold text-stone-900">
                {isPL ? study.investment : study.investmentEn}
              </div>
            </div>
            <div className="bg-stone-50 rounded-lg p-3">
              <div className="text-xs text-stone-500 mb-1">{isPL ? 'Oszczędności roczne' : 'Annual savings'}</div>
              <div className="text-sm font-bold text-accent">
                {isPL ? study.annualSavings : study.annualSavingsEn}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {(isPL ? study.highlights : study.highlightsEn).map((h, i) => (
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

// ─── TIMELINE STEP ────────────────────────────────────────────────────────────

function TimelineStep({ step, index, total, isPL }: {
  step: typeof postData.timeline[0];
  index: number;
  total: number;
  isPL: boolean;
}) {
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
          <h3 className="font-bold text-stone-900">
            {isPL ? step.phase : step.phaseEn}
          </h3>
          <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded">
            {isPL ? step.duration : step.durationEn}
          </span>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed">
          {isPL ? step.description : step.descriptionEn}
        </p>
      </div>
    </motion.div>
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

export default function AiAgentsPostClient({
  lang,
}: {
  lang: Lang;
}) {
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

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── A. HERO SECTION ── */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=60"
            alt="AI Agents"
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

            {/* Right - Network Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-sm font-semibold text-stone-300 mb-4 uppercase tracking-wider">
                {isPL ? 'Architektura agentów AI' : 'AI Agent Architecture'}
              </div>
              <AgentNetworkDiagram />
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

      {/* ── C. INDUSTRY TABS ── */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {isPL ? 'Branże transformowane przez agentów AI' : 'Industries Transformed by AI Agents'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {isPL
                ? 'Każda branża ma inne wyzwania. Zobacz, jak agenci AI rozwiązują konkretne problemy w polskich firmach.'
                : 'Each industry has different challenges. See how AI agents solve specific problems in Polish companies.'}
            </p>
          </motion.div>
          <IndustryTabs lang={lang} />
        </div>
      </section>

      {/* ── D. CASE STUDIES ── */}
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
              {isPL ? 'Studia przypadków' : 'Case Studies'}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {isPL
                ? 'Trzy szczegółowe przykłady wdrożeń agentów AI z realnymi danymi finansowymi.'
                : 'Three detailed examples of AI agent implementations with real financial data.'}
            </p>
          </motion.div>

          <div className="space-y-4">
            {postData.caseStudies.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ── E. TIMELINE ── */}
      <section className="py-16 lg:py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {isPL ? 'Ścieżka wdrożenia agentów AI' : 'AI Agent Implementation Roadmap'}
            </h2>
            <p className="text-stone-600">
              {isPL
                ? '5 faz od audytu do pełnej integracji w organizacji.'
                : '5 phases from audit to full organization integration.'}
            </p>
          </motion.div>

          <div>
            {postData.timeline.map((step, i) => (
              <TimelineStep
                key={`${step.phase}-${i}`}
                step={step}
                index={i}
                total={postData.timeline.length}
                isPL={isPL}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── F. CTA SECTION ── */}
      <section className="py-16 lg:py-20 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isPL ? 'Gotowy na agentów AI?' : 'Ready for AI Agents?'}
            </h2>
            <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
              {isPL
                ? 'Umów bezpłatny audyt procesów i dowiedz się, gdzie agenci AI przyniosą najwięcej korzyści w Twojej firmie.'
                : 'Book a free process audit and find out where AI agents will bring the most value to your company.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {isPL ? 'Zamów audyt →' : 'Book Audit →'}
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

      {/* ── G. FAQ SECTION ── */}
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
