import React from "react";
import "./movie.css";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function MoviePopular({ title, poster_path, overview, vote_average }) {
  return (
    <div>
      <div className="movie">
        <img
          className="movieimage"
          src={movieImages + poster_path}
          alt={title}
        />
        <h3 className="title">{title + " " + vote_average}</h3>
      </div>
    </div>
  );
}

export default MoviePopular;
