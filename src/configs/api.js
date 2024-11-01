import axios from "axios";

export const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
export const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
export const api = axios.create({
  baseURL: import.meta.env.VITE_MARVEL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
