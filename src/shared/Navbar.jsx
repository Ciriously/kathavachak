import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-[100rem] px-6 lg:px-12 py-4 items-center">
          <div className="flex items-center">
            <div className="hidden md:flex font-poppins items-center gap-16 ml-20 mr-40">
              <span className="text-md font-medium text-slate-700">Home</span>
              <span className="text-md font-medium text-slate-700">How it Works</span>
              <span className="text-md font-medium text-slate-700">Contact Us</span>
            </div>
            <Link to="home" smooth={true} duration={500} className="mr-4">
              <img
                src={logo}
                loading="lazy"
                style={{ color: "transparent" }}
                width={60}
                height={50}
                alt="logo"
              />
            </Link>
            <span className="text-3xl font-poppins font-bold text-[#170F49]">kathaVachak</span>
          </div>
          <div className="flex-grow" />
          <div className="hidden md:flex items-center justify-center gap-6">
            <button
              className="inline-flex items-center justify-center w-28 px-5 py-3 text-md font-medium text-center text-white bg-[#5E41B3] border border-transparent rounded-3xl hover:bg-purple-700 focus:ring-4 focus:ring-purple-500"
            >
              Try Me
            </button>
            <button
              className="inline-flex items-center justify-center w-44 px-5 py-3 text-md font-medium text-center text-white bg-[#5E41B3] border border-transparent rounded-3xl hover:bg-purple-700 focus:ring-4 focus:ring-purple-500"
            >
              Download Now
            </button>
          </div>
          <div className="relative flex items-center justify-center md:hidden">
            <button type="button" onClick={toggleDropdown} className="group h-8 w-4 rounded-lg  flex justify-center items-center text-sm font-semibold transition-all transform duration-300 hover:border-gray-300" aria-expanded={isDropdownOpen ? 'true' : 'false'}>
              <div className="grid justify-items-center gap-1.5">
                <span className={`h-0.5 w-4 rounded-full bg-black transition transform ${isDropdownOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`h-0.5 w-4 rounded-full bg-black transition transform ${isDropdownOpen ? 'scale-x-0' : ''}`}></span>
                <span className={`h-0.5 w-4 rounded-full bg-black transition transform ${isDropdownOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>
        {/* Mobile dropdown menu */}
        {isDropdownOpen && (
          <div className="md:hidden mb-4 flex font-poppins text-xl flex-col items-center gap-4 bg-white border-t border-slate-100">
            <a href="#" className="pt-1.5 text-md font-medium text-slate-700">Home</a>
            <a href="#" className="pt-1.5 text-md font-medium text-slate-700">How it Works</a>
            <a href="#" className="pt-1.5 text-md font-medium text-slate-700">Contact Us</a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
