import { useParams } from "react-router-dom";
import { movies } from "../data/movies";

function MovieInfo() {
  const { id } = useParams();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div className="details">
      <img
        src={movie.image}
        alt={movie.name}
      />

      <h1>{movie.name}</h1>

      <p>{movie.description}</p>

      <h3>Genre</h3>
      <p>{movie.genre}</p>

      <h3>Year</h3>
      <p>{movie.year}</p>

      <h3>Rating</h3>
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieInfo;