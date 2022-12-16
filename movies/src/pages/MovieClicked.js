import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movieclicked.css";

const movies_click =
  "https://api.themoviedb.org/3/movie/popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1";

function MovieClicked({ title }) {
  const [movieInfo, setMovieInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1`
      );
      const data = await result.json();
      console.log(data);
      setMovieInfo(data);
    };
    getMovie();
  }, []);
  return (
    <>
      <div className="movieclicked">
        <h2>{movieInfo.title}</h2>
        <img
          className="movieimageclicked"
          src={
            "https://www.themoviedb.org/t/p/w440_and_h660_face" +
            movieInfo.backdrop_path
          }
          alt={title}
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
