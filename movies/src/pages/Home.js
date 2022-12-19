import React, { useState, useEffect } from "react";
import Trailers from "../components/Trailers";
import "./home.css";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import RecentMovies from "../components/RecentMovies";
import { useParams } from "react-router-dom";
import MovieClicked from "./MovieClicked";

function Home() {
  const [recently, setRecently] = useState([]);

  return (
    <>
      <div className="App">
        <Navbar />
        <MovieList />
      </div>
    </>
  );
}
export default Home;
