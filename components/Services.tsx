
import React from 'react';
import { SERVICES } from '../constants';
import { Code, Layout, Smartphone, Check, ArrowRight, Sparkles, Presentation } from 'lucide-react';

const iconMap = {
  code: Code,
  layout: Layout,
  smartphone: Smartphone,
  consulting: Presentation
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Layanan Utama</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
            Solusi Digital untuk Bisnis Anda
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Saya tidak hanya menulis kode, tapi membangun sistem yang menyelesaikan masalah operasional bisnis Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Feature List - Simple & Clean */}
                <div className="space-y-3 mb-8">
                  {service.deliverables.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                  {service.deliverables.length > 4 && (
                    <div className="text-xs text-slate-400 pl-7 italic">
                      + {service.deliverables.length - 4} fitur lainnya...
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-slate-100 dark:bg-slate-800 mb-6"></div>

                {/* Footer: Price & Link */}
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wide">Mulai dari</div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{service.priceRange}</span>
                    <a 
                      href="#contact" 
                      className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-primary hover:border-primary hover:text-white transition-all"
                      aria-label={`Detail ${service.title}`}
                    >
                      <ArrowRight size={18} />
                    </a>
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

export default Services;
