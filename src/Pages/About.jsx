import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WomanImg from '../Assets/Gallery/August.JPG';

import { motion } from 'framer-motion';
import { transition1 } from '../transition';

const About = () => {
  const location = useLocation();

  // Scroll to the top whenever the location changes (i.e., page reload or route change)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='py-8 md:py-24 bg-white mt-8 mb-10'
    >
      <div className='container mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition1}
            className='order-2 md:order-1'
          >
            <img
              src={WomanImg}
              alt='Woman'
              className='w-[400px] h-[500px] rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105'
            />
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: '-50%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={transition1}
            className='order-1 md:order-2 text-left'
          >
            <h2 className='text-2xl md:text-4xl font-bold mt-20 md:mt-0 mb-4 text-primary px-4 md:px-0'>
              About Me
            </h2>
            <p className='text-gray-600 mb-8 px-4 md:px-0 leading-relaxed'>
  Hi, I’m <strong>Toyese</strong>, a passionate photographer and custom backdrop designer dedicated to transforming every shot with stunning, tailor-made photography backdrops. With years of professional experience in photography and design, I create high-quality, custom backdrops that elevate your images for photoshoots, events, and personal projects.
  <br /><br />
  My mission is to bring your vision to life with innovative, handcrafted backdrop solutions that perfectly complement the mood and essence of your moments. Each project is a unique opportunity to collaborate and turn your ideas into visual masterpieces. Explore my portfolio to see how my custom neon and photography backdrops can capture the beauty in every frame.
</p>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
