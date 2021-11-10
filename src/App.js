import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=1`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=`;
function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchMovieData(FEATURED_API);
  }, []);

  const fetchMovieData = (apiadress) => {
    fetch(apiadress)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovieData(`${SEARCH_API}${searchText}`);
    setSearchText("");
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <header className="header">
        <h2>Movie Database</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Enter movie name..."
            onChange={handleChange}
            value={searchText}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
