
import React, { useState } from 'react';
import { Check, X, Info, Star, ShieldCheck, Zap, Layout, ShoppingBag, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Comparison: React.FC = () => {
  const { t, translations } = useLanguage();
  const [activeTab, setActiveTab] = useState('custom');

  return (
    <section id="comparison" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden border-y border-slate-200/60 dark:border-slate-800">
      <div
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
            {t('comparison.title')}
          </h2>
          <p
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('comparison.subtitle') }}
          />
        </div>

        {/* Desktop View Table */}
        <div className="hidden md:block relative">
          {/* Glow Effect behind the 'Me' column */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 dark:bg-primary/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950">
                  <th className="p-6 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/4">{t('comparison.headers.criteria')}</th>
                  <th className="p-6 text-lg font-bold text-slate-400 dark:text-slate-500 w-1/4 text-center">{t('comparison.headers.saas')}</th>
                  <th className="p-6 text-lg font-bold text-slate-600 dark:text-slate-300 w-1/4 text-center">{t('comparison.headers.agency')}</th>
                  <th className="p-0 w-1/4 relative">
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
                      <div className="flex flex-col items-center gap-2">
                        <ShoppingBag size={20} className="text-slate-300" />
                        <span className="text-sm">{row.saas}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-slate-600 dark:text-slate-300 border-r border-slate-100 dark:border-slate-800">
                      <div className="flex flex-col items-center gap-2">
                        <MessageCircle size={20} className="text-blue-400/70" />
                        <span className="text-sm">{row.agency}</span>
                      </div>
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

        {/* Mobile View Cards (Tabbed Filter) */}
        {/* Mobile View Cards (Tabbed Filter) - Premium Redesign */}
        <div className="md:hidden">
          {/* Mobile Tabs - Segmented Control Style */}
          <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 mb-8 flex relative z-10">
            {['saas', 'agency', 'custom'].map((tab) => {
              const isSelected = activeTab === tab;
              const Icon = tab === 'saas' ? ShoppingBag : tab === 'agency' ? MessageCircle : Star;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-2 rounded-xl transition-all duration-300 relative flex flex-col items-center gap-1.5 ${isSelected
                    ? 'bg-primary/5 text-primary'
                    : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                    }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <Icon size={18} className={isSelected ? 'fill-primary/20' : ''} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight">
                      {tab === 'custom' ? 'Agam' : t(`comparison.headers.${tab}`).split(' ')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Content - Premium Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`bg-white dark:bg-slate-900 rounded-[2rem] border-2 shadow-2xl overflow-hidden ${activeTab === 'custom'
                  ? 'border-primary/50 shadow-primary/10'
                  : 'border-slate-100 dark:border-slate-800'
                  }`}
              >
                {/* Header Banner */}
                <div className={`py-6 px-6 text-center rounded-t-[1.8rem] ${activeTab === 'custom'
                  ? 'bg-primary/5'
                  : 'bg-slate-50 dark:bg-slate-800/50'
                  }`}>
                  <h3 className={`text-xl font-bold mb-1 ${activeTab === 'custom' ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                    {activeTab === 'custom' ? 'Agam E-Commerce' : t(`comparison.headers.${activeTab}`)}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    {activeTab === 'custom' ? t('comparison.mobile.winner') : 'Alternative Option'}
                  </p>
                </div>

                {/* List Items */}
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {translations.comparison.list.map((row: any, idx: number) => (
                    <div key={idx} className="p-6 flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${activeTab === 'custom' ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}></div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {row.criteria}
                        </span>
                      </div>
                      <div className={`text-lg leading-snug ${activeTab === 'custom'
                        ? 'font-bold text-primary'
                        : 'font-medium text-slate-700 dark:text-slate-300'
                        }`}>
                        {row[activeTab]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA if Custom */}
                {activeTab === 'custom' && (
                  <div className="p-6 bg-primary/5 border-t border-primary/10">
                    <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm">
                      <ShieldCheck size={16} />
                      <span>{t('comparison.headers.bestValue')}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
