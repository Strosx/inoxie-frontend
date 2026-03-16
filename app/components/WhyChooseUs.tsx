'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    title: "Doświadczenie",
    description: "Lata praktyki w tworzeniu oprogramowania i automatyzacji AI. Znamy najnowsze technologie i trendy.",
  },
  {
    title: "Zespół ekspertów",
    description: "Nasi programiści i specjaliści AI to pasjonaci z wieloletnim doświadczeniem.",
  },
  {
    title: "Bezpieczeństwo",
    description: "Twoje dane i systemy są bezpieczne. Stosujemy najwyższe standardy ochrony.",
  },
  {
    title: "Szybka realizacja",
    description: "Realizujemy projekty terminowo. Twój czas jest dla nas ważny.",
  },
];

const testimonials = [
  {
    quote: "Inoxie wdrożyło dla nas automatyzację obsługi klienta z AI. Oszczędzamy 70% czasu na powtarzalnych zadaniach.",
    author: "Jan Kowalski",
    position: "CEO, Firma xyz",
  },
  {
    quote: "Profesjonalne podejście, terminowość i świetny kontakt. Polecam każdemu kto chce zautomatyzować procesy w firmie.",
    author: "Anna Nowak",
    position: "Właścicielka, sklep online",
  },
  {
    quote: "Szkolenie z AI przeprowadzone przez Inoxie zmieniło sposób pracy całego naszego zespołu. Jesteśmy bardziej produktywni.",
    author: "Michał Wiśniewski",
    position: "Dyrektor operacyjny, firma produkcyjna",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
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
            Dlaczego my?
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Łączymy wiedzę techniczną z biznesowym podejściem. Rozumiemy wyzwania firm 
            i dostarczamy rozwiązania, które przynoszą realne rezultaty.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-stone-900 mb-2">{benefit.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 lg:h-96"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white text-2xl font-bold mb-2">Nasz zespół</h3>
              <p className="text-white/80">Razem tworzymy przyszłość AI dla Twojego biznesu</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
              Zaufały nam firmy
            </h3>
            <p className="text-accent font-medium">5.0/5.0 średnia ocen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-stone-200"
              >
                <p className="text-stone-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-stone-900">{testimonial.author}</p>
                  <p className="text-sm text-stone-500">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 border border-stone-200"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-stone-600 text-sm">Zrealizowanych projektów</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">30+</div>
              <div className="text-stone-600 text-sm">Zadowolonych klientów</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-stone-600 text-sm">Projektów oddanych terminowo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
