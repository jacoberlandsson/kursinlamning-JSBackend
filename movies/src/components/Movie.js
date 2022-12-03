import React from "react";

const movieImages =
  "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US";

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img src={movieImages + poster_path} alt={title} />
    </div>
  );
}

export default Movie;
