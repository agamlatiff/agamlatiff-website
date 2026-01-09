import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowRight, Code2, Users, Zap, Award, CheckCircle2, TrendingUp, Handshake, MonitorPlay } from 'lucide-react';
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

  // Using dynamic content based on the new "Values" from translations
  // We map the first 3 values to the cards
  const STATS_ICONS = [TrendingUp, Zap, Handshake];
  const STATS_COLORS = [
    { accent: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/5' },
    { accent: 'text-violet-400', border: 'border-violet-500/20', bg: 'bg-violet-500/5' },
    { accent: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/5' }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl aspect-[4/5] group">
              <img
                src="/agam-photo.jpg"
                alt="Agam Latifullah - Full-Stack Developer specializing in booking systems and business automation"
                width={400}
                height={500}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Floating Review Badge */}

            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-500/20 rounded-full blur-[80px] -z-10" />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUpVariants}>
              <span className="inline-block px-4 py-1.5 text-sm font-bold tracking-widest uppercase text-blue-400 border border-blue-500/30 rounded-full bg-blue-500/10 mb-6">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase leading-tight">
                Building Stronger Brands <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  Driving Results!
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUpVariants} className="text-slate-400 text-lg leading-relaxed mb-8 space-y-6">
              <p dangerouslySetInnerHTML={{ __html: t('about.description1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.description2') }} />
            </motion.div>

            {/* Checklist Values */}
            <motion.div variants={fadeInUpVariants} className="space-y-4 mb-10">
              {translations.about.values.map((item: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUpVariants} className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="https://wa.me/6285888050785?text=Hi%20Agam%2C%20saya%20tertarik%20konsultasi."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#2563EB] text-white font-bold rounded-full shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2"
              >
                Book Consultation Call <ArrowRight size={20} />
              </a>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-slate-800" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold">
                  64+
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
