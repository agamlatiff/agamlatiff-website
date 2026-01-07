import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Zap, Crown, Clock, RefreshCw, Gift, Users, CreditCard, Shield, Headphones, XCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Pricing: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { translations } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const PACKAGE_CONFIG = [
    { id: 'starter', icon: Zap, highlight: false, gradient: 'from-slate-500 to-slate-600' },
    { id: 'business', icon: Crown, highlight: true, gradient: 'from-primary to-indigo-600' },
    { id: 'enterprise', icon: Sparkles, highlight: false, gradient: 'from-violet-500 to-purple-600' }
  ];

  const packages = translations.pricing?.packages?.map((pkg: any, idx: number) => ({
    ...PACKAGE_CONFIG[idx],
    ...pkg
  })) || PACKAGE_CONFIG;

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
            {translations.pricing?.badge || '💰 Investasi'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            {translations.pricing?.title || 'Pilih Paket yang Sesuai'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl">
            {translations.pricing?.subtitle || 'Harga transparan, tanpa biaya tersembunyi. Pembayaran bisa dicicil.'}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg: any) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col ${pkg.highlight
                  ? 'bg-gradient-to-br from-primary via-indigo-600 to-violet-700 text-white lg:scale-105 shadow-2xl shadow-primary/30 p-8 lg:p-10 z-10'
                  : 'bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl p-7 lg:p-8'
                  }`}
              >
                {/* Popular Badge */}
                {pkg.highlight && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-6 py-2 text-sm font-bold uppercase tracking-wider bg-amber-400 text-amber-900 rounded-full shadow-lg">
                      ⭐ {translations.pricing?.popular || 'Rekomendasi'}
                    </span>
                  </div>
                )}

                {/* Icon & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`rounded-2xl flex items-center justify-center ${pkg.highlight
                    ? 'bg-white/20 w-16 h-16'
                    : `bg-gradient-to-br ${pkg.gradient} text-white w-14 h-14`
                    }`}>
                    <Icon size={pkg.highlight ? 32 : 28} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${pkg.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-base ${pkg.highlight ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                      {pkg.tagline}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-sm font-medium uppercase tracking-wide ${pkg.highlight ? 'text-white/60' : 'text-slate-400'}`}>
                    Mulai dari
                  </span>
                  <div className={`text-4xl lg:text-5xl font-extrabold ${pkg.highlight ? 'text-white' : 'bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent'}`}>
                    {pkg.price}
                  </div>
                </div>

                {/* Ideal For */}
                {pkg.idealFor?.length > 0 && (
                  <div className="mb-6">
                    <div className={`text-sm font-semibold uppercase tracking-wider mb-3 ${pkg.highlight ? 'text-white/60' : 'text-slate-400 dark:text-slate-500'
                      }`}>
                      Cocok untuk
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pkg.idealFor.map((item: string, idx: number) => (
                        <span
                          key={idx}
                          className={`inline-block text-sm px-3 py-1.5 rounded-full ${pkg.highlight
                            ? 'bg-white/15 text-white/90'
                            : 'bg-primary/10 text-primary dark:bg-primary/20'
                            }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Info Badges */}
                <div className={`flex flex-wrap gap-2 mb-6 ${pkg.highlight ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
                  {pkg.delivery && (
                    <span className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full ${pkg.highlight ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-700'
                      }`}>
                      <Clock size={16} /> {pkg.delivery}
                    </span>
                  )}
                  {pkg.revisions && (
                    <span className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full ${pkg.highlight ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-700'
                      }`}>
                      <RefreshCw size={16} /> {pkg.revisions}
                    </span>
                  )}
                  {pkg.capacity && (
                    <span className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full ${pkg.highlight ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-700'
                      }`}>
                      <Users size={16} /> {pkg.capacity}
                    </span>
                  )}
                </div>

                {/* Additional Info Row */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm ${pkg.highlight ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                  {pkg.payment && (
                    <div className="flex items-start gap-2">
                      <CreditCard size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{pkg.payment}</span>
                    </div>
                  )}
                  {pkg.guarantee && (
                    <div className="flex items-start gap-2">
                      <Shield size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{pkg.guarantee}</span>
                    </div>
                  )}
                  {pkg.supportHours && (
                    <div className="flex items-start gap-2 sm:col-span-2">
                      <Headphones size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{pkg.supportHours}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-4 flex-1">
                  {pkg.features?.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check size={20} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-emerald-300' : 'text-emerald-500'}`} />
                      <span className={`text-base font-medium ${pkg.highlight ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Not Included */}
                {pkg.notIncluded?.length > 0 && (
                  <ul className="space-y-2 mb-6 -mt-1">
                    {pkg.notIncluded.map((item: string, nIdx: number) => (
                      <li key={nIdx} className="flex items-start gap-3">
                        <XCircle size={18} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-red-300' : 'text-red-500'}`} />
                        <span className={`text-sm line-through ${pkg.highlight ? 'text-white/50' : 'text-slate-400 dark:text-slate-500'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Extras/Bonus */}
                {pkg.extras?.length > 0 && (
                  <div className={`mb-6 p-4 rounded-xl ${pkg.highlight ? 'bg-white/10' : 'bg-emerald-50 dark:bg-emerald-900/20'}`}>
                    <div className={`flex items-center gap-2 text-base font-bold mb-3 ${pkg.highlight ? 'text-amber-300' : 'text-emerald-600 dark:text-emerald-400'
                      }`}>
                      <Gift size={20} /> Bonus
                    </div>
                    <ul className="space-y-2">
                      {pkg.extras.map((extra: string, eIdx: number) => (
                        <li key={eIdx} className={`text-sm ${pkg.highlight ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                          • {extra}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Excludes */}
                {pkg.excludes?.length > 0 && (
                  <div className={`mb-6 text-sm ${pkg.highlight ? 'text-white/60' : 'text-slate-400 dark:text-slate-500'}`}>
                    <span className="font-medium">Tidak termasuk:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pkg.excludes.map((item: string, idx: number) => (
                        <span key={idx} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm ${pkg.highlight ? 'bg-white/10' : 'bg-slate-200 dark:bg-slate-700'
                          }`}>
                          <XCircle size={14} /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href="https://wa.me/6285888050785?text=Hi%20Agam%2C%20saya%20tertarik%20dengan%20paket%20booking%20app."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-xl transition-all text-lg ${pkg.highlight
                    ? 'bg-white text-primary hover:bg-slate-100 shadow-lg'
                    : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25'
                    }`}
                >
                  {translations.pricing?.cta || 'Konsultasi Gratis'} <ArrowRight size={22} />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Note */}
        <motion.p
          className="text-center text-slate-500 dark:text-slate-400 text-base mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {translations.pricing?.note || '* Harga bisa disesuaikan dengan kebutuhan spesifik bisnis Anda. Konsultasi gratis untuk estimasi yang lebih akurat.'}
        </motion.p>

      </div>
    </section>
  );
};

export default Pricing;
