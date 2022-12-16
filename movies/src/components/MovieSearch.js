import React from "react";
import { Link } from "react-router-dom";
import "./movie.css";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function MovieSearch({
  title,
  poster_path,
  overview,
  vote_average,
  video,
  id,
}) {
  return (
    <>
      <div>
        <div className="moviesearch">
          <img
            className="movieimage"
            src={movieImages + poster_path}
            alt={title}
          />
          <h3 className="title">{title + " " + vote_average}</h3>
        </div>
      </div>
    </>
  );
}

export default MovieSearch;