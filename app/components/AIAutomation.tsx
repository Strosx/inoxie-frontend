'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const automations = [
  {
    title: "Asystenci AI",
    description: "Inteligentni asystenci, którzy odpowiadają na pytania klientów 24/7. Obsługa wielu języków, kontekstowa rozmowa.",
    useCase: "Obsługa klienta, wsparcie sprzedaży",
  },
  {
    title: "Automatyzacja Email",
    description: "Inteligentne zarządzanie wiadomościami - sortowanie, odpowiadanie, podział na kategorie.",
    useCase: "Obsługa wiadomości, follow-upy",
  },
  {
    title: "Przetwarzanie Dokumentów",
    description: "AI analizuje, podsumowuje i wyciąga kluczowe informacje z dokumentów i umów.",
    useCase: "Legal, HR, księgowość",
  },
  {
    title: "E-commerce AI",
    description: "Personalizowane rekomendacje, automatyczne zarządzanie zamówieniami, obsługa zwrotów.",
    useCase: "Sklepy internetowe",
  },
  {
    title: "Research & Analiza",
    description: "Automatyczne zbieranie i analiza danych z różnych źródeł. Raporty i podsumowania.",
    useCase: "Badania rynku, konkurencja",
  },
  {
    title: "Workflow Automation",
    description: "Automatyzacja powtarzalnych zadań i procesów w firmie. Oszczędność czasu i eliminacja błędów.",
    useCase: "Procesy biznesowe, operacje",
  },
];

const stats = [
  { value: "70%", label: "Oszczędność czasu" },
  { value: "24/7", label: "Dostępność" },
  { value: "50%", label: "Redukcja kosztów" },
  { value: "100%", label: "Skalowalność" },
];

export default function AIAutomation() {
  return (
    <section className="py-20 lg:py-28 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Automatyzacja procesów z AI
          </h2>
          <p className="text-lg text-stone-400 max-w-xl mx-auto">
            Wykorzystujemy najnowsze modele LLM i agentów AI, aby zautomatyzować 
            powtarzalne zadania i uwolnić Twój zespół do pracy strategicznej.
          </p>
        </motion.div>

        {/* Stats - Orange accents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-stone-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* AI Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 relative rounded-3xl overflow-hidden"
        >
          <div className="relative h-64 md:h-80 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80"
              alt="AI Technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/50" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl ml-8 md:ml-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  AI w służbie Twojego biznesu
                </h3>
                <p className="text-stone-300 mb-6">
                  Nasi agenci AI pracują 24/7, obsługując klientów, przetwarzając dane 
                  i automatyzując procesy. Twoja firma rośnie, a Ty oszczędzasz czas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-stone-300">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Szybsza obsługa klienta
                  </li>
                  <li className="flex items-center gap-2 text-stone-300">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Mniej błędów ludzkich
                  </li>
                  <li className="flex items-center gap-2 text-stone-300">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Skalowalność bez limitów
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Automations Grid - Orange hover */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((automation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-800 rounded-2xl p-6 hover:bg-stone-700 border border-transparent hover:border-accent/30 transition-all"
            >
              <h3 className="text-lg font-bold mb-2">{automation.title}</h3>
              <p className="text-stone-400 text-sm mb-4 leading-relaxed">{automation.description}</p>
              <div className="text-accent text-sm">
                → {automation.useCase}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-hover transition-colors"
          >
            Porozmawiajmy o Twojej automatyzacji
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
