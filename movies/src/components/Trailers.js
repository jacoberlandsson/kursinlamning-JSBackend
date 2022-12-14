import React, { useState, useEffect } from "react";

const trailers =
  "https://api.themoviedb.org/3/movie/157336/videos?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US";

function Trailers({ title }) {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    fetch(trailers)
      .then((response) => response.json())
      .then((trailerdata) => {
        console.log(trailerdata);
        setTrailers(trailerdata.results);
      });
  }, []);
  return (
    <>
      <div>
        <iframe>
          src={trailers}
          title={title}
        </iframe>
      </div>
    </>
  );
}

export default Trailers;
