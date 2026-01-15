import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import BackToTop from "@/components/ui/BackToTop";
import StickyCTA from "@/components/ui/StickyCTA";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import KeyboardShortcuts from "@/components/utils/KeyboardShortcuts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Agam Latifullah - Full-Stack Developer & Booking System Specialist",
  description: "Agam Latifullah - Developer Solusi Bisnis UMKM. Spesialis Sistem Kasir (POS), Inventory, dan Website yang merapikan operasional bisnis Anda. Simpel, Cepat, Tanpa Biaya Bulanan.",
  keywords: "developer, booking system, web developer, full-stack, UMKM, bisnis, website, aplikasi",
  authors: [{ name: "Agam Latifullah" }],
  robots: "index, follow",
  metadataBase: new URL("https://agamlatiff.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://agamlatiff.com/",
    title: "Agam Latifullah - Full-Stack Developer",
    description: "Agam Latifullah - Developer Solusi Bisnis UMKM. Spesialis Sistem Kasir (POS), Inventory, dan Website yang merapikan operasional bisnis Anda. Simpel, Cepat, Tanpa Biaya Bulanan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    siteName: "Agam Latifullah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agam Latifullah - Full-Stack Developer",
    description: "Agam Latifullah - Developer Solusi Bisnis UMKM. Spesialis Sistem Kasir (POS), Inventory, dan Website yang merapikan operasional bisnis Anda. Simpel, Cepat, Tanpa Biaya Bulanan.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${redHatDisplay.variable} min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-primary/20 selection:text-primary-hover antialiased flex flex-col`}
      >
        <LanguageProvider>
          <ScrollProgress />
          <KeyboardShortcuts />
          <CustomCursor />
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <StickyCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
