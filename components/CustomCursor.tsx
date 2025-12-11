'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isLink = target.closest('a') || target.closest('button') || target.closest('.cursor-hover');
      setLinkHovered(!!isLink);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-saffron pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.8 : linkHovered ? 2 : 1,
          backgroundColor: linkHovered ? 'rgba(244, 196, 48, 0.1)' : 'transparent',
          borderColor: linkHovered ? 'transparent' : '#F4C430'
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-saffron rounded-full pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;