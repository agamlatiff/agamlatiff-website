
import React, { useEffect } from 'react';
import { X, CheckCircle2, Star, Zap, AlertTriangle, TrendingUp, Lightbulb } from 'lucide-react';
import { PricingPlan } from '../../constants/pricing';
import { motion, AnimatePresence } from 'framer-motion';
import { WA_LINKS } from '../../constants';

interface PlanDetailModalProps {
  plan: PricingPlan | null;
  isOpen: boolean;
  onClose: () => void;
}

const PlanDetailModal: React.FC<PlanDetailModalProps> = ({ plan, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!plan) return null;

  const Icon = plan.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            onClick={onClose}
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200 dark:border-slate-800"
          >
            {/* Header */}
            <div className={`p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 relative overflow-hidden flex-shrink-0 ${plan.isPopular ? 'bg-indigo-50/50 dark:bg-indigo-900/10' : 'bg-white dark:bg-slate-900'}`}>
               
               {/* Background Decor for Header */}
               {plan.isPopular && <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>}

               {/* Close Button - Absolute Position */}
               <button 
                  onClick={onClose} 
                  className="absolute top-4 right-4 p-2 bg-slate-100/80 dark:bg-slate-800/80 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 rounded-full transition-colors z-20 backdrop-blur-sm"
               >
                  <X size={20} />
               </button>

               <div className="flex flex-col md:flex-row gap-5 items-start relative z-10 pr-8">
                  {/* Icon */}
                  <div className={`p-4 rounded-2xl flex-shrink-0 ${plan.isPopular ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300'}`}>
                      <Icon size={32} />
                  </div>

                  {/* Title & Price Info */}
                  <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{plan.name}</h2>
                          {plan.isPopular && (
                              <div className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-orange-200 dark:border-orange-500/30">
                                  <Star size={12} fill="currentColor" /> Unggulan
                              </div>
                          )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                         <span className="text-xl md:text-2xl font-bold text-primary">{plan.price}</span>
                         {plan.originalPrice && (
                            <span className="text-sm text-slate-400 line-through decoration-slate-400/50">{plan.originalPrice}</span>
                         )}
                      </div>

                      {/* Description moved to header for better context */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium pt-1">
                        {plan.description}
                      </p>
                  </div>
               </div>
            </div>
            
            {/* Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-slate-50/50 dark:bg-slate-950/50">
              
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Zap size={14} /> Bedah Fitur Lengkap:
              </h3>
              
              <div className="space-y-6">
                {plan.details && plan.details.length > 0 ? (
                    plan.details.map((detail, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
                            <CheckCircle2 size={18} className="text-primary" />
                            <h4 className="font-bold text-slate-900 dark:text-white text-base">{detail.feature}</h4>
                        </div>
                        
                        <div className="space-y-3">
                            {/* Problem */}
                            <div className="flex gap-3 items-start">
                                <div className="mt-0.5 text-red-500 flex-shrink-0">
                                    <AlertTriangle size={16} />
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">
                                    <span className="font-semibold text-red-600 dark:text-red-400 text-xs uppercase block mb-0.5">Masalah:</span>
                                    {detail.problem}
                                </div>
                            </div>

                            {/* Solution */}
                            <div className="flex gap-3 items-start">
                                <div className="mt-0.5 text-blue-500 flex-shrink-0">
                                    <Lightbulb size={16} />
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">
                                    <span className="font-semibold text-blue-600 dark:text-blue-400 text-xs uppercase block mb-0.5">Solusi Sistem:</span>
                                    {detail.solution}
                                </div>
                            </div>

                            {/* Benefit */}
                            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-900/10 p-2.5 rounded-lg border border-green-100 dark:border-green-900/30">
                                <div className="mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0">
                                    <TrendingUp size={16} />
                                </div>
                                <div className="text-sm text-slate-700 dark:text-slate-300">
                                    <span className="font-bold text-green-700 dark:text-green-400 text-xs uppercase block mb-0.5">Benefit Bisnis:</span>
                                    {detail.benefit}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <p className="text-sm text-slate-500 text-center py-4">Detail fitur lengkap sedang disiapkan.</p>
                )}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
               <a 
                href={WA_LINKS.pricing(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base shadow-xl transition-all transform hover:-translate-y-1 ${
                    plan.isPopular 
                    ? 'bg-gradient-to-r from-primary to-indigo-600 text-white hover:shadow-primary/30' 
                    : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'
                }`}
              >
                <Zap size={18} fill="currentColor" />
                Ambil Promo {plan.name} Sekarang
              </a>
              <div className="text-center mt-3 flex items-center justify-center gap-4 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                 <span className="flex items-center gap-1"><CheckCircle2 size={10} /> Garansi Bug & Support</span>
                 <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                 <span className="flex items-center gap-1"><CheckCircle2 size={10} /> Source Code Hak Milik</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PlanDetailModal;
