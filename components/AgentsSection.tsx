import React from 'react';
import { motion } from 'framer-motion';

const agents = [
  { name: 'Alexandra Chen', role: 'Senior Broker', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { name: 'James Mitchell', role: 'Luxury Specialist', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Sophie Laurent', role: 'International Advisor', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
];

const AgentsSection: React.FC = () => {
  return (
    <section id="agents" className="bg-white py-32 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
          <div>
            <span className="text-champagne-600 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Team</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900">Meet Our Agents</h2>
          </div>
          <p className="text-stone-500 font-medium max-w-md text-sm md:text-base">
            Experienced advisors dedicated to finding your perfect property.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                <motion.img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-xl text-charcoal-900">{agent.name}</h3>
              <p className="text-stone-500 text-sm font-medium">{agent.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
