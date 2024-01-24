import { Link } from "react-router-dom";

function MovieCard({ movieProp }) {
	return (
		<div className="movieCard">
			<div className="movie-image">
				<img
					src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`}
					alt={movieProp.title}
				/>
			</div>
			<div className="movie-description">
				<h3>{movieProp.title}</h3>
				<Link to={`/movie/${movieProp.id}`} className="btn-details">
					Ver Detalhes
				</Link>
			</div>
		</div>
	);
}

export default MovieCard;
