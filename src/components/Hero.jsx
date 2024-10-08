import React, { useState, useEffect } from 'react';
import '../Style/Hero.css';
import { motion } from 'framer-motion';
import backgroundImage1 from '../Assets/Images/background.jpg';
import backgroundImage2 from '../Assets/Images/Hero2.avif';

const backgroundImages = [backgroundImage1, backgroundImage2];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
    hover: { scale: 1.1 },
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
    >
      <div className="hero-overlay absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h1 className="font-headline text-2xl md:text-6xl font-bold text-white animate-text-pop-in">
          ARTISTRY MEETS CRAFTSMANSHIP
        </h1>
        <p className="font-body text-xl md:text-2xl text-gray-300 mt-4 animate-fade-in-down">
          Elevate Your Space with Handcrafted Elegance
        </p>
        <motion.a
          href="/shop"
          className="bg-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.5)] px-8 py-4 text-lg lg:text-xl rounded-md backdrop-blur-md transition mt-10 lg:px-20 lg:py-6"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          SHOP NOW →
        </motion.a>
        <div className="absolute bottom-5 animate-bounce">
          <i className="fas fa-arrow-down text-white text-2xl"></i>
        </div>
      </div>
    </section>
  );
}

export default Hero;
