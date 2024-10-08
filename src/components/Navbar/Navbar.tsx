// src/Navbar.js

import { useState } from 'react';
import Logo from '../Logo/Logo'; // Import your existing Logo component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Logo />
          </div>
  
          {/* Links Section - Hidden on mobile, flex on larger screens */}
          <ul className="hidden md:flex space-x-8 text-gray-700">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
  
          {/* Hamburger Icon - Shown on mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-2 px-4 py-2 text-gray-700">
            <li><a href="#home" className="block hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="block hover:text-blue-500">About</a></li>
            <li><a href="#services" className="block hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="block hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;