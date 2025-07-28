import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../Assets/Product image/data";
import { FaStar, FaRegStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineInfo } from "react-icons/md";
import Breadcrumb from "../components/Breadcrumb";
import { CartContext } from "../Context/CartContext";
import { motion } from 'framer-motion';

import { Menu } from "@headlessui/react"; // Place this at the top
// import SizeChart from "../components/SizeChart";

// Main ProductPage Component
const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the product based on the id parameter
   const product = products.find((p) => p.id === parseInt(id));
  // default to the first variant
  const [selectedVariant, setSelectedVariant] = useState()
    product?.variants?.[0] ?? { size: product.size, price: product.price }
  );
 

  // const [selectedSize, setSelectedSize] = useState(null);

  
  // Local state management
  const [quantity, setQuantity] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  // const [showSizeChart, setShowSizeChart] = useState(false);

  // Access addToCart function from global CartContext
  const { addToCart } = useContext(CartContext);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If product is not found, display an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  // // Toggle the Size Chart modal
  // const toggleSizeChart = () => {
  //   setShowSizeChart((prev) => !prev);
  // };

  // const toggleSizeChart = () => {
  //   setIsSizeChartVisible(!isSizeChartVisible);
  // };

  // Data for the Size Chart
  
  // const handleSizeChange = (e) => {
  //   const newSize = e.target.value;
  //   const variant = product.variants.find((v) => v.size === newSize);
  //   setSelectedVariant(variant);
  // };

  // Update quantity ensuring a minimum of 1
  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value));
    setQuantity(newQuantity);
  };

  // Validate and update rental start date
  const handleStartDateChange = (e) => {
    const date = e.target.value;
    if (endDate && new Date(date) >= new Date(endDate)) {
      alert("Start Date must be before End Date.");
    } else {
      setStartDate(date);
      setShowWarning(false);
    }
  };

  // Validate and update rental end date
  const handleEndDateChange = (e) => {
    const date = e.target.value;
    if (startDate && new Date(date) <= new Date(startDate)) {
      alert("End Date must be after Start Date.");
    } else {
      setEndDate(date);
      setShowWarning(false);
    }
  };

  // Calculate rental duration (in days)
  const calculateRentalDuration = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = end - start;
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      return daysDiff >= 0 ? daysDiff + 1 : 0; // +1 to include the last day
    }
    return 0;
  };

  // Calculate estimated price for rentals
  const calculateEstimatedPrice = () => {
    const rentalDuration = calculateRentalDuration();
    const estimatedPrice = rentalDuration * product.price * quantity;
    return estimatedPrice > 0 ? estimatedPrice : 0;
  };

  // Render rental popup information when rental duration is valid
  const renderRentalPopup = () => {
    const rentalDuration = calculateRentalDuration();
    const estimatedPrice = calculateEstimatedPrice();

    return (
      rentalDuration > 0 && (
        <div className="p-6 bg-indigo-50 rounded-lg mt-6 shadow-lg animate-fade-in">
          <h2 className="text-xl font-bold text-indigo-700 mb-2">
            Rental Information
          </h2>
          <div className="border-b border-indigo-200 mb-3"></div>
          <p className="text-gray-800 text-lg font-semibold mb-1">
            <span className="text-indigo-600">Duration:</span> {rentalDuration}{" "}
            {rentalDuration > 1 ? "days" : "day"}
          </p>
          <p className="text-gray-800 text-lg font-semibold mb-1">
            <span className="text-indigo-600">Estimated Price:</span> ₦
            {formatCurrency(estimatedPrice)}
          </p>
        </div>
      )
    );
  };

  // Format number as currency with commas
  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

 // Handle Add to Cart action; for rentals, ensure dates are selected
 const handleAddToCart = () => {
  // Normalize product type to lowercase
  const normalizedType = product.type.toLowerCase();

  if (normalizedType === "rental" && (!startDate || !endDate)) {
    setShowWarning(true);
    return;
  } else {
    setShowWarning(false);
  }

  const rentalDuration = calculateRentalDuration();
  
  // Build product details object with encapsulated rentalDates
  const productDetails = {
    ...product,
    type: normalizedType, // normalized to lowercase
    quantity: parseInt(quantity),
    size: selectedVariant.size,
    variantType: selectedVariant.type,
    price: selectedVariant.price,
    // selectedSize: selectedSize ? selectedSize.label : null,
    rentalDates: normalizedType === "rental" ? { start: startDate, end: endDate } : null,
    rentalDuration: normalizedType === "rental" ? rentalDuration : null,
    // Optionally, calculate rentalPrice on the fly if needed
    rentalPrice: normalizedType === "rental" ? rentalDuration * product.price * quantity : null,
  };

  addToCart(productDetails);
  navigate("/cart");
};

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Product Image Gallery */}
        <div className="lg:w-1/2">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[550px] sm:h-[650px] lg:h-[700px] rounded-lg shadow-lg object-cover"
            />
              {/* Range Badge */}
              <div className="absolute top-3 left-3 bg-purple-600 bg-opacity-90 text-white text-[11px] sm:text-xs font-medium px-3 py-1 rounded-full shadow-md tracking-wide">
              Size: 6×9 – 8×12 in
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 space-y-4">
          <Breadcrumb productName={product.name} />

          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          {/* Product Rating and Reviews */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, index) =>
                index < 4 ? <FaStar key={index} /> : <FaRegStar key={index} />
              )}
            </div>
            <span className="text-gray-600">(20 Reviews)</span>
          </div>
          

          {/* SIZE SELECTOR */}
{product.type?.toLowerCase() !== "rental" && Array.isArray(product.variants) && (
  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Choose Size:
    </label>

    <Menu as="div" className="relative inline-block w-full text-left">
      <div>
        <Menu.Button className="inline-flex justify-between items-center w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-md hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
          {selectedVariant.size} – ₦{formatCurrency(selectedVariant.price)}
          <svg
            className="ml-2 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
      </div>

      <Menu.Items className="absolute mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20 max-h-60 overflow-y-auto">
        <div className="py-1">
          {/* Grouped Items */}
          {["single", "double"].map(type => {
            const filtered = product.variants.filter(v => v.type === type);
            if (filtered.length === 0) return null;

            return (
              <div key={type}>
                <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase bg-gray-100">
                  {type === "single" ? "Single-Sided" : "Double-Sided"}
                </div>
                {filtered.map((variant, index) => (
                  <Menu.Item key={`${type}-${index}`}>
                    {({ active }) => (
                      <button
                        onClick={() => setSelectedVariant(variant)}
                        className={`${
                          active ? "bg-indigo-100 text-indigo-700" : ""
                        } w-full text-left px-4 py-2 text-sm font-medium text-gray-800 hover:bg-indigo-50 transition-colors`}
                      >
                        {variant.size} – ₦{formatCurrency(variant.price)}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            );
          })}
        </div>
      </Menu.Items>
    </Menu>

    {/* Show the selected size */}
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-2 text-sm text-gray-700 font-medium"
    >
      Selected Size:{" "}
      <span className="text-purple-600 font-semibold">{selectedVariant.size}</span>
    </motion.div>
  </div>
)}
<motion.div
  initial={{ opacity: 0, y: 4 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  className="mt-1 text-sm text-gray-700 font-medium"
>
  Selected Type:{" "}
  <span className="text-indigo-600 font-semibold capitalize">
    {selectedVariant.type}
  </span>
</motion.div>



      {/* PRICE */}
      <p className="text-2xl font-bold text-green-600 mt-4">
        ₦{formatCurrency(selectedVariant.price)}
      </p>

          {/* Stock Availability */}
          <p
            className={`text-sm font-semibold ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>

          {/* Product Specifications */}
          <div className="space-y-2">
            <p className="text-gray-600">
              <strong>Size:</strong> {product.size}
            </p>
            <p className="text-gray-600">
              <strong>Color:</strong> {product.color}
            </p>
            <p className="text-gray-600">
              <strong>Texture:</strong> {product.texture}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-3">
            <label className="font-bold text-gray-600">Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="border border-gray-300 rounded-lg p-2 w-16"
            />
          </div>
         

  


          {/* Rental Section */}
          {product.type === "Rental" && (
            <div className="mt-4">
              <h2 className="text-gray-600 font-bold">Rental Period:</h2>
              <div className="flex space-x-3">
                <div className="flex flex-col">
                  <label className="text-gray-600">Start Date:</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-purple-600">End Date:</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              {showWarning && (
                <div className="mt-4 p-4 bg-red-100 text-red-600 rounded-lg">
                  Please select both a start and end date for the rental.
                </div>
              )}
              {renderRentalPopup()}
            </div>
          )}

          {/* Delivery Information */}
          <p className="text-gray-600 text-sm">
            <MdOutlineInfo className="inline-block mr-1" />
            Estimated Delivery: <strong>3-5 business days</strong>
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`flex items-center justify-center px-6 py-3 w-full text-white font-bold rounded-lg ${
              product.inStock
                ? "bg-purple-500 hover:bg-purple-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!product.inStock}
          >
            <AiOutlineShoppingCart className="mr-2" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>

          {/* Description Accordion */}
          <div className="mt-6">
            <details className="group border-b border-gray-300 pb-2">
              <summary className="flex justify-between items-center font-bold text-purple-800 cursor-pointer">
                <span>Product Description</span>
                <span className="transform transition-transform duration-300 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </details>
          </div>

          {/* Additional Info Accordion */}
          <div className="mt-4">
            <details className="group border-b border-gray-300 pb-2">
              <summary className="flex justify-between items-center font-bold text-purple-800 cursor-pointer">
                <span>Specifications & Returns Policy</span>
                <span className="transform transition-transform duration-300 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="text-gray-600 mt-2">
                <strong>Specifications:</strong> {product.specifications}
                <br />
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>
            </details>
          </div>
        </div>
      </div>

     

      {/* Customer Reviews Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          Customer Reviews
        </h2>
        <div className="border-t border-gray-300 pt-4">
          <div className="mb-4">
            <p className="font-bold">George Okoro</p>
            <p className="text-sm text-yellow-400">★★★★★</p>
            <p className="text-gray-600">Great product! Highly recommend.</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Tosinxnaps</p>
            <p className="text-sm text-yellow-400">★★★★★</p>
            <p className="text-gray-600">
              They are very beautiful. I enjoy the backdrops a lot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
