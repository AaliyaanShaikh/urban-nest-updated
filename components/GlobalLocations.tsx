import React, { useState } from 'react';
import { motion } from 'framer-motion';

const locations = [
  { id: 'ny', name: 'New York', address: '575 Madison Avenue', phone: '+1 212 555 0199', time: 'EST 09:42' },
  { id: 'ldn', name: 'London', address: 'Mayfair, 12 Berkeley Square', phone: '+44 20 7123 4567', time: 'GMT 14:42' },
  { id: 'pa', name: 'Paris', address: '8 Place Vendôme', phone: '+33 1 42 61 50 00', time: 'CET 15:42' },
  { id: 'mi', name: 'Miami', address: '1111 Lincoln Road', phone: '+1 305 555 1234', time: 'EST 09:42' },
];

const GlobalLocations: React.FC = () => {
  const [hoveredLoc, setHoveredLoc] = useState<string | null>(null);

  return (
    <section className="bg-alabaster py-32 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-champagne-600 uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Our Offices</span>
            <h2 className="font-serif text-5xl text-charcoal-900 mb-8">Local Expertise. <br/> Global Reach.</h2>
            <p className="text-stone-500 font-medium leading-relaxed max-w-md">
              With headquarters in major financial capitals, Lumière offers unparalleled access to international real estate markets.
            </p>
          </div>

          <div className="flex flex-col">
            {locations.map((loc) => (
              <div 
                key={loc.id}
                className="group border-b border-stone-200 py-8 cursor-pointer relative"
                onMouseEnter={() => setHoveredLoc(loc.id)}
                onMouseLeave={() => setHoveredLoc(null)}
              >
                <div className="flex justify-between items-baseline z-10 relative">
                  <h3 className="font-serif text-3xl text-stone-400 group-hover:text-charcoal-900 transition-colors duration-300">
                    {loc.name}
                  </h3>
                  <span className="text-xs text-stone-500 group-hover:text-champagne-600 transition-colors uppercase tracking-widest font-bold">
                    {loc.time}
                  </span>
                </div>
                
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredLoc === loc.id ? 'auto' : 0,
                    opacity: hoveredLoc === loc.id ? 1 : 0 
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 flex justify-between text-sm text-charcoal-700 font-medium">
                    <p>{loc.address}</p>
                    <p>{loc.phone}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocations;