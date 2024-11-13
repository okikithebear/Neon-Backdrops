import React from 'react';

const DoubleSided = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">Double the Fun: Coming Soon!</h1>
      <h2 className="text-2xl text-gray-700 mb-2">Discover our double-sided products soon.</h2>
      <p className="text-gray-600 mb-4">
        Maximize your creative possibilities with our versatile double-sided designs.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Unique Designs</li>
        <li>High-Quality Materials</li>
        <li>Perfect for Every Occasion</li>
      </ul>
      <form className="mb-4">
        <label className="block mb-2 text-gray-700">Check back soon for exclusive previews:</label>
        <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Subscribe</button>
      </form>
      <img src="/path/to/double-sided-placeholder.png" alt="Double Sided Placeholder" className="mt-4 w-full max-w-md" />
    </div>
  );
};

export default DoubleSided;
