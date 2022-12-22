import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./movie.css";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function MovieSection({ title, poster_path, vote_average, id, props, movie }) {
  const [recently, setRecently] = useState([]);

  return (
    <>
      <div className="movie">
        <Link
          /* onClick={() => addRecentMovie(movie)}*/
          to={`title/${id}`}
          className="title"
        >
          <img
            className="movieimage"
            src={movieImages + poster_path}
            alt={title}
          />
          {title + " " + vote_average}{" "}
        </Link>
      </div>
    </>
  );
}

export default MovieSection;
