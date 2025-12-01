import React, { useState } from 'react';
import { ArrowRight, Loader2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { createWhatsAppLink } from '@/constants/whatsapp';

const Hero: React.FC = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const { t } = useLanguage();

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isNavigating) return;
    setIsNavigating(true);

    // Use dynamic message from translations
    const message = t('whatsappMessages.consultation');
    const waLink = createWhatsAppLink(message);

    setTimeout(() => {
      window.open(waLink, '_blank');
      setIsNavigating(false);
    }, 800);
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-primary/10 dark:bg-primary/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-wide text-indigo-600 dark:text-indigo-300 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-full border border-indigo-100 dark:border-slate-800 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="uppercase tracking-widest">{t('hero.badge')}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight"
          >
            {t('hero.headline.part1')}<br />
            <span className="relative inline-block text-primary">
              {t('hero.headline.part2')}
              {/* Creative Underline */}
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-blue-300 dark:text-blue-800 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 6.99997C25.7501 2.49994 132.5 -1.49996 198 3.99996" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t('hero.subheadline').replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white">$1</strong>') }}
          />

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20"
          >
            <button
              onClick={handleConsultationClick}
              disabled={isNavigating}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {isNavigating ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>{t('hero.cta.processing')}</span>
                </>
              ) : (
                <>
                  <span>{t('hero.cta.consult')}</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('roi-calculator');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 cursor-pointer"
            >
              <TrendingUp size={18} /> {t('hero.cta.roi')}
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
