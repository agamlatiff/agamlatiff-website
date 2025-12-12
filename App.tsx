
import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('@/pages/Home'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

// UI Utils
import BackToTop from '@/components/ui/BackToTop';
import FloatingContact from '@/components/ui/FloatingContact';
import ChatWidget from '@/components/ui/ChatWidget';
import ScrollToTop from '@/components/utils/ScrollToTop';
import { LanguageProvider } from '@/context/LanguageContext';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 font-sans selection:bg-primary/20 selection:text-primary-hover transition-colors duration-300 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Loading...</p>
                </div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home onOpenChat={() => setIsChatOpen(true)} />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage onOpenChat={() => setIsChatOpen(true)} />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <BackToTop />
          <FloatingContact />
          <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
