'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowUpRight, Lock, Play, ArrowRight, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { PROJECTS } from '@/constants/projects';
import type { Project } from '@/types/project';

// Order of projects: Flagship WMS & enterprise full-stack first
const PROJECT_ORDER = ['2', '7', '5', '3', '4', '1'];

// Curated highlights for each project
const PROJECT_HIGHLIGHTS: Record<string, { id: string[]; en: string[] }> = {
  '2': {
    id: ['⚡ Pelacakan Stok Real-time', '📦 Multi-Lokasi Gudang', '🛡️ Role-Based Access'],
    en: ['⚡ Real-time Stock Tracking', '📦 Multi-Warehouse Stock', '🛡️ Role-Based Access'],
  },
  '7': {
    id: ['📋 Kanban Pipeline Pelamar', '⚡ Next.js & Supabase', '🔍 Smart Filter Lowongan'],
    en: ['📋 Kanban Application Pipeline', '⚡ Next.js & Supabase', '🔍 Smart Job Filtering'],
  },
  '5': {
    id: ['✈️ Pemilihan Kursi Interaktif', '💳 Payment Gateway Midtrans', '🎫 E-Ticket Otomatis'],
    en: ['✈️ Interactive Seat Picker', '💳 Midtrans Payment Gateway', '🎫 Automated E-Ticket'],
  },
  '3': {
    id: ['🛍️ Belanja & Checkout Instan', '💳 Gateway Pembayaran', '📦 Manajemen Pesanan Terpusat'],
    en: ['🛍️ Instant Cart & Checkout', '💳 Payment Gateway', '📦 Centralized Order Management'],
  },
  '4': {
    id: ['📚 Katalog Buku Cerdas', '⏱️ Pelacakan Siklus Pinjam', '📊 Dashboard Admin Filament'],
    en: ['📚 Smart Book Catalog', '⏱️ Lending Cycle Tracking', '📊 Filament Admin Dashboard'],
  },
  '1': {
    id: ['🎓 Kursus Online Terstruktur', '📈 Pelacakan Progres Belajar', '⚡ Performa Cepat Redis'],
    en: ['🎓 Structured Courses', '📈 Learning Progress Tracking', '⚡ Fast Redis Performance'],
  },
};

const Projects: React.FC = () => {
  const { language, translations } = useLanguage();
  const isId = language === 'id';
  const projectsTranslation = translations.projects;

  // Prepare ordered project objects
  const orderedProjects: Project[] = PROJECT_ORDER.map(
    (id) => PROJECTS.find((p) => p.id === id)!
  ).filter(Boolean);

  const [activeProjectId, setActiveProjectId] = useState<string>(orderedProjects[0]?.id || '2');
  const projectRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Setup IntersectionObserver to track which project card is active during scroll
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-project-id');
          if (id) {
            setActiveProjectId(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.15,
    });

    orderedProjects.forEach((p) => {
      const el = projectRefs.current[p.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [orderedProjects]);

  // Smooth scroll to a specific project card
  const scrollToProject = (id: string) => {
    setActiveProjectId(id);
    const element = projectRefs.current[id];
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Helper to get official URL (live deployment or GitHub repository)
  const getProjectUrl = (p: Project) => {
    return p.liveLink || p.repoLink || `https://github.com/agamlatiff/${p.slug}`;
  };

  // Get active project data
  const activeIndex = orderedProjects.findIndex((p) => p.id === activeProjectId);
  const activeProject = orderedProjects[activeIndex] || orderedProjects[0];
  const activeProjectTrans = projectsTranslation ? (projectsTranslation as any)[activeProject.id] : null;

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#f4f5f7] dark:bg-[#09090b] border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xs text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isId ? 'PORTFOLIO // SELEKSI PROYEK' : 'PORTFOLIO // SELECTED WORKS'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-[-0.035em] leading-[1.1] mb-4">
            {projectsTranslation?.section?.heading || (isId ? 'Studi Kasus & Proyek Pilihan' : 'Featured Case Studies & Systems')}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
            {projectsTranslation?.section?.subtitle ||
              (isId
                ? 'Sistem manajemen operasional dan aplikasi web end-to-end dengan arsitektur bersih, performa tinggi, dan solusi bisnis nyata.'
                : 'Production-ready web applications and management systems built with clean architecture, high performance, and real business impact.')}
          </p>
        </div>

        {/* Sticky Split-Scroll Layout Container */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 items-start relative">

          {/* ======================================================== */}
          {/* LEFT COLUMN: Sticky Project Specs & Navigator            */}
          {/* ======================================================== */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24 xl:top-28">
            <div className="bg-white dark:bg-[#121215] rounded-2xl border border-zinc-200/90 dark:border-zinc-800 p-6 xl:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.95)] dark:shadow-none max-h-[calc(100vh-7rem)] overflow-y-auto flex flex-col justify-between">

              <div>
                {/* 1. Quick Project Switcher Navigator (Always Visible on Top) */}
                <div className="pb-4 mb-5 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      {isId ? 'NAVIGASI PROYEK' : 'PROJECT NAVIGATOR'}
                    </span>
                    <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(orderedProjects.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Clean Interactive Tabs */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {orderedProjects.map((p, idx) => {
                      const isCurrent = p.id === activeProjectId;
                      const shortName = p.title.split('-')[0].trim();

                      return (
                        <button
                          key={p.id}
                          onClick={() => scrollToProject(p.id)}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all text-left truncate ${isCurrent
                            ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold shadow-xs'
                            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/80'
                            }`}
                        >
                          <span className={`text-[10px] ${isCurrent ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-400'}`}>
                            {String(idx + 1).padStart(2, '0')}.
                          </span>
                          <span className="truncate">{shortName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Active Project Details & Specs */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col"
                  >
                    {/* Industry Pill (Clean, without PRJ index) */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700">
                        {activeProjectTrans?.industry || activeProject.industry}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl xl:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight leading-snug mb-2">
                      {activeProjectTrans?.title || activeProject.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal line-clamp-3">
                      {activeProjectTrans?.shortDescription || activeProject.shortDescription}
                    </p>

                    {/* Technical Stack Chips */}
                    <div className="mb-5">
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1.5">
                        SPEC // TECH STACK
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {activeProject.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-800/60 rounded border border-zinc-200/90 dark:border-zinc-700/80 shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      <Link
                        href={`/projects/${activeProject.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] active:scale-[0.98]"
                      >
                        <Eye size={13} />
                        <span>{isId ? 'Studi Kasus' : 'Case Study'}</span>
                      </Link>

                      {activeProject.liveLink ? (
                        <a
                          href={activeProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700/80 transition-all shadow-2xs active:scale-[0.98]"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={13} />
                        </a>
                      ) : activeProject.repoLink ? (
                        <a
                          href={activeProject.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700/80 transition-all shadow-2xs active:scale-[0.98]"
                        >
                          <FaGithub size={13} className="text-zinc-700 dark:text-zinc-300" />
                          <span>GitHub Repo</span>
                          <ArrowUpRight size={12} />
                        </a>
                      ) : null}

                      {activeProject.youtubeId && (
                        <a
                          href={`https://www.youtube.com/watch?v=${activeProject.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 text-xs font-medium rounded-lg border border-red-200 dark:border-red-900/60 hover:bg-red-100 dark:hover:bg-red-900/60 transition-all shadow-2xs active:scale-[0.98]"
                        >
                          <Play size={12} className="fill-red-600 text-red-600" />
                          <span>Video Demo</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Scrolling Visual Feed of Browser Mockups   */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-12 sm:gap-16">
            {orderedProjects.map((project, idx) => {
              const projectTrans = (projectsTranslation as any)?.[project.id];
              const title = projectTrans?.title || project.title;
              const shortDesc = projectTrans?.shortDescription || project.shortDescription;
              const industry = projectTrans?.industry || project.industry;
              const highlights = PROJECT_HIGHLIGHTS[project.id]?.[language] || [];
              const isCurrent = project.id === activeProjectId;
              const officialUrl = getProjectUrl(project);

              return (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  data-project-id={project.id}
                  ref={(el) => {
                    projectRefs.current[project.id] = el;
                  }}
                  className={`scroll-mt-28 rounded-2xl border transition-all duration-300 bg-white dark:bg-[#121215] overflow-hidden ${isCurrent
                    ? 'border-zinc-400/90 dark:border-zinc-600 shadow-[0_12px_36px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] dark:shadow-none ring-1 ring-zinc-300/40 dark:ring-zinc-700'
                    : 'border-zinc-200/90 dark:border-zinc-800 shadow-[0_1px_3px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.95)] dark:shadow-none hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                >
                  {/* Browser Window Chrome / Mockup Frame */}
                  <div className="bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200/80 dark:border-zinc-800 px-4 py-3 flex items-center justify-between">
                    {/* Traffic Lights (Mac style) */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400/90 shadow-2xs" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90 shadow-2xs" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 shadow-2xs" />
                    </div>

                    {/* Official Clickable Address Bar */}
                    <a
                      href={officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs text-[11px] font-mono text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors max-w-[260px] sm:max-w-xs truncate group/url"
                      title={officialUrl}
                    >
                      <Lock size={10} className="text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{officialUrl}</span>
                      <ArrowUpRight size={10} className="text-zinc-400 dark:text-zinc-500 group-hover/url:text-zinc-700 dark:group-hover/url:text-zinc-300 flex-shrink-0 ml-0.5" />
                    </a>

                    {/* Project Index Badge */}
                    <div className="font-mono text-[11px] font-semibold text-zinc-400 dark:text-zinc-500">
                      #{String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Browser Window Viewport: Clean High-Resolution Screenshot */}
                  <div className="relative aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 overflow-hidden group">
                    <img
                      src={project.heroImage}
                      alt={title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                    {/* Hover Overlay with View Detail Action */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center"
                    >
                      <div className="px-4 py-2 rounded-lg bg-white/95 dark:bg-zinc-900/95 text-zinc-950 dark:text-white text-xs font-semibold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <span>{isId ? 'Buka Detail Proyek' : 'Open Case Study'}</span>
                        <ArrowRight size={13} />
                      </div>
                    </Link>
                  </div>

                  {/* Architectural & Feature Highlight Chips */}
                  {highlights.length > 0 && (
                    <div className="px-4 sm:px-6 py-2.5 bg-zinc-50/90 dark:bg-zinc-900/50 border-t border-zinc-200/70 dark:border-zinc-800/70 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1 mr-1">
                        <Sparkles size={11} className="text-zinc-400 dark:text-zinc-500" />
                        Capabilities:
                      </span>
                      {highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700 px-2 py-0.5 rounded shadow-2xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Mobile-Only Details Panel (Collapses under the card on small screens) */}
                  <div className="lg:hidden p-5 sm:p-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700">
                        {industry}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{shortDesc}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/60 rounded border border-zinc-200/80 dark:border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-medium rounded-lg"
                      >
                        <Eye size={13} />
                        <span>{isId ? 'Studi Kasus' : 'Case Study'}</span>
                      </Link>

                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={13} />
                        </a>
                      ) : project.repoLink ? (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700"
                        >
                          <FaGithub size={13} />
                          <span>Repo</span>
                        </a>
                      ) : null}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
