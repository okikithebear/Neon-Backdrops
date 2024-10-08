import React from 'react';
import { motion } from 'framer-motion';

// Importing images directly
import Image1 from '../Assets/Product image/photo-1537204319452-fdbd29e2ccc7.avif';
import Image2 from '../Assets/Product image/photo-1537204319452-fdbd29e2ccc7.avif';
import Image3 from '../Assets/Product image/photo-1565791380713-1756b9a05343.avif';
import Image4 from '../Assets/Product image/photo-1549396563-73701bbb8f20.avif';

const WorkGallery = () => {
  // Define animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
    hover: { scale: 1.1 },
  };

  // Array of images with imported paths
  const images = [
    {
      src: Image1,
      photographer: 'Photographer A',
    },
    {
      src: Image2,
      photographer: 'Photographer B',
    },
    {
      src: Image3,
      photographer: 'Photographer C',
    },
    {
      src: Image4,
      photographer: 'Photographer D',
    },
  ];

  return (
    <div className="bg-white text-black py-16 px-4 md:px-16 lg:px-24 mb-8 mt-10">
      <h2 className="text-3xl md:text-4xl font-bold uppercase font-headline text-center mb-12">
        Great Environments Inspire Great Photographers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <img
              src={image.src}
              alt={`Past Work ${index + 1}`}
              className="w-full h-64 object-cover transform transition duration-300"
            />
            {/* Photographer Name */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 text-black p-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <p className="text-sm md:text-base">{image.photographer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <motion.button
          href="/shop"
          className="bg-black text-neon font-headline px-8 py-4 text-lg lg:text-xl rounded-md backdrop-blur-md transition mt-10 lg:px-20 lg:py-6"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default WorkGallery;
