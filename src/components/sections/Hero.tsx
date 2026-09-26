'use client';

import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[82vh] flex items-center justify-center pt-32 sm:pt-40 pb-20 overflow-hidden bg-[#f4f5f7] dark:bg-[#09090b] bg-grid-pattern transition-colors duration-200"
    >
      {/* Subtle Radial Gradient to soften the grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#f4f5f7_75%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_20%,#09090b_75%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Minimalist Monospace Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-5 sm:mb-6"
          >
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-medium">
              Agam Latifullah · Full-Stack Developer
            </span>
          </motion.div>

          {/* Majestic Hero Headline (No Wrap - Exactly 1 Line) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold text-zinc-950 dark:text-white tracking-[-0.035em] leading-[1.08] mb-6 sm:mb-8 whitespace-nowrap"
          >
            <span className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-700 dark:from-white dark:via-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              TypeScript & Golang
            </span>
          </motion.h1>

          {/* Natural, Grounded Subheadline without awkward phrasing */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-10 leading-relaxed max-w-2xl mx-auto font-normal tracking-[-0.01em]"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* Linear Tactile Action Buttons & Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] active:scale-[0.98]"
            >
              <span>{t('hero.cta.projects')}</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-none active:scale-[0.98]"
            >
              <Mail size={15} className="text-zinc-500 dark:text-zinc-400" />
              <span>{t('hero.cta.contact')}</span>
            </a>

            <div className="flex items-center gap-2 pt-1 sm:pt-0 sm:ml-2">
              <a
                href="https://github.com/agamlatiff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all active:scale-[0.98]"
                aria-label="GitHub Profile"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/agam-latifullah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all active:scale-[0.98]"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Smooth Section Transition Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#f4f5f7] dark:to-[#09090b] pointer-events-none" />
    </section>
  );
};

export default Hero;
