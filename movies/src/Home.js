import React, { useEffect, useState } from "react";
import "./Home.css";
import MovieSection from "./components/MovieSection";
import Trailers from "./components/Trailers";

const movies_popular =
  "https://api.themoviedb.org/3/movie/popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1";

const search_api =
  "https://api.themoviedb.org/3/search/movie?api_key=1026eea38d091b7fb22916e8c7542406&query=";

function Home() {
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

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(search_api + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="App">
        <header>
          <img
            className="API-source"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          ></img>
          <form onSubmit={handleSearch}>
            <input
              className="searchmovie"
              type="text"
              placeholder="Search for a movie"
              value={searchTerm}
              onChange={handleChange}
            />
          </form>
        </header>
        <Trailers />
        <h2>Movies</h2>
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
    </>
  );
}
export default Home;
