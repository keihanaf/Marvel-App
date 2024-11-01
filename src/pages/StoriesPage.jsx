import React from 'react';
import Loader from "../components/modules/Loader.jsx";
import {useNavigate} from "react-router-dom";
import useStories from "../hooks/useStories.js";
import storye from "assets/story.jpeg";

function StoriesPage() {
    const {stories, isStoriesLoading} = useStories()
    const navigate = useNavigate();

    const handleClick = (story) => {
        console.log('Navigating to character:', story.id);
        navigate(`/stories/${story.id}`);
    }
    return (
        <div className="min-h-screen flex items-center justify-center p-10">
            {isStoriesLoading ? (
                <Loader size={100} color="#121212"/>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {stories?.map((story) => (
                        <div onClick={() => handleClick(story)} key={story.id}
                             className="bg-gray-800 hover:bg-[#ED1D24] rounded-lg overflow-hidden shadow-lg cursor-pointer">
                            <img
                                src={storye}
                                alt={story.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-white truncate">{story.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default StoriesPage;