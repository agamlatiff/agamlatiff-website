
import React from 'react';
import { POS_PACKAGES } from '../constants';
import { Check, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Paket Spesialis POS & Inventory
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Pilih solusi sistem yang sesuai dengan tahapan bisnis Anda saat ini. Semua paket bersifat <strong>Investasi Sekali Bayar (One-time Payment)</strong> dengan Source Code menjadi hak milik Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {POS_PACKAGES.map((plan) => {
            const Icon = plan.icon;
            return (
              <div 
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col h-full ${
                  plan.isPopular 
                    ? 'bg-white dark:bg-slate-900 border-2 border-primary shadow-2xl shadow-primary/10 scale-105 z-10' 
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg whitespace-nowrap">
                    <Zap size={14} fill="currentColor" /> Paling Diminati
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    plan.isPopular ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{plan.price}</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 ${plan.isPopular ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/6285922430828?text=Halo%20Mas%20Agam,%20saya%20tertarik%20dengan%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3.5 rounded-xl font-bold transition-all ${
                    plan.isPopular
                      ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400">
                Mencari jasa pembuatan <strong>Website Company Profile</strong> atau <strong>Landing Page</strong>? <br className="md:hidden" />
                <a href="#contact" className="text-primary font-bold hover:underline ml-1">Hubungi saya</a> untuk penawaran terpisah.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
