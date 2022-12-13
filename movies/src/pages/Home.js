import React, { useState } from "react";
import Trailers from "../components/Trailers";
import "./home.css";
import Navbar from "./Navbar";
import MovieList from "../components/MovieList";

const search_api =
  "https://api.themoviedb.org/3/search/movie?api_key=1026eea38d091b7fb22916e8c7542406&query=";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <Trailers />
        <MovieList />
      </div>
    </>
  );
}
export default Home;
