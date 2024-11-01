import React from 'react';
import useCharacters from "hooks/useCharacters.js";
import Loader from "../components/modules/Loader.jsx";
import {useNavigate} from "react-router-dom";

function CharactersPage() {
    const {characters, isCharactersLoading} = useCharacters();
    const navigate = useNavigate();

    const handleClick = (character) => {
        console.log('Navigating to character:', character.id);
        navigate(`/characters/${character.id}`);
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-10">
            {isCharactersLoading ? (
                <Loader size={100} color="#121212" />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {characters?.map((character) => (
                        <div onClick={() => handleClick(character)} key={character.id} className="bg-gray-800 hover:bg-[#ED1D24] rounded-lg overflow-hidden shadow-lg cursor-pointer">
                            <img
                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt={character.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-white truncate">{character.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CharactersPage;
