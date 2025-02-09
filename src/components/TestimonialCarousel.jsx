import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      feedback: "I love your backdrop…",
      photographer: "Modu27photography",
    },
    {
      id: 2,
      feedback: "Omo bro I love the background…",
      photographer: "sholathephotographer",
    },
    {
      id: 3,
      feedback: "I’ve seen the backdrops and they look really good…",
      photographer: "King George Okoro",
    },
    {
      id: 4,
      feedback: "Yes, I really like them all…So amazing 🤩❤️✌🏽",
      photographer: "Alameen Studios",
    },
    {
      id: 5,
      feedback: "Super excited I know u!🤗",
      photographer: "Lang_le_photographe",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <section className="bg-white text-yellow-500 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-black">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="px-6 py-8 bg-black rounded-2xl shadow-xl backdrop-blur-lg text-white"
            >
              <p className="text-xl italic mb-5">"{testimonial.feedback}"</p>
              <p className="text-lg font-semibold text-yellow-400">
                - {testimonial.photographer}
              </p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
