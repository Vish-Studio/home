'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-saffron text-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-7xl md:text-9xl font-display font-medium tracking-tight mb-10 leading-[0.9]">
              LET'S <br /> <span className="italic">TALK.</span>
            </h2>
            <p className="text-xl md:text-2xl font-display max-w-md mb-16 leading-relaxed">
              Have a project in mind? We would love to hear from you. Let's build something extraordinary together.
            </p>

            <div className="flex flex-col gap-8 font-sans">
              <a href="mailto:hello@vishstudio.com" className="flex items-center gap-6 text-lg font-bold hover:translate-x-2 transition-transform cursor-hover group">
                <div className="w-14 h-14 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-saffron transition-colors">
                  <Mail size={22} />
                </div>
                hello@vishstudio.com
              </a>
              <div className="flex items-center gap-6 text-lg font-bold">
                 <div className="w-14 h-14 border border-black rounded-full flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                San Francisco, CA
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black p-10 md:p-16 rounded-[2rem] text-white"
          >
            <form className="flex flex-col gap-8">
              <div>
                <label className="block text-gray-500 text-xs font-sans uppercase tracking-[0.2em] mb-3">Your Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-800 py-4 text-xl font-display focus:outline-none focus:border-saffron transition-colors placeholder-gray-700 cursor-hover" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-gray-500 text-xs font-sans uppercase tracking-[0.2em] mb-3">Your Email</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-800 py-4 text-xl font-display focus:outline-none focus:border-saffron transition-colors placeholder-gray-700 cursor-hover" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-gray-500 text-xs font-sans uppercase tracking-[0.2em] mb-3">Message</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-gray-800 py-4 text-xl font-display focus:outline-none focus:border-saffron transition-colors placeholder-gray-700 cursor-hover" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="mt-8 group flex items-center justify-between w-full bg-saffron text-black py-5 px-8 rounded-full font-sans font-bold uppercase tracking-widest hover:bg-white transition-colors duration-500 cursor-hover">
                <span>Send Message</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;