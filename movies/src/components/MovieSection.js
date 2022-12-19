import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./movie.css";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function MovieSection({ title, poster_path, vote_average, id }) {
  const [recently, setRecently] = useState([]);

  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recently), [
      recently,
    ]);
  });

  const saveRecentlyLocalStorage = (items) => {
    localStorage.setItem("recentlyViewed", JSON.stringify(items), [recently]);
  };

  const AddRecently = (movie) => {
    const newRecently = [...recently, movie];
    console.log("leeeets goooooo");
    setRecently([newRecently]);
    saveRecentlyLocalStorage(newRecently);
  };
  return (
    <>
      <div className="movie">
        <img
          className="movieimage"
          src={movieImages + poster_path}
          alt={title}
        />
        <Link onClick={AddRecently} to={`title/${id}`} className="title">
          {title + " " + vote_average}{" "}
        </Link>
      </div>
    </>
  );
}

export default MovieSection;
