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
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, plans, rows }) => {
  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex justify-center">
          <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
            <Check size={18} className="text-green-600 dark:text-green-400" strokeWidth={3} />
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

      <div className="overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="min-w-[800px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
            <div className="p-6 flex items-center">
              <span className="font-bold text-slate-900 dark:text-white text-lg">Fitur</span>
            </div>
            <div className="p-6 text-center border-l border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white text-lg block">{plans.basic}</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Starter</span>
            </div>
            <div className="p-6 text-center border-l border-slate-200 dark:border-slate-800 bg-primary/5 dark:bg-primary/10 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <span className="font-bold text-primary text-lg block">{plans.standard}</span>
              <span className="text-xs text-primary/80 uppercase tracking-wider font-semibold">Popular</span>
            </div>
            <div className="p-6 text-center border-l border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white text-lg block">{plans.pro}</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Ultimate</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <div className="p-4 md:p-6 flex items-center gap-2">
                  <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">{row.feature}</span>
                  {row.tooltip && (
                    <div className="group relative cursor-help">
                      <HelpCircle size={14} className="text-slate-400" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {row.tooltip}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center border-l border-slate-100 dark:border-slate-800">
                  {renderCell(row.basic)}
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center border-l border-slate-100 dark:border-slate-800 bg-primary/5 dark:bg-primary/5">
                  {renderCell(row.standard)}
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center border-l border-slate-100 dark:border-slate-800">
                  {renderCell(row.pro)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
