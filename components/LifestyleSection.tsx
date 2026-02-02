import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Key, Users, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Landmark size={28} />,
    title: "Valuation",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2574&auto=format&fit=crop",
    desc: "Accurate, data-driven property appraisals."
  },
  {
    icon: <Briefcase size={28} />,
    title: "Investment",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
    desc: "Strategic portfolio management and acquisition."
  },
  {
    icon: <Key size={28} />,
    title: "Management",
    image: "https://images.unsplash.com/photo-1560518883-3d1312f9c1be?q=80&w=2574&auto=format&fit=crop",
    desc: "Comprehensive property management services."
  },
  {
    icon: <Users size={28} />,
    title: "Relocation",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop",
    desc: "Seamless corporate and family relocation."
  }
];

const LifestyleSection: React.FC = () => {
  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-xl"
        >
          <span className="text-champagne-600 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Broker Services</span>
          <h2 className="font-serif text-5xl text-charcoal-900 mb-6 leading-tight">Expertise at <br/><span className="italic text-stone-500">Every Step</span></h2>
          <p className="text-stone-600 font-medium text-lg">
            We provide a full suite of real estate services designed to maximize value and minimize stress for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative h-[600px] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-stone-200 transition-colors duration-500 z-10 opacity-0 group-hover:opacity-10" />
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                 <div className="border-l-2 border-champagne-500 pl-4 transition-all duration-500 group-hover:border-white">
                    <div className="text-white mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-2">{item.title}</h3>
                    <p className="text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 font-medium max-w-[80%]">
                      {item.desc}
                    </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;