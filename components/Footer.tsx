'use client';

import React from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12 md:gap-0">
          
          {/* Left Side: Brand & Description */}
          <div className="flex flex-col items-start max-w-md">
             <a href="#" className="flex items-center gap-3 cursor-hover group select-none mb-6">
              <div className="w-3 h-3 rounded-full bg-saffron" />
              <div className="flex items-center gap-1">
                <span className="text-3xl font-sans font-bold tracking-tighter text-white">
                  VISH
                </span>
                <span className="text-3xl font-sans font-bold tracking-tighter text-saffron">
                  Studio
                </span>
              </div>
            </a>
            <p className="text-gray-400 font-sans text-lg leading-relaxed text-balance">
              Refining the web, one pixel at a time. We create digital experiences that resonate.
            </p>
          </div>
          
          {/* Right Side: Links */}
          <div className="flex flex-wrap gap-16 md:gap-32">
            {/* Sitemap */}
            <div className="flex flex-col gap-6">
              <h4 className="font-sans text-sm text-white font-medium">Sitemap</h4>
              <div className="flex flex-col gap-4">
                 <a href="#" className="text-gray-500 hover:text-white transition-colors font-sans text-base cursor-hover">Home</a>
                {NAV_LINKS.map(link => (
                  <a key={link.label} href={link.href} className="text-gray-500 hover:text-white transition-colors font-sans text-base cursor-hover">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-6">
              <h4 className="font-sans text-sm text-white font-medium">Socials</h4>
              <div className="flex flex-col gap-4">
                {SOCIAL_LINKS.map(link => (
                  <a key={link.label} href={link.href} className="text-gray-500 hover:text-white transition-colors font-sans text-base cursor-hover">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 font-sans text-sm">
          <p>&copy; {new Date().getFullYear()} VISH Studio. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-zinc-400 transition-colors cursor-hover">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors cursor-hover">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;