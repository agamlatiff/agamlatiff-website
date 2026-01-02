import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Youtube,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Briefcase,
  Layers,
  ArrowUpRight
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
  // Keyboard navigation
  useEffect(() => {
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
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
        >
          <X size={24} />
        </button>

        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20"
          >
            <ChevronLeft size={32} />
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
            className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex-shrink-0 p-4 bg-black/50" onClick={(e) => e.stopPropagation()}>
          <div className="flex gap-2 justify-center overflow-x-auto max-w-4xl mx-auto pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={`flex-shrink-0 w-16 h-10 md:w-20 md:h-12 rounded-md overflow-hidden border-2 transition-all ${idx === currentIndex
                  ? 'border-primary ring-2 ring-primary/50'
                  : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
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

// Tech Stack Badge with color coding
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
      'Supabase': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
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
    ? projectTranslations[project.id] as Record<string, string>
    : null;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
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
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { translations } = useLanguage();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Find project
  const project = useMemo(() => {
    return PROJECTS.find(p => p.slug === slug);
  }, [slug]);

  // Get localized content from translations object
  const localizedProject = useMemo(() => {
    if (!project) return null;
    const projectTranslations = translations.projects as Record<string, any>;
    const content = projectTranslations[project.id];
    if (typeof content === 'object' && content !== null) {
      return content as Record<string, string>;
    }
    return null;
  }, [project, translations]);


  // Related projects (same industry, excluding current)
  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return PROJECTS
      .filter(p => p.id !== project.id)
      .slice(0, 3);
  }, [project]);

  // Gallery images (hero + gallery)
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

  // Navigation handlers
  const handleNext = useCallback(() => {
    setCurrentImageIndex(prev => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex(prev => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  // Scroll to top on mount + SEO meta tags
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title and meta tags for SEO
    if (project) {
      const pageTitle = `${localizedProject?.title || project.title} | Agam Portfolio`;
      const pageDescription = localizedProject?.shortDescription || project.shortDescription;

      document.title = pageTitle;

      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageDescription);
      }

      // Update Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', pageTitle);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', pageDescription);

      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', window.location.origin + project.heroImage);
    }

    // Cleanup - restore default title when leaving
    return () => {
      document.title = 'Agam | Developer Solusi Bisnis UMKM';
    };
  }, [slug, project, localizedProject]);


  // 404 handling
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/"
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
      {/* Lightbox */}
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
        {/* Back button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary active:text-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm sm:text-base">Back to Portfolio</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">

            {/* Image Gallery */}
            <div className="space-y-4 w-full">
              {/* Main Image */}
              {/* Main Image Wrapper - REBUILT STRUCTURE */}
              <div
                className="hero-image-container relative w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 cursor-pointer shadow-xl border border-slate-200 dark:border-slate-700 select-none pb-0 mb-4"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  key={`img-${currentImageIndex}`}
                  src={allImages[currentImageIndex]}
                  alt={title}
                
                  style={{ maxWidth: '100%' }}
                />

                {/* Overlay on hover */}
                <div className="hidden md:flex absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors items-center justify-center">
                  <span className="opacity-0 hover:opacity-100 transition-opacity text-white font-medium bg-black/50 px-4 py-2 rounded-full text-sm">
                    Click to expand
                  </span>
                </div>

                {/* Mobile Hint */}
                <div className="flex md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
                  <span className="text-white font-medium bg-black/60 px-3 py-1.5 rounded-full text-xs backdrop-blur-sm">
                    Tap to expand
                  </span>
                </div>

                {/* Navigation arrows - Always visible on mobile */}
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

                {/* Counter */}
                {allImages.length > 1 && (
                  <div className="absolute top-3 right-3 pointer-events-none">
                    <span className="text-white text-xs font-medium bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {currentImageIndex + 1}/{allImages.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery - Scrollable on mobile */}
              {allImages.length > 1 && (
                <div className="relative">
                  <div className="flex gap-2 overflow-x-auto pb-2 pt-2 scrollbar-hide snap-x touch-pan-x">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all snap-start ${idx === currentImageIndex
                          ? 'border-primary ring-2 ring-primary/30 scale-105'
                          : 'border-slate-300 dark:border-slate-700 opacity-60 hover:opacity-100 active:opacity-100'
                          }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Industry Badge */}
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

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                {title}
              </h1>

              {/* Meta info */}
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

              {/* Tech Stack */}
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

              {/* Action Buttons */}
              <div className="flex flex-col w-full pt-4 gap-3 max-w-full overflow-hidden">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-primary hover:bg-primary-hover active:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 text-sm sm:text-base break-words"
                  >
                    <ExternalLink size={20} className="flex-shrink-0" />
                    <span className="truncate">View Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8">
                About This Project
              </h2>
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
            </motion.div>
          </div>
        </section>

        {/* Mini Contact CTA */}
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
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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

        {/* Related Projects */}
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
                  to="/#projects"
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
};

export default ProjectDetail;
