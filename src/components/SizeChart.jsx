import React, { useState } from "react";

const SizeChart = ({ sizes, onSelectSize }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedSize(selected);
    if (onSelectSize) {
      onSelectSize(selected);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="size">
        Choose Size
      </label>
      <select
        id="size"
        value={selectedSize}
        onChange={handleChange}
        className="block w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      >
        <option value="" disabled>Choose size</option>
        {sizes.map((size, index) => (
          <option key={index} value={size.label}>
            {size.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeChart;
