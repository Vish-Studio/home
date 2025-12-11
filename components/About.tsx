'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-dark relative overflow-hidden border-t border-white/10">
       <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
               <h2 className="text-xs font-sans font-bold text-saffron uppercase tracking-[0.2em] mb-10 sticky top-32">Manifesto</h2>
            </div>
            
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl md:text-6xl font-display font-medium leading-[1.1] text-white mb-16">
                  We are a collective of <span className="text-saffron italic">visionaries</span>, <span className="italic font-light text-gray-400">creators</span>, and technologists obsessed with crafting digital perfection.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
                  <div>
                    <h5 className="font-display text-2xl text-white mb-4">Philosophy</h5>
                    <p className="text-gray-400 font-sans font-light text-base leading-relaxed">
                      At VISH Studio, we don't just write code; we architect ecosystems. From the first line of strategy to the final pixel of deployment, our process is rigorous, creative, and data-driven. We believe that true elegance lies in simplicity and performance.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-display text-2xl text-white mb-4">Approach</h5>
                    <p className="text-gray-400 font-sans font-light text-base leading-relaxed mb-8">
                      We partner with ambitious brands to create digital products that are not only beautiful but also functional and scalable. Our approach is collaborative, transparent, and results-oriented.
                    </p>
                     <a href="#contact" 
                        className="text-white border-b border-saffron pb-1 hover:text-saffron transition-colors inline-flex items-center gap-2 cursor-hover font-sans text-xs uppercase tracking-widest"
                     >
                       Start the conversation
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
       </div>
    </section>
  );
};

export default About;