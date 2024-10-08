import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AboutImage1 from '../Assets/Images/About.jpg';
import AboutImage2 from '../Assets/Images/About2.avif';

const images = [AboutImage1, AboutImage2]; // Array of images

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div ref={ref} className="flex flex-col md:flex-row h-auto md:h-screen">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 relative h-64 md:h-full">
        <motion.img 
          key={currentImage} // Unique key for each image
          src={images[currentImage]} 
          alt="Backdrop" 
          className="w-full h-full object-cover" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Right Text Section with Individual Animations */}
      <motion.div 
        className="w-full md:w-1/2 flex items-center justify-center bg-black p-8 md:p-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="text-left text-white space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold uppercase font-headline"
          >
            About Neon Backdrops
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg font-headline"
          >
            Our founder started painting his own backdrops because he wanted to create signature photographs. Today, Neon Backdrops shares that love with creators all over the world. With over 10 years of artistic experience, we’re dedicated to hand-crafting unique, high-quality backdrops that bring every creative vision to life.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black py-2 px-4 mt-4 inline-block transition duration-300"
          >
            Learn More &rarr;
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
