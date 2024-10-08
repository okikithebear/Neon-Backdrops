const Footer = () => {
    return (
      <footer className="bg-black text-white py-12 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
          
          {/* Shop Section */}
          <div>
            <h3 className="text-neon text-lg font-bold mb-4 ">Shop</h3>
            <ul className="space-y-3 lg:pl-4">
              <li><a href="/collections/backdrops" className="hover:text-neon transition">Backdrops</a></li>
              <li><a href="/collections/apple-boxes" className="hover:text-neon transition">Apple Boxes</a></li>
              <li><a href="/collections/lighting-kits" className="hover:text-neon transition">Lighting Kits</a></li>
            </ul>
          </div>
  
          {/* About Section */}
          <div>
            <h3 className="text-neon text-lg font-bold mb-4 ">About</h3>
            <ul className="space-y-3 lg:pl-4">
              <li><a href="/about-us" className="hover:text-neon transition">Our Story</a></li>
              <li><a href="/contact" className="hover:text-neon transition">Contact</a></li>
              <li><a href="/faq" className="hover:text-neon transition">FAQs</a></li>
            </ul>
          </div>
  
          {/* Customer Service Section */}
          <div>
            <h3 className="text-neon text-lg font-bold mb-4 ">Customer Service</h3>
            <ul className="space-y-3 lg:pl-4">
              <li><a href="/shipping" className="hover:text-neon transition">Shipping & Returns</a></li>
              <li><a href="/privacy" className="hover:text-neon transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-neon transition">Terms & Conditions</a></li>
            </ul>
          </div>
  
          {/* Connect Section */}
          <div>
            <h3 className="text-neon text-lg font-bold mb-4">Connect</h3>
            <div className="flex justify-center sm:justify-start space-x-4 mb-4 lg:pl-4">
  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition">
    <i className="fab fa-twitter"></i>
  </a>
</div>

            <div className="mt-6 lg:pl-4">
              <h3 className="text-sm mb-2 ">Subscribe to our Newsletter</h3>
              <form className="flex w-full">
                <input type="email" placeholder="Enter email" className="flex-1 px-4 py-2 bg-gray-800 rounded-l-md" />
                <button className="bg-neon text-black px-6 py-2 rounded-r-md hover:bg-green-700 transition">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>© 2024 Neon Backdrops. All rights reserved.</p>
          <div className="space-x-4 mt-2">
            <a href="/privacy" className="hover:text-neon">Privacy Policy</a>
            <a href="/terms" className="hover:text-neon">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  