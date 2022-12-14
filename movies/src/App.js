import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trailers from "./components/Trailers";
import MovieClicked from "./pages/MovieClicked";
import MovieLoader from "./pages/MovieLoader";
import Movie from "./components/Movie";
import MovieSearch from "./components/MovieSearch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="moviesearch"
            element={
              <Navbar>
                {" "}
                <MovieSearch />{" "}
              </Navbar>
            }
          />
          <Route path="/*" element={<h1> Error </h1>}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
