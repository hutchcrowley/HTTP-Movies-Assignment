<<<<<<< Updated upstream
import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

const UpdateForm = props => {
    
    console.log("Props in update form: ", props);
    
    const updateId = Number(props.match.params.id);
    
    console.log("ID: ", updateId);
    
    const [newMovie, setNewMovie] = useState();
    
    const updateMovie = updateId => {
        axios
        .put(`http://localhost:5000/movies/${updateId}`, newMovie)
        .then(res => {
            console.log("Request returned from API PUT request: ", res.data);
            setNewMovie(res.data);
        })
        .catch(err => {
            console.log("ERROR: data not sent to API via PUT: ", err);
        });
    };
    
    const handleChange = e => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        });
        console.log(newMovie);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        let history = useHistory();
        updateMovie(newMovie);
        history.push("/");
  };

  return (
    <div classNme="update-form">
      <h1>Edit Movie</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            className="title-input"
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Title"
          />
        </label>
        <label htmlFor="director">
          <input
            className="director-input"
            type="text"
            name="director"
            onChange={handleChange}
            placeholder="Director"
          />
        </label>
        <label htmlFor="metascore">
          <input
            className="metascore-input"
            type="text"
            name="metascore"
            onChange={handleChange}
            placeholder="Metascore"
          />
        </label>
        <label htmlFor="stars">
          <input
            className="stars-input"
            type="text"
            name="stars"
            onChange={handleChange}
            placeholder="stars"
          />
        </label>

       <input className="button update-button" type="submit" >Submit</input>
=======
import React, { useEffect, useState, useContext } from "react";

import { useParams, useHistory } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const initialMovie = {
  id: Math.random(Date.now()),
  title: '',
  director: '',
  metascore: null,
  stars: []
}


const UpdateForm = () => {

  const [editMovie, setEditMovie] = useState(initialMovie);

  const { movieList, updateMovie, setMovieList } = useContext(AppContext);
  //  using the useParams hook to gain access to the id parameter from the URL
  const { id } = useParams();
  console.log(id);

  //  using the useHistory hook to gain access to the history object in react-router
  let history = useHistory();

  //  useEffect that compares the id parameter exposed by useParams hook with the id parameter of the movie from props. When the parameters match, the movie is added to state.

  useEffect(() => {
    const editingMovie = movieList.find(movie => movie.id === Number(id));
    if (editingMovie) {
      setEditMovie(editingMovie);
    }
  }, [id, movieList ]);

  const changeHandler = e => {
    e.persist();
    let value = e.target.value;
    setEditMovie({
      ...editMovie,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateMovie(id, editMovie);
    setMovieList({
      ...movieList,
      editMovie
    })
    history.push("/");
  };

  return (
    <div className="update-form">
      <h2>Update Movie Info</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            className="update-input"
            type="text"
            name="title"
            onChange={changeHandler}
            placeholder="Title"
          />
        </label>

        <label htmlFor="director">
          <input
            className="update-input"
            type="text"
            name="director"
            onChange={changeHandler}
            placeholder="Director"
          />
        </label>

        <label htmlFor="metascore">
          <input
            className="update-input"
            type="number"
            name="metascore"
            onChange={changeHandler}
            placeholder="metascore"
          />
        </label>

        <label htmlFor="director">
          <input
            className="update-input"
            type="text"
            name="director"
            onChange={changeHandler}
            placeholder="Director"
          />
        </label>

        <button className="md-button">Update</button>
>>>>>>> Stashed changes
      </form>
    </div>
  );
};

export default UpdateForm;
