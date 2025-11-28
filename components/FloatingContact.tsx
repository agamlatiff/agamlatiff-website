
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContact: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/6285922430828"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // Positioned above the ChatWidget (bottom-28 vs bottom-6) with responsive right alignment
      className="fixed bottom-28 right-4 md:right-8 z-40 flex items-center gap-3 group" 
      aria-label="Chat WhatsApp"
    >
      {/* Tooltip */}
      <span className="hidden md:block bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute right-full mr-4 whitespace-nowrap pointer-events-none border border-slate-100 dark:border-slate-700">
        Chat via WhatsApp
        {/* Arrow tooltip */}
        <span className="absolute top-1/2 -right-1 w-2 h-2 bg-white dark:bg-slate-800 transform rotate-45 -translate-y-1/2 border-t border-r border-slate-100 dark:border-slate-700"></span>
      </span>

      {/* Button */}
      <div className="relative">
        {/* Increased padding to p-4 to match ChatWidget size */}
        <div className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-colors">
            <MessageCircle size={28} fill="white" className="text-white" />
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingContact;
