
import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Calendar, Activity, Youtube } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  // Dynamic Grid Layout based on image count
  // If > 2 images (e.g. 3 or 4), force a 2-column grid (2x2 look).
  // If <= 2 images, use responsive behavior (stack on mobile, 1x2 on desktop).
  const galleryGridClass = (project.gallery?.length || 0) > 2 
    ? "grid grid-cols-2 gap-4" 
    : "grid grid-cols-1 sm:grid-cols-2 gap-4";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scale-up border border-slate-200 dark:border-slate-800">
        
        {/* Video / Hero Section - PRIORITIZED AT TOP */}
        <div className="relative bg-black flex-shrink-0 w-full group">
           {project.youtubeId ? (
             <div className="relative w-full aspect-video">
               <iframe 
                 className="absolute top-0 left-0 w-full h-full"
                 src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`} 
                 title={project.title}
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
             </div>
           ) : (
            <div className="relative h-48 sm:h-64 md:h-80">
                <img 
                    src={project.heroImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
           )}
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 p-2 rounded-full shadow-lg transition-all backdrop-blur-md z-20"
            aria-label="Tutup"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-white dark:bg-slate-900">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                 <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-primary text-xs font-bold rounded-full uppercase tracking-wide border border-indigo-100 dark:border-indigo-800">
                   {project.industry}
                 </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{project.title}</h2>
              
              <div 
                className="prose prose-slate dark:prose-invert max-w-none mb-8 text-slate-600 dark:text-slate-300 transition-colors leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.fullDescription }} 
              />
              
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors border-b border-slate-100 dark:border-slate-800 pb-2">Galeri Screenshot</h3>
                  <div className={galleryGridClass}>
                    {project.gallery.map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt={`Gallery ${idx + 1}`} 
                        className="rounded-xl border border-slate-200 dark:border-slate-700 w-full h-48 object-cover hover:opacity-90 transition-opacity cursor-pointer shadow-sm" 
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700 sticky top-0 transition-colors">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 transition-colors">Info Proyek</h4>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-primary">
                        <Calendar size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Tanggal</div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{project.date}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-primary">
                        <Activity size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Teknologi</div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-xs bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-2 py-1 rounded text-slate-600 dark:text-slate-300 transition-colors font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-primary/20"
                    >
                      <ExternalLink size={16} /> Kunjungi Website
                    </a>
                  )}
                  {project.repoLink && (
                    <a 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full gap-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 py-3 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <Github size={16} /> Lihat Kode Sumber
                    </a>
                  )}
                  {project.youtubeId && (
                     <a 
                       href={`https://www.youtube.com/watch?v=${project.youtubeId}`} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center justify-center w-full gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-red-600/20"
                     >
                       <Youtube size={16} /> Tonton di YouTube
                     </a>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
