import React from 'react';
import { motion } from 'framer-motion';

const PriceListSection = () => {
  return (
    <section className="bg-gray-900 text-yellow-500 py-12 px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-black rounded-full shadow-lg animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-black rounded-full shadow-lg animate-pulse"></div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center border border-yellow-500 rounded-lg shadow-lg relative bg-gray-800 p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-semibold text-yellow-400 mb-2">NEON BACKDROPS</h1>
          <p className="text-2xl italic font-serif mb-8">Price List</p>
        </motion.div>

        <div className="border-t border-yellow-500 my-4"></div>

        <div className="space-y-6">
          {/* Price Section */}
          {[
            {
              title: "SINGLE SIDED",
              prices: [
                { size: "6 BY 9", price: "95,500" },
                { size: "6 BY 12", price: "120,000" },
                { size: "6 BY 15", price: "165,000" },
              ],
            },
            {
              title: "SINGLE SIDED",
              prices: [
                { size: "7 BY 9", price: "115,500" },
                { size: "7 BY 12", price: "150,000" },
                { size: "7 BY 15", price: "180,000" },
              ],
            },
            {
              title: "SINGLE SIDED",
              prices: [
                { size: "8 BY 10", price: "145,000" },
                { size: "8 BY 12", price: "175,000" },
                { size: "8 BY 15", price: "195,000" },
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-bold mb-2">{section.title}</h2>
              <ul className="space-y-2">
                {section.prices.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between text-lg hover:text-yellow-300 transition-colors duration-300"
                  >
                    <span>{item.size}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-yellow-500 my-4"></div>

        {/* Framer Motion Animation Loader */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1.2, 1],
            opacity: [0, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-8"
          style={{
            width: 150,
            height: 150,
            margin: "0 auto",
            borderRadius: "50%",
            backgroundColor: "#FBBF24",
          }}
        />
      </div>
    </section>
  );
};

export default PriceListSection;
