// Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ productName }) => {
  return (
    <nav className="text-purple-600 mb-3">
      <Link to="/" className="hover:underline">Home</Link>
      <span className="mx-2">/</span>
      <Link to="/shop" className="hover:underline">Shop</Link>
      <span className="mx-2">/</span>
      <span className="text-purple-600">{productName}</span>
    </nav>
  );
};

export default Breadcrumb;
