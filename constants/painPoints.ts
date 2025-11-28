import { Clock, BadgeCheck, Zap, LineChart } from 'lucide-react';

export const PAIN_POINTS = [
  {
    id: 1,
    problem: "Proses Manual Buang Waktu & Bikin Antri",
    impact: "Pelanggan harus tunggu chat dibalas, antre di tempat, atau menunggu respon lama. Potensi omzet hilang hanya karena proses lambat.",
    solution: "Self-Service (QR/Web)",
    solutionDescription: "Pelanggan order sendiri via QR/Web. Antrean berkurang, respon instan, dan penjualan naik tanpa tambah staf.",
    icon: Clock,
  },
  {
    id: 2,
    problem: "Bisnis Terlihat Kurang Profesional",
    impact: "Tanpa website atau tampilan yang modern, pelanggan ragu transfer dan gampang lari ke kompetitor.",
    solution: "Website & Branding Kuat",
    solutionDescription: "Tampilan profesional & terpercaya. Meningkatkan rasa aman saat transaksi & stand out dari kompetitor.",
    icon: BadgeCheck,
  },
  {
    id: 3,
    problem: "Owner & Karyawan Kewalahan",
    impact: "Harus balas chat berulang, input data manual, hitung stok, dan rekap laporan tiap hari. Capek, lambat, rawan salah.",
    solution: "Otomasi Hemat Waktu",
    solutionDescription: "Chat, Order, Notifikasi, Stok, & Laporan serba otomatis. Lebih cepat, minim error, hemat tenaga.",
    icon: Zap,
  },
  {
    id: 4,
    problem: "Keputusan Bisnis Masih 'Feeling'",
    impact: "Tanpa data jelas, owner sering menebak-nebak: Produk mana yang laku? Penjualan naik atau turun? Jam paling ramai kapan?",
    solution: "Kontrol Penuh via Data",
    solutionDescription: "Laporan real-time dengan insight produk, pelanggan, dan jam ramai. Keputusan lebih tepat & terukur.",
    icon: LineChart,
  }
];