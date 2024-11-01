import {generateMarvelAuth} from "../utils/generateMarvelAuth.js";
import {api, privateKey, publicKey} from "../configs/api.js";


const { ts, hash } = generateMarvelAuth(publicKey, privateKey);

export const getStories = async () => {
    try {
        const response = await api.get(`/stories?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        return response.data.data.results;
    } catch (error) {
        return { error };
    }
}

export const getStoriesDetails = async (storyId) => {
    try {
        const response = await api.get(`/stories/${storyId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        return response.data.data.results[0];
    } catch (error) {
        return { error };
    }
}