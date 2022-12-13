import React, { useState, useEffect } from "react";
import MovieSection from "./MovieSection";

const movies_popular =
  "https://api.themoviedb.org/3/movie/popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(movies_popular)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <div className="scroll">
        <button className="scroll-button-left" onClick="scrollHorizontally(1)">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="moviecontainer">
          {movies.length > 0 &&
            movies.map((movie) => <MovieSection key={movie.id} {...movie} />)}
        </div>
        <button className="scroll-button-right">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default MovieList;
