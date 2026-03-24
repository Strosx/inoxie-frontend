'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Lang } from '../../i18n';

// ─── DATA ───────────────────────────────────────────────────────────────────

const postData = {
  badge: 'Checklist 2026',
  badgeEn: 'Checklist 2026',
  date: '2026-03-24',
  readingTime: '10 min',
  readingTimeEn: '10 min read',
  author: 'Maciej Kamieniak',
  authorPosition: 'Founder & AI Strategy Lead',
  authorBio: 'Założyciel InoxieSoft, ekspert AI z 4-letnim doświadczeniem we wdrażaniu rozwiązań AI dla firm MŚP w Polsce. Pomógł ponad 50 polskim firmom w transformacji cyfrowej.',
  authorBioEn: 'Founder of InoxieSoft, AI expert with 4 years of experience implementing AI solutions for SMBs in Poland. Helped over 50 Polish companies with digital transformation.',
  title: 'AI Readiness Checklist 2026: Czy Twoja firma jest gotowa na transformację AI?',
  titleEn: 'AI Readiness Checklist 2026: Is Your Business Ready for AI Transformation?',
  excerpt: 'Praktyczny 10-punktowy checklist gotowości AI dla polskich firm MŚP. Sprawdź, czy Twoja firma powinna inwestować w AI i od czego zacząć.',
  excerptEn: 'Practical 10-point AI readiness checklist for Polish SMBs. Check if your company should invest in AI and where to start.',
  heroStats: [
    { value: '67%', label: 'polskich firm MŚP', labelEn: 'Polish SMBs exploring AI', sublabel: 'już eksploruje AI', sublabelEn: 'already exploring AI' },
    { value: '220-340%', label: 'średni ROI', labelEn: 'average AI ROI', sublabel: 'w ciągu 12 miesięcy', sublabelEn: 'within 12 months' },
    { value: '2.1', label: 'miesiąca', labelEn: 'months', sublabel: 'do pierwszego zwrotu', sublabelEn: 'to first return' },
  ],
  heroStatsEn: [
    { value: '67%', label: 'of Polish SMBs', labelEn: 'Polish SMBs exploring AI', sublabel: 'already exploring AI', sublabelEn: 'already exploring AI' },
    { value: '220-340%', label: 'average ROI', labelEn: 'average AI ROI', sublabel: 'within 12 months', sublabelEn: 'within 12 months' },
    { value: '2.1', label: 'months', labelEn: 'months', sublabel: 'to first return', sublabelEn: 'to first return' },
  ],
  intro: {
    hook: 'Według naszego badania 2026, 67% polskich firm MŚP już aktywnie eksploruje rozwiązania AI. Ale tylko 23% z nich wie, od czego zacząć.',
    hookEn: 'According to our 2026 survey, 67% of Polish SMBs are already actively exploring AI solutions. But only 23% of them know where to start.',
    problem: 'Wielu właścicieli firm chce wdrożyć AI, ale nie wie, czy ich firma jest na to gotowa. Inwestują w technologie bez zrozumienia własnych potrzeb i możliwości.',
    problemEn: 'Many business owners want to implement AI but don\'t know if their company is ready. They invest in technology without understanding their own needs and capabilities.',
    promise: 'Ten 10-punktowy checklist pomoże Ci obiektywnie ocenić gotowość Twojej firmy na transformację AI — i wskaże konkretne kroki do działania.',
    promiseEn: 'This 10-point checklist will help you objectively assess your company\'s readiness for AI transformation — and point to specific steps for action.',
  },
  checklistItems: [
    {
      id: 1,
      title: '1. Strategiczne dopasowanie AI',
      titleEn: '1. Strategic AI Alignment',
      icon: '🎯',
      description: 'Czy AI jest spójne z celami biznesowymi Twojej firmy? AI nie jest celem samym w sobie — to narzędzie do rozwiązywania konkretnych problemów.',
      descriptionEn: 'Is AI aligned with your business goals? AI is not a goal in itself — it\'s a tool for solving specific problems.',
      whyMatters: 'Bez strategicznego dopasowania ryzykujesz inwestycje w technologie, które nie przynoszą realnej wartości biznesowej.',
      whyMattersEn: 'Without strategic alignment, you risk investing in technologies that don\'t bring real business value.',
      redFlags: ['AI dla samego AI', 'Brak konkretnego problemu do rozwiązania', ' Kopiowanie konkurencji bez analizy'],
      redFlagsEn: ['AI for the sake of AI', 'No specific problem to solve', 'Copying competitors without analysis'],
      question: 'Jaki konkretny problem biznesowy chcesz rozwiązać dzięki AI?',
      questionEn: 'What specific business problem do you want to solve with AI?',
    },
    {
      id: 2,
      title: '2. Jakość i dostępność danych',
      titleEn: '2. Data Quality & Availability',
      icon: '📊',
      description: 'Czy Twoje dane są czyste, ustrukturyzowane i łatwo dostępne? AI potrzebuje dobrej jakości danych do nauki i generowania wartościowych wyników.',
      descriptionEn: 'Are your data clean, structured, and easily accessible? AI needs high-quality data to learn and generate valuable results.',
      whyMatters: 'Złe dane = złe wyniki AI. 20-30% czasu projektu AI idzie na czyszczenie i organizację danych.',
      whyMattersEn: 'Bad data = bad AI results. 20-30% of AI project time goes to data cleaning and organization.',
      redFlags: ['Dane rozproszone w wielu systemach', 'Brak standardów nazewnictwa', 'Dużo danych ręcznie wprowadzanych'],
      redFlagsEn: ['Data scattered across multiple systems', 'No naming standards', 'Lots of manually entered data'],
      question: 'Gdzie znajdują się Twoje najważniejsze dane biznesowe i w jakim są formacie?',
      questionEn: 'Where is your most important business data located and what format is it in?',
    },
    {
      id: 3,
      title: '3. Dojrzałość procesów',
      titleEn: '3. Process Maturity',
      icon: '⚙️',
      description: 'Czy Twoje główne procesy biznesowe są udokumentowane, powtarzalne i mierzalne? AI najlepiej działa z ustabilizowanymi procesami.',
      descriptionEn: 'Are your main business processes documented, repeatable, and measurable? AI works best with stabilized processes.',
      whyMatters: 'Automatyzacja chaotycznego procesu tworzy zautomatyzowany chaos. Najpierw uporządkuj procesy, potem automatyzuj.',
      whyMattersEn: 'Automating a chaotic process creates automated chaos. First organize processes, then automate.',
      redFlags: ['Każdy robi to inaczej', 'Brak procedur operacyjnych', 'Procesy zależne od konkretnych osób'],
      redFlagsEn: ['Everyone does it differently', 'No operating procedures', 'Processes depend on specific people'],
      question: 'Czy potrafisz opisać swój główny proces w 5 krokach?',
      questionEn: 'Can you describe your main process in 5 steps?',
    },
    {
      id: 4,
      title: '4. Gotowość budżetowa',
      titleEn: '4. Budget Readiness',
      icon: '💰',
      description: 'Czy masz dedykowany budżet na AI? Realistyczne wdrożenie AI wymaga inwestycji — zarówno jednorazowej, jak i bieżącej.',
      descriptionEn: 'Do you have a dedicated budget for AI? Realistic AI implementation requires investment — both one-time and ongoing.',
      whyMatters: 'Firmy, które niedoszacowują budżetu, często porzucają projekty AI przed uzyskaniem ROI.',
      whyMattersEn: 'Companies that underestimate budgets often abandon AI projects before achieving ROI.',
      redFlags: ['Budżet "jak się da"', 'Liczenie tylko na darmowe narzędzia', 'Brak rezerwy na optymalizację'],
      redFlagsEn: ['Budget "whatever works"', 'Relying only on free tools', 'No reserve for optimization'],
      question: 'Ile możesz przeznaczyć rocznie na transformację AI (nie tylko software, ale też szkolenia, integrację)?',
      questionEn: 'How much can you allocate annually for AI transformation (not just software, but also training, integration)?',
    },
    {
      id: 5,
      title: '5. Infrastruktura techniczna',
      titleEn: '5. Technical Infrastructure',
      icon: '🔧',
      description: 'Czy Twoje systemy IT mogą integrować się z rozwiązaniami AI? Nowoczesne API i chmura to standard dla AI.',
      descriptionEn: 'Can your IT systems integrate with AI solutions? Modern APIs and cloud are the standard for AI.',
      whyMatters: 'Starsze systemy (legacy) mogą wymagać dodatkowych nakładów na integrację lub modernizację.',
      whyMattersEn: 'Legacy systems may require additional investment for integration or modernization.',
      redFlags: ['Stare systemy bez API', 'Wszystko na Excelach', 'Brak dostępu do chmury'],
      redFlagsEn: ['Old systems without APIs', 'Everything in Excel', 'No cloud access'],
      question: 'Z jakich systemów (CRM, ERP, inne) korzysta Twoja firma?',
      questionEn: 'What systems (CRM, ERP, other) does your company use?',
    },
    {
      id: 6,
      title: '6. Zaangażowanie kierownictwa',
      titleEn: '6. Leadership Buy-in',
      icon: '👔',
      description: 'Czy zarząd i kluczowi menedżerowie rozumieją i wspierają transformację AI? Bez tego projekty AI giną w biurokracji.',
      descriptionEn: 'Do management and key managers understand and support AI transformation? Without it, AI projects die in bureaucracy.',
      whyMatters: 'Firmy z aktywnym wsparciem zarządu mają 3x wyższy wskaźnik sukcesu projektów AI.',
      whyMattersEn: 'Companies with active management support have 3x higher AI project success rates.',
      redFlags: ['AI to "pomysł IT"', 'Brak sponsorów na poziomie C', 'CEO mówi "poczekajmy"'],
      redFlagsEn: ['AI is "IT\'s idea"', 'No sponsors at C-level', 'CEO says "let\'s wait"'],
      question: 'Kto w Twojej firmie będzie championem transformacji AI?',
      questionEn: 'Who in your company will be the champion of AI transformation?',
    },
    {
      id: 7,
      title: '7. Kompetencje i talenty',
      titleEn: '7. Skills & Talent',
      icon: '🧠',
      description: 'Czy masz ludzi, którzy mogą prowadzić projekty AI? To nie wymaga PhD — ale wymaga podstawowej wiedzy i ciekawości.',
      descriptionEn: 'Do you have people who can lead AI projects? It doesn\'t require a PhD — but it does require basic knowledge and curiosity.',
      whyMatters: 'Nawet z zewnętrznym partnerem, potrzebujesz wewnętrznego "tłumacza" między biznesem a technologią.',
      whyMattersEn: 'Even with an external partner, you need an internal "translator" between business and technology.',
      redFlags: ['Wszyscy zgłaszają "nie mam czasu"', 'Brak osoby odpowiedzialnej za AI', 'Zespół unika nowych narzędzi'],
      redFlagsEn: ['Everyone says "I don\'t have time"', 'No person responsible for AI', 'Team avoids new tools'],
      question: 'Kto w Twoim zespole jest najbardziej otwarty na nowe technologie?',
      questionEn: 'Who on your team is most open to new technologies?',
    },
    {
      id: 8,
      title: '8. Gotowość na zmiany',
      titleEn: '8. Change Readiness',
      icon: '🔄',
      description: 'Czy Twoja organizacja jest gotowa na zmiany? AI zmienia sposób pracy — nie tylko technologie.',
      descriptionEn: 'Is your organization ready for change? AI changes the way of working — not just technologies.',
      whyMatters: '50% projektów AI "umiera" nie z powodu technologii, ale ludzkiego oporu przed zmianą.',
      whyMattersEn: '50% of AI projects "die" not because of technology, but human resistance to change.',
      redFlags: [' Historia z popularyzacją Excela', 'Zespół obawia się o pracę', 'Brak komunikacji o zmianach'],
      redFlagsEn: ['History with Excel popularization', 'Team fears for their jobs', 'No communication about changes'],
      question: 'Jak Twój zespół zareaguje, jeśli AI zmieni sposób wykonywania ich codziennych zadań?',
      questionEn: 'How will your team react if AI changes how they perform their daily tasks?',
    },
    {
      id: 9,
      title: '9. Zgodność z RODO i bezpieczeństwo',
      titleEn: '9. GDPR Compliance & Security',
      icon: '🔒',
      description: 'Czy Twoje procesy przetwarzania danych są zgodne z RODO? AI często przetwarza dane osobowe — to wymaga ostrożności.',
      descriptionEn: 'Are your data processing processes GDPR compliant? AI often processes personal data — this requires caution.',
      whyMatters: 'Niezgodność z RODO może kosztować do 20 mln EUR lub 4% obrotu. To realne ryzyko.',
      whyMattersEn: 'GDPR non-compliance can cost up to EUR 20M or 4% of turnover. This is real risk.',
      redFlags: ['Nie wiesz, gdzie są dane klientów', 'Brak polityki retencji danych', 'Pracownicy dzielą się danymi przez Slack'],
      redFlagsEn: ['You don\'t know where customer data is', 'No data retention policy', 'Employees share data via Slack'],
      question: 'Czy wiesz, jakie dane osobowe przetwarza Twoja firma i gdzie są przechowywane?',
      questionEn: 'Do you know what personal data your company processes and where it is stored?',
    },
    {
      id: 10,
      title: '10. Ekosystem dostawców i partnerów',
      titleEn: '10. Vendor & Partner Ecosystem',
      icon: '🤝',
      description: 'Czy masz partnera wdrożeniowego, który rozumie polski rynek? Skuteczna implementacja AI wymaga lokalnej ekspertyzy.',
      descriptionEn: 'Do you have an implementation partner who understands the Polish market? Effective AI implementation requires local expertise.',
      whyMatters: 'Polska specyfika: RODO, język polski, specyfika systemów (SAP, Comarch), mentalność pracowników.',
      whyMattersEn: 'Polish specifics: GDPR, Polish language, system specifics (SAP, Comarch), employee mentality.',
      redFlags: ['Wybór dostawcy tylko po cenie', 'Brak referencji z Polski', 'Tylno piatek wdrożenie "na szybko"'],
      redFlagsEn: ['Choosing supplier only by price', 'No references from Poland', 'Rushed "quick" implementation'],
      question: 'Czy znasz firmy, które skutecznie wdrożyły AI w Polsce w Twojej branży?',
      questionEn: 'Do you know companies that have successfully implemented AI in Poland in your industry?',
    },
  ],
  nextSteps: {
    ready: {
      title: 'Twoja firma jest gotowa na AI!',
      titleEn: 'Your company is ready for AI!',
      description: 'Masz fundamenty. Teraz czas na konkretne działanie. Zacznij od jednego wysokiego wpływu procesu.',
      descriptionEn: 'You have the foundations. Now it\'s time for concrete action. Start with one high-impact process.',
      steps: [
        'Przeprowadź szczegółowy audyt wybranego procesu',
        'Zidentyfikuj konkretne punkty bólowe i metryki sukcesu',
        'Wybierz sprawdzonego dostawcę z referencjami',
        'Ustaw realistyczne oczekiwania i harmonogram',
        'Mierz wyniki i iteruj',
      ],
      stepsEn: [
        'Conduct a detailed audit of the selected process',
        'Identify specific pain points and success metrics',
        'Choose a proven supplier with references',
        'Set realistic expectations and timeline',
        'Measure results and iterate',
      ],
    },
    partiallyReady: {
      title: 'Częściowa gotowość — to dobry start!',
      titleEn: 'Partial readiness — this is a good start!',
      description: 'Masz pewne fundamenty. Przed wdrożeniem AI skup się na wzmocnieniu słabszych obszarów.',
      descriptionEn: 'You have some foundations. Before AI implementation, focus on strengthening weaker areas.',
      steps: [
        'Zainwestuj w jakość danych (20-30% projektu)',
        'Ustabilizuj kluczowe procesy',
        'Buduj świadomość w zespole',
        'Stwórz budżet i plan transformacji na 12 miesięcy',
        'Szukaj partnera, który pomoże Ci się przygotować',
      ],
      stepsEn: [
        'Invest in data quality (20-30% of project)',
        'Stabilize key processes',
        'Build team awareness',
        'Create a budget and transformation plan for 12 months',
        'Look for a partner who will help you prepare',
      ],
    },
    notReady: {
      title: 'Nie wszystko jeszcze — ale to normalne!',
      titleEn: 'Not everything yet — but that\'s normal!',
      description: 'Wielu firmy nie są gotowe na AI i to OK. Zacznij od budowania fundamentów — to nie jest strata czasu.',
      descriptionEn: 'Many companies are not ready for AI and that\'s OK. Start building foundations — this is not a waste of time.',
      steps: [
        'Przeprowadź wewnętrzny audyt procesów',
        'Ustabilizuj podstawowe procesy biznesowe',
        'Zbierz dane i uporządkuj systemy',
        'Educate zespół o możliwościach AI',
        'Wróć do checklist za 6-12 miesięcy',
      ],
      stepsEn: [
        'Conduct internal process audit',
        'Stabilize core business processes',
        'Gather data and organize systems',
        'Educate team about AI capabilities',
        'Return to checklist in 6-12 months',
      ],
    },
  },
  faq: [
    {
      q: 'Ile kosztuje wdrożenie AI dla firmy nieprzygotowanej?',
      qEn: 'How much does AI implementation cost for an unprepared company?',
      a: 'Nieprzygotowana firma może wydać 2-3x więcej niż firma z dobrymi fundamentami. Dodatkowe koszty to: czyszczenie danych (20-30% budżetu), stabilizacja procesów, szkolenia. Dla średniej firmy MŚP może to być dodatkowe 50,000-150,000 PLN.',
      aEn: 'An unprepared company can spend 2-3x more than a company with good foundations. Additional costs: data cleaning (20-30% of budget), process stabilization, training. For an average SMB, this can be an additional PLN 50,000-150,000.',
    },
    {
      q: 'Jak długo trwa przygotowanie firmy do AI?',
      qEn: 'How long does it take to prepare a company for AI?',
      a: 'Zależy od wyjściowego stanu. Firmy z dobrymi fundamentami: 1-3 miesiące na pierwsze wdrożenie. Firmy wymagające pracy: 6-12 miesięcy na przygotowanie przed głównym wdrożeniem. Warto zacząć od małych kroków — nie czekaj na "idealne" przygotowanie.',
      aEn: 'Depends on the initial state. Companies with good foundations: 1-3 months to first implementation. Companies needing work: 6-12 months to prepare before main implementation. It\'s worth starting with small steps — don\'t wait for "perfect" preparation.',
    },
    {
      q: 'Czy małe firmy mogą konkurować z firmami gotowymi na AI?',
      qEn: 'Can small companies compete with AI-ready enterprises?',
      a: 'Absolutnie tak! Mniejsze firmy są często bardziej zwinnie i szybciej wdrażają zmiany. Klucz to nie rozmiar, ale gotowość do zmian i właściwe podejście. Mała firma z dobrymi fundamentami może pokonać dużą korporację z biurokracją i starymi systemami.',
      aEn: 'Absolutely! Smaller companies are often more agile and implement changes faster. The key is not size, but readiness for change and the right approach. A small company with good foundations can beat a large corporation with bureaucracy and legacy systems.',
    },
    {
      q: 'Co jeśli nasze dane nie są wystarczająco dobre dla AI?',
      qEn: 'What if our data isn\'t good enough for AI?',
      a: 'To normalne! Większość firm zaczyna z "niedoborami" danych. Rozwiązanie: (1) Zacznij od procesów z prostymi danymi, (2) Zainwestuj w czyszczenie i organizację, (3) Automatyzacja zbierania danych może być pierwszym krokiem. Dane to inwestycja — zwraca się wielokrotnie.',
      aEn: 'This is normal! Most companies start with "deficits" in data. Solution: (1) Start with processes with simple data, (2) Invest in cleaning and organization, (3) Automating data collection can be the first step. Data is an investment — it pays off multiple times.',
    },
    {
      q: 'Czy musimy zatrudniać specjalistów AI?',
      qEn: 'Do we need to hire AI specialists?',
      a: 'Nie koniecznie. Dla większości MŚP lepszym modelem jest współpraca z zewnętrznym partnerem (jak InoxieSoft), który dostarcza ekspertyzę, podczas gdy Ty zachowujesz wewnętrznego "właściciela" projektu. To kosztuje mniej i daje lepsze wyniki niż zatrudnianie niszowych specjalistów.',
      aEn: 'Not necessarily. For most SMBs, a better model is working with an external partner (like InoxieSoft) that provides expertise, while you keep an internal "owner" of the project. This costs less and gives better results than hiring niche specialists.',
    },
  ],
  cta: {
    title: 'Gotowy na bezpłatną ocenę gotowości AI?',
    titleEn: 'Ready for a free AI readiness assessment?',
    description: 'W ciągu 1 godziny przeanalizujemy Twoją firmę i powiemy, gdzie AI może przynieść najwięcej korzyści — zupełnie bezpłatnie.',
    descriptionEn: 'Within 1 hour we\'ll analyze your company and tell you where AI can bring the most benefits — completely free.',
    button: 'Umów bezpłatną konsultację',
    buttonEn: 'Book a free consultation',
  },
  authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
};

// ─── ANIMATION VARIANTS ─────────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function ChecklistItem({ 
  item, 
  isChecked, 
  onToggle,
  lang 
}: { 
  item: typeof postData.checklistItems[0]; 
  isChecked: boolean;
  onToggle: () => void;
  lang: 'pl' | 'en';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`relative rounded-2xl border-2 p-6 md:p-8 transition-all duration-300 ${
        isChecked 
          ? 'border-emerald-500 bg-emerald-50/50' 
          : 'border-stone-200 bg-white hover:border-emerald-200'
      }`}
    >
      {/* Checkbox */}
      <button
        onClick={onToggle}
        className={`absolute -top-4 left-6 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
          isChecked 
            ? 'bg-emerald-500 border-emerald-500 text-white' 
            : 'bg-white border-stone-300 hover:border-emerald-400'
        }`}
      >
        {isChecked && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex items-start gap-4">
        <span className="text-3xl">{item.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-stone-900 mb-3">
            {lang === 'pl' ? item.title : item.titleEn}
          </h3>
          
          <p className="text-stone-600 mb-4">
            {lang === 'pl' ? item.description : item.descriptionEn}
          </p>

          {/* Why it matters */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-stone-800 text-sm">
                {lang === 'pl' ? 'Dlaczego to ważne:' : 'Why it matters:'}
              </span>
            </div>
            <p className="text-stone-600 text-sm ml-7">
              {lang === 'pl' ? item.whyMatters : item.whyMattersEn}
            </p>
          </div>

          {/* Red flags */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-semibold text-stone-800 text-sm">
                {lang === 'pl' ? 'Czerwone flagi (nie jesteś gotowy):' : 'Red flags (you\'re not ready):'}
              </span>
            </div>
            <ul className="text-stone-600 text-sm ml-7 space-y-1">
              {(lang === 'pl' ? item.redFlags : item.redFlagsEn).map((flag, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Assessment question */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-amber-800 font-medium text-sm">
              🤔 {lang === 'pl' ? item.question : item.questionEn}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FAQItem({ item, lang }: { item: typeof postData.faq[0]; lang: 'pl' | 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="border-b border-stone-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-stone-900 pr-4">
          {lang === 'pl' ? item.q : item.qEn}
        </span>
        <svg
          className={`w-5 h-5 text-stone-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-stone-600">
              {lang === 'pl' ? item.a : item.aEn}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function AiReadinessChecklistClient({ lang }: { lang: Lang }) {
  const t = useTranslations();
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const toggleItem = (id: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const checkedCount = checkedItems.size;
  const totalItems = postData.checklistItems.length;
  const readinessPercent = Math.round((checkedCount / totalItems) * 100);

  const getReadinessLevel = () => {
    if (readinessPercent >= 70) return 'ready';
    if (readinessPercent >= 40) return 'partiallyReady';
    return 'notReady';
  };

  const readinessLevel = getReadinessLevel();
  const nextStepsData = postData.nextSteps[readinessLevel as keyof typeof postData.nextSteps];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@type': 'Article',
            author: {
              '@type': 'Person',
              name: postData.author,
              jobTitle: postData.authorPosition,
              worksFor: { '@type': 'Organization', name: 'InoxieSoft' },
            },
            publisher: { '@type': 'Organization', name: 'InoxieSoft' },
            datePublished: postData.date,
            dateModified: postData.date,
            headline: lang === 'pl' ? postData.title : postData.titleEn,
            description: lang === 'pl' ? postData.excerpt : postData.excerptEn,
          }),
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/30 backdrop-blur rounded-full text-sm font-medium mb-6">
              {lang === 'pl' ? postData.badge : postData.badgeEn}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {lang === 'pl' ? postData.title : postData.titleEn}
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-8">
              {lang === 'pl' ? postData.excerpt : postData.excerptEn}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {(lang === 'pl' ? postData.heroStats : postData.heroStatsEn).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-emerald-200 text-sm md:text-base">{stat.label}</div>
                  <div className="text-emerald-300/70 text-xs">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L60 45.5C120 41 240 33 360 31C480 29 600 33 720 38C840 43 960 49 1080 49C1200 49 1320 43 1380 40L1440 37V100H0V50Z" fill="#f7fafc"/>
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
              {lang === 'pl' ? 'Dlaczego ten checklist?' : 'Why this checklist?'}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-emerald-700 mb-2">📊 {lang === 'pl' ? 'Dane, które zmotywują' : 'Data that will motivate'}</h3>
                <p className="text-stone-600">{lang === 'pl' ? postData.intro.hook : postData.intro.hookEn}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-700 mb-2">⚠️ {lang === 'pl' ? 'Problem' : 'Problem'}</h3>
                <p className="text-stone-600">{lang === 'pl' ? postData.intro.problem : postData.intro.problemEn}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">✅ {lang === 'pl' ? 'Obietnica' : 'Promise'}</h3>
                <p className="text-stone-600">{lang === 'pl' ? postData.intro.promise : postData.intro.promiseEn}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Readiness Score */}
      <section className="py-8 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 md:p-8 text-white text-center">
            <h2 className="text-xl font-bold mb-4">
              {lang === 'pl' ? 'Twoja gotowość na AI' : 'Your AI Readiness'}
            </h2>
            <div className="text-5xl md:text-6xl font-bold mb-2">{readinessPercent}%</div>
            <div className="text-emerald-100 mb-4">
              {checkedCount} / {totalItems} {lang === 'pl' ? 'punktów' : 'points checked'}
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 mb-4">
              <div 
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${readinessPercent}%` }}
              />
            </div>
            <p className="text-emerald-100 text-sm">
              {lang === 'pl' ? 'Klikaj na checkboxy, aby śledzić swoją gotowość' : 'Click checkboxes to track your readiness'}
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {postData.checklistItems.map((item) => (
              <ChecklistItem
                key={item.id}
                item={item}
                isChecked={checkedItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
                lang={lang}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-12 md:py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`rounded-2xl p-6 md:p-10 ${
              readinessLevel === 'ready' 
                ? 'bg-emerald-50 border-2 border-emerald-200' 
                : readinessLevel === 'partiallyReady'
                ? 'bg-amber-50 border-2 border-amber-200'
                : 'bg-blue-50 border-2 border-blue-200'
            }`}
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
              readinessLevel === 'ready' 
                ? 'text-emerald-800' 
                : readinessLevel === 'partiallyReady'
                ? 'text-amber-800'
                : 'text-blue-800'
            }`}>
              {lang === 'pl' ? nextStepsData.title : nextStepsData.titleEn}
            </h2>
            
            <p className={`mb-6 ${
              readinessLevel === 'ready' 
                ? 'text-emerald-700' 
                : readinessLevel === 'partiallyReady'
                ? 'text-amber-700'
                : 'text-blue-700'
            }`}>
              {lang === 'pl' ? nextStepsData.description : nextStepsData.descriptionEn}
            </p>

            <div className="space-y-3">
              {(lang === 'pl' ? nextStepsData.steps : nextStepsData.stepsEn).map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                    readinessLevel === 'ready' 
                      ? 'bg-emerald-500 text-white' 
                      : readinessLevel === 'partiallyReady'
                      ? 'bg-amber-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {i + 1}
                  </span>
                  <span className="text-stone-700 pt-1">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8 text-center">
              {lang === 'pl' ? 'Często zadawane pytania' : 'Frequently Asked Questions'}
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 px-6 md:px-8">
              {postData.faq.map((item, i) => (
                <FAQItem key={i} item={item} lang={lang} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {lang === 'pl' ? postData.cta.title : postData.cta.titleEn}
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              {lang === 'pl' ? postData.cta.description : postData.cta.descriptionEn}
            </p>
            
            <Link
              href={`/${lang}/contact`}
              className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all hover:shadow-xl hover:shadow-emerald-500/25"
            >
              {lang === 'pl' ? postData.cta.button : postData.cta.buttonEn}
              <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 md:py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={postData.authorImage}
                alt={postData.author}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-stone-900">{postData.author}</h3>
              <p className="text-emerald-600 font-medium mb-3">{postData.authorPosition} | InoxieSoft</p>
              <p className="text-stone-600">
                {lang === 'pl' ? postData.authorBio : postData.authorBioEn}
              </p>
              <div className="mt-4 flex items-center gap-3 justify-center md:justify-start">
                <a 
                  href="https://linkedin.com/in/maciejkamieniak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            {lang === 'pl' ? 'Powiązane artykuły' : 'Related Articles'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href={`/${lang}/roi-ai-post`}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="ROI AI"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-900 group-hover:text-emerald-600 transition-colors">
                  {lang === 'pl' ? 'Kalkulacja ROI AI: Kompletna analiza 2026' : 'AI ROI Calculation: Complete Analysis 2026'}
                </h3>
                <p className="text-stone-600 text-sm mt-2">
                  {lang === 'pl' ? 'Rzeczywiste dane z 47 firm z 12 branż.' : 'Real data from 47 companies across 12 industries.'}
                </p>
              </div>
            </Link>
            <Link 
              href={`/${lang}/ai-agents-post`}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                  alt="AI Agents"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-900 group-hover:text-emerald-600 transition-colors">
                  {lang === 'pl' ? 'Agenci AI w 2026: Jak rewolucjonizują biznes' : 'AI Agents in 2026: Revolutionizing Business'}
                </h3>
                <p className="text-stone-600 text-sm mt-2">
                  {lang === 'pl' ? 'Dane z 30+ polskich wdrożeń agentów AI.' : 'Data from 30+ Polish AI agent implementations.'}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
