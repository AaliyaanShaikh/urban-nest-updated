import React from 'react';
import { Property } from '../types';
import { Bed, Bath, Move, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group bg-white cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 ease-out border border-stone-100"
      onClick={() => onClick(property)}
    >
      <div className="relative h-80 overflow-hidden">
        <motion.img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-charcoal px-3 py-1 text-xs uppercase tracking-widest font-bold z-10">
          For Sale
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
          <p className="font-serif text-sm italic tracking-wider">View Details</p>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <p className="text-gold-600 font-serif text-xl italic">{property.price}</p>
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-2 group-hover:text-gold-600 transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center text-stone-500 text-sm mb-4">
          <MapPin size={14} className="mr-1" />
          {property.location}
        </div>

        <div className="flex items-center justify-between border-t border-stone-100 pt-4 text-stone-600 text-sm">
          <div className="flex items-center gap-1">
            <Bed size={16} />
            <span>{property.beds} <span className="text-xs text-stone-400">Beds</span></span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} />
            <span>{property.baths} <span className="text-xs text-stone-400">Baths</span></span>
          </div>
          <div className="flex items-center gap-1">
            <Move size={16} />
            <span>{property.sqft.toLocaleString()} <span className="text-xs text-stone-400">Sq Ft</span></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;