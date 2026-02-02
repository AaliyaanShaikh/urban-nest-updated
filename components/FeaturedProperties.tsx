import React from 'react';
import { Property } from '../types';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin } from 'lucide-react';

interface FeaturedPropertiesProps {
  property: Property;
  aiDescription: string | null;
  isLoadingDesc: boolean;
  onNavigateHome: () => void;
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  property,
  aiDescription,
  isLoadingDesc,
  onNavigateHome,
}) => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      {/* Detail view header */}
      <div className="container mx-auto px-6 mb-10">
        <button
          onClick={onNavigateHome}
          className="flex items-center text-stone-500 hover:text-charcoal-900 transition-colors uppercase tracking-widest text-xs font-bold mb-8 group"
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
              {property.title}
            </motion.h1>
            <p className="flex items-center text-stone-500 font-medium text-xl">
              <MapPin size={18} className="mr-2 text-champagne-600" /> {property.location}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-right"
          >
            <div className="text-4xl md:text-5xl font-serif italic text-champagne-600 mb-2">{property.price}</div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[80vh] overflow-hidden relative mb-20">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Stats & Description */}
        <div className="lg:col-span-8">
          <div className="flex justify-between border-b border-stone-200 pb-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-serif text-charcoal-900">{property.beds}</div>
              <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Beds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-charcoal-900">{property.baths}</div>
              <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Baths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-charcoal-900">{property.sqft.toLocaleString()}</div>
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
            {property.features.map((feature, i) => (
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
              <input
                className="w-full bg-white border border-stone-200 p-3 focus:border-champagne-500 outline-none transition-colors text-charcoal-900 placeholder-stone-400"
                placeholder="Name"
              />
              <input
                className="w-full bg-white border border-stone-200 p-3 focus:border-champagne-500 outline-none transition-colors text-charcoal-900 placeholder-stone-400"
                placeholder="Email"
              />
              <button
                type="button"
                className="w-full bg-charcoal-900 text-white py-4 mt-4 uppercase tracking-widest text-xs font-bold hover:bg-champagne-600 transition-colors"
              >
                Request Info
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
