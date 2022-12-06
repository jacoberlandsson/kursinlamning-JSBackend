import React, { useEffect, useState } from "react";
import "./App.css";
import MoviePopular from "./components/MoviePopular";

const movies_from_api =
  "https://api.themoviedb.org/3/movie/popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(movies_from_api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1 className="page-title">TMDB</h1>
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
      <h2>Popular right now</h2>
      <div className="moviecontainer">
        {movies.length > 0 &&
          movies.map((movie) => <MoviePopular key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}
export default App;
