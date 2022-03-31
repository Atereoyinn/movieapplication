import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AppBar from "./AppBar";
import MovieListHeading from "./MovieListHeading";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=91566cf2`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } 
  };

  useEffect(() =>{
    getMovieRequest();
  }, [searchValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div>
        <AppBar />
        <SearchBar Value={searchValue} onFormChange={handleChange} />
      </div>

      <div>
        <MovieListHeading Head="Movies" />
        <MovieList prop={movies} />
      </div>
    </>
  );
};

export default App;
