import React from 'react';
import { motion } from 'framer-motion';
import { HiHome, HiArrowLeft } from 'react-icons/hi';
import { GiBubbles } from 'react-icons/gi';

function NotFound() {
    return (
        <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6 overflow-hidden relative">

            {/* SEO Meta Tags */}
            <meta name="description" content="The page you are looking for doesn't exist or has been moved." />
            <meta name="keywords" content="Encanto, 404, Not Found, Page Not Found" />
            <meta name="author" content="Mohimanul" />
            <meta name="robots" content="noindex, nofollow" />
            <title>Page Not Found - Encanto Scented</title>
            <meta property="og:title" content="Page Not Found - Encanto Scented" />
            <meta property="og:description" content="The page you are looking for doesn't exist or has been moved." />
            <meta property="og:type" content="website" />

            {/* Background Decorative Bubbles */}
            <motion.div
                animate={{
                    y: [0, -100, 0],
                    x: [0, 50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-20 left-10 text-pink-200 opacity-50 text-9xl"
            >
                <GiBubbles />
            </motion.div>

            <div className="max-w-md w-full text-center relative z-10">
                {/* Animated 404 Number */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative inline-block"
                >
                    <h1 className="text-[12rem] font-black text-pink-200 leading-none">
                        404
                    </h1>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <span className="text-4xl md:text-5xl font-bold text-pink-500 drop-shadow-sm">
                            Oops!
                        </span>
                    </motion.div>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        The scent has faded away...
                    </h2>
                    <p className="text-gray-500 mb-10">
                        The page you are looking for doesn't exist or has been moved.
                        Don't worry, our products are still here!
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-pink-200 text-pink-500 font-bold hover:bg-pink-100 transition-all"
                    >
                        <HiArrowLeft /> Go Back
                    </button>

                    <a
                        href="/"
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-pink-400 text-white font-bold shadow-lg shadow-pink-200 hover:bg-pink-500 transition-all"
                    >
                        <HiHome /> Home Page
                    </a>
                </motion.div>
            </div>

            {/* Another Decorative Bubble */}
            <motion.div
                animate={{
                    y: [0, 80, 0],
                    x: [0, -30, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 right-10 text-pink-100 text-8xl"
            >
                <GiBubbles />
            </motion.div>
        </div>
    );
};

export default NotFound;