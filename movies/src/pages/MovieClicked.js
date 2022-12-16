import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function MovieClicked({ title, backdrop_path }) {
  const [movieInfo, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getMovie();
    window.scrollTo(0, 0);
  }, []);

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="moviecontainer">
      <Movie />
    </div>
  );
}

export default MovieClicked;
