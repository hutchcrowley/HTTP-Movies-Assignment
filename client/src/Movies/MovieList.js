import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

import { AppContext } from "../contexts/AppContext";


const MovieList = () => {
  const { movieList } = useContext(AppContext);
  console.log(AppContext)
  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}

export default MovieList