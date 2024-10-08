import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton
} from 'react-share';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../Assets/Collection-image/collection-image.jpeg';
import image2 from '../Assets/Collection-image/collection-image1.jpeg';
import image3 from '../Assets/Collection-image/collection-image.jpeg';
import image4 from '../Assets/Collection-image/collection-image.jpeg';

const images = [image1, image2, image3, image4];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="gallery-container bg-white py-4 mb-20">
      {/* Section Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-headline text-center my-6 sm:my-8 text-gray-900">
        Experience Neon Backdrops in Action
        <span className="block text-base sm:text-lg lg:text-xl text-gray-600 mt-3 sm:mt-4">
          Explore how our vibrant backdrops transform real-life events into unforgettable moments.
        </span>
      </h1>

      {/* Slider/Carousel */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-4">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="cursor-pointer w-full h-64 sm:h-80 md:h-96 object-cover rounded-md transition-transform duration-300 hover:scale-105"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Modal for Fullscreen Images */}
      {isOpen && (
        <div className="modal fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={images[photoIndex]}
              alt={`${photoIndex}`}
              className="w-auto h-auto max-w-full max-h-screen rounded-md"
            />
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              &times; {/* Close button */}
            </button>
            <div className="share-options mt-4 flex justify-center space-x-2">
              <FacebookShareButton url={images[photoIndex]}>
                <button className="share-btn bg-blue-500 text-white px-4 py-2 rounded-md">Share on Facebook</button>
              </FacebookShareButton>
              <TwitterShareButton url={images[photoIndex]}>
                <button className="share-btn bg-blue-400 text-white px-4 py-2 rounded-md">Share on Twitter</button>
              </TwitterShareButton>
              <PinterestShareButton url={images[photoIndex]}>
                <button className="share-btn bg-red-600 text-white px-4 py-2 rounded-md">Pin it</button>
              </PinterestShareButton>
              <a href={images[photoIndex]} download>
                <button className="share-btn bg-green-500 text-white px-4 py-2 rounded-md">Download Image</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
