import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart, FaSearch, FaChevronDown, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { toast } from 'react-toastify'; // Import toast
import { CgClose } from 'react-icons/cg';
import { MdMenu } from 'react-icons/md';
import { motion } from 'framer-motion';
import { auth } from '../firebaseConfig'; // Import Firebase auth
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useCart } from '../Context/CartContext'; // Import the useCart hook

const Header = () => {
  const { cartCount } = useCart(); // Access cartCount from context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [user, setUser] = useState(null); // Define user state here
  const [isSearchOpen, setIsSearchOpen] = useState(false); // New state for search bar visibility
  const [searchQuery, setSearchQuery] = useState(''); 
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  // const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen); 

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsUserDropdownOpen(false);
      toast.success("Successfully logged out!"); // Show success message
      navigate('/my-account'); // Use navigate for redirection
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to log out. Please try again."); // Show error message
    }
  };

  // Function to handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      // Define a mapping of search terms to paths
      const searchRoutes = {
        'backdrops': '/backdrops',
        'rentals': '/rentals',
        'purchase': '/purchase',
        'digital': '/digital-backdrops',
        'contact': '/contact',
        'about': '/about',
        'journal': '/journal',
        'shop': '/shop',
        'account': '/my-account'
      };

      // Find the path corresponding to the query
      const targetPath = searchRoutes[searchQuery.toLowerCase()];
      if (targetPath) {
        navigate(targetPath);  // Navigate to the page
      } else {
        alert('Page not found'); // Handle if page doesn't exist
      }

      setSearchQuery('');  // Clear the search field
      setIsSearchOpen(false);  // Close the search bar
    }
  };

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Unsubscribe on unmount
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShopDropdownOpen(false);
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-body  text-yellow-500">
          <a href="/">Neon Backdrops</a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          <div className="relative" ref={dropdownRef}>
            <button
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onClick={() => window.location.href = '/shop'}
              className="text-gray-700 hover:text-purple-600 transition duration-300 transform hover:scale-105"
            >
              Shop <FaChevronDown className="inline ml-1" />
            </button>
            {/* Dropdown Menu with Motion */}
            {isShopDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
              >
               {['My Account', 'Backdrops', 'Rentals', 'Purchase'].map((link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-100 transition"
                    onClick={() => setIsShopDropdownOpen(false)} // Close dropdown after selection
                  >
                    {link}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {['Home', 'Journal', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-700 hover:text-purple-600 transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaSearch
            className="text-gray-700 hover:text-purple-600 cursor-pointer transition duration-300 transform hover:scale-125"
            onClick={toggleSearch} // Open/close search bar
          />
          {isSearchOpen && (
            <form onSubmit={handleSearchSubmit} className="absolute top-16 right-0 bg-white p-2 shadow-md rounded-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="border p-2 rounded-md focus:outline-none"
              />
              <button type="submit" className="ml-2 text-purple-600">
                Search
              </button>
            </form>
          )}
          <div className="relative">
            <FaShoppingCart
              className="text-gray-700 hover:text-purple-600 cursor-pointer transition duration-300 transform hover:scale-125"
              onClick={() => navigate('/cart')}
            />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
          
          <div className="relative" ref={dropdownRef}>
            <FaUser onClick={toggleUserDropdown} className="text-gray-700 hover:text-purple-600 cursor-pointer transition" />
            {isUserDropdownOpen && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                {user ? (
                  <>
                    <div className="px-4 py-2 text-gray-700">{`Hello, ${user.displayName || user.email}`}</div>
                    <Link to="/my-account" className="block px-4 py-2 text-gray-700 hover:bg-purple-100 transition">My Account</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 transition">Logout</button>
                  </>
                ) : (
                  <Link to="/my-account" className="block px-4 py-2 text-gray-700 hover:bg-purple-100 transition">Login</Link>
                )}
              </motion.div>
            )}
          </div>
          <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none">
            {isMobileMenuOpen ? <CgClose className="text-2xl text-purple-600" /> : <MdMenu className="text-2xl text-purple-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-white shadow-md absolute top-16 left-0 w-full ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center py-4">
          <a href="/" className="text-gray-700 py-2">Home</a>
          <a href="/about" className="text-gray-700 py-2">About</a>
          <a href="/contact" className="text-gray-700 py-2">Contact</a>
          <a href="/shop" className="text-gray-700 py-2">Shop</a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
