import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1.2, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center text-charcoal-900"
    >
      <div className="text-center overflow-hidden relative z-10 bg-white flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-4"
        >
          <img
            src="/LOGO.png"
            alt="Urban Nest Luxury Real Estate"
            className="h-32 md:h-44 lg:h-56 w-auto object-contain max-w-[90vw]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl tracking-tight text-charcoal-900"
        >
          URBAN NEST
        </motion.div>
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-2 text-xs md:text-sm uppercase text-stone-500 font-medium"
        >
          Luxury Real Estate
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ height: '0%' }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 w-[1px] bg-charcoal-900/10"
      />
    </motion.div>
  );
};

export default Preloader;