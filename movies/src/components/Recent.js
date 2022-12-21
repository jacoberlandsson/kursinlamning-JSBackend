import React from "react";
import "./recentlist.css";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function Recent({ title, poster_path }) {
  return (
    <>
      <div className="recentlist">
        <div className="recentmovie">
          <h3 className="recent-title">{title}</h3>
          <img className="recentimg" src={movieImages + poster_path} />
        </div>
      </div>
    </>
  );
}

export default Recent;
