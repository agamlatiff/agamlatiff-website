'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles, Code2, Layers, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { PROJECTS } from '@/constants/projects';

// Order of projects to display
const PROJECT_ORDER = ['7', '5', '4', '1', '2', '3'];

// Color themes for different industries
const INDUSTRY_THEMES: Record<string, { accent: string; badge: string }> = {
  'Recruitment & HR Tech': { accent: 'from-violet-500 to-purple-600', badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
  'Travel & Tourism': { accent: 'from-cyan-500 to-blue-600', badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  'Education & Library': { accent: 'from-emerald-500 to-teal-600', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  'Education & EdTech': { accent: 'from-amber-500 to-orange-600', badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  'Logistics & Supply Chain': { accent: 'from-blue-500 to-indigo-600', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  'Logistik & Supply Chain': { accent: 'from-blue-500 to-indigo-600', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  'E-Commerce & Retail': { accent: 'from-rose-500 to-pink-600', badge: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
};

const Projects: React.FC = () => {
  const { translations } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const projectsTranslation = translations.projects;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalProjects = PROJECT_ORDER.length;

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalProjects]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
    setIsAutoPlaying(false);
  }, [totalProjects]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    setIsAutoPlaying(false);
  }, [totalProjects]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  const getTheme = (industry: string) => {
    return INDUSTRY_THEMES[industry] || {
      accent: 'from-primary to-violet-600',
      badge: 'bg-primary/20 text-primary border-primary/30'
    };
  };

  // Get current project data
  const currentProjectId = PROJECT_ORDER[currentIndex];
  const currentProject = PROJECTS.find(p => p.id === currentProjectId);
  const currentProjectTrans = projectsTranslation ? (projectsTranslation as any)[currentProjectId] : null;
  const currentTheme = currentProjectTrans ? getTheme(currentProjectTrans.industry) : getTheme('');

  // Get prev/next for preview
  const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
  const nextIndex = (currentIndex + 1) % totalProjects;
  const prevProject = PROJECTS.find(p => p.id === PROJECT_ORDER[prevIndex]);
  const nextProject = PROJECTS.find(p => p.id === PROJECT_ORDER[nextIndex]);
  const prevTrans = (projectsTranslation as any)[PROJECT_ORDER[prevIndex]];
  const nextTrans = (projectsTranslation as any)[PROJECT_ORDER[nextIndex]];

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[120px]"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary font-bold text-sm rounded-full mb-5 border border-primary/30"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={14} className="animate-pulse" />
            {projectsTranslation?.section?.title || 'Proven Results'}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            {projectsTranslation?.section?.heading || 'Case Studies & Portfolio'}
          </h2>
          <p className="text-slate-400 text-lg">
            {projectsTranslation?.section?.subtitle || 'Case studies on how custom systems help businesses run more efficiently and profitably.'}
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Featured Card - Large Horizontal Layout */}
          {currentProject && currentProjectTrans && (
            <motion.div
              key={currentProjectId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-64 sm:h-80 lg:h-[450px] overflow-hidden">
                  <motion.img
                    key={currentProject.heroImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    src={currentProject.heroImage}
                    alt={currentProjectTrans.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent lg:hidden" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.accent} opacity-10`} />

                  {/* Industry Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border backdrop-blur-md ${currentTheme.badge}`}>
                      <Layers size={14} />
                      {currentProjectTrans.industry}
                    </span>
                  </div>

                  {/* Project Number */}
                  <div className="absolute bottom-6 left-6 lg:hidden">
                    <span className="text-6xl font-black text-white/10">
                      {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                  {/* Project Number - Desktop */}
                  <div className="absolute top-8 right-8 hidden lg:block">
                    <span className="text-8xl font-black text-white/5">
                      {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <motion.div
                    key={`content-${currentProjectId}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                      {currentProjectTrans.title}
                    </h3>

                    <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-6 line-clamp-4">
                      {currentProjectTrans.shortDescription}
                    </p>

                    {/* Tech Stack / Features */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentProject?.techStack?.slice(0, 5).map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 rounded-full border border-slate-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={`/projects/${currentProject.slug}`}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${currentTheme.accent} text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}
                      >
                        <Eye size={18} />
                        {projectsTranslation?.section?.viewDetail || 'View Detail'}
                      </Link>

                      {currentProject?.liveLink && (
                        <a
                          href={currentProject?.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* Date */}
                  <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 text-slate-500">
                    <Code2 size={16} />
                    <span className="text-sm font-medium">{currentProjectTrans.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation & Thumbnails */}
          <div className="mt-8 flex items-center justify-center md:justify-between gap-4">
            {/* Prev Thumbnail */}
            <button
              onClick={goToPrev}
              className="group w-[280px] hidden md:flex items-center gap-4 p-3 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-slate-500 group-hover:text-white transition-colors flex-shrink-0" />
              {prevProject && prevTrans && (
                <>
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={prevProject.heroImage} alt={prevTrans.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Previous</p>
                    <p className="text-sm font-semibold text-white truncate">{prevTrans.title}</p>
                  </div>
                </>
              )}
            </button>

            {/* Center - Dots & Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-300 md:hidden"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {PROJECT_ORDER.map((id, index) => (
                  <button
                    key={id}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 
                      ${index === currentIndex
                        ? 'bg-primary w-10'
                        : 'bg-slate-700 hover:bg-slate-600 w-2.5'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all duration-300 md:hidden"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Next Thumbnail */}
            <button
              onClick={goToNext}
              className="group w-[280px] hidden md:flex items-center justify-end gap-4 p-3 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300"
            >
              {nextProject && nextTrans && (
                <>
                  <div className="text-right min-w-0">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Next</p>
                    <p className="text-sm font-semibold text-white truncate">{nextTrans.title}</p>
                  </div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={nextProject.heroImage} alt={nextTrans.title} className="w-full h-full object-cover" />
                  </div>
                </>
              )}
              <ChevronRight size={24} className="text-slate-500 group-hover:text-white transition-colors flex-shrink-0" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://wa.me/6285888050785?text=Hi%20Agam%2C%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-violet-600 text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Discuss Your Project
            <ExternalLink size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
