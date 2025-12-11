'use client';

import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative bg-dark border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div>
            <h2 className="text-xs font-sans font-bold text-saffron uppercase tracking-[0.2em] mb-6">Our Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-display font-medium text-white leading-[1.1]">
              Capabilities
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm font-sans font-light leading-relaxed mt-6 md:mt-0">
            A full-service studio dedicated to creating meaningful digital connections through strategy and design.
          </p>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative border-t border-white/10 last:border-b transition-colors duration-500 cursor-hover"
            >
              <div 
                className={`absolute inset-0 bg-saffron origin-left transition-transform duration-500 ease-out ${
                  hoveredService === service.id ? 'scale-x-100' : 'scale-x-0'
                }`} 
              />
              
              <div className="relative z-10 flex flex-col md:flex-row items-baseline md:items-center justify-between py-12 px-4 md:px-8">
                 <div className="flex items-baseline gap-8 md:gap-16 w-full md:w-1/3">
                    <span className={`font-mono text-sm transition-colors duration-300 ${hoveredService === service.id ? 'text-black/60' : 'text-saffron'}`}>
                       0{service.id}
                    </span>
                    <h4 className={`text-3xl md:text-5xl font-display font-medium transition-colors duration-300 ${hoveredService === service.id ? 'text-black' : 'text-white'}`}>
                       {service.title}
                    </h4>
                 </div>

                 <p className={`mt-4 md:mt-0 font-sans font-light text-sm max-w-sm transition-colors duration-300 ${hoveredService === service.id ? 'text-black/80' : 'text-gray-400'}`}>
                    {service.description}
                 </p>

                 <div className={`hidden md:block transition-transform duration-500 ${hoveredService === service.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                    <ArrowRight className="text-black" size={32} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;