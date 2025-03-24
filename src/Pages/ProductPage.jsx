import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../Assets/Product image/data";
import { FaStar, FaRegStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineInfo } from "react-icons/md";
import Breadcrumb from "../components/Breadcrumb";
import { CartContext } from "../Context/CartContext";
import SizeChart from "../components/SizeChart";

// Main ProductPage Component
const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the product based on the id parameter
  const product = products.find((p) => p.id === parseInt(id));
  
  // Local state management
  const [quantity, setQuantity] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);

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

  // Toggle the Size Chart modal
  const toggleSizeChart = () => {
    setShowSizeChart((prev) => !prev);
  };

  // Data for the Size Chart
  const sizeChartData = {
    sizes: [
      { label: "Small", width: "7x12", height: "7ft" },
      { label: "Medium", width: "8x8", height: "8ft" },
      { label: "Large", width: "10x10", height: "10ft" },
      { label: "X-Large", width: "12x12", height: "12ft" },
    ],
  };

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

          {/* Price */}
          <p className="text-2xl font-bold text-green-600">
            ₦{formatCurrency(product.discountedPrice || product.price)}
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

      {/* Size Chart Button */}
      <button
        onClick={toggleSizeChart}
        className="text-purple-500 font-semibold inline-flex items-center space-x-1 hover:text-purple-700 hover:underline hover:shadow-lg transition-all duration-200 ease-in-out mb-4 mt-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v6h-2V6zm0 8h2v2h-2v-2z" />
        </svg>
        <span>View Size Chart</span>
      </button>

      {/* Size Chart Modal */}
      {showSizeChart && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-8 rounded-xl max-w-lg w-full shadow-xl relative overflow-hidden animate-fadeIn border-t-4 border-purple-500">
            {/* Close Button */}
            <button
              onClick={toggleSizeChart}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition duration-200 ease-in-out"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Header with Icon */}
            <div className="flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 mr-2"
                fill="purple"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v6h-2V6zm0 8h2v2h-2v-2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-700">Size Chart</h3>
            </div>
            {/* Size Chart Content */}
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <SizeChart sizes={sizeChartData.sizes} />
            </div>
          </div>
        </div>
      )}

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
