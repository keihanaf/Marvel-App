import React from 'react';
import Loader from "../modules/Loader.jsx";
import {motion} from "framer-motion";
import {FaArrowRight} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {removeHashAndAfter} from "../../utils/removeHashAndAfter.js";
import useStories from "../../hooks/useStories.js";
import storye from "assets/story.jpeg";



function StoriesList() {
    const {stories, isStoriesLoading} = useStories()
    console.log(stories)
    const navigate = useNavigate();


    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };
    return (
        <div
            className="p-6 pt-0 mt-10 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>

            {isStoriesLoading ? (
                <div className="min-h-[400px] flex items-center justify-center">
                    <Loader size={50} color="white"/>
                </div>
            ) : (
                <>
                    <motion.button
                        className="group relative overflow-hidden bg-gray-800 hover:bg-gray-900 p-4 rounded-xl mb-4
                            flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
                        onClick={() => navigate("/stories")}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                    >
                        <span className="relative z-10 font-semibold text-white">More Stories</span>
                        <FaArrowRight
                            className="text-white group-hover:translate-x-1 transition-transform duration-300"/>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700">
                        </div>
                    </motion.button>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                    >
                        {stories?.slice(5, 10).map((story) => (
                            <motion.div key={story.id} variants={item}>
                                <Link to={`/stories/${story.id}`} className="block">
                                    <motion.div
                                        className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer
                                            transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={storye}
                                                alt={story.title}
                                                className="w-full h-48 object-cover transform transition-transform duration-500
                                                    group-hover:scale-110"
                                            />
                                            {/* Improved Overlay with View Details */}
                                            <div className="absolute inset-0 flex flex-col justify-end items-center pb-6
                                                bg-gradient-to-t from-black/80 via-black/50 to-transparent
                                                opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm
                                                    text-white text-sm font-medium
                                                    transform translate-y-4 group-hover:translate-y-0
                                                    transition-all duration-300 ease-out
                                                    border border-white/20">
                                                    View Details →
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h2 className="text-lg font-bold text-white truncate group-hover:text-red-400
                                                transition-colors duration-300">
                                                {removeHashAndAfter(story.title)}
                                            </h2>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </>
            )}
        </div>
    )
}

export default StoriesList