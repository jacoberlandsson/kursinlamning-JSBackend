import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";

const movies_from_api =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1";

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

  return <div>{movies.length > 0 && movies.map((movie) => <Movie />)}</div>;
}
export default App;
