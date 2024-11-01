import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiSpiderMask } from "react-icons/gi";

function NotFoundPage() {
    return (
        <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-white p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="mb-8"
            >
                <GiSpiderMask className="text-[#ED1D24] w-64 h-64 animate-spin-slow" />
            </motion.div>
            <motion.h1
                className="text-6xl font-bold mb-4 text-[#ED1D24]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                404
            </motion.h1>
            <motion.p
                className="text-2xl mb-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                Oops! Looks like this page got snapped out of existence.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <Link
                    to="/"
                    className="bg-gradient-to-r from-[#ED1D24] to-[#FF4D4D] hover:from-[#D11D24] hover:to-[#FF3333] text-white px-6 py-3 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl"
                >
                    Return to Safety
                </Link>
            </motion.div>
        </div>
    );
}

export default NotFoundPage;
