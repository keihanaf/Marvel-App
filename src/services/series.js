import {generateMarvelAuth} from "../utils/generateMarvelAuth.js";
import {api, privateKey, publicKey} from "../configs/api.js";


const { ts, hash } = generateMarvelAuth(publicKey, privateKey);

export const getSeries = async () => {
    try {
        const response = await api.get(`/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        return response.data.data.results;
    } catch (error) {
        return { error };
    }
}

export const getSeriesDetails = async (seriesId) => {
    try {
        const response = await api.get(`/series/${seriesId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        return response.data.data.results[0];
    } catch (error) {
        return { error };
    }
}