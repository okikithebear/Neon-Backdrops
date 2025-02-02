import React, { useState } from "react";
import { products } from "../data"; // Import product data
import FilterSidebar from "./FilterSidebar"; // Import your sidebar filter

const Shop = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([350000, 400000]);
  const [selectedCategory, setSelectedCategory] = useState("Purchase");
  const [selectedFilters, setSelectedFilters] = useState({
    size: '',
    texture: ''
  });

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4">
        {/* Use the FilterSidebar component */}
        <FilterSidebar onFilterChange={handleFilterChange} />

        {/* Price Range Filter */}
        <h2 className="text-lg font-medium">Price Range</h2>
        <input
          type="range"
          min="350000"
          max="400000"
          step="10000"
          value={selectedPriceRange[0]}
          onChange={(e) => setSelectedPriceRange([e.target.value, selectedPriceRange[1]])}
        />
        <input
          type="range"
          min="350000"
          max="400000"
          step="10000"
          value={selectedPriceRange[1]}
          onChange={(e) => setSelectedPriceRange([selectedPriceRange[0], e.target.value])}
        />
        <p>{`₦${selectedPriceRange[0]} - ₦${selectedPriceRange[1]}`}</p>

        {/* Category Filter */}
        <h2 className="mt-4 text-lg font-medium">Category</h2>
        <div>
          <input
            type="checkbox"
            checked={selectedCategory === "Purchase"}
            onChange={() => setSelectedCategory("Purchase")}
          /> Purchase
        </div>

        {/* Reset Button */}
        <button className="mt-4 bg-brown-500 text-white px-3 py-2 rounded">
          Reset
        </button>
      </div>

      {/* Product Grid */}
      <div className="w-3/4 p-4 grid grid-cols-3 gap-4">
        {products
          .filter(
            (product) =>
              product.price >= selectedPriceRange[0] &&
              product.price <= selectedPriceRange[1] &&
              product.category.includes(selectedCategory) &&
              (selectedFilters.size ? product.size === selectedFilters.size : true) &&
              (selectedFilters.texture ? product.texture === selectedFilters.texture : true)
          )
          .map((product) => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <h3 className="text-3xl font-medium mt-2 text-red-400">{product.name}</h3>
              <p className="text-lg text-red-400">₦{product.price.toLocaleString()}</p>
              <button
                className={`mt-2 px-4 py-2 rounded ${product.inStock ? "bg-green-500" : "bg-red-500"}`}
                disabled={!product.inStock}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
