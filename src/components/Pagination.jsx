import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import your preferred icon library

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisibleButtons = 5; // Maximum visible page buttons
    const halfVisible = Math.floor(maxVisibleButtons / 2);

    // Calculate start and end page numbers based on current page
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    // Adjust start and end page if close to the edges
    if (startPage === 1) {
      endPage = Math.min(maxVisibleButtons, totalPages);
    } else if (endPage === totalPages) {
      startPage = Math.max(1, totalPages - maxVisibleButtons + 1);
    }

    // Build the page numbers array
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Add ellipses if necessary
    if (startPage > 2) {
      pageNumbers.unshift('...');
      pageNumbers.unshift(1);
    }
    if (endPage < totalPages - 1) {
      pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => typeof number === 'number' && handlePageChange(number)}
        className={`px-3 py-1 rounded-md transition-colors duration-200 ${
          number === currentPage
            ? 'bg-black text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-purple-500 text-white hover:bg-purple-600'
        }`}
      >
        <ChevronLeft className="mr-1" />
        Previous
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-purple-500 text-white hover:bg-purple-600'
        }`}
      >
        Next
        <ChevronRight className="ml-1" />
      </button>
    </div>
  );
};

export default Pagination;
