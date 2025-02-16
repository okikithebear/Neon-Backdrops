import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Close the modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose} // Clicking outside closes the modal
          aria-hidden="true"
        >
          <motion.div
            className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white p-8 rounded-xl shadow-2xl max-w-md mx-4 text-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-header"
            aria-describedby="promo-description"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            <h2 id="promo-header" className="text-3xl font-extrabold mb-4">
              🎉 10% Off All Deals!
            </h2>
            <p id="promo-description" className="text-lg mb-6">
              Limited time only! Grab this exclusive offer before it ends.
            </p>
            <button
              onClick={handleClose}
              className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label="Close promo popup"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;
