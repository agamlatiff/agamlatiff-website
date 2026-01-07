import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowRight, Code2, Users, Zap, Award, CheckCircle2, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t, translations } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const STATS_CARDS = [
    {
      label: 'Projects Delivered',
      value: '6+',
      desc: 'Booking & E-commerce Systems',
      icon: Code2,
      accent: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5'
    },
    {
      label: 'Client Satisfaction',
      value: '100%',
      desc: '5-Star Reviews & Repeat Orders',
      icon: Users,
      accent: 'text-violet-400',
      border: 'border-violet-500/20',
      bg: 'bg-violet-500/5'
    },
    {
      label: 'Support Guarantee',
      value: '1 Bln',
      desc: 'Free Maintenance & Bug Fixes',
      icon: Award,
      accent: 'text-amber-400',
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Profile Section Centered */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Tagline */}
          <motion.div variants={fadeInUpVariants} className="mb-8">
            <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-widest uppercase text-primary border border-primary/30 rounded-full bg-primary/10">
              WHO IS BEHIND THIS?
            </span>
          </motion.div>

          {/* Profile Photo with Growth Graph Decoration */}
          <div className="relative mb-10">
            {/* Growth Graph SVG Decoration Behind */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] -z-10 opacity-80" viewBox="0 0 300 150">
              <path d="M0,150 Q50,150 75,100 T150,80 T225,40 T300,0" fill="none" stroke="#10b981" strokeWidth="4" className="drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <circle cx="0" cy="150" r="4" fill="#10b981" />
              <circle cx="75" cy="100" r="4" fill="#10b981" />
              <circle cx="150" cy="80" r="4" fill="#10b981" />
              <circle cx="225" cy="40" r="4" fill="#10b981" />
              <circle cx="300" cy="0" r="4" fill="#10b981" />
            </svg>

            <motion.div
              variants={scaleVariants}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#1a1a1a] shadow-2xl overflow-hidden relative z-10 mx-auto"
            >
              <img
                src="/agam-photo.jpg"
                alt="Agam Latifullah"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 right-0 md:right-10 bg-[#1a1a1a] border border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp size={20} className="text-emerald-500" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400">Impact</p>
                <p className="text-sm font-bold text-white">Revenue ++</p>
              </div>
            </motion.div>
          </div>

          {/* Name & Role */}
          <motion.h2 variants={fadeInUpVariants} className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            AGAM LATIFULLAH
          </motion.h2>
          <motion.p variants={fadeInUpVariants} className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent mb-6">
            Revenue System Engineer
          </motion.p>
          <motion.p variants={fadeInUpVariants} className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('about.quote')}
          </motion.p>
        </motion.div>

        {/* 3 Value Cards (Reference Style) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {STATS_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUpVariants}
                className={`group relative p-8 rounded-3xl bg-[#111] border ${card.border} hover:bg-[#161616] transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-3xl" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={card.accent} />
                  </div>

                  <div className={`text-4xl font-bold ${card.accent} mb-2`}>
                    {card.value}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {card.label}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Marquee (Upgrade from plain list) */}
        <motion.div
          className="mt-20 pt-10 border-t border-slate-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">Powering Your Apps With</p>

          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'Midtrans'].map((tech, idx) => (
              <div key={idx} className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-sm font-medium hover:text-white hover:border-slate-700 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-4">
            <a
              href="https://wa.me/6285888050785?text=Hi%20Agam%2C%20saya%20tertarik%20untuk%20konsultasi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-violet-600 text-white font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all text-lg"
            >
              Konsultasi Gratis <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
