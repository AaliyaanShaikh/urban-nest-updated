import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import StatsSection from './components/StatsSection';
import LifestyleSection from './components/LifestyleSection';
import Journal from './components/Journal';
import GlobalLocations from './components/GlobalLocations';
import CallToAction from './components/CallToAction';
import AIChatWidget from './components/AIChatWidget';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Philosophy from './components/Philosophy';
import { Property, ViewState } from './types';
import { generatePropertyDescription } from './services/geminiService';
import { ArrowLeft, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [aiDescription, setAiDescription] = useState<string | null>(null);
  const [isLoadingDesc, setIsLoadingDesc] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load for preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // 4.5s preloader
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

  return (
    <div className="min-h-screen bg-alabaster text-charcoal-900 font-sans selection:bg-champagne-200 selection:text-black">
      <CustomCursor />
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar onNavigateHome={handleNavigateHome} />
          
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
                <FeaturedProperties onPropertySelect={handlePropertySelect} />
                <Journal />
                <LifestyleSection />
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
                className="pt-32 pb-20 bg-white min-h-screen"
              >
                 {/* Detail view header */}
                 <div className="container mx-auto px-6 mb-10">
                    <button 
                      onClick={handleNavigateHome}
                      className="flex items-center text-stone-500 hover:text-charcoal-900 transition-colors uppercase tracking-widest text-xs font-bold mb-8 group"
                      data-cursor-text="Back"
                    >
                      <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-2 transition-transform" /> Back to Collection
                    </button>
                    
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                       <div>
                          <motion.h1 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-serif text-5xl md:text-7xl text-charcoal-900 leading-[0.9] mb-4"
                          >
                            {selectedProperty.title}
                          </motion.h1>
                          <p className="flex items-center text-stone-500 font-medium text-xl">
                            <MapPin size={18} className="mr-2 text-champagne-600"/> {selectedProperty.location}
                          </p>
                       </div>
                       <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-right"
                       >
                          <div className="text-4xl md:text-5xl font-serif italic text-champagne-600 mb-2">{selectedProperty.price}</div>
                       </motion.div>
                    </div>
                 </div>

                 {/* Parallax Hero Image */}
                 <div className="w-full h-[80vh] overflow-hidden relative mb-20 cursor-none" data-cursor-text="Gallery">
                    <motion.img 
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                      src={selectedProperty.imageUrl}
                      className="w-full h-full object-cover"
                    />
                 </div>

                 <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Stats & Description */}
                    <div className="lg:col-span-8">
                       <div className="flex justify-between border-b border-stone-200 pb-8 mb-12">
                          <div className="text-center">
                             <div className="text-3xl font-serif text-charcoal-900">{selectedProperty.beds}</div>
                             <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Beds</div>
                          </div>
                          <div className="text-center">
                             <div className="text-3xl font-serif text-charcoal-900">{selectedProperty.baths}</div>
                             <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Baths</div>
                          </div>
                          <div className="text-center">
                             <div className="text-3xl font-serif text-charcoal-900">{selectedProperty.sqft.toLocaleString()}</div>
                             <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Sq Ft</div>
                          </div>
                       </div>

                       <div className="mb-16">
                          <h3 className="text-xs uppercase tracking-widest text-champagne-600 font-bold mb-6">Listing Description</h3>
                          {isLoadingDesc ? (
                             <div className="space-y-4 animate-pulse">
                               <div className="h-4 bg-stone-200 rounded w-full"></div>
                               <div className="h-4 bg-stone-200 rounded w-5/6"></div>
                               <div className="h-4 bg-stone-200 rounded w-4/6"></div>
                             </div>
                          ) : (
                             <p className="font-serif text-2xl md:text-3xl leading-relaxed text-charcoal-800">
                               "{aiDescription}"
                             </p>
                          )}
                       </div>

                       <div className="grid grid-cols-2 gap-8">
                          {selectedProperty.features.map((feature, i) => (
                             <div key={i} className="flex items-center text-stone-500 font-medium border-t border-stone-200 pt-4">
                               <span className="w-1.5 h-1.5 bg-champagne-600 rounded-full mr-4"></span>
                               {feature}
                             </div>
                          ))}
                       </div>
                    </div>

                    {/* Right Column: Sticky Form */}
                    <div className="lg:col-span-4">
                       <div className="sticky top-32 bg-stone-50 p-8 border border-stone-200">
                          <h3 className="font-serif text-2xl mb-2 text-charcoal-900">Inquire</h3>
                          <p className="text-sm text-stone-500 mb-6 font-medium">Interested in this property?</p>
                          <form className="space-y-6">
                             <input className="w-full bg-white border border-stone-200 p-3 focus:border-champagne-500 outline-none transition-colors text-charcoal-900 placeholder-stone-400" placeholder="Name" />
                             <input className="w-full bg-white border border-stone-200 p-3 focus:border-champagne-500 outline-none transition-colors text-charcoal-900 placeholder-stone-400" placeholder="Email" />
                             <button className="w-full bg-charcoal-900 text-white py-4 mt-4 uppercase tracking-widest text-xs font-bold hover:bg-champagne-600 transition-colors" data-cursor-text="Send">
                               Request Info
                             </button>
                          </form>
                       </div>
                    </div>
                 </div>
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