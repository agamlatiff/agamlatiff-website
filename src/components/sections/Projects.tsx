import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, PlayCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Example project data structure - you can replace this with API calls or more detailed data
const PROJECT_IMAGES: Record<string, string> = {
  '1': '/upskills/1.webp',
  '2': '/saturday/1.webp',
  '3': '/alizonstore/1.webp',
  '4': '/sukabaca/1.webp',
  '5': '/flyhigher/1.webp',
  '7': '/hiredio/1.webp',
};

const PROJECT_SLUGS: Record<string, string> = {
  '1': 'upskills',
  '2': 'saturday',
  '3': 'alizon-store',
  '4': 'suka-baca',
  '5': 'fly-higher',
  '7': 'hired-io',
};

const Projects: React.FC = () => {
  const { t, translations } = useLanguage();

  // Get project keys from translations
  const projectKeys = Object.keys(translations.projects).filter(
    (key) => !isNaN(Number(key))
  );

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            {t('projects.section.title')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
            {t('projects.section.heading')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {t('projects.section.subtitle')}
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => {
              document.getElementById('projects-slider')?.scrollBy({ left: -400, behavior: 'smooth' });
            }}
            className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Previous project"
          >
            <ArrowRight size={20} className="rotate-180" />
          </button>
          <button
            onClick={() => {
              document.getElementById('projects-slider')?.scrollBy({ left: 400, behavior: 'smooth' });
            }}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors"
            aria-label="Next project"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Projects Slider */}
        <div
          id="projects-slider"
          className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projectKeys.map((key) => {
            const project = (translations.projects as any)[key];
            if (!project || typeof project !== 'object') return null;

            return (
              <div
                key={key}
                className="group flex-shrink-0 w-[85vw] md:w-[450px] snap-center bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <img
                    src={PROJECT_IMAGES[key] || '/projects/placeholder.png'}
                    alt={`${project.title} - ${project.industry} project screenshot`}
                    width={450}
                    height={253}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Project';
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8 flex flex-col h-[220px]">
                  <div className="text-xs font-bold tracking-wider text-primary uppercase mb-3">
                    {project.industry}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {project.shortDescription}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      to={`/projects/${PROJECT_SLUGS[key] || key}`}
                      className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                      {t('projects.section.viewDetail')}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
