import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import { AppContext } from '../contexts/AppContext' 


const SavedList = () => {
  
  const props = useContext(AppContext)
  console.log('props in SavedList component: ', props)

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.savedList.map(movie => {
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default SavedList