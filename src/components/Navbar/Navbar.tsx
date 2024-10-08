// src/Navbar.js
import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Import search and user icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Logo />

        {/* Hamburger Icon (Mobile) */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Desktop Nav (Center the Search Bar) */}
        <div className="hidden md:flex items-center justify-center w-full space-x-8">
          {/* Search Bar (Visible on desktop, centered, with rounded edges) */}
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>

          {/* Links Section */}
          <ul className="flex items-center space-x-8 text-gray-700">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Login Icon */}
        <div className="hidden md:flex items-center">
          <FaUserCircle className="text-2xl text-gray-500 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu (Toggles with Hamburger) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        {/* Mobile Search Bar */}
        <div className="relative flex items-center space-x-2 px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500"
          />
          <FaSearch className="absolute left-8 text-gray-500" />
        </div>

        {/* Mobile Navigation Links */}
        <ul className="space-y-2 px-4 py-2 text-gray-700">
          <li><a href="#home" className="block hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="block hover:text-blue-500">About</a></li>
          <li><a href="#services" className="block hover:text-blue-500">Services</a></li>
          <li><a href="#contact" className="block hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Login Icon */}
        <div className="flex justify-end px-4 py-2">
          <FaUserCircle className="text-2xl text-gray-500 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
