import React, { useState, useRef, useEffect } from 'react';
import '../Style/Header.css';
// import Logo from '../Assets/Images/Background-image 2.webp';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import NavMobile from './NavMobile';
import { CgMenuRight, CgClose } from 'react-icons/cg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bg, setBg] = useState(false);
  const dropdownRef = useRef(null);

  // Handle the background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`${
        bg ? 'bg-black' : 'bg-black'
      } fixed w-full top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="font-headline text-2xl pl-2 sm:pl-6 font-bold text-green-800 animate-text-pop-in">
          <a href="/">
            <h1>
              Neon Backdrops
            </h1>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <CgClose className="text-3xl text-gray-800" />
            ) : (
              <CgMenuRight className="text-3xl text-gray-800 ml-10" />
            )}
          </button>
        </div>

        {/* Navigation for larger screens */}
        <nav className={`hidden sm:flex space-x-8`}>
          <a
            href="/"
            className="text-neon hover:text-white transition duration-300 ease-in-out transform hover:scale-105 font-medium"
          >
            Home
          </a>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-neon  hover:text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 font-medium"
            >
              Shop <IoMdArrowDropdown className="ml-1" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 transition-transform transform opacity-100 scale-100">
                <a
                  href="/my-account"
                  className="block px-4 py-2 text-neon  hover:bg-black hover:text-white transition duration-300"
                >
                  My Account
                </a>
                <a
                  href="/backdrops"
                  className="block px-4 py-2 text-neon  hover:bg-black hover:text-white transition duration-300"
                >
                  Backdrops
                </a>
                <a
                  href="/rental"
                  className="block px-4 py-2 text-neon  hover:bg-black hover:text-white transition duration-300"
                >
                  Rental
                </a>
                <a
                  href="/purchase"
                  className="block px-4 py-2 text-neon   hover:bg-black hover:text-white transition duration-300"
                >
                  Purchase
                </a>
                <a
                  href="/double-sided"
                  className="block px-4 py-2 text-neon  hover:bg-black hover:text-white transition duration-300"
                >
                  Double Sided
                </a>
              </div>
            )}
          </div>

          <a
            href="/digital-backdrops"
            className="text-neon   hover:text-white transition duration-300 ease-in-out transform hover:scale-105 font-medium"
          >
            Digital Backdrops
          </a>
          <a
            href="/journal"
            className="text-neon   hover:text-white transition duration-300 ease-in-out transform hover:scale-105 font-medium"
          >
            Journal
          </a>
          <a
            href="/about"
            className="text-neon  hover:text-white transition duration-300 ease-in-out transform hover:scale-105 font-medium"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-neon hover:text-white transition duration-300 ease-in-out transform hover:scale-105 font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'left-0' : '-left-full'
          } fixed bottom-0 w-full max-w-xs h-screen transition-all bg-white z-20 md:hidden`}
        >
          <NavMobile toggleMenu={() => setIsMobileMenuOpen(false)} />
        </div>

        <div className="relative pr-6">
          <FaShoppingCart className="text-2xl text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 " />
        </div>
      </div>
    </header>
  );
};

export default Header;
