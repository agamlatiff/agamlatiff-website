
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, LayoutGrid, ShoppingBag, Truck, Activity, Calendar, PlayCircle } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('Semua');

  const industries = ['Semua', ...Array.from(new Set(PROJECTS.map(p => p.industry)))];
  
  const filteredProjects = filter === 'Semua' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.industry === filter);

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Semua':
        return <LayoutGrid size={16} />;
      case 'E-commerce':
        return <ShoppingBag size={16} />;
      case 'Logistik / SaaS':
        return <Truck size={16} />;
      case 'Kesehatan':
        return <Activity size={16} />;
      default:
        return <LayoutGrid size={16} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Project Pribadi</h2>
            <p className="text-slate-600 dark:text-slate-400 transition-colors text-lg">Koleksi project personal dan eksperimental yang saya bangun untuk mengasah skill dan mengeksplorasi teknologi baru.</p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  filter === ind 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 ring-2 ring-primary/20' 
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700'
                }`}
              >
                {getIndustryIcon(ind)}
                {ind}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={project.heroImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Play Icon Overlay to indicate Video - Only if ID exists */}
                {project.youtubeId && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <PlayCircle size={32} className="text-white fill-white/20" />
                      </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl transform translate-y-10 group-hover:translate-y-14 transition-all duration-300">
                     {project.youtubeId ? 'Tonton Demo' : 'Lihat Detail'} <ArrowUpRight size={16} />
                   </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded border border-indigo-100 dark:border-indigo-800/50">{project.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed transition-colors flex-1">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] rounded-md font-medium border border-slate-200 dark:border-slate-700 transition-colors">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] rounded-md font-medium border border-slate-200 dark:border-slate-700 transition-colors">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-4 text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1.5">
                    <Calendar size={14} className="text-slate-300 dark:text-slate-600" />
                    <span>{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
