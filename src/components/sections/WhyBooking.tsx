import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, UserX, CheckCircle2, ArrowRight, XCircle } from 'lucide-react';
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Pain points when NOT using booking system
  const painPoints = [
    {
      icon: Clock,
      title: translations.whyBooking?.painPoints?.[0]?.title || 'Waktu Terbuang',
      desc: translations.whyBooking?.painPoints?.[0]?.desc || 'Habiskan waktu berjam-jam balas chat "kak, jam segini kosong gak?" satu per satu.',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: UserX,
      title: translations.whyBooking?.painPoints?.[1]?.title || 'No-Show Pelanggan',
      desc: translations.whyBooking?.painPoints?.[1]?.desc || 'Pelanggan janji datang tapi menghilang. Slot kosong, revenue hilang.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: TrendingDown,
      title: translations.whyBooking?.painPoints?.[2]?.title || 'Kehilangan Pelanggan',
      desc: translations.whyBooking?.painPoints?.[2]?.desc || 'Terlalu lama balas? Pelanggan pindah ke kompetitor yang lebih responsif.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10'
    },
    {
      icon: AlertTriangle,
      title: translations.whyBooking?.painPoints?.[3]?.title || 'Data Tidak Terkelola',
      desc: translations.whyBooking?.painPoints?.[3]?.desc || 'Tidak ada histori booking, sulit follow-up, dan promosi jadi tidak terarah.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  // Benefits when using booking system
  const benefits = [
    translations.whyBooking?.benefits?.[0] || 'Penerimaan booking otomatis 24/7',
    translations.whyBooking?.benefits?.[1] || 'DP otomatis, no-show berkurang drastis',
    translations.whyBooking?.benefits?.[2] || 'WhatsApp reminder otomatis',
    translations.whyBooking?.benefits?.[3] || 'Dashboard untuk pantau semua booking',
    translations.whyBooking?.benefits?.[4] || 'Data pelanggan tersimpan rapi untuk CRM'
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950/50 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeInUpVariants}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 rounded-full"
          >
            {translations.whyBooking?.badge || '⚠️ Masalah Umum'}
          </motion.span>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {translations.whyBooking?.title || 'Masih Terima Booking Lewat WhatsApp?'}
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            {translations.whyBooking?.subtitle || 'Ini yang terjadi pada bisnis yang masih pakai cara manual:'}
          </motion.p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {painPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUpVariants}
                className="group relative p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-200 dark:hover:border-red-800/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${point.bgColor} ${point.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <XCircle size={16} className="text-red-500" />
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        {point.title}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-indigo-600 to-violet-700" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

          <div className="relative z-10 p-8 md:p-12">
            <motion.div variants={fadeInUpVariants} className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-white/90 bg-white/20 rounded-full backdrop-blur-sm">
                {translations.whyBooking?.solutionBadge || '✅ Solusinya'}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {translations.whyBooking?.solutionTitle || 'Dengan Booking App, Semua Jadi Otomatis'}
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                {translations.whyBooking?.solutionSubtitle || 'Bisnis Anda terima booking 24 jam tanpa perlu Anda standby. Pelanggan happy, revenue naik.'}
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              variants={fadeInUpVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8"
            >
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUpVariants} className="text-center">
              <a
                href="https://wa.me/6285888050785?text=Hi%20Agam%2C%20saya%20mau%20konsultasi%20tentang%20booking%20app%20untuk%20bisnis%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Konsultasikan Bisnis Anda <ArrowRight size={20} />
              </a>
              <p className="text-white/60 text-sm mt-3">
                {translations.whyBooking?.ctaNote || '100% gratis, tanpa komitmen'}
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyBooking;
