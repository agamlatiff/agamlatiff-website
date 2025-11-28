
import React from 'react';
import { ArrowRight, BarChart3, Smartphone, ShoppingBag, CheckCircle2, Package, Users, CreditCard, Bell } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax configurations
  // Background moves faster/deeper to create distance feel
  const yBackground = useTransform(scrollY, [0, 1000], [0, 400]);
  const yMockup = useTransform(scrollY, [0, 1000], [0, 150]);
  
  // Optional: Text fades out slightly on scroll
  const opacityText = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Effects with Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        
        <motion.div style={{ y: yBackground }} className="absolute inset-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        </motion.div>
      </div>
      
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            style={{ opacity: opacityText }}
            className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
             {/* Badge */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wide text-indigo-600 dark:text-indigo-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-full border border-indigo-100 dark:border-slate-700 shadow-sm"
             >
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               Available for Freelance Projects
             </motion.div>

             {/* Headline */}
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight"
             >
               Bangun Sistem Bisnis <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                 Tanpa Biaya Bulanan.
               </span>
             </motion.h1>

             {/* Description */}
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
             >
               Spesialis <strong>Sistem Kasir (POS)</strong> & <strong>Inventory Custom</strong>. 
               Solusi hemat jangka panjang dengan 100% hak milik source code. 
               Ucapkan selamat tinggal pada biaya sewa aplikasi (SaaS).
             </motion.p>

             {/* Buttons */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
             >
                <a 
                  href="#contact" 
                  className="group relative inline-flex justify-center items-center gap-2 bg-slate-900 dark:bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xl shadow-slate-900/20 dark:shadow-primary/25 hover:-translate-y-1 hover:shadow-2xl overflow-hidden w-full sm:w-auto"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <span>Konsultasi Gratis</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#projects" 
                  className="inline-flex justify-center items-center gap-2 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-3.5 rounded-xl font-bold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 w-full sm:w-auto"
                >
                  Lihat Demo
                </a>
             </motion.div>

             {/* Trust Indicator */}
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex -space-x-2">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800">
                     <img src={`https://picsum.photos/100/100?random=${100+i}`} alt="User" className="w-full h-full rounded-full object-cover opacity-80" />
                   </div>
                 ))}
              </div>
              <p>Dipercaya <strong>25+ Bisnis UMKM</strong></p>
            </motion.div>
          </motion.div>

          {/* Right Content - POS System Mockup with Parallax */}
          <motion.div 
            style={{ y: yMockup }}
            className="flex-1 w-full perspective-1000 relative flex justify-center lg:justify-end"
          >
             
             <motion.div 
               className="relative w-full max-w-[580px]"
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
                {/* Main Desktop Dashboard Card */}
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-indigo-500/10 dark:shadow-black/50 border border-slate-200 dark:border-slate-800 overflow-hidden z-10">
                   
                   {/* Window Header Mockup */}
                   <div className="h-12 border-b border-slate-100 dark:border-slate-800 flex items-center px-6 justify-between bg-slate-50/50 dark:bg-slate-900/50">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                         <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                         <div className="ml-4 h-4 w-32 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                      </div>
                   </div>

                   {/* Dashboard Interface Mock */}
                   <div className="p-6 grid grid-cols-12 gap-4 min-h-[320px]">
                      {/* Sidebar Mock */}
                      <div className="col-span-2 flex flex-col gap-3 pt-2">
                         <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center"><BarChart3 size={20} /></div>
                         <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center"><ShoppingBag size={20} /></div>
                         <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center"><Package size={20} /></div>
                         <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center"><Users size={20} /></div>
                      </div>

                      {/* Main Content Area */}
                      <div className="col-span-10 space-y-4">
                         {/* Stats Row */}
                         <div className="grid grid-cols-3 gap-3">
                            <div className="bg-indigo-50 dark:bg-slate-800/50 p-3 rounded-xl border border-indigo-100 dark:border-slate-800">
                               <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Total Omzet</div>
                               <div className="text-sm font-bold text-slate-800 dark:text-white">Rp 12.500.000</div>
                            </div>
                            <div className="bg-green-50 dark:bg-slate-800/50 p-3 rounded-xl border border-green-100 dark:border-slate-800">
                               <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Transaksi</div>
                               <div className="text-sm font-bold text-slate-800 dark:text-white">142 Order</div>
                            </div>
                            <div className="bg-orange-50 dark:bg-slate-800/50 p-3 rounded-xl border border-orange-100 dark:border-slate-800">
                               <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Stok Menipis</div>
                               <div className="text-sm font-bold text-orange-600">3 Item</div>
                            </div>
                         </div>

                         {/* Graph Area Mock */}
                         <div className="bg-slate-50 dark:bg-slate-800/30 h-36 rounded-xl border border-slate-100 dark:border-slate-800 relative flex items-end px-3 pb-0 pt-8 gap-2 overflow-hidden">
                             {/* Legend */}
                             <div className="absolute top-3 left-3 flex gap-3">
                                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500"></div><span className="text-[10px] text-slate-400">Minggu Ini</span></div>
                             </div>
                             {/* Fake Bars */}
                             {[30, 50, 45, 70, 60, 85, 95].map((h, i) => (
                                <div key={i} className="flex-1 bg-indigo-500/10 dark:bg-indigo-500/30 rounded-t-md relative group" style={{ height: `${h}%` }}>
                                   <div className="absolute bottom-0 left-0 w-full bg-indigo-500/40 h-1"></div>
                                </div>
                             ))}
                             {/* Trend Line SVG */}
                             <svg className="absolute inset-0 w-full h-full p-3 pointer-events-none z-10" preserveAspectRatio="none">
                                <path d="M0,100 C20,90 50,110 80,60 C110,50 140,20 170,30 C200,10 230,5 260,15" fill="none" stroke="currentColor" className="text-indigo-500" strokeWidth="2" strokeLinecap="round" />
                             </svg>
                         </div>

                         {/* Recent Orders List Mock */}
                         <div className="space-y-2">
                            <div className="flex justify-between items-center">
                               <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Order Terbaru</div>
                               <div className="text-[10px] text-primary cursor-pointer">Lihat Semua</div>
                            </div>
                            {[1, 2].map((i) => (
                                <div key={i} className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-slate-100 dark:border-slate-800">
                                   <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex-shrink-0"></div>
                                      <div className="space-y-1">
                                          <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                          <div className="w-12 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                                      </div>
                                   </div>
                                   <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded text-[10px] text-green-600 font-bold">Lunas</div>
                                </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Floating Mobile Mockup (Overlap) - Represents Cashier App */}
                <motion.div 
                  className="absolute -bottom-6 -right-4 sm:-right-10 w-32 sm:w-44 bg-slate-900 rounded-[2rem] border-[6px] border-slate-800 shadow-2xl p-1 z-20"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                   <div className="bg-white dark:bg-slate-900 w-full h-64 rounded-[1.5rem] overflow-hidden flex flex-col relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-20"></div>
                      
                      {/* Mobile Screen Content */}
                      <div className="flex-1 p-4 flex flex-col justify-center items-center text-center space-y-3 mt-4 relative z-10">
                         <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                            <CheckCircle2 size={28} />
                         </div>
                         <div>
                             <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Pembayaran Sukses</div>
                             <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">Rp 45.000</div>
                         </div>
                         <div className="w-full pt-3 border-t border-slate-100 dark:border-slate-800 mt-2">
                             <div className="text-[9px] text-slate-400 mb-1">Metode</div>
                             <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                                <CreditCard size={12} /> QRIS BCA
                             </div>
                         </div>
                      </div>
                      
                      {/* Bottom Button */}
                      <div className="p-2 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                         <div className="w-full py-1.5 bg-primary text-white rounded-lg text-[10px] font-bold text-center shadow-lg shadow-primary/30">
                            Cetak Struk
                         </div>
                      </div>
                   </div>
                </motion.div>

                {/* Floating Badge: Notification */}
                <motion.div 
                  className="absolute top-16 -left-8 bg-white dark:bg-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-30 max-w-[220px]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                >
                   <div className="bg-red-100 dark:bg-red-900/30 p-2.5 rounded-xl text-red-600 dark:text-red-400">
                      <Bell size={20} />
                   </div>
                   <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">System Alert</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Stok "Kopi Susu" Menipis!</div>
                   </div>
                </motion.div>

                {/* Floating Badge: Realtime */}
                <motion.div 
                  className="hidden sm:flex absolute -top-6 right-10 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 items-center gap-2 z-0"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                >
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Live Data Sync</span>
                </motion.div>

             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
