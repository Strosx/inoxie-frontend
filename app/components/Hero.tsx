'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background - subtle gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-stone-50 via-white to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-accent-light text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Automatyzacja AI + Oprogramowanie
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight tracking-tight"
            >
              Przyspieszamy Twój biznes
              <span className="text-accent"> z AI</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-stone-600 mb-8 max-w-xl leading-relaxed"
            >
              Tworzymy oprogramowanie na zamówienie i automatyzujemy procesy 
              z wykorzystaniem AI. <span className="text-stone-900 font-medium">Zmniejszamy koszty, zwiększamy efektywność.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25 w-full sm:w-auto text-center"
              >
                Darmowa konsultacja
              </Link>
              <Link
                href="/offer"
                className="text-stone-700 px-8 py-4 rounded-xl font-semibold hover:bg-stone-100 transition-colors w-full sm:w-auto text-center border border-stone-200"
              >
                Zobacz ofertę
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6 text-sm text-stone-500"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-stone-300 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-stone-400 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-stone-500 rounded-full border-2 border-white" />
                </div>
                <span>50+ projektów</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-stone-300" />
              <span>⭐ 5.0/5.0 oceny</span>
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative">
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -left-4 z-10"
              >
                <div className="bg-white p-3 rounded-xl shadow-lg border border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium text-accent">AI Active</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-4 -right-4 z-10"
              >
                <div className="bg-white p-3 rounded-xl shadow-lg border border-stone-100">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold text-lg">+70%</span>
                    <span className="text-sm text-stone-600">efektywność</span>
                  </div>
                </div>
              </motion.div>

              {/* Main visual - laptop with code */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
                  alt="Developer working on code"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Code snippet floating */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-8 bottom-20 hidden lg:block"
              >
                <div className="bg-stone-900 text-stone-300 p-4 rounded-lg text-xs font-mono shadow-xl">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div><span className="text-purple-400">const</span> <span className="text-blue-400">ai</span> = <span className="text-yellow-400">new</span> AI();</div>
                  <div><span className="text-blue-400">ai</span>.<span className="text-yellow-300">automate</span>(business);</div>
                  <div className="text-green-400">// +70% efficiency</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
