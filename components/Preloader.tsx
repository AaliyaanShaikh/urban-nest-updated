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
      <div className="text-center overflow-hidden relative z-10">
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-6xl md:text-9xl tracking-tight text-charcoal-900"
        >
          LUMIÈRE
        </motion.div>
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="mt-6 text-xs md:text-sm uppercase text-stone-500 font-medium"
        >
          Real Estate Brokerage
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