import React from 'react';

const DigitalBackground = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">Transform Your Space: Digital Backgrounds Coming Soon!</h1>
      <h2 className="text-2xl text-gray-700 mb-2">Elevate your photography and videos with our stunning digital backgrounds.</h2>
      <p className="text-gray-600 mb-4">
        From breathtaking landscapes to vibrant abstract designs, our digital backgrounds are designed to enhance your creative projects.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <img src="/path/to/background1-placeholder.png" alt="Background Placeholder" className="w-full h-32 object-cover" />
        <img src="/path/to/background2-placeholder.png" alt="Background Placeholder" className="w-full h-32 object-cover" />
      </div>
      <form className="mb-4">
        <label className="block mb-2 text-gray-700">Sign up for notifications:</label>
        <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded mb-4 w-full" />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Subscribe</button>
      </form>
    </div>
  );
};

export default DigitalBackground;
