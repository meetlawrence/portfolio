'use client'; // Required for useState and onClick logic

import { useState } from 'react';
import NavLinks from './NavLinks';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden"> {/* Only visible on mobile */}
      {/* 2-Line Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col items-end gap-1.5 p-2"
        aria-label="Toggle Menu"
      >
        <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${
          isOpen ? 'w-8 rotate-45 translate-y-2 bg-indigo-500' : 'w-8'
        }`} />
        <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${
          isOpen ? 'w-8 -rotate-45 bg-indigo-500' : 'w-5'
        }`} />
      </button>
        {/* Fullscreen Overlay Menu */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
            {/* 1. items-start: Pushes links to the left
                2. px-10: Gives a consistent "gutter" from the screen edge
            */}
            <div className="flex flex-col items-start justify-center h-full px-10">
                <div onClick={() => setIsOpen(false)}>
                <NavLinks /> 
                </div>
            </div>
        </div>
    </div>
  );
}