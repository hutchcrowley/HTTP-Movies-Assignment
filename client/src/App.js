import React, { useState, useEffect } from "react";

import { AppContext } from "./contexts/AppContext";

import { Route, useHistory } from "react-router-dom";

import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import UpdateForm from "./Movies/UpdateForm";
import Movie from "./Movies/Movie";
import Updateform from "./Movies/UpdateForm";

import './index.css'

const App = () => {
  const [movieList, setMovieList] = useState(null);
  const [savedList, setSavedList] = useState(null);

  const history = useHistory();

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const getMovies = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList({ movies: res.data }))
      .catch(err => console.log(err.response));
  };

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovieList({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  const updateMovie = (id, editMovie) => {
    console.log('editMovie in the updateMovie function: ', editMovie)
    axios
      .put(`http://localhost:5000/api/movies/${id}`, editMovie)
      .then(res => {
        setMovieList({ ...movieList }, res.data);
      })
      .then(history.push("/"))
      .catch(err => console.log("Error: ", err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <AppContext.Provider
      value={
        (movieList,
        setMovieList,
        savedList,
        addToSavedList,
        getMovies,
        fetchMovie,
        updateMovie)
      }
    >
      {" "}
      <SavedList />
      <Route exact path="/" component={MovieList} />
<<<<<<< Updated upstream
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path="update-movie/:id" component={UpdateForm} />
    </>
=======
      <Route path="/movies/:id">
        <Movie />
      </Route>
      <Route path="/update-movie/:id">
        <Updateform />
      </Route>
    </AppContext.Provider>
>>>>>>> Stashed changes
  );
};

export default App;
