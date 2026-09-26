'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const isId = language === 'id';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
      window.scrollTo(0, 0);
    }
  };

  // Simplified to only 3 essential links
  const navLinks = [
    { name: isId ? 'Proyek' : 'Projects', href: '#projects' },
    { name: isId ? 'Perjalanan' : 'Journey', href: '#experience' },
    { name: isId ? 'Tentang' : 'About', href: '#about' },
  ];

  return (
    <>
      {/* Dark Obsidian Capsule Navbar */}
      <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 w-[92%] sm:w-[86%] max-w-4xl z-50 transition-all duration-300">
        <nav
          className={`w-full bg-zinc-950/95 backdrop-blur-2xl rounded-full border border-zinc-800/90 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'shadow-[0_16px_48px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] border-zinc-700'
              : 'shadow-[0_10px_35px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.12)]'
          }`}
        >
          {/* Left: Brand Identity (Clean Agam Latifullah typography without AL badge) */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 group flex-shrink-0 py-0.5"
          >
            <span className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-zinc-300 transition-colors">
              Agam Latifullah
            </span>
          </Link>

          {/* Center: Essential Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Actions (Language Switcher + Dark Mode Toggle + Tactile White CTA) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Dual-Script Linguistic Toggle Button (A / 文) */}
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 transition-all font-mono text-[11px]"
              aria-label={`Switch language to ${language === 'id' ? 'English' : 'Indonesian'}`}
              title={isId ? 'Ganti Bahasa' : 'Switch Language'}
            >
              <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
              </svg>
              <span className="font-bold tracking-wider uppercase text-zinc-200">
                {language}
              </span>
            </button>


            {/* Tactile White Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavigation(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all shadow-xs active:scale-95"
            >
              <span>{isId ? 'Hubungi Saya' : 'Get in Touch'}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="md:hidden mt-2.5 w-full bg-zinc-950/95 backdrop-blur-2xl rounded-2xl border border-zinc-800 shadow-2xl p-4 flex flex-col gap-2 animate-fade-in-down">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-2 px-3 rounded-xl hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-zinc-800">
              <a
                href="#contact"
                onClick={(e) => handleNavigation(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 shadow-xs"
              >
                <span>{isId ? 'Hubungi Saya' : 'Get in Touch'}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
