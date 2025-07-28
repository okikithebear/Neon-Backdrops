import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules'; 
import { useNavigate } from 'react-router-dom';
import { products } from '../Assets/Product image/data';

// Shuffle using Fisher-Yates algorithm
const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

// Format currency with Naira symbol and commas
const formatCurrency = (amount) => {
  return `₦${Number(amount).toLocaleString()}`;
};

const ProductCarousel = () => {
  const navigate = useNavigate();
  const shuffledProducts = shuffleArray(products.filter(product => product.type.toLowerCase() === "backdrop"));

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="relative mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-4xl font-bold font-mulish mb-4 sm:mb-0 sm:mr-auto px-6 py-3">
            Shop New Arrivals
          </h2>
          <a
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold font-mulish text-lg rounded-lg bg-black hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5"
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
          navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            375: { slidesPerView: 1 },
            393: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="product-carousel"
        >
          {shuffledProducts.map((product) => (
            <SwiperSlide key={product.id} className="group">
              <div
                className="relative bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative w-full h-[500px] sm:h-[350px] lg:h-[400px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow z-10">
                    Size: 6×9 – 8×12 in
                  </div>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.title}</h3>
                  <p className="text-sm text-purple-600 capitalize">{product.type}</p>
                  <p className="text-sm text-gray-700 mb-3">{product.name}</p>
                  
                  {/* Price Section */}
                  <div className="mt-2">
                    {product.variants && product.variants.length > 0 ? (
                      <p className="text-xl font-bold text-purple-700">
                        {formatCurrency(
                          Math.min(...product.variants.map((v) => v.price))
                        )} – {formatCurrency(
                          Math.max(...product.variants.map((v) => v.price))
                        )}
                      </p>
                    ) : (
                      <p className="text-xl font-bold text-purple-700">
                        {formatCurrency(product.price)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    
  );
};

export default ProductCarousel;
