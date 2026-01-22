import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShoppingBag, HiSearch, HiAdjustments } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import FAQ from '../../component/FAQ/FAQ';

const products = [
  {
    id: 1,
    name: "Artisan Rose Soap",
    category: "Soap",
    price: 12.00,
    rating: 5,
    image: "/soap-un.avif", // Local image path
    tag: "Handmade"
  },
  {
    id: 2,
    name: "Lice Banisher Shampoo",
    category: "Lice Banishers",
    price: 24.50,
    rating: 5,
    image: "/lice-un.avif", // Local image path
    tag: "Bestseller"
  },
  {
    id: 3,
    name: "Pure Silk Shampoo",
    category: "Shampoo",
    price: 18.00,
    rating: 4,
    image: "/shampoo-un.avif", // Local image path
    tag: "New"
  },
  // Add more items as needed...
];

const Product = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Soap', 'Shampoo', 'Lice Banishers'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100/80 via-rose-400/60 to-black/10 pt-36 space-y-16">

        {/* SEO Meta Tags */}
        <meta name="description" content="Discover our range of natural, handmade products crafted with care and sustainable ingredients." />
        <meta name="keywords" content="Encanto, Natural Products, Handmade Soap, Organic Shampoo, Lice Banishers, Eco-friendly Beauty" />
        <meta name="author" content="Mohimanul" />
        <meta name="robots" content="index, follow" />
        <title>Products - Encanto Scented</title>
        <meta property="og:title" content="Products - Encanto Scented" />
        <meta property="og:description" content="Discover our range of natural, handmade products crafted with care and sustainable ingredients." />
        <meta property="og:type" content="website" />

      <div className="max-w-7xl mx-auto px-8">
        
        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-serif font-bold text-gray-900"
            >
              Our Collection
            </motion.h1>
            <p className="text-gray-500 mt-2">Pure ingredients, enchanting scents.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                  filter === cat 
                  ? 'bg-pink-500 text-white border-pink-500 shadow-lg shadow-pink-200' 
                  : 'bg-white text-gray-500 border-gray-100 hover:border-pink-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-pink-50 shadow-sm hover:shadow-2xl hover:shadow-pink-100 transition-all duration-500"
              >
                {/* Image & Badge */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-pink-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-4 rounded-full shadow-xl"
                    >
                      <HiOutlineShoppingBag size={24} />
                    </motion.button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-[10px] text-pink-400 font-bold uppercase tracking-widest mb-1">
                        {product.category}
                      </p>
                      <h3 className="text-lg font-bold text-gray-800 leading-tight">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-xl font-black text-gray-900">${product.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={12} className={i < product.rating ? 'fill-current' : 'text-gray-200'} />
                    ))}
                    <span className="text-[10px] text-gray-400 font-bold ml-1">(24 Reviews)</span>
                  </div>

                  <button className="w-full py-3 bg-pink-50 text-pink-500 font-bold rounded-2xl hover:bg-pink-500 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-gray-400 text-xl font-medium">Coming soon to the shop!</p>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Product;