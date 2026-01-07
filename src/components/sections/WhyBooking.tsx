import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, UserX, CheckCircle2, ArrowRight, XCircle, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WhyBooking: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { translations } = useLanguage();

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
    { icon: Clock, text: translations.whyBooking?.painPoints?.[0]?.title || 'Waktu Terbuang' },
    { icon: UserX, text: translations.whyBooking?.painPoints?.[1]?.title || 'No-Show Pelanggan' },
    { icon: TrendingDown, text: translations.whyBooking?.painPoints?.[2]?.title || 'Kehilangan Pelanggan' },
    { icon: AlertTriangle, text: translations.whyBooking?.painPoints?.[3]?.title || 'Data Tidak Terkelola' }
  ];

  const solutions = [
    { text: translations.whyBooking?.benefits?.[0] || 'Booking otomatis 24/7' },
    { text: translations.whyBooking?.benefits?.[1] || 'DP otomatis, no-show turun' },
    { text: translations.whyBooking?.benefits?.[2] || 'WhatsApp reminder otomatis' },
    { text: 'Dashboard & CRM lengkap' }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-500/5 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {translations.whyBooking?.title || 'Masih Terima Booking Lewat WhatsApp?'}
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            Bandingkan cara manual vs otomatis
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeInLeftVariants}
            className="relative p-8 rounded-3xl lg:rounded-r-none bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border border-red-200 dark:border-red-900/50"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/50 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Tanpa Booking App
            </div>

            <div className="space-y-4">
              {painPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-red-100 dark:border-red-900/30"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle size={18} className="text-red-500" />
                      <span className="font-bold text-lg text-slate-900 dark:text-white">{point.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRightVariants}
            className="relative p-8 rounded-3xl lg:rounded-l-none bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-900/50"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 rounded-full">
              <Zap size={14} className="animate-pulse" />
              Dengan Booking App
            </div>

            <div className="space-y-4">
              {solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-emerald-100 dark:border-emerald-900/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span className="font-bold text-lg text-slate-900 dark:text-white">{solution.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

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
            Upgrade Bisnis Anda Sekarang <ArrowRight size={22} />
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
