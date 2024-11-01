import React from 'react';
import Loader from "../components/modules/Loader.jsx";
import {useNavigate} from "react-router-dom";
import useSeries from "../hooks/useSeries.js";

function SeriesPage() {
    const {series, isSeriesLoading} = useSeries()
    const navigate = useNavigate();

    const handleClick = (serie) => {
        console.log('Navigating to character:', serie.id);
        navigate(`/series/${serie.id}`);
    }
    return (
        <div className="min-h-screen flex items-center justify-center p-10">
            {isSeriesLoading ? (
                <Loader size={100} color="#121212"/>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {series?.map((serie) => (
                        <div onClick={() => handleClick(serie)} key={serie.id}
                             className="bg-gray-800 hover:bg-[#ED1D24] rounded-lg overflow-hidden shadow-lg cursor-pointer">
                            <img
                                src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                                alt={serie.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-white truncate">{serie.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SeriesPage;