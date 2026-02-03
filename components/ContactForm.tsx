import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Phone, Mail, User } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    name: string;
    email: string;
    phone?: string;
    interest?: string;
    message?: string;
  }) => void;
}

const INTEREST_OPTIONS = [
  { value: 'buying', label: 'Buying a property' },
  { value: 'selling', label: 'Selling a property' },
  { value: 'renting', label: 'Renting' },
  { value: 'general', label: 'General inquiry' },
];

const BENEFITS = [
  'Personalized property matches',
  'Free market consultation',
  'Response within 24 hours',
];

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: (formData.get('name') as string) || '',
      email: (formData.get('email') as string) || '',
      phone: (formData.get('phone') as string) || '',
      interest: (formData.get('interest') as string) || '',
      message: (formData.get('message') as string) || '',
    };
    onSubmit?.(data);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-md pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col sm:flex-row"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full text-stone-400 hover:text-charcoal-900 hover:bg-stone-100 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="sm:w-[42%] bg-champagne-100 px-8 py-10 sm:py-12 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-champagne-600 mb-3">
                Free consultation
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 leading-tight mb-4">
                Start your property journey
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-8">
                Share your details and our advisory team will reach out with tailored options.
              </p>
              <ul className="space-y-3">
                {BENEFITS.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-charcoal-800">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-champagne-500/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-champagne-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[11px] text-stone-500">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>

            <div className="sm:flex-1 p-8 sm:p-10 flex flex-col justify-center min-w-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    Full name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-lg text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-champagne-500/50 focus:border-champagne-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-lg text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-champagne-500/50 focus:border-champagne-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-lg text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-champagne-500/50 focus:border-champagne-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-interest" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    I'm interested in
                  </label>
                  <select
                    id="contact-interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-champagne-500/50 focus:border-champagne-500 transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your requirements (optional)"
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-champagne-500/50 focus:border-champagne-500 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-semibold uppercase tracking-widest bg-charcoal-900 text-white rounded-lg hover:bg-champagne-600 transition-colors shadow-sm hover:shadow-md"
                >
                  Request free consultation
                </button>
                <p className="text-center text-[11px] text-stone-400">
                  We'll respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
