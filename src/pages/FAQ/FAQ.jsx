import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus, HiSearch, HiChatAlt2 } from 'react-icons/hi';

const faqCategories = [
  {
    title: "Product Safety",
    questions: [
      { q: "Is the Lice Banisher safe for daily use?", a: "Yes! Our Lice Banisher is formulated with natural peppermint oils and is completely pesticide-free, making it safe for repeat use on children." },
      { q: "Are your soaps paraben-free?", a: "Every artisan soap we craft is free from parabens, sulfates, and harsh chemicals to ensure your skin stays healthy and hydrated." }
    ]
  },
  {
    title: "Shipping & Orders",
    questions: [
      { q: "How long does delivery take?", a: "Standard shipping typically takes 3-5 business days. You will receive a tracking number via email as soon as your order ships." },
      { q: "Do you offer international shipping?", a: "Currently, we ship across the country, but we are looking into international options for the near future!" }
    ]
  }
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. FAQ HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-rose-300/80 via-rose-400/60 to-pink-200/80">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6"
          >
            How can we <span className="text-pink-400 italic text-6xl md:text-8xl block md:inline">help?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto"
          >
            Find answers to our most common questions about Encanto Scented products, shipping, and safety.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <HiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="Search for a question..." 
              className="w-full pl-14 pr-6 py-5 rounded-full bg-white shadow-2xl shadow-pink-100 border-none focus:ring-2 focus:ring-pink-300 transition-all outline-none text-gray-700"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. FAQ CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        {faqCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-pink-400 pl-4">
              {category.title}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, qIndex) => {
                const uniqueId = `${catIndex}-${qIndex}`;
                const isOpen = activeQuestion === uniqueId;
                
                return (
                  <div 
                    key={qIndex} 
                    className={`border rounded-3xl transition-all duration-300 ${isOpen ? 'bg-pink-50/50 border-pink-100' : 'bg-white border-gray-100'}`}
                  >
                    <button 
                      onClick={() => setActiveQuestion(isOpen ? null : uniqueId)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className={`font-bold text-lg ${isOpen ? 'text-pink-600' : 'text-gray-700'}`}>
                        {item.q}
                      </span>
                      <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                        {isOpen ? <HiMinus /> : <HiPlus />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-gray-500 leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* 3. CONTACT REDIRECT */}
      <section className="bg-gray-900 py-20 px-6 rounded-[4rem] mx-4 mb-10 text-center">
        <h3 className="text-white text-3xl font-bold mb-4">Still have questions?</h3>
        <p className="text-gray-400 mb-10">We're here to help! Chat with our friendly team.</p>
        <button className="bg-pink-400 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-pink-500 transition-all">
          <HiChatAlt2 size={20}/> Contact Support
        </button>
      </section>

    </div>
  );
};

export default FAQ;