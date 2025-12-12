
import React, { useState } from 'react';
import { Check, Star, ShieldCheck, ShoppingBag, MessageCircle, User, Store, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Comparison: React.FC = () => {
  const { t, translations } = useLanguage();
  const [competitorMode, setCompetitorMode] = useState('marketplace');


  const competitors = [
    { id: 'manual', icon: User, label: 'Manual' },
    { id: 'marketplace', icon: Store, label: 'Marketplace' },
    { id: 'agency', icon: MessageCircle, label: 'Agency' },
  ];

  return (
    <section id="comparison" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            {t('comparison.title')}
          </h2>
          <p
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('comparison.subtitle') }}
          />
        </div>

        {/* Competitor Selector (Desktop & Mobile) */}
        {/* Competitor Selector (Desktop & Mobile) - Scrollable on mobile */}
        <div className="flex justify-center mb-10 px-4">
          <div className="bg-white dark:bg-slate-950 p-1.5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 inline-flex flex-nowrap overflow-x-auto max-w-full justify-start md:justify-center gap-1 no-scrollbar space-x-1 snap-x">
            {competitors.map((comp) => {
              const Icon = comp.icon;
              const isSelected = competitorMode === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setCompetitorMode(comp.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${isSelected
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                >
                  <Icon size={16} className={isSelected ? 'text-primary' : 'text-slate-400'} />
                  <span>{t(`comparison.headers.${comp.id}`).split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop View Table */}
        <div className="hidden md:block relative">
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 dark:bg-primary/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950">
                  <th className="p-6 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/3">{t('comparison.headers.criteria')}</th>
                  <th className="p-6 text-lg font-bold text-slate-500 dark:text-slate-400 w-1/3 text-center transition-all duration-300">
                    {t(`comparison.headers.${competitorMode}`)}
                  </th>
                  <th className="p-0 w-1/3 relative">
                    <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 border-b-4 border-primary"></div>
                    <div className="relative p-6">
                      <div className="flex items-center justify-center gap-2 text-xl font-extrabold text-primary text-center">
                        <Star size={20} fill="currentColor" />
                        {t('comparison.headers.custom')}
                      </div>
                      <div className="text-xs text-center text-primary/80 font-bold mt-1 uppercase tracking-wide">{t('comparison.headers.bestValue')}</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {translations.comparison.list.map((row: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-6 font-semibold text-slate-700 dark:text-slate-300 border-r border-slate-100 dark:border-slate-800">
                      {row.criteria}
                    </td>
                    <td className="p-6 text-center text-slate-500 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">
                      <motion.div
                        key={competitorMode}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {row[competitorMode]}
                      </motion.div>
                    </td>
                    <td className="p-6 text-center bg-primary/5 dark:bg-primary/10 relative">
                      <div className="flex flex-col items-center gap-2 relative z-10">
                        <div className="p-1.5 bg-white dark:bg-slate-900 rounded-full shadow-sm border border-primary/20">
                          <Check size={20} className="text-primary stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{row.custom}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View Cards (Direct Comparison - Vertical Stack) */}
        <div className="md:hidden space-y-6">
          {translations.comparison.list.map((row: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                {row.criteria}
              </h3>

              <div className="space-y-4">
                {/* Agam (Hero) */}
                <div className="relative overflow-hidden rounded-xl bg-primary/5 border border-primary/20 p-4">
                  <div className="absolute top-0 right-0 px-2 py-1 bg-primary text-[10px] font-bold text-white rounded-bl-lg">
                    WINNER
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 bg-primary rounded-full p-1 shadow-sm shrink-0">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-primary mb-1 uppercase tracking-wide">
                        {t('comparison.headers.custom')}
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                        {row.custom}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competitor (Comparison) */}
                <div className="relative pl-1">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 bg-slate-200 dark:bg-slate-800 rounded-full p-1 shrink-0">
                      <X size={14} className="text-slate-500" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wide">
                        {t(`comparison.headers.${competitorMode}`)}
                      </div>
                      <div className="font-medium text-slate-600 dark:text-slate-400 text-sm leading-snug">
                        {row[competitorMode]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
