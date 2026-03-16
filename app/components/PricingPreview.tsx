'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '29',
    priceSuffix: '.99',
    period: 'USD/mies.',
    yearlyPrice: '299',
    yearlySuffix: '.90',
    yearlyPeriod: 'USD/rok (oszczędzasz $60)',
    features: [
      '1 język strony',
      'Profesjonalny design',
      'Responsywny (mobile-first)',
      'Podstawowe SEO',
      'SSL bezpieczeństwo',
      'Szybki hosting',
    ],
    highlight: false,
  },
  {
    name: 'Profesjonalny',
    price: '49',
    priceSuffix: '.99',
    period: 'USD/mies.',
    yearlyPrice: '499',
    yearlySuffix: '.90',
    yearlyPeriod: 'USD/rok (oszczędzasz $100)',
    features: [
      '2 języki strony',
      'Lepszy premium design',
      'Podstawowe SEO',
      'Google Analytics',
      'Mapa Google',
      'Formularz kontaktowy',
    ],
    highlight: true,
  },
  {
    name: 'Biznes',
    price: '79',
    priceSuffix: '.99',
    period: 'USD/mies.',
    yearlyPrice: '799',
    yearlySuffix: '.90',
    yearlyPeriod: 'USD/rok (oszczędzasz $160)',
    features: [
      '3 języki strony',
      'Premium design',
      'Pełne SEO',
      'Google Search Console',
      'IndexNOW (szybsze indeksowanie)',
      'Analytics + konwersje',
      'Priorytetowe wsparcie',
    ],
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'od 149',
    priceSuffix: '.99',
    period: 'USD/mies.',
    yearlyPrice: null,
    features: [
      'Wiele języków',
      'Dedykowane rozwiązania',
      'API integracje',
      'Własny serwer',
      'Dedicated support',
      'SLA gwarancja',
    ],
    highlight: false,
  },
];

const addons = [
  { name: 'Dodatkowy język', price: '+10 USD/mies.' },
  { name: 'Dodatkowe edycje strony (5szt)', price: '+5 USD/mies.' },
];

export default function PricingPreview() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
          Proste ceny, potężne możliwości
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
          Wybierz plan dopasowany do Twoich potrzeb.
        </p>
        
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!isYearly ? 'text-[#0f172a]' : 'text-slate-400'}`}>
            Miesięcznie
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 bg-[#0f172a] rounded-full transition-colors"
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-[#0f172a]' : 'text-slate-400'}`}>
            Rocznie (oszczędzasz do $160)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white rounded-2xl p-8 ${
              plan.highlight
                ? 'ring-2 ring-[#06b6d4] shadow-xl relative'
                : 'border border-slate-200 shadow-lg'
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#06b6d4] text-white text-sm font-medium px-4 py-1 rounded-full">
                Najpopularniejszy
              </span>
            )}
            
            <h3 className="text-xl font-semibold text-[#0f172a] mb-2">{plan.name}</h3>
            <div className="mb-6">
              {isYearly && plan.yearlyPrice ? (
                <>
                  <span className="text-4xl font-bold text-[#0f172a]">{plan.yearlyPrice}</span>
                  <span className="text-slate-500 text-sm ml-1">{plan.yearlySuffix}</span>
                </>
              ) : (
                <>
                  <span className="text-4xl font-bold text-[#0f172a]">{plan.price}</span>
                  <span className="text-slate-500 text-sm ml-1">{plan.priceSuffix}</span>
                </>
              )}
              <div className="text-sm text-slate-500 mt-1">
                {isYearly && plan.yearlyPrice ? plan.yearlyPeriod : plan.period}
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-slate-600 text-sm">
                  <Check className="w-4 h-4 text-[#06b6d4] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link
              href="/cennik"
              className={`block text-center py-3 rounded-lg font-medium transition-all ${
                plan.highlight
                  ? 'bg-[#06b6d4] text-white hover:bg-[#0891b2]'
                  : 'bg-[#0f172a] text-white hover:bg-[#06b6d4]'
              }`}
            >
              Wybierz {plan.name}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="mt-16 bg-slate-50 rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-[#0f172a] mb-6 text-center">
          Dodatkowe usługi
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {addons.map((addon) => (
            <div key={addon.name} className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
              <span className="text-slate-700">{addon.name}</span>
              <span className="text-[#06b6d4] font-semibold">{addon.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/cennik"
          className="inline-flex items-center gap-2 text-[#06b6d4] hover:underline font-medium"
        >
          Zobacz pełny cennik <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}