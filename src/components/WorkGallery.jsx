import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Share from 'yet-another-react-lightbox/plugins/share';

// Importing images directly
import Image1 from '../Assets/Product image/photo-1537204319452-fdbd29e2ccc7.avif';
import Image2 from '../Assets/Product image/photo-1537204319452-fdbd29e2ccc7.avif';
import Image3 from '../Assets/Product image/photo-1565791380713-1756b9a05343.avif';
import Image4 from '../Assets/Product image/photo-1549396563-73701bbb8f20.avif';

const images = [
  { src: Image1, photographer: 'Photographer A' },
  { src: Image2, photographer: 'Photographer B' },
  { src: Image3, photographer: 'Photographer C' },
  { src: Image4, photographer: 'Photographer D' },
];

const WorkGallery = () => {
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
    <div className="gallery-container bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-16 mb-20">
      <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-6xl font-mulish text-center my-6 lg:my-10 text-black">
  <span className="block flex items-center justify-center">
    <i className="fa fa-camera-retro text-3xl mr-2"></i> {/* Camera Icon */}
    Great Environments
  </span>
  Inspire Great Photographers
</h2>



      <div className="relative flex items-center justify-center max-w-screen-xl mx-auto">
        {/* Mobile View: Single image slide container */}
        <div className="w-full md:hidden">
          <img
            src={images[0].src}
            alt="Mobile Slide"
            className="w-full h-[400px] object-cover cursor-pointer"
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
                  className="w-full h-[300px] md:h-[400px] object-cover cursor-pointer rounded-lg shadow-lg"
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 text-black p-4 text-center backdrop-blur-md bg-opacity-50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  <p className="text-sm md:text-base">{image.photographer}</p>
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

export default WorkGallery;
