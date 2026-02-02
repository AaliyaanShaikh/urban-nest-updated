import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    category: 'Market Report',
    title: 'Q3 2024 Market Analysis: Stability in Luxury Sectors',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop'
  },
  {
    category: 'Neighborhood Focus',
    title: 'The Rise of West Chelsea: Art, Architecture, and Living',
    date: 'Sep 28, 2024',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop'
  },
  {
    category: 'Architecture',
    title: 'Defining Pre-War Charm: What Buyers Look For',
    date: 'Sep 15, 2024',
    image: 'https://images.unsplash.com/photo-1512308969429-83bc1c27253b?q=80&w=2670&auto=format&fit=crop'
  }
];

const Journal: React.FC = () => {
  return (
    <section id="journal" className="bg-white py-32 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
           <div>
             <span className="text-champagne-600 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Market Insights</span>
             <h2 className="font-serif text-4xl text-charcoal-900">Broker's Journal</h2>
           </div>
           <button className="hidden md:block text-stone-500 hover:text-charcoal-900 text-xs uppercase tracking-widest transition-colors pb-2 border-b border-stone-200 hover:border-charcoal-900 font-bold">
             Read All Reports
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 h-[300px] w-full bg-stone-100">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-center text-xs text-champagne-600 uppercase tracking-widest mb-3 font-bold">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal-900 group-hover:text-champagne-600 transition-colors leading-snug">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;