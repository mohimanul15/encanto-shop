import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiChatAlt2, HiArrowRight } from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100/80 via-rose-400/60 to-transparent pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decorative Bubbles */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-[-5%] w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-[100px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-[0_32px_64px_-15px_rgba(255,182,193,0.2)] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* LEFT SIDE: INFO */}
            <div className="p-8 md:p-16 lg:p-20">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-pink-500 font-bold tracking-widest uppercase text-sm"
              >
                Contact Us
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight"
              >
                We'd Love to Hear <br />From You!
              </motion.h1>
              <p className="mt-6 text-gray-500 text-lg max-w-md leading-relaxed">
                Drop a message like it's a bubble in the breeze. Our team is here to help you stay scented.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-400 shadow-sm group-hover:scale-110 transition-transform">
                    <HiMail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Email Us</p>
                    <p className="text-gray-800 font-medium">hello@encantoshop.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-400 shadow-sm group-hover:scale-110 transition-transform">
                    <HiPhone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Call Us</p>
                    <p className="text-gray-800 font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-16 flex items-center gap-4">
                {[FaInstagram, FaFacebookF, FaTiktok].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5 }}
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center text-pink-300 hover:text-pink-500 transition-colors"
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>

              {/* Support Card Peek */}
              <div className="mt-12 p-6 bg-pink-50/50 rounded-3xl border border-pink-100 flex items-center justify-between group cursor-pointer hover:bg-pink-100/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200">
                    <HiChatAlt2 size={20} />
                  </div>
                  <span className="font-bold text-gray-700">Need immediate help?</span>
                </div>
                <HiArrowRight className="text-pink-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <div className="bg-white/30 p-8 md:p-16 lg:p-20 flex items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-pink-100 border border-white"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Send a Message</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase px-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-pink-200 focus:ring-4 focus:ring-pink-50 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase px-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-pink-200 focus:ring-4 focus:ring-pink-50 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase px-1">Message</label>
                    <textarea 
                      rows="4" 
                      placeholder="How can we help?"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-pink-200 focus:ring-4 focus:ring-pink-50 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl font-bold shadow-xl shadow-pink-200 hover:shadow-2xl hover:shadow-pink-300 transition-all text-lg"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;