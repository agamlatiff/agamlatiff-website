
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const RoiCalculator: React.FC = () => {
  const [dailyRevenue, setDailyRevenue] = useState(2000000);
  const [errorRate, setErrorRate] = useState(5); // Persen kebocoran/human error
  
  const [monthlyLoss, setMonthlyLoss] = useState(0);
  const [yearlySaved, setYearlySaved] = useState(0);

  useEffect(() => {
    // Logic: Kebocoran (stok hilang, salah hitung, kembalian salah) x Omzet
    // Sistem POS mengurangi error rate ini secara drastis.
    
    const lossPerDay = dailyRevenue * (errorRate / 100);
    const lossPerMonth = lossPerDay * 30;
    
    setMonthlyLoss(lossPerMonth);
    setYearlySaved(lossPerMonth * 12);
  }, [dailyRevenue, errorRate]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <section id="roi-calculator" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 dark:bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 dark:bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-indigo-500/20 border border-slate-200 dark:border-indigo-500/30 text-primary dark:text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Calculator size={14} />
              <span>Simulasi Kebocoran Stok</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900 dark:text-white transition-colors">
              Berapa Uang yang Hilang Karena <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Inventory Shrinkage?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed transition-colors">
              Barang hilang di gudang, salah hitung kembalian, dan pencatatan manual adalah musuh profit. 
              Gunakan kalkulator ini untuk melihat potensi uang yang bisa Anda <strong>selamatkan</strong> dengan Sistem POS & Inventory.
            </p>
            
            <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-none transition-colors">
              <div className="flex gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-500/20 rounded-lg text-green-600 dark:text-green-400 h-fit">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1 transition-colors">Fakta Bisnis</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
                    Rata-rata bisnis retail kehilangan 2-5% omzet karena <em>inventory shrinkage</em> (barang hilang/rusak) yang tidak terlacak sistem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl shadow-xl shadow-indigo-500/5 dark:shadow-none p-6 md:p-8 border border-slate-200 dark:border-slate-700 transition-colors">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <DollarSign className="text-primary" />
              Cek Potensi Kerugian
            </h3>
            
            <div className="space-y-6">
              {/* Input: Revenue */}
              <div>
                <div className="flex justify-between mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <label>Omzet Harian Toko</label>
                  <span className="text-primary font-bold">{formatCurrency(dailyRevenue)}</span>
                </div>
                <input 
                  type="range" min="500000" max="50000000" step="500000" 
                  value={dailyRevenue} 
                  onChange={(e) => setDailyRevenue(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Input: Error Rate */}
              <div>
                <div className="flex justify-between mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <label>Estimasi Kebocoran (%)</label>
                  <span className="text-primary font-bold">{errorRate}%</span>
                </div>
                <input 
                  type="range" min="1" max="10" step="0.5" 
                  value={errorRate} 
                  onChange={(e) => setErrorRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>Minim (1%)</span>
                    <span>Wajar (5%)</span>
                    <span>Parah (10%)</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">
                Tanpa sistem, potensi uang hilang sebesar:
              </div>
              
              <div className="flex flex-col gap-1">
                 <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-red-500 dark:text-red-400">{formatCurrency(monthlyLoss)}</span>
                    <span className="text-xs text-slate-500">/ bulan</span>
                 </div>
                 
                 <div className="flex items-end gap-2">
                    <motion.div 
                    key={yearlySaved}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-500"
                    >
                    {formatCurrency(yearlySaved)}
                    </motion.div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">/ tahun</span>
                 </div>
              </div>
              
              <div className="mt-6">
                <a href="#contact" className="block w-full bg-slate-900 dark:bg-primary hover:bg-slate-800 dark:hover:bg-primary-hover text-white text-center py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Amankan Profit Bisnis Saya
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
