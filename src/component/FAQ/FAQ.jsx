import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi';

const faqs = [
  {
    question: "Are Encanto products safe for toddlers?",
    answer: "Absolutely! Our formulas are dermatologically tested and 100% non-toxic, making them perfect for even the most sensitive young skin."
  },
  {
    question: "Is the Lice Banisher chemical-free?",
    answer: "Yes, we use a specialized blend of peppermint and botanical extracts that eliminate lice naturally without harsh pesticides."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship nationwide with express 3-5 day delivery. We are working on expanding our enchantment globally soon!"
  }
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-24 bg-[#FFF9FB] overflow-hidden">
      {/* Decorative Floating Bubbles */}
      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-[10%] w-24 h-24 bg-pink-200/30 rounded-full blur-xl"
      />
      <motion.div 
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-40 right-[15%] w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about our scents, safety, and orders.
          </p>
        </div>

        {/* The Glassmorphism FAQ Card */}
        <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(255,192,203,0.15)] border border-white/80">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                className={`rounded-2xl transition-all duration-300 ${active === i ? 'bg-white shadow-md' : 'bg-transparent'}`}
              >
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${active === i ? 'text-pink-500' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                  <div className="text-pink-300 group-hover:text-pink-500 transition-colors">
                    {active === i ? <HiMinusCircle size={32} /> : <HiPlusCircle size={32} />}
                  </div>
                </button>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-500 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Support Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">Still have questions?</p>
          <a href="#" className="text-pink-500 font-bold text-lg hover:underline decoration-2 underline-offset-8">
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;