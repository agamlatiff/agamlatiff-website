import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Clock, CreditCard, History, LayoutDashboard, ExternalLink } from 'lucide-react';

const FEATURE_ICONS = [Clock, CreditCard, History, LayoutDashboard];

const BookingShowcase: React.FC = () => {
  const { t, translations } = useLanguage();

  const features = translations.bookingShowcase?.features || [];

  return (
    <section
      id="booking-showcase"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            {t('bookingShowcase.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
            {t('bookingShowcase.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {t('bookingShowcase.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Demo Preview */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
              {/* Browser Mockup */}
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-500 dark:text-slate-400 truncate ml-4">
                  booking-demo.vercel.app
                </div>
              </div>

              {/* App Screenshot Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-violet-500/20 flex items-center justify-center">
                <img
                  src="/flyhigher/1.webp"
                  alt="Booking App Demo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <a
                    href="https://booking-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20"
                  >
                    <ExternalLink size={20} />
                    {t('bookingShowcase.visitDemo')}
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-primary/30 animate-pulse">
              ✨ Live Demo
            </div>
          </div>

          {/* Right: Features */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Fitur Booking App
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t('bookingShowcase.projectDesc')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature: any, idx: number) => {
                const Icon = FEATURE_ICONS[idx] || Clock;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingShowcase;
