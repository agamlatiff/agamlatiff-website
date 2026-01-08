import React from 'react';
import { Check, X, Minus, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ComparisonRow {
  feature: string;
  basic: boolean | string;
  standard: boolean | string;
  pro: boolean | string;
  tooltip?: string;
}

export interface ComparisonTableProps {
  title: string;
  plans: {
    basic: string;
    standard: string;
    pro: string;
  };
  rows: ComparisonRow[];
  activeTab?: 'basic' | 'standard' | 'pro';
  onTabChange?: (tab: 'basic' | 'standard' | 'pro') => void;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, plans, rows, activeTab, onTabChange }) => {
  const [activePlan, setActivePlan] = React.useState<'basic' | 'standard' | 'pro'>(activeTab || 'standard');

  React.useEffect(() => {
    if (activeTab) setActivePlan(activeTab);
  }, [activeTab]);

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex justify-center">
          <div className="bg-primary/10 dark:bg-primary/30 p-1 rounded-full">
            <Check size={18} className="text-primary dark:text-primary" strokeWidth={3} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
            <Minus size={18} className="text-slate-400" strokeWidth={3} />
          </div>
        </div>
      );
    }
    return <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{value}</span>;
  };

  return (
    <div className="w-full mt-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
      </div>

      {/* Mobile View (Tabbed List) */}
      <div className="md:hidden">
        {/* Sticky Tabs */}
        <div className="sticky top-20 z-30 bg-slate-50 dark:bg-slate-950 pb-4 pt-2">
          <div className="flex p-1.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            {(['basic', 'standard', 'pro'] as const).map((planKey) => {
              const isActive = activePlan === planKey;
              return (
                <button
                  key={planKey}
                  onClick={() => {
                    setActivePlan(planKey);
                    if (onTabChange) onTabChange(planKey);
                  }}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all duration-300 relative ${isActive
                    ? 'text-primary'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeComparisonTab"
                      className="absolute inset-0 bg-primary/5 dark:bg-primary/20 rounded-lg border border-primary/20 dark:border-primary/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-center leading-tight">
                    <span>{plans[planKey].replace('Paket ', '').replace(' Package', '')}</span>

                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature List for Active Plan */}
        <motion.div
          key={activePlan}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          {rows.map((row, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{row.feature}</span>
                {row.tooltip && (
                  <HelpCircle size={14} className="text-slate-400" />
                )}
              </div>
              <div className="text-right">
                {renderCell(row[activePlan])}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop View (Table) */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-6 text-left w-1/4">
                  <span className="font-bold text-slate-900 dark:text-white text-lg">Fitur</span>
                </th>
                <th className="p-6 text-center w-1/4 border-l border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-lg block">{plans.basic}</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Starter</span>
                </th>
                <th className="p-6 text-center w-1/4 border-l border-slate-200 dark:border-slate-800 bg-primary/5 dark:bg-primary/10 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                  <span className="font-bold text-primary text-lg block">{plans.standard}</span>
                  <span className="text-xs text-primary/80 uppercase tracking-wider font-semibold">Popular</span>
                </th>
                <th className="p-6 text-center w-1/4 border-l border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white text-lg block">{plans.pro}</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Ultimate</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {rows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-6 flex items-center gap-2">
                    <span className="text-base text-slate-700 dark:text-slate-300 font-medium">{row.feature}</span>
                    {row.tooltip && (
                      <div className="group relative cursor-help">
                        <HelpCircle size={14} className="text-slate-400" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          {row.tooltip}
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="p-6 text-center border-l border-slate-100 dark:border-slate-800">
                    {renderCell(row.basic)}
                  </td>
                  <td className="p-6 text-center border-l border-slate-100 dark:border-slate-800 bg-primary/5 dark:bg-primary/5">
                    {renderCell(row.standard)}
                  </td>
                  <td className="p-6 text-center border-l border-slate-100 dark:border-slate-800">
                    {renderCell(row.pro)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
