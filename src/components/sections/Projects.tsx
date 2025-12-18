
import React, { useState } from 'react';
import { ArrowUpRight, PlayCircle, Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProjectModal from '@/components/ui/ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/types/project';
import { PROJECTS } from '@/constants/projects';

// Separate Card Component to handle individual state
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const { translations } = useLanguage();
  const allImages = [project.heroImage, ...(project.gallery || [])];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 cursor-pointer flex flex-col h-full hover:-translate-y-2"
      onClick={onClick}
    >
      {/* Badge Featured */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
        {project.isFeatured && (
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border-2 border-white/20 backdrop-blur-md">
            <Star size={12} fill="currentColor" />
            <span>Featured</span>
          </div>
        )}
      </div>


      {/* Image Container - Aspect Ratio 4:3 for better visibility */}
      <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden group-hover:first:scale-105 transition-transform duration-700">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImgIndex}
            src={allImages[currentImgIndex]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>

        {/* Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Video Icon if exists */}
        {project.youtubeId && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl">
              <PlayCircle size={32} className="text-white fill-white/20" />
            </div>
          </div>
        )}

        {/* Navigation Arrows for Gallery */}
        {!project.youtubeId && allImages.length > 1 && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white shadow-lg pointer-events-auto hover:scale-110 transition-transform"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white shadow-lg pointer-events-auto hover:scale-110 transition-transform"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1 relative bg-white dark:bg-slate-900">
        {/* Floating Action Button */}
        <div className="absolute -top-6 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
          <ArrowUpRight size={20} />
        </div>

        <div className="mb-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-lg">
            {project.industry}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-500 dark:text-slate-500 group-hover:text-primary transition-colors">
            {project.date}
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:gap-3 transition-all">
            {translations.projects.section.viewDetail} <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { translations } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4"
            >
              <Star size={12} />
              <span>Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
              {translations.projects.section.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              {translations.projects.section.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Grid Layout: 1 Col Mobile -> 2 Col Tablet -> 3 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PROJECTS.map((project, index) => {
            const tProject = translations.projects[project.id as keyof typeof translations.projects];
            const mergedProject = { ...project, ...tProject };

            return (
              <ProjectCard
                key={project.id}
                project={mergedProject}
                onClick={() => setSelectedProject(mergedProject)}
              />
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
