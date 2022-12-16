import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MovieClicked from "./pages/MovieClicked";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Navbar />} />
        <Route path="/title/:id" element={<MovieClicked />} />
      </Routes>
    </>
  );
}
export default App;
