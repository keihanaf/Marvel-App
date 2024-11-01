import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchAndFilter from "../components/templates/SearchAndFilter.jsx";
import useCharacters from "../hooks/useCharacters.js";
import useComics from "../hooks/useComics.js";
import useSeries from "../hooks/useSeries.js";
import useStories from "../hooks/useStories.js";
import ListItem from "../components/templates/ListItem.jsx";

function SearchPage() {
    const { characters, isCharactersLoading } = useCharacters();
    const { comic, isComicsLoading } = useComics();
    const { series, isSeriesLoading } = useSeries();
    const { stories, isStoriesLoading } = useStories();
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('search') || '');
    const [filter, setFilter] = useState(searchParams.get('filter') || 'characters');
    const [display, setDisplay] = useState([]);

    const getData = (filterType) => {
        switch(filterType) {
            case 'characters': return characters || [];
            case 'comics': return comic || [];
            case 'series': return series || [];
            case 'stories': return stories || [];
            default: return [];
        }
    }

    const searchHandler = (searchTerm, filterType) => {
        const data = getData(filterType);
        if (searchTerm) {
            const filteredData = data.filter((item) => 
                (item.name || item.title || '').toLowerCase().includes(searchTerm.toLowerCase())
            );
            setDisplay(filteredData);
            setSearchParams({ search: searchTerm, filter: filterType });
            
            if (filteredData.length === 0) {
                toast.error(`No ${filterType} found for "${searchTerm}"`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: 'custom-toast',
                    bodyClassName: "custom-toast-body",
                    progressClassName: "custom-progress-bar"
                });
            }
        } else {
            setDisplay([]);
            setSearchParams({ filter: filterType });
        }
    }

    useEffect(() => {
        searchHandler(search, filter);
    }, [characters, comic, series, stories]);

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <SearchAndFilter 
                search={search} 
                setSearch={setSearch} 
                filter={filter}
                setFilter={setFilter}
                searchHandler={searchHandler}
            />
            <ListItem search={search} display={display} />
        </div>
    )
}

export default SearchPage;
