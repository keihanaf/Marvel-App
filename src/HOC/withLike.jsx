// withLike.js

import React, { useState, useEffect } from 'react';

function withLike(WrappedComponent) {
    return function LikeComponent(props) {
        const [likedComics, setLikedComics] = useState([]);
        const [likedCharacters, setLikedCharacters] = useState([]);
        const [likedSeries, setLikedSeries] = useState([]);
        const [likedStories, setLikedStories] = useState([]);
        const [likedItemsDetails, setLikedItemsDetails] = useState({});

        // Load liked items from localStorage when component mounts
        useEffect(() => {
            const storedComics = localStorage.getItem('likedComics');
            const storedCharacters = localStorage.getItem('likedCharacters');
            const storedSeries = localStorage.getItem('likedSeries');
            const storedStories = localStorage.getItem('likedStories');
            const storedDetails = localStorage.getItem('likedItemsDetails');
            if (storedComics) {
                setLikedComics(JSON.parse(storedComics));
            }
            if (storedCharacters) {
                setLikedCharacters(JSON.parse(storedCharacters));
            }
            if (storedSeries) {
                setLikedSeries(JSON.parse(storedSeries));
            }
            if (storedStories) {
                setLikedStories(JSON.parse(storedStories));
            }
            if (storedDetails) {
                setLikedItemsDetails(JSON.parse(storedDetails));
            }
        }, []);

        // Toggle like status and save to localStorage
        const toggleLike = (itemId, itemDetails = null, itemType) => {
            if (itemType === 'comic') {
                setLikedComics((prevLikedComics) => {
                    const updatedLikes = prevLikedComics.includes(itemId)
                        ? prevLikedComics.filter(id => id !== itemId)
                        : [...prevLikedComics, itemId];

                    localStorage.setItem('likedComics', JSON.stringify(updatedLikes));
                    return updatedLikes;
                });
            } else if (itemType === 'character') {
                setLikedCharacters((prevLikedCharacters) => {
                    const updatedLikes = prevLikedCharacters.includes(itemId)
                        ? prevLikedCharacters.filter(id => id !== itemId)
                        : [...prevLikedCharacters, itemId];

                    localStorage.setItem('likedCharacters', JSON.stringify(updatedLikes));
                    return updatedLikes;
                });
            } else if (itemType === 'series') {
                setLikedSeries((prevLikedSeries) => {
                    const updatedLikes = prevLikedSeries.includes(itemId)
                        ? prevLikedSeries.filter(id => id !== itemId)
                        : [...prevLikedSeries, itemId];

                    localStorage.setItem('likedSeries', JSON.stringify(updatedLikes));
                    return updatedLikes;
                });
            } else if (itemType === 'stories') {
                setLikedStories((prevLikedStories) => {
                    const updatedLikes = prevLikedStories.includes(itemId)
                        ? prevLikedStories.filter(id => id !== itemId)
                        : [...prevLikedStories, itemId];

                    localStorage.setItem('likedStories', JSON.stringify(updatedLikes));
                    return updatedLikes;
                });
            }

            if (itemDetails) {
                const newDetails = {
                    ...likedItemsDetails,
                    [itemId]: itemDetails
                };
                setLikedItemsDetails(newDetails);
                localStorage.setItem('likedItemsDetails', JSON.stringify(newDetails));
            }
        };

        return (
            <WrappedComponent
                {...props}
                likedComics={likedComics}
                likedCharacters={likedCharacters}
                likedSeries={likedSeries}
                likedStories={likedStories}
                likedItemsDetails={likedItemsDetails}
                toggleLike={toggleLike}
            />
        );
    };
}

export default withLike;
