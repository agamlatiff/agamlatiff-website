'use client';

import React from 'react';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import { FaInstagram, FaTiktok, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/agamlatiff", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/agam-latifullah", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/agam.latiff/", label: "Instagram" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@agam.latiff", label: "TikTok" },
  { icon: FaYoutube, href: "https://www.youtube.com/@AgamLatifullah-p5j7d", label: "YouTube" }
];

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f4f5f7] dark:bg-[#09090b] text-zinc-600 dark:text-zinc-400 pt-16 pb-12 border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-200/80 dark:border-zinc-800/80">
          
          {/* Brand Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="font-bold text-zinc-950 dark:text-white text-base tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                Agam Latifullah
              </span>
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
              Full-Stack Developer yang berfokus pada ekosistem TypeScript & Golang, didukung arsitektur perangkat lunak yang bersih, cepat, dan teruji di operasional nyata.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {SOCIALS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs transition-all"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono font-semibold text-zinc-900 dark:text-white text-xs mb-4 uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Proyek Unggulan</a>
              </li>
              <li>
                <a href="#tech-stack" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Tech Stack</a>
              </li>
              <li>
                <a href="#experience" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Pengalaman & Edukasi</a>
              </li>
              <li>
                <a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Tentang Saya</a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono font-semibold text-zinc-900 dark:text-white text-xs mb-4 uppercase tracking-wider">Kontak Langsung</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-zinc-400 dark:text-zinc-500 flex-shrink-0" />
                <a href="mailto:agam.latiff@gmail.com" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white font-medium transition-colors truncate">
                  agam.latiff@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-zinc-400 dark:text-zinc-500 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">Kabupaten Bogor, Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Agam Latifullah. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
