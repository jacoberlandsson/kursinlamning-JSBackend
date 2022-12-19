import React, { useState, useEffect } from "react";
import Trailers from "../components/Trailers";
import "./home.css";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

import { useParams } from "react-router-dom";
import MovieClicked from "./MovieClicked";

function Home() {
  const [recently, setRecently] = useState([]);

  useEffect(() => {
    const recentlyviewed = JSON.parse(localStorage.getItem("recentlyviewed"));

    if (recentlyviewed) {
      setRecently(recentlyviewed);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("recentlyviewed", JSON.stringify(items));
  };

  const addRecentMovie = (movie) => {
    const newRecently = [...recently, movie];
    setRecently(newRecently);
    saveToLocalStorage(newRecently);
    console.log("hellooo");
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <MovieList addRecentMovie={addRecentMovie} />
      </div>
    </>
  );
}
export default Home;
