import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import LoadMovies from "./components/LoadMovies";
const searchapi =
  "https://api.themoviedb.org/3/search/movie?api_key=1026eea38d091b7fb22916e8c7542406&query=";
const movieImage = "https://www.themoviedb.org/t/p/w440_and_h660_face";

const SearchMovie = (title, poster_path) => {
  const { id } = useParams();
  const [loadMovies, setLoadMovies] = React.useState(false);
  const [moviesearch, setMovieSearch] = React.useState(null);

  React.useEffect(() => {
    setLoadMovies(false);
    async function getMovies() {
      try {
        const response = await fetch(`${searchapi}${id}`);
        const data = await response.json();
        if (data.moviesearch) {
          const newMovieSearch = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setMovieSearch(newMovieSearch);
        } else {
          setMovieSearch(null);
        }
      } catch (error) {
        console.log(error);
        setLoadMovies(false);
      }
    }

    getMovies();
  }, [id]);
  if (loadMovies) {
    return <LoadMovies />;
  }
  if (!moviesearch) {
    return (
      <h2 className="section-title">
        No movies matched your search, try another keyword
      </h2>
    );
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    moviesearch;

  return (
    <section>
      <Link to="/" className="btn btn-primary">
        {" "}
        Return back home
      </Link>
      <h2>{title}</h2>
      <div className="drink">
        <img src={movieImage + poster_path} alt={title} />
      </div>
    </section>
  );
};
