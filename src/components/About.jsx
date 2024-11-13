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
            className="text-3xl md:text-4xl  uppercase font-mulish"
          >
           Crafted just for you with a decade of artistic passion and expertise.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg font-mulish"
          >
            Our founder began painting his own backdrops to craft unique, signature photographs. Today, Neon Backdrops continues that passion, bringing one-of-a-kind creations to photographers and creators worldwide.
          </motion.p>
          <button
  className="bg-white text-black hover:bg-transparent hover:text-white border-2 hover:border-white py-2 px-4 mt-4 inline-block transition duration-300"
>
  Learn More &rarr;
</button>


        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
