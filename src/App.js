// App.js
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./Context/CartContext.js";

// Importing new components for the pages
import AboutSection from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import WorkGallery from './components/WorkGallery';

// Pages
import Backdrops from './Pages/Backdrops';
import Rentals from './Pages/Rentals';
import Purchase from './Pages/Purchase';
import DigitalBackdrops from './Pages/DigitalBackdrops'; // Ensure file is correct
import Contact from './Pages/Contact';
import DoubleSided from './Pages/DoubleSided';
import About from './Pages/About.jsx';
import Journal from './Pages/Journal';
import ShopPage from './Pages/Shop'; // Ensure file is correct
import MyAccount from './Pages/MyAccount'; 
// import ForgotPassword from './Pages/ForgotPassword'; 
// import Login from './Pages/Login'; 
import ProductPage from './Pages/ProductPage';  
import CartPage from './Pages/Cart'; 
import CheckoutPage from './Pages/Checkout';
// import Founder from './Pages/About.jsx';
import FAQ from './Pages/Faq.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProductCarousel />
                <Gallery />
                <AboutSection />
                <WorkGallery />
              </>
            } />
            <Route path="/backdrops" element={<Backdrops />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/digital-backdrops" element={<DigitalBackdrops />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/double-sided" element={<DoubleSided />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/my-account" element={<MyAccount />} />
            {/* <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/Faq" element={<FAQ />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
