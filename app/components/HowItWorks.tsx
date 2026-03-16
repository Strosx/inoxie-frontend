'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    number: "01",
    title: "Konsultacja",
    description: "Rozmawiamy o Twoich potrzebach i wyzwaniach. Poznajemy Twoją firmę, procesy i cele.",
    deliverables: ["Analiza potrzeb", "Wstępna wycena", "Rekomendacje rozwiązań"],
  },
  {
    number: "02",
    title: "Audyt i Projekt",
    description: "Przeprowadzamy audyt istniejących systemów i tworzymy szczegółowy projekt rozwiązania.",
    deliverables: ["Raport z audytu", "Dokumentacja projektowa", "Harmonogram prac"],
  },
  {
    number: "03",
    title: "Wdrożenie",
    description: "Implementujemy rozwiązanie zgodnie z planem. Pracujemy w krótkich iteracjach, abyś widział postępy.",
    deliverables: ["Działające rozwiązanie", "Dokumentacja techniczna", "Szkolenie zespołu"],
  },
  {
    number: "04",
    title: "Wsparcie",
    description: "Po wdrożeniu zapewniamy ciągłe wsparcie i rozwój. Twoje rozwiązanie ewoluuje z Twoim biznesem.",
    deliverables: ["Opieka powdrożeniowa", "Nowe funkcjonalności", "Ciągła optymalizacja"],
  },
];

const engagementModels = [
  {
    title: "Projekt",
    description: "Jednorazowe wdrożenie z określonym zakresem i terminem.",
    best: "Idealne dla konkretnych, ograniczonych w czasie inicjatyw",
  },
  {
    title: "Team Augmentation",
    description: "Dodajemy ekspertów AI do Twojego istniejącego zespołu.",
    best: "Dla firm, które mają wewnętrzne zespoły i potrzebują wzmocnienia",
  },
  {
    title: "Retainer",
    description: "Stała współpraca z określonym zakresem miesięcznym.",
    best: "Dla ciągłego rozwoju i utrzymania rozwiązań AI",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Jak pracujemy?
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Przejrzysty proces współpracy. Od pierwszej rozmowy po wdrożenie 
            i ciągłe wsparcie - jesteś z nami na każdym etapie.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Number */}
              <span className="text-5xl font-light text-accent/30">{step.number}</span>
              
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 mt-2 hover:border-accent/30 transition-colors">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                
                {/* Deliverables */}
                <ul className="space-y-1">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="text-xs text-stone-500">• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engagement Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              Modele współpracy
            </h3>
            <p className="text-stone-600">Wybierz formę, która najlepiej pasuje do Twoich potrzeb</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-accent/30 transition-colors"
              >
                <h4 className="text-lg font-bold text-stone-900 mb-2">{model.title}</h4>
                <p className="text-stone-600 text-sm mb-4">{model.description}</p>
                <p className="text-accent text-sm font-medium">{model.best}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
          >
            Zacznij współpracę
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
