'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Lang } from '../../i18n';

// ─── DATA ───────────────────────────────────────────────────────────────────

const postData = {
  badge: 'Shadow AI 2026',
  badgeEn: 'Shadow AI 2026',
  date: '2026-03-24',
  readingTime: '11 min',
  readingTimeEn: '11 min read',
  author: 'Maciej Kamieniak',
  authorPosition: 'Founder & AI Strategy Lead',
  authorBio: 'Założyciel InoxieSoft, ekspert AI z 4-letnim doświadczeniem we wdrażaniu rozwiązań AI dla firm MŚP w Polsce.',
  authorBioEn: 'Founder of InoxieSoft, AI expert with 4 years of experience implementing AI solutions for SMBs in Poland.',
  title: 'Shadow AI: Ukryte Zagrożenie dla Polskich Firm w 2026 Roku',
  titleEn: 'Shadow AI: The Hidden Threat to Polish Businesses in 2026',
  excerpt: 'Shadow AI — pracownicy używają narzędzi AI bez wiedzy firmy. Poznaj ryzyka i dowiedz się, jak chronić swoją firmę przed wyciekiem danych.',
  excerptEn: 'Shadow AI — employees using AI tools without company knowledge. Learn the risks and how to protect your business from data leakage.',
  heroStats: [
    { value: '78-98%', label: 'pracowników', labelEn: 'of employees', sublabel: 'używa nieautoryzowanych narzędzi AI', sublabelEn: 'use non-approved AI tools' },
    { value: '38%', label: 'pracowników', labelEn: 'of employees', sublabel: 'udostępnia dane poufne AI', sublabelEn: 'share confidential data with AI' },
    { value: '$4.63M', label: 'średni koszt', labelEn: 'average cost', sublabel: 'naruszenia danych AI', sublabelEn: 'of AI data breach' },
  ],
  heroStatsEn: [
    { value: '78-98%', label: 'of employees', labelEn: 'of employees', sublabel: 'use non-approved AI tools', sublabelEn: 'use non-approved AI tools' },
    { value: '38%', label: 'of employees', labelEn: 'of employees', sublabel: 'share confidential data with AI', sublabelEn: 'share confidential data with AI' },
    { value: '$4.63M', label: 'average cost', labelEn: 'average cost', sublabel: 'of AI data breach', sublabelEn: 'of AI data breach' },
  ],
  intro: {
    hook: 'Wyobraź sobie: Twoja księgowa, żeby przyspieszyć pracę, wrzuca do ChatGPT zestawienie wynagrodzeń wszystkich pracowników. Pyta o analizę trendów. Nikt w firmie o tym nie wie — dopóki dane nie wyciekną.',
    hookEn: 'Imagine: your accountant, to speed up work, dumps all employee salary data into ChatGPT. Asks for trend analysis. Nobody in the company knows — until the data leaks.',
    problem: 'Shadow AI to zjawisko, w którym pracownicy korzystają z narzędzi sztucznej inteligencji bez wiedzy i zgody działu IT czy zarządu. W 2026 roku, gdy niemal każdy ma dostęp do darmowych LLM-ów, jest to problem rosnący w tempie wykładniczym.',
    problemEn: 'Shadow AI is the phenomenon where employees use AI tools without the knowledge or consent of IT or management. In 2026, when almost everyone has access to free LLMs, this is a problem growing at an exponential rate.',
    promise: 'W tym artykule wyjaśnię, czym jest Shadow AI, dlaczego jest niebezpieczne i — co najważniejsze — jak skutecznie chronić swoją firmę.',
    promiseEn: 'In this article, I\'ll explain what Shadow AI is, why it\'s dangerous, and — most importantly — how to effectively protect your business.',
  },
  sections: [
    {
      id: 'what-is',
      title: 'Czym jest Shadow AI?',
      titleEn: 'What is Shadow AI?',
      icon: '🔍',
      content: {
        pl: `Według najnowszych badań IBM, **78-98% pracowników** przyznaje się do używania narzędzi AI niezatwierdzonych przez ich organizację. To zjawisko, które powoli wymyka się spod kontroli — szczególnie w Polsce, gdzie świadomość zagrożeń cybernetycznych wśród MŚP jest wciąż niższa niż w krajach Europy Zachodniej.

**Shadow AI** to używanie przez pracowników narzędzi sztucznej inteligencji — takich jak ChatGPT, Claude, Gemini czy dziesiątki innych aplikacji — bez oficjalnej zgody firmy, bez nadzoru działu IT i bez żadnych zasad dotyczących bezpieczeństwa danych.

W praktyce wygląda to tak:
- Pracownik działu sprzedaży używa free tier ChatGPT do pisania maili do klientów
- Księgowa wrzuca dane finansowe do Claude, żeby "szybciej przeanalizować"
- Marketing kopiuje raport do Midjourney i generuje obrazy do kampanii
- HR używa Notion AI do tworzenia opisów stanowisk

Każda z tych sytuacji to potencjalne naruszenie bezpieczeństwa danych. Wolne narzędzia AI uczą się na wprowadzanych danych — oznacza to, że **wrażliwe informacje Twojej firmy mogą trafiać na serwery, nad którymi nie masz żadnej kontroli**.

W 2026 roku problem się pogłębia. Dostęp do zaawansowanych LLM-ów jest dziś niemal bezpłatny. Każdy pracownik z dostępem do internetu może korzystać z narzędzi porównywalnych z tymi, za które wielkie korporacje płacą miliony. To demokratyzacja AI — ale też źródło bezprecedensowych ryzyk.`,
        en: `According to the latest IBM research, **78-98% of employees** admit to using AI tools not approved by their organization. This phenomenon is slowly getting out of control — particularly in Poland, where cybersecurity awareness among SMBs is still lower than in Western Europe.

**Shadow AI** is the use of artificial intelligence tools — such as ChatGPT, Claude, Gemini, or dozens of other applications — by employees without official company approval, without IT department oversight, and without any data security policies.

In practice, it looks like this:
- Sales employee uses free ChatGPT tier to write client emails
- Accountant dumps financial data into Claude to "analyze faster"
- Marketing copies reports to Midjourney and generates campaign images
- HR uses Notion AI to create job descriptions

Each of these situations is a potential data security breach. Free AI tools learn from the input data — meaning **your company's sensitive information may end up on servers you have no control over**.

In 2026, the problem is deepening. Access to advanced LLMs is now almost free. Every employee with internet access can use tools comparable to those for which large corporations pay millions. This is AI democratization — but also a source of unprecedented risks.`,
      },
    },
    {
      id: 'dangers',
      title: 'Dlaczego Shadow AI jest niebezpieczne?',
      titleEn: 'Why is Shadow AI Dangerous?',
      icon: '⚠️',
      content: {
        pl: `Zagrożenia związane z Shadow AI można podzielić na kilka kategorii — każda z nich stanowi poważne ryzyko dla polskich firm.

**1. Wyciek danych wrażliwych**

Gdy pracownik wrzuca do zewnętrznego LLM dane klientów, umowy, raporty finansowe czy strategie biznesowe, te informacje trafiają na serwery dostawcy. Zgodnie z politykami większości darmowych narzędzi, dane te mogą być wykorzystywane do dalszego treningu modeli. Twoja poufna strategia handlowa może trafić do konkurencji.

Badania BlackFog z 2025 roku pokazują, że **38% pracowników** udostępniło poufne dane platformom AI bez zgody pracodawcy.

**2. Problemy z RODO i zgodnością**

RODO nakłada na firmy obowiązek ochrony danych osobowych. Używanie zewnętrznych narzędzi AI bez odpowiednich umów przetwarzania danych (DPA) to potencjalne naruszenie. W skrajnych przypadkach może to oznaczać kary do 20 mln EUR lub 4% globalnego obrotu.

**3. Niespójność jakościowa**

Gdy różni pracownicy używają różnych narzędzi AI na własną rękę, jakość outputu jest nieprzewidywalna. Ktoś może użyć Claude, ktoś inny ChatGPT, jeszcze inny lokalnego modelu. Efekt? Niespójne komunikaty, rozbieżne analizy, chaotyczna komunikacja z klientami.

**4. Podatności bezpieczeństwa**

Nieautoryzowane narzędzia AI mogą być wektorami ataków. Aplikacja z trzeciego źródła może zawierać malware. Phishingowe "AI tools" wyłudzające dane logowania to już rzeczywistość.

**5. Odpowiedzialność prawna**

Gdy AI wygeneruje błędną poradę prawną, finansową lub medyczną — kto ponosi odpowiedzialność? W Polsce regulacje AI wciąż się rozwijają, ale odpowiedzialność za decyzje podjęte na podstawie "porad" AI pozostaje niejasna.`,
        en: `The dangers associated with Shadow AI can be divided into several categories — each poses a serious risk for Polish companies.

**1. Sensitive Data Leakage**

When an employee dumps customer data, contracts, financial reports, or business strategies into an external LLM, that information goes to the provider's servers. According to most free tools' policies, this data may be used to further train models. Your confidential business strategy could end up with competitors.

BlackFog research from 2025 shows that **38% of employees** shared confidential data with AI platforms without employer consent.

**2. GDPR and Compliance Issues**

GDPR imposes obligations on companies to protect personal data. Using external AI tools without appropriate Data Processing Agreements (DPAs) is a potential violation. In extreme cases, this can mean fines of up to EUR 20M or 4% of global turnover.

**3. Quality Inconsistency**

When different employees use different AI tools on their own, output quality is unpredictable. Someone might use Claude, someone else ChatGPT, yet another person a local model. Result? Inconsistent messages, divergent analyses, chaotic customer communication.

**4. Security Vulnerabilities**

Unauthorized AI tools can be attack vectors. Third-party applications may contain malware. Phishing "AI tools" extorting login credentials are already a reality.

**5. Legal Liability**

When AI generates incorrect legal, financial, or medical advice — who bears responsibility? In Poland, AI regulations are still evolving, but responsibility for decisions made based on AI "advice" remains unclear.`,
      },
    },
    {
      id: 'protection',
      title: 'Jak chronić firmę przed Shadow AI?',
      titleEn: 'How to Protect Your Business from Shadow AI?',
      icon: '🛡️',
      content: {
        pl: `Shadow AI to problem, którego nie rozwiążesz zakazami. Pracownicy i tak będą korzystać z AI — dlatego strategia musi opierać się na edukacji, jasnych zasadach i kontrolowanym wdrożeniu.

**1. Stwórz politykę AI w firmie**

Pierwszy krok to oficjalne zasady dotyczące używania AI. Dokument powinien określać:
- Które narzędzia AI są dozwolone
- Jakie dane można wprowadzać do AI
- Procedury zatwierdzania nowych narzędzi
- Konsekwencje naruszenia zasad

Polisa AI to nie "zakaz AI" — to jasne zasady gry. Pracownicy muszą wiedzieć, co mogą, a czego nie mogą robić.

**2. Wdroż kontrolowane rozwiązania AI**

Zamiast zabraniać, daj pracownikom **bezpieczne alternatywy**. Jeśli marketing potrzebuje wsparcia AI do tworzenia treści, zapewnij dostęp do narzędzia zatwierdzonego przez IT — z odpowiednimi zabezpieczeniami.

InoxieSoft pomaga firmom wdrażać kontrolowane środowiska AI, gdzie masz pełną kontrolę nad tym, co dzieje się z danymi.

**3. Edukuj zespół**

Wielu pracowników nie zdaje sobie sprawy z ryzyka. Regularne szkolenia z cyberbezpieczeństwa AI powinny być standardem. Pokaż im realne przykłady wycieków i ich konsekwencji.

**4. Monitoruj i wykrywaj**

83% organizacji nie ma technicznych narzędzi do wykrywania przepływu danych do AI (wg ISACA 2025). Rozważ wdrożenie systemów DLP (Data Loss Prevention), które monitorują ruch do zewnętrznych serwerów AI.

**5. Jasno komunikuj korzyści**

Zamiast straszyć, pokaż pracownikom, że kontrolowane AI to dla nich ułatwienie pracy, nie jej ograniczenie. Pracownicy, którzy rozumieją "dlaczego", są bardziej skłonni przestrzegać zasad.`,
        en: `Shadow AI is a problem you won't solve with bans. Employees will use AI anyway — which is why strategy must be based on education, clear rules, and controlled implementation.

**1. Create an AI Policy in Your Company**

The first step is official rules regarding AI use. The document should specify:
- Which AI tools are allowed
- What data can be entered into AI
- Procedures for approving new tools
- Consequences of policy violations

An AI policy is not an "AI ban" — it's clear rules of the game. Employees must know what they can and cannot do.

**2. Implement Controlled AI Solutions**

Instead of forbidding, give employees **safe alternatives**. If marketing needs AI support for content creation, provide access to an IT-approved tool — with appropriate safeguards.

InoxieSoft helps companies implement controlled AI environments where you have full control over what happens with your data.

**3. Educate Your Team**

Many employees aren't aware of the risk. Regular AI cybersecurity training should be standard. Show them real examples of leaks and their consequences.

**4. Monitor and Detect**

83% of organizations lack technical tools to detect data flows to AI (according to ISACA 2025). Consider implementing DLP (Data Loss Prevention) systems that monitor traffic to external AI servers.

**5. Clearly Communicate Benefits**

Instead of scaring, show employees that controlled AI is an work facilitation for them, not a limitation. Employees who understand the "why" are more likely to follow rules.`,
      },
    },
  ],
  faq: [
    {
      q: 'Co to jest Shadow AI?',
      qEn: 'What is Shadow AI?',
      a: 'Shadow AI to używanie narzędzi sztucznej inteligencji przez pracowników bez wiedzy i zgody firmy. Przykłady: wrzucanie danych klientów do ChatGPT, używanie nieautoryzowanych chatbotów do pracy, korzystanie z darmowych LLM-ów do analiz biznesowych.',
      aEn: 'Shadow AI is the use of artificial intelligence tools by employees without company knowledge or consent. Examples: uploading customer data to ChatGPT, using unauthorized chatbots for work, using free LLMs for business analysis.',
    },
    {
      q: 'Jakie są główne zagrożenia Shadow AI?',
      qEn: 'What are the main dangers of Shadow AI?',
      a: 'Najpoważniejsze zagrożenia to: (1) wyciek poufnych danych na zewnętrzne serwery, (2) naruszenie RODO i potencjalne kary, (3) niespójność jakościowa outputu AI, (4) podatności bezpieczeństwa w nieautoryzowanych aplikacjach, (5) niejasna odpowiedzialność prawna za decyzje oparte na AI.',
      aEn: 'The most serious dangers are: (1) leakage of confidential data to external servers, (2) GDPR violations and potential fines, (3) inconsistent AI output quality, (4) security vulnerabilities in unauthorized applications, (5) unclear legal responsibility for decisions based on AI.',
    },
    {
      q: 'Czy zakazanie AI w firmie to dobre rozwiązanie?',
      qEn: 'Is banning AI in the company a good solution?',
      a: 'Nie. Zakazy są nieskuteczne, bo pracownicy i tak znajdą sposób. Lepsze podejście to: (1) stworzenie jasnej polityki AI, (2) wdrożenie bezpiecznych, zatwierdzonych narzędzi, (3) edukacja zespołu o ryzykach i zasadach. Kontrolowane AI = bezpieczne AI.',
      aEn: 'No. Bans are ineffective because employees will find a way anyway. Better approach: (1) create a clear AI policy, (2) implement safe, approved tools, (3) educate the team about risks and rules. Controlled AI = safe AI.',
    },
    {
      q: 'Jak stworzyć politykę AI w firmie?',
      qEn: 'How to create an AI policy in the company?',
      a: 'Polityka AI powinna zawierać: listę dozwolonych i zabronionych narzędzi, zasady dotyczące wprowadzania danych, procedury zatwierdzania nowych narzędzi, wytyczne dla pracowników oraz konsekwencje naruszenia. InoxieSoft pomaga firmom tworzyć takie polityki — zapraszamy do kontaktu.',
      aEn: 'AI policy should contain: list of allowed and prohibited tools, rules for data input, procedures for approving new tools, employee guidelines, and consequences for violations. InoxieSoft helps companies create such policies — contact us.',
    },
    {
      q: 'Ile kosztuje wdrożenie AI governance?',
      qEn: 'How much does AI governance implementation cost?',
      a: 'Koszt zależy od skali firmy i istniejącej infrastruktury. Dla MŚP: podstawowa polityka AI + szkolenie to 5,000-15,000 PLN. Pełne wdrożenie bezpiecznego środowiska AI z kontrolą DLP: 20,000-60,000 PLN. Zwrot z inwestycji to uniknięcie potencjalnych kar RODO i kosztów wycieku danych.',
      aEn: 'Cost depends on company scale and existing infrastructure. For SMBs: basic AI policy + training is PLN 5,000-15,000. Full implementation of secure AI environment with DLP control: PLN 20,000-60,000. ROI is avoiding potential GDPR fines and data breach costs.',
    },
  ],
  cta: {
    title: 'Chcesz ocenić ryzyko Shadow AI w Twojej firmie?',
    titleEn: 'Want to assess Shadow AI risk in your company?',
    description: 'Przeprowadzimy bezpłatną ocenę zagrożeń AI w Twojej organizacji. Dowiesz się, gdzie są luki i jak je załatać.',
    descriptionEn: 'We\'ll conduct a free AI threat assessment in your organization. You\'ll learn where the gaps are and how to patch them.',
    button: 'Umów bezpłatną ocenę',
    buttonEn: 'Book a free assessment',
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

function Section({ 
  section, 
  lang 
}: { 
  section: typeof postData.sections[0]; 
  lang: 'pl' | 'en';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      id={section.id}
      className="py-16 md:py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 mb-8">
          <span className="text-4xl">{section.icon}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            {lang === 'pl' ? section.title : section.titleEn}
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-stone-700 leading-relaxed space-y-4">
            {(lang === 'pl' ? section.content.pl : section.content.en).split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={i} className="text-xl font-bold text-stone-900 mt-8 mb-4">{paragraph.replace(/\*\*/g, '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(l => l.startsWith('- '));
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-stone-700">{item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="mb-4">{paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
            })}
          </div>
        </div>
      </div>
    </motion.section>
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

export default function ShadowAIPostClient({ lang }: { lang: Lang }) {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

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
      <section ref={heroRef} className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-red-500/30 backdrop-blur rounded-full text-sm font-medium mb-6">
              {lang === 'pl' ? postData.badge : postData.badgeEn}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {lang === 'pl' ? postData.title : postData.titleEn}
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100 mb-8">
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
                  <div className="text-red-200 text-sm md:text-base">{stat.label}</div>
                  <div className="text-red-300/70 text-xs">{stat.sublabel}</div>
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
              {lang === 'pl' ? 'Wprowadzenie' : 'Introduction'}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-red-700 mb-2">📊 {lang === 'pl' ? 'Scenariusz, który może się zdarzyć' : 'Scenario that could happen'}</h3>
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

      {/* Content Sections */}
      <div className="bg-stone-50">
        {postData.sections.map((section) => (
          <Section key={section.id} section={section} lang={lang} />
        ))}
      </div>

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
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-800 text-white">
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
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              {lang === 'pl' ? postData.cta.description : postData.cta.descriptionEn}
            </p>
            
            <Link
              href={`/${lang}/contact`}
              className="inline-block bg-white text-red-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all hover:shadow-xl hover:shadow-red-500/25"
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
              <p className="text-red-600 font-medium mb-3">{postData.authorPosition} | InoxieSoft</p>
              <p className="text-stone-600">
                {lang === 'pl' ? postData.authorBio : postData.authorBioEn}
              </p>
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
              href={`/${lang}/ai-readiness-checklist-post`}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="AI Readiness"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-900 group-hover:text-red-600 transition-colors">
                  {lang === 'pl' ? 'AI Readiness Checklist 2026' : 'AI Readiness Checklist 2026'}
                </h3>
                <p className="text-stone-600 text-sm mt-2">
                  {lang === 'pl' ? 'Sprawdź, czy Twoja firma jest gotowa na AI.' : 'Check if your company is ready for AI.'}
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
                <h3 className="font-bold text-stone-900 group-hover:text-red-600 transition-colors">
                  {lang === 'pl' ? 'Agenci AI w 2026' : 'AI Agents in 2026'}
                </h3>
                <p className="text-stone-600 text-sm mt-2">
                  {lang === 'pl' ? 'Jak agenci AI rewolucjonizują biznes.' : 'How AI agents are revolutionizing business.'}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
