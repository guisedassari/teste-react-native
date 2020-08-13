import axios from "axios";

export const apikey = "e1a8cf4ffe18e895caf4abe92fb20cc7";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
