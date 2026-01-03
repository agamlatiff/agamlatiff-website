import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, CreditCard, History, BarChart3, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const BookingShowcase: React.FC = () => {
  const { t, translations } = useLanguage();

  const features = [
    {
      icon: CalendarCheck,
      title: translations.bookingShowcase?.features?.[0]?.title || 'Reservasi 24/7',
      desc: translations.bookingShowcase?.features?.[0]?.desc || 'Pelanggan bisa booking kapan saja, sistem selalu tersedia.'
    },
    {
      icon: CreditCard,
      title: translations.bookingShowcase?.features?.[1]?.title || 'Pembayaran DP Otomatis',
      desc: translations.bookingShowcase?.features?.[1]?.desc || 'Integrasi payment gateway untuk DP langsung.'
    },
    {
      icon: History,
      title: translations.bookingShowcase?.features?.[2]?.title || 'Riwayat Booking',
      desc: translations.bookingShowcase?.features?.[2]?.desc || 'Akses histori pemesanan kapan saja dengan mudah.'
    },
    {
      icon: BarChart3,
      title: translations.bookingShowcase?.features?.[3]?.title || 'Dashboard Lengkap',
      desc: translations.bookingShowcase?.features?.[3]?.desc || 'Pantau semua reservasi dari satu tempat.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
            {t('bookingShowcase.badge') || 'Live Demo'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('bookingShowcase.title') || 'Lihat Booking App Beraksi'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t('bookingShowcase.subtitle') || 'Contoh nyata sistem booking yang sudah berjalan dan digunakan oleh bisnis.'}
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Featured Project Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Featured Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
              <span className="w-2 h-2 bg-amber-900 rounded-full animate-pulse"></span>
              Featured Project
            </div>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-2xl">
              <img
                src="/flyhigher/1.webp"
                alt="Fly Higher - Booking App Demo"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <Link
                  to="/projects/fly-higher"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <Play size={18} /> Lihat Detail Project
                </Link>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Project Info & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
              Travel & Tourism
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Fly Higher - Flight Booking Platform
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {t('bookingShowcase.projectDesc') || 'Platform pemesanan tiket pesawat dengan fitur lengkap: pencarian real-time, pemilihan kursi interaktif, pembayaran otomatis, dan e-ticket dengan QR Code.'}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js 14', 'TypeScript', 'Prisma', 'Midtrans'].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://fly-higher.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
              >
                Lihat Demo Live <ArrowRight size={18} />
              </a>
              <Link
                to="/projects/fly-higher"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Pelajari Case Study
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default BookingShowcase;
