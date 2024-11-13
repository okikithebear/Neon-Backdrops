import React from 'react';
import PhotographerImage from '../Assets/Images/About.jpg';
import { FaInstagram } from 'react-icons/fa';
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PhotographerImage})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide leading-tight max-w-4xl mx-auto mt-10">
            Designed & Hand Painted with Care in Lagos, Nigeria
          </h1>
        </div>
      </div>

      {/* Founder Content Section */}
      <section className="container-fluid flex flex-col p-2 md:p-6 lg:flex-row lg:mb-0 font-mulish mt-10">
        <div className="basis-1/3 lg:basis-1/2 lg:mb-10 md:px-1">
          {/* Image without hover effect */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8618069/pexels-photo-8618069.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Founder"
              className="relative lg:top-14 items-center xl:top-0 overflow-x-visible rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="basis-1/2 md:my-auto lg:w-1/3 lg:px-2 md:py-2 md:px-1 lg:mx-4 flex-wrap">
          <h1 className="text-2xl md:text-3xl font-semibold lg:text-4xl text-darkBlue lg:my-4 my-4">
            Capturing Moments, Creating Stories
          </h1>

          <span>
            <i className="fa fa-quote-left text-2xl text-darkgreenVariant"></i>
          </span>
          <p className="px-3 text-lg italic text-slate-500 w-full md:w-5/6 -mt-2 mx-4">
            <span>
              "Photography is the story I fail to put into words."
              <br />
              - Destin Sparks
            </span>
          </p>
        </div>
      </section>

      {/* Call-to-Action (CTA) Button with Instagram Icon */}
      <div className="flex justify-center mb-10">
      <a
          href="https://www.instagram.com/your_instagram_handle"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-darkgreenVariant text-black text-lg font-semibold rounded-full transition duration-300 hover:bg-darkgreenVariant-dark hover:scale-105 flex items-center space-x-2"
        >
          <FaInstagram className="text-2xl" />  {/* Instagram Icon */}
          <span>Check out more on Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default About;
