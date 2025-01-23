import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Share from 'yet-another-react-lightbox/plugins/share';

// Importing images directly
import Image1 from '../Assets/Gallery/Customize1.JPG';
import Image2 from '../Assets/Gallery/Customize2.JPG';
import Image3 from '../Assets/Gallery/Customize3.JPG';
import Image4 from '../Assets/Gallery/Customize4.JPG';

const images = [
  { src: Image1, photographer: 'Creativity' },
  { src: Image2, photographer: 'Vision' },
  { src: Image3, photographer: 'Inspiration' },
  { src: Image4, photographer: 'Muse' },
];

const Customize = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const visibleImages = images.slice(visibleStartIndex, visibleStartIndex + 4);

  const handleNext = () => {
    setVisibleStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 4));
  };

  const handlePrev = () => {
    setVisibleStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
    hover: { scale: 1.05, rotateY: 10, transition: { type: 'spring', stiffness: 200 } },
  };

  return (
    <div className="gallery-container bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-16 mb-20">
      <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-6xl font-mulish text-center my-6 lg:my-10 text-black">
        <span className="block flex items-center justify-center">
          <i className="fa fa-paint-brush text-3xl mr-2"></i> {/* Updated Icon */}
          Customize Your Own Designs
        </span>
        Let Your Creativity Shine
      </h2>

      {/* Text for customized backdrops with WhatsApp link */}
      <div className="text-center my-6">
        <p className="text-lg md:text-xl text-gray-700">
          For customized backdrops, please{' '}
          <a
            href="https://wa.me/23490567879"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            contact us on WhatsApp
          </a>{' '}
          at Neon Backdrops. Let’s make your vision a reality!
        </p>
      </div>

      <div className="relative flex items-center justify-center max-w-screen-xl mx-auto">
        {/* Mobile View: Single image slide container */}
        <div className="w-full md:hidden">
          <img
            src={images[0].src}
            alt="Mobile Slide"
            className="w-full h-[500px] object-cover cursor-pointer rounded-lg shadow-lg"
            onClick={() => {
              setPhotoIndex(0);
              setIsOpen(true);
            }}
          />
        </div>

        {/* Desktop View: Grid layout with navigation */}
        <div className="hidden md:flex items-center justify-center relative">
          {/* Previous Button */}
          {visibleStartIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition duration-300"
            >
              &lt;
            </button>
          )}

          {/* Grid layout for images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden transform-style-preserve-3d"
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={cardVariants}
                onClick={() => {
                  setPhotoIndex(visibleStartIndex + index);
                  setIsOpen(true);
                }}
              >
                <img
                  src={image.src}
                  alt={`Slide ${visibleStartIndex + index}`}
                  className="w-full h-[400px] md:h-[400px] object-cover cursor-pointer rounded-lg shadow-lg"
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 text-black p-4 text-center backdrop-blur-md bg-opacity-50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  <p className="text-sm md:text-base text-yellow-500 font-accent">{image.photographer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Next Button */}
          {visibleStartIndex + 4 < images.length && (
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition duration-300"
            >
              &gt;
            </button>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images.map((img) => ({ src: img.src }))}
          plugins={[Fullscreen, Zoom, Slideshow, Share]}
        />
      )}
    </div>
  );
};

export default Customize;
