import React, { useState } from "react";
import Recent from "./Recent";

function RecentList(id, title, poster_path, vote_average) {
  return (
    <>
      <div className="movie">
        <img className="movieimage" src={poster_path} alt={title} />
        <h3 to={`title/${id}`} className="title">
          {title + " " + vote_average}{" "}
        </h3>
      </div>
    </>
  );
}

export default RecentList;
