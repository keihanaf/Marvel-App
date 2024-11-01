import React from 'react';
import avengersImages from 'assets/Avengers.png';
import { motion } from 'framer-motion';

function AvengersImage() {
    return (
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 mt-8 sm:mt-12 md:mt-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(236,_29,_36,_0.7)] group cursor-pointer"
            >
                {/* Ambient light effect */}
                <div className="absolute -inset-x-1/2 -inset-y-1/2 w-[200%] h-[200%] bg-gradient-radial from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Main gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-500/20 to-pink-500/30 mix-blend-overlay" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%] pointer-events-none" />
                
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <motion.img 
                        src={avengersImages} 
                        alt="Avengers Team"
                        className="w-full h-auto object-cover transform brightness-105 contrast-[1.02]"
                        loading="lazy"
                        initial={{ scale: 1.1, filter: "blur(5px)" }}
                        animate={{ scale: 1, filter: "blur(0px)" }}
                        transition={{ 
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    />
                </motion.div>

                {/* Bottom gradient shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>
        </div>
    );
}
export default AvengersImage