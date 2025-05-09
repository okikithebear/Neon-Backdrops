import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules'; 
import { useNavigate } from 'react-router-dom';
import { products } from '../Assets/Product image/data';

// Function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

// Function to format currency with Naira symbol and commas
const formatCurrency = (amount) => {
  return `₦${Number(amount).toLocaleString()}`;
};

const ProductCarousel = () => {
  const navigate = useNavigate();
  const shuffledProducts = shuffleArray(products.filter(product => product.type.toLowerCase() === "backdrop"));

  // Function to handle product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="relative mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-4xl font-mulish mb-2 sm:mb-0 sm:mr-auto px-6 py-3">
            Shop New Arrivals
          </h2>
          <a
            href="/shop"
            className="inline-block px-6 py-3 text-white font-mulish text-lg rounded-lg cursor-pointer bg-black hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg flex items-center justify-center"
          >
            <span className="mr-2">View All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 transition-transform transform group-hover:translate-x-2"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            393: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="product-carousel"
        >
          {shuffledProducts.map((product) => (
            <SwiperSlide key={product.id} className="group relative">
              <div
                className="relative w-full bg-white cursor-pointer overflow-hidden rounded-lg"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative w-full h-[500px] sm:h-[350px] lg:h-[400px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 text-start bg-gray-200 rounded-b-lg shadow-md">
                  <p className="text-lg font-semibold text-gray-800">{product.title}</p>
                  <p className="text-base text-purple-600 mt-1">{product.type}</p>
                  <p className="text-base text-black mt-1">{product.name}</p>
                  <div className="mt-2">
                    <p className="text-xl font-bold text-purple-600">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
