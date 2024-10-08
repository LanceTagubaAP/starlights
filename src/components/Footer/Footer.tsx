// src/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <div className="font-gloria text-xl font-bold text-gray-800">Starlights</div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
          <a href="#about" className="text-gray-600 hover:text-blue-500">About Us</a>
          <a href="#services" className="text-gray-600 hover:text-blue-500">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
          <a href="#faq" className="text-gray-600 hover:text-blue-500">FAQ</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-gray-600 hover:text-blue-500 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-gray-600 hover:text-blue-500 text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-gray-600 hover:text-blue-500 text-2xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-gray-600 hover:text-blue-500 text-2xl" />
          </a>
        </div>
      </div>
      <div className="bg-gray-100 text-center py-4">
        <p className="text-gray-500 text-sm">© 2024 Starlights. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
