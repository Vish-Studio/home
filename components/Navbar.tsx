'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full top-0 left-0 transition-all duration-300 ${isOpen ? 'z-[999] mix-blend-normal' : 'z-50 bg-dark/90 backdrop-blur-md border-b border-white/5 text-white'}`}>
      <div className="container mx-auto px-6 py-6 md:py-8 flex justify-between items-center relative z-[1000]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 cursor-hover group select-none" onClick={() => setIsOpen(false)}>
          <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${isOpen ? 'bg-white' : 'bg-saffron'}`} />
          <div className="flex items-center gap-1">
            <span className={`text-2xl md:text-3xl font-sans font-bold tracking-tighter transition-colors duration-300 ${isOpen ? 'text-black' : 'text-white'}`}>
              VISH
            </span>
            <span className={`text-2xl md:text-3xl font-sans font-bold tracking-tighter transition-colors duration-300 ${isOpen ? 'text-white' : 'text-saffron'}`}>
              Studio
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs font-bold uppercase tracking-[0.15em] hover:text-saffron transition-colors cursor-hover relative group text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-saffron transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-4 px-6 py-2 bg-saffron border border-saffron rounded-full font-sans text-xs font-bold uppercase tracking-widest text-black hover:bg-white hover:border-white transition-all duration-300 cursor-hover"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden cursor-hover relative z-[1000] transition-colors duration-300 ${isOpen ? 'text-black' : 'text-white'}`} 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0)" }}
            animate={{ clipPath: "circle(150% at 100% 0)" }}
            exit={{ clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-saffron md:hidden z-[999]"
          >
            {/* Grid Lines - Visible on Mobile Menu */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <div className="container mx-auto px-6 h-full border-x border-black/10 flex justify-between">
                <div className="h-full w-[1px] bg-black/10" />
                <div className="h-full w-[1px] bg-black/10" />
                <div className="h-full w-[1px] bg-black/10" />
              </div>
            </div>

            <div className="h-full flex flex-col justify-between pt-32 pb-10 container mx-auto px-6 relative z-10">
              
              {/* Navigation Links */}
              <div className="flex flex-col items-start gap-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={toggleMenu}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                    className="group flex items-baseline gap-4 cursor-hover"
                  >
                    <span className="font-mono text-sm text-black/40 group-hover:text-white transition-colors">
                      0{i + 1}
                    </span>
                    <span className="font-display text-5xl sm:text-6xl font-bold uppercase text-black group-hover:text-white transition-colors tracking-tight leading-none">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Footer Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col"
              >
                <div className="w-full h-[1px] bg-black/10 mb-8" />
                
                <div className="grid grid-cols-2 gap-8">
                  {/* Socials */}
                  <div className="flex flex-col gap-4">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/50 font-bold">Socials</span>
                    <div className="flex flex-col gap-3">
                      {SOCIAL_LINKS.map((link) => (
                        <a 
                          key={link.label} 
                          href={link.href} 
                          className="font-sans text-xs font-bold uppercase tracking-wider text-black hover:text-white transition-colors flex items-center gap-1 group w-fit"
                        >
                          {link.label}
                          <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col gap-4">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/50 font-bold">Contact</span>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:hello@vishstudio.com" className="font-sans text-sm font-bold text-black hover:text-white transition-colors">
                        hello@vishstudio.com
                      </a>
                      <span className="font-sans text-xs text-black/60">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;