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
      </form>
    </div>
  );
};

export default UpdateForm;
