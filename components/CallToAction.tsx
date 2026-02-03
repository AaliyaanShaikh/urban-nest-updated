import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CallToActionProps {
  onOpenContact?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onOpenContact }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="contact" ref={ref} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <motion.div
        style={{
          y,
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop")',
        }}
        className="absolute inset-0 bg-cover bg-center z-0"
      />
      <div className="absolute inset-0 bg-charcoal-900/30 z-10" />

      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-6xl md:text-8xl mb-8 text-white drop-shadow-md"
        >
          Begin Your <br />
          <span className="italic text-champagne-300">Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl font-medium text-white mb-12 max-w-2xl mx-auto drop-shadow-sm"
        >
          Schedule a private consultation with our advisory team.
        </motion.p>
        <motion.button
          type="button"
          onClick={() => onOpenContact?.()}
          whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#1A1A1A' }}
          whileTap={{ scale: 0.95 }}
          className="border border-white text-white px-12 py-5 uppercase tracking-[0.2em] text-sm font-bold transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-none"
        >
          Contact Brokerage
        </motion.button>
      </div>
    </section>
  );
};

export default CallToAction;
