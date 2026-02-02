import React, { useRef } from 'react';
import { Property } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedPropertiesProps {
  onPropertySelect: (property: Property) => void;
}

const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Fifth Avenue Duplex',
    price: '$24,500,000',
    location: 'Upper East Side, NY',
    beds: 4,
    baths: 4.5,
    sqft: 5200,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?q=80&w=2069&auto=format&fit=crop',
    description: '',
    features: ['Central Park Views', 'Pre-war Detail', 'White Glove Building']
  },
  {
    id: '2',
    title: 'Pacific Palisades Estate',
    price: '$18,900,000',
    location: 'Los Angeles, CA',
    beds: 6,
    baths: 7,
    sqft: 8500,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    description: '',
    features: ['Ocean Views', 'Guest House', 'Infinity Pool']
  },
  {
    id: '3',
    title: 'Knightsbridge Townhouse',
    price: '£15,000,000',
    location: 'London, UK',
    beds: 5,
    baths: 5,
    sqft: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    description: '',
    features: ['Garden Square', 'Historic', 'Newly Renovated']
  },
  {
    id: '4',
    title: 'The Palm Villa',
    price: '$22,000,000',
    location: 'Dubai, UAE',
    beds: 6,
    baths: 8,
    sqft: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    description: '',
    features: ['Private Beach', 'Sunset Views', 'Smart Home']
  },
];

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ onPropertySelect }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white text-charcoal-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header (Absolute) */}
        <div className="absolute top-24 left-6 md:left-24 z-10 pointer-events-none">
          <span className="text-champagne-600 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Exclusive Listings</span>
          <h2 className="font-serif text-4xl text-charcoal-900">Featured Homes</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-6 md:px-24 items-center">
          {/* Intro Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[25vw] flex flex-col justify-center">
            <h3 className="font-serif text-6xl md:text-8xl leading-[0.9] mb-12 text-charcoal-900">
              Curated <br /> for <span className="italic text-stone-400">Distinction</span>
            </h3>
            <p className="text-stone-500 font-medium text-lg mb-12 max-w-sm leading-relaxed">
              Our portfolio represents the finest properties available on the market. From historic estates to modern masterpieces, we open doors to the exceptional.
            </p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-champagne-600 font-bold">
               <div className="h-[2px] w-12 bg-champagne-600"></div>
               <span>Swipe to View</span>
            </div>
          </div>

          {/* Property Cards */}
          {SAMPLE_PROPERTIES.map((prop, index) => (
            <div 
              key={prop.id} 
              className="group relative flex-shrink-0 w-[85vw] md:w-[50vw] h-[70vh] cursor-none"
              onClick={() => onPropertySelect(prop)}
              data-cursor-text="View"
            >
              <div className="w-full h-full overflow-hidden relative bg-stone-100 shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={prop.imageUrl} 
                  alt={prop.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Index Number */}
                <div className="absolute top-0 right-0 p-8 text-8xl font-serif text-white/40 font-bold z-10">
                   0{index + 1}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-white/90 backdrop-blur-sm transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-serif text-4xl md:text-5xl text-charcoal-900 mb-2">
                        {prop.title}
                      </h4>
                      <p className="text-sm uppercase tracking-widest text-stone-500 mb-4 font-bold">{prop.location}</p>
                      <div className="flex gap-4 text-charcoal-800 text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <span>{prop.beds} Beds</span>
                        <span className="w-px h-3 bg-stone-300"></span>
                        <span>{prop.sqft.toLocaleString()} Sq Ft</span>
                      </div>
                    </div>
                    <div className="text-2xl font-serif italic text-champagne-600">
                      {prop.price}
                    </div>
                </div>
              </div>
            </div>
          ))}

          {/* End Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[30vw] flex flex-col justify-center items-center text-center">
            <div className="w-32 h-32 rounded-full border border-stone-200 flex items-center justify-center hover:bg-charcoal-900 hover:text-white transition-all duration-500 cursor-pointer group shadow-lg">
              <ArrowUpRight size={48} className="text-charcoal-900 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
            </div>
            <p className="mt-8 font-serif text-3xl text-charcoal-900">Search MLS</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;