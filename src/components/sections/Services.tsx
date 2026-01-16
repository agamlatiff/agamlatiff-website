'use client';

import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { Globe, Building2, ShoppingCart, Package, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Services: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { translations } = useLanguage();
  const t = (translations as any).services || {};

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

  const services = [
    {
      id: 'landing-page',
      icon: Globe,
      title: t.items?.[0]?.title || 'Landing Page',
      description: t.items?.[0]?.description || 'Halaman promosi yang fokus mengkonversi pengunjung menjadi leads atau pembeli.',
      features: t.items?.[0]?.features || ['Desain modern', 'Mobile responsive', 'Fast loading', 'SEO ready'],
      timeline: t.items?.[0]?.timeline || '2-7 hari',
      color: 'blue'
    },
    {
      id: 'company-profile',
      icon: Building2,
      title: t.items?.[1]?.title || 'Company Profile',
      description: t.items?.[1]?.description || 'Website profesional untuk membangun kredibilitas dan kepercayaan bisnis Anda.',
      features: t.items?.[1]?.features || ['Multi halaman', 'CMS friendly', 'Contact form', 'Google Maps'],
      timeline: t.items?.[1]?.timeline || '1-2 minggu',
      color: 'violet'
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: t.items?.[2]?.title || 'E-Commerce',
      description: t.items?.[2]?.description || 'Toko online lengkap dengan pembayaran otomatis dan manajemen produk.',
      features: t.items?.[2]?.features || ['Katalog produk', 'Payment gateway', 'Dashboard admin', 'Laporan penjualan'],
      timeline: t.items?.[2]?.timeline || '2-4 minggu',
      color: 'emerald'
    },
    {
      id: 'pos-inventory',
      icon: Package,
      title: t.items?.[3]?.title || 'POS & Inventory',
      description: t.items?.[3]?.description || 'Sistem kasir dan manajemen stok untuk bisnis retail dan F&B.',
      features: t.items?.[3]?.features || ['Point of Sale', 'Stok otomatis', 'Laporan harian', 'Multi cabang'],
      timeline: t.items?.[3]?.timeline || '2-4 minggu',
      color: 'amber'
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    blue: {
      bg: 'hover:bg-blue-500/5',
      border: 'hover:border-blue-500/30',
      text: 'text-blue-500',
      iconBg: 'bg-blue-500/10'
    },
    violet: {
      bg: 'hover:bg-violet-500/5',
      border: 'hover:border-violet-500/30',
      text: 'text-violet-500',
      iconBg: 'bg-violet-500/10'
    },
    emerald: {
      bg: 'hover:bg-emerald-500/5',
      border: 'hover:border-emerald-500/30',
      text: 'text-emerald-500',
      iconBg: 'bg-emerald-500/10'
    },
    amber: {
      bg: 'hover:bg-amber-500/5',
      border: 'hover:border-amber-500/30',
      text: 'text-amber-500',
      iconBg: 'bg-amber-500/10'
    }
  };

  const scrollToPricing = (categoryId: string) => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to set active category
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('setPricingCategory', { detail: categoryId }));
      }, 500);
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeInUpVariants}
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            {t.badge || '🛠️ Layanan'}
          </motion.span>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {t.title || 'Apa yang Bisa Saya Bantu?'}
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-slate-400 text-lg"
          >
            {t.subtitle || 'Pilih jenis website atau sistem yang Anda butuhkan'}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];

            return (
              <motion.div
                key={service.id}
                variants={fadeInUpVariants}
                onClick={() => scrollToPricing(service.id)}
                className={`group relative p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 cursor-pointer transition-all duration-300 ${colors.bg} ${colors.border}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-5`}>
                  <Icon size={28} className={colors.text} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    ⏱️ {service.timeline}
                  </span>
                  <span className={`flex items-center gap-1 text-sm font-semibold ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    {t.viewPricing || 'Lihat Harga'} <ArrowRight size={16} />
                  </span>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm">
            {t.customNote || 'Butuh sesuatu yang custom? '}
            <a
              href="#contact"
              className="text-primary hover:underline"
            >
              {t.contactUs || 'Hubungi saya'}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
