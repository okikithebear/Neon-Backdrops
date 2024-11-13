// SearchBar.js
import React from 'react';

const SearchBar = ({ setFilters }) => {
  const handleSearch = (e) => {
    setFilters(prev => ({ ...prev, searchTerm: e.target.value }));
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search for backdrops..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
