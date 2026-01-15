"use client";

import React, { useState, useMemo } from 'react';
import { motion, Variants, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Zap, Crown, Rocket, Globe, ShoppingCart, LayoutDashboard, Package } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Category configuration with icons
const CATEGORIES = [
  { id: 'all', icon: LayoutDashboard },
  { id: 'landing-page', icon: Rocket },
  { id: 'company-profile', icon: Globe },
  { id: 'ecommerce', icon: ShoppingCart },
  { id: 'pos-inventory', icon: Package }
];

// Package styling configuration
const PACKAGE_CONFIG = {
  starter: { icon: Zap, highlight: false, gradient: 'from-blue-500 to-cyan-500', border: 'border-blue-500/20', glow: 'shadow-blue-500/20' },
  pro: { icon: Crown, highlight: true, gradient: 'from-primary to-violet-600', border: 'border-primary/50', glow: 'shadow-primary/40' },
  complete: { icon: Sparkles, highlight: false, gradient: 'from-indigo-900 to-blue-900', border: 'border-indigo-500/20', glow: 'shadow-indigo-500/20' }
};

const Pricing: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { translations } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

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

  // Filter packages based on active category
  const filteredPackages = useMemo(() => {
    const categories = translations.pricing?.categories || [];
    if (activeCategory === 'all') {
      // Show one featured package from each category
      return categories.map((cat: any) => ({
        ...cat.packages.find((p: any) => p.tier === 'pro') || cat.packages[1],
        categoryId: cat.id,
        categoryName: cat.name
      }));
    }
    const selectedCategory = categories.find((cat: any) => cat.id === activeCategory);
    return selectedCategory?.packages.map((pkg: any) => ({
      ...pkg,
      categoryId: selectedCategory.id,
      categoryName: selectedCategory.name
    })) || [];
  }, [translations.pricing?.categories, activeCategory]);

  return (
    <section id="pricing" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
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
            {translations.pricing?.subtitle || 'Harga transparan, tanpa biaya tersembunyi.'}
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const categoryData = translations.pricing?.categories?.find((c: any) => c.id === category.id);
            const label = category.id === 'all'
              ? (translations.pricing?.filterAll || 'Semua')
              : (categoryData?.name || category.id);

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-violet-600 text-white shadow-lg shadow-primary/25'
                    : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700'
                  }
                `}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className={`grid gap-8 items-stretch ${activeCategory === 'all' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 lg:grid-cols-3'}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredPackages.map((pkg: any, idx: number) => {
              const config = PACKAGE_CONFIG[pkg.tier as keyof typeof PACKAGE_CONFIG] || PACKAGE_CONFIG.starter;
              const Icon = config.icon;

              return (
                <motion.div
                  key={`${pkg.categoryId}-${pkg.tier}-${idx}`}
                  variants={cardVariants}
                  layout
                  className={`relative rounded-[2rem] transition-all duration-300 flex flex-col ${config.highlight
                    ? 'bg-[#0f0f0f] border-2 border-primary shadow-[0_0_40px_rgba(99,102,241,0.15)] lg:scale-105 z-10'
                    : `bg-[#0a0a0a] border ${config.border} hover:border-opacity-50 hover:shadow-xl`
                    } p-8`}
                >
                  {/* Popular Badge */}
                  {config.highlight && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full shadow-lg border border-white/20">
                        <Sparkles size={12} fill="currentColor" /> {translations.pricing?.popular || 'Popular Choice'}
                      </span>
                    </div>
                  )}

                  {/* Category Badge (for "all" view) */}
                  {activeCategory === 'all' && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary/80 bg-primary/10 rounded-full">
                        {pkg.categoryName}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                    <p className="text-slate-400 font-medium text-sm">{pkg.tagline}</p>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-500">{translations.pricing?.startFrom || 'Mulai'}</span>
                    </div>
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tight">{pkg.priceRange}</span>
                    {pkg.timeline && (
                      <p className="text-sm text-slate-500 mt-2">⏱️ {pkg.timeline}</p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features?.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-500/10 text-blue-500`}>
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-sm font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/6285888050785?text=Hi%20Agam%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20untuk%20${encodeURIComponent(pkg.categoryName || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${config.highlight
                      ? 'bg-gradient-to-r from-primary to-violet-600 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1'
                      : 'bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600'
                      }`}
                  >
                    {translations.pricing?.cta || 'Konsultasi Gratis'} <ArrowRight size={18} />
                  </a>

                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

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
