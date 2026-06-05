import { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard from "../components/MovieCard";

function Movies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await api.get("/movies");

      setMovies(response.data);

    } catch (error) {
      console.log(error);
    }
  }

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