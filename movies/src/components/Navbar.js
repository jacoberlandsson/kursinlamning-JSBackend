import React, { useState } from "react";
import MovieSearch from "./MovieSearch";

const search_api =
  "https://api.themoviedb.org/3/search/movie?api_key=1026eea38d091b7fb22916e8c7542406&query=";

function Navbar() {
  const [searchmovie, setSearchMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(search_api + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearchMovie(data.results);
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
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
      <div className="moviecontainer">
        {searchmovie.length > 0 &&
          searchmovie.map((movie) => <MovieSearch key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default Navbar;
