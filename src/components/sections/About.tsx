import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import { PiRocketBold, PiShieldCheckBold, PiHeadsetBold, PiChartLineUpBold } from 'react-icons/pi';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t, translations } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Phosphor icons with different accent colors per card
  const VALUE_CARDS = [
    {
      icon: PiRocketBold,
      gradient: 'from-violet-500 to-purple-600',
      bgGlow: 'group-hover:shadow-violet-500/20',
      iconBg: 'bg-violet-500/10 group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-purple-600'
    },
    {
      icon: PiShieldCheckBold,
      gradient: 'from-emerald-500 to-teal-600',
      bgGlow: 'group-hover:shadow-emerald-500/20',
      iconBg: 'bg-emerald-500/10 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-600'
    },
    {
      icon: PiHeadsetBold,
      gradient: 'from-blue-500 to-cyan-600',
      bgGlow: 'group-hover:shadow-blue-500/20',
      iconBg: 'bg-blue-500/10 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-600'
    },
    {
      icon: PiChartLineUpBold,
      gradient: 'from-amber-500 to-orange-600',
      bgGlow: 'group-hover:shadow-amber-500/20',
      iconBg: 'bg-amber-500/10 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-600'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Photo + Intro */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Profile Photo */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Photo Container */}
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-xl">
                <img
                  src="/agam-photo.jpg"
                  alt="Agam Latifullah"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Decorative Badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 bg-primary text-white p-2.5 rounded-xl shadow-lg"
                animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Briefcase size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Intro Content */}
          <motion.div variants={fadeInUpVariants} className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              {t('about.title')}
            </h2>
            <p className="text-lg md:text-xl font-semibold text-primary mb-4">
              {t('about.subtitle')}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              {t('about.quote')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://wa.me/6285888050785?text=Hi%20Agam%2C%20saya%20tertarik%20untuk%20konsultasi%20tentang%20booking%20app."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl transition-all"
              >
                Konsultasi Gratis <ArrowRight size={18} />
              </a>
              <Link
                to="/#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Lihat Portfolio
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-12" />

        {/* Bottom Section: What You Get */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeInUpVariants} className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 mb-3 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
              {t('about.whyChooseMe')}
            </span>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t('about.description1') }} />
          </motion.div>

          {/* Value Cards Grid - 2x2 on desktop, stack on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {translations.about.values.map((item: any, idx: number) => {
              const cardConfig = VALUE_CARDS[idx];
              const Icon = cardConfig.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className={`group relative p-5 md:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-transparent hover:shadow-2xl ${cardConfig.bgGlow} transition-all duration-300 overflow-hidden`}
                >
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cardConfig.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                  <div className="absolute inset-[1px] rounded-2xl bg-slate-50 dark:bg-slate-800 -z-[5]" />

                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-14 h-14 rounded-xl ${cardConfig.iconBg} flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-current group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Note */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8 max-w-xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t('about.description2') }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
