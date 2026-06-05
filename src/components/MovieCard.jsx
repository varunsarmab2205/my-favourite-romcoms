import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.name} />

      <h3>{movie.name}</h3>

      <p>{movie.genre}</p>

      <p>⭐ {movie.rating}</p>

      <Link to={`/movies/${movie.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;