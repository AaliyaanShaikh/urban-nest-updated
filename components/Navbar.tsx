import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigateHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 py-6 px-6 md:px-12 pointer-events-none text-charcoal-900">
      <div className="flex justify-between items-start">
        {/* Logo */}
        <div className="pointer-events-auto">
           <div 
            className="font-serif text-2xl font-bold tracking-wide cursor-pointer mix-blend-difference text-charcoal-900"
            onClick={onNavigateHome}
          >
            LUMIÈRE
          </div>
        </div>

        {/* Desktop Menu - Floating Pill */}
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className={`hidden md:flex pointer-events-auto items-center gap-8 px-8 py-4 rounded-full border transition-all duration-500 ${
            isScrolled ? 'bg-white/90 backdrop-blur-md border-stone-200 shadow-sm' : 'bg-white/80 backdrop-blur-sm border-transparent'
          }`}
        >
          <a onClick={onNavigateHome} className="text-xs uppercase tracking-widest text-charcoal-900 hover:text-champagne-600 transition-colors cursor-pointer font-medium">Properties</a>
          <a className="text-xs uppercase tracking-widest text-charcoal-900 hover:text-champagne-600 transition-colors cursor-pointer font-medium">Agents</a>
          <a className="text-xs uppercase tracking-widest text-charcoal-900 hover:text-champagne-600 transition-colors cursor-pointer font-medium">Journal</a>
          <a className="text-xs uppercase tracking-widest text-charcoal-900 hover:text-champagne-600 transition-colors cursor-pointer font-medium">Contact</a>
        </motion.div>

        {/* Right Actions */}
        <div className="hidden md:flex pointer-events-auto items-center gap-6 mix-blend-difference text-charcoal-900">
           <button className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-champagne-600 transition-colors font-medium">
              <Globe size={14} /> EN
           </button>
           <button className="hover:text-champagne-600 transition-colors">
              <Search size={18} />
           </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden pointer-events-auto mix-blend-difference text-charcoal-900">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 pointer-events-auto flex items-center justify-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              <a onClick={() => { onNavigateHome(); setIsMobileMenuOpen(false); }} className="font-serif text-3xl text-charcoal-900 hover:text-champagne-500">Properties</a>
              <a className="font-serif text-3xl text-charcoal-900 hover:text-champagne-500">Agents</a>
              <a className="font-serif text-3xl text-charcoal-900 hover:text-champagne-500">Journal</a>
              <a className="font-serif text-3xl text-charcoal-900 hover:text-champagne-500">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;