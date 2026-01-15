'use client';

import React, { useState } from 'react';
import { ArrowRight, Loader2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/constants/whatsapp';

const Hero: React.FC = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const { t } = useLanguage();

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isNavigating) return;
    setIsNavigating(true);
    const message = t('whatsappMessages.consultation');
    const waLink = createWhatsAppLink(message);
    setTimeout(() => {
      window.open(waLink, '_blank');
      setIsNavigating(false);
    }, 800);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-32 overflow-hidden bg-slate-950 transition-colors duration-300">

      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 dark:opacity-10"></div>

        {/* Floating Blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-0 -right-20 w-80 h-80 bg-violet-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

        {/* Particles - using fixed positions to avoid hydration mismatch */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const xPos = ((i * 127) % 100) + '%';
            const yPos = ((i * 83) % 100) + '%';
            const duration = 5 + (i % 5);
            const delay = (i % 5);

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{ left: xPos, top: yPos }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: delay
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-wide text-blue-500 bg-blue-500/10 backdrop-blur-md rounded-full border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-shadow cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="uppercase tracking-widest">{t('hero.badge')}</span>
          </motion.div>

          {/* Headline with Reference Style Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tight"
          >
            {t('hero.headline.part1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#9333EA] animate-gradient-x bg-[length:200%_auto]">
              {t('hero.headline.part2')}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t('hero.subheadline').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}
          />

          {/* Buttons with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }} // Float effect
            transition={{
              opacity: { duration: 0.5, delay: 0.3 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } // Continuous float
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto relative z-20"
          >
            <button
              onClick={handleConsultationClick}
              disabled={isNavigating}
              className="group relative w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-[#2563EB] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              {isNavigating ? (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  {t('hero.cta.processing')}
                </>
              ) : (
                <>
                  {t('hero.cta.consult')} <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <a
              href="https://www.upwork.com/freelancers/~01e490352a92e7beb8"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-slate-900/5 dark:bg-slate-800/50 backdrop-blur border border-slate-700/50 text-slate-600 dark:text-slate-300 px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-slate-700"
            >
              {t('hero.cta.roi')}
              <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <TrendingUp size={18} className="text-blue-500 group-hover:text-white" />
              </span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

