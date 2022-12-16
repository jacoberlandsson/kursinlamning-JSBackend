import React from "react";
import { Link } from "react-router-dom";
import "./movie.css";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function MovieSection({
  title,
  poster_path,
  overview,
  vote_average,
  video,
  id,
  movie,
}) {
  return (
    <>
      <div className="movie">
        <img
          className="movieimage"
          src={movieImages + poster_path}
          alt={title}
        />
        <Link to={`title/${id}`} className="title">
          {title + " " + vote_average}{" "}
        </Link>
      </div>
    </>
  );
}

export default MovieSection;
