import React, { useState } from 'react';
import '../Style/NavMobile.css'
import { navigation } from '../data';
import { CgClose } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const NavMobile = ({ toggleMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to handle the dropdown toggle
  const handleDropdownToggle = (itemName) => {
    setActiveDropdown((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <div className="bg-white w-full h-full shadow-2xl relative overflow-hidden">
      {/* Close Button */}
      <button
        className="absolute top-12 right-4 text-3xl text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        <CgClose />
      </button>

      <ul className="text-center flex flex-col items-center justify-start gap-y-6 mt-16 px-4 py-4 h-full">
        {navigation.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-full"
          >
            <div className="flex items-center justify-center">
              <a
                className="text-xl font-medium text-black capitalize block"
                href={item.href}
                onClick={() => {
                  if (item.dropdown) {
                    handleDropdownToggle(item.name);
                  } else {
                    toggleMenu();
                  }
                }}
              >
                {item.name}
              </a>
              {/* Dropdown Arrow Icon */}
              {item.dropdown && (
                <button
                  className="ml-2 text-neon"
                  onClick={() => handleDropdownToggle(item.name)}
                >
                  <FiChevronDown />
                </button>
              )}
            </div>

            {/* Render dropdown items if available and active */}
            {item.dropdown && activeDropdown === item.name && (
              <ul className="pl-4 mt-2">
                {item.dropdown.map((subItem, subIndex) => (
                  <motion.li
                    key={subIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + subIndex) * 0.1, duration: 0.5 }}
                  >
                    <a
                      className="text-lg font-medium text-black capitalize block"
                      href={subItem.href}
                      onClick={toggleMenu}
                    >
                      {subItem.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default NavMobile;
