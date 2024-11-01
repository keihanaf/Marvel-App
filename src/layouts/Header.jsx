import React, {useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiHeartFill, RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import {Link, useLocation} from "react-router-dom";

function Header() {
    const [tabActive, setTabActive] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tabs = ['Characters', 'Comics', 'Series', 'Stories'];
    const location = useLocation();

    useEffect(() => {
        if (location.pathname) {
            const currentPath = location.pathname.slice(1);
            if (tabs.map(tab => tab.toLowerCase()).includes(currentPath.toLowerCase())) {
                setTabActive(currentPath.charAt(0).toUpperCase() + currentPath.slice(1));
            } else {
                setTabActive(null);
            }
        }
    }, [location, tabs]);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <>
            <header className="bg-[#121212] text-white p-4 shadow-md relative z-50 overflow-hidden">
                {/* Animated Background Effects */}
                <div className="absolute inset-0">
                    {/* Left Red Glow */}
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 
                        bg-gradient-to-r from-red-600/40 to-red-500/40 
                        rounded-full blur-3xl opacity-20 
                        animate-[pulse_3s_ease-in-out_infinite]">
                    </div>
                    
                    {/* Right Red Glow */}
                    <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-32 
                        bg-gradient-to-l from-red-600/40 to-red-500/40 
                        rounded-full blur-3xl opacity-20 
                        animate-[pulse_3s_ease-in-out_infinite_1.5s]">
                    </div>
                    
                    {/* Moving Light Beam */}
                    <div className="absolute top-0 left-0 w-full h-full 
                        bg-gradient-to-r from-transparent via-white/5 to-transparent 
                        translate-x-[-100%] animate-[shimmer_8s_infinite]">
                    </div>
                </div>

                <div className="max-w-7xl mx-auto flex justify-between items-center relative">
                    {/* Logo with Glow Effect */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        className="relative group"
                    >
                        <h1 className="text-2xl font-bold text-[#ED1D24] relative z-10 
                            transition-all duration-300 group-hover:text-red-400">
                            Marvel App
                        </h1>
                        <div className="absolute inset-0 bg-red-500/30 filter blur-xl 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 tabs tabs-bordered border-white">
                        {tabs.map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}
                            >
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    className={`transition duration-300 ${tabActive === item ? 'text-white border-b-2 border-[#ED1D24] inline-block pb-1' : 'text-gray-300 hover:text-white'}`}
                                    onClick={() => setTabActive(item)}
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Desktop Favorites Button */}
                    <div className="hidden md:flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/favorites"
                                className="group relative flex items-center justify-center space-x-2.5 
                                    bg-gradient-to-r from-[#ED1D24] to-[#C41E3A] 
                                    hover:from-[#FF1D24] hover:to-[#DC143C]
                                    text-white px-6 py-2.5 rounded-full 
                                    transition-all duration-300 ease-out
                                    shadow-md hover:shadow-lg
                                    overflow-hidden"
                            >
                                {/* Background Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                    translate-x-[-200%] group-hover:translate-x-[200%] 
                                    transition-transform duration-500 ease-out">
                                </div>

                                {/* Heart Icon with Subtle Animation */}
                                <div className="relative">
                                    <RiHeartFill 
                                        size={20} 
                                        className="transform group-hover:scale-105 
                                            transition-transform duration-300"
                                    />
                                    
                                    {/* Heart Glow */}
                                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-30 
                                        blur-md transition-opacity duration-300">
                                    </div>
                                </div>

                                {/* Text with Subtle Animation */}
                                <span className="relative text-sm font-medium tracking-wide
                                    transform group-hover:scale-102 
                                    transition-transform duration-300">
                                    Favorites
                                </span>

                                {/* Subtle Particles */}
                                <div className="absolute -right-1 top-1/2 -translate-y-1/2 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {[...Array(2)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-0.5 h-0.5 bg-red-200 rounded-full
                                                animate-[ping_1.5s_ease-in-out_infinite]"
                                            style={{
                                                animationDelay: `${i * 0.3}s`,
                                                transform: `rotate(${i * 45}deg) translateX(${5 + i * 2}px)`
                                            }}
                                        />
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-gray-800 rounded-full transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotate: isMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isMenuOpen ? <RiCloseFill size={24} /> : <RiMenu4Fill size={24} />}
                        </motion.div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden pt-20"
                    >
                        <div className="flex flex-col items-center p-4 space-y-6">
                            {tabs.map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className={`text-xl font-medium transition duration-300 ${
                                            tabActive === item 
                                                ? 'text-[#ED1D24]' 
                                                : 'text-gray-300 hover:text-white'
                                        }`}
                                        onClick={() => {
                                            setTabActive(item);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;
