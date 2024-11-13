import React, { useState } from 'react';
import '../Style/NavMobile.css';
import { CgClose } from 'react-icons/cg';
import { FiChevronDown } from 'react-icons/fi';
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NavMobile = ({ toggleMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (section) => {
    setActiveDropdown((prev) => (prev === section ? null : section));
  };

  return (
    <div className="bg-white w-full h-full shadow-2xl relative overflow-hidden">
      {/* Navbar Top - Logo and Icons */}
      <div className="flex justify-between items-center p-4 bg-black text-white">
        <button onClick={toggleMenu} className="text-2xl">
          {/* Hamburger Icon */}
          <FiChevronDown />
        </button>
        <h1 className="text-2xl font-bold">Kilon'Gwan</h1>
        <div className="flex space-x-4">
          <FiSearch className="text-xl" />
          <FiUser className="text-xl" />
          <FiShoppingBag className="text-xl" />
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="text-center flex flex-col items-start px-4 py-4 h-full mt-8">
        <button
          className="absolute top-4 right-4 text-3xl text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <CgClose />
        </button>

        {/* Sections - Menu and Shop */}
        <ul className="space-y-6 mt-4 w-full">
          {/* Menu Section */}
          <li>
            <div className="flex items-center justify-between w-full">
              <span
                className="text-xl font-medium cursor-pointer"
                onClick={() => handleDropdownToggle('Menu')}
              >
                Menu
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  activeDropdown === 'Menu' ? 'rotate-180' : ''
                }`}
                onClick={() => handleDropdownToggle('Menu')}
              />
            </div>
            {activeDropdown === 'Menu' && (
              <ul className="pl-4 mt-2 space-y-2">
                {['Home', 'Digital Backdrops', 'About', 'Journal', 'Contact'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <a className="text-lg capitalize block" href={`#${item.toLowerCase()}`}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
          </li>

          {/* Shop Section */}
          <li>
            <div className="flex items-center justify-between w-full">
              <span
                className="text-xl font-medium cursor-pointer"
                onClick={() => handleDropdownToggle('Shop')}
              >
                Shop
              </span>
              <FiChevronDown
                className={`transition-transform ${
                  activeDropdown === 'Shop' ? 'rotate-180' : ''
                }`}
                onClick={() => handleDropdownToggle('Shop')}
              />
            </div>
            {activeDropdown === 'Shop' && (
              <ul className="pl-4 mt-2 space-y-2">
                {['Rentals', 'Purchase', 'Backdrops', 'My Account', 'Shop'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <a className="text-lg capitalize block" href={`#${item.toLowerCase()}`}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
