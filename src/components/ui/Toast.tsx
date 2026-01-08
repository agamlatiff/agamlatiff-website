
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  subMessage?: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, subMessage, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-4 md:right-8 z-[100] bg-white dark:bg-slate-800 border border-blue-500/30 shadow-2xl shadow-blue-500/10 rounded-xl p-4 pr-10 flex items-start gap-3 w-[calc(100%-2rem)] md:w-auto md:min-w-[300px] max-w-md"
        >
          <div className="bg-blue-100 dark:bg-blue-500/20 p-2 rounded-full flex-shrink-0">
            <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-400" />
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{message}</h4>
            {subMessage && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subMessage}</p>
            )}
          </div>

          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X size={16} />
          </button>

          {/* Progress Bar Animation */}
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute bottom-0 left-0 h-1 bg-blue-500/50 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
