'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
      
      {/* Structural Grid Lines - Faded for elegance */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="container mx-auto px-6 h-full border-x border-white/5 flex justify-between">
          <div className="h-full w-[1px] bg-white/5 hidden md:block" />
          <div className="h-full w-[1px] bg-white/5 hidden md:block" />
          <div className="h-full w-[1px] bg-white/5 hidden md:block" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full pt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20"
        >
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-6 overflow-hidden">
             <motion.div 
               initial={{ width: 0 }} 
               animate={{ width: 40 }} 
               transition={{ delay: 0.5, duration: 0.8 }}
               className="h-[2px] bg-saffron"
             />
             <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-saffron">
                Creative Agency
             </span>
          </div>
          
          {/* Massive Headline */}
          <h1 className="font-display font-bold leading-[0.85] tracking-tight text-white mix-blend-difference">
            <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-[13vw] md:text-[11rem] uppercase"
                >
                  We Craft
                </motion.span>
            </div>
            <div className="overflow-hidden">
                <motion.div 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                >
                  <span className="text-[13vw] md:text-[11rem] uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20">
                    The Future
                  </span>
                  {/* Showreel Button */}
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="hidden md:flex w-24 h-24 rounded-full border border-white/20 items-center justify-center bg-white/5 backdrop-blur-sm group cursor-hover mt-4"
                  >
                     <Play fill="currentColor" className="text-white group-hover:text-saffron transition-colors ml-1" size={24} />
                  </motion.button>
                </motion.div>
            </div>
          </h1>

          {/* Description */}
          <div className="mt-12 max-w-lg md:ml-auto md:mr-32">
             <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-gray-400 font-sans text-lg leading-relaxed text-balance"
             >
               VISH Studio combines bold <strong className="text-white">aesthetics</strong> with powerful technology to build world-class softwares and brands.
             </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Bottom info strip */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-dark/80 backdrop-blur-md z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
           <div className="hidden md:flex gap-8">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500">Based in SF, USA</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500">Global Reach</span>
           </div>
           
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.5 }}
             className="flex items-center gap-4"
           >
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-saffron">Scroll</span>
              <ArrowDown size={14} className="text-saffron animate-bounce" />
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;