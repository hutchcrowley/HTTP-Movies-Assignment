import React, { useEffect, useState, useContext } from "react";

import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

import MovieCard from "./MovieCard";

const Movie = () => {
  const { fetchMovie, addToSavedList, updateMovie } = useContext(AppContext);
  const [movie, setMovie] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetchMovie(id);
  }, [fetchMovie, id]);

  const saveMovie = (id, movie) => {
    setMovie(id);
    console.log(movie);
    addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  } else {
    return (
      <div className="save-wrapper">
        <MovieCard movie={movie} />
        <button className="save-button" onClick={saveMovie}>
          Save
        </button>
        <button classNam="update-button" onClick={updateMovie}>
          Update
        </button>
      </div>
    );
  }
};

export default Movie;
