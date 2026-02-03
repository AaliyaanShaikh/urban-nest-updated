import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const founder = {
  name: 'Sahil Hemnani',
  title: 'Founder & Real Estate Advisor',
  image: '/IMG_1865.JPG',
  quote: 'Real estate is not just about spaces—it\'s about the lives that unfold within them.',
  bio: 'With a deep commitment to integrity and a sharp eye for value, I founded Urban Nest to bring a more personal, advisory-led approach to luxury real estate. Every client deserves a guide who puts their vision first.',
  credential: 'The Urban Nest Promise',
};

const ease = [0.22, 1, 0.36, 1] as const;

const PersonalBrandSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Photo side: blur → sharp, scale, clip reveal, subtle float feel via y
  const imageBlur = useTransform(scrollYProgress, [0, 0.2, 0.4], [14, 4, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.35], [1.08, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const clipX = useTransform(scrollYProgress, [0.05, 0.38], [100, 0]);
  const imageClip = useTransform(clipX, (v) => `inset(0 ${v}% 0 0)`);
  const imageFilter = useTransform(imageBlur, (b) => `blur(${b}px)`);
  const frameOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const frameScale = useTransform(scrollYProgress, [0.1, 0.4], [0.92, 1]);

  // Content side: parallax, quote 3D, line draw, watermark
  const contentY = useTransform(scrollYProgress, [0.2, 0.5], [40, 0]);
  const quoteRotateY = useTransform(scrollYProgress, [0.25, 0.55], [18, 0]);
  const quoteOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const lineScale = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const watermarkOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 0.06]);
  const watermarkScale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
  const progressBar = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const topLineScale = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const bottomLineScale = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* ----- LEFT: Founder photo (hero, not background) ----- */}
        <div className="relative lg:col-span-5 flex items-center justify-center py-20 lg:py-0 order-2 lg:order-1 bg-white">          {/* Top line - draws in */}
          <motion.div
            style={{ scaleX: topLineScale }}
            className="absolute top-0 left-0 right-0 h-px bg-champagne-500 origin-left z-10"
            aria-hidden
          />

          <div className="relative w-full max-w-md lg:max-w-none mx-auto px-6 lg:px-12 lg:pl-16 flex justify-center lg:justify-end items-center">
            {/* Offset frame - animates in with scroll */}
            <motion.div
              style={{
                opacity: frameOpacity,
                scale: frameScale,
              }}
              className="absolute inset-0 w-full max-w-md lg:max-w-none mx-auto flex justify-center lg:justify-end items-center"
            >
              <div
                className="w-full aspect-[3/4] max-h-[75vh] border-2 border-champagne-500/40 rounded-sm translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6"
                aria-hidden
              />
            </motion.div>

            {/* Portrait container: clip reveal + scale + blur + subtle float */}
            <motion.div
              style={{
                scale: imageScale,
                opacity: imageOpacity,
                clipPath: imageClip,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
              className="relative w-full aspect-[3/4] max-h-[75vh] overflow-hidden rounded-sm"
            >
              <motion.img
                src={founder.image}
                alt={founder.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ filter: imageFilter }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden />
            </motion.div>

            <div className="absolute bottom-8 left-6 lg:left-14 flex items-center gap-3 text-stone-500 z-10">
              <span className="w-8 h-px bg-champagne-500/70" aria-hidden />
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Founder</span>
            </div>
          </div>
        </div>

        {/* ----- RIGHT: Content ----- */}
        <div className="relative lg:col-span-7 flex items-center bg-alabaster order-1 lg:order-2">
          {/* Scroll progress - right edge */}
          <motion.div
            style={{ scaleY: progressBar }}
            className="absolute top-0 right-0 w-0.5 h-full bg-champagne-500/70 origin-top z-10"
            aria-hidden
          />

          <motion.span
            style={{ opacity: watermarkOpacity, scale: watermarkScale }}
            className="absolute top-1/2 -translate-y-1/2 right-8 lg:right-16 text-[clamp(6rem,14vw,11rem)] font-serif font-bold text-charcoal-900 select-none pointer-events-none leading-none"
            aria-hidden
          >
            01
          </motion.span>

          <motion.div
            style={{ y: contentY }}
            className="relative z-10 w-full max-w-xl mx-auto px-6 py-20 lg:py-28 lg:pl-14 lg:pr-16"
          >
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-[10px] uppercase tracking-[0.35em] font-semibold text-champagne-600 block mb-5"
            >
              The Founder
            </motion.span>

            {/* Name - word-by-word mask reveal */}
            <div className="overflow-hidden mb-2">
              {founder.name.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.15 + i * 0.12, ease }}
                  className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-900 tracking-tight leading-[1.06]"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45, ease }}
              className="text-stone-500 font-medium text-lg mb-10"
            >
              {founder.title}
            </motion.p>

            <motion.div
              style={{ scaleX: lineScale }}
              className="origin-left h-px w-24 bg-champagne-500 mb-10"
            />

            {/* Quote - 3D tilt on scroll */}
            <div style={{ perspective: 900 }} className="origin-center mb-10">
              <motion.div
                style={{
                  opacity: quoteOpacity,
                  rotateY: quoteRotateY,
                }}
                className="origin-center"
              >
                <motion.blockquote
                  whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
                  className="relative pl-6 py-6 pr-6 bg-champagne-100/90 border-l-[3px] border-champagne-500"
                >
                  <span className="absolute left-5 top-5 font-serif text-4xl md:text-5xl text-champagne-400/90 leading-none" aria-hidden>"</span>
                  <p className="font-serif text-lg md:text-xl lg:text-2xl text-charcoal-800 italic leading-snug pl-6">
                    {founder.quote}
                  </p>
                </motion.blockquote>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="text-stone-600 font-medium leading-relaxed text-base md:text-lg mb-8"
            >
              {founder.bio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium"
            >
              {founder.credential}
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ scaleX: bottomLineScale }}
        className="absolute bottom-0 left-0 right-0 h-px bg-champagne-500/40 origin-center"
        aria-hidden
      />
    </section>
  );
}

export default PersonalBrandSection;
