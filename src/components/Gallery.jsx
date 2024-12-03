import React, { useState} from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Share from 'yet-another-react-lightbox/plugins/share';

import image1 from '../Assets/Gallery/August4.JPG';
import image2 from '../Assets/Gallery/Truth.JPG';
import image3 from '../Assets/Gallery/August5.JPG';
import image4 from '../Assets/Gallery/August.JPG';

const images = [image1, image2, image3, image4];

const Gallery = () => {
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
  

  return (
    <div className="gallery-container bg-white py-4 mb-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-headline text-center my-6 lg:my-10 text-gray-900">
        Experience Neon Backdrops in Action
        <span className="block text-base md:text-lg lg:text-lg text-gray-600 mt-4">
          Explore how our vibrant backdrops transform real-life events into unforgettable moments.
        </span>
      </h1>

      {/* Conditional rendering for mobile vs desktop view */}
      <div className="relative flex items-center justify-center max-w-screen-xl mx-auto">

        {/* Mobile View: Single image slide container */}
        <div className="w-full md:hidden">
          <img
            src={images[0]}
            alt="Mobile Slide"
            className="w-full h-[500px] md:h-[400px] object-cover cursor-pointer rounded-lg shadow-lg"
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
            {visibleImages.map((src, index) => (
              <div key={index} className="w-full">
                <img
                  src={src}
                  alt={`Slide ${visibleStartIndex + index}`}
                  className="w-full h-[300px] md:h-[400px] object-cover cursor-pointer"
                  onClick={() => {
                    setPhotoIndex(visibleStartIndex + index);
                    setIsOpen(true);
                  }}
                />
              </div>
            ))}
          </div>

          {/* Next Button */}
          {visibleStartIndex + 4 < images.length && (
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 bg-gray-800 text-black rounded-full hover:bg-gray-600 transition duration-300"
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
          slides={images.map((img) => ({ src: img }))}
          plugins={[Fullscreen, Zoom, Slideshow, Share]}
          className="custom-lightbox-overlay"
        />
      )}
    </div>
  );
};

export default Gallery;
