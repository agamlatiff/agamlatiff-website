"use client";

import React, { useState } from 'react';
import { Mail, Calendar, Send, Check, Loader2, AlertCircle } from 'lucide-react';
import { FaInstagram, FaTiktok, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Toast from '@/components/ui/Toast';
import { useLanguage } from '@/context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showToast, setShowToast] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Validation State
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    message: false
  });

  const validate = (field: string, value: string) => {
    let error = '';
    switch (field) {
      case 'name':
        if (!value.trim()) error = t('contact.form.name.error.required') || 'Nama wajib diisi';
        else if (value.trim().length < 2) error = t('contact.form.name.error.min') || 'Minimal 2 karakter';
        break;
      case 'phone':
        if (value.trim() && !/^[0-9+\-\s]{9,}$/.test(value)) error = t('contact.form.phone.error.format') || 'Format telepon tidak valid';
        break;
      case 'email':
        if (!value.trim()) error = t('contact.form.email.error.required') || 'Email wajib diisi';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = t('contact.form.email.error.format') || 'Format email tidak valid';
        break;
      case 'message':
        if (!value.trim()) error = t('contact.form.message.error.required') || 'Pesan wajib diisi';
        else if (value.trim().length < 10) error = t('contact.form.message.error.min') || 'Pesan minimal 10 karakter';
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id === 'phone' && !/^[0-9+\-\s]*$/.test(value)) return;
    setFormData(prev => ({ ...prev, [id]: value }));

    if (touched[id as keyof typeof touched]) {
      setErrors(prev => ({ ...prev, [id]: validate(id, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    setErrors(prev => ({ ...prev, [id]: validate(id, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: validate('name', formData.name),
      phone: validate('phone', formData.phone),
      email: validate('email', formData.email),
      message: validate('message', formData.message)
    };

    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true, message: true });

    if (Object.values(newErrors).some(err => err !== '')) {
      return;
    }

    setStatus('submitting');

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_portfolio';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contact';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'default_public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone_number: formData.phone || '-',
          message: formData.message,
        },
        publicKey
      );

      setStatus('success');
      setShowToast(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTouched({ name: false, phone: false, email: false, message: false });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const getInputClasses = (fieldId: keyof typeof errors) => {
    const hasError = errors[fieldId] && touched[fieldId];
    const baseClasses = "w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm";
    const defaultClasses = "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900/10 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.02)]";
    const errorClasses = "bg-red-50/40 dark:bg-red-950/20 border-red-400 dark:border-red-600 text-zinc-900 dark:text-white focus:border-red-500 focus:ring-1 focus:ring-red-500/10 placeholder:text-red-300 dark:placeholder:text-red-400";

    return `${baseClasses} ${hasError ? errorClasses : defaultClasses}`;
  };

  const SOCIAL_LINKS = [
    { icon: FaGithub, href: "https://github.com/agamlatiff", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/agam-latifullah", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/agam.latiff/", label: "Instagram" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@agam.latiff", label: "TikTok" },
    { icon: FaYoutube, href: "https://www.youtube.com/@AgamLatifullah-p5j7d", label: "YouTube" }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#09090b] border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <Toast
        message={t('contact.form.toast.success.title') || 'Pesan Terkirim!'}
        subMessage={t('contact.form.toast.success.message') || 'Terima kasih, saya akan membalas pesan Anda segera.'}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <Toast
        message={t('contact.form.toast.error.title') || 'Gagal Mengirim'}
        subMessage={t('contact.form.toast.error.message') || 'Terjadi kesalahan. Silakan hubungi langsung via email.'}
        isVisible={status === 'error'}
        onClose={() => setStatus('idle')}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-white tracking-[-0.035em] mb-3">
            {t('contact.title') || 'Mari Terhubung & Berdiskusi'}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t('contact.subtitle') || 'Terbuka untuk peluang karier Software Engineer, kolaborasi proyek web full-stack, atau diskusi teknis.'}
          </p>
        </div>

        {/* Linear Bento Container */}
        <div className="linear-card rounded-2xl flex flex-col lg:flex-row overflow-hidden dark:bg-[#121215] dark:border-zinc-800">

          {/* Left Info Side */}
          <div className="bg-zinc-50/80 dark:bg-zinc-900/50 border-b lg:border-b-0 lg:border-r border-zinc-200/80 dark:border-zinc-800 p-8 sm:p-10 lg:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2 tracking-tight">Informasi Kontak</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-8">
                Punya pertanyaan, tawaran kerja, atau ide proyek? Jangan ragu untuk mengirimkan pesan langsung.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center justify-center text-zinc-700 dark:text-zinc-200 shadow-2xs">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">Email Langsung</span>
                    <a href="mailto:agam.latiff@gmail.com" className="text-sm font-semibold text-zinc-950 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                      agam.latiff@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center justify-center text-zinc-700 dark:text-zinc-200 shadow-2xs">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">Status Ketersediaan</span>
                    <div className="inline-flex items-center gap-1.5 pt-0.5">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200">Available for Opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-zinc-200/80 dark:border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-3">Sosial Media</span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs transition-all"
                  >
                    <social.icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="p-8 sm:p-10 lg:w-3/5 bg-white dark:bg-[#121215]">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                    {t('contact.form.name.label') || 'Nama Anda *'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClasses('name')}
                    placeholder={t('contact.form.name.placeholder') || 'Masukkan nama Anda'}
                  />
                  {errors.name && touched.name && (
                    <div className="flex items-center gap-1 text-red-600 text-xs mt-1.5">
                      <AlertCircle size={12} /> {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                    {t('contact.form.phone.label') || 'No. WhatsApp / Telepon'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClasses('phone')}
                    placeholder={t('contact.form.phone.placeholder') || '+62 812-xxxx-xxxx'}
                  />
                  {errors.phone && touched.phone && (
                    <div className="flex items-center gap-1 text-red-600 text-xs mt-1.5">
                      <AlertCircle size={12} /> {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                  {t('contact.form.email.label') || 'Alamat Email *'}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('email')}
                  placeholder={t('contact.form.email.placeholder') || 'nama@email.com'}
                />
                {errors.email && touched.email && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-1.5">
                    <AlertCircle size={12} /> {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                  {t('contact.form.message.label') || 'Pesan Anda *'}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${getInputClasses('message')} resize-none`}
                  placeholder={t('contact.form.message.placeholder') || 'Tuliskan pesan, penawaran posisi, atau kebutuhan proyek Anda...'}
                />
                {errors.message && touched.message && (
                  <div className="flex items-center gap-1 text-red-600 text-xs mt-1.5">
                    <AlertCircle size={12} /> {errors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg font-medium text-sm text-zinc-100 dark:text-zinc-950 bg-zinc-950 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-70 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] active:scale-[0.98]"
              >
                <AnimatePresence mode="wait">
                  {status === 'submitting' ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 size={15} className="animate-spin" />
                      <span>{t('contact.form.submit.sending') || 'Mengirim pesan...'}</span>
                    </motion.div>
                  ) : status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-emerald-400"
                    >
                      <Check size={15} />
                      <span>{t('contact.form.submit.success') || 'Pesan Berhasil Terkirim!'}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <span>{t('contact.form.submit.idle') || 'Kirim Pesan'}</span>
                      <Send size={14} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
