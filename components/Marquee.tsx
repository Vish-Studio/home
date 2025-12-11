'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  const marqueeText = "STRATEGY — DESIGN — DEVELOPMENT — MARKETING — BRANDING — ";

  return (
    <div className="w-full py-16 bg-saffron text-black overflow-hidden relative z-20">
      <motion.div
        className="whitespace-nowrap flex items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-7xl md:text-9xl font-display font-medium italic tracking-tight mx-4">
            {marqueeText}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;