
import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Sun, Moon } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { WA_LINKS, NAV_LINKS } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3 border-b border-transparent dark:border-slate-800' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-1.5 rounded-lg transition-transform group-hover:rotate-12 shadow-lg shadow-primary/30">
            <Hexagon size={20} fill="currentColor" className="text-indigo-200" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-colors">agamlatiff</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href}
              className={({ isActive }) => 
                `group relative text-sm font-medium transition-colors py-2 ${
                  isActive 
                    ? 'text-primary dark:text-primary font-bold' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                }`
              }
            >
              {link.name}
              {/* Underline Indicator for Active Link */}
              <span className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-[.active]:w-full group-hover:w-full"></span>
            </NavLink>
          ))}
          
          <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-6">
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Ubah tema"
            >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <a 
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 dark:text-slate-200 hover:text-primary focus:outline-none ml-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl animate-fade-in-down h-screen z-40">
          <div className="px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink 
                  key={link.name} 
                  to={link.href}
                  className={({ isActive }) => 
                    `text-base font-medium py-3 border-b border-slate-50 dark:border-slate-800 transition-colors ${
                      isActive 
                        ? 'text-primary dark:text-primary font-bold pl-2 border-l-4 border-l-primary' 
                        : 'text-slate-700 dark:text-slate-300 hover:text-primary'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
              >
                  {link.name}
              </NavLink>
            ))}
            <a 
              href={WA_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-center py-3 rounded-md font-semibold mt-4 shadow-lg shadow-primary/20"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
