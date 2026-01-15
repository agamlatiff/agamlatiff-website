'use client';
import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, translations } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Left Column: Header (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-500 font-bold text-sm tracking-wider uppercase rounded-full mb-6">
              FAQ's
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {t('faq.title')}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t('faq.subtitle')}
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {translations.faq.list.map((faq: any, index: number) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-slate-900/50 rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                    : 'border-slate-800/50 hover:bg-slate-800'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 flex items-center justify-between gap-6 text-left focus:outline-none group"
                  >
                    <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-blue-500' : 'text-white group-hover:text-blue-500'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-slate-800 text-slate-500'}`}>
                      {isOpen ? <Plus size={24} className="rotate-45" /> : <Plus size={24} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div
                          className="px-8 pb-8 text-slate-400 leading-relaxed text-lg"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;