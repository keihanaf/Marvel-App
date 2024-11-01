import React from 'react';
import {useNavigate} from "react-router-dom";
import useComics from "../hooks/useComics.js";
import Loader from "../components/modules/Loader.jsx";

function ComicsPage() {
    const {comic, isComicLoading} = useComics()
    const navigate = useNavigate();

    const handleClick = (comics) => {
        console.log('Navigating to character:', comics.id);
        navigate(`/comics/${comics.id}`);
    }
    return (
        <div className="min-h-screen flex items-center justify-center p-10">
            {isComicLoading ? (
                <Loader size={100} color="#121212"/>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {comic?.map((comics) => (
                        <div onClick={() => handleClick(comics)} key={comics.id}
                             className="bg-gray-800 hover:bg-[#ED1D24] rounded-lg overflow-hidden shadow-lg cursor-pointer">
                            <img
                                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                                alt={comics.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-white truncate">{comics.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ComicsPage;