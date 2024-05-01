import { useState, useEffect } from 'react';

const KEY = "56db0cf5";

export function useMovies(query) {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    
    const controller = new AbortController(); //this is a browser API as well as the fetch function. We need this in the api querry to avoid sending query on every symbol that a user insert during typing the movie name.

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("something went wrong");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (error.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        //this block of code willbe always executed
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    
    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return {movies, isLoading, error}
}
