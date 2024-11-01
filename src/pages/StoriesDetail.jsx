import React, {useEffect} from 'react';
import {FaHeart, FaRegHeart, FaUser} from "react-icons/fa";
import {removeHashAndAfter} from "../utils/removeHashAndAfter.js";
import {convertToEnglishDate} from "../utils/convertToEnglishDate.js";
import {toast} from "react-toastify";
import Loader from "../components/modules/Loader.jsx";
import {useNavigate, useParams} from "react-router-dom";
import useStories from "../hooks/useStories.js";
import storye from "assets/story.jpeg";
import withLike from "../HOC/withLike.jsx";

function StoriesDetail({ likedStories, toggleLike }) {
    const {storyId} = useParams();
    const {storyDetails} = useStories()
    const {story, isStoryLoading, error} = storyDetails(storyId);
    const navigate = useNavigate();
    const isLiked = likedStories.includes(storyId);


    useEffect(() => {
        if (error) {
            toast.error(`Error: ${error}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }, [error]);

    useEffect(() => {
        if (!storyId || isNaN(storyId)) {
            toast.error("Invalid story ID", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }, [storyId]);

    const handleToggleLike = () => {

        const storiesDetails = {
            name: story.name,
            title: story.title,
            thumbnail: story.thumbnail,
        };
        toggleLike(storyId, storiesDetails, 'stories');
    };

    if (isStoryLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader size={100} color="#121212" />
            </div>
        );
    }

    if (!story) {
        toast.info("Story not found", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        return null;
    }
    return (
        <div className="h-[100dvh] flex items-center justify-center bg-[#121212] p-2 sm:p-4 md:p-10">
            <div
                className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl w-full max-w-4xl h-[90dvh] md:h-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-[30dvh] md:h-[600px] relative overflow-hidden">
                    <img
                        src={storye}
                        alt={story.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="md:hidden absolute top-4 right-4">
                        <button
                            onClick={handleToggleLike}
                            className={`rounded-full p-3 shadow-lg ${
                                isLiked
                                    ? 'bg-red-500'
                                    : 'bg-gray-800 bg-opacity-70'
                            }`}
                        >
                            {isLiked ? (
                                <FaHeart className="text-xl text-white"/>
                            ) : (
                                <FaRegHeart className="text-xl text-white"/>
                            )}
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col h-[60dvh] md:h-[600px]">
                    <div className="p-4 pb-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            {removeHashAndAfter(story.title)}
                        </h1>
                    </div>
                    <div className="flex-1 overflow-y-auto px-4">
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 font-semibold border-b-2 border-blue-500 pb-2">
                            {story.format}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {story.creators.items.map((item, index) => (
                                <li key={item.id || index}
                                    className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                    <h3 className="text-lg font-bold text-white flex items-center">
                                        <FaUser className="mr-2 text-blue-400"/>
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-400">Role: {item.role}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
                            <p className="text-gray-300">
                                Last Modified:
                                <span className="font-semibold text-blue-400">
                                    {convertToEnglishDate(story.modified)}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="p-4 pt-2">
                        <div className="hidden md:block mb-4">
                            <button
                                onClick={handleToggleLike}
                                className={`group relative overflow-hidden px-6 py-2 rounded-full 
                                    ${isLiked
                                    ? 'bg-gradient-to-r from-red-500 to-pink-500'
                                    : 'bg-gradient-to-r from-gray-700 to-gray-800'
                                } w-48 mx-auto`}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {isLiked ? (
                                        <FaHeart className="text-lg text-white"/>
                                    ) : (
                                        <FaRegHeart className="text-lg text-white"/>
                                    )}
                                    <span className="font-medium text-sm text-white">
                                        {isLiked ? 'Favorited' : 'Add Favorite'}
                                    </span>
                                </div>
                            </button>
                        </div>
                        <button
                            onClick={() => navigate(-1)}
                            className="w-full bg-[#ED1D24] text-white font-bold py-2.5 rounded-full text-sm sm:text-base"
                        >
                            Back to Stories
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withLike(StoriesDetail);