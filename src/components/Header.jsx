import React, { useState, useEffect, useRef } from 'react';
import '../Style/Header.css';
import { FaShoppingCart, FaSearch, FaChevronDown, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CgClose } from 'react-icons/cg';
import { MdMenu } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useCart } from '../Context/CartContext';

const Header = () => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const shopDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const navigate = useNavigate();

  // Toggle functions
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success('Successfully logged out!');
      navigate('/my-account');
    } catch (error) {
      toast.error('Failed to log out. Please try again.');
    }
  };

  // Define search routes
  const SEARCH_ROUTES = {
    backdrops: '/backdrops',
    rentals: '/rentals',
    purchase: '/purchase',
    profile: '/account-details',
    contact: '/contact',
    about: '/about',
    journal: '/journal',
    shop: '/shop',
    account: '/my-account',
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery?.trim().toLowerCase();
    if (!query) return;
    const targetPath = SEARCH_ROUTES[query];
    if (targetPath) {
      navigate(targetPath);
    } else {
      toast.error('Page not found.');
    }
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target)) {
        setIsShopDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const shopLinks = [
    { name: 'My Account', path: '/my-account' },
    { name: 'Backdrops', path: '/backdrops' },
    { name: 'Rentals', path: '/rentals' },
    { name: 'Terms', path: '/Faq' },
  ];

  // Standardize mobile links to use href
  const mobileLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shop', href: '/shop' },
    { name: 'Journals', href: '/journal' },
    { name: 'Backdrops', href: '/backdrops' },
    { name: 'Rentals', href: '/rentals' },
    { name: 'My Account', href: '/my-account' },
    { name: 'Profile', href: '/account-details' },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-3xl font-accent text-yellow-500 tracking-wide mb-2">
          <Link to="/">Neon Backdrops</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative" ref={shopDropdownRef}>
            <button
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onClick={(e) => {
                e.stopPropagation();
                navigate('/shop');
              }}
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Shop <FaChevronDown className="inline ml-1" />
            </button>
            {isShopDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
                onClick={(event) => event.stopPropagation()}
              >
                {shopLinks.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="block px-4 py-2 hover:bg-purple-100"
                    onClick={() => setIsShopDropdownOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
          {/** Map through main links */}
          {[
            { name: 'Home', path: '/' },
            { name: 'Journal', path: '/journal' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
            { name: 'Profile', path: '/account-details' },
          ].map(({ name, path }) => (
            <Link key={name} to={path} className="text-gray-700 hover:text-purple-600">
              {name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaSearch
            className="text-gray-700 hover:text-purple-600 cursor-pointer transition duration-300 transform hover:scale-125"
            onClick={toggleSearch}
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
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="relative" ref={userDropdownRef}>
            <FaUser onClick={toggleUserDropdown} className="text-gray-700 hover:text-purple-600 cursor-pointer transition" />
            {isUserDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-auto bg-white shadow-lg rounded-md z-10"
              >
                {user ? (
                  <>
                    <div className="px-4 py-2 text-gray-700">
                      {`Hello, ${user.displayName || user.email}`}
                    </div>
                    <Link to="/my-account" className="block px-4 py-2 text-gray-700 hover:bg-purple-100 transition">
                      My Account
                    </Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 transition">
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="/my-account" className="block px-4 py-2 text-gray-700 hover:bg-purple-100 transition">
                    Login
                  </Link>
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
        <div className="flex flex-col items-center font-mulish py-4 space-y-2">
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 py-2 transition-all duration-300 hover:text-purple-500 hover:scale-105"
              aria-current={window.location.pathname === link.href ? 'page' : undefined}
              style={{
                fontWeight: window.location.pathname === link.href ? 'bold' : 'normal',
                color: window.location.pathname === link.href ? '#6f55f2' : undefined,
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
