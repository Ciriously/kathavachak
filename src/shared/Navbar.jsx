import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div>
      <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-[100rem] gap-10 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4 items-center">

          <ul className="hidden items-center font-poppins justify-center gap-8 md:flex">
            <li className="pt-1.5  text-md font-medium text-slate-700">
              <a href="#">Home</a>
            </li>
            <li className="pt-1.5  text-md font-medium text-slate-700">
              <a href="#">How it Works</a>
            </li>
            <li className="pt-1.5  text-md font-medium text-slate-700">
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className="flex-grow items-center" />
          <div className="flex items-center">
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
            <span className=" text-3xl mr-[20rem] font-poppins  font-medium text-[#170F49]">kathaVachak</span>
          </div>
          <div className="hidden items-center justify-center gap-6 md:flex">
            <button
              className="inline-flex items-center font-poppins justify-center w-4 px-5 py-3 text-md font-medium text-center text-white bg-[#5E41B3] border border-transparent rounded-3xl sm:w-28 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500"
            >
              Try Me
            </button>
            <button
              className="inline-flex items-center font-poppins justify-center w-4 px-5 py-3 text-md font-medium text-center text-white bg-[#5E41B3] border border-transparent rounded-3xl sm:w-44 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500"
            >
              Download Now
            </button>
          </div>
          <div className="relative flex items-center justify-center md:hidden">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-auto text-slate-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
