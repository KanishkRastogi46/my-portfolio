'use client'; // This indicates that this is a client-side component

import { useState } from 'react';
import { ModeToggle } from './ThemeToggle';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-violet-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold capitalize">kanishk rastogi</a>
        <div className="hidden md:flex md:items-center space-x-6">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <ModeToggle/>
        </div>
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? '' : 'hidden flex-col items-start justify-center'} md:hidden`}>
        <a href="#about" className="block px-4 py-2 hover:bg-gray-700">About</a>
        <a href="#projects" className="block px-4 py-2 hover:bg-gray-700">Projects</a>
        <a href="#contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
        <ModeToggle/>
      </div>
    </nav>
  );
};

export default NavigationBar;