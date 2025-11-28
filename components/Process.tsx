
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
            Bagaimana Kita Bekerja Sama?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors">
            Saya menerapkan proses yang transparan dan terstruktur untuk memastikan proyek berjalan lancar dari ide hingga peluncuran.
          </p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-100 via-primary/30 to-indigo-100 dark:from-slate-800 dark:via-primary/30 dark:to-slate-800 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === PROCESS_STEPS.length - 1;
                return (
                <div key={step.id} className="flex flex-col items-center text-center group">
                    <div className="relative mb-6">
                        <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-primary/50 dark:group-hover:border-primary/50 transition-all duration-500 z-10 relative">
                             <Icon size={36} className="text-primary" strokeWidth={1.5} />
                             
                             {/* Step Number Badge */}
                             <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-slate-50 dark:border-slate-900">
                                {step.id}
                             </div>
                        </div>
                        
                        {/* Mobile Connecting Line (Vertical) */}
                         {!isLast && (
                            <div className="lg:hidden absolute top-full left-1/2 w-0.5 h-12 bg-slate-200 dark:bg-slate-700 -translate-x-1/2"></div>
                         )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors px-2">
                    {step.description}
                    </p>
                </div>
                );
            })}
            </div>
        </div>

        <div className="mt-16 text-center">
             <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors">
                Mulai konsultasi gratis sekarang <ArrowRight size={16} />
             </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
