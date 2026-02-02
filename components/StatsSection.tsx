import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Properties Sold', value: '750', suffix: '+' },
  { label: 'Market Value', value: '12', suffix: 'B+' },
  { label: 'Active Agents', value: '45', suffix: '' },
  { label: 'Years Serving', value: '36', suffix: '' },
];

const StatsSection: React.FC = () => {
  return (
    <div className="bg-white text-charcoal-900 py-24 border-y border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-stone-100">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="px-4"
            >
              <div className="font-serif text-4xl md:text-6xl text-charcoal-900 mb-4 font-medium">
                {stat.value}<span className="text-champagne-500 text-3xl align-top">{stat.suffix}</span>
              </div>
              <div className="text-stone-500 text-[10px] uppercase tracking-[0.3em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;