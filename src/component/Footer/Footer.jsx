import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTiktok, 
  FaEnvelope 
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-50 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <img 
              src="/path-to-your-logo/logo.png" 
              alt="Encanto Logo" 
              className="h-10 w-auto"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Bringing magic to your daily routine with scents that enchant and products that protect.
            </p>
            <div className="flex space-x-4">
              {[FaInstagram, FaFacebookF, FaTiktok].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, color: '#f472b6' }} // pink-400
                  className="text-pink-300 text-xl transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-widest text-xs">Shop Our Collection</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#soap" className="hover:text-pink-500 transition-colors">Artisan Soaps</a></li>
              <li><a href="#shampoo" className="hover:text-pink-500 transition-colors">Nourishing Shampoo</a></li>
              <li><a href="#lice-banishers" className="hover:text-pink-500 transition-colors">Lice Banishers</a></li>
              <li><a href="#bundles" className="hover:text-pink-500 transition-colors">Gift Bundles</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-widest text-xs">Customer Care</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#shipping" className="hover:text-pink-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#returns" className="hover:text-pink-500 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#faq" className="hover:text-pink-500 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-pink-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-widest text-xs">Stay Scented</h4>
            <p className="text-sm text-gray-500 mb-4">Subscribe for exclusive deals and new product drops!</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-3 rounded-full border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1 top-1 bottom-1 bg-pink-400 text-white px-4 rounded-full text-sm font-semibold"
              >
                Join
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pink-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} Encanto Scented Shop. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;