import React, { useState, useEffect } from "react";

const popular_movies =
  "https://api.themoviedb.org/3/movie/popular?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1";

function MovieLoader({ children }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(popular_movies)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results);
      });
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { movie });
        }

        return child;
      })}
    </>
  );
}

export default MovieLoader;
