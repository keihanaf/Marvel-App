import { api, privateKey, publicKey } from "../configs/api.js";
import { generateMarvelAuth } from "../utils/generateMarvelAuth.js";

const { ts, hash } = generateMarvelAuth(publicKey, privateKey);

export const comics = async () => {
    try {
        const response = await api.get(`/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        return response.data.data.results;
    } catch (error) {
        return { error };
    }
}

export const comicsDetails = async (comicId) => {
    try {
        const response = await api.get(`/comics/${comicId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        return response.data.data.results[0];
    } catch (error) {
        return { error };
    }
}