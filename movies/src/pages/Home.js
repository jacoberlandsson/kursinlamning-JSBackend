import React, { useState, useEffect } from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

import { useParams } from "react-router-dom";
import MovieClicked from "./MovieClicked";

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
