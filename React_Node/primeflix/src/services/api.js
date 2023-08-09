import axios from "axios";
// URL Base: https://api.themoviedb.org/3/
// ULR da API: movie/now_playing?api_key=b8b4bd547d55142381b7bc08d04047ca&language=pt-BR

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
