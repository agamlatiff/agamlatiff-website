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
    { id: 'starter', icon: Zap, highlight: false, gradient: 'from-blue-500 to-cyan-500', border: 'border-blue-500/20', glow: 'shadow-blue-500/20' },
    { id: 'business', icon: Crown, highlight: true, gradient: 'from-primary to-violet-600', border: 'border-primary/50', glow: 'shadow-primary/40' },
    { id: 'enterprise', icon: Sparkles, highlight: false, gradient: 'from-indigo-900 to-blue-900', border: 'border-indigo-500/20', glow: 'shadow-indigo-500/20' }
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
                className={`relative rounded-[2rem] transition-all duration-300 flex flex-col ${pkg.highlight
                  ? 'bg-[#0f0f0f] border-2 border-primary shadow-[0_0_40px_rgba(99,102,241,0.15)] scale-105 z-10'
                  : `bg-[#0a0a0a] border ${pkg.border} hover:border-opacity-50 hover:shadow-xl`
                  } p-8`}
              >
                {/* Popular Badge */}
                {pkg.highlight && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full shadow-lg border border-white/20">
                      <Sparkles size={12} fill="currentColor" /> {translations.pricing?.popular || 'Popular Choice'}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 font-medium">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-500">Starts</span>
                    <span className="text-4xl font-black text-white tracking-tight">{pkg.price}</span>
                  </div>
                  {pkg.period && <p className="text-sm text-slate-500 mt-1">{pkg.period}</p>}
                </div>

                {/* Additional Info Row */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm ${pkg.highlight ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                  {pkg.payment && (
                    <div className="flex items-start gap-2">
                      <CreditCard size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{pkg.payment}</span>
                    </div>
                  )}
                  {pkg.revisions && (
                    <div className="flex items-start gap-2">
                      <RefreshCw size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{pkg.revisions}</span>
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
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features?.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-500/10 text-blue-500`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-sm font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Not Included */}
                {pkg.notIncluded?.length > 0 && (
                  <ul className="space-y-2 mb-6 -mt-4 opacity-60">
                    {pkg.notIncluded.map((item: string, nIdx: number) => (
                      <li key={nIdx} className="flex items-start gap-3">
                        <XCircle size={16} className="flex-shrink-0 mt-0.5 text-red-500" />
                        <span className="text-sm line-through text-slate-500">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Extras/Bonus */}
                {pkg.extras?.length > 0 && (
                  <div className={`mb-8 p-4 rounded-xl ${pkg.highlight ? 'bg-white/10' : 'bg-blue-900/10 border border-blue-500/20'}`}>
                    <div className={`flex items-center gap-2 text-sm font-bold mb-3 ${pkg.highlight ? 'text-amber-300' : 'text-blue-400'}`}>
                      <Gift size={16} /> Bonus
                    </div>
                    <ul className="space-y-2">
                      {pkg.extras.map((extra: string, eIdx: number) => (
                        <li key={eIdx} className={`text-sm ${pkg.highlight ? 'text-white/80' : 'text-slate-400'}`}>
                          • {extra}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href={`https://wa.me/6285888050785?text=Hi%20Agam%2C%20saya%20tertarik%20dengan%20paket%20${pkg.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${pkg.highlight
                    ? 'bg-gradient-to-r from-primary to-violet-600 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1'
                    : 'bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600'
                    }`}
                >
                  {translations.pricing?.cta || 'Pilih Paket'} <ArrowRight size={18} />
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
