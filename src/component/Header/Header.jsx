import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShoppingBag, HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '/logo.png'; // Adjust the path as necessary
import { Link } from 'react-router';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Change header style on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/product' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-2 ${isScrolled ? 'mt-2' : 'mt-0'
                }`}
        >
            <div className={`max-w-7xl mx-auto transition-all duration-500 ${isScrolled
                ? 'bg-white/20 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl px-6 py-1'
                : 'bg-transparent px-2 py-2 text-white/50'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/">
                                <img
                                    src={Logo}
                                    alt="Encanto Scented Logo"
                                    className="h-12 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.name}
                                    whileHover={{ y: -2 }}
                                    className={`${isScrolled ? 'text-gray-600' : 'text-white/70'} hover:text-pink-500 font-medium transition-colors`}
                                >
                                    <Link to={link.href}>
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-pink-400 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-pink-200 hover:bg-pink-500 transition-all"
                            >
                                <HiOutlineShoppingBag className="text-xl" />
                                <span>Shop Now</span>
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <HiOutlineShoppingBag className="text-2xl text-pink-500" />
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`${isScrolled ? 'text-gray-600 hover:text-pink-500 focus:outline-none' : 'text-white/70 hover:text-pink-500 focus:outline-none'}`}
                            >
                                {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/80 backdrop-blur-2xl border-b border-pink-50 overflow-hidden rounded-2xl mt-2 shadow-lg shadow-pink-100"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-lg"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="w-full mt-4 bg-pink-400 text-white py-3 rounded-xl font-bold">
                                Check Cart
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;