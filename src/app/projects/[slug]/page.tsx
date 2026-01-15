'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Briefcase,
  Layers,
  ArrowUpRight,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Layout
} from 'lucide-react';
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
        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
        >
          <X size={24} aria-hidden="true" />
        </button>

        <div className="flex-1 flex items-center justify-center p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20"
          >
            <ChevronLeft size={32} aria-hidden="true" />
          </button>

          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20"
          >
            <ChevronRight size={32} aria-hidden="true" />
          </button>
        </div>

        <div className="shrink-0 p-4 bg-black/50" onClick={(e) => e.stopPropagation()}>
          <div className="flex gap-2 justify-center overflow-x-auto max-w-4xl mx-auto pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={`shrink-0 w-16 h-10 md:w-20 md:h-12 rounded-md overflow-hidden border-2 transition-all ${idx === currentIndex
                  ? 'border-primary ring-2 ring-primary/50'
                  : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
              >
                <img src={img} alt="" width={80} height={48} loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="text-center text-white/60 text-sm mt-2">
            {currentIndex + 1} / {images.length} • Press ESC to close, Arrow keys to navigate
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Tech Stack Badge
const TechBadge: React.FC<{ tech: string }> = ({ tech }) => {
  const getColor = (t: string) => {
    const colors: Record<string, string> = {
      'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
      'React': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      'TypeScript': 'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/20',
      'Tailwind': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
      'Prisma': 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
      'PostgreSQL': 'bg-blue-800/10 text-blue-800 dark:text-blue-300 border-blue-800/20',
      'Laravel': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
      'MySQL': 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
      'Supabase': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    };

    for (const key of Object.keys(colors)) {
      if (t.toLowerCase().includes(key.toLowerCase())) {
        return colors[key];
      }
    }
    return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  };

  return (
    <span className={`px-3 py-1.5 rounded-full text-xs font-medium border ${getColor(tech)}`}>
      {tech}
    </span>
  );
};

// Related Project Card
const RelatedProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { translations } = useLanguage();
  const projectTranslations = translations.projects as Record<string, any>;
  const localizedProject = (typeof projectTranslations[project.id] === 'object' && projectTranslations[project.id] !== null)
    ? projectTranslations[project.id] as Record<string, any>
    : null;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={400}
          height={225}
          decoding="async"
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-primary font-medium">{project.industry}</span>
        <h4 className="font-bold text-slate-900 dark:text-white mt-1 group-hover:text-primary transition-colors line-clamp-1">
          {localizedProject?.title || project.title}
        </h4>
      </div>
    </Link>
  );
};

// Main Page Component
export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const router = useRouter();
  const { translations } = useLanguage();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const project = useMemo(() => {
    return PROJECTS.find(p => p.slug === slug);
  }, [slug]);

  const localizedProject = useMemo(() => {
    if (!project) return null;
    const projectTranslations = translations.projects as Record<string, any>;
    const content = projectTranslations[project.id];
    if (typeof content === 'object' && content !== null) {
      return content as Record<string, any>;
    }
    return null;
  }, [project, translations]);

  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return PROJECTS
      .filter(p => p.id !== project.id)
      .slice(0, 3);
  }, [project]);

  const allImages = useMemo(() => {
    if (!project) return [];
    const images = [project.heroImage];
    if (project.gallery?.length) {
      project.gallery.forEach(img => {
        if (img !== project.heroImage) images.push(img);
      });
    }
    return images;
  }, [project]);

  const handleNext = useCallback(() => {
    setCurrentImageIndex(prev => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex(prev => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const title = localizedProject?.title || project.title;
  const description = localizedProject?.fullDescription || project.fullDescription || project.shortDescription;

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

      <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-slate-950 pt-16 sm:pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary active:text-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm sm:text-base">Back to Portfolio</span>
          </button>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div className="space-y-4 w-full">
              <div
                className="hero-image-container relative w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 cursor-pointer shadow-xl border border-slate-200 dark:border-slate-700 select-none pb-0 mb-4"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  key={allImages[currentImageIndex]}
                  src={allImages[currentImageIndex]}
                  alt={`${title} - Screenshot ${currentImageIndex + 1} of ${allImages.length}`}
                  width={1200}
                  height={675}
                  loading={currentImageIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-auto aspect-video object-cover transition-opacity duration-300"
                />

                <div className="hidden md:flex absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors items-center justify-center">
                  <span className="opacity-0 hover:opacity-100 transition-opacity text-white font-medium bg-black/50 px-4 py-2 rounded-full text-sm">
                    Click to expand
                  </span>
                </div>

                <div className="flex md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
                  <span className="text-white font-medium bg-black/60 px-3 py-1.5 rounded-full text-xs backdrop-blur-sm">
                    Tap to expand
                  </span>
                </div>

                {allImages.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-2 pointer-events-none">
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                      className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}

                {allImages.length > 1 && (
                  <div className="absolute top-3 right-3 pointer-events-none">
                    <span className="text-white text-xs font-medium bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {currentImageIndex + 1}/{allImages.length}
                    </span>
                  </div>
                )}
              </div>

              {allImages.length > 1 && (
                <div className="relative">
                  <div className="flex gap-2 overflow-x-auto pb-2 pt-2 scrollbar-hide snap-x touch-pan-x">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all snap-start ${idx === currentImageIndex
                          ? 'border-primary ring-2 ring-primary/30 scale-105'
                          : 'border-slate-300 dark:border-slate-700 opacity-60 hover:opacity-100 active:opacity-100'
                          }`}
                      >
                        <img src={img} alt="" width={80} height={56} loading="lazy" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-bold rounded-full border border-primary/20">
                  {localizedProject?.industry || project.industry}
                </span>
                {project.isFeatured && (
                  <span className="px-2.5 sm:px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-500/20">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                {title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-primary" />
                  <span>{localizedProject?.industry || project.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span>{localizedProject?.date || project.date}</span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  <Layers size={14} className="sm:w-4 sm:h-4" />
                  <span>Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full pt-4 gap-3 max-w-full overflow-hidden">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-primary hover:bg-primary-hover active:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 text-sm sm:text-base break-words"
                  >
                    <ExternalLink size={20} className="shrink-0" />
                    <span className="truncate">View Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-primary pl-4">
                About This Project
              </h2>

              {/* Render Structured Content if Available */}
              {localizedProject?.details ? (
                <div className="space-y-16">

                  {/* Overview */}
                  <div className="prose prose-lg dark:prose-invert max-w-4xl">
                    <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                      {localizedProject.details.overview}
                    </p>
                  </div>

                  {/* Challenge vs Solution Grid */}
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Challenges */}
                    <div className="bg-red-50 dark:bg-red-900/10 rounded-3xl p-8 border border-red-100 dark:border-red-900/20">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                          <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {localizedProject.details.challengeTitle || 'The Challenge'}
                        </h3>
                      </div>
                      <div className="space-y-6">
                        {localizedProject.details.challenges?.map((item: any, idx: number) => (
                          <div key={idx} className="flex gap-4">
                            <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-xs mt-0.5">
                              {idx + 1}
                            </span>
                            <div>
                              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm md:text-base">
                                {item.title}
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions */}
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-900/20">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                          <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {localizedProject.details.solutionTitle || 'Our Solution'}
                        </h3>
                      </div>
                      <div className="space-y-6">
                        {localizedProject.details.solutions?.map((item: any, idx: number) => (
                          <div key={idx} className="flex gap-4">
                            <div className="shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm md:text-base">
                                {item.title}
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                      {localizedProject.details.featuresTitle || 'Key Features'}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {localizedProject.details.features?.map((item: any, idx: number) => (
                        <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors group">
                          <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 transition-transform">
                            <Layout size={24} />
                          </div>
                          <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                            {item.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                /* Fallback for projects without structured data */
                <div
                  className="prose prose-base md:prose-lg dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                    prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                    prose-strong:text-slate-900 dark:prose-strong:text-white
                    prose-li:text-slate-600 dark:prose-li:text-slate-300
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-xl prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </motion.div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/5 via-blue-500/5 to-violet-500/5 dark:from-primary/10 dark:via-blue-500/10 dark:to-violet-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                Butuh Project Serupa?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Saya siap membantu mewujudkan ide bisnis Anda menjadi solusi digital yang powerful. Mari diskusikan kebutuhan Anda!
              </p>
              <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/6281234567890?text=Hi%20Agam,%20saya%20tertarik%20dengan%20project%20serupa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Konsultasi Gratis
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01e490352a92e7beb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all hover:border-primary hover:text-primary"
                >
                  Lihat di Upwork
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  More Projects
                </h2>
                <Link
                  href="/#projects"
                  className="text-primary hover:text-primary-hover font-medium flex items-center gap-1 group"
                >
                  View All
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map(proj => (
                  <RelatedProjectCard key={proj.id} project={proj} />
                ))}
              </div>
            </motion.div>
          </section>
        )}
      </div>
    </>
  );
}
