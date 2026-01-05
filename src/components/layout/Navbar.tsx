import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Languages } from 'lucide-react';
import { NAV_LINKS } from '@/constants/nav';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  // Language Context
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    // Add transition class for smooth animation
    document.documentElement.classList.add('theme-transition');

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Remove transition class after animation
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 700);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Check if we're on home page
    const isHomePage = location.pathname === '/';

    if (href === '/') {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    const elementId = href.replace('#', '');

    if (isHomePage) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home then scroll to section
      navigate('/' + href);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-slate-800'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                <img src="agam-photo.jpg" alt="Agam Image" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <span className="font-display font-bold text-xl text-slate-800 dark:text-white hidden sm:block">
                agamlatiff
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors relative group"
                >
                  {t(`footer.menus.${link.name.toLowerCase()}`) || link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2"></span>
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>

            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all text-xs font-bold"
                title="Switch Language"
              >
                <Languages size={16} />
                <span>{language.toUpperCase()}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all hover:scale-110 active:scale-95"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* CTA Button */}
              <a
                href="https://www.linkedin.com/in/agam-latifullah"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t('contact.title')}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-3 text-left text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors"
              >
                {t(`footer.menus.${link.name.toLowerCase()}`) || link.name}
              </button>
            ))}
          </div>

          <div className="h-px bg-slate-100 dark:bg-slate-800 my-4"></div>

          <div className="flex items-center justify-between px-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Language</span>
            <div className="flex rounded-lg bg-slate-100 dark:bg-slate-900 p-1">
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'id' ? 'bg-white dark:bg-slate-800 shadow text-primary' : 'text-slate-500'}`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${language === 'en' ? 'bg-white dark:bg-slate-800 shadow text-primary' : 'text-slate-500'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
