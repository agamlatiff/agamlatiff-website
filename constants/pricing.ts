
import { Store, Building2, Smartphone as MobileIcon, Globe, Layout, ShoppingCart, Calendar, Monitor, Database, Server, Rocket, Zap, Crown, CheckCircle2, ShoppingBag, Barcode, Warehouse, Search, PenTool, Activity, Plane, Map, RefreshCw, Hammer, ShoppingBasket, Network, Layers, Users, Volume2, MonitorPlay, Code2, ScanFace, MapPin, Fingerprint } from 'lucide-react';

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  isPopular: boolean;
  cta: string;
  icon: any;
  // Detailed breakdown for the modal
  details?: {
    feature: string;
    problem: string;
    solution: string;
    benefit: string;
  }[];
  // New flexible modal content
  modalDetails?: {
    sections: {
      title: string;
      items: string[];
    }[];
    valueProps?: {
      title: string;
      items: string[];
    };
  };
}

export const POS_PACKAGES: PricingPlan[] = [
  {
    id: 'pos-basic',
    name: 'Paket BASIC',
    price: 'Rp 4.500.000',
    originalPrice: 'Rp 6.000.000',
    description: 'Cocok untuk: UMKM kecil, kios, barbershop, kedai minuman.',
    features: [
      'Point of Sale (Kasir) dasar',
      'Manajemen Produk (CRUD)',
      'Kategori Produk',
      'Diskon per item / per transaksi',
      'Cetak Struk Thermal (USB/Bluetooth)',
      'Riwayat Transaksi',
      'Laporan Penjualan Harian',
      'Multi User (Admin + Kasir)',
      'Dashboard sederhana',
      'Backup & Restore data manual',
      'Revisi 2x',
      'Maintenance 15 hari',
      'Free Tutorial Video'
    ],
    isPopular: false,
    cta: 'Ambil Paket Basic',
    icon: ShoppingBasket,
    details: [
      {
        feature: "Mencegah Kebocoran",
        problem: "Catatan manual/Excel rawan salah hitung, salah input, atau manipulasi.",
        solution: "Transaksi otomatis tercatat, transparan, dan tidak bisa diubah seenaknya.",
        benefit: "Keuangan lebih aman dan akurat."
      },
      {
        feature: "Kecepatan Layanan",
        problem: "Menghitung manual bikin antrean panjang saat jam ramai.",
        solution: "Tinggal klik produk, hitung otomatis, cetak struk instan.",
        benefit: "Layanan lebih cepat = pelanggan lebih puas."
      },
      {
        feature: "Hemat Biaya Operasional",
        problem: "Rekap laporan manual tiap malam makan waktu.",
        solution: "Rekap otomatis, laporan tinggal buka, gak perlu admin tambahan.",
        benefit: "Hemat waktu & biaya untuk jangka panjang."
      }
    ]
  },
  {
    id: 'pos-standard',
    name: 'Paket STANDARD',
    price: 'Rp 8.500.000',
    originalPrice: 'Rp 12.000.000',
    description: 'Cocok untuk: restoran, toko baju, toko kelontong, retail menengah.',
    features: [
      'Semua fitur BASIC',
      'Manajemen Stok / Inventory',
      'Notifikasi Stok Menipis',
      'Modifiers (extra topping, size)',
      'Multiple Payment (QRIS + Cash)',
      'Keamanan User (Role Detail)',
      'Laporan Lengkap (Laba Kotor)',
      'Struk Custom (Logo)',
      'Export Laporan (PDF/Excel)',
      'Dashboard Real-time',
      'Revisi 2x',
      'Maintenance 30 hari',
      'Free Tutorial Video'
    ],
    isPopular: true,
    cta: 'Ambil Paket Standard',
    icon: Barcode,
    details: [
      {
        feature: "Kontrol Stok Rapi",
        problem: "Barang hilang, habis telat reorder, atau menumpuk gak laku.",
        solution: "Notifikasi stok menipis, riwayat keluar/masuk, laporan barang terlaris.",
        benefit: "Stop kerugian stok & keputusan pembelian lebih tepat."
      },
      {
        feature: "Pantau Dari Mana Saja",
        problem: "Owner harus nongkrong di toko sepanjang hari.",
        solution: "Laporan omzet, performa kasir bisa dilihat dari HP/Laptop.",
        benefit: "Kebebasan waktu bagi owner bisnis."
      },
      {
        feature: "Keputusan Berbasis Data",
        problem: "Ambil keputusan cuma pakai perasaan.",
        solution: "Data tren penjualan, jam ramai, dan kategori terlaris tercatat otomatis.",
        benefit: "Bisnis tumbuh lebih cepat dan terukur."
      }
    ]
  },
  {
    id: 'pos-premium',
    name: 'Paket PREMIUM',
    price: 'Rp 14.900.000',
    originalPrice: 'Rp 20.000.000',
    description: 'Cocok untuk: restoran besar, chain store, minimarket, multi-device.',
    features: [
      'Semua fitur STANDARD',
      'Multi Cabang + Multi Kasir',
      'Multi Device (Mobile/Tablet/Laptop)',
      'Manajemen Supplier',
      'Purchase Order (PO) & Auto Refill',
      'Laporan COGS (HPP) Lengkap',
      'Manajemen Hak Akses Lanjutan',
      'Integrasi QRIS Gateway (Midtrans)',
      'Printer Dapur / Bar (Optional)',
      'Mode Offline (Auto Sync)',
      'Custom Fitur Ringan',
      'Revisi 2x & Maintenance 45 hari',
      'Free Tutorial Video'
    ],
    isPopular: false,
    cta: 'Ambil Paket Premium',
    icon: Network,
    details: [
      {
        feature: "Siap Scale Up",
        problem: "Sistem manual amburadul saat nambah cabang/produk.",
        solution: "Support multi cabang, multi kasir, dan transfer stok antar cabang.",
        benefit: "Skalabilitas lebih gampang & profesional."
      },
      {
        feature: "Supply Chain",
        problem: "Ribet urus supplier dan restock.",
        solution: "Manajemen supplier, PO, dan Auto Stok Refill.",
        benefit: "Operasional gudang lebih efisien."
      },
      {
        feature: "Integrasi Payment",
        problem: "Pembayaran non-tunai tidak terverifikasi otomatis.",
        solution: "Integrasi QRIS Gateway (Midtrans/Xendit) untuk status lunas otomatis.",
        benefit: "Pembukuan keuangan lebih rapi."
      }
    ]
  }
];

export const QUEUE_PACKAGES: PricingPlan[] = [
  {
    id: 'queue-basic',
    name: 'BASIC QUEUE',
    price: 'Rp 3.500.000',
    originalPrice: 'Rp 5.000.000',
    description: 'Single Counter Queue. Antrian basic tapi rapi untuk UKM, Klinik Kecil, atau Service Center.',
    features: [
      'Sistem antrian sederhana (1 Layanan/Loket)',
      'Cetak nomor antrian (Thermal Bluetooth)',
      'Display antrian sederhana (Web Based)',
      'Panggilan nomor manual (Klik to Call)',
      'Dashboard Next/Hold/Recall',
      'Statistik Harian',
      'Mode Responsif (TV/Tablet)',
      'Branding warna sesuai bisnis',
      'Revisi 2x & Maintenance 15 Hari'
    ],
    isPopular: false,
    cta: 'Ambil Basic Queue',
    icon: Users,
    details: [
      {
        feature: "Hilangkan Penumpukan",
        problem: "Pelanggan numpuk di depan loket, terlihat tidak profesional.",
        solution: "Pelanggan ambil nomor, duduk santai, nomor berjalan otomatis.",
        benefit: "First impression bagus, ruangan tertib dan rapi."
      },
      {
        feature: "Kurangi Emosi Pelanggan",
        problem: "Diserobot, lupa urutan, salah panggil bikin pelanggan marah.",
        solution: "Sistem digital adil, teratur, dan transparan.",
        benefit: "Konflik berkurang, pelanggan lebih tenang."
      },
      {
        feature: "Efisien & Modern",
        problem: "Antrian manual, teriak panggil nama, minim kontak.",
        solution: "Tiket digital/thermal, panggilan sistem.",
        benefit: "Lebih higienis, aman, dan modern pasca-pandemi."
      }
    ]
  },
  {
    id: 'queue-standard',
    name: 'STANDARD QUEUE',
    price: 'Rp 5.900.000',
    originalPrice: 'Rp 8.500.000',
    description: 'Multi Service + Voice Call. Solusi ideal untuk Puskesmas, Bengkel, atau Kantor Pelayanan.',
    features: [
      'Semua fitur BASIC',
      'Multi Layanan (CS/Kasir/Obat)',
      'Multi Loket/Counter',
      'Voice Call Otomatis (Suara Google)',
      'Custom Prefix (A-001, B-001)',
      'Real-time Dashboard Display TV',
      'Statistik Mingguan/Bulanan',
      'Log Aktivitas Petugas',
      'Revisi 4x & Maintenance 30 Hari'
    ],
    isPopular: true,
    cta: 'Ambil Standard Queue',
    icon: Volume2,
    details: [
      {
        feature: "Efisiensi Staff",
        problem: "Staf capek teriak panggil nomor, bingung urutan.",
        solution: "Panggilan suara otomatis, dashboard monitor antrian.",
        benefit: "Produktivitas naik, waktu pelayanan lebih singkat."
      },
      {
        feature: "Pengalaman Profesional",
        problem: "Bisnis terkesan berantakan dan manual.",
        solution: "Sistem antrian digital memberi kesan terpercaya dan 'corporate'.",
        benefit: "Bisnis kecil terlihat level menengah-premium."
      },
      {
        feature: "Data untuk Manajemen",
        problem: "Tidak tahu jam ramai atau layanan favorit.",
        solution: "Statistik kunjungan harian, layanan terbanyak, performa loket.",
        benefit: "Owner bisa hitung kebutuhan staf & jam operasional akurat."
      }
    ]
  },
  {
    id: 'queue-premium',
    name: 'PREMIUM QUEUE',
    price: 'Rp 9.500.000',
    originalPrice: 'Rp 14.000.000',
    description: 'Advanced Queue + Monitoring. Untuk RS, Bank, atau Instansi dengan kebutuhan kompleks.',
    features: [
      'Semua fitur STANDARD',
      'Manajemen Multi Cabang',
      'Tampilan Display Premium (Full Animasi)',
      'Custom Voice (Pria/Wanita)',
      'Auto Distribute ke Counter Tersedia',
      'Laporan Performa Petugas (KPI)',
      'Mode Offline Sync',
      'Penjadwalan Jam Layanan',
      'Revisi 6x & Maintenance 45 Hari'
    ],
    isPopular: false,
    cta: 'Konsultasi Premium',
    icon: MonitorPlay,
    details: [
      {
        feature: "Kurangi Beban Admin",
        problem: "Salah panggil, tercampur layanan, antrian hilang.",
        solution: "Sistem otomatis mengatur distribusi antrian.",
        benefit: "Staff tenang, human error diminimalisir."
      },
      {
        feature: "Scale Up Ready",
        problem: "Bisnis berkembang punya banyak layanan/cabang.",
        solution: "Sistem siap multi-cabang dan multi-layanan.",
        benefit: "Aset jangka panjang yang siap berkembang."
      },
      {
        feature: "Monitoring Terpusat",
        problem: "Sulit pantau antrian di banyak cabang.",
        solution: "Monitoring center untuk melihat kepadatan antrian real-time.",
        benefit: "Kontrol penuh dari pusat."
      }
    ]
  }
];

export const ATTENDANCE_PACKAGES: PricingPlan[] = [
  {
    id: 'attendance-basic',
    name: 'BASIC ATTENDANCE',
    price: 'Rp 3.500.000',
    originalPrice: 'Rp 5.000.000',
    description: 'QR Attendance Starter. Solusi absen digital hemat untuk hilangkan titip absen.',
    features: [
      'Absensi QR Check-in & Check-out',
      'Rekap harian & bulanan otomatis',
      'Export CSV/Excel basic',
      'User role admin & staff',
      'Pengaturan jam kerja',
      'Dashboard sederhana',
      '2x revisi',
      'Maintenance 15 hari'
    ],
    isPopular: false,
    cta: 'Ambil Basic Presensi',
    icon: Fingerprint,
    details: [
      {
        feature: "Hilangkan Kecurangan",
        problem: "Titip absen, jam dimundurin, data dihapus manual.",
        solution: "QR + Sistem Digital menghilangkan celah manipulasi.",
        benefit: "Data jauh lebih jujur dan akurat."
      },
      {
        feature: "Data Aman",
        problem: "Buku absen rusak, hilang, atau ketumpahan kopi.",
        solution: "Semua data tersimpan rapi di database cloud.",
        benefit: "Tidak ada risiko kehilangan data presensi."
      },
      {
        feature: "Hemat Admin",
        problem: "Satu admin khusus rekap presensi manual.",
        solution: "Proses rekap otomatis oleh sistem.",
        benefit: "Kurangi biaya admin atau alihkan ke tugas lain."
      }
    ]
  },
  {
    id: 'attendance-standard',
    name: 'STANDARD ATTENDANCE',
    price: 'Rp 6.000.000',
    originalPrice: 'Rp 8.500.000',
    description: 'Smart Attendance + GPS Lock. Paling laku untuk bisnis dengan tim mobile/lapangan.',
    features: [
      'Semua fitur BASIC',
      'GPS Lock (Anti absen luar area)',
      'Selfie Validation (Bukti foto)',
      'Multi Shift Support',
      'Sistem Cuti (Izin, Sakit, WFH)',
      'Peta Lokasi Absensi',
      'Notifikasi Telat / Pulang Cepat',
      'Dashboard Lengkap',
      '4x revisi & Maintenance 30 hari'
    ],
    isPopular: true,
    cta: 'Ambil Standard Presensi',
    icon: MapPin,
    details: [
      {
        feature: "Monitoring Real-time",
        problem: "Owner tidak tahu siapa telat atau bolos tanpa tanya admin.",
        solution: "Dashboard real-time status kehadiran karyawan.",
        benefit: "Pantau kedisiplinan langsung dari HP."
      },
      {
        feature: "Rekap Gaji Cepat",
        problem: "Hitung telat, lembur, cuti makan waktu berhari-hari.",
        solution: "Rekap kehadiran otomatis terhubung ke data gaji.",
        benefit: "Hemat waktu rekap gaji tiap bulan."
      },
      {
        feature: "Bisnis Profesional",
        problem: "Karyawan santai karena pengawasan longgar.",
        solution: "Sistem ketat (GPS + Selfie) mendisiplinkan karyawan.",
        benefit: "Disiplin naik, produktivitas kerja meningkat."
      }
    ]
  },
  {
    id: 'attendance-premium',
    name: 'PREMIUM ATTENDANCE',
    price: 'Rp 9.500.000',
    originalPrice: 'Rp 14.000.000',
    description: 'Enterprise Performance. Untuk perusahaan multi-cabang dengan kebutuhan payroll otomatis.',
    features: [
      'Semua fitur STANDARD',
      'Multi Cabang Management',
      'Face Recognition (Webcam)',
      'GPS Akurasi Tinggi',
      'Payroll Auto (Hitung Jam Kerja)',
      'Performance Tracking',
      'Approval Cuti Berlevel',
      'Integrasi Sistem Lain (API)',
      '6x revisi & Maintenance 45 hari'
    ],
    isPopular: false,
    cta: 'Konsultasi Premium',
    icon: ScanFace,
    details: [
      {
        feature: "Multi Cabang",
        problem: "Susah pantau pegawai di banyak cabang dengan manual.",
        solution: "Satu dashboard untuk semua cabang, data tidak tercampur.",
        benefit: "Owner kontrol penuh seluruh operasional cabang."
      },
      {
        feature: "Audit & HRD Rapi",
        problem: "Komplain gaji atau jam kerja, data berantakan.",
        solution: "Log aktivitas lengkap dan transparan.",
        benefit: "Mudah diaudit dan meminimalisir sengketa karyawan."
      },
      {
        feature: "Teknologi Canggih",
        problem: "Selfie masih bisa diakali (jarang terjadi tapi mungkin).",
        solution: "Face Recognition dan GPS High Accuracy.",
        benefit: "Keamanan data kehadiran level enterprise."
      }
    ]
  }
];

export const SERVICE_PRICING: Record<string, PricingPlan[]> = {
  'pos-system': POS_PACKAGES,
  'landing-page': [
    {
      id: 'lp-starter',
      name: 'STARTER',
      price: 'Rp 900.000',
      originalPrice: 'Rp 2.000.000',
      description: 'Single Page / Simple Landing Page. Solusi cepat & hemat untuk presence online.',
      features: [
        'Single Page Layout (Rapi & Simpel)',
        'Desain Responsif (Mobile Friendly)',
        'Konten Dasar (Hero, Produk, Benefit)',
        'CTA Button (WA/Kontak/Order)',
        'Form Kontak Sederhana (Opsional)',
        'Setup Domain & Hosting Dasar',
        'Basic SEO On-Page',
        'Full Source Code (Handover)',
        'Panduan Update Konten Dasar',
        '2x Revisi Minor',
        'Garansi & Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket STARTER',
      icon: Rocket,
      modalDetails: {
        sections: [
          {
            title: "🌐 Tampilan & Struktur Halaman",
            items: [
              "Satu halaman (single-page) layout rapi & simpel.",
              "Hero/banner, headline, value proposition, dan CTA.",
              "Desain responsif: optimal di desktop, tablet, dan HP."
            ]
          },
          {
            title: "📄 Konten & Fungsi Dasar",
            items: [
              "Elemen dasar: foto produk, deskripsi, benefit.",
              "CTA langsung ke WhatsApp/Kontak/Order.",
              "Form kontak/lead capture sederhana (opsional)."
            ]
          },
          {
            title: "🛠️ Setup & Deployment",
            items: [
              "Setup & konfigurasi domain + hosting dasar.",
              "Struktur kode sederhana & ringan.",
              "Basic SEO on-page: meta tag dasar, URL friendly."
            ]
          },
          {
            title: "📄 Dokumentasi & Handover",
            items: [
              "Handover full source code & aset.",
              "Panduan singkat update konten dasar.",
              "2x revisi minor setelah implementasi awal."
            ]
          }
        ],
        valueProps: {
          title: "🎯 Untuk Siapa Paket Starter Ini Cocok",
          items: [
            "Pelaku usaha kecil / UMKM / freelancer yang ingin online cepat.",
            "Bisnis fokus pada 1-2 produk/layanan saja.",
            "Kampanye khusus: promosi, pre-order, launching produk.",
            "Budget terbatas tapi ingin presence online profesional."
          ]
        }
      }
    },
    {
      id: 'lp-growth',
      name: 'GROWTH',
      price: 'Rp 1.500.000',
      originalPrice: 'Rp 2.500.000',
      description: 'Landing Page + Optimasi & Konversi. Desain profesional untuk hasil nyata.',
      features: [
        'Desain Profesional & Konversi-Ramah',
        'Struktur Konten Terorganisir',
        'CTA Persuasif & Jelas',
        'Form Lead / Order Sederhana',
        'Social Proof (Testimoni/Badge)',
        'Optimasi Kecepatan & Performa',
        'SEO Dasar & Optimasi On-Page',
        'Integrasi Tracking / Analitik',
        'Full Source Code & Aset',
        '4x Revisi Minor',
        'Garansi & Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Paket GROWTH',
      icon: Zap,
      modalDetails: {
        sections: [
          {
            title: "🌐 Tampilan & Struktur — Konversi-Ramah",
            items: [
              "Desain bersih, modern, ditata untuk konversi.",
              "Hero menarik, value-proposition jelas, visual mendukung.",
              "Struktur konten terorganisir (heading, bullet, icon).",
              "Responsif & mobile-friendly optimal."
            ]
          },
          {
            title: "🛠️ Konversi & Optimasi",
            items: [
              "CTA persuasif & mencolok.",
              "Form lead/kontak/order sederhana.",
              "Social proof: testimoni, badge kepercayaan.",
              "Optimasi kecepatan & loading ringan."
            ]
          },
          {
            title: "📈 Tracking & Analitik",
            items: [
              "Integrasi alat analitik (Google Analytics/Pixel).",
              "Pantau performa: pengunjung, konversi, sumber trafik.",
              "Dukungan optimasi konversi (CRO) dasar."
            ]
          },
          {
            title: "🧰 Deployment & Kepemilikan",
            items: [
              "Full source code & aset + akses penuh.",
              "Deployment + konfigurasi hosting + domain + SSL.",
              "Dokumentasi panduan ubah konten dasar.",
              "3x revisi minor setelah live."
            ]
          }
        ],
        valueProps: {
          title: "🎯 Untuk Siapa Paket Growth Ini Cocok",
          items: [
            "Bisnis/startup yang butuh alat konversi (bukan sekadar etalase).",
            "Pelaku usaha yang ingin data pengunjung & hasil nyata.",
            "Brand yang butuh profesionalisme & peluang scaling.",
            "Serius jangka menengah/panjang dengan aset digital."
          ]
        }
      }
    },
    {
      id: 'lp-ultimate',
      name: 'ULTIMATE',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 5.000.000',
      description: 'Landing Page Premium / High-End. Full Custom, Conversion-Ready & Layanan Lengkap.',
      features: [
        'Desain Kustom Penuh & Branding',
        'Struktur Komprehensif (Banyak Section)',
        'Copywriting Persuasif & Konversi',
        'Lead Capture & Funnel Lanjutan',
        'Integrasi Tracking & Analitik Lengkap',
        'Optimasi Performa & Kecepatan Tinggi',
        'SEO On-Page & Technical',
        'Setup Hosting, Domain, SSL Premium',
        'Dokumentasi Lengkap & Hak Milik Penuh',
        '6x Revisi Minor',
        'Garansi & Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket ULTIMATE',
      icon: Crown,
      modalDetails: {
        sections: [
          {
            title: "🌐 Tampilan, Struktur & Branding Lengkap",
            items: [
              "Desain kustom penuh sesuai identitas brand.",
              "Struktur komprehensif: hero, fitur, galeri, testimoni, FAQ, pricing.",
              "Desain responsif & mobile-first optimal."
            ]
          },
          {
            title: "📈 Optimasi Konversi & UX Lanjutan",
            items: [
              "Copywriting persuasif & konversi-oriented.",
              "Lead capture / form & funnel integrasi (Email/CRM/WA).",
              "Integrasi tracking & analitik lengkap (Event tracking).",
              "Performance optimization: lazy loading, minifikasi, speed."
            ]
          },
          {
            title: "🧰 Fitur & Layanan Profesional",
            items: [
              "Deployment + setup hosting/server + SSL premium.",
              "Backup & security dasar, proteksi spam.",
              "Dokumentasi lengkap & hak milik penuh.",
              "Layanan tambahan custom (integrasi API, multi-bahasa, dll)."
            ]
          },
          {
            title: "🚀 Value & Orientasi Jangka Panjang",
            items: [
              "Siap untuk kampanye iklan/marketing intensif.",
              "Struktur scalable: bisa dikembangkan jadi website penuh.",
              "Fokus konversi, branding, kecepatan, & keamanan."
            ]
          }
        ],
        valueProps: {
          title: "🎯 Untuk Siapa Paket Ultimate Ini Cocok",
          items: [
            "Brand profesional / produk premium yang butuh trust tinggi.",
            "Kampanye besar: launching, pre-order, iklan skala besar.",
            "Perusahaan yang ingin aset digital serius & jangka panjang.",
            "Klien yang ingin hasil maksimal & layanan all-in-one."
          ]
        }
      }
    }
  ],
  'company-profile': [
    {
      id: 'cp-starter',
      name: 'STARTER',
      price: 'Rp 2.000.000',
      originalPrice: 'Rp 4.000.000',
      description: 'Etalase Online Sederhana. Cocok untuk UKM & Startup baru.',
      features: [
        '4 Halaman (Home, About, Services, Contact)',
        'Desain Sederhana & Profesional',
        'Mobile Friendly / Responsif',
        'Profil & Layanan Perusahaan',
        'Kontak & Peta Lokasi',
        'Setup Domain & Hosting Dasar',
        'Basic SEO On-Page',
        'Full Source Code (Handover)',
        'Panduan Update Konten',
        '2x Revisi Minor',
        'Garansi & Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Starter',
      icon: Globe,
      modalDetails: {
        sections: [
          {
            title: "🌐 Struktur & Tampilan Halaman Dasar",
            items: [
              "Halaman beranda (home) + Tentang Kami (About) + Layanan (Services) + Kontak.",
              "Desain sederhana tapi profesional — tampilan bersih, rapi, dan mobile-friendly.",
              "Navigasi dasar yang memudahkan user menjelajahi website."
            ]
          },
          {
            title: "📄 Konten & Informasi Perusahaan",
            items: [
              "Profil perusahaan, visi-misi, dan nilai perusahaan.",
              "Daftar layanan/produk yang ditawarkan.",
              "Informasi kontak lengkap & peta lokasi (Google Maps).",
              "Integrasi link media sosial perusahaan."
            ]
          },
          {
            title: "🛠️ Setup & Deployment Dasar",
            items: [
              "Setup domain + hosting dasar (shared/ringan).",
              "Struktur kode sederhana & cepat loading.",
              "Basic SEO on-page: meta tag dasar & struktur HTML rapi."
            ]
          },
          {
            title: "📄 Dokumentasi & Layanan",
            items: [
              "Full source code + akses admin/data (Handover).",
              "Panduan singkat update konten dasar.",
              "2x revisi minor & Maintenance 15 Hari."
            ]
          }
        ],
        valueProps: {
          title: "🎯 Untuk Siapa Paket Starter Ini Cocok",
          items: [
            "UKM, startup kecil, atau bisnis baru yang ingin 'etalase online'.",
            "Usaha yang belum butuh fitur kompleks, cukup profil & kontak.",
            "Pelaku usaha dengan budget terbatas untuk 'kanvas awal'.",
            "Perusahaan yang butuh identitas resmi & sarana branding."
          ]
        }
      }
    },
    {
      id: 'cp-growth',
      name: 'GROWTH',
      price: 'Rp 3.000.000',
      originalPrice: 'Rp 5.500.000',
      description: 'Upgrade & Siap Tumbuh. Desain custom brand identity & fitur lengkap.',
      features: [
        '6 Halaman (+Portfolio, Blog Opsional)',
        'Desain Custom Brand Identity',
        'Portofolio / Galeri Proyek',
        'Testimoni & Social Proof',
        'Form Kontak / Leads',
        'SEO Standard & Optimasi Performa',
        'Integrasi Analytics / Tracking',
        'CMS / Admin Panel (Opsional)',
        'Full Source Code & Aset',
        '4x Revisi Minor',
        'Garansi & Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Paket Growth',
      icon: Building2,
      modalDetails: {
        sections: [
          {
            title: "🌐 Struktur Lengkap & Brand Identity",
            items: [
              "6 Halaman: Home, About, Services, Portfolio/Galeri, Blog (opsional), Contact.",
              "Desain profesional & kustom sesuai identitas brand (logo, warna, font).",
              "Navigasi & struktur user-friendly yang rapi."
            ]
          },
          {
            title: "📄 Konten Kredibilitas & Interaksi",
            items: [
              "Profil lengkap, portofolio/galeri proyek, & testimoni.",
              "Halaman kontak lengkap dengan form inquiry/leads.",
              "Integrasi chat/WhatsApp untuk komunikasi real-time."
            ]
          },
          {
            title: "🔎 SEO & Performa",
            items: [
              "Struktur SEO-friendly (meta tag, heading, alt text).",
              "Optimasi performa & loading cepat (desktop + mobile).",
              "Integrasi analytics/tracking untuk monitoring pengunjung."
            ]
          },
          {
            title: "📄 Dokumentasi & Kontrol",
            items: [
              "Full source code + aset + akses lengkap.",
              "Panduan update konten mandiri.",
              "4x revisi minor & Maintenance 30 Hari."
            ]
          }
        ],
        valueProps: {
          title: "🎯 Untuk Siapa Paket Growth Ini Cocok",
          items: [
            "Perusahaan yang ingin memperkuat identitas & kredibilitas.",
            "Bisnis yang ingin menampilkan portofolio & testimoni.",
            "Usaha yang mencari leads/klien via website.",
            "Brand yang ingin website jangka panjang & mudah dikembangkan."
          ]
        }
      }
    },
    {
      id: 'cp-ultimate',
      name: 'ULTIMATE',
      price: 'Rp 4.000.000',
      originalPrice: 'Rp 6.000.000',
      description: 'Full-Featured & Premium. Website eksklusif untuk aset marketing jangka panjang.',
      features: [
        '10+ Halaman Lengkap (+Karir, Team)',
        'Desain Kustom Penuh & Premium',
        'Fitur Blog / Berita / Artikel',
        'Portofolio Unlimited + Filter',
        'SEO Advanced & Technical',
        'High Performance Optimization',
        'CMS / Manajemen Konten Lengkap',
        'Setup Server/Hosting Premium',
        'Prioritas Support',
        'Prioritas Support',
        '6x Revisi Minor',
        'Garansi & Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Ultimate',
      icon: Crown,
      modalDetails: {
        sections: [
          {
            title: "🌐 Tampilan Premium & Struktur Komprehensif",
            items: [
              "Desain kustom penuh, eksklusif & mencerminkan brand identity.",
              "10+ Halaman: Home, About, Services, Portfolio, Blog, Karir, Team, dll.",
              "UX premium: navigasi mudah, struktur informasi jelas."
            ]
          },
          {
            title: "📄 Fitur Interaksi & Konten Lengkap",
            items: [
              "Portofolio unlimited dengan filter, testimoni dinamis.",
              "Blog/Artikel untuk SEO & engagement.",
              "Sistem kontak lengkap: form advanced, peta interaktif, live chat."
            ]
          },
          {
            title: "🔎 SEO, Performa & Infrastruktur",
            items: [
              "SEO Advanced & Technical (schema, speed optimization).",
              "Infrastruktur hosting/server premium & aman.",
              "CMS / Manajemen Konten untuk update mandiri yang mudah."
            ]
          },
          {
            title: "🛠️ Support & Layanan VIP",
            items: [
              "Dokumentasi lengkap & full handover.",
              "Prioritas support & maintenance.",
              "6x revisi minor & Maintenance 45 Hari."
            ]
          }
        ],
        valueProps: {
          title: "🎯 Untuk Siapa Paket Ultimate Ini Cocok",
          items: [
            "Korporasi atau brand profesional yang butuh citra kuat.",
            "Bisnis dengan layanan kompleks yang butuh portofolio detail.",
            "Perusahaan yang ingin aset digital jangka panjang & scalable.",
            "Klien yang butuh kontrol penuh, CMS, & performa tinggi."
          ]
        }
      }
    }
  ],
  'e-commerce': [
    {
      id: 'ec-basic',
      name: 'BASIC',
      price: 'Rp 4.000.000',
      originalPrice: 'Rp 6.500.000',
      description: 'E-Commerce Fullstack “Entry / Start-up”. Versi Minimal & Entry-Level.',
      features: [
        'Frontend & Landing Page Sederhana',
        'Katalog Produk (Grid/List View)',
        'Detail Produk (Foto Utama, Deskripsi)',
        'Shopping Cart & Checkout Sederhana',
        'Order Manual (Transfer/WA)',
        'Admin Panel Dasar (Produk & Order)',
        'Mobile Friendly & Responsif',
        'Setup Hosting & Domain Dasar',
        'Source Code & Database Full',
        'Dokumentasi Penggunaan Admin',
        '2x Revisi Minor',
        'Garansi & Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket BASIC',
      icon: ShoppingBag,
      modalDetails: {
        sections: [
          {
            title: "📦 Frontend & User Experience",
            items: [
              "Halaman utama sederhana: banner + info toko + link katalog.",
              "Halaman katalog produk: layout grid/list, kategori sederhana.",
              "Halaman detail produk: satu gambar utama, deskripsi, harga.",
              "Tampilan responsif / mobile-friendly di semua perangkat."
            ]
          },
          {
            title: "🛒 Fitur Belanja: Cart + Checkout Sederhana",
            items: [
              "Shopping cart: tambah, ubah jumlah, hapus produk.",
              "Checkout sederhana: form data pelanggan (nama, alamat, kontak).",
              "Metode pembayaran manual: transfer bank / konfirmasi WA (tanpa gateway otomatis)."
            ]
          },
          {
            title: "⚙️ Backend / Admin Panel Dasar",
            items: [
              "Admin login panel sederhana.",
              "Manajemen produk: tambah/edit/hapus, atur harga/stok dasar, upload gambar.",
              "Manajemen order sederhana: lihat daftar order masuk & detail pesanan."
            ]
          },
          {
            title: "🛠️ Teknis & Infrastruktur",
            items: [
              "Setup hosting + domain (shared/ringan) sesuai kesepakatan.",
              "Struktur kode sederhana & ringan (React + Laravel).",
              "Keamanan dasar: validasi input, proteksi standar."
            ]
          },
          {
            title: "🎁 Layanan Tambahan",
            items: [
              "Full source code + database (Hak Milik Penuh).",
              "Dokumentasi dasar penggunaan admin panel.",
              "Dokumentasi dasar penggunaan admin panel.",
              "2x revisi minor & Maintenance 15 Hari."
            ]
          }
        ],
        valueProps: {
          title: "🎯 Untuk Siapa Paket Basic Ini Cocok",
          items: [
            "UMKM kecil / bisnis rumahan yang ingin mulai jualan online.",
            "Usaha dengan produk sedikit & tidak butuh fitur kompleks.",
            "Pelaku usaha yang ingin 'uji pasar' dengan biaya minimal.",
            "Budget terbatas tapi ingin website milik sendiri (bukan marketplace)."
          ]
        }
      }
    },
    {
      id: 'ec-standard',
      name: 'STANDARD',
      price: 'Rp 7.500.000',
      originalPrice: 'Rp 12.000.000',
      description: 'E-Commerce Fullstack “Balanced”. Versi Menengah & Lebih Lengkap.',
      features: [
        'Frontend Profesional & Kategori Lengkap',
        'Detail Produk (Multi-Image, Variasi)',
        'Pencarian & Filter Produk',
        'Checkout & Payment Gateway Online',
        'Manajemen Order & Status Pengiriman',
        'Admin Panel Manajemen Kategori & Opsi',
        'Manajemen Akun Pelanggan (Login/Register)',
        'Struktur Kode Maintainable',
        'Setup Hosting, Domain, SSL',
        'Keamanan & Optimasi Dasar',
        '4x Revisi Minor',
        'Garansi & Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Paket STANDARD',
      icon: Store,
      modalDetails: {
        sections: [
          {
            title: "🌐 Frontend & User Experience (Menengah)",
            items: [
              "Halaman utama + kategori + katalog dengan tampilan lebih profesional.",
              "Detail produk: multi-image, deskripsi, variasi (warna/ukuran).",
              "Fitur pencarian (search), filter, & sorting produk.",
              "Navigasi & struktur menu yang baik untuk browsing nyaman."
            ]
          },
          {
            title: "🛒 Fitur Belanja & Transaksi (Semi-Otomatis)",
            items: [
              "Shopping cart fungsional.",
              "Checkout & Payment Gateway: pembayaran online aman (Virtual Account, E-Wallet).",
              "Sistem order backend: admin kelola status pembayaran/pengiriman."
            ]
          },
          {
            title: "🧑‍💼 Backend / Admin Panel Menengah",
            items: [
              "Manajemen produk lengkap: variasi, stok, multi-image.",
              "Manajemen kategori & opsi produk terstruktur.",
              "Manajemen order: konfirmasi pembayaran, update resi/status.",
              "Manajemen pengguna: pelanggan bisa register/login."
            ]
          },
          {
            title: "🔧 Infrastruktur & Profesionalisme",
            items: [
              "Setup hosting + domain + SSL untuk transaksi aman.",
              "Struktur kode lebih baik & maintainable untuk pengembangan.",
              "Keamanan standar e-commerce (enkripsi data penting)."
            ]
          }
        ],
        valueProps: {
          title: "🎯 Untuk Siapa Paket Standard Ini Cocok",
          items: [
            "Toko online berkembang yang butuh sistem lebih profesional.",
            "Usaha dengan katalog menengah & variasi produk.",
            "Pemilik toko yang ingin kemudahan manajemen order & pembayaran online.",
            "Siap scale up tapi belum butuh fitur enterprise."
          ]
        }
      }
    },
    {
      id: 'ec-pro',
      name: 'PRO',
      price: 'Rp 12.500.000',
      originalPrice: 'Rp 20.000.000',
      description: 'E-Commerce Fullstack “Premium”. Full-Features, Scalable & Aman.',
      features: [
        'Frontend Premium & Branding Kustom',
        'Detail Produk Lengkap (Galeri, Stok, Varian)',
        'Payment Gateway Lengkap & Otomatis',
        'Manajemen User, Wishlist & Review',
        'Admin Panel Komprehensif & Analitik',
        'Fitur Promosi (Diskon, Voucher)',
        'Optimasi Performa & Keamanan Tinggi',
        'Integrasi Logistik / Ongkir (Opsional)',
        'Support & Maintenance Prioritas',
        '6x Revisi Minor',
        'Garansi & Maintenance 45 Hari',
        'Skalabilitas Tinggi (Siap Trafik Besar)'
      ],
      isPopular: false,
      cta: 'Ambil Paket PRO',
      icon: Zap,
      modalDetails: {
        sections: [
          {
            title: "💎 Frontend & User Experience (Premium)",
            items: [
              "Desain profesional & branding kuat sesuai identitas bisnis.",
              "Detail produk lengkap: galeri, stok real-time, varian kompleks.",
              "Fitur canggih: Wishlist, Review & Rating, Rekomendasi Produk.",
              "UX optimal: navigasi jelas, breadcrumbs, mobile-first design."
            ]
          },
          {
            title: "💳 Transaksi & Otomatisasi Lengkap",
            items: [
              "Checkout & Payment Gateway lengkap (CC, VA, E-Wallet, QRIS).",
              "Opsi Login / Guest Checkout.",
              "Manajemen akun pelanggan: histori order, repeat order mudah.",
              "Sistem manajemen order & pembayaran otomatis."
            ]
          },
          {
            title: "📊 Backend / Admin Panel & Analitik",
            items: [
              "Admin panel komprehensif: CRUD lengkap, custom fields.",
              "Laporan & Dashboard Analitik: data penjualan, omzet, produk terlaris.",
              "Fitur Promosi: diskon, kupon/voucher, flash sale.",
              "Manajemen pelanggan & data order detail."
            ]
          },
          {
            title: "🔒 Infrastruktur & Skalabilitas",
            items: [
              "Setup server (VPS/Cloud) + Domain + SSL Premium.",
              "Optimasi performa (caching, speed) & keamanan tinggi.",
              "Arsitektur scalable: siap untuk trafik tinggi & pengembangan fitur masa depan."
            ]
          }
        ],
        valueProps: {
          title: "🎯 Untuk Siapa Paket Pro Ini Cocok",
          items: [
            "Brand besar / toko online serius yang siap scale up.",
            "Butuh sistem lengkap: pembayaran, stok, user, analitik, promo.",
            "Ingin kontrol penuh & fleksibilitas maksimal untuk jangka panjang.",
            "Mengutamakan keamanan, performa, dan pengalaman pelanggan terbaik."
          ]
        }
      }
    }
  ],
  'booking-system': [
    {
      id: 'book-basic',
      name: 'BASIC',
      price: 'Rp 2.900.000',
      originalPrice: 'Rp 4.000.000',
      description: 'Booking Starter. Solusi awal untuk barbershop, klinik, atau studio kecil.',
      features: [
        'Form Booking Sederhana',
        'Kalender Pilihan Tanggal',
        'Konfirmasi via Email/WA',
        'Mini Admin (Cek Booking)',
        'Integrasi WhatsApp Follow-up',
        'Gratis Domain & Hosting 6 Bulan',
        'Free Video Tutorial',
        '2x Revisi',
        'Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Basic',
      icon: Calendar,
      details: [
        {
          feature: "Pelanggan Malas Chat Manual",
          problem: "Calon pelanggan sering batal booking karena malas chat admin atau respon lama.",
          solution: "Fitur self-service dimana pelanggan bisa langsung pilih slot kosong sendiri.",
          benefit: "Mengurangi risiko lost lead karena proses yang ribet."
        },
        {
          feature: "Kurangi Miss-communication",
          problem: "Sering terjadi double-booking, salah jam, atau lupa catat nama di buku.",
          solution: "Sistem mencatat otomatis semua data booking dengan rapi dan akurat.",
          benefit: "Operasional bebas stres, risiko kesalahan manusia jadi minimal."
        },
        {
          feature: "Hemat Waktu Admin",
          problem: "Waktu habis hanya untuk membalas pertanyaan 'jam ini kosong nggak?'.",
          solution: "Booking masuk otomatis, pemilik/admin tinggal cek notifikasi.",
          benefit: "Bisa lebih fokus melayani pelanggan di lokasi atau pengembangan bisnis."
        }
      ]
    },
    {
      id: 'book-standard',
      name: 'STANDARD',
      price: 'Rp 4.500.000',
      originalPrice: 'Rp 6.500.000',
      description: 'Smart Booking System. Fitur durasi layanan otomatis dan manajemen staf.',
      features: [
        'Semua Fitur Basic',
        'Pilihan Layanan & Durasi',
        'Manajemen Staff/Terapis',
        'Blokir Jam Istirahat/Libur',
        'Reschedule Mandiri',
        'Laporan Booking Bulanan',
        'Custom Form Field',
        '4x Revisi',
        'Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Paket Standard',
      icon: Zap,
      details: [
        {
          feature: "Manajemen Durasi Otomatis",
          problem: "Jadwal berantakan karena estimasi durasi layanan tidak akurat.",
          solution: "Sistem otomatis memblokir slot waktu sesuai durasi layanan yang dipilih.",
          benefit: "Jadwal lebih presisi, tidak ada tumpang tindih antar pelanggan."
        },
        {
          feature: "Pilih Staf Favorit",
          problem: "Pelanggan ingin dilayani staf tertentu tapi susah atur jadwalnya.",
          solution: "Fitur pemilihan staf saat booking, otomatis cek ketersediaan staf tersebut.",
          benefit: "Kepuasan pelanggan meningkat, loyalitas terhadap staf terjaga."
        },
        {
          feature: "Reschedule Mandiri",
          problem: "Admin repot urus perubahan jadwal pelanggan.",
          solution: "Link reschedule yang bisa diakses pelanggan untuk ubah jadwal sendiri (H-1).",
          benefit: "Beban admin berkurang, pelanggan lebih leluasa."
        }
      ]
    },
    {
      id: 'book-premium',
      name: 'PREMIUM',
      price: 'Rp 6.500.000',
      originalPrice: 'Rp 10.000.000',
      description: 'Full Automation. Pembayaran DP otomatis dan fitur reminder canggih.',
      features: [
        'Semua Fitur Standard',
        'Integrasi Payment Gateway (DP)',
        'WhatsApp Automation (Reminder H-1)',
        'Sistem Membership / Diskon',
        'Multi-Cabang Support',
        'Sync Google Calendar',
        'Analitik Pelanggan Lengkap',
        '6x Revisi',
        'Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Premium',
      icon: Crown,
      details: [
        {
          feature: "Cegah No-Show",
          problem: "Pelanggan booking tapi tidak datang (ghosting).",
          solution: "Wajib DP saat booking & Reminder otomatis via WhatsApp H-1.",
          benefit: "Tingkat kehadiran naik drastis, omzet lebih terjamin."
        },
        {
          feature: "Database Pelanggan",
          problem: "Data riwayat treatment pelanggan tidak tercatat.",
          solution: "Rekam medis/riwayat booking tersimpan rapi untuk personalisasi layanan.",
          benefit: "Bisa tawarkan promo spesifik sesuai kebiasaan pelanggan (Retensi)."
        },
        {
          feature: "Multi-Lokasi",
          problem: "Punya beberapa cabang tapi sistem booking terpisah-pisah.",
          solution: "Satu sistem pusat untuk kelola jadwal semua cabang.",
          benefit: "Monitoring bisnis lebih mudah, standar layanan seragam."
        }
      ]
    }
  ],
  'travel-website': [
    {
      id: 'travel-basic',
      name: 'BASIC',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      description: 'Website Travel Starter. Tampilkan paket wisata dan galeri destinasi.',
      features: [
        'Landing Page Travel',
        'Katalog 6 Paket Wisata',
        'Detail Itinerary & Harga',
        'Tombol Booking WhatsApp',
        'Galeri Foto Destinasi',
        'Gratis Domain & Hosting',
        'Mobile Friendly',
        '2x Revisi',
        'Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Basic',
      icon: Plane,
      details: [
        {
          feature: "Katalog Digital Rapi",
          problem: "Capek kirim PDF/Foto paket wisata berulang-ulang ke calon tamu.",
          solution: "Website jadi katalog digital yang bisa diakses kapan saja.",
          benefit: "Info lengkap tersedia 24 jam, hemat waktu CS."
        },
        {
          feature: "Visual Destinasi",
          problem: "Foto di chat WA pecah/kurang meyakinkan.",
          solution: "Galeri foto HD dan layout menarik di website.",
          benefit: "Meningkatkan desire (keinginan) pelanggan untuk liburan."
        },
        {
          feature: "Trust Agen Travel",
          problem: "Banyak penipuan travel, pelanggan hati-hati.",
          solution: "Website resmi dengan domain .com meningkatkan kepercayaan.",
          benefit: "Closing lebih mudah karena kredibilitas terjaga."
        }
      ]
    },
    {
      id: 'travel-premium',
      name: 'PREMIUM',
      price: 'Rp 4.500.000',
      originalPrice: 'Rp 7.000.000',
      description: 'Professional Travel Agent. Unlimited paket & formulir booking lengkap.',
      features: [
        'Unlimited Paket Wisata',
        'Filter Destinasi / Kategori',
        'Form Booking Custom',
        'Blog Travel Tips',
        'Testimoni Pelanggan',
        'Integrasi Google Maps',
        'SEO Basic untuk Wisata',
        '4x Revisi',
        'Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Paket Premium',
      icon: Map,
      details: [
        {
          feature: "Pencarian Paket Mudah",
          problem: "Pelanggan bingung cari paket yang cocok.",
          solution: "Fitur filter berdasarkan lokasi, harga, atau durasi hari.",
          benefit: "User experience bagus, pelanggan cepat menemukan yang dicari."
        },
        {
          feature: "SEO Pariwisata",
          problem: "Ingin ditemukan turis yang cari 'Paket Wisata Bali' di Google.",
          solution: "Struktur web SEO friendly dan fitur blog untuk artikel wisata.",
          benefit: "Traffic gratis dari Google (Organic Search)."
        },
        {
          feature: "Data Tamu Lengkap",
          problem: "Data booking di WA sering tidak lengkap.",
          solution: "Form booking website meminta detail lengkap (Paspor/NIK/Tgl).",
          benefit: "Administrasi tour lebih rapi sejak awal."
        }
      ]
    },
    {
      id: 'travel-pro',
      name: 'PRO',
      price: 'Rp 7.500.000',
      originalPrice: 'Rp 12.000.000',
      description: 'Online Travel Agent (OTA) System. Pembayaran online & invoice otomatis.',
      features: [
        'Sistem Booking Engine',
        'Pilih Tanggal & Pax Realtime',
        'Payment Gateway (CC/VA)',
        'Invoice Otomatis Email',
        'Manajemen Seat/Kuota',
        'Dashboard Laporan Penjualan',
        'Member Area (Riwayat Trip)',
        '6x Revisi',
        'Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Pro',
      icon: Globe,
      details: [
        {
          feature: "Transaksi Instant",
          problem: "Proses transfer manual dan konfirmasi bukti bayar ribet.",
          solution: "Bayar pakai QRIS/VA, otomatis lunas dan tiket terbit.",
          benefit: "Cashflow lebih cepat, sistem kerja seperti Traveloka/Tiket.com."
        },
        {
          feature: "Manajemen Kuota",
          problem: "Takut overbooked di tanggal high season.",
          solution: "Sistem lock kuota otomatis saat ada yang booking.",
          benefit: "Mencegah kerugian akibat kesalahan administrasi seat."
        },
        {
          feature: "Database Member",
          problem: "Susah maintain pelanggan lama.",
          solution: "Member area untuk melihat riwayat trip dan poin reward.",
          benefit: "Repeat order lebih tinggi dengan program loyalitas."
        }
      ]
    }
  ],
  'revamp-website': [
    {
      id: 'revamp-basic',
      name: 'BASIC',
      price: 'Rp 1.700.000',
      originalPrice: 'Rp 2.500.000',
      description: 'Refresh Tampilan Utama. Fokus pada Homepage agar lebih modern.',
      features: [
        'Redesign Homepage (Halaman Depan)',
        'Perbaikan Navigasi Menu',
        'Mobile Responsiveness Fix',
        'Update Banner & Gambar',
        'Perbaikan Broken Link',
        'Optimasi Loading Dasar',
        'Backup Web Lama',
        '2x Revisi',
        'Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Revamp Basic',
      icon: RefreshCw,
      details: [
        {
          feature: "Kesan Pertama",
          problem: "Website lama terlihat jadul, pengunjung langsung close tab.",
          solution: "Homepage modern dengan UI/UX terkini.",
          benefit: "Bounce rate turun, pengunjung betah browsing."
        },
        {
          feature: "Mobile Friendly",
          problem: "Tampilan berantakan saat dibuka di HP.",
          solution: "Perbaikan layout agar responsif di semua ukuran layar.",
          benefit: "Menjangkau 80% pengguna internet yang pakai HP."
        },
        {
          feature: "Struktur Rapi",
          problem: "Menu membingungkan, pengunjung tersesat.",
          solution: "Navigasi disederhanakan dan diperjelas.",
          benefit: "Pengalaman pengguna (UX) lebih baik."
        }
      ]
    },
    {
      id: 'revamp-premium',
      name: 'PREMIUM',
      price: 'Rp 2.900.000',
      originalPrice: 'Rp 4.500.000',
      description: 'Total Redesign & Performance. Upgrade tampilan dan kecepatan website.',
      features: [
        'Redesign 5-6 Halaman Utama',
        'Optimasi Core Web Vitals (Speed)',
        'SEO On-Page Optimization',
        'Copywriting Refresh',
        'Integrasi CTA WhatsApp Baru',
        'Security Patch / Update Plugin',
        'Setup Analytics Terbaru',
        '4x Revisi',
        'Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Revamp Premium',
      icon: Hammer,
      details: [
        {
          feature: "Loading Cepat (Speed)",
          problem: "Website lemot, ditinggal pengunjung.",
          solution: "Optimasi kode, gambar, dan cache untuk loading < 3 detik.",
          benefit: "Ranking Google naik, user happy."
        },
        {
          feature: "SEO Boost",
          problem: "Traffic organik turun terus.",
          solution: "Perbaikan struktur heading, meta tags, dan sitemap.",
          benefit: "Website lebih mudah ditemukan di Google."
        },
        {
          feature: "Konversi Fokus",
          problem: "Banyak traffic tapi sedikit yang kontak.",
          solution: "Penataan ulang CTA dan copywriting yang menjual.",
          benefit: "Lebih banyak leads masuk dari pengunjung yang sama."
        }
      ]
    },
    {
      id: 'revamp-pro',
      name: 'PRO',
      price: 'Rp 4.500.000',
      originalPrice: 'Rp 7.000.000',
      description: 'Platform Migration / Rebuild. Pindah platform atau bangun ulang dengan teknologi baru.',
      features: [
        'Rebuild ulang (Misal: WP ke React/NextJS)',
        'Migrasi Semua Konten/Artikel',
        'Redesign UI/UX Full Custom',
        'Penambahan Fitur Baru Custom',
        'Advanced Security Setup',
        'Server Optimization / Pindah Hosting',
        'SEO Retention Strategy',
        '6x Revisi',
        'Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Revamp Pro',
      icon: Code2,
      details: [
        {
          feature: "Teknologi Modern",
          problem: "Website lama pakai teknologi usang yang rentan hack.",
          solution: "Rebuild dengan stack modern (Next.js/Laravel) yang aman & cepat.",
          benefit: "Website future-proof, aman, dan scalable."
        },
        {
          feature: "Fitur Custom",
          problem: "Website lama fiturnya terbatas, tidak bisa tambah ini itu.",
          solution: "Coding ulang memungkinkan penambahan fitur apa saja sesuai request.",
          benefit: "Sistem mengikuti perkembangan bisnis."
        },
        {
          feature: "SEO Retention",
          problem: "Takut ganti web malah ranking Google hilang.",
          solution: "Strategi redirect 301 dan migrasi URL yang hati-hati.",
          benefit: "Ranking aman, bahkan naik karena performa lebih baik."
        }
      ]
    }
  ]
};
