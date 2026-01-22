import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaSprayCan,
    FaSoap,
    FaShower,
    FaStar,
    FaShoppingCart,
    FaLeaf,
    FaCheckCircle,
    FaShieldAlt,
    FaHeart
} from 'react-icons/fa';
import './Home.css';
import FAQ from '../../component/FAQ/FAQ';
import { image } from 'framer-motion/client';
import { Link } from 'react-router';

function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const products = [
        {
            id: 1,
            name: 'Artisan Soap',
            icon: <FaSoap />,
            description: 'Handcrafted vegan soaps with peptides for luxurious skincare. The best choice for all hair types.',
            features: ['Vegan Formula', 'Peptide Enriched', 'All Hair Types', 'Natural Ingredients'],
            color: 'from-purple-500/50 to-pink-500/50',
            delay: 0.1,
            image: '/soap.avif',
        },
        {
            id: 2,
            name: 'Lice Banisher Shampoo',
            icon: <FaShower />,
            description: 'Effective lice & nit elimination with tea tree & peppermint oils. Safe for repeat use.',
            features: ['Effective Elimination', 'Safe for Repeat Use', 'All Hair Types', 'Essential Oils'],
            color: 'from-green-500/50 to-teal-500/50',
            delay: 0.2,
            image: '/lice.avif',
        },
        {
            id: 3,
            name: 'Nourishing Conditioner',
            icon: <FaSprayCan />,
            description: 'Complete your hair care routine with our nourishing conditioner for healthy, shiny hair.',
            features: ['Deep Nourishment', 'Hair Repair', 'Vegan Formula', 'All Hair Types'],
            color: 'from-orange-500/50 to-red-500/50',
            delay: 0.3,
            image: '/shampoo.avif',
        }
    ];

    const testimonials = [
        { name: 'Maria G.', text: 'The soaps are divine! My skin has never felt better.' },
        { name: 'John P.', text: 'Lice Banisher worked wonders for my kids. Natural and effective!' },
        { name: 'Sarah L.', text: 'Best shampoo I have ever used. My hair is so healthy now.' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

            {/* SEO Meta Tags */}
            <meta name="description" content="Discover our range of natural, handmade products crafted with care and sustainable ingredients." />
            <meta name="keywords" content="Encanto, Natural Products, Handmade Soap, Organic Shampoo, Lice Banishers, Eco-friendly Beauty" />
            <meta name="author" content="Mohimanul" />
            <meta name="robots" content="index, follow" />
            <title>Home - Encanto Scented</title>
            <meta property="og:title" content="Home - Encanto Scented" />
            <meta property="og:description" content="Discover our range of natural, handmade products crafted with care and sustainable ingredients." />
            <meta property="og:type" content="website" />

            {/* Modern Hero Section with Background Image */}
            <div className="relative min-h-dvh overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/product.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100/80 via-rose-400/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                </div>

                {/* Animated Floating Elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-2/3 left-1/3 w-28 h-28 bg-teal-500/20 rounded-full blur-3xl"></div>
                </motion.div>

                {/* Hero Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
                        {/* Left Column - Main Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="space-y-8"
                        >
                            {/* Logo/Brand */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                            >
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                    <FaLeaf className="text-white text-xl" />
                                </div>
                                <h1 className="max-md:text-xl text-3xl font-bold text-white tracking-wider">
                                    ENCANTO
                                </h1>
                                <span className="text-white/80 font-light">SCENTED</span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                            >
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Natural
                                </span>{' '}
                                Care,{' '}
                                <span className="relative">
                                    Extraordinary
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: isLoaded ? '100%' : 0 }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                                    />
                                </span>{' '}
                                Results
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isLoaded ? 1 : 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="text-xl text-gray-200 max-w-2xl leading-relaxed"
                            >
                                Premium artisanal products crafted with natural ingredients.
                                Experience the perfect blend of nature and science for your hair and skin.
                            </motion.p>

                            {/* Features Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                                transition={{ duration: 0.6, delay: 1.1 }}
                                className="grid grid-cols-2 gap-4 max-w-md"
                            >
                                <div className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-green-400 text-xl" />
                                    <span className="text-white">100% Natural</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaShieldAlt className="text-blue-400 text-xl" />
                                    <span className="text-white">Safe & Effective</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaHeart className="text-pink-400 text-xl" />
                                    <span className="text-white">Vegan Friendly</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaStar className="text-yellow-400 text-xl" />
                                    <span className="text-white">Premium Quality</span>
                                </div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                                transition={{ duration: 0.6, delay: 1.3 }}
                                className="flex flex-col sm:flex-row gap-4 pt-4"
                            >
                                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                                    <span className="relative z-10 flex items-center">
                                        <FaShoppingCart className="mr-3 text-lg" />
                                        Shop All Products
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>

                                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105">
                                    Learn More
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Product Highlights */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="relative block w-full h-96 lg:h-[500px]"
                        >
                            {/* Floating Product Cards */}
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: isLoaded ? 0 : 100, opacity: isLoaded ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 1, type: "spring" }}
                                className="absolute -top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-sm transform rotate-3"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
                                        <FaSprayCan className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Lice Banisher</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Effective elimination with natural essential oils</p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-semibold text-green-600">236 ml</span>
                                    <span className="text-gray-400">•</span>
                                    <span className="text-sm font-semibold text-purple-600">All Hair Types</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: isLoaded ? 0 : 100, opacity: isLoaded ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
                                className="absolute top-1/3 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-sm transform -rotate-2"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                                        <FaSoap className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Artisan Soap</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Vegan formula with peptides for ultimate care</p>
                                <div className="flex items-center space-x-2">
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">VEGAN</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">PEPTIDES</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: isLoaded ? 0 : 100, opacity: isLoaded ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 1.4, type: "spring" }}
                                className="absolute bottom-8 left-1/4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-sm transform rotate-1"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                                        <FaShower className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Nourishing</h3>
                                </div>
                                <p className="text-gray-600">Complete your natural care routine with our premium products</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isLoaded ? 1 : 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <div className="flex flex-col items-center space-y-2">
                            <span className="text-white/60 text-sm">Scroll to explore</span>
                            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-1 h-3 bg-white/60 rounded-full mt-2"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Each product is crafted with care, using only the finest natural ingredients
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                            transition={{ duration: 0.6, delay: product.delay }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group"
                            style={{right: '-100px', backgroundImage: `url(${product.image})`, backgroundSize: 'contain', backgroundPosition: 'right', repeat: 'no-repeat'}}
                        >
                            <div className={`bg-gradient-to-br ${product.color} p-1 rounded-2xl h-full`}>
                                <div className="bg-white/70 rounded-2xl p-8 h-full flex flex-col">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${product.color} text-white text-3xl mb-6 self-start`}>
                                        {product.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                                    <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>

                                    <div className="space-y-3 mb-8">
                                        {product.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <FaStar className="text-yellow-400 mr-3" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className={`mt-auto w-full py-3 bg-gradient-to-r ${product.color} text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
                            transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text-gray-700 text-lg italic mb-6">"{testimonial.text}"</p>
                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ />

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Experience ENCANTO?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Start your journey with natural, luxurious products today.
                    </p>
                    <button className="px-10 py-4 bg-white text-purple-600 font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <Link to="/product">Shop Now</Link>
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;