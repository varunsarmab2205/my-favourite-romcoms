import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function MovieInfo() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    try {

      const response =
        await api.get(`/movies/${id}`);

      setMovie(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  if (!movie) {
    return <h2>Loading...</h2>;
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
      <p>{movie.rating}</p>

    </div>
  );
}

export default MovieInfo;