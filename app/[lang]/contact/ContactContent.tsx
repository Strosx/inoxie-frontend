'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const citiesEN = ['Warsaw', 'Krakow', 'Wroclaw', 'Poznan', 'Gdansk', 'Lodz'];
const citiesPL = ['Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Gdańsk', 'Łódź'];

interface ContactContentProps {
  lang: string;
}

export default function ContactContent({ lang }: ContactContentProps) {
  const t = useTranslations('contact');
  const tf = useTranslations('footer');
  const cities = lang === 'pl' ? citiesPL : citiesEN;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                {t('title')}
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
                {t('subtitle')}
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
                {t('description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-stone-900 mb-6">
                  {t('info.title')}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-xl">✉</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{t('info.email')}</h3>
                      <a href={`mailto:${tf('email')}`} className="text-stone-600 hover:text-accent">
                        {tf('email')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{t('info.phone')}</h3>
                      <a href={`tel:${tf('phone').replace(/\s/g, '')}`} className="text-stone-600 hover:text-accent">
                        {tf('phone')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">{t('info.location')}</h3>
                      <p className="text-stone-600">{tf('location')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-stone-50 rounded-xl border border-stone-100">
                  <h3 className="font-semibold text-stone-900 mb-3">{t('info.availability')}</h3>
                  <p className="text-stone-600">{lang === 'pl' ? 'Pon - Pt: 9:00 - 18:00' : 'Mon - Fri: 9:00 - 18:00'}</p>
                  <p className="text-stone-500 text-sm mt-2">{lang === 'pl' ? 'Wsparcie dostępne 24/7 dla klientów Enterprise' : '24/7 support available for Enterprise clients'}</p>
                </div>

                <div className="mt-8 p-6 bg-stone-900 rounded-xl">
                  <h3 className="font-semibold text-white mb-3">{lang === 'pl' ? 'Dlaczego warto się skontaktować?' : 'Why contact us?'}</h3>
                  <ul className="space-y-2 text-stone-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {lang === 'pl' ? 'Odpowiadamy w ciągu 24 godzin' : 'We respond within 24 hours'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {lang === 'pl' ? 'Bezpłatna wycena projektu' : 'Free project estimate'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {lang === 'pl' ? 'Doświadczenie: 100+ projektów' : 'Experience: 100+ projects'}
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-green-500 text-2xl">✓</span>
                      </div>
                      <h3 className="text-xl font-semibold text-stone-900 mb-2">
                        {t('form.success')}
                      </h3>
                      <p className="text-stone-600">
                        {lang === 'pl' ? 'Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.' : 'Thank you for contacting us. We will respond as soon as possible.'}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                          {t('form.name')} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                          placeholder={lang === 'pl' ? 'Jan Kowalski' : 'John Smith'}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                          {t('form.email')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                          placeholder="jan@firma.pl"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                          {t('form.phone')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                          placeholder="+48 123 456 789"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                          {t('form.message')} *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none bg-white"
                          placeholder={lang === 'pl' ? 'Opisz swój projekt lub zadaj pytanie...' : 'Describe your project or ask a question...'}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent text-white py-4 rounded-xl font-semibold hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin">⟳</span>
                            {t('form.sending')}
                          </>
                        ) : (
                          <>
                            <span>→</span>
                            {t('form.submit')}
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Image - EEAT: Local presence */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt={lang === 'pl' ? 'Nasze biuro' : 'Our office'}
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </section>
    </>
  );
}
