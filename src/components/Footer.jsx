const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12 px-6 border-t-2 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
        
        {/* Shop Section */}
        <div>
          <h3 className="text-yellow-600 text-xl font-mulish mb-4">Shop</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="/backdrops" className="hover:text-yellow-500 transition">Backdrops</a></li>
            <li><a href="/rentals" className="hover:text-yellow-500 transition">Rentals</a></li>
            {/* <li><a href="/backdrops" className="hover:text-yellow-500 transition">Digital Backdrops</a></li> */}
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-yellow-600 text-xl font-mulish mb-4">About</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="/about" className="hover:text-yellow-500 transition">Our Story</a></li>
            <li><a href="/contact" className="hover:text-yellow-500 transition">Contact</a></li>
            <li><a href="/Faq" className="hover:text-yellow-500 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="text-yellow-600 text-xl font-mulish mb-4">Customer Service</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="/Faq" className="hover:text-yellow-500 transition">Shipping & Returns</a></li>
            <li><a href="/privacy-policy" className="hover:text-yellow-500 transition">Privacy Policy</a></li>
            <li><a href="/Faq" className="hover:text-yellow-500 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          {/* Logo Text and Tagline */}
          <div className="mb-6">
            <h2 className="text-3xl font-accent text-yellow-500 tracking-wide mb-2">
              Neon Backdrops
            </h2>
            <p className="text-gray-600 text-sm font-light max-w-xs mx-auto sm:mx-0">
              Bringing your visions to life with hand-crafted backdrops. Each piece is uniquely designed, blending art with over a decade of photography expertise.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <a href="https://www.instagram.com/neon_backdrops?igsh=ZnI3cmV4ZjZuNGU5" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600 transition text-lg">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500 font-mulish">
        <p>© 2025 Neon Backdrops. All rights reserved.</p>
        
        {/* Footer Links and Social Icons */}
        <div className="flex justify-center font-mulish items-center space-x-4 mt-2">
          <a href="/privacy-policy" className="hover:text-yellow-600 transition">Privacy Policy</a>
          <a href="/Faq" className="hover:text-yellow-600 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
