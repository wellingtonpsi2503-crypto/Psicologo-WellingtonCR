import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './components/Hero';
import { LogoInterval } from './components/LogoInterval';
import { AboutSection } from './components/AboutSection';
import { ApproachHighlightSection } from './components/ApproachHighlightSection';
import { PillarsSection } from './components/PillarsSection';
import { StructureSection } from './components/StructureSection';
import { AgendaSection } from './components/AgendaSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyPage } from './components/PrivacyPage';
import { ApproachPage } from './components/ApproachPage';
import { useAnalytics } from './hooks/useAnalytics';
import './styles/main.css';

function App() {
  const { trackPageView } = useAnalytics();
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;

      if (path === '/privacidade') {
        setCurrentPage('privacy');
      } else if (path === '/abordagem-e-pilares') {
        setCurrentPage('approach');
      } else {
        setCurrentPage('home');
      }

      trackPageView(path);
      window.scrollTo(0, 0);
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackPageView]);

  let pageContent;

  if (currentPage === 'privacy') {
    pageContent = <PrivacyPage />;
  } else if (currentPage === 'approach') {
    pageContent = <ApproachPage />;
  } else {
    pageContent = (
      <>
        <Header />
        <main className="home-shell">
          <Hero />
          <AboutSection />
          <LogoInterval />
          <ApproachHighlightSection />
          <LogoInterval />
          <PillarsSection />
          <LogoInterval />
          <StructureSection />
          <LogoInterval />
          <AgendaSection />
          <LogoInterval />
          <FAQSection />
          <LogoInterval />
          <ContactSection />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className="app site-shell">
      <BackgroundEffects />
      {pageContent}
    </div>
  );
}

export default App;
