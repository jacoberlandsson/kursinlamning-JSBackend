import React, { useState, useEffect } from "react";
import MovieSection from "./MovieSection";
import MovieSectionTop from "./MovieSectionTop";

const movies_popular =
  "https://api.themoviedb.org/3/movie/popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1";

const movies_top =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [moviestop, setMoviesTop] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(movies_popular)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(movies_top)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMoviesTop(data.results);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Popular</h2>
        <div className="scroll">
          <button
            className="scroll-button-left"
            onClick="scrollHorizontally(1)"
          >
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

      <div>
        <h2>Top rated</h2>
        <div className="moviecontainer">
          {moviestop.length > 0 &&
            moviestop.map((movie) => (
              <MovieSectionTop key={movie.id} {...movie} />
            ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;
