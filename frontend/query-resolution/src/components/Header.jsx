import React from 'react'
import { Link, useLocation } from "react-router-dom";


//bg-transparent backdrop-blur-lg py-4 fixed top-0 left-0 w-full z-50
//bg-transparent py-4 fixed top-0 left-0 w-full
const Header = () => {
  const location = useLocation();
  const hideHeader = location.pathname === "/login" || location.pathname === "/signup";

  if(hideHeader) return null;

  return (
    <>
    <div className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-50 z-40"></div>
    <header className="bg-grey-800 backdrop-blur-lg py-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src='../../logo.jpg' alt='logo' className="w-14 h-14 rounded-full object-cover bg-transparent" />
            <h1 className=" font-bold text-2xl italic   bg-gradient-to-tl from-[#6C1510] via-[#E1281E] via-[#BFA4A4] via-[#CF2C23] to-[#FF3428] bg-clip-text text-transparent">AskSphere</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-bold text-white hover:text-[#D7263D] hover:font-extrabold ">Home</Link>
            <Link to="/queries" className="font-bold text-white  hover:text-[#D7263D] hover:font-extrabold">Queries</Link>
            <Link to="/profile" className="font-bold text-white  hover:text-[#D7263D] hover:font-extrabold">Profile</Link>
            <Link to="#" className="font-bold text-white  hover:text-[#D7263D] hover:font-extrabold">Contact</Link>
            <Link to="#" className="font-bold text-white hover:text-[#D7263D] hover:font-extrabold">About</Link>
          </nav>
          <div className="flex space-x-4">
            <Link to = "/login">
            <button className="bg-white text-[#D7263D] font-medium py-2 px-4 rounded-md shadow-sm hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200">
              Login
            </button>
            </Link>
            <Link to = "/signup">
            <button className="bg-[#D7263D] text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200">
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </header>
    </>
      
  );
};

export default Header;
