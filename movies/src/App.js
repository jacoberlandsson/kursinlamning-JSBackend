import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trailers from "./components/Trailers";
import MovieClicked from "./pages/MovieClicked";
import MovieLoader from "./pages/MovieLoader";
import Movie from "./components/Movie";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieClicked />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
