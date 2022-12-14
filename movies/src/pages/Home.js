import React from "react";
import Trailers from "../components/Trailers";
import "./home.css";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

function Home() {
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
