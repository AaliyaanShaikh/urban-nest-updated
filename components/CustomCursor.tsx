import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a') || target.classList.contains('cursor-pointer')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setHoverText('');
      }

      // Check for specific data-cursor attributes
      const cursorText = target.getAttribute('data-cursor-text') || target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      if (cursorText) {
        setIsHovered(true);
        setHoverText(cursorText);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gold-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovered ? 4 : 1,
        }}
      >
        {hoverText && isHovered && (
          <div className="absolute inset-0 flex items-center justify-center text-[4px] text-black font-bold uppercase tracking-widest">
            {hoverText}
          </div>
        )}
      </motion.div>
      
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 border border-gold-500 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 2 : 1.5,
          opacity: isHovered ? 0 : 0.5,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;