import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiHomeFill, RiCompass3Line, RiSearchLine } from 'react-icons/ri';
import { GiSpiderMask } from 'react-icons/gi';
import { motion } from 'framer-motion';

function Slider() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div 
            className="hidden md:flex bg-black h-screen transition-all duration-300 ease-in-out flex-col items-center ${isExpanded ? 'w-40' : 'w-16'}"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            initial={{ width: 64 }}
            animate={{ width: isExpanded ? 160 : 64 }}
            transition={{ duration: 0.3 }}
        >
            <div className="mt-6 mb-10 group">
                <GiSpiderMask 
                    size={50}
                    className="text-[#ED1D24] transition-all duration-300 transform group-hover:scale-110 group-hover:animate-spin-slow" 
                />
            </div>
            <nav className="flex-1 flex flex-col items-center">
                <div className="mt-20 space-y-12">
                    <Link to="/" className="group flex flex-col items-center">
                        <motion.div 
                            className="p-3 rounded-full group-hover:bg-[#ED1D24] transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <RiHomeFill size={24} className="text-gray-400 group-hover:text-white" />
                        </motion.div>
                        {isExpanded && (
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="mt-2 text-xs text-gray-400 group-hover:text-white"
                            >
                                Home
                            </motion.span>
                        )}
                    </Link>
                    <Link to="/explore" className="group flex flex-col items-center">
                        <motion.div 
                            className="p-3 rounded-full group-hover:bg-[#ED1D24] transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <RiCompass3Line size={24} className="text-gray-400 group-hover:text-white" />
                        </motion.div>
                        {isExpanded && (
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="mt-2 text-xs text-gray-400 group-hover:text-white"
                            >
                                Explore
                            </motion.span>
                        )}
                    </Link>
                    <Link to="/search" className="group flex flex-col items-center">
                        <motion.div 
                            className="p-3 rounded-full group-hover:bg-[#ED1D24] transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <RiSearchLine size={24} className="text-gray-400 group-hover:text-white" />
                        </motion.div>
                        {isExpanded && (
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="mt-2 text-xs text-gray-400 group-hover:text-white"
                            >
                                Search
                            </motion.span>
                        )}
                    </Link>
                </div>
            </nav>
        </motion.div>
    )
}

export default Slider;
