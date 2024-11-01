import React from 'react';
import {Route, Routes} from "react-router-dom";

import Layout from "layouts/Layout";

import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import CharactersPage from "pages/CharactersPage.jsx";
import ComicsPage from "pages/ComicsPage.jsx";
import SeriesPage from "pages/SeriesPage.jsx";
import StoriesPage from "pages/StoriesPage.jsx";
import FavoritesPage from "pages/FavoritesPage.jsx";
import SearchPage from "pages/SearchPage.jsx";
import ExplorePage from "pages/ExplorePage.jsx";
import CharactersDetail from "../pages/CharactersDetail.jsx";
import ComicsDetail from "../pages/ComicsDetail.jsx";
import SeriesDetail from "../pages/SeriesDetail.jsx";
import StoriesDetail from "../pages/StoriesDetail.jsx";


function Router() {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/characters" element={<CharactersPage/>} />
                <Route path="/characters/:characterId" element={<CharactersDetail/>} />
                <Route path="/comics" element={<ComicsPage/>} />
                <Route path="/comics/:comicId" element={<ComicsDetail/>} />
                <Route path="/series" element={<SeriesPage/>} />
                <Route path="/series/:seriesId" element={<SeriesDetail/>} />
                <Route path="/stories" element={<StoriesPage/>} />
                <Route path="/stories/:storyId" element={<StoriesDetail/>} />
                <Route path="/favorites" element={<FavoritesPage/>} />
                <Route path="/search" element={<SearchPage/>} />
                <Route path="/explore" element={<ExplorePage/>} />
            </Route>
        </Routes>
    )
}

export default Router
