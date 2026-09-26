'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Briefcase,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Layout,
  Mail,
  Play,
  Sparkles,
  Terminal,
  Code2,
  Lock,
  ArrowUpRight,
  Maximize2,
  BookOpen,
  Workflow,
  Receipt,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/constants/projects';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/types/project';

// Lightbox Component
const Lightbox: React.FC<{
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (idx: number) => void;
}> = ({ images, currentIndex, isOpen, onClose, onNext, onPrev, onSelectIndex }) => {
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col"
        onClick={onClose}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 text-white z-10 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main image container */}
        <div
          className="flex-1 flex items-center justify-center p-4 sm:p-8 relative select-none"
          onClick={(e) => e.stopPropagation()}
        >
          {images.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-4 sm:left-8 p-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/15 text-white transition-all backdrop-blur-md shadow-2xl z-10 hover:scale-105 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="relative max-w-6xl max-h-[75vh] w-full h-full flex items-center justify-center">
            <img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`Project screenshot ${currentIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>

          {images.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-4 sm:right-8 p-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/15 text-white transition-all backdrop-blur-md shadow-2xl z-10 hover:scale-105 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Thumbnails strip */}
        <div
          className="p-4 sm:p-5 bg-zinc-950/80 border-t border-white/10 overflow-x-auto scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-2.5 justify-center max-w-5xl mx-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={`relative shrink-0 w-16 h-11 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-white scale-105 shadow-lg shadow-white/10'
                    : 'border-white/15 opacity-40 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" width={80} height={56} loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Tech Stack Badge Component
const TechBadge: React.FC<{ tech: string }> = ({ tech }) => {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-zinc-900/90 text-zinc-300 border border-zinc-800/90 shadow-2xs hover:border-zinc-700 hover:text-white transition-all">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
      {tech}
    </span>
  );
};

// Feature Metadata for Asymmetrical Bento Grid
interface FeatureMeta {
  icon: React.ElementType;
  tag: string;
  accent: {
    badge: string;
    iconBg: string;
    border: string;
    glow: string;
    hairline: string;
    dot: string;
  };
}

const getFeatureMeta = (title: string, index: number): FeatureMeta => {
  const t = title.toLowerCase();

  if (t.includes('catalog') || t.includes('katalog') || t.includes('search') || t.includes('cari')) {
    return {
      icon: BookOpen,
      tag: 'CORE DISCOVERY',
      accent: {
        badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
        border: 'hover:border-cyan-500/40',
        glow: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
        hairline: 'via-cyan-400/40',
        dot: 'bg-cyan-400',
      },
    };
  }

  if (t.includes('wizard') || t.includes('loan') || t.includes('pipeline') || t.includes('seat') || t.includes('cart') || t.includes('inbound') || t.includes('course') || t.includes('booking')) {
    return {
      icon: Workflow,
      tag: 'INTERACTIVE FLOW',
      accent: {
        badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
        border: 'hover:border-amber-500/40',
        glow: 'from-amber-500/10 via-amber-500/5 to-transparent',
        hairline: 'via-amber-400/40',
        dot: 'bg-amber-400',
      },
    };
  }

  if (t.includes('fine') || t.includes('denda') || t.includes('payment') || t.includes('pembayaran') || t.includes('stripe') || t.includes('tiket') || t.includes('ticket') || t.includes('transfer')) {
    return {
      icon: Receipt,
      tag: 'AUTOMATED ENGINE',
      accent: {
        badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
        border: 'hover:border-emerald-500/40',
        glow: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
        hairline: 'via-emerald-400/40',
        dot: 'bg-emerald-400',
      },
    };
  }

  if (t.includes('admin') || t.includes('insight') || t.includes('analytic') || t.includes('laporan') || t.includes('tracking') || t.includes('progress') || t.includes('report') || t.includes('gudang')) {
    return {
      icon: BarChart3,
      tag: 'MANAGEMENT & METRICS',
      accent: {
        badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
        border: 'hover:border-purple-500/40',
        glow: 'from-purple-500/10 via-purple-500/5 to-transparent',
        hairline: 'via-purple-400/40',
        dot: 'bg-purple-400',
      },
    };
  }

  if (t.includes('member') || t.includes('user') || t.includes('role') || t.includes('akses') || t.includes('portal') || t.includes('mentor') || t.includes('pelamar') || t.includes('alert')) {
    return {
      icon: Users,
      tag: 'IDENTITY & ACCESS',
      accent: {
        badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
        iconBg: 'bg-sky-500/10 text-sky-400 border-sky-500/25',
        border: 'hover:border-sky-500/40',
        glow: 'from-sky-500/10 via-sky-500/5 to-transparent',
        hairline: 'via-sky-400/40',
        dot: 'bg-sky-400',
      },
    };
  }

  // Fallback palettes by index
  const fallbacks: FeatureMeta[] = [
    {
      icon: Sparkles,
      tag: 'CORE MODULE',
      accent: {
        badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
        border: 'hover:border-blue-500/40',
        glow: 'from-blue-500/10 via-blue-500/5 to-transparent',
        hairline: 'via-blue-400/40',
        dot: 'bg-blue-400',
      },
    },
    {
      icon: Zap,
      tag: 'AUTOMATION',
      accent: {
        badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
        border: 'hover:border-amber-500/40',
        glow: 'from-amber-500/10 via-amber-500/5 to-transparent',
        hairline: 'via-amber-400/40',
        dot: 'bg-amber-400',
      },
    },
    {
      icon: ShieldCheck,
      tag: 'SECURITY & CONTROL',
      accent: {
        badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
        border: 'hover:border-emerald-500/40',
        glow: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
        hairline: 'via-emerald-400/40',
        dot: 'bg-emerald-400',
      },
    },
    {
      icon: Layers,
      tag: 'DATA INFRASTRUCTURE',
      accent: {
        badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
        border: 'hover:border-purple-500/40',
        glow: 'from-purple-500/10 via-purple-500/5 to-transparent',
        hairline: 'via-purple-400/40',
        dot: 'bg-purple-400',
      },
    },
    {
      icon: UserCheck,
      tag: 'USER EXPERIENCE',
      accent: {
        badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
        iconBg: 'bg-sky-500/10 text-sky-400 border-sky-500/25',
        border: 'hover:border-sky-500/40',
        glow: 'from-sky-500/10 via-sky-500/5 to-transparent',
        hairline: 'via-sky-400/40',
        dot: 'bg-sky-400',
      },
    },
  ];

  return fallbacks[index % fallbacks.length];
};

// Main Page Component
export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const router = useRouter();
  const { translations, language } = useLanguage();
  const isId = language === 'id';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentProjectIndex = useMemo(() => {
    return PROJECTS.findIndex((p) => p.slug === slug);
  }, [slug]);

  const project = PROJECTS[currentProjectIndex];

  // Previous & Next navigation
  const prevProject = useMemo(() => {
    if (currentProjectIndex <= 0) return PROJECTS[PROJECTS.length - 1];
    return PROJECTS[currentProjectIndex - 1];
  }, [currentProjectIndex]);

  const nextProject = useMemo(() => {
    if (currentProjectIndex >= PROJECTS.length - 1) return PROJECTS[0];
    return PROJECTS[currentProjectIndex + 1];
  }, [currentProjectIndex]);

  const localizedProject = useMemo(() => {
    if (!project) return null;
    const projectTranslations = translations.projects as Record<string, any>;
    const content = projectTranslations[project.id];
    if (typeof content === 'object' && content !== null) {
      return content as Record<string, any>;
    }
    return null;
  }, [project, translations]);

  const allImages = useMemo(() => {
    if (!project) return [];
    const images = [project.heroImage];
    if (project.gallery?.length) {
      project.gallery.forEach((img) => {
        if (img !== project.heroImage) images.push(img);
      });
    }
    return images;
  }, [project]);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#09090b] px-4">
        <div className="text-center p-8 sm:p-12 linear-card rounded-2xl max-w-md w-full border border-zinc-800">
          <h1 className="text-3xl font-extrabold text-white mb-3 tracking-tight">Project Not Found</h1>
          <p className="text-zinc-400 mb-6 text-sm">Proyek yang Anda cari tidak ditemukan atau telah dipindahkan.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-950 font-semibold rounded-xl text-sm hover:bg-zinc-200 transition-all shadow-md active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    );
  }

  const title = localizedProject?.title || project.title;
  const description = localizedProject?.fullDescription || project.fullDescription || project.shortDescription;
  const officialUrl = project.liveLink || project.repoLink || `https://github.com/agamlatiff/${project.slug}`;

  return (
    <>
      <Lightbox
        images={allImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectIndex={setCurrentImageIndex}
      />

      <div className="min-h-screen w-full overflow-x-hidden bg-[#09090b] bg-grid-pattern pt-24 sm:pt-32 pb-24 text-zinc-100">
        
        {/* ========================================================================= */}
        {/* TOP HERO SECTION: Grand Case Study Header (Full Width Bento Aesthetic)   */}
        {/* ========================================================================= */}
        <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          
          {/* Breadcrumb Navigation Pill */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all shadow-2xs group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>{isId ? 'Kembali ke Semua Portofolio' : 'Back to All Projects'}</span>
            </Link>

            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider hidden sm:inline-block">
              CASE STUDY // #{project.id}
            </span>
          </div>

          {/* Meta Tags Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              {localizedProject?.industry || project.industry}
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-900/80 border border-zinc-800">
              <Briefcase size={12} className="text-zinc-400" />
              <span>{localizedProject?.date || project.date}</span>
            </span>

            {project.tags && project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-mono text-zinc-500 bg-zinc-900/40 border border-zinc-800/80"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Big Impactful Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.035em] leading-[1.12] mb-6">
            {title}
          </h1>

          {/* Lead Summary */}
          <p className="text-zinc-400 text-base sm:text-xl leading-relaxed max-w-4xl font-normal mb-8">
            {localizedProject?.shortDescription || project.shortDescription}
          </p>

          {/* Action Buttons Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-sm transition-all shadow-md active:scale-95"
              >
                <span>Kunjungi Live Demo</span>
                <ExternalLink size={15} />
              </a>
            )}

            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-zinc-800 hover:border-zinc-700 transition-all shadow-xs active:scale-95"
              >
                <FaGithub size={15} className="text-zinc-300" />
                <span>GitHub Repository</span>
                <ArrowUpRight size={13} className="text-zinc-500" />
              </a>
            )}

            {project.youtubeId && (
              <a
                href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-950/40 hover:bg-red-900/50 text-red-300 font-medium text-sm border border-red-900/50 transition-all shadow-xs active:scale-95"
              >
                <Play size={13} className="fill-red-400 text-red-400" />
                <span>Tonton Video Walkthrough</span>
              </a>
            )}
          </div>

        </header>

        {/* ========================================================================= */}
        {/* HERO SHOWCASE: Browser Mockup Viewport with Ambient Glow                  */}
        {/* ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="relative group/mockup">
            
            {/* Ambient Background Glow Effect */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-emerald-600/10 rounded-3xl blur-2xl opacity-70 pointer-events-none transition-opacity duration-500 group-hover/mockup:opacity-100" />

            {/* Browser Mockup Window */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#121215] shadow-2xl">
              
              {/* Browser Header Chrome */}
              <div className="bg-zinc-900/90 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-2xs" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-2xs" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-2xs" />
                </div>

                {/* Clickable Address Bar */}
                <a
                  href={officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors max-w-xs sm:max-w-sm truncate group/url"
                >
                  <Lock size={10} className="text-emerald-500 shrink-0" />
                  <span className="truncate">{officialUrl}</span>
                  <ArrowUpRight size={10} className="text-zinc-500 group-hover/url:text-zinc-300 shrink-0 ml-0.5" />
                </a>

                {/* Lightbox Trigger & Counter */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white px-2 py-0.5 rounded hover:bg-zinc-800 transition-colors"
                  title="Buka Layar Penuh"
                >
                  <Maximize2 size={12} />
                  <span>{currentImageIndex + 1}/{allImages.length}</span>
                </button>
              </div>

              {/* Main Image Viewport */}
              <div
                className="relative aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer select-none group/img"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  key={allImages[currentImageIndex]}
                  src={allImages[currentImageIndex]}
                  alt={`${title} Preview ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.015]"
                />

                {/* Click To Expand Badge Overlay */}
                <div className="absolute bottom-4 right-4 bg-zinc-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-800 text-xs font-mono font-medium text-zinc-200 shadow-xl opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1.5">
                  <Maximize2 size={12} />
                  <span>Klik untuk zoom fullscreen</span>
                </div>
              </div>

              {/* Interactive Thumbnail Carousel Strip */}
              {allImages.length > 1 && (
                <div className="p-3 sm:p-4 bg-zinc-950/80 border-t border-zinc-800/80 overflow-x-auto scrollbar-hide">
                  <div className="flex gap-2.5 items-center">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? 'border-white scale-105 shadow-md shadow-white/10 ring-2 ring-white/20'
                            : 'border-zinc-800 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" width={96} height={64} loading="lazy" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BENTO GRID: Overview & Tech Stack Breakdown                               */}
        {/* ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Overview Card (7 cols) */}
            <div className="lg:col-span-7 linear-card rounded-2xl p-6 sm:p-8 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-zinc-400">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                    <Code2 size={16} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-400">
                    OVERVIEW ARSITEKTUR // SYSTEM SCOPE
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
                  {isId ? 'Tujuan & Lingkup Rekayasa' : 'Project Mission & Engineering Scope'}
                </h2>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                  {localizedProject?.details?.overview || description}
                </p>
              </div>

              {/* System Attributes */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-zinc-800/80">
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    Role & Tanggung Jawab
                  </span>
                  <span className="text-sm font-semibold text-zinc-200">
                    {localizedProject?.details?.role || 'Full-Stack Developer'}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    Status Deployment
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Tech Stack Card (5 cols) */}
            <div className="lg:col-span-5 linear-card rounded-2xl p-6 sm:p-8 border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-zinc-400">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                    <Terminal size={16} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-400">
                    CORE TECH STACK
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {isId ? 'Teknologi & Tooling' : 'Technologies & Tooling'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  {isId
                    ? 'Ekosistem teknologi terkurasi untuk memastikan performa tinggi, skalabilitas, dan stabilitas operasional.'
                    : 'Curated stack chosen to maximize rendering performance, type-safety, and operational scalability.'}
                </p>

                {/* Tech Badges Cloud */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} />
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Total Modules: {project.techStack.length} tools</span>
                <span className="text-blue-400">Clean Architecture</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* ENGINEERING DEEP-DIVE: Challenge vs Engineering Solution                 */}
        {/* ========================================================================= */}
        {localizedProject?.details && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                PROBLEM // ENGINEERING RESOLUTION
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {isId ? 'Tantangan Masalah & Solusi Rekayasa' : 'Challenges & Engineering Solutions'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Challenge Column */}
              <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-rose-950/20 to-zinc-950/60 border border-rose-900/30 relative overflow-hidden">
                <div className="flex items-center gap-2.5 mb-6 text-rose-400">
                  <div className="w-8 h-8 rounded-lg bg-rose-950/50 border border-rose-900/60 flex items-center justify-center">
                    <AlertTriangle size={16} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {localizedProject.details.challengeTitle || 'Tantangan Masalah Nyata'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {localizedProject.details.challenges?.map((item: any, idx: number) => (
                    <div key={idx} className="flex gap-3.5 p-3 rounded-xl bg-zinc-900/40 border border-rose-900/20">
                      <span className="shrink-0 w-6 h-6 rounded-md bg-rose-950/80 border border-rose-800/60 text-rose-300 flex items-center justify-center font-mono font-bold text-xs mt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-bold text-zinc-100 text-sm tracking-tight">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Column */}
              <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-emerald-950/20 to-zinc-950/60 border border-emerald-900/30 relative overflow-hidden">
                <div className="flex items-center gap-2.5 mb-6 text-emerald-400">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-900/60 flex items-center justify-center">
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {localizedProject.details.solutionTitle || 'Solusi Rekayasa Sistem'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {localizedProject.details.solutions?.map((item: any, idx: number) => (
                    <div key={idx} className="flex gap-3.5 p-3 rounded-xl bg-zinc-900/40 border border-emerald-900/20">
                      <div className="shrink-0 w-6 h-6 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 flex items-center justify-center text-xs mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-100 text-sm tracking-tight">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* KEY FEATURES BENTO: Asymmetrical 6-Col Grid with Themed Glowing Cards     */}
        {/* ========================================================================= */}
        {localizedProject?.details?.features && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                  SYSTEM MODULES // HIGHLIGHTS
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {localizedProject.details.featuresTitle || (isId ? 'Fitur Unggulan Sistem' : 'Core System Capabilities')}
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block">
                {localizedProject.details.features.length} Modular Capabilities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
              {localizedProject.details.features.map((item: any, idx: number) => {
                const total = localizedProject.details.features.length;
                const isHero = total === 5 ? idx < 2 : idx === 0;
                const colSpan = total === 5
                  ? (idx < 2 ? 'md:col-span-3' : 'md:col-span-2')
                  : total === 4
                  ? 'md:col-span-3'
                  : 'md:col-span-2';

                const meta = getFeatureMeta(item.title, idx);
                const IconComponent = meta.icon;

                return (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#121215] p-6 sm:p-7 transition-all duration-300 group ${meta.accent.border} hover:-translate-y-1 hover:shadow-2xl ${colSpan} flex flex-col justify-between`}
                  >
                    {/* Top hairline border glow on hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${meta.accent.hairline} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Subtle ambient hover glow */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-br ${meta.accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                    />

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        {/* Top bar with Icon, Tag, and Index */}
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-xs ${meta.accent.iconBg}`}
                            >
                              <IconComponent size={19} />
                            </div>
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${meta.accent.badge}`}
                            >
                              <span className={`w-1 h-1 rounded-full ${meta.accent.dot} animate-pulse`} />
                              {meta.tag}
                            </span>
                          </div>

                          <span className="text-xs font-mono font-semibold text-zinc-600 group-hover:text-zinc-400 transition-colors">
                            #{String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`font-bold text-white tracking-tight mb-2.5 transition-colors ${
                            isHero ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                          }`}
                        >
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom capability indicator for hero cards */}
                      {isHero && (
                        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                          <span className="flex items-center gap-1.5 text-zinc-400">
                            <Sparkles size={11} className={meta.accent.dot.replace('bg-', 'text-')} />
                            <span>Core System Module</span>
                          </span>
                          <span className="text-zinc-500 font-medium">Production Tested</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* VIDEO WALKTHROUGH SECTION: If YouTube Demo Exists                         */}
        {/* ========================================================================= */}
        {project.youtubeId && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 block mb-2">
                LIVE RECORDING // DEMO WALKTHROUGH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {isId ? 'Video Demonstrasi & Alur Operasional' : 'Live Video Demonstration & Workflow'}
              </h2>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0`}
                title={`${title} Video Walkthrough`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* COMPLETE UI GALLERY GRID: Clickable Screenshots Explorer                  */}
        {/* ========================================================================= */}
        {allImages.length > 1 && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                  GALLERY // SCREENSHOT EXPLORER
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {isId ? 'Eksplorasi Antarmuka Sistem' : 'System Interface Gallery'}
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {allImages.length} Screenshots
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {allImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentImageIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer select-none"
                >
                  <img
                    src={img}
                    alt={`${title} Preview ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-2 rounded-full bg-white/90 text-zinc-950 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* PREV & NEXT PROJECT NAVIGATOR                                             */}
        {/* ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="border-t border-b border-zinc-800/80 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Prev Project */}
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group p-5 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white shrink-0 transition-colors">
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                  {isId ? 'Proyek Sebelumnya' : 'Previous Project'}
                </span>
                <h4 className="font-bold text-zinc-200 group-hover:text-white transition-colors truncate text-sm sm:text-base">
                  {prevProject.title.split('-')[0].trim()}
                </h4>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-5 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all flex items-center justify-between gap-4"
            >
              <div className="overflow-hidden">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                  {isId ? 'Proyek Selanjutnya' : 'Next Project'}
                </span>
                <h4 className="font-bold text-zinc-200 group-hover:text-white transition-colors truncate text-sm sm:text-base">
                  {nextProject.title.split('-')[0].trim()}
                </h4>
              </div>
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white shrink-0 transition-colors">
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* HIGH-IMPACT CONVERSION CTA: Discuss Architecture or Roles                 */}
        {/* ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-zinc-800 bg-gradient-to-b from-[#121215] to-[#09090b] text-center shadow-2xl">
            
            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 mb-4">
                <Sparkles size={12} />
                <span>Open for Opportunities & Collaborations</span>
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight leading-snug">
                {isId
                  ? 'Tertarik Membahas Arsitektur Sistem atau Peluang Karier?'
                  : 'Interested in Discussing System Architecture or Roles?'}
              </h3>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                {isId
                  ? 'Saya siap membantu merancang solusi perangkat lunak skala produksi atau bergabung sebagai Full-Stack Software Engineer di tim teknologi Anda.'
                  : 'I am ready to engineer scalable production software or join your engineering team as a Full-Stack Software Engineer.'}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95"
                >
                  <Mail size={16} />
                  <span>{isId ? 'Hubungi Saya Sekarang' : 'Get in Touch'}</span>
                </Link>
                <Link
                  href="/#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm rounded-xl transition-all shadow-xs"
                >
                  <span>{isId ? 'Kembali ke Beranda' : 'Explore All Works'}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
