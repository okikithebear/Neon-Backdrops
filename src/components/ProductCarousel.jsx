import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay for auto-sliding

// Import images directly
import img1 from '../Assets/Product image/photo-1513135724701-30343e546328.avif';
import img2 from '../Assets/Product image/photo-1537204319452-fdbd29e2ccc7.avif';
import img3 from '../Assets/Product image/photo-1549396563-73701bbb8f20.avif';
import img4 from '../Assets/Product image/photo-1565791380713-1756b9a05343.avif';
import img5 from '../Assets/Product image/photo-1634479080997-e25e8a2f1a14.avif';

const ProductCarousel = () => {
  const products = [
    {
      image: img1,
      title: 'Backdrop 1',
      price: '₦99,000',
    },
    {
      image: img2,
      title: 'Backdrop 2',
      price: '₦89,000',
    },
    {
      image: img3,
      title: 'Backdrop 3',
      price: '₦120,000',
    },
    {
      image: img4,
      title: 'Backdrop 4',
      price: '₦150,000',
    },
    {
      image: img5,
      title: 'Backdrop 5',
      price: '₦110,000',
    },
  ];

  return (
    <section className=" relative mt-20">
      <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
  <h2 className="text-2xl sm:text-4xl font-headline mb-4 sm:mb-0 sm:mr-auto px-6 py-3 ">Shop New Arrivals</h2>

  {/* <p className="text-base sm:text-lg hidden sm:block text-gray-700 bg-white p-3 rounded-lg shadow-lg animate-bounce mx-auto sm:mx-6">
    Swipe to see more
  </p> */}

<a
  href="/view-all"
  className="inline-block px-6 py-3  text-black font-medium text-lg rounded-lg cursor-pointer"
>
  View All &rarr;
</a>
</div>



      

        <Swiper
          modules={[Navigation, Autoplay]} // Added Autoplay module
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            375: {
                slidesPerView: 1, // 1 slide for screens >= 640px
              },
            393: {
              slidesPerView: 2, // 1 slide for screens >= 640px
            },
            768: {
              slidesPerView: 3, // 2 slides for screens >= 768px
            },
            1024: {
              slidesPerView: 4, // 3 slides for screens >= 1024px
            },
          }}
          className="product-carousel"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="group relative">
            <div className="relative w-full h-full bg-white   transform transition duration-300 group-hover:scale-105 border-b-4 border--500">
              {/* Image */}
              <div className="relative w-full h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              {/* Product Info inside the same card */}
              <div className="p-4 text-center">
                {/* Product Title */}
                <p className="text-lg font-semibold text-gray-800">{product.title}</p>
                {/* Price Tag */}
                <p className="text-xl font-bold text-gray-900 mt-2 mr-1">
                  {product.price}
                </p>
              </div>
            </div>
            {/* Margin between slides */}
            <div className="mt-4"></div>
          </SwiperSlide>
          
          
          
          ))}

        
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
