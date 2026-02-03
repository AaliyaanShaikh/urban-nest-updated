import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyShowcase from './components/PropertyShowcase';
import StatsSection from './components/StatsSection';
import LifestyleSection from './components/LifestyleSection';
import Journal from './components/Journal';
import GlobalLocations from './components/GlobalLocations';
import CallToAction from './components/CallToAction';
import AIChatWidget from './components/AIChatWidget';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Philosophy from './components/Philosophy';
import FeaturedProperties from './components/FeaturedProperties';
import AgentsSection from './components/AgentsSection';
import { Property, ViewState } from './types';
import { generatePropertyDescription } from './services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';
import PropertyGrid from './components/PropertyGrid';
import CinematicGrid from './components/CinematicGrid';

function App() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [aiDescription, setAiDescription] = useState<string | null>(null);
  const [isLoadingDesc, setIsLoadingDesc] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollToSectionId, setScrollToSectionId] = useState<string | null>(null);

  useEffect(() => {
    // Simulate initial load for preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5s preloader
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Generate AI description when property is opened
  useEffect(() => {
    if (selectedProperty) {
      setAiDescription(null);
      setIsLoadingDesc(true);
      generatePropertyDescription(selectedProperty.title, selectedProperty.features)
        .then(desc => {
          setAiDescription(desc);
          setIsLoadingDesc(false);
        });
    }
  }, [selectedProperty]);

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    setView(ViewState.DETAILS);
  };

  const handleNavigateHome = () => {
    setView(ViewState.HOME);
    setSelectedProperty(null);
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (view === ViewState.DETAILS) {
      setView(ViewState.HOME);
      setSelectedProperty(null);
    }
    setScrollToSectionId(sectionId);
  };

  useEffect(() => {
    if (view !== ViewState.HOME || !scrollToSectionId) return;
    const t = setTimeout(() => {
      const el = document.getElementById(scrollToSectionId!);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setScrollToSectionId(null);
    }, 300);
    return () => clearTimeout(t);
  }, [view, scrollToSectionId]);

  return (
    <div className="min-h-screen bg-alabaster text-charcoal-900 font-sans selection:bg-champagne-200 selection:text-black">
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar onNavigateHome={handleNavigateHome} onNavigateToSection={handleNavigateToSection} />
          
          <AnimatePresence mode="wait">
            {view === ViewState.HOME && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Hero />
                <StatsSection />
                <Philosophy />
                <PropertyShowcase onPropertySelect={handlePropertySelect} />
                <AgentsSection />
                <CinematicGrid />
                <Journal />
                <LifestyleSection />
                <PropertyGrid />
                <GlobalLocations />
                <CallToAction />
              </motion.div>
            )}

            {view === ViewState.DETAILS && selectedProperty && (
              <motion.div
                key="details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <FeaturedProperties
                  property={selectedProperty}
                  aiDescription={aiDescription}
                  isLoadingDesc={isLoadingDesc}
                  onNavigateHome={handleNavigateHome}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <Footer />
          <AIChatWidget />
        </>
      )}
    </div>
  );
}

export default App;