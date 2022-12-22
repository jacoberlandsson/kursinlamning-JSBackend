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
      <div className="moviecontainersearch">
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
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieSearch;
