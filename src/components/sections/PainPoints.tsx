
import React from 'react';
import { ArrowRight, CheckCircle2, MinusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { PAIN_POINTS } from '@/constants/painPoints';

const PainPoints: React.FC = () => {
  const { t, translations } = useLanguage();

  return (
    <section id="pain-points" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800 transition-colors">
      <div
        className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors leading-tight whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: t('painPoints.title') }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
          >
            {t('painPoints.subtitle')}
          </motion.p>
        </div>

        {/* Mobile: Horizontal Scroll / Desktop: Vertical Stack */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-6 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
          {translations.painPoints.list.map((point: any, index: number) => {
            const Icon = PAIN_POINTS[index].icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[85vw] md:min-w-0 snap-center group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* LEFT SIDE: THE PROBLEM (Old Way) */}
                <div className="md:w-[40%] bg-slate-50 dark:bg-slate-950/50 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 relative overflow-hidden">
                  {/* Background Pattern for Texture */}
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3 text-slate-400 dark:text-slate-500">
                      <MinusCircle size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">{t('painPoints.currentChallenge')}</span>
                    </div>
                    <h3 className="font-medium text-slate-500 dark:text-slate-400 text-lg leading-snug mb-2 line-through decoration-slate-300 dark:decoration-slate-700 decoration-2">
                      {point.problem}
                    </h3>
                    <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                      {point.impact}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE: THE SOLUTION (New Way) */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-white dark:bg-slate-900 group-hover:bg-indigo-50/30 dark:group-hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase rounded-full flex items-center gap-1">
                          <CheckCircle2 size={10} /> {t('painPoints.mySolution')}
                        </div>
                      </div>
                      <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                        {point.solution}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {point.solutionDescription}
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Swipe Hint */}
        <div className="md:hidden text-center mt-4 animate-pulse">
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            {t('common.swipeHint')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
