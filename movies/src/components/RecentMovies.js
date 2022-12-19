import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecentList from "./RecentList";

function RecentMovies({ id }) {
  const [recently, setRecently] = useState([{}]);
  const params = useParams();

  useEffect(() => {
    const getRecently = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1 + ${id}`
      );
      const data = await result.json();
      console.log(data);
      setRecently(data);
    };
    getRecently();
  }, []);

  return (
    <>
      <div className="movie">
        <img
          className="movieimage"
          src={
            "https://www.themoviedb.org/t/p/w440_and_h660_face" +
            recently.poster_path
          }
          alt={recently.title}
        />
        <h3 className="title">
          {recently.title + " " + recently.vote_average}{" "}
        </h3>
      </div>
    </>
  );
}

export default RecentMovies;
