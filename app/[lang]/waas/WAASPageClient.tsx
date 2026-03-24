'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface WAASPageClientProps {
  lang: string;
}

// Bilingual WAAS content kept in code
const waasContent = {
  pl: {
    heroBadge: 'Nowość w ofercie',
    heroHeadline: 'Website as a Service',
    heroSubheadline: 'Kompletna strona www dla Twojej firmy za miesięczną opłatą. Bez ukrytych kosztów, bez długoterminowych zobowiązań.',
    heroCta: 'Umów bezpłatną prezentację',
    heroCtaSecondary: 'Zobacz jak to działa',
    problemTitle: 'Wiesz, że Twoja firma powinna być w internecie, ale...',
    problemItems: [
      { title: 'Koszty są zbyt wysokie', description: 'Tradycyjna strona www kosztuje od 3000 zł. Nie masz pewności, czy to się zwróci.' },
      { title: 'Nie masz czasu', description: 'Tworzenie strony wymaga zaangażowania. Wolisz skupić się na swoim biznesie.' },
      { title: 'Nie wiesz od czego zacząć', description: 'Wybór technologii, hostingu, domeny — to wszystko jest przytłaczające.' },
      { title: ' boisz się zobowiązań', description: 'Umowy na rok lub dłużej? Wolisz elastyczność.' },
    ],
    solutionTitle: 'Website as a Service — zrób to za Ciebie',
    solutionDescription: 'Zamiast jednorazowego wydatku, płacisz miesięczną opłatę. My zajmujemy się wszystkim.',
    solutionSteps: [
      { icon: '📋', number: '01', title: 'Brief', description: 'Wypełniasz krótki formularz z informacjami o firmie.' },
      { icon: '🎨', number: '02', title: 'Projekt', description: 'Tworzymy profesjonalną stronę w 48h.' },
      { icon: '🚀', number: '03', title: 'Wdrożenie', description: 'Strona jest gotowa i zaczyna przyciągać klientów.' },
    ],
    forWhomTitle: 'Dla kogo jest Website as a Service?',
    forWhomDescription: 'Nasza usługa sprawdza się najlepiej w przypadku:',
    forWhomBusinesses: ['Małych firm z ograniczonym budżetem', 'Przedsiębiorców ceniących czas', 'Firm chcących szybko zdobywać klientów online', 'Każdego, kto chce profesjonalną stronę bez stresu'],
    forWhomNotFor: ['Dużych korporacji z wewnętrznym działem IT', 'Projektów wymagających niestandardowych rozwiązań'],
    featuresTitle: 'Co zawiera Website as a Service?',
    featuresSubtitle: 'Wszystko, czego potrzebujesz, aby zdobywać klientów przez internet.',
    featuresItems: [
      { title: 'Profesjonalna strona www', description: 'Nowoczesny design, responsywność, optymalizacja SEO.' },
      { title: 'Hosting w cenie', description: 'Nie musisz szukać hostingu ani martwić się o aktualizacje.' },
      { title: 'Dedykowana domena', description: 'Twoja własna domena z SSL certyfikatem.' },
      { title: 'Formularz kontaktowy', description: 'Zbieraj leady bez dodatkowych narzędzi.' },
      { title: 'Integracja z Google Maps', description: 'Pokaż klientom gdzie jesteś.' },
      { title: 'Statystyki odwiedzin', description: 'Wiesz, ile osób odwiedza Twoją stronę.' },
    ],
    pricingTitle: 'Ile kosztuje Website as a Service?',
    pricingSubtitle: 'Prosty, przewidywalny model. Bez ukrytych opłat, bez zobowiązań.',
    pricingGuarantee: '30-dniowa gwarancja satysfakcji.',
    pricingNoContract: 'Bez umowy minimum. Rezygnujesz kiedy chcesz.',
    plans: [
      { name: 'Starter', description: 'Idealny na start', price: '299 zł', period: '/mies.', popular: false, features: ['Profesjonalna strona www', 'Hosting w cenie', 'Domena .pl lub .com', 'SSL certyfikat', 'Formularz kontaktowy'], cta: 'Zamów teraz' },
      { name: 'Professional', description: 'Najczęściej wybierany', price: '499 zł', period: '/mies.', popular: true, features: ['Wszystko ze Startera', 'Dedykowana domena', 'Integracja z Google Maps', 'Statystyki odwiedzin', 'Priorytetowe wsparcie'], cta: 'Zamów teraz' },
      { name: 'Business', description: 'Dla firm rosnących', price: '799 zł', period: '/mies.', popular: false, features: ['Wszystko z Professional', 'Blog z CMS', 'Zaawansowane SEO', 'Backup codzienny', 'Dedicated support'], cta: 'Zamów teraz' },
    ],
    comparisonTitle: 'Porównanie: WAAS vs. tradycyjna strona',
    comparisonSubtitle: 'Zobacz, dlaczego Website as a Service to lepszy wybór dla małych firm.',
    comparisonTable: {
      header: ['Funkcja', 'Tradycyjna strona', 'WAAS'],
      rows: [
        ['Koszt początkowy', 'od 3000 zł', '0 zł'],
        ['Czas wdrożenia', '2-8 tygodni', '48 godzin'],
        ['Hosting', '50-200 zł/mies.', 'W cenie'],
        ['Domena', '60-100 zł/rok', 'W cenie'],
        ['Wsparcie techniczne', 'Za dopłatą', 'W cenie'],
        ['Umowa minimum', '12 miesięcy', 'Brak'],
        ['Możliwość rezygnacji', 'Trudna', 'Kiedy chcesz'],
      ],
    },
    testimonialsTitle: 'Co mówią nasi klienci?',
    testimonialsQuotes: [
      { quote: 'Miałem stronę za 5000 zł, która wyglądała jak z 2010 roku. WAAS od Inoxie wygląda profesjonalnie i kosztuje 299 zł miesięcznie.', author: 'Piotr Kowalczyk', position: 'Właściciel firmy transportowej', rating: 5 },
      { quote: 'Wreszcie mam stronę, z której jestem dumny. Proces był bezbolesny — wypełniłem brief i po 2 dniach wszystko było gotowe.', author: 'Marta Wiśniewska', position: 'Psycholog, praktyka prywatna', rating: 5 },
      { quote: 'WAAS to najlepsza decyzja biznesowa tego roku. Mój gabinet ma teraz profesjonalną obecność online.', author: 'Tomasz Lewandowski', position: 'Fizjoterapeuta', rating: 5 },
    ],
    faqTitle: 'Częste pytania o Website as a Service',
    faqQuestions: [
      { question: 'Czy mogę zrezygnować w każdej chwili?', answer: 'Tak! WAAS nie wymaga żadnej umowy ani zobowiązania. Rezygnujesz kiedy chcesz, bez żadnych opłat ani konsekwencji.' },
      { question: 'Co jeśli nie spodoba mi się strona?', answer: 'Masz 30-dniową gwarancję satysfakcji. Jeśli nie będziesz zadowolony — zwrócimy pieniądze.' },
      { question: 'Czy dostanę dostęp do kodu strony?', answer: 'TAK! W każdej chwili możesz poprosić o kod źródłowy i hostować stronę samodzielnie.' },
      { question: 'Jak szybko strona będzie gotowa?', answer: 'Standardowo do 48 godzin od wypełnienia briefu. W przypadku bardziej złożonych projektów — do 5 dni roboczych.' },
      { question: 'Czy mogę zmienić treści na stronie?', answer: 'W pakiecie Business masz dostęp do panelu CMS, gdzie samodzielnie edytujesz treści. W niższych pakietach — pomagamy z aktualizacjami.' },
      { question: 'Czy strona będzie responsywna (działać na telefonie)?', answer: 'Oczywiście! Każda strona WAAS jest responsywna i zoptymalizowana pod kątem urządzeń mobilnych.' },
    ],
    eeatTitle: 'Dlaczego możesz nam zaufać?',
    eeatSubtitle: 'Inoxie to zespół z doświadczeniem w tworzeniu stron i automatyzacji marketingu.',
    eeatStats: [
      { value: '5+', label: 'Lat doświadczenia' },
      { value: '100+', label: 'Zrealizowanych stron' },
      { value: '50+', label: 'Zadowolonych klientów' },
      { value: '99%', label: 'Satysfakcji klientów' },
    ],
    eeatExpertise: [
      { title: 'Doświadczenie w web dev', description: 'Od 2019 roku tworzymy profesjonalne strony www dla firm w całej Polsce.' },
      { title: 'Zespół ekspertów', description: 'Nasi programiści i designerzy to pasjonaci z wieloletnim doświadczeniem.' },
    ],
    ctaTitle: 'Gotowy, żeby zdobywać klientów przez internet?',
    ctaDescription: 'Umów się na bezpłatną 20-minutową prezentację.',
    ctaButton: 'Umów prezentację',
    ctaOrCall: 'Wolisz rozmawiać? Zadzwoń: +48 798 943 352',
    seeMore: 'Zobacz więcej',
    contact: 'Kontakt',
  },
  en: {
    heroBadge: 'New offering',
    heroHeadline: 'Website as a Service',
    heroSubheadline: 'A complete website for your business for a monthly fee. No hidden costs, no long-term commitments.',
    heroCta: 'Book a free presentation',
    heroCtaSecondary: 'See how it works',
    problemTitle: 'You know your business should be online, but...',
    problemItems: [
      { title: 'Costs are too high', description: 'A traditional website costs from €800. You are not sure if it will pay off.' },
      { title: "You don't have time", description: 'Creating a website requires commitment. You prefer to focus on your business.' },
      { title: "You don't know where to start", description: 'Choosing technology, hosting, domain — it is all overwhelming.' },
      { title: 'You are afraid of commitments', description: 'Contracts for a year or more? You prefer flexibility.' },
    ],
    solutionTitle: 'Website as a Service — we\'ll do it for you',
    solutionDescription: 'Instead of a one-time expense, you pay a monthly fee. We handle everything.',
    solutionSteps: [
      { icon: '📋', number: '01', title: 'Brief', description: 'You fill out a short form with information about your company.' },
      { icon: '🎨', number: '02', title: 'Design', description: 'We create a professional website in 48h.' },
      { icon: '🚀', number: '03', title: 'Launch', description: 'Your website is ready and starts attracting customers.' },
    ],
    forWhomTitle: 'Who is Website as a Service for?',
    forWhomDescription: 'Our service works best for:',
    forWhomBusinesses: ['Small businesses with limited budgets', 'Entrepreneurs who value time', 'Companies wanting to acquire customers online quickly', 'Anyone who wants a professional website without the hassle'],
    forWhomNotFor: ['Large corporations with internal IT departments', 'Projects requiring custom solutions'],
    featuresTitle: "What's included in Website as a Service?",
    featuresSubtitle: 'Everything you need to acquire customers through the internet.',
    featuresItems: [
      { title: 'Professional website', description: 'Modern design, responsiveness, SEO optimization.' },
      { title: 'Hosting included', description: 'No need to find hosting or worry about updates.' },
      { title: 'Dedicated domain', description: 'Your own domain with SSL certificate.' },
      { title: 'Contact form', description: 'Collect leads without additional tools.' },
      { title: 'Google Maps integration', description: 'Show customers where you are.' },
      { title: 'Visit statistics', description: 'Know how many people visit your site.' },
    ],
    pricingTitle: 'How much does Website as a Service cost?',
    pricingSubtitle: 'Simple, predictable pricing. No hidden fees, no commitments.',
    pricingGuarantee: '30-day satisfaction guarantee.',
    pricingNoContract: 'No minimum contract. Cancel whenever you want.',
    plans: [
      { name: 'Starter', description: 'Perfect to start', price: '€79', period: '/month', popular: false, features: ['Professional website', 'Hosting included', '.pl or .com domain', 'SSL certificate', 'Contact form'], cta: 'Order now' },
      { name: 'Professional', description: 'Most popular', price: '€129', period: '/month', popular: true, features: ['Everything in Starter', 'Dedicated domain', 'Google Maps integration', 'Visit statistics', 'Priority support'], cta: 'Order now' },
      { name: 'Business', description: 'For growing businesses', price: '€199', period: '/month', popular: false, features: ['Everything in Professional', 'Blog with CMS', 'Advanced SEO', 'Daily backup', 'Dedicated support'], cta: 'Order now' },
    ],
    comparisonTitle: 'Comparison: WAAS vs. Traditional Website',
    comparisonSubtitle: 'See why Website as a Service is a better choice for small businesses.',
    comparisonTable: {
      header: ['Feature', 'Traditional website', 'WAAS'],
      rows: [
        ['Initial cost', 'from €800', '€0'],
        ['Implementation time', '2-8 weeks', '48 hours'],
        ['Hosting', '€15-50/month', 'Included'],
        ['Domain', '€15-25/year', 'Included'],
        ['Technical support', 'At extra cost', 'Included'],
        ['Minimum contract', '12 months', 'None'],
        ['Cancellation option', 'Difficult', 'Whenever you want'],
      ],
    },
    testimonialsTitle: 'What our clients say?',
    testimonialsQuotes: [
      { quote: 'I had a website for €1500 that looked like it was from 2010. WAAS from Inoxie looks professional and costs €79 per month.', author: 'Piotr Kowalczyk', position: 'Transportation company owner', rating: 5 },
      { quote: 'Finally I have a website I am proud of. The process was painless — I filled out the brief and after 2 days everything was ready.', author: 'Marta Wiśniewska', position: 'Private practice psychologist', rating: 5 },
      { quote: 'WAAS is the best business decision this year. My clinic now has a professional online presence.', author: 'Tomasz Lewandowski', position: 'Physiotherapist', rating: 5 },
    ],
    faqTitle: 'Frequently Asked Questions about Website as a Service',
    faqQuestions: [
      { question: 'Can I cancel anytime?', answer: 'Yes! WAAS requires no contract or commitment. Cancel whenever you want, with no fees or consequences.' },
      { question: 'What if I do not like the website?', answer: 'You have a 30-day satisfaction guarantee. If you are not happy — we will refund your money.' },
      { question: 'Will I get access to the website code?', answer: 'YES! At any time you can request the source code and host the website yourself.' },
      { question: 'How quickly will the website be ready?', answer: 'Standard — up to 48 hours from completing the brief. For more complex projects — up to 5 business days.' },
      { question: 'Can I change the content on the website?', answer: 'In the Business package you have access to a CMS panel where you edit content yourself. In lower packages — we help with updates.' },
      { question: 'Will the website be responsive (work on mobile)?', answer: 'Of course! Every WAAS website is responsive and optimized for mobile devices.' },
    ],
    eeatTitle: 'Why can you trust us?',
    eeatSubtitle: 'Inoxie is a team with experience in website creation and marketing automation.',
    eeatStats: [
      { value: '5+', label: 'Years of experience' },
      { value: '100+', label: 'Completed websites' },
      { value: '50+', label: 'Happy clients' },
      { value: '99%', label: 'Client satisfaction' },
    ],
    eeatExpertise: [
      { title: 'Web dev experience', description: 'Since 2019 we have been creating professional websites for businesses across Poland.' },
      { title: 'Expert team', description: 'Our developers and designers are passionate people with many years of experience.' },
    ],
    ctaTitle: 'Ready to acquire customers through the internet?',
    ctaDescription: 'Book a free 20-minute presentation.',
    ctaButton: 'Book a presentation',
    ctaOrCall: 'Prefer to talk? Call: +48 798 943 352',
    seeMore: 'See more',
    contact: 'Contact',
  },
};

export default function WAASPageClient({ lang }: WAASPageClientProps) {
  const t = useTranslations('servicePage');
  const c = lang === 'pl' ? waasContent.pl : waasContent.en;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  return (
    <>
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
              {c.heroBadge}
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              {c.heroHeadline}
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto mb-10">
              {c.heroSubheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={lang === 'pl' ? '/contact' : '/en/contact'}
                className="inline-block bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {c.heroCta}
              </Link>
              <a
                href="#how-it-works"
                className="inline-block bg-white border-2 border-stone-200 text-stone-700 px-8 py-4 rounded-xl font-semibold hover:border-accent hover:text-accent transition-all"
              >
                {c.heroCtaSecondary}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.problemTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.problemItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-stone-50 rounded-2xl p-8 border border-stone-100"
              >
                <span className="text-4xl font-light text-accent/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold text-stone-900 mb-3 mt-4">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.solutionTitle}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {c.solutionDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.solutionSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-stone-200 text-center"
              >
                <div className="text-5xl mb-6">{step.icon}</div>
                <span className="text-5xl font-bold text-accent/20 block mb-4">{step.number}</span>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.forWhomTitle}
            </h2>
            <p className="text-lg text-stone-600 max-w-xl mx-auto">
              {c.forWhomDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-8 border border-green-100"
            >
              <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
                <span className="text-green-500 text-2xl">✓</span>
                {lang === 'pl' ? 'Idealnie dla:' : 'Perfect for:'}
              </h3>
              <ul className="space-y-4">
                {c.forWhomBusinesses.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-8 border border-red-100"
            >
              <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
                <span className="text-red-500 text-2xl">✗</span>
                {lang === 'pl' ? 'Nie dla:' : 'Not for:'}
              </h3>
              <ul className="space-y-4">
                {c.forWhomNotFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-700">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.featuresTitle}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {c.featuresSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.featuresItems.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-stone-100 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-stone-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.pricingTitle}
            </h2>
            <p className="text-lg text-stone-600 max-w-xl mx-auto">
              {c.pricingSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {c.plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 border-2 ${
                  plan.popular
                    ? 'bg-accent text-white border-accent scale-105 shadow-xl shadow-accent/20'
                    : 'bg-white border-stone-200'
                }`}
              >
                {plan.popular && (
                  <div className={`text-center mb-4 -mt-12`}>
                    <span className="bg-white text-accent text-sm font-bold px-4 py-1 rounded-full">
                      {lang === 'pl' ? 'Najpopularniejszy' : 'Most Popular'}
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-stone-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-accent-light' : 'text-stone-600'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-stone-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-accent-light' : 'text-stone-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-white/90' : 'text-stone-600'}`}>
                      <svg className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-accent-light' : 'text-accent'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={lang === 'pl' ? '/contact' : '/en/contact'}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-accent hover:bg-stone-100'
                      : 'bg-accent text-white hover:bg-accent-hover'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-stone-600">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {c.pricingGuarantee}
              </div>
              <span className="hidden sm:block text-stone-300">•</span>
              <div className="flex items-center gap-2 text-stone-600">
                <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {c.pricingNoContract}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.comparisonTitle}
            </h2>
            <p className="text-lg text-stone-600 max-w-xl mx-auto">
              {c.comparisonSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto max-w-4xl mx-auto"
          >
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  {c.comparisonTable.header.map((th, i) => (
                    <th key={th} className={`px-6 py-4 text-left font-bold ${i === 0 ? 'w-1/3' : ''}`}>
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparisonTable.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className={`px-6 py-4 border-b border-stone-100 ${cellIndex === 0 ? 'font-medium text-stone-900' : 'text-stone-600'}`}>
                        {cellIndex === 2 && (cell === '0 zł' || cell === '€0') ? (
                          <span className="text-green-600 font-bold">{cell}</span>
                        ) : cellIndex === 2 && (cell === 'Brak' || cell === 'None') ? (
                          <span className="text-green-600 font-semibold">{cell}</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.testimonialsTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.testimonialsQuotes.map((quote, index) => (
              <motion.div
                key={quote.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-stone-50 rounded-2xl p-8 border border-stone-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(quote.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-stone-700 mb-6 italic">"{quote.quote}"</blockquote>
                <div className="border-t border-stone-200 pt-4">
                  <p className="font-bold text-stone-900">{quote.author}</p>
                  <p className="text-sm text-stone-500">{quote.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.faqTitle}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {c.faqQuestions.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-stone-900 pr-4">{faq.question}</span>
                  <span className={`text-accent text-2xl flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-stone-600 border-t border-stone-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {c.eeatTitle}
            </h2>
            <p className="text-lg text-stone-600 max-w-xl mx-auto">
              {c.eeatSubtitle}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {c.eeatStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-stone-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.eeatExpertise.map((item, index) => (
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

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {c.ctaTitle}
            </h2>
            <p className="text-lg text-stone-400 mb-8 max-w-2xl mx-auto">
              {c.ctaDescription}
            </p>
            <Link
              href={lang === 'pl' ? '/contact' : '/en/contact'}
              className="inline-block bg-accent text-white px-10 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25 mb-4"
            >
              {c.ctaButton}
            </Link>
            <p className="text-stone-500 text-sm">
              {c.ctaOrCall}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
