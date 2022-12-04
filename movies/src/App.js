import React, { useEffect, useState } from "react";
import "./App.css";
import MoviePopular from "./components/MoviePopular";

const movies_from_api =
  "https://api.themoviedb.org/3/movie/popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(movies_from_api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>TMDB</h1>
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
