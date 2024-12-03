import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { products } from "../Assets/Product image/data.js";
import Pagination from "../components/Pagination"; // Make sure to adjust the import path as necessary
import { AiOutlineShoppingCart } from "react-icons/ai"; // Shopping cart icon

const Rental = () => {
  const [selectedPriceRange] = useState([0, Infinity]);
  const [sortOption, setSortOption] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust the number of items per page as needed

  const rentalProducts = products
    .filter((product) => product.type === "Rental")
    .filter((product) => product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1])
    .sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      }
      if (sortOption === "price-desc") {
        return b.price - a.price;
      }
      return 0; // Default sorting (latest)
    });

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Calculate total pages
  const totalPages = Math.ceil(rentalProducts.length / itemsPerPage);
  
  // Get current products to display
  const currentProducts = rentalProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
      {/* Breadcrumbs */}
      <div className="text-gray-500 text-sm mb-2">Home / Rentals</div>

      {/* Header Section */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">RENTALS</h1>
      </div>

      
      {/* Product Count and Sorting */}
  <div className="flex flex-col lg:flex-row justify-between font-mulish items-center mb-6 p-4 bg-gray-50 rounded-lg">
    <p className="text-gray-600 mb-2 lg:mb-0">
    Showing {currentProducts.length} of {rentalProducts.length} results
    </p>
    <div className="text-gray-600 flex items-center">
      Sort by:
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="ml-2 border rounded-md p-1 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
      >
        <option value="latest">Latest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  </div>

      {/* Product Grid with Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
              <img
                src={product.image}
                alt={product.name}
               className="w-full h-[500px] sm:h-[350px] lg:h-[400px] object-cover mb-4"
              />
              <h2 className="text-black mb-3">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.type}</p>
              <p className="text-gray-600 font-bold">
                ₦{formatCurrency(product.price)}
              </p>
              <button
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
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={(page) => setCurrentPage(page)} 
      />
    </div>
  );
};

export default Rental;
