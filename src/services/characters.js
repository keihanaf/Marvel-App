import { api, privateKey, publicKey } from "../configs/api.js";
import { generateMarvelAuth } from "../utils/generateMarvelAuth.js";

const { ts, hash } = generateMarvelAuth(publicKey, privateKey);

export const Characters = async () => {
  try {
    const response = await api.get(
      `/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    return response.data.data.results;
  } catch (error) {
    return { error };
  }
};

export const CharacterDetails = async (characterId) => {
  try {
    const url = `/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const response = await api.get(url);
    return response.data.data.results[0];
  } catch (error) {
    console.error("Error fetching character details:", error);
    return {
      error:
        error.message || "An error occurred while fetching character details",
    };
  }
};
