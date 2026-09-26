import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import KeyboardShortcuts from "@/components/utils/KeyboardShortcuts";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Agam Latifullah — Full-Stack Developer & Software Engineer",
  description: "Personal portfolio of Agam Latifullah. Full-Stack Developer specializing in Next.js, TypeScript, Golang, and Clean Architecture.",
  keywords: "Agam Latifullah, Full-Stack Developer, Software Engineer, Next.js, Golang, TypeScript, React, PostgreSQL, Laravel",
  authors: [{ name: "Agam Latifullah" }],
  robots: "index, follow",
  metadataBase: new URL("https://agamlatiff.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://agamlatiff.com/",
    title: "Agam Latifullah — Full-Stack Developer & Software Engineer",
    description: "Personal portfolio of Agam Latifullah. Full-Stack Developer specializing in Next.js, TypeScript, Golang, and Clean Architecture.",
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
    title: "Agam Latifullah — Full-Stack Developer & Software Engineer",
    description: "Personal portfolio of Agam Latifullah. Full-Stack Developer specializing in Next.js, TypeScript, Golang, and Clean Architecture.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} min-h-screen bg-[#09090b] font-sans text-zinc-100 selection:bg-zinc-100 selection:text-zinc-950 antialiased flex flex-col transition-colors duration-200`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <KeyboardShortcuts />
            <Navbar />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
