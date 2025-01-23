import React, { useState, useEffect } from 'react';
import '../Style/Hero.css';
import { motion } from 'framer-motion';
import backgroundImage1 from '../Assets/Gallery/hero.jpeg';
import backgroundImage2 from '../Assets/Gallery/hero.jpeg';

const backgroundImages = [backgroundImage1, backgroundImage2];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      backgroundImages.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);
  

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
      style={{
        backgroundImage: `url(${backgroundImages[currentImage]})`,
        filter: "contrast(1.2) brightness(1.1)", // Enhance sharpness and brightness
      }}
    >
      <div className="hero-overlay absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
      <h1 className="font-headline text-2xl md:text-6xl font-mulish text-white animate-text-pop-in">
  <span className="block text-4xl md:text-7xl">ARTISTRY</span>
  MEETS CRAFTSMANSHIP
</h1>

        <p className="font-mulish text-white text-lg md:text-2xl text-gray-300 mt-4 animate-fade-in-down">
          Elevate Your Space with Handcrafted Elegance
        </p>
        <motion.a
  href="/shop"
  className="bg-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.5)] px-4 py-2 text-lg rounded-md backdrop-blur-md mt-10 lg:px-8 lg:py-4"
  variants={buttonVariants}
  initial="hidden"
  animate="visible"
  whileHover={{
    scaleX: 1.2,  // Extends horizontally by 20%
    transformOrigin: "center",  // Ensures the button expands from the center
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }}
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
