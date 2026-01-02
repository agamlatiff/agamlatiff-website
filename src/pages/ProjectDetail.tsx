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
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
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
      <div className="aspect-video overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 md:pt-24">
        {/* Back button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer group shadow-xl"
                onClick={() => setLightboxOpen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={allImages[currentImageIndex]}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium bg-black/50 px-4 py-2 rounded-full text-sm">
                    Click to expand
                  </span>
                </div>

                {/* Navigation arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </motion.div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex
                        ? 'border-primary ring-2 ring-primary/30'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Industry Badge */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full border border-primary/20">
                  {localizedProject?.industry || project.industry}
                </span>
                {project.isFeatured && (
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-500/20">
                    ⭐ Featured Project
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
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
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <Layers size={16} />
                  <span>Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <ExternalLink size={18} />
                    View Live Demo
                  </a>
                )}
                {project.youtubeId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-600/25 hover:-translate-y-0.5"
                  >
                    <Youtube size={18} />
                    Watch Demo Video
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
                About This Project
              </h2>
              <div
                className="prose prose-lg prose-slate dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                  prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                  prose-strong:text-slate-900 dark:prose-strong:text-white
                  prose-li:text-slate-600 dark:prose-li:text-slate-300
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </motion.div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
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
