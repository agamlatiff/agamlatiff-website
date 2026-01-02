import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Pages
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

// UI Utils
import BackToTop from '@/components/ui/BackToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';
import StickyCTA from '@/components/ui/StickyCTA';
import ScrollToTop from '@/components/utils/ScrollToTop';
import ErrorBoundary from '@/components/utils/ErrorBoundary';
import KeyboardShortcuts from '@/components/utils/KeyboardShortcuts';
import PageTransition from '@/components/utils/PageTransition';
import { LanguageProvider } from '@/context/LanguageContext';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <ScrollProgress />
          <KeyboardShortcuts />
          <div className="min-h-screen bg-gray-50 dark:bg-slate-950 font-sans selection:bg-primary/20 selection:text-primary-hover transition-colors duration-300 flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects/:slug" element={<ProjectDetail />} />
                </Routes>
              </PageTransition>
            </main>
            <Footer />
            <BackToTop />
            <StickyCTA />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
