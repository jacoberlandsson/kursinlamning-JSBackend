import React from "react";
import "./recentlist.css";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function Recent({ title, poster_path }) {
  return (
    <div className="recentlist">
      <h3>{title}</h3>
      <img src={movieImages + poster_path} />
    </div>
  );
}

export default Recent;
