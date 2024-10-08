// import icons
// import {
//     // IoLogoYoutube,
//     // IoLogoFacebook,
//     // IoLogoGithub,
//     IoLogoInstagram,
//     IoMdAddCircle,
//     IoIosCheckmarkCircle,
//     IoIosArrowRoundForward,
//   } from 'react-icons/io';
  
//   // import images
//   import Features1Img from './assets/img/features-1.png';
//   import Features2Img from './assets/img/features-2.png';
//   import ChairImg from './assets/img/chair.png';
//   import BedImg from './assets/img/bed.png';
//   import CupboardImg from './assets/img/cupboard.png';
//   import LightingImg from './assets/img/lighting.png';
//   import BathroomImg from './assets/img/bathroom.jpg';
//   import LampstandImg from './assets/img/lampstand.jpg';
//   import Product1Img from './assets/img/products/product-1.png';
//   import Product2Img from './assets/img/products/product-2.png';
//   import Product3Img from './assets/img/products/product-3.png';
//   import Product4Img from './assets/img/products/product-4.png';
//   import Product5Img from './assets/img/products/product-5.png';
//   import Product6Img from './assets/img/products/product-6.png';
//   import Product7Img from './assets/img/products/product-7.png';
//   import Product8Img from './assets/img/products/product-8.png';
//   import Product9Img from './assets/img/products/product-9.png';
//   import Product10Img from './assets/img/products/product-10.png';
//   import TestimonialImg from './assets/img/testimonial.png';
//   import Avatar1Img from './assets/img/avatar-1.png';
//   import Avatar2Img from './assets/img/avatar-2.png';
//   import Avatar3Img from './assets/img/avatar-3.png';
  
export const navigation = [
    {
      name: 'home',
      href: '/',
    },
    {
      name: 'shop',
      dropdown: [
        { name: 'my account', href: '/my-account' },
        { name: 'backdrops', href: '/backdrops' },
        { name: 'rental', href: '/rental' },
        { name: 'purchase', href: '/purchase' },
        { name: 'double sided', href: '/double-sided' },
      ],
    },
    {
      name: 'digital backdrops',
      href: '/digital-backdrops',
    },
    {
      name: 'journal',
      href: '/journal',
    },
    {
      name: 'about',
      href: '/about',
    },
    {
      name: 'contact',
      href: '/contact',
    },
  ];
  
//   export const hero = {
//     title: 'Your imagination, Our creation.',
//     subtitle:
//       'Crafting timeless furniture, our passion lies in blending form, function, and artistry. Elevate your living spaces with our exceptional creations.',
//     buttonText: 'Shop Now',
//   };
  
//   export const stats = [
//     {
//       value: '3',
//       text: 'Year Experience',
//     },
//     {
//       value: '100%',
//       text: 'Quality of product',
//     },
//     {
//       value: '1k+',
//       text: 'Furniture sold',
//     },
//     {
//       value: '60+',
//       text: 'Variant Furniture',
//     },
//   ];
  
//   export const features = {
//     image: <Features1Img />,
//     title: 'Elevating the Aesthetics of Your Home',
//     subtitle:
//       'Crafting Timeless Elegance: Transforming Homes into Stunning and Inviting Spaces of Comfort.',
//     buttonText: 'Show Now',
//     items: [
//       {
//         icon: <IoIosCheckmarkCircle />,
//         title: 'Professional Services',
//         subtitle:
//           'Delivering Excellence: Your Trusted Partner for Professional Services That Exceed Expectations.',
//       },
//       {
//         icon: <IoIosCheckmarkCircle />,
//         title: 'Unique Furniture Models',
//         subtitle:
//           'Unveiling Distinctive Designs: Elevate Your Space with Our Exceptional Furniture Creations.',
//       },
//     ],
//     feature2: {
//       image: <Features2Img />,
//       title: 'The Best Furniture Manufacturer of your choice',
//       subtitle:
//         'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
//     },
//   };
  
//   export const newInStore = {
//     title: 'New In Store Now',
//     subtitle: 'Get the latest items immediately with promo prices',
//     link: 'Check all',
//     icon: <IoIosArrowRoundForward />,
//     products: [
//       {
//         name: 'chair',
//         image: <ChairImg />,
//       },
//       {
//         name: 'bed',
//         image: <BedImg />,
//       },
//       {
//         name: 'cupboard',
//         image: <CupboardImg />,
//       },
//       {
//         name: 'lighting',
//         image: <LightingImg />,
//       },
//       {
//         name: 'Bathroom',
//         image: <BathroomImg />,
//       },
//       {
//         name: 'lampstand',
//         image: <LampstandImg />,
//       },
//     ],
//   };
  
//   export const products = {
//     title: 'All Products',
//     subtitle:
//       'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
//     pages: [
//       {
//         productList: [
//           {
//             image: <Product1Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Ceiling Light',
//             price: 75,
//             oldPrice: 82,
//           },
//           {
//             image: <Product2Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Wood Chair',
//             price: 50,
//             oldPrice: 70,
//           },
//           {
//             image: <Product3Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Papper Cupboard',
//             price: 105,
//             oldPrice: 120,
//           },
//           {
//             image: <Product4Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Ole Gundorse Spring',
//             price: 75,
//             oldPrice: 82,
//           },
//           {
//             image: <Product5Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Treos Seroes 911',
//             price: 200,
//             oldPrice: 210,
//           },
//           {
//             image: <Product6Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Multi bilderman slibber',
//             price: 45,
//             oldPrice: 50,
//           },
//           {
//             image: <Product7Img />,
//             icon: <IoMdAddCircle />,
//             name: 'XORA corner desk',
//             price: 320,
//             oldPrice: 325,
//           },
//           {
//             image: <Product8Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Black Forest Series Wood',
//             price: 225,
//             oldPrice: 240,
//           },
//           {
//             image: <Product9Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Papper Cupboard',
//             price: 105,
//             oldPrice: 120,
//           },
//           {
//             image: <Product10Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Ole Gundorse Spring',
//             price: 75,
//             oldPrice: 82,
//           },
//         ],
//       },
//       {
//         productList: [
//           {
//             image: <Product1Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Ceiling Light',
//             price: 75,
//             oldPrice: 82,
//           },
//           {
//             image: <Product2Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Wood Chair',
//             price: 50,
//             oldPrice: 70,
//           },
//           {
//             image: <Product3Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Papper Cupboard',
//             price: 105,
//             oldPrice: 120,
//           },
//           {
//             image: <Product4Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Ole Gundorse Spring',
//             price: 75,
//             oldPrice: 82,
//           },
//           {
//             image: <Product5Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Treos Seroes 911',
//             price: 200,
//             oldPrice: 210,
//           },
//           {
//             image: <Product6Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Multi bilderman slibber',
//             price: 45,
//             oldPrice: 50,
//           },
//           {
//             image: <Product7Img />,
//             icon: <IoMdAddCircle />,
//             name: 'XORA corner desk',
//             price: 320,
//             oldPrice: 325,
//           },
//           {
//             image: <Product8Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Black Forest Series Wood',
//             price: 225,
//             oldPrice: 240,
//           },
//           {
//             image: <Product9Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Papper Cupboard',
//             price: 105,
//             oldPrice: 120,
//           },
//           {
//             image: <Product10Img />,
//             icon: <IoMdAddCircle />,
//             name: 'Ole Gundorse Spring',
//             price: 75,
//             oldPrice: 82,
//           },
//         ],
//       },
//     ],
//   };
  
//   export const testimonial = {
//     title: 'What people are saying about us',
//     image: <TestimonialImg />,
//     persons: [
//       {
//         avatar: <Avatar1Img />,
//         name: 'Josh Smith',
//         occupation: 'Manager of The New York Times',
//         message:
//           '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
//       },
//       {
//         avatar: <Avatar2Img />,
//         name: 'Brandi Johns',
//         occupation: 'Manager of The New York Times',
//         message:
//           '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
//       },
//       {
//         avatar: <Avatar3Img />,
//         name: 'Paula Pfeffer',
//         occupation: 'Manager of The New York Times',
//         message:
//           '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
//       },
//     ],
//   };
  
//   export const newsletter = {
//     title: 'Get more discount Off your order',
//     subtitle: 'Join our mailing list',
//     placeholder: 'Your email address',
//     buttonText: 'Shop Now',
//   };
  
//   export const footer = {
//     social: [
//       // {
//       //   icon: <IoLogoYoutube />,
//       //   href: '#',
//       // },
//       {
//         icon: <IoLogoInstagram />,
//         href: 'https://instagram.com/woodpentryltd?igshid=MzRIODBiNWFIZA==',
//       },
//       // {
//       //   icon: <IoLogoGithub />,
//       //   href: '#',
//       // },
//       // {
//       //   icon: <IoLogoFacebook />,
//       //   href: '#',
//       // },
//     ],
//     copyright: 'FurniShop 2022 - All Rights Reserved.',
//   };