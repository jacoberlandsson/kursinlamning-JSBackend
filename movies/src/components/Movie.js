import React from "react";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function Movie({ title, backdrop_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img src={movieImages + backdrop_path} alt={title} />
    </div>
  );
}

export default Movie;
