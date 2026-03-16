'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Czy automatyzacja AI jest bezpieczna dla mojej firmy?",
    answer: "Tak, bezpieczeństwo jest naszym priorytetem. Stosujemy najwyższe standardy ochrony danych, szyfrowanie end-to-end i zgodność z RODO. Przed wdrożeniem przeprowadzamy audyt bezpieczeństwa Twoich systemów.",
  },
  {
    question: "Ile czasu zajmuje wdrożenie automatyzacji AI?",
    answer: "Czas wdrożenia zależy od złożoności procesu. Proste automatyzacje możemy wdrożyć w ciągu 1-2 tygodni. Bardziej zaawansowane rozwiązania, takie jak dedykowani agenci AI czy integracje z systemami firmowymi, zazwyczaj zajmują 4-8 tygodni.",
  },
  {
    question: "Czy muszę mieć doświadczenie z AI?",
    answer: "Absolutnie nie. Nasz zespół zajmuje się całą techniczną stroną. Ty skupiasz się na swoim biznesie. Oferujemy również szkolenia dla Twojego zespołu, abyś mógł w pełni wykorzystać możliwości AI.",
  },
  {
    question: "Jakie firmy mogą skorzystać z automatyzacji AI?",
    answer: "Nasze rozwiązania są skierowane do firm każdej wielkości - od małych przedsiębiorstw po duże korporacje. Dopasowujemy technologie i skalę automatyzacji do Twoich potrzeb i budżetu.",
  },
  {
    question: "Czy mogę zintegrować AI z moimi istniejącymi systemami?",
    answer: "Tak, posiadamy doświadczenie w integracji z większością popularnych systemów biznesowych, takich jak CRM (Salesforce, HubSpot), systemy ERP, platformy e-commerce, narzędzia do zarządzania projektami i wiele innych.",
  },
  {
    question: "Ile mogę zaoszczędzić dzięki automatyzacji AI?",
    answer: "Typowe oszczędności wynoszą 30-70% czasu poświęcanego na powtarzalne zadania. Zależy to od charakteru Twoich procesów. Przeprowadzamy bezpłatną analizę, aby oszacować potencjalne oszczędności dla Twojej firmy.",
  },
  {
    question: "Czy oferujecie szkolenia z AI dla zespołu?",
    answer: "Tak, prowadzimy szkolenia na różnych poziomach zaawansowania - od podstaw AI dla początkujących po zaawansowane warsztaty dla zespołów technicznych. Szkolenia mogą być prowadzone online lub stacjonarnie.",
  },
  {
    question: "Jaki jest koszt automatyzacji AI?",
    answer: "Koszt zależy od zakresu i złożoności projektu. Oferujemy elastyczne modele współpracy: jednorazowe projekty, team augmentation lub stały retainer. Skontaktuj się z nami, aby otrzymać darmową wycenę.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Częste pytania
          </h2>
          <p className="text-lg text-stone-600">
            Odpowiadamy na najczęściej zadawane pytania o automatyzację AI i nasze usługi.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-stone-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-accent text-xl flex-shrink-0 font-bold">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 text-stone-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-stone-600 mb-4">
            Masz więcej pytań? Chętnie pomożemy!
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors"
          >
            Skontaktuj się z nami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
