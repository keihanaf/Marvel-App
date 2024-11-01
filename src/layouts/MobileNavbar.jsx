import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiHomeFill, RiCompass3Line, RiSearchLine, RiHeartFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

function MobileNavbar() {
    const location = useLocation();
    const path = location.pathname;

    const navItems = [
        { path: '/', icon: RiHomeFill, label: 'Home' },
        { path: '/explore', icon: RiCompass3Line, label: 'Explore' },
        { path: '/search', icon: RiSearchLine, label: 'Search' },
        { path: '/favorites', icon: RiHeartFill, label: 'Favorites' }
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black py-2 px-4 border-t border-gray-800 backdrop-blur-lg bg-opacity-80">
            <nav className="flex justify-around items-center max-w-lg mx-auto">
                {navItems.map((item) => {
                    const isActive = path === item.path;
                    const Icon = item.icon;

                    return (
                        <Link 
                            key={item.path} 
                            to={item.path} 
                            className="group flex flex-col items-center w-1/4"
                        >
                            <motion.div 
                                className={`p-2 rounded-full transition-colors duration-300 ${
                                    isActive ? 'bg-[#ED1D24]' : 'hover:bg-gray-800'
                                }`}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon 
                                    size={24} 
                                    className={`${
                                        isActive 
                                            ? 'text-white' 
                                            : 'text-gray-400 group-hover:text-white'
                                    }`}
                                />
                            </motion.div>
                            <span 
                                className={`mt-1 text-xs ${
                                    isActive 
                                        ? 'text-white font-medium' 
                                        : 'text-gray-400 group-hover:text-white'
                                }`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

export default MobileNavbar; 