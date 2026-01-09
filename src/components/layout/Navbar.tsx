import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { name: t('nav.home'), href: '#hero' }, // Assuming hero section has id='hero'
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    // { name: t('nav.services'), href: '#services' }, // Key might be missing in id.ts, hiding for now or hardcoding if needed. 
    // Checking id.ts again, 'services' is not in 'nav'. But let's check if 'footer.menus.services' exists which is "Layanan".
    // I will include Contact.
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 py-4 shadow-sm'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform duration-300">
                <Hexagon size={20} fill="currentColor" />
              </div>
              <span className={`font-black text-xl tracking-tight transition-colors ${scrolled || isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
                agamlatiff
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-900 p-1 rounded-full border border-gray-200 dark:border-slate-800">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className="px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 rounded-full transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-800 text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors"
                aria-label={`Switch language to ${language === 'id' ? 'English' : 'Indonesian'}`}
              >
                <span className={language === 'id' ? 'text-primary font-bold' : 'text-slate-400'}>ID</span>
                <span className="text-slate-300" aria-hidden="true">|</span>
                <span className={language === 'en' ? 'text-primary font-bold' : 'text-slate-400'}>EN</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavigation(e, '#contact')}
                className="bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                {t('hero.cta.consult')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-900 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className="text-2xl font-bold text-slate-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-4"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center justify-between pt-4">
            <span className="text-slate-500 font-medium">Language</span>
            <div className="flex bg-gray-100 dark:bg-slate-900 p-1 rounded-lg">
              <button
                onClick={() => setLanguage('id')}
                aria-label="Switch to Indonesian"
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${language === 'id' ? 'bg-white dark:bg-slate-800 shadow-sm text-primary' : 'text-slate-400'}`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                aria-label="Switch to English"
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${language === 'en' ? 'bg-white dark:bg-slate-800 shadow-sm text-primary' : 'text-slate-400'}`}
              >
                EN
              </button>
            </div>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, '#contact')}
            className="mt-4 w-full bg-primary text-white py-4 rounded-xl font-bold text-center text-lg shadow-lg shadow-primary/25 active:scale-95 transition-transform"
          >
            {t('hero.cta.consult')}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
