import React, { useState } from 'react';
import { motion, Variants, useReducedMotion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, UserX, CheckCircle2, ArrowRight, XCircle, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WhyBooking: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { translations } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pain' | 'solution'>('pain');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const fadeInLeftVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const fadeInRightVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const painPoints = [
    {
      icon: Clock,
      text: translations.whyBooking?.painPoints?.[0]?.title || 'Waktu Terbuang',
      desc: translations.whyBooking?.painPoints?.[0]?.desc || 'Berjam-jam balas chat satu per satu',
      stat: translations.whyBooking?.painStats?.[0] || '3-5 jam/hari'
    },
    {
      icon: UserX,
      text: translations.whyBooking?.painPoints?.[1]?.title || 'No-Show Pelanggan',
      desc: translations.whyBooking?.painPoints?.[1]?.desc || 'Pelanggan batal tanpa konfirmasi',
      stat: translations.whyBooking?.painStats?.[1] || '30% no-show'
    },
    {
      icon: TrendingDown,
      text: translations.whyBooking?.painPoints?.[2]?.title || 'Kehilangan Pelanggan',
      desc: translations.whyBooking?.painPoints?.[2]?.desc || 'Pindah ke kompetitor yang lebih cepat',
      stat: translations.whyBooking?.painStats?.[2] || '-20% revenue'
    },
    {
      icon: AlertTriangle,
      text: translations.whyBooking?.painPoints?.[3]?.title || 'Data Tidak Terkelola',
      desc: translations.whyBooking?.painPoints?.[3]?.desc || 'Sulit follow-up dan promosi',
      stat: translations.whyBooking?.painStats?.[3] || '0% retention'
    }
  ];

  const solutions = [
    {
      text: translations.whyBooking?.solutions?.[0]?.title || 'Booking otomatis 24/7',
      desc: translations.whyBooking?.solutions?.[0]?.desc || 'Terima booking kapan saja',
      stat: translations.whyBooking?.solutionStats?.[0] || '24/7 aktif'
    },
    {
      text: translations.whyBooking?.solutions?.[1]?.title || 'DP otomatis, no-show turun',
      desc: translations.whyBooking?.solutions?.[1]?.desc || 'Pembayaran langsung terjamin',
      stat: translations.whyBooking?.solutionStats?.[1] || '95% hadir'
    },
    {
      text: translations.whyBooking?.solutions?.[2]?.title || 'WhatsApp reminder otomatis',
      desc: translations.whyBooking?.solutions?.[2]?.desc || 'Pengingat H-1 dan 1 jam sebelum',
      stat: translations.whyBooking?.solutionStats?.[2] || 'Auto remind'
    },
    {
      text: translations.whyBooking?.solutions?.[3]?.title || 'Dashboard & CRM lengkap',
      desc: translations.whyBooking?.solutions?.[3]?.desc || 'Data pelanggan tersimpan rapi',
      stat: translations.whyBooking?.solutionStats?.[3] || '+40% repeat'
    }
  ];

  const PainCard = ({ point, idx }: { point: typeof painPoints[0]; idx: number }) => {
    const Icon = point.icon;
    return (
      <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-red-100 dark:border-red-900/30 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg flex-shrink-0">
          <Icon size={24} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <XCircle size={16} className="text-red-500 flex-shrink-0" />
            <span className="font-bold text-slate-900 dark:text-white">{point.text}</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{point.desc}</p>
        </div>
        <span className="inline-block px-2 py-1 text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/50 rounded-lg flex-shrink-0">
          {point.stat}
        </span>
      </div>
    );
  };

  const SolutionCard = ({ solution, idx }: { solution: typeof solutions[0]; idx: number }) => (
    <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-emerald-100 dark:border-emerald-900/30 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0">
        <CheckCircle2 size={24} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
          <span className="font-bold text-slate-900 dark:text-white">{solution.text}</span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{solution.desc}</p>
      </div>
      <span className="inline-block px-2 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex-shrink-0">
        {solution.stat}
      </span>
    </div>
  );

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-500/5 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {translations.whyBooking?.title || 'Masih Terima Booking Lewat WhatsApp?'}
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            {translations.whyBooking?.compareText || 'Bandingkan cara manual vs otomatis'}
          </motion.p>
        </motion.div>

        {/* Mobile Tab Switcher */}
        <motion.div
          className="lg:hidden flex justify-center mb-8"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative inline-flex p-1.5 rounded-2xl bg-slate-200 dark:bg-slate-800">
            {/* Animated background */}
            <motion.div
              className={`absolute top-1.5 bottom-1.5 rounded-xl ${activeTab === 'pain'
                ? 'bg-gradient-to-r from-red-500 to-rose-500'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                }`}
              layoutId="tabBg"
              style={{ width: 'calc(50% - 6px)' }}
              animate={{ x: activeTab === 'pain' ? 0 : 'calc(100% + 6px)' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
            <button
              onClick={() => setActiveTab('pain')}
              className={`relative z-10 px-6 py-3 rounded-xl font-bold text-sm transition-colors ${activeTab === 'pain' ? 'text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
            >
              ❌ {translations.whyBooking?.tabPain || 'Tanpa App'}
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`relative z-10 px-6 py-3 rounded-xl font-bold text-sm transition-colors ${activeTab === 'solution' ? 'text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
            >
              ✅ {translations.whyBooking?.tabSolution || 'Dengan App'}
            </button>
          </div>
        </motion.div>

        {/* Mobile Content */}
        <div className="lg:hidden mb-12">
          <AnimatePresence mode="wait">
            {activeTab === 'pain' ? (
              <motion.div
                key="pain"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border border-red-200 dark:border-red-900/50"
              >
                <div className="space-y-4">
                  {painPoints.map((point, idx) => (
                    <PainCard key={idx} point={point} idx={idx} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-900/50"
              >
                <div className="space-y-4">
                  {solutions.map((solution, idx) => (
                    <SolutionCard key={idx} solution={solution} idx={idx} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Side by Side */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-2 gap-0 mb-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* VS Divider - Centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-red-400 to-transparent" />
              <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-l from-emerald-400 to-transparent" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-xl border-4 border-white dark:border-slate-600">
                <span className="text-white font-bold text-lg">VS</span>
              </div>
            </div>
          </div>

          {/* Pain Points */}
          <motion.div
            variants={fadeInLeftVariants}
            className="relative p-8 rounded-3xl rounded-r-none bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border border-red-200 dark:border-red-900/50 border-r-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/50 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              {translations.whyBooking?.tabPain || 'Tanpa Booking App'}
            </div>
            <div className="space-y-4">
              {painPoints.map((point, idx) => (
                <PainCard key={idx} point={point} idx={idx} />
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={fadeInRightVariants}
            className="relative p-8 rounded-3xl rounded-l-none bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-900/50 border-l-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 rounded-full">
              <Zap size={14} className="animate-pulse" />
              {translations.whyBooking?.tabSolution || 'Dengan Booking App'}
            </div>
            <div className="space-y-4">
              {solutions.map((solution, idx) => (
                <SolutionCard key={idx} solution={solution} idx={idx} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            variants={fadeInUpVariants}
            href="https://wa.me/6285888050785?text=Hi%20Agam%2C%20saya%20mau%20konsultasi%20tentang%20booking%20app%20untuk%20bisnis%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-violet-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            {translations.whyBooking?.cta || 'Upgrade Bisnis Anda Sekarang'} <ArrowRight size={22} />
          </motion.a>
          <motion.p
            variants={fadeInUpVariants}
            className="text-slate-500 text-sm mt-4"
          >
            {translations.whyBooking?.ctaNote || '100% gratis konsultasi, tanpa komitmen'}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBooking;
