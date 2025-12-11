'use client';

import React from 'react';
import { WORKS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <section id="work" className="bg-dark">
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-xs font-sans font-bold text-saffron uppercase tracking-[0.2em] mb-6">Selected Work</h2>
            <h3 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.9] tracking-tight">
              Featured <br /> <span className="italic font-normal text-white/50">Projects.</span>
            </h3>
          </div>
          <a href="#" className="group flex items-center gap-3 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-hover font-sans text-xs font-bold tracking-widest uppercase">
            View Archive <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Full width container for border continuity */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 border-x border-white/10">
           <div className="grid grid-cols-1 md:grid-cols-2">
            {WORKS.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative border-b border-white/10 ${index % 2 === 0 ? 'md:border-r' : ''} p-8 md:p-12 lg:p-16 cursor-hover overflow-hidden`}
              >
                <div className="aspect-[4/3] overflow-hidden mb-10 relative bg-zinc-900">
                   <motion.img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full h-full transition-transform duration-1000 ease-[0.22, 1, 0.36, 1] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  {/* Subtle noise overlay */}
                  <div className="absolute inset-0 bg-noise opacity-[0.1] pointer-events-none" />
                </div>

                <div className="flex flex-col gap-4">
                   <div className="flex justify-between items-start">
                      <p className="text-saffron font-sans text-xs font-bold tracking-[0.2em] uppercase mb-2">{work.category}</p>
                      <span className="font-mono text-gray-600 text-xs">{work.year}</span>
                   </div>
                   <h4 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-none group-hover:text-saffron transition-colors duration-300">
                     {work.title}
                   </h4>
                </div>
              </motion.div>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Work;