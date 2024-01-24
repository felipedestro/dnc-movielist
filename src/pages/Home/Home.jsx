import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

function Home({ searchValueProp }) {
	const [movies, setMovies] = useState([]);

	//Função que buscar o filmes populares
	async function getMovies() {
		const {
			data: { results },
		} = await MovieService.getMovies();

		setMovies(results);
	}

	//Função que faz a busca de filmes conforme for digial no campo de pesquisa
	async function getMoviesSearch(movieString) {
		const {
			data: { results },
		} = await MovieService.searchMovies(movieString);

		setMovies(results);
	}

	useEffect(() => {
		getMovies();
	}, []);

	useEffect(() => {
		if (searchValueProp) {
			getMoviesSearch(searchValueProp);
		}
		if (searchValueProp === "") {
			getMovies();
		}
	}, [searchValueProp]);

	return (
		<section className="home">
			{movies.map((movie) => (
				<div key={movie.id}>
					<MovieCard movieProp={movie} />
				</div>
			))}
		</section>
	);
}

export default Home;
