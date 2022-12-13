import React from "react";

const clickedIMG = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function Movie({ title, backdrop_path, overview }) {
  return (
    <article>
      <h2>{title}</h2>
      <img src={clickedIMG + backdrop_path}> </img>
      <p>{overview}</p>
    </article>
  );
}

export default Movie;
