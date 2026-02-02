import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-alabaster">
      {/* Background Image - Slow Pan */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2692&auto=format&fit=crop")' }}
        />
        {/* White Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-20 pt-20">
        <div className="overflow-hidden mb-8">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
             <div className="h-[2px] w-12 bg-charcoal-900"></div>
             <p className="text-charcoal-900 tracking-[0.3em] uppercase text-xs font-bold">
                Established 1988
             </p>
          </motion.div>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-charcoal-900 leading-[0.9] tracking-tighter mb-10">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="block"
            >
              Guiding
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
              className="block italic text-stone-500"
            >
              You Home
            </motion.span>
          </div>
        </h1>

        <div className="max-w-md overflow-hidden">
          <motion.p 
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
            className="text-charcoal-800 text-sm md:text-lg font-medium leading-relaxed border-l-2 border-champagne-500 pl-6"
          >
            Urban Nest is an elite brokerage dedicated to connecting exceptional individuals with the world's most extraordinary properties.
          </motion.p>
        </div>
      </div>

      {/* Footer of Hero */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-12 w-full px-6 md:px-20 flex justify-between items-end text-charcoal-900 text-[10px] uppercase tracking-widest z-20"
      >
        <div className="flex gap-8 font-bold">
          <span>Sales</span>
          <span>Rentals</span>
          <span>Development</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <div className="w-[1px] h-12 bg-charcoal-900"></div>
           <span>Explore</span>
        </div>
        <div className="font-bold">Global Brokerage</div>
      </motion.div>
    </div>
  );
};

export default Hero;