'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '100+', label: 'Zadowolonych klientów' },
  { number: '50+', label: 'Miast w Polsce' },
  { number: '99%', label: 'Klientów poleca nas dalej' },
];

export default function SocialProof() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0f172a]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {stat.number}
            </div>
            <div className="text-slate-300">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}