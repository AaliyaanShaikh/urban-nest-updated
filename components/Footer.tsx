import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Linkedin, Twitter, MapPin, Mail, ArrowUpRight } from 'lucide-react';

const FOOTER_PADDING = 'px-6 md:px-12';
const SECTION_LABEL = 'text-[10px] uppercase tracking-[0.2em] text-black/50 font-bold';
const LINK_STYLE = 'text-black/70 hover:text-black text-sm font-medium transition-colors';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <footer className="bg-white text-black overflow-hidden">
      <div ref={ref} className={`max-w-6xl mx-auto ${FOOTER_PADDING} py-16 md:py-20`}>
        {/* Brand + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-10 md:pb-12 border-b border-black/10">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.92] overflow-hidden text-black whitespace-nowrap">
              <motion.span
                initial={{ y: '100%' }}
                animate={isInView ? { y: 0 } : { y: '100%' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                URBAN NEST
              </motion.span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="text-black/55 text-sm leading-relaxed whitespace-nowrap mt-2"
            >
              Premier real estate. Exceptional properties. Your next chapter starts here.
            </motion.p>
          </div>
          <motion.a
            href="mailto:brokerage@urbannest.com"
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="group shrink-0 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-black/80 py-3.5 px-5 border border-black/20 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-200"
          >
            Get in touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Links grid - uniform columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 pt-12 md:pt-14">
          <div className="col-span-2 md:col-span-4">
            <div className="h-px w-10 bg-black/30 mb-4" />
            <p className={`${SECTION_LABEL} mb-4`}>Headquarters</p>
            <address className="not-italic text-sm text-black/70 space-y-3">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-black/40" />
                575 Madison Avenue, New York, NY 10022
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 shrink-0 text-black/40" />
                <a href="mailto:brokerage@urbannest.com" className={LINK_STYLE}>
                  brokerage@urbannest.com
                </a>
              </p>
              <p>
                <a href="tel:+12125550199" className={LINK_STYLE}>
                  +1 212 555 0199
                </a>
              </p>
            </address>
          </div>

          <div className="col-span-2 md:col-span-2">
            <div className="h-px w-10 bg-black/30 mb-4" />
            <p className={`${SECTION_LABEL} mb-4`}>Company</p>
            <ul className="space-y-3">
              {['Our Team', 'Careers', 'Press', 'Market Reports'].map((item) => (
                <li key={item}>
                  <a href="#" className={`block ${LINK_STYLE}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <div className="h-px w-10 bg-black/30 mb-4" />
            <p className={`${SECTION_LABEL} mb-4`}>Legal</p>
            <ul className="space-y-3">
              {['Fair Housing', 'Terms of Use', 'Privacy Policy', 'Accessibility'].map((item) => (
                <li key={item}>
                  <a href="#" className={`block ${LINK_STYLE}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4">
            <div className="h-px w-10 bg-black/30 mb-4" />
            <p className={`${SECTION_LABEL} mb-4`}>Connect</p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10">
        <div className={`max-w-6xl mx-auto ${FOOTER_PADDING} py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-widest text-black/45 font-bold`}>
          <p>© {currentYear} Urban Nest Properties. ALL RIGHTS RESERVED. DESIGNED BY EZOR.</p>
          <p>Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
