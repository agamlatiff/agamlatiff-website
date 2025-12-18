import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Layout
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Pages
import Home from '@/pages/Home';

// UI Utils
import BackToTop from '@/components/ui/BackToTop';
import FloatingContact from '@/components/ui/FloatingContact';
import ScrollToTop from '@/components/utils/ScrollToTop';
import { LanguageProvider } from '@/context/LanguageContext';

const App: React.FC = () => {
  // Chat state kept for prop compatibility if needed later, but widget removed
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 font-sans selection:bg-primary/20 selection:text-primary-hover transition-colors duration-300 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Home onOpenChat={() => setIsChatOpen(true)} />
          </main>
          <Footer />
          <BackToTop />
          <FloatingContact />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
