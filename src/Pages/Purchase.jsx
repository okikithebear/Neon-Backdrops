import React from 'react';
// import { Link } from 'react-router-dom';

const Purchase = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">Coming Soon: Exciting Purchases Await!</h1>
      <h2 className="text-2xl text-gray-700 mb-2">Get ready to explore our curated selection of products.</h2>
      <p className="text-gray-600 mb-4">
        From vibrant digital backdrops to premium rental options, we have it all!
      </p>
      <form className="mb-4">
        <label className="block mb-2 text-gray-700">Stay tuned for updates:</label>
        <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Subscribe</button>
      </form>
      <img src="/path/to/purchase-placeholder.png" alt="Purchase Placeholder" className="mt-4 w-full max-w-md" />
    </div>
  );
};

export default Purchase;
