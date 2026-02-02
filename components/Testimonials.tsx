import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The level of discretion and professionalism demonstrated by the LuxEstate team was unparalleled. They didn't just find us a house; they found us a legacy.",
    author: "Alexander V.",
    location: "Zurich, Switzerland"
  },
  {
    text: "An exquisitely curated experience from start to finish. Their understanding of the global luxury market is simply unmatched.",
    author: "Isabella R.",
    location: "Milan, Italy"
  },
  {
    text: "I have worked with many agencies over the years, but none have possessed the attention to detail and personal touch that LuxEstate provides.",
    author: "Jameson T.",
    location: "New York, USA"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Quote className="mx-auto text-gold-500 mb-6" size={48} />
          <h2 className="font-serif text-4xl text-charcoal">Client Perspectives</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed italic mb-8">
                "{t.text}"
              </p>
              <div>
                <div className="text-charcoal font-bold tracking-widest text-sm uppercase mb-1">{t.author}</div>
                <div className="text-gold-500 text-xs tracking-widest uppercase">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;