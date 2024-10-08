import { motion } from 'framer-motion';
import backdropImg from '../Assets/Collection-image/collection-image1.jpeg';
import appleBoxImg from '../Assets/Collection-image/collection-image.jpeg';

const Collection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-16 bg-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold text-center mb-10 text-gray-800"
      >
        Explore Our Unique Collections
      </motion.h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl px-4 md:px-0">
        {/* Backdrops Collection */}
        <motion.div
          className="relative overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-72 md:h-96 flex justify-center items-center bg-gray-100 rounded-xl shadow-lg">
            <img 
              src={backdropImg} 
              alt="Backdrops" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-3 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">Backdrops →</h3>
          </motion.div>
        </motion.div>

        {/* Apple Boxes Collection */}
        <motion.div
          className="relative overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-72 md:h-96 flex justify-center items-center bg-gray-100 rounded-xl shadow-lg">
            <img 
              src={appleBoxImg} 
              alt="Apple Boxes" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-3 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">Apple Boxes →</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collection;
