import React from 'react';
import { motion } from 'framer-motion';

// Importing images
import NatureBackdrop from '../Assets/Images/Journal 1.avif';
import UrbanBackdrop from '../Assets/Images/journal2.avif';
import VintageBackdrop from '../Assets/Images/Journal 3.avif';

// Array of articles with images and descriptions
const articles = [
  {
    title: "Nature Bliss",
    content: "Perfect for outdoor photoshoots with a natural vibe.",
    image: NatureBackdrop,
  },
  {
    title: "Urban Vibes",
    content: "Add an edgy, city feel to your photoshoots.",
    image: UrbanBackdrop,
  },
  {
    title: "Vintage Charm",
    content: "Timeless elegance for classic portrait photography.",
    image: VintageBackdrop,
  },
];

// Fade-up animation for individual articles
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Entry animation for the entire page
const pageEntry = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const Journal = () => {
  return (
    <motion.div
      className="container mx-auto p-6 bg-white mb-20 mt-20"
      initial="hidden"
      animate="visible"
      variants={pageEntry}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-serif font-bold font-mulish text-gray-800 tracking-wide">Journal</h1>
        <p className="text-gray-600 font-mulish mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Dive into our world of unique backdrops and explore tips to elevate your photography game.
        </p>
      </div>

      {/* Mood Board Collage */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="relative p-4 bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <h2 className="text-white text-xl font-semibold">{article.title}</h2>
            </div>
            <p className="text-gray-600 mt-4 text-sm">{article.content}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative Swatches */}
      <div className="relative mt-16 flex justify-center space-x-6">
        <motion.div
          className="w-20 h-20 bg-purple-400 rounded-full opacity-50"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="w-14 h-14 bg-blue-300 rounded-full opacity-50"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="w-16 h-16 bg-pink-300 rounded-full opacity-50"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </motion.div>
  );
};

export default Journal;
