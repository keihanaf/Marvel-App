import React from 'react';

function SearchAndFilter({ search, setSearch, filter, setFilter, searchHandler }) {
    return (
        <div className="flex items-end gap-4 p-4 w-full max-w-4xl">
            <div className="flex-grow">
                <label className="form-control w-full bg-[#121212] p-2 rounded">
                    <div className="label">
                        <span className="label-text text-white">Search {filter}</span>
                    </div>
                    <input 
                        type="text"
                        value={search}
                        placeholder={`Type here to search ${filter}`}
                        className="input input-bordered input-error w-full text-white bg-[#121212] placeholder-gray-400"
                        onChange={(e) => {
                            const newSearch = e.target.value.toLowerCase().trim();
                            setSearch(newSearch);
                            searchHandler(newSearch, filter);
                        }}
                    />
                </label>
            </div>
            <div className="w-1/4 min-w-[150px]">
                <label className="form-control w-full bg-[#121212] p-2 rounded">
                    <div className="label">
                        <span className="label-text text-white">Filter by</span>
                    </div>
                    <select 
                        className="select select-error w-full text-white bg-[#121212]"
                        value={filter}
                        onChange={(e) => {
                            const newFilter = e.target.value;
                            setFilter(newFilter);
                            searchHandler(search, newFilter);
                        }}
                    >
                        <option value="characters">Characters</option>
                        <option value="comics">Comics</option>
                        <option value="series">Series</option>
                        <option value="stories">Stories</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

export default SearchAndFilter;
