
import React, { useEffect, useState } from 'react';

const SEO_DATA: Record<string, { title: string; desc: string }> = {
  hero: { 
    title: "Agam Latifullah | Spesialis POS & Inventory", 
    desc: "Agam Latifullah (agamlatiff) adalah Fullstack Developer spesialis Sistem Kasir (POS) & Inventory Management menggunakan Laravel & React, serta pembuatan Website Bisnis." 
  },
  'roi-calculator': {
    title: "Cegah Kebocoran Stok & Keuangan | agamlatiff",
    desc: "Hitung berapa banyak uang yang hilang dari bisnis Anda karena pembukuan manual. Solusi POS akurat untuk efisiensi maksimal."
  },
  services: { 
    title: "Jasa Pembuatan POS & Website | agamlatiff", 
    desc: "Melayani pembuatan Sistem POS Retail, Aplikasi Gudang (Inventory), Landing Page UMKM, dan Website Company Profile dengan CMS." 
  },
  'pain-points': {
    title: "Masalah Stok & Pembukuan? | agamlatiff",
    desc: "Atasi stok selisih, laporan manual yang ribet, dan website lambat. Transformasi digital untuk operasional bisnis yang lebih rapi."
  },
  'trust-factors': {
    title: "Garansi & Support | agamlatiff",
    desc: "Keamanan kerjasama dengan Agam Latifullah: Garansi Bug 30 Hari, Gratis Training, dan Serah Terima Source Code."
  },
  comparison: {
    title: "Kenapa Pilih Agam Latifullah? | agamlatiff",
    desc: "Bandingkan solusi custom Laravel & React saya dengan software jadi. Investasi jangka panjang untuk sistem yang scalable dan mudah dirawat."
  },
  pricing: {
    title: "Harga Jasa Pembuatan POS | agamlatiff",
    desc: "Paket harga transparan untuk pembuatan Website, Sistem POS Basic, dan Custom Enterprise. Jual putus tanpa biaya langganan bulanan."
  },
  process: { 
    title: "Alur Kerja Sistem Custom | agamlatiff", 
    desc: "Proses pengembangan sistem yang transparan dari bedah masalah, desain database, development, hingga training staff." 
  },
  projects: { 
    title: "Portofolio Sistem POS & Web | agamlatiff", 
    desc: "Lihat studi kasus penerapan Sistem POS Coffee Shop, Manajemen Gudang Grosir, dan Landing Page Barbershop." 
  },
  testimonials: { 
    title: "Review Klien Bisnis | agamlatiff", 
    desc: "Apa kata pemilik bisnis tentang sistem kasir dan website yang saya bangun. Fokus pada efisiensi dan kemudahan penggunaan." 
  },
  about: { 
    title: "Tentang Agam Latifullah | agamlatiff", 
    desc: "Fullstack Developer dengan keahlian mendalam di ekosistem Laravel, React, dan Database Management untuk solusi bisnis B2B." 
  },
  faq: { 
    title: "FAQ System & Website | agamlatiff", 
    desc: "Pertanyaan seputar pembuatan aplikasi kasir, biaya, maintenance, dan layanan website lainnya." 
  },
  contact: { 
    title: "Hubungi Agam Latifullah | agamlatiff", 
    desc: "Siap merapikan sistem bisnis Anda? Hubungi saya untuk konsultasi pembuatan POS, Inventory, atau Website." 
  },
};

const SeoObserver: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px', // Trigger when section is near center
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections defined in SEO_DATA
    Object.keys(SEO_DATA).forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const data = SEO_DATA[activeSection];
    if (data) {
      // Update Title
      document.title = data.title;

      // Update Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', data.desc);
    }
  }, [activeSection]);

  return null;
};

export default SeoObserver;
