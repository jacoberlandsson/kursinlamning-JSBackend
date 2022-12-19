import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movieclicked.css";
import { Link } from "react-router-dom";

function MovieClicked({}) {
  const [movieInfo, setMovieInfo] = useState({});
  const params = useParams();
  const [recently, setRecently] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1`
      );
      const data = await result.json();
      console.log(data);
      setMovieInfo(data);
      localStorage.setItem("recentlyviewed", JSON.stringify(data));
    };
    getMovie();
  }, []);

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
      <Link to={"/"} className="title">
        Back to Movies
      </Link>
      <div className="movieclicked">
        <h2>{movieInfo.title}</h2>
        <img
          className="movieimageclicked"
          src={
            "https://www.themoviedb.org/t/p/w440_and_h660_face" +
            movieInfo.backdrop_path
          }
          alt={movieInfo.title}
        />
        <h3>Storyline</h3>
        <p>{movieInfo.overview}</p>
        <p>Release date: {movieInfo.release_date}</p>
        <p>Popularity: {movieInfo.popularity}</p>
      </div>
    </>
  );
}

export default MovieClicked;
