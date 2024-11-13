import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';


const FilterBar = ({
  selectedPriceRange,
  setSelectedPriceRange,
  selectedCategory,
  setSelectedCategory,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  selectedTexture,
  setSelectedTexture,
}) => {
  const [filters, setFilters] = useState({
    size: '',
    texture: '',
    color: '',
  });
  const [isCollapsed, setIsCollapsed] = useState({
    size: false,
    texture: false,
    color: false,
  });

  const filterData = [
    {
      name: 'Size',
      options: ['Large', 'Medium', 'Small'],
      counts: [2, 3, 5], // Mock counts for each size option
    },
    {
      name: 'Texture',
      options: ['Low', 'Mid', 'Strong', 'Gradient', 'Grainy', 'Scenic', 'Swirls'],
      counts: [1, 0, 4, 2, 3, 0, 5], // Mock counts for each texture option
    },
    {
      name: 'Color',
      options: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black', 'White'],
      counts: [2, 5, 0, 3, 1, 4, 2], // Mock counts for each color option
    },
  ];

  const handleFilterChange = (category, value) => {
    if (category === 'size') {
      setSelectedSize(value);
    } else if (category === 'color') {
      setSelectedColor(value);
    } else if (category === 'texture') {
      setSelectedTexture(value);
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      size: '',
      texture: '',
      color: '',
    });
    setSelectedPriceRange([30000, 500000]);
    setSelectedCategory("All");
    setSelectedColor("All");
    setSelectedSize("All");
    setSelectedTexture("All");
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const toggleCollapse = (filterName) => {
    setIsCollapsed((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  return (
    <div className="p-6 bg-gray-100 border font-mulish border-gray-200 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Category</h3>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ease-in-out duration-200"
        >
          <option value="All">All</option>
          <option value="Backdrop">Backdrop</option>
          <option value="Rental">Rentals</option>
        </select>
      </div>

      {/* Filter Categories with Collapsible Sections */}
      {filterData.map((filter, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">{filter.name}</h3>
            <button
              className="text-gold-600"
              onClick={() => toggleCollapse(filter.name.toLowerCase())}
            >
              {isCollapsed[filter.name.toLowerCase()] ? (
                <FaChevronDown className="inline text-purple-500" />
              ) : (
                <FaChevronUp className="inline text-purple-500" />
              )}
            </button>
          </div>

          {/* Animated collapse/expand section */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isCollapsed[filter.name.toLowerCase()] ? 0 : 'auto', opacity: isCollapsed[filter.name.toLowerCase()] ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-2">
              {filter.options.map((option, idx) => (
                <div key={idx} className="flex items-center">
                  <input
                    type="radio"
                    name={filter.name.toLowerCase()}
                    value={option}
                    checked={filters[filter.name.toLowerCase()] === option}
                    onChange={() => handleFilterChange(filter.name.toLowerCase(), option)}
                    className="form-radio h-5 w-5 text-purple-500 border-purple-300 focus:ring-purple-500 transition duration-200"
                  />
                  <label className="ml-3 text-gray-800 text-lg font-medium">
                    {option} ({filter.counts[idx]}) {/* Show the count next to the option */}
                  </label>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ))}

  

      {/* Reset Button */}
      <button
  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500 transition-colors duration-300 ease-in-out flex items-center justify-center space-x-2"
  onClick={handleReset}
>
  <i className="fas fa-undo-alt"></i> 
  <span>RESET FILTERS</span>
</button>

    </div>
  );
};

export default FilterBar;
