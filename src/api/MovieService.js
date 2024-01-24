import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "5b7417cf5decc84a83b645b6ac1c5483";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
	static getMovies() {
		return axios(withBaseUrl("movie/popular"));
	}

	static getMoviesDetails(id) {
		return axios(withBaseUrl(`movie/${id}`));
	}

	static searchMovies(movie) {
		return axios(withBaseUrl("search/movie") + `&query=${movie}`);
	}
}
