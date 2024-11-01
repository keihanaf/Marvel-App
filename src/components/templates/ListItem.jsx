import React from 'react';
import { Link } from "react-router-dom";
import { removeHashAndAfter } from 'src/utils/removeHashAndAfter';
import storye from "assets/story.jpeg";

function ListItem({ search, display }) {
    return (
        <div className="p-10">
            {search && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
                    {display.map((item) => (
                        <Link to={item.type === 'character' ? `/characters/${item.id}` : `/comics/${item.id}`} key={item.id}>
                            <div className="bg-gray-800 hover:bg-[#ED1D24] cursor-pointer rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={item.type === 'story' 
                                        ? storye
                                        : `${item.thumbnail?.path || ''}.${item.thumbnail?.extension || ''}`}
                                    alt={item.name || item.title || ''}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-bold text-white truncate">{item.name || removeHashAndAfter(item.title) || ''}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ListItem;