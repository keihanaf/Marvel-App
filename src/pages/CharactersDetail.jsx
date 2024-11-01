import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/modules/Loader.jsx";
import useCharacters from "../hooks/useCharacters.js";
import { toast } from 'react-toastify';
import { removeHashAndAfter } from "../utils/removeHashAndAfter.js";
import withLike from "../HOC/withLike.jsx";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function CharactersDetail({ likedCharacters, toggleLike }) {
    const { characterId } = useParams();
    const { getCharacterDetails } = useCharacters();
    const { characterDetail, isCharacterDetailLoading, error } = getCharacterDetails(characterId);
    const navigate = useNavigate();
    const [comic, setComic] = useState([]);
    const [series, setSeries] = useState([]);
    const [stories, setStories] = useState([]);
    const isLiked = likedCharacters.includes(characterId);

    useEffect(() => {
        if (characterDetail) {
            const characterComics = characterDetail?.comics?.items?.map((comic) =>
                comic.resourceURI && comic.name ? { resourceURI: comic.resourceURI, name: comic.name } : null
            ).filter(Boolean);
            const characterSeries = characterDetail?.series?.items?.map((series) =>
                series.resourceURI && series.name ? { resourceURI: series.resourceURI, name: series.name } : null
            ).filter(Boolean);
            const characterStories = characterDetail?.stories
                ?.items?.map((story) =>
                story.resourceURI && story.name ? { resourceURI: story.resourceURI, name: story.name } : null
            ).filter(Boolean);
            setComic(characterComics);
            setSeries(characterSeries);
            setStories(characterStories);
        }
    }, [characterDetail]);

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
        if (!characterId || isNaN(characterId)) {
            toast.error("Invalid character ID", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }, [characterId]);

    const handleToggleLike = () => {
        const characterDetails = {
            name: characterDetail.name,
            thumbnail: characterDetail.thumbnail,
            description: characterDetail.description
        };
        toggleLike(characterId, characterDetails, 'character');
    };

    if (isCharacterDetailLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader size={100} color="#121212" />
            </div>
        );
    }

    if (!characterDetail) {
        toast.info("Character not found", {
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
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl w-full max-w-4xl h-[90dvh] md:h-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-[30dvh] md:h-[600px] relative overflow-hidden">
                    <img
                        src={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`}
                        alt={characterDetail.name}
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
                                <FaHeart className="text-xl text-white" />
                            ) : (
                                <FaRegHeart className="text-xl text-white" />
                            )}
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col h-[60dvh] md:h-[600px]">
                    <div className="p-4 pb-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            {characterDetail.name}
                        </h1>
                    </div>
                    <div className="flex-1 overflow-y-auto px-4">
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                            {characterDetail.description || 'No description available.'}
                        </p>
                        <div className="mb-4">
                            <div className="bg-base-200 collapse w-full mb-4">
                                <input type="checkbox" className="peer"/>
                                <div
                                    className="collapse-title bg-gray-700 text-white text-sm sm:text-base peer-checked:bg-[#ED1D24] rounded-t-lg flex justify-between items-center">
                                    Comics List
                                    <FaChevronDown
                                        className="text-gray-300 transition-transform duration-300 peer-checked:rotate-180 transform"
                                    />
                                </div>
                                <div
                                    className="collapse-content bg-gray-800 text-white peer-checked:bg-gray-800 rounded-b-lg max-h-[25dvh] overflow-y-auto">
                                    <ul className="mt-2 text-sm sm:text-base">
                                        {comic?.map((item, index) => (
                                            <li key={index} className="mb-2 pl-2 border-l-2 border-[#ED1D24]">
                                                {removeHashAndAfter(item.name)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-base-200 collapse w-full mb-4">
                                <input type="checkbox" className="peer"/>
                                <div
                                    className="collapse-title bg-gray-700 text-white text-sm sm:text-base peer-checked:bg-[#ED1D24] rounded-t-lg flex justify-between items-center">
                                    Series List
                                    <FaChevronDown
                                        className="text-gray-300 transition-transform duration-300 peer-checked:rotate-180 transform"
                                    />
                                </div>
                                <div
                                    className="collapse-content bg-gray-800 text-white peer-checked:bg-gray-800 rounded-b-lg max-h-[25dvh] overflow-y-auto">
                                    <ul className="mt-2 text-sm sm:text-base">
                                        {series?.map((item, index) => (
                                            <li key={index} className="mb-2 pl-2 border-l-2 border-[#ED1D24]">
                                                {removeHashAndAfter(item.name)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-base-200 collapse w-full">
                                <input type="checkbox" className="peer"/>
                                <div
                                    className="collapse-title bg-gray-700 text-white text-sm sm:text-base peer-checked:bg-[#ED1D24] rounded-t-lg flex justify-between items-center">
                                    Stories List
                                    <FaChevronDown
                                        className="text-gray-300 transition-transform duration-300 peer-checked:rotate-180 transform"
                                    />
                                </div>
                                <div
                                    className="collapse-content bg-gray-800 text-white peer-checked:bg-gray-800 rounded-b-lg max-h-[25dvh] overflow-y-auto">
                                    <ul className="mt-2 text-sm sm:text-base">
                                        {stories?.map((item, index) => (
                                            <li key={index} className="mb-2 pl-2 border-l-2 border-[#ED1D24]">
                                                {removeHashAndAfter(item.name)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
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
                            Back to Characters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withLike(CharactersDetail);
