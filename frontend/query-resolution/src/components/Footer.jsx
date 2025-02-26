import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
    const hideFooter = location.pathname === "/login" || location.pathname === "/signup";
  
    if(hideFooter) return null;
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Brand Name */}
        <div className="flex items-center space-x-3">
        <img src='../../logo.jpg' alt='logo' className="w-14 h-14 rounded-full object-cover bg-transparent" />
        <h1 className=" font-bold text-2xl italic   bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">AskSphere</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/queries" className="hover:text-gray-400">Queries</Link></li>
          <li><Link to="/profile" className="hover:text-gray-400">Profile</Link></li>
          <li><Link to="/#" className="hover:text-gray-400">Privacy Policy</Link></li>
          <li><Link to="/#" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/#" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" className="hover:text-gray-400"><FaFacebookF size={20} /></a>
          <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter size={20} /></a>
          <a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram size={20} /></a>
          <a href="https://linkedin.com" className="hover:text-gray-400"><FaLinkedinIn size={20} /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} AskSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
