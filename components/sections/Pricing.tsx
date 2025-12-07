import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Check,
  Eye,
  ShoppingCart,
  Store,
  Layout,
  Globe,
  Calendar,
  Plane,
  RefreshCw
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SERVICE_PRICING, PricingPlan } from '../../constants/pricing';
import { createWhatsAppLink } from '@/constants/whatsapp';
import ComparisonTable from '../ui/ComparisonTable';
import PlanDetailModal from '../ui/PlanDetailModal';
import {
  ECOMMERCE_COMPARISON,
  LANDING_PAGE_COMPARISON,
  POS_COMPARISON,
  COMPANY_PROFILE_COMPARISON
} from '../../constants/comparison';

const CATEGORIES = [
  { id: 'e-commerce', label: 'E-Commerce', icon: ShoppingCart },
  { id: 'pos-system', label: 'Kasir (POS)', icon: Store },
  { id: 'landing-page', label: 'Landing Page', icon: Layout },
  { id: 'company-profile', label: 'Company Profile', icon: Globe },
  { id: 'booking-system', label: 'Booking System', icon: Calendar },
  { id: 'travel-website', label: 'Tour & Travel', icon: Plane },
  { id: 'revamp-website', label: 'Revamp Web', icon: RefreshCw },
];

const Pricing: React.FC = () => {
  const { translations, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('e-commerce');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const activePackages = SERVICE_PRICING[activeCategory] || [];

  const getComparisonData = () => {
    // @ts-ignore
    const features = translations.pricingFeatures?.[activeCategory];

    if (features) {
      return {
        title: features.title,
        rows: features.rows,
        plans: { basic: 'Starter', standard: 'Growth', pro: 'Ultimate' }
      };
    }

    return null;
  };

  const comparisonData = getComparisonData();

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t('pricingSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('pricingSection.subtitle') }}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl overflow-x-auto max-w-full no-scrollbar">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${isActive
                    ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                >
                  <Icon size={16} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-8 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar items-start">
          <AnimatePresence mode="wait">
            {activePackages.map((plan, index) => {
              const Icon = plan.icon;
              // @ts-ignore
              const planTrans = translations.pricing?.[plan.id] || plan;
              const planName = planTrans.name || plan.name;
              const planDesc = planTrans.description || plan.description;
              const planFeatures = planTrans.features || plan.features;
              const planCta = planTrans.cta || plan.cta;

              return (
                <motion.div
                  key={`${activeCategory}-${plan.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-[85vw] md:w-auto md:max-w-none snap-center flex-shrink-0 relative rounded-2xl p-8 transition-all duration-300 flex flex-col h-full ${plan.isPopular
                    ? 'bg-white dark:bg-slate-900 border-2 border-primary shadow-2xl shadow-primary/10 scale-105 z-10'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl'
                    }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg whitespace-nowrap">
                      <Zap size={14} fill="currentColor" /> {t('pricingSection.popular')}
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${plan.isPopular ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{planName}</h3>

                    <div className="flex flex-col mb-3">
                      {plan.originalPrice && (
                        <span className="text-sm text-slate-400 line-through decoration-slate-400/80 mb-1">{plan.originalPrice}</span>
                      )}
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">{plan.price}</div>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {planDesc}
                    </p>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    {planFeatures.slice(0, 5).map((feat: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 ${plan.isPopular ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feat}</span>
                      </div>
                    ))}
                    {planFeatures.length > 5 && (
                      <div
                        onClick={() => setSelectedPlan(plan)}
                        className="pl-7 text-xs font-medium text-slate-400 dark:text-slate-500 italic cursor-pointer hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        + {planFeatures.length - 5} {translations.services.general.viewFeatures || "fitur lainnya..."}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mt-auto">
                    <a
                      href={createWhatsAppLink(t('whatsappMessages.pricing').replace('{plan}', planName))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full block text-center py-3.5 rounded-xl font-bold transition-all hover:-translate-y-1 ${plan.isPopular
                        ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 hover:shadow-xl'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                    >
                      {planCta}
                    </a>

                    <button
                      onClick={() => setSelectedPlan(plan)}
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-xl font-medium text-xs text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group/eye"
                    >
                      <Eye size={14} className="group-hover/eye:scale-110 transition-transform" />
                      {t('pricingSection.viewDetails')}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Swipe Hint */}
        <div className="md:hidden text-center mt-4 animate-pulse">
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            {t('common.swipeHint')}
          </span>
        </div>

        {/* Comparison Table */}
        {comparisonData && (
          <ComparisonTable
            key={activeCategory}
            title={comparisonData.title}
            plans={comparisonData.plans}
            rows={comparisonData.rows}
          />
        )}

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-2xl mx-auto hover:border-primary/20 transition-colors">
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <span dangerouslySetInnerHTML={{ __html: t('pricingSection.customApp') }} /> <br />
              <a href={createWhatsAppLink(t('whatsappMessages.general'))} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline inline-flex items-center gap-1 mt-2">
                {t('pricingSection.contactMe')} &rarr;
              </a>
            </p>
          </div>
        </div>

        {/* Modal Detail Paket */}
        <PlanDetailModal
          plan={selectedPlan}
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      </div>
    </section>
  );
};

export default Pricing;
