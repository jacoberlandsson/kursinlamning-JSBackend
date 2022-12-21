import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movieclicked.css";
import { Link } from "react-router-dom";
import Recent from "../components/Recent";

function MovieClicked({ recently, setRecently }) {
  const [movieInfo, setMovieInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1`
      );
      const data = await result.json();
      setMovieInfo(data);
      addRecentMovie(data);
      console.log(recently);
      /*localStorage.setItem("recentlyviewed", JSON.stringify(data));*/
    };
    getMovie();
  }, []);

  useEffect(() => {
    const test = [];
    const recentlyviewed = [JSON.parse(localStorage.getItem("recentlyviewed"))];

    if (recentlyviewed) {
      setRecently(recentlyviewed);
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("recentlyviewed", JSON.stringify(data));
  };

  const addRecentMovie = (movie) => {
    // const newRecently = [movie, ...recently];
    const existingMovie = recently.find((recent) => recent.id === movie.id);
    if (existingMovie) return;

    setRecently([movie, ...recently].slice(0, 5));
    // saveToLocalStorage(newRecently);
  };

  return (
    <>
      <Link to={"/"} className="title">
        Back to Movies
      </Link>
      <div className="movieclicked" onClick={() => addRecentMovie()}>
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

      <div>
        <h2 className="recent-heading">Recently Viewed</h2>
        <div className="recent-container">
          {recently.length > 0 &&
            recently.map((movie) => <Recent key={movie.id} {...movie} />)}
        </div>
      </div>
    </>
  );
}

export default MovieClicked;
