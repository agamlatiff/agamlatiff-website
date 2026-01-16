"use client";

import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Zap, Crown, Rocket, Users, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Package styling configuration
const PACKAGE_CONFIG = {
  starter: {
    icon: Zap,
    highlight: false,
    gradient: 'from-cyan-400 via-blue-500 to-blue-600',
    border: 'border-cyan-500/30',
    cardBg: 'from-slate-900 via-slate-900/95 to-slate-800/90',
    checkColor: 'text-cyan-400 bg-cyan-500/20',
    iconBg: 'from-cyan-400 to-blue-600',
    hoverGlow: 'hover:shadow-cyan-500/20',
    ribbon: null
  },
  growth: {
    icon: Rocket,
    highlight: true,
    gradient: 'from-primary to-indigo-500',
    border: 'border-primary/50',
    cardBg: 'from-slate-900 via-slate-900/95 to-indigo-950/30',
    checkColor: 'text-primary bg-primary/15',
    iconBg: 'from-primary to-indigo-600',
    hoverGlow: 'hover:shadow-primary/20',
    ribbon: 'BEST VALUE'
  },
  pro: {
    icon: Crown,
    highlight: false,
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    border: 'border-amber-500/30',
    cardBg: 'from-slate-900 via-slate-900/95 to-amber-950/20',
    checkColor: 'text-amber-400 bg-amber-500/20',
    iconBg: 'from-amber-400 to-orange-600',
    hoverGlow: 'hover:shadow-amber-500/20',
    ribbon: null
  }
};

const Pricing: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { translations } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const packages = translations.pricing?.packages || [];

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top/Bottom Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Content */}
      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-2.5 mb-6 text-sm font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="animate-pulse" />
            {translations.pricing?.badge || '💰 Investasi'}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {translations.pricing?.title || 'Pilih Paket yang Tepat'}
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            {translations.pricing?.subtitle || 'Harga transparan, tanpa biaya tersembunyi.'}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid gap-6 lg:gap-8 items-stretch grid-cols-1 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {packages.map((pkg: any, idx: number) => {
            const config = PACKAGE_CONFIG[pkg.tier as keyof typeof PACKAGE_CONFIG] || PACKAGE_CONFIG.starter;
            const Icon = config.icon;

            return (
              <motion.div
                key={`${pkg.tier}-${idx}`}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`group relative rounded-3xl transition-all duration-500 flex flex-col overflow-hidden
                  bg-gradient-to-b ${config.cardBg} backdrop-blur-xl
                  border-2 ${config.border}
                  shadow-2xl ${config.hoverGlow} hover:shadow-2xl
                  ${config.highlight ? 'lg:scale-105 z-10 ring-2 ring-primary/20' : ''}
                `}
              >
                {/* Animated border gradient for highlighted card */}
                {config.highlight && (
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-primary to-fuchsia-600 opacity-20" />
                  </div>
                )}

                {/* Top accent bar with animated gradient */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${config.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                  />
                </div>

                <div className="p-8 lg:p-10 flex flex-col flex-grow relative">
                  {/* Best Value Ribbon */}
                  {config.ribbon && (
                    <div className="absolute -right-12 top-8 rotate-45">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-black uppercase tracking-wider py-1.5 px-12 shadow-lg flex items-center justify-center gap-1">
                        <Star size={10} fill="currentColor" />
                        {config.ribbon}
                        <Star size={10} fill="currentColor" />
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-8">
                    {/* Icon with glow effect */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${config.iconBg} flex items-center justify-center text-white mb-5 shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${config.iconBg} blur-xl opacity-50`} />
                      <Icon size={32} className="relative z-10" />
                    </motion.div>

                    <h3 className="text-3xl font-black text-white mb-2">{pkg.name}</h3>
                    <p className={`font-bold text-base bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>
                      {pkg.tagline}
                    </p>
                    {pkg.description && (
                      <p className="text-slate-400 text-sm mt-3 leading-relaxed">{pkg.description}</p>
                    )}
                  </div>

                  {/* Price Range */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {translations.pricing?.startFrom || 'Mulai dari'}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-black text-white tracking-tight">{pkg.priceRange}</span>
                    </div>
                    {pkg.timeline && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-slate-400 font-medium">{pkg.timeline}</span>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className={`h-px w-full bg-gradient-to-r from-transparent ${config.highlight ? 'via-primary/30' : 'via-slate-700'} to-transparent mb-8`} />

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features?.map((feature: string, i: number) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-slate-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        viewport={{ once: true }}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${config.checkColor}`}>
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-sm font-medium leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Ideal For */}
                  {pkg.idealFor && pkg.idealFor.length > 0 && (
                    <div className="mb-8 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/30 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                        <Users size={14} />
                        <span>Cocok untuk:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {pkg.idealFor.map((item: string, i: number) => (
                          <span
                            key={i}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors
                              ${config.highlight
                                ? 'text-primary/90 bg-primary/10 border-primary/20 hover:bg-primary/20'
                                : 'text-slate-300 bg-slate-800 border-slate-700 hover:border-slate-600'
                              }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <motion.a
                    href={`https://wa.me/6285888050785?text=Hi%20Agam%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20(${encodeURIComponent(pkg.tagline)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300
                      ${config.highlight
                        ? 'bg-gradient-to-r from-violet-600 via-primary to-fuchsia-600 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50'
                        : `bg-gradient-to-r ${config.gradient} text-white shadow-lg opacity-90 hover:opacity-100`
                      }`}
                  >
                    {translations.pricing?.cta || 'Konsultasi Gratis'}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Note */}
        <motion.p
          className="text-center text-slate-500 text-sm mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {translations.pricing?.note || '* Harga bisa disesuaikan dengan kebutuhan spesifik bisnis Anda.'}
        </motion.p>

      </div>
    </section>
  );
};

export default Pricing;
