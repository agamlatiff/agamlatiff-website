
import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'landing-page',
    title: 'Jasa Landing Page Profesional',
    shortTitle: 'Landing Page',
    description: 'Website satu halaman yang fokus konversi. Desain premium, cepat, dan terima beres dengan Domain & Hosting.',
    deliverables: [
      'Gratis Domain .com & Hosting',
      'Desain Premium & Mobile Friendly',
      'Copywriting Konversi Tinggi',
      'Integrasi WhatsApp & Maps',
      'Setup Email Bisnis'
    ],
    timeline: 'Est. 1-7 Hari',
    priceRange: 'Promo Rp 1.5jt',
    icon: 'layout',
    modalContent: {
      title: "Jasa Pembuatan Landing Page",
      description: "Miliki website profesional yang bekerja 24 jam untuk mendatangkan pelanggan. Pilih paket sesuai target bisnis:",
      points: [
        { title: "Paket Basic (Rp 1.5jt)", desc: "Landing page cepat & profesional. Sudah termasuk Domain & Hosting 6 bulan. Cocok untuk validasi bisnis baru." },
        { title: "Paket Premium (Rp 2.7jt)", desc: "High-Conversion design. Fitur lengkap, analitik, dan copywriting jualan untuk memaksimalkan leads." },
        { title: "Paket Pro (Rp 3.5jt)", desc: "Branding Strategy & Cinematic Design. Performa tinggi untuk Ads, SEO, dan Brand Awareness jangka panjang." }
      ]
    }
  },
  {
    id: 'company-profile',
    title: 'Website Company Profile',
    shortTitle: 'Company Profile',
    description: 'Tingkatkan kredibilitas bisnis dengan website profil profesional. Tampil bonafit, informatif, dan mudah ditemukan di Google.',
    deliverables: [
      'Desain Clean & Modern',
      'Halaman Lengkap (Home, About, Services)',
      'SEO Dasar & Google Maps',
      'Portfolio & Galeri',
      'Gratis Domain & Hosting 6 Bulan'
    ],
    timeline: 'Est. 2-10 Hari',
    priceRange: 'Mulai Rp 2.2jt',
    icon: 'consulting',
    modalContent: {
      title: "Jasa Website Company Profile",
      description: "Bangun kepercayaan pelanggan dengan identitas digital yang kuat. Pilih paket sesuai skala bisnis:",
      points: [
        { title: "Paket Basic (Rp 2.2jt)", desc: "Mulai tampil profesional. 4 Halaman utama, desain clean, mobile friendly. Cocok untuk UMKM/Freelancer." },
        { title: "Paket Premium (Rp 3.2jt)", desc: "Tingkatkan kredibilitas. 6 Halaman, desain premium, animasi halus, & copywriting. Cocok untuk bisnis berkembang." },
        { title: "Paket Pro (Rp 5.5jt)", desc: "Branding maksimal. Hingga 10 halaman, desain eksklusif, fitur blog, SEO advanced. Aset marketing jangka panjang." }
      ]
    }
  },
  {
    id: 'booking-system',
    title: 'Sistem Booking / Reservasi',
    shortTitle: 'Booking System',
    description: 'Solusi atur jadwal otomatis untuk klinik, salon, atau rental. Pelanggan booking sendiri 24/7 tanpa ribet chat admin.',
    deliverables: [
      'Form Booking Online 24/7',
      'Manajemen Slot Waktu Otomatis',
      'Notifikasi Email & WhatsApp',
      'Dashboard Admin & Laporan',
      'Gratis Domain & Hosting 6 Bulan'
    ],
    timeline: 'Est. 3-10 Hari',
    priceRange: 'Mulai Rp 2.9jt',
    icon: 'code',
    modalContent: {
      title: "Sistem Booking & Reservasi",
      description: "Hilangkan drama 'double booking' dan admin yang kewalahan balas chat. Pilih paket:",
      points: [
        { title: "Basic - Starter (Rp 2.9jt)", desc: "Form booking simpel, kalender tanggal, notifikasi WA/Email. Cocok untuk barbershop/klinik kecil." },
        { title: "Standard - Smart (Rp 4.5jt)", desc: "Pilih layanan & harga, slot otomatis durasi, admin filter lengkap. Cocok untuk salon & studio foto." },
        { title: "Premium - Automation (Rp 6.5jt)", desc: "Bayar DP online, WA automation, reschedule/cancel mandiri, multi-staff. Full otomatisasi." }
      ]
    }
  },
  {
    id: 'e-commerce',
    title: 'Website E-Commerce / Toko Online',
    shortTitle: 'E-Commerce',
    description: 'Punya toko online sendiri tanpa potongan admin marketplace. Katalog produk unlimited, checkout via WhatsApp atau Payment Gateway.',
    deliverables: [
      'Katalog Produk & Keranjang Belanja',
      'Checkout WhatsApp / Otomatis',
      'Dashboard Admin Kelola Produk',
      'Laporan Penjualan & Stok',
      'Gratis Domain & Hosting'
    ],
    timeline: 'Est. 4-14 Hari',
    priceRange: 'Mulai Rp 2.4jt',
    icon: 'smartphone',
     modalContent: {
      title: "Jasa Pembuatan Toko Online",
      description: "Jualan online lebih profesional dengan website e-commerce milik sendiri. Pilih paket:",
      points: [
        { title: "Basic - Start Selling (Rp 2.4jt)", desc: "Toko online simpel, katalog 20 produk, checkout form ke WA. Cocok untuk UMKM baru mulai." },
        { title: "Premium - Full E-Com (Rp 3.9jt)", desc: "Sistem keranjang belanja, unlimited produk, filter kategori, auto-checkout WA. Fitur lengkap untuk brand." },
        { title: "Pro - Store Growth (Rp 5.9jt)", desc: "Full payment gateway (QRIS), dashboard admin lengkap, manajemen stok, & fitur promo. Siap scale-up." }
      ]
    }
  },
  {
    id: 'travel-website',
    title: 'Website Tour & Travel',
    shortTitle: 'Tour & Travel',
    description: 'Website khusus agen travel/wisata. Tampilkan paket tour menarik, itinerary lengkap, dan booking online otomatis.',
    deliverables: [
      'Katalog Paket Wisata Menarik',
      'Detail Itinerary & Fasilitas',
      'Form Booking / WhatsApp',
      'Galeri Destinasi Premium',
      'Gratis Domain & Hosting'
    ],
    timeline: 'Est. 3-7 Hari',
    priceRange: 'Mulai Rp 2.5jt',
    icon: 'layout',
    modalContent: {
      title: "Jasa Website Tour & Travel",
      description: "Bikin pelanggan 'ngiler' liburan dengan tampilan website travel yang estetik & profesional. Pilih paket:",
      points: [
        { title: "Basic - Start Traveling (Rp 2.5jt)", desc: "Landing page travel, max 6 paket wisata, tombol booking WA. Cocok untuk travel baru online." },
        { title: "Premium - Experience (Rp 4.5jt)", desc: "Unlimited paket, detail itinerary lengkap, galeri premium, form booking profesional. Fokus jualan." },
        { title: "Pro - Travel Store (Rp 7.5jt)", desc: "Checkout system (pilih tanggal & jumlah), invoice otomatis, payment gateway, fitur upsell paket." }
      ]
    }
  },
  {
    id: 'pos-system',
    title: 'Sistem Kasir (POS) & Inventory',
    shortTitle: 'Point of Sale',
    description: 'Solusi operasional toko. Catat transaksi, stok, dan laporan keuangan secara otomatis. Anti boncos, anti ribet.',
    deliverables: [
      'Aplikasi Kasir (Web/Android)',
      'Manajemen Stok Real-time',
      'Laporan Laba Rugi',
      'Support Printer Thermal',
      'Hak Milik Source Code'
    ],
    timeline: 'Est. 3-14 Hari',
    priceRange: 'Mulai Rp 4.5jt',
    icon: 'smartphone',
    modalContent: {
      title: "Sistem Kasir & Inventory",
      description: "Rapikan operasional bisnis dengan sistem yang dibuat khusus untuk alur kerja Anda.",
      points: [
        { title: "Basic POS (Rp 4.5jt)", desc: "Kasir digital simpel, catat transaksi & struk. Cocok untuk F&B kecil/Retail pemula." },
        { title: "Standard POS (Rp 8.5jt)", desc: "Manajemen stok lengkap, resep/varian, & laporan laba kotor. Cocok untuk Resto/Toko berkembang." },
        { title: "Premium POS (Rp 14.9jt)", desc: "Multi-cabang, manajemen supplier, PO otomatis, & akses owner real-time. Skala Enterprise." }
      ]
    }
  },
  {
    id: 'revamp-website',
    title: 'Jasa Revamp / Redesign Website',
    shortTitle: 'Revamp Web',
    description: 'Punya website tapi jadul/lemot? Saya rombak ulang tampilan dan strukturnya jadi lebih modern, cepat, dan menjual.',
    deliverables: [
      'Redesign Tampilan Modern',
      'Perbaikan Struktur & Navigasi',
      'Optimasi Kecepatan (Loading)',
      'SEO On-Page Optimization',
      'Integrasi Fitur Baru'
    ],
    timeline: 'Est. 2-12 Hari',
    priceRange: 'Mulai Rp 1.7jt',
    icon: 'code',
    modalContent: {
      title: "Jasa Revamp & Redesign Website",
      description: "Ubah website lama yang 'mati suri' menjadi mesin penjualan yang segar dan performa tinggi. Pilih paket:",
      points: [
        { title: "Basic - Fresh Look (Rp 1.7jt)", desc: "Redesign halaman utama & perbaikan struktur agar rapi. Cocok untuk UMKM yang websitenya 'kuno'." },
        { title: "Premium - Boost (Rp 2.9jt)", desc: "Redesign 5-6 halaman, perbaikan navigasi, copywriting konversi, & SEO on-page. Fokus performa." },
        { title: "Pro - Total Makeover (Rp 4.5jt)", desc: "Rombak total, optimasi speed tingkat tinggi (Core Web Vitals), advanced SEO, & fitur modern." }
      ]
    }
  }
];
