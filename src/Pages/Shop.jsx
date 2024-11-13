import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { products } from "../Assets/Product image/data.js";
import FilterComponent from "../components/FilterBar.jsx";
import Pagination from "../components/Pagination.jsx"; // Import the Pagination component
import { AiOutlineShoppingCart } from "react-icons/ai"; // Shopping cart icon

const Shop = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, Infinity]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedTexture, setSelectedTexture] = useState("All"); // New state for texture
  const [sortOption, setSortOption] = useState("latest");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Number of products to show per page

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const filteredProducts = products
    .filter((product) => {
      const withinPriceRange =
        product.price >= selectedPriceRange[0] &&
        product.price <= selectedPriceRange[1];
      const matchesCategory =
        selectedCategory === "All" || product.type === selectedCategory;
      const matchesColor =
        selectedColor === "All" || product.color === selectedColor;
      const matchesSize =
        selectedSize === "All" || product.size === selectedSize;
      const matchesTexture =
        selectedTexture === "All" || product.texture === selectedTexture; // New filter for texture

      return (
        withinPriceRange &&
        matchesCategory &&
        matchesColor &&
        matchesSize &&
        matchesTexture // Include texture in the return condition
      );
    })
    .sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      }
      if (sortOption === "price-desc") {
        return b.price - a.price;
      }
      return 0; // Default sorting (latest)
    });

  // Calculate total pages based on filtered products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get the products for the current page
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
      {/* Breadcrumbs */}
      <div className="text-gray-500 text-sm mb-2">Home / Shop</div>

      {/* Header Section */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">SHOP</h1>
      </div>

      {/* Layout with Filter and Products */}
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Filter Component on the left */}
        <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
          <FilterComponent
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedTexture={selectedTexture} // Pass the new texture state
            setSelectedTexture={setSelectedTexture} // Pass the setter for texture
          />
        </div>

        {/* Products and sorting in the center */}
        <div className="lg:w-3/4 w-full">
  {/* Product Count and Sorting */}
  <div className="flex flex-col lg:flex-row justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
    <p className="text-gray-600 font-mulish  mb-2 lg:mb-0">
      Showing {currentProducts.length} of {filteredProducts.length} results
    </p>
    <div className="text-gray-600 font-mulish flex items-center">
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
              <Link to={`/product/${product.id}`} key={product.id}> {/* Wrap product in a Link */}
                <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] sm:h-[350px] lg:h-[300px] object-cover mb-4"
                  />
                  <h2 className="font-bold text-gray-800 mb-3">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-2">{product.type}</p>
                  <p className="text-gray-600 font-bold">₦{formatCurrency(product.price)}</p> {/* Use formatCurrency */}
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
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;