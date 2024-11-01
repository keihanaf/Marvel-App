import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useCharacters from '../hooks/useCharacters';
import useComics from '../hooks/useComics';
import useSeries from '../hooks/useSeries';
import useStories from '../hooks/useStories';
import Loader from '../components/modules/Loader.jsx';
import storye from "assets/story.jpeg";

const ITEMS_PER_PAGE = 1;

function ExplorePage() {
    const navigate = useNavigate();
    const { characters = [], isCharactersLoading } = useCharacters();
    const { comic = [], isComicLoading } = useComics();
    const { series = [], isSeriesLoading } = useSeries();
    const { stories = [], isStoriesLoading } = useStories();

    const isLoading = isCharactersLoading || isComicLoading || isSeriesLoading || isStoriesLoading;

    // Combine all items into a single array
    const allItems = [
        ...characters.map(item => ({ ...item, type: 'character' })),
        ...comic.map(item => ({ ...item, type: 'comic' })),
        ...series.map(item => ({ ...item, type: 'series' })),
        ...stories.map(item => ({ ...item, type: 'story' })),
    ];

    // Shuffle items randomly
    const shuffledItems = allItems.sort(() => Math.random() - 0.5);

    // Pagination state
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < shuffledItems.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader size={100} color="#121212" />
            </div>
        );
    }

    const currentItem = shuffledItems[currentIndex];

    return (
        <div className="p-4 bg-[#121212] min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">Explore All</h1>

            <div className="w-full max-w-md">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300"
                >
                    <img
                        src={currentItem.type === 'story' ? storye : `${currentItem.thumbnail.path}.${currentItem.thumbnail.extension}`}
                        alt={currentItem.title || currentItem.name}
                        className="w-full h-72 object-cover transition-opacity duration-300 hover:opacity-90"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-white mb-2">{currentItem.title || currentItem.name}</h3>
                        <button
                            onClick={() => {
                                if (currentItem.type === 'story') {
                                    navigate(`/stories/${currentItem.id}`);
                                } else if (currentItem.type === 'series') {
                                    navigate(`/series/${currentItem.id}`);
                                } else if (currentItem.type === 'comic') {
                                    navigate(`/comics/${currentItem.id}`);
                                } else if (currentItem.type === 'character') {
                                    navigate(`/characters/${currentItem.id}`);
                                }
                            }}
                            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            View Details
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="flex justify-between mt-6 w-full max-w-md">
                <motion.button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Previous
                </motion.button>
                <motion.button
                    onClick={handleNext}
                    disabled={currentIndex >= shuffledItems.length - 1}
                    className="bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Next
                </motion.button>
            </div>
        </div>
    );
}

export default ExplorePage;