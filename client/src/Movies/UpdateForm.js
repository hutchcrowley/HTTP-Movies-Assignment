import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";

const UpdateForm = props => {
  const history = useHistory();

  console.log("Props in update form: ", props);

  const id = Number(props.match.params.id);

  console.log("ID: ", id);

  const [newMovie, setNewMovie] = useState();

  const updateMovie = id => {
    axios
      .put(`http://localhost:5000/movies/${id}`, newMovie)
      .then(res => {
        console.log("Request returned from API PUT request: ", res.data);
        setNewMovie(res.data);
      })
      .catch(err => {
        console.log("ERROR: data not sent to API via PUT: ", err);
      });
  };``

  const handleChange = e => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value
    });
    console.log(newMovie);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
};
