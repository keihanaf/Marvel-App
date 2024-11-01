import React from 'react';
import { GiSpiderMask } from 'react-icons/gi';
import { motion } from 'framer-motion';

function Loader({ size = 34, color = "white" }) {
    const isWhite = color === "white";
    
    return (
        <div className="relative flex items-center justify-center">
            {/* Pulsing Background Circle */}
            <motion.div
                className={`absolute rounded-full ${isWhite ? 'bg-white/20' : 'bg-red-500/20'}`}
                style={{ width: size * 2, height: size * 2 }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Spider Web Lines */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${isWhite ? 'bg-white/30' : 'bg-red-500/30'}`}
                    style={{
                        width: 2,
                        height: size,
                        transformOrigin: '50% 100%',
                        rotate: `${i * 45}deg`,
                    }}
                    animate={{
                        scaleY: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Main Spider Mask Icon */}
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <GiSpiderMask 
                    size={size} 
                    className={`${isWhite ? 'text-white' : 'text-red-600'} drop-shadow-lg`}
                />
            </motion.div>

            {/* Orbiting Particles */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className={`absolute rounded-full ${isWhite ? 'bg-white' : 'bg-red-500'}`}
                    style={{
                        width: 4,
                        height: 4,
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0.3, 0.7],
                        x: Math.cos(i * (Math.PI * 2) / 3) * size,
                        y: Math.sin(i * (Math.PI * 2) / 3) * size,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
}

export default Loader;