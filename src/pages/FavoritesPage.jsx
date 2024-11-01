import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import withLike from '../HOC/withLike';
import { FaUserAstronaut, FaBook, FaTv, FaBookOpen } from 'react-icons/fa';
import storye from "assets/story.jpeg";

function FavoritesPage({ likedComics, likedCharacters, likedSeries, likedStories, likedItemsDetails, toggleLike }) {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('characters');

    const tabs = [
        { id: 'characters', name: 'Characters', icon: <FaUserAstronaut /> },
        { id: 'comics', name: 'Comics', icon: <FaBook /> },
        { id: 'series', name: 'Series', icon: <FaTv /> },
        { id: 'stories', name: 'Stories', icon: <FaBookOpen /> },
    ];

    return (
        <div className="min-h-screen p-2 sm:p-4 md:p-8 bg-[#121212]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center px-2">
                My <span className="text-[#ED1D24]">Marvel</span> Collection
            </h1>
            
            {/* Tabs - Better Mobile Optimization */}
            <div className="overflow-x-auto scrollbar-none mb-4 sm:mb-6 md:mb-8">
                <div className="flex justify-center px-2">
                    <div className="inline-flex gap-1 sm:gap-1.5 md:gap-2 bg-gray-800 p-0.5 sm:p-1 md:p-1.5 rounded-full">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-center gap-1 sm:gap-1.5 
                                    px-9 sm:px-4 md:px-5
                                    py-1 sm:py-1.5 md:py-2
                                    rounded-full
                                    transition-all duration-300 
                                    text-[10px] sm:text-xs md:text-sm
                                    w-[65px] sm:w-[85px] md:w-[100px] 
                                    ${activeTab === tab.id 
                                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-sm transform scale-[1.01]' 
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }
                                    group relative overflow-hidden`}
                            >
                                {/* Shine effect - only on larger screens */}
                                {activeTab === tab.id && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                        translate-x-[-200%] animate-[shine_2s_ease-in-out_infinite] hidden sm:block">
                                    </div>
                                )}
                                
                                <span className={`text-xs sm:text-sm md:text-base transition-transform duration-300
                                    ${activeTab === tab.id ? 'scale-105' : 'group-hover:scale-105'}`}>
                                    {tab.icon}
                                </span>
                                <span className="font-medium">{tab.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content - Better Mobile Optimization */}
            {activeTab === 'characters' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8 px-2">
                    {likedCharacters.map((id) => {
                        const character = likedItemsDetails[id];
                        if (!character) return null;

                        return (
                            <div key={id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl flex flex-col h-[350px] sm:h-[400px] md:h-[500px] transform transition-transform duration-300 hover:scale-105">
                                <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
                                    <img
                                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                        alt={character.name}
                                        className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                                </div>
                                <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 line-clamp-1">
                                        {character.name}
                                    </h2>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900 pr-2">
                                        {character.description || 'No description available.'}
                                    </p>
                                    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center mt-auto">
                                        <button
                                            onClick={() => navigate(`/characters/${id}`)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                                        >
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => toggleLike(id, null, 'character')}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Content - Better Mobile Optimization */}
            {activeTab === 'comics' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8 px-2">
                    {likedComics.map((id) => {
                        const comic = likedItemsDetails[id];
                        if (!comic) return null;

                        return (
                            <div key={id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl flex flex-col h-[350px] sm:h-[400px] md:h-[500px] transform transition-transform duration-300 hover:scale-105">
                                <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
                                    <img
                                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                        alt={comic.title}
                                        className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                                </div>
                                <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 line-clamp-1">
                                        {comic.title}
                                    </h2>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900 pr-2">
                                        {comic.text || 'No description available.'}
                                    </p>
                                    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center mt-auto">
                                        <button
                                            onClick={() => navigate(`/comics/${id}`)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                                        >
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => toggleLike(id, null, 'comic')}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Content - Better Mobile Optimization */}
            {activeTab === 'series' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8 px-2">
                    {likedSeries.map((id) => {
                        const series = likedItemsDetails[id];
                        if (!series || !series.thumbnail) return null;

                        return (
                            <div key={id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl flex flex-col h-[350px] sm:h-[400px] md:h-[500px] transform transition-transform duration-300 hover:scale-105">
                                <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
                                    <img
                                        src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                                        alt={series.title}
                                        className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                                </div>
                                <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 line-clamp-1">
                                        {series.title}
                                    </h2>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900 pr-2">
                                        {series.description || 'No description available.'}
                                    </p>
                                    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center mt-auto">
                                        <button
                                            onClick={() => navigate(`/series/${id}`)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                                        >
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => toggleLike(id, null, 'series')}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Content - Better Mobile Optimization */}
            {activeTab === 'stories' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8 px-2">
                    {likedStories.map((id) => {
                        const story = likedItemsDetails[id];
                        if (!story) return null;

                        return (
                            <div key={id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl flex flex-col h-[350px] sm:h-[400px] md:h-[500px] transform transition-transform duration-300 hover:scale-105">
                                <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
                                    <img
                                        src={storye}
                                        alt={story.title}
                                        className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                                </div>
                                <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 line-clamp-1">
                                        {story.title}
                                    </h2>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900 pr-2">
                                        {story.text || 'No description available.'}
                                    </p>
                                    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center mt-auto">
                                        <button
                                            onClick={() => navigate(`/stories/${id}`)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                                        >
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => toggleLike(id, null, 'stories')}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105 flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default withLike(FavoritesPage);
