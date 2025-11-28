
import React from 'react';
import { Hexagon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded transition-colors">
              <Hexagon size={16} className="text-primary dark:text-primary" />
            </div>
            <span className="font-bold text-slate-700 dark:text-slate-200 transition-colors">agamlatiff</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-slate-400 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Agam Latifullah. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
