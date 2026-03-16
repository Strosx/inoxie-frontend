'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: "Oprogramowanie na Zamówienie",
    description: "Tworzymy dedykowane aplikacje webowe, systemy ERP, CRM i inne rozwiązania dopasowane do Twoich potrzeb. Pełen cykl realizacji - od koncepcji po wdrożenie.",
    features: ["Aplikacje webowe", "Systemy ERP/CRM", "Integracje API", "Modernizacja legacy"],
  },
  {
    title: "Automatyzacja AI",
    description: "Wdrażamy agentów AI i automatyzujemy procesy biznesowe z wykorzystaniem najnowszych modeli LLM. Oszczędzaj czas i zasoby.",
    features: ["Agenci AI", "Automatyzacja workflow", "Chatboty", "Integracje LLM"],
  },
  {
    title: "AI w Biznesie",
    description: "Pomagamy wykorzystać AI w codziennej pracy - od asystentów AI po zaawansowane analizy danych. Zwiększ produktywność swojego zespołu.",
    features: ["Asystenci AI", "Analiza danych", "Predykcje", "Optymalizacja procesów"],
  },
  {
    title: "Szkolenia z AI",
    description: "Uczymy jak efektywnie wykorzystywać AI w firmie. Szkolenia dla zespołów na każdym poziomie zaawansowania.",
    features: ["Szkolenia grupowe", "Warsztaty praktyczne", "Konsultacje indywidualne", "Materiały edukacyjne"],
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="oferta">
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
            Co robimy?
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Łączymy programowanie z automatyzacją AI, aby dostarczać rozwiązania, 
            które realnie wpływają na wyniki Twojego biznesu.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-accent/30 transition-colors"
            >
              {/* Number - Orange */}
              <span className="text-6xl font-light text-accent/30">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <h3 className="text-xl font-bold text-stone-900 mb-3 mt-4">
                {service.title}
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-stone-500">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA - Orange */}
              <Link
                href="/offer"
                className="inline-block text-accent font-medium hover:text-accent-hover transition-colors"
              >
                Dowiedz się więcej →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-stone-600 mb-4">
            Nie wiesz, które rozwiązanie będzie najlepsze dla Twojej firmy?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors"
          >
            Umów darmową konsultację
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
