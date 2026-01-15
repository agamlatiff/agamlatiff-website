'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowRight, ExternalLink, Calendar, Code2 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { PROJECTS } from '@/constants/projects';

// Order of projects to display
const PROJECT_ORDER = ['7', '5', '4', '1', '2', '3'];

const Projects: React.FC = () => {
  const { translations } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const projectsTranslation = translations.projects;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            {projectsTranslation?.section?.title || 'Proven Results'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {projectsTranslation?.section?.heading || 'Case Studies & Portfolio'}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {projectsTranslation?.section?.subtitle || 'Case studies on how custom systems help businesses run more efficiently and profitably.'}
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECT_ORDER.map((id) => {
            const projectData = PROJECTS.find(p => p.id === id);
            const projectTrans = (projectsTranslation as any)[id];

            if (!projectData || !projectTrans) return null;

            return (
              <motion.div
                key={id}
                variants={itemVariants}
                className="group relative bg-[#0B1120] border border-slate-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              >
                <Link href={`/projects/${projectData.slug}`} className="flex flex-col h-full">
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                    <img
                      src={projectData.heroImage}
                      alt={projectTrans.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Static gradient for text legibility, no animation */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] to-transparent opacity-60" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 pt-4 flex flex-col grow">

                    {/* Title & Industry */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider flex justify-between items-center">
                        {projectTrans.industry || 'Development'}
                        <div className="bg-slate-900/50 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Code2 size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                        {projectTrans.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="grow mb-6">
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                        {projectTrans.shortDescription}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-6 border-t border-slate-800 flex items-center justify-between mt-auto">
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                        <Calendar size={14} />
                        {projectTrans.date || '2025'}
                      </span>

                      <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
                        {projectsTranslation?.section?.viewDetail || 'View Detail'}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
          <a
            href="https://wa.me/6285888050785"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-slate-800 hover:border-white pb-0.5"
          >
            Learn more about my work process <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
