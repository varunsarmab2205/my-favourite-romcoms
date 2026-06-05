import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

function Movies() {
  return (
    <>
      <h1>Favourite Movies</h1>

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
}

export default Movies;