
import React from 'react';
import { Hexagon, ArrowRight, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaTiktok, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useLanguage } from '@/context/LanguageContext';
import { createWhatsAppLink } from '@/constants/whatsapp';

// Social media links with modern icons
const SOCIALS = [
  { icon: FaInstagram, href: "https://www.instagram.com/agam.latiff/", label: "Instagram" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@agam.latiff", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/agam-latifullah", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/agamlatiff", label: "GitHub" },
  { icon: FaYoutube, href: "https://www.youtube.com/@AgamLatifullah-p5j7d", label: "YouTube" }
];

const Footer: React.FC = () => {
  const { t, translations } = useLanguage();

  return (
    <footer className="bg-[#0a0a0a] text-slate-400 pt-24 pb-12 border-t border-slate-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px] opacity-[0.03] pointer-events-none" />

      {/* Top Banner CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="bg-[#0f0f0f] border border-slate-800 rounded-[2rem] p-8 md:p-14 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-colors duration-700" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="text-center md:text-left max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                {t('footer.cta.title')}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t('footer.cta.description')}
              </p>
            </div>
            <a
              href={createWhatsAppLink(t('whatsappMessages.general'))}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              {t('footer.cta.button')} <ArrowRight size={20} className="inline ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-slate-900 pb-16">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/25">
                <Hexagon size={20} fill="currentColor" />
              </div>
              <span className="font-black text-2xl text-white tracking-tight">agamlatiff</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-md text-base">
              {t('footer.brandDescription')}
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-[#111] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-1 hidden lg:block" />

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-8 text-lg">{t('footer.menus.main')}</h4>
            <ul className="space-y-4">
              {[
                { name: t('nav.home'), href: '#hero' },
                { name: t('nav.about'), href: '#about' },
                { name: t('nav.projects'), href: '#projects' },
                { name: t('nav.services'), href: '#services' }, // Added for spacing balance
                { name: t('nav.contact'), href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-primary transition-colors inline-block py-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-8 text-lg">{t('footer.menus.contact')}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 group-hover:bg-primary/20 group-hover:text-primary transition-colors flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-400 leading-relaxed mt-2" dangerouslySetInnerHTML={{ __html: t('footer.location') }} />
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-500 group-hover:bg-primary/20 group-hover:text-primary transition-colors flex-shrink-0">
                  <Mail size={18} />
                </div>
                <a href="mailto:agam.latiff@gmail.com" className="text-slate-400 group-hover:text-white transition-colors">agam.latiff@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Agam Latifullah. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
